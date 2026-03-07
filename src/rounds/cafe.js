// ============================================
// FRENCH FAST — CAFÉ ROUND (MVP)
// Round 7 — Le Café
// ============================================

import { COUNTER_ITEMS, ORDERS, ARCHETYPES, WAITER_PHRASES } from '../vocab/cafe-vocab.js';

// ---- CONSTANTS ----

const GAME_START_SECS   = 7 * 3600;          // 7:00 AM in seconds
const GAME_END_SECS     = 9.5 * 3600;        // 9:30 AM in seconds
const GAME_RANGE_SECS   = GAME_END_SECS - GAME_START_SECS; // 9000 game-secs
const REAL_DURATION_MS  = 8 * 60 * 1000;     // 8 real minutes
const TIME_SCALE        = GAME_RANGE_SECS / (REAL_DURATION_MS / 1000); // ~18.75

// Rush starts at 2 real minutes (7:30 game)
const RUSH_START_MS = 2 * 60 * 1000;
// Waiter arrives at 3 real minutes
const WAITER_ARRIVE_MS = 3 * 60 * 1000;

const MAX_QUEUE = 3;

// Happiness → heart emoji + color
const HEART_STATES = [
  { min: 7,  emoji: '❤️',  color: '#e53935', label: 'happy'   },
  { min: 4,  emoji: '🧡',  color: '#fb8c00', label: 'content' },
  { min: 2,  emoji: '💛',  color: '#fdd835', label: 'neutral' },
  { min: 0,  emoji: '🖤',  color: '#616161', label: 'unhappy' },
  { min: -99,emoji: '💔',  color: '#b71c1c', label: 'cracked' },
];

// ---- STATE ----

let cafeEl = null;        // root element
let speakFn = null;       // speakFrench from main.js
let onCompleteFn = null;  // called when round ends

let gameRunning   = false;
let startTime     = 0;
let elapsedMs     = 0;
let animFrameId   = null;
let lastTimestamp = 0;

// Customers
let customers    = [];   // active customer objects
let customerId   = 0;
let spawnQueue   = [];   // scheduled spawn times (ms)
let spawnIdx     = 0;

// Order assembly
let assembledItems = [];

// Economy
let money          = 0;
let happyPoints    = 0;
let customersHappy = 0;
let customersAngry = 0;

// Waiter
let waiterActive   = false;
let waiterEl       = null;
let radialOpen     = false;

// Timers
let declineTimers = [];
let wordsMastered = {};   // id → correct serve count

// ---- INIT ----

export function initCafeRound({ speakFrench, gameArea, onComplete }) {
  speakFn      = speakFrench;
  onCompleteFn = onComplete || (() => {});

  buildDOM(gameArea);
  buildSpawnSchedule();

  startTime     = performance.now();
  lastTimestamp = startTime;
  gameRunning   = true;

  animFrameId = requestAnimationFrame(loop);

  // Kick off first customer immediately so player isn't staring at empty café
  setTimeout(() => spawnCustomer(), 1500);
}

export function cleanupCafeRound() {
  gameRunning = false;
  if (animFrameId) cancelAnimationFrame(animFrameId);
  declineTimers.forEach(t => clearInterval(t));
  declineTimers = [];
  if (cafeEl) cafeEl.remove();
  cafeEl = null;
  customers = [];
  assembledItems = [];
  spawnQueue = [];
  spawnIdx = 0;
  waiterActive = false;
  radialOpen = false;
}

// ---- DOM BUILDER ----

