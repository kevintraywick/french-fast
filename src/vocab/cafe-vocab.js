// ============================================
// FRENCH FAST — CAFÉ VOCABULARY (MVP)
// ============================================

// Counter items the player can click to build an order
export const COUNTER_ITEMS = [
  { id: 'cafe',      emoji: '☕', label: 'café' },
  { id: 'the',       emoji: '🍵', label: 'thé' },
  { id: 'croissant', emoji: '🥐', label: 'croissant' },
  { id: 'sucre',     emoji: '🍬', label: 'sucre' },
  { id: 'addition',  emoji: '🧾', label: "l'addition" },
];

// Orders - each has a TTS phrase, required items, complexity tier, and gesture hint
// gesture: which counter item to visually hint toward (for tourists = null)
export const ORDERS = [
  // Complexity 1 — single items (first 5 customers)
  {
    id: 'cafe',
    tts: 'Un café, s\'il vous plaît',
    display: 'un café',
    items: ['cafe'],
    complexity: 1,
    gesture: 'cafe',
    revenue: 3,
  },
  {
    id: 'the',
    tts: 'Un thé, s\'il vous plaît',
    display: 'un thé',
    items: ['the'],
    complexity: 1,
    gesture: 'the',
    revenue: 2,
  },
  {
    id: 'croissant',
    tts: 'Un croissant, s\'il vous plaît',
    display: 'un croissant',
    items: ['croissant'],
    complexity: 1,
    gesture: 'croissant',
    revenue: 2,
  },

  // Complexity 2 — modifier phrases
  {
    id: 'cafe_sucre',
    tts: 'Un café avec sucre, s\'il vous plaît',
    display: 'un café avec sucre',
    items: ['cafe', 'sucre'],
    complexity: 2,
    gesture: 'cafe',
    revenue: 3,
  },
  {
    id: 'cafe_sans_sucre',
    tts: 'Un café sans sucre, s\'il vous plaît',
    display: 'un café sans sucre',
    items: ['cafe'],          // NO sucre — the critical minimal pair
    complexity: 2,
    gesture: null,            // wave-off gesture handled in customer logic
    revenue: 3,
  },

  // Complexity 3 — multi-item
  {
    id: 'cafe_croissant',
    tts: 'Un café et un croissant, s\'il vous plaît',
    display: 'un café et un croissant',
    items: ['cafe', 'croissant'],
    complexity: 3,
    gesture: 'cafe',
    revenue: 5,
  },
  {
    id: 'deux_cafes',
    tts: 'Deux cafés, s\'il vous plaît',
    display: 'deux cafés',
    items: ['cafe', 'cafe'],
    complexity: 3,
    gesture: 'cafe',
    revenue: 6,
  },
];

// Customer archetypes
export const ARCHETYPES = {
  commuter: {
    id: 'commuter',
    emoji: '🏃',
    entryHeart: 1,
    declineMultiplier: 1.0,
    patienceSecs: 35,
    gestureEnabled: true,
    speedClass: 'fast',
  },
  regular: {
    id: 'regular',
    emoji: '🙂',
    entryHeart: 3,
    declineMultiplier: 0.7,
    patienceSecs: 50,
    gestureEnabled: true,
    speedClass: 'medium',
  },
  tourist: {
    id: 'tourist',
    emoji: '🧳',
    entryHeart: 3,
    declineMultiplier: 1.0,
    patienceSecs: 45,
    gestureEnabled: false,   // no body language cues — audio only
    speedClass: 'slow',
  },
  bad_day: {
    id: 'bad_day',
    emoji: '😤',
    entryHeart: -1,
    declineMultiplier: 1.4,
    patienceSecs: 28,
    gestureEnabled: true,
    speedClass: 'medium',
  },
};

// Waiter radial phrases
export const WAITER_PHRASES = [
  { id: 'water',   fr: "Apporte de l'eau",       action: 'water' },
  { id: 'counter', fr: 'Va au comptoir',           action: 'counter' },
  { id: 'stay',    fr: 'Reste ici',                action: 'stay' },
];
