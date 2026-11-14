// ============================================
// DRIFT — calm tile motion for Rounds 1 and 2
// ============================================
// Replaces the ricochet physics on the two picture-matching rounds. Tiles float
// like things on still water: slow, wandering, never bouncing. Three rules
// keep the round easy to play:
//   1. Tiles cruise slowly and steer around each other instead of colliding.
//   2. The tile under the pointer eases to a stop, so the target holds still.
//   3. Once one tile is picked, the whole board slows so the second
//      click is unhurried.
// All speeds are px/second; dt is seconds.

export const DRIFT = {
    cruise: 22,         // cruising speed at the Medium setting
    variance: 0.3,      // per-tile spread around cruise (±30%)
    turnRate: 0.5,      // how fast a tile's heading may wander (rad/s)
    steer: 1.8,         // how quickly velocity follows heading (1/s)
    gap: 20,            // clear water tiles try to keep between them (px)
    push: 5,            // strength of the keep-apart nudge (1/s)
    wallMargin: 64,     // distance from an edge where tiles start turning back
    edgePad: 12,        // tiles never get closer to an edge than this
    focusTempo: 0.28,   // board tempo while one tile is selected
    tempoEase: 5,       // how fast tempo changes settle (1/s)
    bob: 3,             // visual bob amplitude (px)
};

const reducedMotion = typeof matchMedia === 'function'
    && matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initDriftCard(card) {
    card.heading = Math.random() * Math.PI * 2;
    card.turn = 0;
    card.pace = 1 + (Math.random() * 2 - 1) * DRIFT.variance;
    card.tempo = 0;                       // eases up from rest after spawning
    card.bobPhase = Math.random() * Math.PI * 2;
    card.bobY = 0;
    card.vx = 0;
    card.vy = 0;
}

// Pick the emptiest spot on the board for a new tile of size w×h.
export function findOpenSpot(cards, bounds, w, h) {
    const pad = DRIFT.edgePad + 8;
    const spanX = Math.max(1, bounds.w - w - pad * 2);
    const spanY = Math.max(1, bounds.h - h - pad * 2);
    let best = null;
    let bestScore = -Infinity;
    for (let i = 0; i < 40; i++) {
        const x = pad + Math.random() * spanX;
        const y = pad + Math.random() * spanY;
        const cx = x + w / 2;
        const cy = y + h / 2;
        let nearest = Infinity;
        for (const c of cards) {
            const dx = Math.max(0, Math.abs(cx - (c.x + c.width / 2)) - (w + c.width) / 2);
            const dy = Math.max(0, Math.abs(cy - (c.y + c.height / 2)) - (h + c.height) / 2);
            const d = Math.hypot(dx, dy);
            if (d < nearest) nearest = d;
        }
        if (nearest > bestScore) {
            bestScore = nearest;
            best = { x, y };
        }
    }
    return best || { x: pad, y: pad };
}

function turnToward(angle, target, maxStep) {
    let diff = target - angle;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    return angle + Math.max(-maxStep, Math.min(maxStep, diff));
}

// Advance every tile one frame.
//   opts.speed      user speed multiplier (0.5 / 1 / 2)
//   opts.focused    true while one tile is selected
//   opts.hoverId    id of the tile under a mouse pointer, or null
//   opts.now        timestamp in ms (for the bob)
export function stepDrift(cards, bounds, dtRaw, opts) {
    const dt = Math.min(dtRaw, 0.05);
    if (dt <= 0) return;
    const cruise = DRIFT.cruise * opts.speed * (reducedMotion ? 0.5 : 1);
    const boardTempo = opts.focused ? DRIFT.focusTempo : 1;
    const ease = Math.min(1, DRIFT.tempoEase * dt);
    const t = opts.now / 1000;

    for (const c of cards) {
        if (c.heading == null) initDriftCard(c);

        const targetTempo = c.frozen ? 0 : (c.id === opts.hoverId ? 0 : boardTempo);
        c.tempo += (targetTempo - c.tempo) * ease;

        // Heading wanders smoothly — a slow random walk on the turn rate.
        c.turn += (Math.random() - 0.5) * 2.4 * dt;
        c.turn = Math.max(-DRIFT.turnRate, Math.min(DRIFT.turnRate, c.turn));
        c.heading += c.turn * dt;

        // Near an edge: turn back toward the middle rather than bounce.
        const cx = c.x + c.width / 2;
        const cy = c.y + c.height / 2;
        const m = DRIFT.wallMargin;
        const nearEdge = c.x < m || c.y < m
            || c.x + c.width > bounds.w - m || c.y + c.height > bounds.h - m;
        if (nearEdge) {
            const home = Math.atan2(bounds.h / 2 - cy, bounds.w / 2 - cx);
            c.heading = turnToward(c.heading, home, 1.6 * dt);
            c.turn *= 0.9;
        }

        const speed = cruise * c.pace;
        const k = Math.min(1, DRIFT.steer * dt);
        c.vx += (Math.cos(c.heading) * speed - c.vx) * k;
        c.vy += (Math.sin(c.heading) * speed - c.vy) * k;
    }

    // Keep-apart: tiles that drift within `gap` of each other get nudged
    // apart and turn away. No impulses, so nothing ever speeds up.
    for (let i = 0; i < cards.length; i++) {
        for (let j = i + 1; j < cards.length; j++) {
            const a = cards[i];
            const b = cards[j];
            if (a.frozen && b.frozen) continue;
            const dx = (b.x + b.width / 2) - (a.x + a.width / 2);
            const dy = (b.y + b.height / 2) - (a.y + a.height / 2);
            const ox = (a.width + b.width) / 2 + DRIFT.gap - Math.abs(dx);
            const oy = (a.height + b.height) / 2 + DRIFT.gap - Math.abs(dy);
            if (ox <= 0 || oy <= 0) continue;

            let nx = 0;
            let ny = 0;
            let depth;
            if (ox < oy) { nx = dx >= 0 ? 1 : -1; depth = ox; }
            else { ny = dy >= 0 ? 1 : -1; depth = oy; }

            // Soft inside the gap, firm once the tiles would truly overlap.
            const hard = Math.max(0, depth - DRIFT.gap);
            const move = Math.min(depth, depth * DRIFT.push * dt + hard * 0.5);
            const shareA = a.frozen ? 0 : (b.frozen ? 1 : 0.5);
            const shareB = b.frozen ? 0 : (a.frozen ? 1 : 0.5);
            a.x -= nx * move * shareA; a.y -= ny * move * shareA;
            b.x += nx * move * shareB; b.y += ny * move * shareB;

            const away = Math.atan2(ny || dy * 0.3, nx || dx * 0.3);
            if (!a.frozen) a.heading = turnToward(a.heading, away + Math.PI, 2.2 * dt);
            if (!b.frozen) b.heading = turnToward(b.heading, away, 2.2 * dt);
        }
    }

    const pad = DRIFT.edgePad;
    for (const c of cards) {
        if (!c.frozen) {
            c.x += c.vx * c.tempo * dt;
            c.y += c.vy * c.tempo * dt;
        }
        c.x = Math.max(pad, Math.min(bounds.w - c.width - pad, c.x));
        c.y = Math.max(pad, Math.min(bounds.h - c.height - pad, c.y));
        c.bobY = reducedMotion ? 0
            : Math.sin(t * 0.9 + c.bobPhase) * DRIFT.bob * c.tempo;
    }
}

// How many pairs fit comfortably on a board this size.
export function driftCapacity(bounds, maxPairs = 8) {
    const pairs = Math.floor((bounds.w * bounds.h) / 85000);
    return Math.max(4, Math.min(maxPairs, pairs));
}