function buildDOM(gameArea) {
  cafeEl = document.createElement('div');
  cafeEl.id = 'cafe-round';
  cafeEl.innerHTML = `
    <div id="cafe-hud">
      <div id="cafe-money">€ 0</div>
      <div id="cafe-clock-display">7:00 AM</div>
      <div id="cafe-happy-score">♥ 0</div>
    </div>

    <div id="cafe-scene">
      <div id="cafe-queue-area"></div>
      <div id="cafe-counter-bar">
        <div id="cafe-counter-label">COMPTOIR</div>
      </div>
    </div>

    <div id="cafe-order-tray">
      <div id="cafe-tray-items"></div>
      <button id="cafe-serve-btn" disabled>Servir →</button>
      <button id="cafe-clear-btn">✕</button>
    </div>

    <div id="cafe-serve-bar"></div>
  `;

  // Build serve buttons
  const serveBar = cafeEl.querySelector('#cafe-serve-bar');
  COUNTER_ITEMS.forEach(item => {
    const btn = document.createElement('button');
    btn.className  = 'cafe-counter-item';
    btn.dataset.id = item.id;
    btn.innerHTML  = `<span class="item-emoji">${item.emoji}</span><span class="item-label">${item.label}</span>`;
    btn.addEventListener('click', () => onCounterItemClick(item.id));
    serveBar.appendChild(btn);
  });

  // Serve / clear buttons
  cafeEl.querySelector('#cafe-serve-btn').addEventListener('click', onServe);
  cafeEl.querySelector('#cafe-clear-btn').addEventListener('click', clearTray);

  gameArea.appendChild(cafeEl);
}

// ---- GAME LOOP ----

function loop(timestamp) {
  if (!gameRunning) return;

  const delta = timestamp - lastTimestamp;
  lastTimestamp = timestamp;
  elapsedMs += delta;

  updateClock();
  checkSpawns();
  checkWaiterArrival();
  updateCustomerDecay(delta);

  if (elapsedMs >= REAL_DURATION_MS) {
    endRound();
    return;
  }

  animFrameId = requestAnimationFrame(loop);
}

// ---- CLOCK ----

function updateClock() {
  const gameSeconds = GAME_START_SECS + (elapsedMs / 1000) * TIME_SCALE;
  const h = Math.floor(gameSeconds / 3600);
  const m = Math.floor((gameSeconds % 3600) / 60);
  const ampm = h < 12 ? 'AM' : 'PM';
  const display12 = h > 12 ? h - 12 : h;
  const mm = String(m).padStart(2, '0');
  const el = cafeEl?.querySelector('#cafe-clock-display');
  if (el) el.textContent = `${display12}:${mm} ${ampm}`;
}

// ---- SPAWN SCHEDULE ----

function buildSpawnSchedule() {
  spawnQueue = [];

  // Pre-rush: trickle from t=1.5s, one every 18s (5 customers)
  for (let i = 0; i < 5; i++) {
    spawnQueue.push(1500 + i * 18000);
  }

  // Rush: from RUSH_START_MS, accelerate from 12s down to 7s intervals
  let t = RUSH_START_MS;
  let interval = 12000;
  while (t < REAL_DURATION_MS - 15000) {
    spawnQueue.push(t);
    interval = Math.max(7000, interval - 300); // ramp up pressure
    t += interval;
  }

  spawnQueue.sort((a, b) => a - b);
}

function checkSpawns() {
  while (spawnIdx < spawnQueue.length && elapsedMs >= spawnQueue[spawnIdx]) {
    spawnIdx++;
    if (customers.length < MAX_QUEUE) {
      spawnCustomer();
    }
    // If queue full, customer just doesn't come (they saw the queue and left)
  }
}

// ---- CUSTOMER SPAWN ----

function spawnCustomer() {
  if (!cafeEl || !gameRunning) return;

  const archetypeKeys = Object.keys(ARCHETYPES);

  // Bias archetypes by phase
  let pool;
  if (elapsedMs < RUSH_START_MS) {
    pool = ['regular', 'commuter', 'tourist'];
  } else {
    pool = ['commuter', 'commuter', 'regular', 'tourist', 'bad_day'];
  }
  const archKey  = pool[Math.floor(Math.random() * pool.length)];
  const archetype = ARCHETYPES[archKey];

  // Pick order by complexity based on how many customers have been served
  const served = customersHappy + customersAngry;
  let maxComplexity = 1;
  if (served >= 5)  maxComplexity = 2;
  if (served >= 12) maxComplexity = 3;

  const validOrders = ORDERS.filter(o => o.complexity <= maxComplexity);
  const order = validOrders[Math.floor(Math.random() * validOrders.length)];

  const c = {
    id:          customerId++,
    archetype,
    order,
    happiness:   archetype.entryHeart,
    patience:    archetype.patienceSecs * 1000, // in ms
    patienceMax: archetype.patienceSecs * 1000,
    state:       'waiting',   // waiting | ordering | served | leaving
    orderSpoken: false,
    el:          null,
    declineTimer: null,
    waitingSinceMs: elapsedMs,
  };

  c.el = buildCustomerEl(c);
  cafeEl.querySelector('#cafe-queue-area').appendChild(c.el);
  customers.push(c);

  repositionCustomers();

  // Speak order after a brief walk-in delay
  const delay = archetype.speedClass === 'fast' ? 800
              : archetype.speedClass === 'slow' ? 1800 : 1200;

  setTimeout(() => {
    if (!c.el || c.state === 'leaving') return;
    c.orderSpoken = true;
    speakFn(c.order.tts);
    showSpeechBubble(c, c.order.display);

    // If archetype has gesture and order has a gesture hint, show it
    if (archetype.gestureEnabled && c.order.gesture) {
      showGestureHint(c, c.order.gesture);
    }

    startDeclineTimer(c);
  }, delay);
}

function buildCustomerEl(c) {
  const el = document.createElement('div');
  el.className = `cafe-customer speed-${c.archetype.speedClass}`;
  el.dataset.id = c.id;
  el.innerHTML = `
    <div class="customer-heart">${heartEmoji(c.happiness)}</div>
    <div class="customer-emoji">${c.archetype.emoji}</div>
    <div class="customer-patience-bar"><div class="patience-fill"></div></div>
    <div class="customer-bubble" style="display:none"></div>
    <div class="customer-gesture" style="display:none"></div>
  `;

  // Click customer to re-speak order
  el.querySelector('.customer-emoji').addEventListener('click', () => {
    if (c.orderSpoken && c.state === 'waiting') {
      speakFn(c.order.tts);
    }
  });

  return el;
}

function repositionCustomers() {
  customers.forEach((c, i) => {
    if (!c.el) return;
    const pct = 20 + i * 28; // spread horizontally
    c.el.style.left = `${pct}%`;
  });
}

// ---- HAPPINESS & DECLINE ----

function heartEmoji(happiness) {
  for (const s of HEART_STATES) {
    if (happiness >= s.min) return s.emoji;
  }
  return '💔';
}

function updateHeartEl(c) {
  const heartEl = c.el?.querySelector('.customer-heart');
  if (heartEl) heartEl.textContent = heartEmoji(c.happiness);
}

function changeHappiness(c, delta) {
  c.happiness = Math.min(10, Math.max(-2, c.happiness + delta));
  updateHeartEl(c);
}

function startDeclineTimer(c) {
  // Drain patience bar and trigger -1 happiness every 5 real seconds of waiting
  const tick = 5000 / c.archetype.declineMultiplier;

  c.declineTimer = setInterval(() => {
    if (!gameRunning || c.state !== 'waiting') {
      clearInterval(c.declineTimer);
      return;
    }
    changeHappiness(c, -1);

    if (c.happiness <= -2) {
      customerLeaves(c, false);
    }
  }, tick);

  declineTimers.push(c.declineTimer);
}

function updateCustomerDecay(delta) {
  customers.forEach(c => {
    if (c.state !== 'waiting' || !c.orderSpoken) return;
    c.patience -= delta * c.archetype.declineMultiplier;
    const pct = Math.max(0, (c.patience / c.patienceMax) * 100);

    const fill = c.el?.querySelector('.patience-fill');
    if (fill) {
      fill.style.width = `${pct}%`;
      fill.style.background = pct > 50 ? '#4caf50'
                             : pct > 20 ? '#ff9800'
                             : '#f44336';
    }

    if (c.patience <= 0) {
      customerLeaves(c, false);
    }
  });
}

// ---- SPEECH BUBBLE ----

function showSpeechBubble(c, text) {
  const bubble = c.el?.querySelector('.customer-bubble');
  if (!bubble) return;
  bubble.textContent = text;
  bubble.style.display = 'block';
  bubble.style.animation = 'bubblePop 0.3s ease';
}

function hideSpeechBubble(c) {
  const bubble = c.el?.querySelector('.customer-bubble');
  if (bubble) bubble.style.display = 'none';
}

// ---- GESTURE HINT ----

function showGestureHint(c, itemId) {
  const item = COUNTER_ITEMS.find(i => i.id === itemId);
  if (!item) return;
  const gestureEl = c.el?.querySelector('.customer-gesture');
  if (!gestureEl) return;
  gestureEl.textContent = item.emoji;
  gestureEl.style.display = 'block';
  // Fade out after 2s
  setTimeout(() => { if (gestureEl) gestureEl.style.display = 'none'; }, 2000);
}

// ---- COUNTER INTERACTION ----

function onCounterItemClick(itemId) {
  if (!customers.length) return;
  const activeCustomer = customers.find(c => c.state === 'waiting' && c.orderSpoken);
  if (!activeCustomer) return;

  assembledItems.push(itemId);
  renderTray();

  // Flash the counter button
  const btn = cafeEl.querySelector(`.cafe-counter-item[data-id="${itemId}"]`);
  if (btn) {
    btn.classList.add('flash');
    setTimeout(() => btn.classList.remove('flash'), 300);
  }
}

function renderTray() {
  const trayEl = cafeEl?.querySelector('#cafe-tray-items');
  const serveBtn = cafeEl?.querySelector('#cafe-serve-btn');
  if (!trayEl || !serveBtn) return;

  trayEl.innerHTML = assembledItems.map(id => {
    const item = COUNTER_ITEMS.find(i => i.id === id);
    return `<span class="tray-item">${item ? item.emoji : '?'}</span>`;
  }).join('');

  serveBtn.disabled = assembledItems.length === 0;
}

function clearTray() {
  assembledItems = [];
  renderTray();
}

// ---- SERVING ----

function onServe() {
  if (!assembledItems.length) return;

  const c = customers.find(c => c.state === 'waiting' && c.orderSpoken);
  if (!c) { clearTray(); return; }

  const correct = checkOrder(c.order, assembledItems);

  if (correct) {
    handleCorrectServe(c);
  } else {
    handleWrongServe(c);
  }

  clearTray();
}

function checkOrder(order, assembled) {
  // Sort both arrays and compare
  const required = [...order.items].sort();
  const given    = [...assembled].sort();
  if (required.length !== given.length) return false;
  return required.every((item, i) => item === given[i]);
}

function handleCorrectServe(c) {
  if (c.declineTimer) clearInterval(c.declineTimer);
  c.state = 'served';

  changeHappiness(c, 3); // coffee = +3
  if (c.order.items.includes('croissant')) changeHappiness(c, 2); // pastry bonus

  // Track word mastery
  wordsMastered[c.order.id] = (wordsMastered[c.order.id] || 0) + 1;

  // Revenue
  money += c.order.revenue;
  updateMoneyDisplay();

  // Visual feedback
  showServeResult(c, true);
  hideSpeechBubble(c);

  // Customer consumes then leaves happy
  setTimeout(() => customerLeaves(c, true), 2500);
}

function handleWrongServe(c) {
  changeHappiness(c, -2);

  // Wrong serve — customer shows confusion
  showServeResult(c, false);

  // Repeat order slower
  setTimeout(() => {
    if (c.state === 'waiting') {
      speakFn(c.order.tts);
    }
  }, 800);
}

function showServeResult(c, success) {
  const el = c.el;
  if (!el) return;
  el.classList.add(success ? 'serve-success' : 'serve-wrong');
  setTimeout(() => {
    el.classList.remove('serve-success', 'serve-wrong');
  }, 600);
}

// ---- CUSTOMER LEAVING ----

function customerLeaves(c, happy) {
  if (c.state === 'leaving') return;
  c.state = 'leaving';
  if (c.declineTimer) clearInterval(c.declineTimer);
  hideSpeechBubble(c);

  // On angry leave — customer repeats order slowly as they go
  if (!happy && c.orderSpoken) {
    speakFn(c.order.tts);
  }

  // Happy exit = pay + happy points
  if (happy && c.happiness > 0) {
    customersHappy++;
    const pts = Math.min(10, c.happiness + 2);
    happyPoints += pts;
    updateHappyDisplay();
    playExitAnimation(c, true);
  } else {
    customersAngry++;
    playExitAnimation(c, false);
  }

  // Remove customer after animation
  setTimeout(() => removeCustomer(c), 800);
}

function playExitAnimation(c, happy) {
  if (!c.el) return;
  c.el.classList.add(happy ? 'exit-happy' : 'exit-angry');
}

function removeCustomer(c) {
  if (c.el?.parentNode) c.el.remove();
  customers = customers.filter(x => x.id !== c.id);
  repositionCustomers();
}

// ---- WAITER ----

function checkWaiterArrival() {
  if (waiterActive || elapsedMs < WAITER_ARRIVE_MS) return;
  waiterActive = true;
  spawnWaiter();
}

function spawnWaiter() {
  waiterEl = document.createElement('div');
  waiterEl.id = 'cafe-waiter';
  waiterEl.innerHTML = `
    <div class="waiter-emoji">🧑‍🍳</div>
    <div class="waiter-label">Un serveur est arrivé!</div>
    <div id="cafe-radial" style="display:none"></div>
  `;
  waiterEl.querySelector('.waiter-emoji').addEventListener('click', toggleRadial);
  cafeEl.querySelector('#cafe-scene').appendChild(waiterEl);

  // Announcement
  setTimeout(() => {
    const label = waiterEl?.querySelector('.waiter-label');
    if (label) label.style.opacity = '0';
  }, 3000);
}

function toggleRadial() {
  radialOpen = !radialOpen;
  const radial = waiterEl?.querySelector('#cafe-radial');
  if (!radial) return;

  if (radialOpen) {
    radial.style.display = 'flex';
    radial.innerHTML = '';
    WAITER_PHRASES.forEach((phrase, i) => {
      const btn = document.createElement('button');
      btn.className   = 'radial-option';
      btn.dataset.idx = i;
      btn.textContent = phrase.fr;
      btn.addEventListener('click', () => {
        onRadialSelect(phrase);
        toggleRadial();
      });
      radial.appendChild(btn);
    });
  } else {
    radial.style.display = 'none';
  }
}

function onRadialSelect(phrase) {
  if (phrase.action === 'water') {
    // Bring water to the first waiting customer
    const c = customers.find(c => c.state === 'waiting');
    if (c) {
      changeHappiness(c, 1);
      showFloatingText(c.el, '+1 💧');
    }
  }
  // Other actions (counter, stay) are cosmetic in MVP
}

// ---- UI HELPERS ----

function updateMoneyDisplay() {
  const el = cafeEl?.querySelector('#cafe-money');
  if (el) el.textContent = `€ ${money}`;
}

function updateHappyDisplay() {
  const el = cafeEl?.querySelector('#cafe-happy-score');
  if (el) el.textContent = `♥ ${happyPoints}`;
}

function showFloatingText(parentEl, text) {
  if (!parentEl) return;
  const div = document.createElement('div');
  div.className   = 'floating-text';
  div.textContent = text;
  parentEl.appendChild(div);
  setTimeout(() => div.remove(), 1200);
}

// ---- END OF ROUND ----

function endRound() {
  gameRunning = false;

  // Compute mastered words (served correctly 3+ times)
  const mastered = Object.entries(wordsMastered)
    .filter(([, count]) => count >= 3)
    .map(([id]) => ORDERS.find(o => o.id === id)?.display)
    .filter(Boolean);

  showSummary(mastered);
}

function showSummary(masteredWords) {
  const overlay = document.createElement('div');
  overlay.id = 'cafe-summary';
  overlay.innerHTML = `
    <div id="cafe-summary-box">
      <h2>La Matinée est Finie ☕</h2>
      <div class="summary-row">🙂 Clients heureux : <strong>${customersHappy}</strong></div>
      <div class="summary-row">😤 Clients partis : <strong>${customersAngry}</strong></div>
      <div class="summary-row">💶 Recettes : <strong>€${money}</strong></div>
      <div class="summary-row">♥ Points bonheur : <strong>${happyPoints}</strong></div>
      ${masteredWords.length ? `
        <div class="summary-mastered">
          <div class="mastered-label">Mots appris aujourd'hui :</div>
          <div class="mastered-words">${masteredWords.map(w => `<span>${w}</span>`).join('')}</div>
        </div>
      ` : ''}
      <button id="cafe-replay-btn">Rejouer</button>
      <button id="cafe-continue-btn">Continuer →</button>
    </div>
  `;

  cafeEl.appendChild(overlay);

  overlay.querySelector('#cafe-replay-btn').addEventListener('click', () => {
    cleanupCafeRound();
    // Re-init will be handled by main.js round restart
    onCompleteFn('replay');
  });

  overlay.querySelector('#cafe-continue-btn').addEventListener('click', () => {
    cleanupCafeRound();
    onCompleteFn('continue');
  });
}
