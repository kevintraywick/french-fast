// ============================================
// VOCABULARY DATA
// ============================================
const VOCABULARY = [
    { emoji: "🍎", french: "pomme", english: "apple" },
    { emoji: "🍊", french: "orange", english: "orange" },
    { emoji: "🍋", french: "citron", english: "lemon" },
    { emoji: "🍌", french: "banane", english: "banana" },
    { emoji: "🍇", french: "raisin", english: "grape" },
    { emoji: "🍓", french: "fraise", english: "strawberry" },
    { emoji: "🍒", french: "cerise", english: "cherry" },
    { emoji: "🍑", french: "pêche", english: "peach" },
    { emoji: "🍐", french: "poire", english: "pear" },
    { emoji: "🥝", french: "kiwi", english: "kiwi" },
    { emoji: "🍅", french: "tomate", english: "tomato" },
    { emoji: "🥕", french: "carotte", english: "carrot" },
    { emoji: "🧅", french: "oignon", english: "onion" },
    { emoji: "🥒", french: "concombre", english: "cucumber" },
    { emoji: "🥬", french: "laitue", english: "lettuce" },
    { emoji: "🥦", french: "brocoli", english: "broccoli" },
    { emoji: "🌽", french: "maïs", english: "corn" },
    { emoji: "🍞", french: "pain", english: "bread" },
    { emoji: "🥐", french: "croissant", english: "croissant" },
    { emoji: "🧀", french: "fromage", english: "cheese" },
    { emoji: "🥚", french: "œuf", english: "egg" },
    { emoji: "🍗", french: "poulet", english: "chicken" },
    { emoji: "🥩", french: "viande", english: "meat" },
    { emoji: "🐟", french: "poisson", english: "fish" },
    { emoji: "🍕", french: "pizza", english: "pizza" },
    { emoji: "🍔", french: "hamburger", english: "hamburger" },
    { emoji: "🍟", french: "frites", english: "fries" },
    { emoji: "🍰", french: "gâteau", english: "cake" },
    { emoji: "🍪", french: "biscuit", english: "cookie" },
    { emoji: "🍫", french: "chocolat", english: "chocolate" },
    { emoji: "🍬", french: "bonbon", english: "candy" },
    { emoji: "🍦", french: "glace", english: "ice cream" },
    { emoji: "☕", french: "café", english: "coffee" },
    { emoji: "🍵", french: "thé", english: "tea" },
    { emoji: "🥛", french: "lait", english: "milk" },
    { emoji: "🍷", french: "vin", english: "wine" },
    { emoji: "🍺", french: "bière", english: "beer" },
    { emoji: "💧", french: "eau", english: "water" },
    { emoji: "🐶", french: "chien", english: "dog" },
    { emoji: "🐱", french: "chat", english: "cat" },
    { emoji: "🐭", french: "souris", english: "mouse" },
    { emoji: "🐰", french: "lapin", english: "rabbit" },
    { emoji: "🦊", french: "renard", english: "fox" },
    { emoji: "🐻", french: "ours", english: "bear" },
    { emoji: "🐼", french: "panda", english: "panda" },
    { emoji: "🦁", french: "lion", english: "lion" },
    { emoji: "🐯", french: "tigre", english: "tiger" },
    { emoji: "🐮", french: "vache", english: "cow" },
    { emoji: "🐷", french: "cochon", english: "pig" },
    { emoji: "🐸", french: "grenouille", english: "frog" },
    { emoji: "🐵", french: "singe", english: "monkey" },
    { emoji: "🐔", french: "poule", english: "hen" },
    { emoji: "🐧", french: "pingouin", english: "penguin" },
    { emoji: "🐦", french: "oiseau", english: "bird" },
    { emoji: "🦆", french: "canard", english: "duck" },
    { emoji: "🦅", french: "aigle", english: "eagle" },
    { emoji: "🦉", french: "hibou", english: "owl" },
    { emoji: "🐴", french: "cheval", english: "horse" },
    { emoji: "🐝", french: "abeille", english: "bee" },
    { emoji: "🦋", french: "papillon", english: "butterfly" },
    { emoji: "🐌", french: "escargot", english: "snail" },
    { emoji: "🐢", french: "tortue", english: "turtle" },
    { emoji: "🐍", french: "serpent", english: "snake" },
    { emoji: "🦈", french: "requin", english: "shark" },
    { emoji: "🐋", french: "baleine", english: "whale" },
    { emoji: "🐘", french: "éléphant", english: "elephant" },
    { emoji: "🦒", french: "girafe", english: "giraffe" },
    { emoji: "🐑", french: "mouton", english: "sheep" },
    { emoji: "🌸", french: "fleur", english: "flower" },
    { emoji: "🌹", french: "rose", english: "rose" },
    { emoji: "🌻", french: "tournesol", english: "sunflower" },
    { emoji: "🌳", french: "arbre", english: "tree" },
    { emoji: "🍀", french: "trèfle", english: "clover" },
    { emoji: "🍁", french: "feuille", english: "leaf" },
    { emoji: "🌊", french: "vague", english: "wave" },
    { emoji: "⛰️", french: "montagne", english: "mountain" },
    { emoji: "🌈", french: "arc-en-ciel", english: "rainbow" },
    { emoji: "⭐", french: "étoile", english: "star" },
    { emoji: "🌙", french: "lune", english: "moon" },
    { emoji: "☀️", french: "soleil", english: "sun" },
    { emoji: "☁️", french: "nuage", english: "cloud" },
    { emoji: "🌧️", french: "pluie", english: "rain" },
    { emoji: "❄️", french: "neige", english: "snow" },
    { emoji: "⚡", french: "éclair", english: "lightning" },
    { emoji: "🔥", french: "feu", english: "fire" },
    { emoji: "🏠", french: "maison", english: "house" },
    { emoji: "🚗", french: "voiture", english: "car" },
    { emoji: "✈️", french: "avion", english: "airplane" },
    { emoji: "🚂", french: "train", english: "train" },
    { emoji: "🚢", french: "bateau", english: "boat" },
    { emoji: "🚲", french: "vélo", english: "bicycle" },
    { emoji: "🚁", french: "hélicoptère", english: "helicopter" },
    { emoji: "🚀", french: "fusée", english: "rocket" },
    { emoji: "⌚", french: "montre", english: "watch" },
    { emoji: "📱", french: "téléphone", english: "phone" },
    { emoji: "💻", french: "ordinateur", english: "computer" },
    { emoji: "📺", french: "télévision", english: "television" },
    { emoji: "🔑", french: "clé", english: "key" },
    { emoji: "💡", french: "lampe", english: "lamp" },
    { emoji: "📚", french: "livre", english: "book" },
    { emoji: "✏️", french: "crayon", english: "pencil" },
    { emoji: "✂️", french: "ciseaux", english: "scissors" },
    { emoji: "🎒", french: "sac à dos", english: "backpack" },
    { emoji: "👓", french: "lunettes", english: "glasses" },
    { emoji: "👒", french: "chapeau", english: "hat" },
    { emoji: "👟", french: "chaussure", english: "shoe" },
    { emoji: "👕", french: "chemise", english: "shirt" },
    { emoji: "👗", french: "robe", english: "dress" },
    { emoji: "☂️", french: "parapluie", english: "umbrella" },
    { emoji: "💎", french: "diamant", english: "diamond" },
    { emoji: "🔔", french: "cloche", english: "bell" },
    { emoji: "🎁", french: "cadeau", english: "gift" },
    { emoji: "🎈", french: "ballon", english: "balloon" },
    { emoji: "🎨", french: "peinture", english: "painting" },
    { emoji: "🎵", french: "musique", english: "music" },
    { emoji: "🎸", french: "guitare", english: "guitar" },
    { emoji: "🎹", french: "piano", english: "piano" },
    { emoji: "⚽", french: "football", english: "soccer" },
    { emoji: "🏀", french: "basket", english: "basketball" },
    { emoji: "👶", french: "bébé", english: "baby" },
    { emoji: "👦", french: "garçon", english: "boy" },
    { emoji: "👧", french: "fille", english: "girl" },
    { emoji: "👨", french: "homme", english: "man" },
    { emoji: "👩", french: "femme", english: "woman" },
    { emoji: "❤️", french: "cœur", english: "heart" },
    { emoji: "👋", french: "main", english: "hand" },
    { emoji: "👁️", french: "œil", english: "eye" },
    { emoji: "👂", french: "oreille", english: "ear" },
    { emoji: "👃", french: "nez", english: "nose" },
    { emoji: "👄", french: "bouche", english: "mouth" },
    { emoji: "🏫", french: "école", english: "school" },
    { emoji: "🏥", french: "hôpital", english: "hospital" },
    { emoji: "🏪", french: "magasin", english: "store" },
    { emoji: "🏨", french: "hôtel", english: "hotel" },
    { emoji: "⛪", french: "église", english: "church" },
    { emoji: "🏰", french: "château", english: "castle" },
    { emoji: "🌉", french: "pont", english: "bridge" },
    { emoji: "🏖️", french: "plage", english: "beach" },
    { emoji: "0️⃣", french: "zéro", english: "zero", tags: ["number"], numeral: 0 },
    { emoji: "1️⃣", french: "un", english: "one", tags: ["number"], numeral: 1 },
    { emoji: "2️⃣", french: "deux", english: "two", tags: ["number"], numeral: 2 },
    { emoji: "3️⃣", french: "trois", english: "three", tags: ["number"], numeral: 3 },
    { emoji: "4️⃣", french: "quatre", english: "four", tags: ["number"], numeral: 4 },
    { emoji: "5️⃣", french: "cinq", english: "five", tags: ["number"], numeral: 5 },
    { emoji: "6️⃣", french: "six", english: "six", tags: ["number"], numeral: 6 },
    { emoji: "7️⃣", french: "sept", english: "seven", tags: ["number"], numeral: 7 },
    { emoji: "8️⃣", french: "huit", english: "eight", tags: ["number"], numeral: 8 },
    { emoji: "9️⃣", french: "neuf", english: "nine", tags: ["number"], numeral: 9 },
    // Colors
    { color: "#DC143C", french: "rouge", english: "red", tags: ["color"] },
    { color: "#0055A4", french: "bleu", english: "blue", tags: ["color"] },
    { color: "#FFD700", french: "jaune", english: "yellow", tags: ["color"] },
    { color: "#2E8B57", french: "vert", english: "green", tags: ["color"] },
    { color: "#FF8C00", french: "orange", english: "orange", tags: ["color"] },
    { color: "#7B2D8E", french: "violet", english: "purple", tags: ["color"] },
    { color: "#1A1A1A", french: "noir", english: "black", tags: ["color"] },
    { color: "#F5F5F5", french: "blanc", english: "white", tags: ["color"] },
    { color: "#808080", french: "gris", english: "gray", tags: ["color"] },
    { color: "#FF69B4", french: "rose", english: "pink", tags: ["color"] },
    { color: "#8B4513", french: "marron", english: "brown", tags: ["color"] },
    { color: "#F5F0E1", french: "beige", english: "beige", tags: ["color"] },
    { color: "#800020", french: "bordeaux", english: "burgundy", tags: ["color"] },
    { color: "#B57EDC", french: "lavande", english: "lavender", tags: ["color"] },
    { color: "#007FFF", french: "azur", english: "azure", tags: ["color"] },
    { color: "#F7E7CE", french: "champagne", english: "champagne", tags: ["color"] },
    { color: "#40E0D0", french: "turquoise", english: "turquoise", tags: ["color"] },
    { color: "#000080", french: "bleu marine", english: "navy blue", tags: ["color"] },
    { color: "#6B8E23", french: "vert olive", english: "olive green", tags: ["color"] },
    { color: "#DAA520", french: "or", english: "gold", tags: ["color"] },
    { color: "#C0C0C0", french: "argent", english: "silver", tags: ["color"] },
    { color: "#FFFDD0", french: "crème", english: "cream", tags: ["color"] },
    { color: "#FFFFF0", french: "ivoire", english: "ivory", tags: ["color"] },
    { color: "#FF7F50", french: "corail", english: "coral", tags: ["color"] },
    { color: "#D2691E", french: "chocolat", english: "chocolate", tags: ["color"] },
    { color: "rainbow", french: "couleur", english: "color", tags: ["color"] },
];

// ============================================
// THEMED VOCABULARY SETS
// ============================================
const FRENCH_CAFE = [
    { french: "Bonjour", english: "Hello" },
    { french: "Vous désirez ?", english: "What would you like?" },
    { french: "Un café", english: "A coffee" },
    { french: "s'il vous plaît", english: "Please" },
    { french: "Expresso", english: "Espresso" },
    { french: "crème", english: "Cream" },
    { french: "Avec sucre ?", english: "With sugar?" },
    { french: "Oui", english: "Yes" },
    { french: "sucre", english: "Sugar" },
    { french: "merci", english: "Thank you" },
    { french: "Je voudrais", english: "I would like" },
    { french: "Et à manger ?", english: "And to eat?" },
    { french: "un croissant", english: "A croissant" },
    { french: "Sur place", english: "Here?" },
    { french: "terrasse", english: "Outdoor seating" },
    { french: "Voici", english: "Here is" },
    { french: "le croissant", english: "The croissant" },
    { french: "Merci", english: "Thank you" },
    { french: "Excusez-moi", english: "Excuse me" },
    { french: "Oui ?", english: "Yes?" },
    { french: "Où sont les toilettes?", english: "Where are the restrooms?" },
    { french: "L'addition", english: "The bill" },
    { french: "Voilà", english: "Here you go" },
    { french: "Au revoir", english: "Goodbye" },
    { french: "Bonsoir", english: "Good evening" },
];

// ============================================
// COFFEE SHOP ITEMS & ONE-WORD PHRASES (Round 6)
// ============================================
const COFFEE_SHOP = [
    // Drinks
    { emoji: "☕", french: "café", english: "coffee" },
    { emoji: "🍵", french: "thé", english: "tea" },
    { emoji: "🥛", french: "lait", english: "milk" },
    { emoji: "💧", french: "eau", english: "water" },
    { emoji: "🥤", french: "jus", english: "juice" },
    { emoji: "🍫", french: "chocolat", english: "chocolate" },
    // Food
    { emoji: "🥐", french: "croissant", english: "croissant" },
    { emoji: "🥖", french: "baguette", english: "baguette" },
    { emoji: "🧈", french: "beurre", english: "butter" },
    { emoji: "🍯", french: "miel", english: "honey" },
    { emoji: "🫙", french: "confiture", english: "jam" },
    { emoji: "🍰", french: "tarte", english: "tart" },
    { emoji: "🧇", french: "gaufre", english: "waffle" },
    { emoji: "🥞", french: "crêpe", english: "crêpe" },
    { emoji: "🥚", french: "œuf", english: "egg" },
    { emoji: "🧀", french: "fromage", english: "cheese" },
    // Objects
    { emoji: "🥄", french: "cuillère", english: "spoon" },
    { emoji: "🥣", french: "bol", english: "bowl" },
    { emoji: "🍽️", french: "assiette", english: "plate" },
    { emoji: "🪑", french: "chaise", english: "chair" },
    { emoji: "📋", french: "menu", english: "menu" },
    { emoji: "🧾", french: "addition", english: "bill" },
    // One-word phrases
    { emoji: "👋", french: "bonjour", english: "hello" },
    { emoji: "🙏", french: "merci", english: "thanks" },
    { emoji: "🙇", french: "pardon", english: "sorry" },
];

// ============================================
// CAFÉ ORDERING PHRASES (Round 5 - "Tell Me About It")
// ============================================
const CAFE_ORDERING = [
    // Ordering drinks
    { french: "Un café crème", english: "A coffee with cream" },
    { french: "Un chocolat chaud", english: "A hot chocolate" },
    { french: "Un thé vert", english: "A green tea" },
    { french: "Un verre d'eau", english: "A glass of water" },
    { french: "Un jus d'orange", english: "An orange juice" },
    // Ordering food
    { french: "Un pain au chocolat", english: "A chocolate croissant" },
    { french: "Un pain aux raisins", english: "A raisin pastry" },
    { french: "Une tarte aux pommes", english: "An apple tart" },
    { french: "Un éclair", english: "An éclair" },
    { french: "Une quiche", english: "A quiche" },
    // Paying & polite phrases
    { french: "C'est combien ?", english: "How much is it?" },
    { french: "Je peux payer par carte ?", english: "Can I pay by card?" },
    { french: "Gardez la monnaie", english: "Keep the change" },
    { french: "C'est délicieux", english: "It's delicious" },
    { french: "La carte, s'il vous plaît", english: "The menu, please" },
    { french: "Encore un, s'il vous plaît", english: "Another one, please" },
    { french: "C'est tout", english: "That's all" },
    { french: "Bonne journée", english: "Have a nice day" },
];

// ============================================
// PONG CONVERSATION DATA (Round 6)
// ============================================
const PONG_CONVERSATIONS = [
    { prompt: "Bonjour !", validReplies: ["Bonjour !", "Salut !", "Bonsoir !"], distractors: ["Merci.", "Au revoir.", "Non merci."] },
    { prompt: "Comment allez-vous ?", validReplies: ["Très bien, merci !", "Ça va bien.", "Pas mal, merci."], distractors: ["S'il vous plaît.", "Au revoir.", "Excusez-moi."] },
    { prompt: "Qu'est-ce que vous désirez ?", validReplies: ["Un café, s'il vous plaît.", "Je voudrais un thé.", "Un croissant, merci."], distractors: ["Bonsoir !", "C'est combien ?", "Très bien."] },
    { prompt: "Avec du lait ?", validReplies: ["Oui, s'il vous plaît.", "Non, merci.", "Un peu, merci."], distractors: ["Bonjour !", "C'est délicieux.", "Au revoir."] },
    { prompt: "C'est combien ?", validReplies: ["Voilà cinq euros.", "Je peux payer par carte ?", "Gardez la monnaie."], distractors: ["Bonjour !", "Avec du lait ?", "Non merci."] },
    { prompt: "Excusez-moi !", validReplies: ["Oui ?", "Je vous en prie.", "Bien sûr !"], distractors: ["Bonjour !", "Au revoir.", "Un thé."] },
    { prompt: "Où sont les toilettes ?", validReplies: ["Là-bas, à droite.", "Au fond, à gauche.", "Au premier étage."], distractors: ["Bonjour !", "Merci beaucoup.", "Un café."] },
    { prompt: "C'est délicieux !", validReplies: ["Merci beaucoup !", "Je suis content !", "C'est ma spécialité."], distractors: ["L'addition !", "Excusez-moi.", "Au revoir."] },
    { prompt: "Vous parlez anglais ?", validReplies: ["Oui, un peu.", "Non, désolé.", "Je préfère le français !"], distractors: ["Bonjour !", "C'est combien ?", "Au revoir."] },
    { prompt: "L'addition, s'il vous plaît.", validReplies: ["Voilà !", "Tout de suite !", "Bien sûr, monsieur."], distractors: ["Au revoir !", "Bonjour !", "Avec plaisir."] },
    { prompt: "Bonne journée !", validReplies: ["Merci, vous aussi !", "Au revoir !", "À bientôt !"], distractors: ["Oui, s'il vous plaît.", "C'est combien ?", "Un café."] },
    { prompt: "À bientôt !", validReplies: ["À bientôt !", "Au revoir !", "Bonne journée !"], distractors: ["Bonjour !", "Un café.", "C'est combien ?"] },
];

// ============================================
// FRENCH ROUND NUMBERS
// ============================================
const FRENCH_NUMBERS = [
    '', 'Un', 'Deux', 'Trois', 'Quatre', 'Cinq',
    'Six', 'Sept', 'Huit', 'Neuf', 'Dix',
    'Onze', 'Douze', 'Treize', 'Quatorze', 'Quinze',
    'Seize', 'Dix-sept', 'Dix-huit', 'Dix-neuf', 'Vingt'
];

function frenchRoundNumber(n) {
    if (n <= 3) return String(n);
    if (n >= 4 && n <= 20) return FRENCH_NUMBERS[n];
    return String(n);
}

// Utility: normalize French keys so matching/progress is stable
function normalizeEmoji(s) {
    return (s || '').replace(/\uFE0F/g, '').trim();
}

function normalizeFrench(s) {
    return (s || '').normalize('NFC').trim().toLowerCase();
}

// ============================================
// GAME STATE
// ============================================
const state = {
    cards: [],
    selectedCard: null,
    paused: false,
    velocityMultiplier: 0.2,

    // Player identification
    playerId: null,

    // Long-term learning progress
    learnedCount: 0,
    totalWords: 5000,
    maxCards: 50,

    // Round sizing
    roundBasePairs: 25,
    roundIncrement: 5,
    roundMaxPairs: 50,

    // Multi-step challenges
    roundChallenges: [],
    multiStep: null,
    matchedSteps: 0,
    
    // Round 3 typing mode
    typingMode: false,
    typingTarget: null,  // The selected word card waiting for numeral input
    
    // Round 4+ icon mode
    iconMode: false,
    iconTarget: null,    // The current word the user must match
    iconQueue: [],       // Remaining words to show as icons
    
    // Round 4+ phrase mode
    phraseMode: false,
    
    // Round 5 color mode
    colorMode: false,
    
    // Round 5 listen mode ("Tell Me About It")
    listenMode: false,
    listenSpawnIndex: 0,
    
    // Paddle breakout mode (Round 4+)
    shooterMode: false,
    missiles: [],
    
    // Paddle system
    paddleX: 0,
    paddleWord: null,
    paddleMoving: { left: false, right: false },
    bounceEmojis: [],
    emojiSpawnQueue: [],
    emojiSpawnTimer: null,
    totalEmojis: 0,
    clearedEmojis: 0,
    maxEmojis: 50,
    breakoutScore: 0,
    comboMode: false,
    comboStreak: 0,
    comboSlowUntil: 0,
    shooterSlots: [],       // compat
    iconSpawnQueue: [],     // compat
    wordRefillQueue: [],    // compat
    
    // Pong mode (Round 6)
    pongMode: false,
    pongConvIndex: 0,
    pongPhrase: null,
    pongReplies: [],
    pongLoaded: null,
    pongMissile: null,
    pongSpeed: 0.5,
    
    roundTheme: '',      // Current round theme name

    // Round tracking
    currentRound: 1,
    roundWords: [],              // [{emoji, french, key}]
    matchedKeys: new Set(),      // key values matched this round
    spawnInterval: null,

    // Track which pairs are currently on screen (for de-orphaning)
    activePairs: new Map(),      // key -> { emoji: card|null, word: card|null, spawnTime:number }

    // Spaced repetition progress, keyed by normalized french
    // Structure: { [key]: { timesCorrect, lastSeen, learned } }
    wordProgress: {}
};

// ============================================
// PLAYER ID GENERATION
// ============================================
function generatePlayerId() {
    return 'player_' + Date.now().toString(36) + '_' + Math.random().toString(36).substr(2, 9);
}

function getOrCreatePlayerId() {
    const storageKey = 'frenchfast_v20_playerId';
    let playerId = localStorage.getItem(storageKey);
    if (!playerId) {
playerId = generatePlayerId();
localStorage.setItem(storageKey, playerId);
console.log('New player created:', playerId);
    } else {
console.log('Returning player:', playerId);
    }
    return playerId;
}

// Constant number data (no need to recreate on each call)
const NUMBERS = [
    { value: 0, french: "zéro", english: "zero" },
    { value: 1, french: "un", english: "one" },
    { value: 2, french: "deux", english: "two" },
    { value: 3, french: "trois", english: "three" },
    { value: 4, french: "quatre", english: "four" },
    { value: 5, french: "cinq", english: "five" },
    { value: 6, french: "six", english: "six" },
    { value: 7, french: "sept", english: "seven" },
    { value: 8, french: "huit", english: "eight" },
    { value: 9, french: "neuf", english: "nine" },
];

let cardIdCounter = 0;
let gameLoop = null;
let lastTime = 0;

// ============================================
// DOM ELEMENTS
// ============================================
const gameArea = document.getElementById('game-area');
const progressBar = document.getElementById('progress-bar');
const pauseBtn = document.getElementById('pause-btn');
const skipRoundBtn = document.getElementById('skip-round-btn');
const pauseOverlay = document.getElementById('pause-overlay');
const speedSlider = null; // Removed
const voiceSelect = null; // Removed - voice auto-alternates
const voiceTestBtn = document.getElementById('voice-test-btn');
const voiceStatusEl = null;
const matchedCountEl = document.getElementById('matched-count');
const totalCountEl = document.getElementById('total-count');
const roundNumberEl = document.getElementById('round-number');
const roundThemeEl = document.getElementById('round-theme');
const roundCompleteOverlay = document.getElementById('round-complete-overlay');
const roundCompleteText = document.getElementById('round-complete-text');
const roundTimeValueEl = document.getElementById('round-time-value');
const nextRoundBtn = document.getElementById('next-round-btn');
const validationOverlay = document.getElementById('validation-overlay');
const validationText = document.getElementById('validation-text');
const validationSubtitle = document.getElementById('validation-subtitle');
const validationStatus = document.getElementById('validation-status');
const audioSetupOverlay = document.getElementById('audio-setup-overlay');
const roundTitleOverlay = document.getElementById('round-title-overlay');
const roundTitleText = document.getElementById('round-title-text');
const roundTitleInstructions = document.getElementById('round-title-instructions');
const centerIconContainer = document.getElementById('center-icon-container');
const centerIconCircle = document.getElementById('center-icon-circle');
const croissantShooter = document.getElementById('croissant-shooter');
const croissantShip = document.getElementById('croissant-ship');

// ============================================
// PONG MODE (Round 6)
// ============================================
const pongState = {
    phraseEl: null,
    missileEl: null,
    hintEl: null,
    replyEls: [],
    replies: [],
    phraseY: -100,
    speed: 1.0,
    matchCount: 0,
    convIndex: 0,
    loadedIdx: -1,
    activeIdx: -1,
    missileActive: false,
    missileX: 0,
    missileY: 0,
    missileValid: false,
};

function setupPongRound() {
    state.pongMode = true;
    state.roundTheme = 'Conversation Pong';

    pongState.phraseY = -100;
    pongState.convIndex = 0;
    pongState.speed = 1.0;
    pongState.matchCount = 0;
    pongState.loadedIdx = -1;
    pongState.activeIdx = -1;
    pongState.missileActive = false;

    cleanupPongMode();

    const phraseEl = document.createElement('div');
    phraseEl.className = 'pong-phrase';
    gameArea.appendChild(phraseEl);
    pongState.phraseEl = phraseEl;

    const missileEl = document.createElement('div');
    missileEl.className = 'pong-missile';
    missileEl.style.display = 'none';
    gameArea.appendChild(missileEl);
    pongState.missileEl = missileEl;

    const hintEl = document.createElement('div');
    hintEl.className = 'pong-hint';
    hintEl.textContent = '\u2190 \u2192 move \u00b7 Space to load \u00b7 Space again to launch';
    gameArea.appendChild(hintEl);
    pongState.hintEl = hintEl;

    state.roundWords = PONG_CONVERSATIONS.map((c, i) => ({
        french: c.prompt,
        english: c.validReplies[0],
        key: 'pong_' + i,
    }));
    state.matchedKeys.clear();
    state.matchedSteps = 0;

    roundNumberEl.textContent = frenchRoundNumber(state.currentRound);
    roundThemeEl.textContent = ` - ${state.roundTheme}`;
    updateCardCount();

    const paddle = document.getElementById('paddle');
    state.paddleX = (gameArea.offsetWidth - 140) / 2;
    paddle.style.left = state.paddleX + 'px';
    paddle.textContent = '\u2190 Space to load';
    state.paddleMoving = { left: false, right: false };
    document.getElementById('paddle-container').classList.add('show');
    document.getElementById('paddle-hint').classList.remove('show');

    setTimeout(() => loadPongConversation(0), 100);
    return true;
}

function loadPongConversation(index) {
    if (index >= PONG_CONVERSATIONS.length) {
        checkRoundComplete();
        return;
    }
    const conv = PONG_CONVERSATIONS[index];
    pongState.convIndex = index;
    pongState.loadedIdx = -1;
    pongState.activeIdx = -1;
    pongState.missileActive = false;
    if (pongState.missileEl) pongState.missileEl.style.display = 'none';

    pongState.phraseEl.textContent = conv.prompt;
    pongState.phraseEl.classList.remove('correct-flash', 'wrong-flash');
    pongState.phraseY = -120;

    speakFrench(conv.prompt);

    const validPick = [...conv.validReplies].sort(() => Math.random() - 0.5).slice(0, 3);
    const numDistract = 6 - validPick.length;
    const distractPick = [...conv.distractors].sort(() => Math.random() - 0.5).slice(0, numDistract);
    const allReplies = [
        ...validPick.map(t => ({ text: t, valid: true })),
        ...distractPick.map(t => ({ text: t, valid: false })),
    ].sort(() => Math.random() - 0.5);

    for (const el of pongState.replyEls) el.remove();
    pongState.replyEls = [];
    pongState.replies = [];

    const areaWidth = gameArea.offsetWidth;
    const areaHeight = gameArea.offsetHeight;
    const replyY = areaHeight - 54 - 72;
    const slotWidth = areaWidth / 6;

    allReplies.forEach((reply, i) => {
        const el = document.createElement('div');
        el.className = 'pong-reply';
        el.textContent = reply.text;
        el.style.top = replyY + 'px';
        el.style.left = '-999px';
        gameArea.appendChild(el);
        const slotCX = slotWidth * i + slotWidth / 2;
        requestAnimationFrame(() => {
            el.style.left = (slotCX - el.offsetWidth / 2) + 'px';
        });
        pongState.replyEls.push(el);
        pongState.replies.push({ text: reply.text, valid: reply.valid, slotCX });
    });

    const paddle = document.getElementById('paddle');
    paddle.textContent = '\u2190 Space to load';
    document.getElementById('paddle-container').classList.remove('pong-loaded');
}

function updatePongMode(deltaTime) {
    if (!state.pongMode || state.paused || !pongState.phraseEl) return;

    const areaWidth = gameArea.offsetWidth;
    const areaHeight = gameArea.offsetHeight;
    const paddleWidth = 140;
    const paddleHeight = 42;
    const paddle = document.getElementById('paddle');

    const pSpeed = 8 * deltaTime;
    if (state.paddleMoving.left) state.paddleX -= pSpeed;
    if (state.paddleMoving.right) state.paddleX += pSpeed;
    state.paddleX = Math.max(0, Math.min(areaWidth - paddleWidth, state.paddleX));
    paddle.style.left = state.paddleX + 'px';

    const paddleCX = state.paddleX + paddleWidth / 2;

    // Highlight closest reply slot
    let closestIdx = -1;
    let closestDist = Infinity;
    for (let i = 0; i < pongState.replies.length; i++) {
        const d = Math.abs(pongState.replies[i].slotCX - paddleCX);
        if (d < closestDist) { closestDist = d; closestIdx = i; }
    }
    const newActive = (closestDist < 90 && pongState.loadedIdx < 0) ? closestIdx : -1;
    if (newActive !== pongState.activeIdx) {
        if (pongState.activeIdx >= 0 && pongState.replyEls[pongState.activeIdx]) {
            pongState.replyEls[pongState.activeIdx].classList.remove('active');
        }
        if (newActive >= 0 && pongState.replyEls[newActive]) {
            pongState.replyEls[newActive].classList.add('active');
        }
        pongState.activeIdx = newActive;
    }

    // Move phrase bubble down
    pongState.phraseY += pongState.speed * deltaTime;
    const phraseW = pongState.phraseEl.offsetWidth || 200;
    const phraseH = pongState.phraseEl.offsetHeight || 60;
    const phraseCX = areaWidth / 2;
    pongState.phraseEl.style.left = (phraseCX - phraseW / 2) + 'px';
    pongState.phraseEl.style.top = pongState.phraseY + 'px';

    // Reset phrase to top when it reaches reply row
    const replyRowTop = areaHeight - 54 - 72 - 50;
    if (pongState.phraseY > replyRowTop) {
        pongState.phraseY = -phraseH - 20;
        speakFrench(PONG_CONVERSATIONS[pongState.convIndex].prompt);
    }

    // Move missile upward
    if (pongState.missileActive && pongState.missileEl) {
        pongState.missileY -= 10 * deltaTime;
        pongState.missileEl.style.top = pongState.missileY + 'px';

        const mW = pongState.missileEl.offsetWidth || 100;
        const mH = pongState.missileEl.offsetHeight || 40;

        const horizHit = Math.abs(pongState.missileX - phraseCX) < (phraseW / 2 + mW / 2 - 20);
        const vertHit = pongState.missileY < pongState.phraseY + phraseH &&
                        pongState.missileY + mH > pongState.phraseY;

        if (horizHit && vertHit) {
            pongState.missileEl.style.display = 'none';
            pongState.missileActive = false;

            if (pongState.missileValid) {
                speakFrench(PONG_CONVERSATIONS[pongState.convIndex].prompt);
                pongState.phraseEl.classList.add('correct-flash');
                setTimeout(() => pongState.phraseEl.classList.remove('correct-flash'), 600);

                state.matchedKeys.add('pong_' + pongState.convIndex);
                state.matchedSteps++;
                updateCardCount();

                pongState.matchCount++;
                pongState.speed = Math.min(1.0 + pongState.matchCount * 0.18, 4.5);

                checkRoundComplete();
                if (state.matchedSteps < state.roundWords.length) {
                    setTimeout(() => loadPongConversation(pongState.convIndex + 1), 900);
                }
            } else {
                // Wrong
                pongState.phraseEl.classList.add('wrong-flash');
                setTimeout(() => pongState.phraseEl.classList.remove('wrong-flash'), 600);
                pongState.loadedIdx = -1;
                paddle.textContent = '\u2190 Space to load';
                document.getElementById('paddle-container').classList.remove('pong-loaded');
            }
        }

        // Flew past top without hitting
        if (pongState.missileY < -80) {
            pongState.missileEl.style.display = 'none';
            pongState.missileActive = false;
            pongState.loadedIdx = -1;
            paddle.textContent = '\u2190 Space to load';
            document.getElementById('paddle-container').classList.remove('pong-loaded');
        }
    }
}

function pongSpaceBar() {
    if (!state.pongMode || pongState.missileActive) return;
    if (pongState.loadedIdx >= 0) {
        launchPongMissile();
    } else {
        if (pongState.activeIdx < 0) return;
        const reply = pongState.replies[pongState.activeIdx];
        pongState.loadedIdx = pongState.activeIdx;
        const paddle = document.getElementById('paddle');
        paddle.textContent = reply.text;
        document.getElementById('paddle-container').classList.add('pong-loaded');
        pongState.replyEls[pongState.activeIdx].classList.remove('active');
        pongState.replyEls[pongState.activeIdx].classList.add('loaded-dim');
        pongState.activeIdx = -1;
    }
}

function launchPongMissile() {
    if (pongState.loadedIdx < 0) return;
    const reply = pongState.replies[pongState.loadedIdx];
    const areaHeight = gameArea.offsetHeight;
    const paddleHeight = 42;
    const paddleWidth = 140;

    pongState.missileEl.textContent = reply.text;
    pongState.missileEl.className = 'pong-missile';
    pongState.missileEl.style.display = 'block';

    const mW = pongState.missileEl.offsetWidth || 100;
    pongState.missileX = state.paddleX + paddleWidth / 2;
    pongState.missileY = areaHeight - paddleHeight - 12 - 55;
    pongState.missileEl.style.left = (pongState.missileX - mW / 2) + 'px';
    pongState.missileEl.style.top = pongState.missileY + 'px';
    pongState.missileActive = true;
    pongState.missileValid = reply.valid;

    if (pongState.replyEls[pongState.loadedIdx]) {
        pongState.replyEls[pongState.loadedIdx].classList.remove('loaded-dim');
    }
    pongState.loadedIdx = -1;

    const paddle = document.getElementById('paddle');
    paddle.textContent = '\u2190 Space to load';
    document.getElementById('paddle-container').classList.remove('pong-loaded');
}

function cleanupPongMode() {
    if (pongState.phraseEl) { pongState.phraseEl.remove(); pongState.phraseEl = null; }
    if (pongState.missileEl) { pongState.missileEl.remove(); pongState.missileEl = null; }
    if (pongState.hintEl) { pongState.hintEl.remove(); pongState.hintEl = null; }
    for (const el of pongState.replyEls) if (el.parentNode) el.remove();
    pongState.replyEls = [];
    pongState.replies = [];
    pongState.missileActive = false;
    pongState.loadedIdx = -1;
    pongState.activeIdx = -1;
}

// ============================================
// INITIALIZATION
// ============================================
function init() {
    loadProgress();
    updateProgressDisplay();
    
    // Show audio setup overlay and flash the controls
    audioSetupOverlay.classList.add('show');
    if (voiceSelect) voiceSelect.classList.add('flash-attention');
    voiceTestBtn.classList.add('flash-attention');
    
    // After 5 seconds, stop flashing and proceed to validation
    setTimeout(() => {
        if (voiceSelect) voiceSelect.classList.remove('flash-attention');
        voiceTestBtn.classList.remove('flash-attention');
        audioSetupOverlay.classList.remove('show');
        
        // Show "Match the Pairs" screen
        validationOverlay.classList.add('show');
        validationText.textContent = 'Match the Pairs';
        validationSubtitle.textContent = "(Don't forget to enable audio and select a voice)";
        validationSubtitle.style.display = 'block';
        validationStatus.textContent = '';
        
        // Setup round in background
        let isValid = false;
        try {
            isValid = setupRound();
        } catch (e) {
            console.error('setupRound failed:', e);
            isValid = false;
        }

        if (!isValid) {
            // Fallback: force a minimal, safe Round 1 so the game can start
            try {
                const basePool = VOCABULARY.filter(w => !w.tags || (!w.tags.includes('number') && !w.tags.includes('color')));
                state.roundWords = basePool.slice(0, 25).map(w => ({
                    ...w,
                    key: normalizeFrench(w.french)
                }));
                state.roundChallenges = [];
                state.matchedKeys.clear();
                state.matchedSteps = 0;
                state.activePairs.clear();
                roundNumberEl.textContent = frenchRoundNumber(state.currentRound || 1);
                updateCardCount();
                isValid = true;
            } catch (e2) {
                console.error('fallback failed:', e2);
                validationStatus.textContent = '✗ Fatal error starting game';
                return;
            }
        }

        // Show "Match the Pairs" for at least 3 seconds, then start game
        setTimeout(() => {
            validationOverlay.classList.remove('show');

            resetRoundTimer();
            startRoundTimer();

            // Start game loop
            lastTime = performance.now();
            gameLoop = requestAnimationFrame(update);

            // Start spawning
            startSpawning();
        }, 3000);
    }, 5000);
    
    // Event listeners
    pauseBtn.addEventListener('click', togglePause);
    skipRoundBtn.addEventListener('click', skipRound);
    pauseOverlay.addEventListener('click', togglePause);
    
    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('keyup', handleKeyup);
    
    // Click handler for cards
    gameArea.addEventListener('click', (e) => {
    const cardEl = e.target.closest('.card');
    if (cardEl) {
const id = parseInt(cardEl.dataset.id);

if (e.shiftKey) {
    const card = state.cards.find(c => c.id === id);
    if (card && card.type === 'word') {
        card.showEnglish = !card.showEnglish;
        const enText = (card.wordData.english || '').trim();
        if (card.showEnglish && enText) {
            card.element.textContent = enText;
        } else {
            card.element.textContent = card.wordData.french;
        }
        card.element.style.fontStyle = (card.showEnglish && enText) ? 'italic' : 'normal';
        return;
    }
}

handleCardClick(id);
    }
});
// Voice controls
    primeVoices();
    if (voiceTestBtn) {
        voiceTestBtn.addEventListener('click', () => {
            audioUnlocked = true;
            primeVoices();
            try {
                if ('speechSynthesis' in window) {
                    const voice = resolveSelectedVoice();
                    const u = new SpeechSynthesisUtterance('Bonjour');
                    u.lang = 'fr-FR';
                    u.rate = 0.95;
                    u.pitch = 1.0;
                    if (voice) u.voice = voice;
                    window.speechSynthesis.cancel();
                    window.speechSynthesis.speak(u);
                }
            } catch (e) {}
        });
    }

    // Next round button
    nextRoundBtn.addEventListener('click', startNextRound);
    
    // Dark mode toggle
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
        // Load saved preference
        try {
            const savedTheme = localStorage.getItem('frenchfast_theme');
            if (savedTheme === 'dark') {
                document.body.classList.add('dark-mode');
                themeToggleBtn.textContent = '☀️';
            }
        } catch(e) {}
        
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            themeToggleBtn.textContent = isDark ? '☀️' : '🌙';
            try { localStorage.setItem('frenchfast_theme', isDark ? 'dark' : 'light'); } catch(e) {}
        });
    }
}


function setupRound() {
    // Update voice for this round (alternates Amelie/Thomas)
    cachedFrenchVoice = resolveSelectedVoice();
    
    // Reset all special modes
    state.typingMode = false;
    state.typingTarget = null;
    state.iconMode = false;
    state.iconTarget = null;
    state.iconQueue = [];
    state.phraseMode = false;
    state.colorMode = false;
    state.listenMode = false;
    state.listenSpawnIndex = 0;
    // Clear any per-card reveal timers from listen mode
    for (const card of state.cards) {
        if (card.revealTimer) {
            clearTimeout(card.revealTimer);
            card.revealTimer = null;
        }
    }
    state.comboMode = false;
    state.shooterMode = false;
    state.pongMode = false;
    cleanupPongMode();
    state.missiles = [];
    state.paddleWord = null;
    state.paddleMoving = { left: false, right: false };
    state.roundTheme = '';
    
    // Hide center icon and shooter by default
    centerIconContainer.classList.remove('show');
    croissantShooter.classList.remove('show');
    
    // Hide paddle
    const paddleContainer = document.getElementById('paddle-container');
    if (paddleContainer) paddleContainer.classList.remove('show');
    const paddleHint = document.getElementById('paddle-hint');
    if (paddleHint) paddleHint.classList.remove('show');
    const scoreEl = document.getElementById('top-score');
    if (scoreEl) scoreEl.style.display = 'none';
    const streakEl = document.getElementById('streak-counter');
    if (streakEl) { streakEl.classList.remove('show', 'fire', 'blaze'); streakEl.textContent = ''; }
    
    // Clean up bouncing emojis
    if (state.bounceEmojis) {
for (const be of state.bounceEmojis) {
    if (be.element && be.element.parentNode) be.element.remove();
}
    }
    state.bounceEmojis = [];
    if (state.emojiSpawnTimer) {
clearInterval(state.emojiSpawnTimer);
state.emojiSpawnTimer = null;
    }
    state.shooterSlots = [];
    state.iconSpawnQueue = [];
    state.wordRefillQueue = [];
    
    // Clean up projectiles
    if (state.missiles) {
for (const m of state.missiles) {
    if (m.element && m.element.parentNode) m.element.remove();
}
    }
    state.missiles = [];
    
    // Round 6: Pong
    if (state.currentRound === 6) {
        return setupPongRound();
    }

    // Round 3+: Paddle Breakout (also R7+)
    if (state.currentRound === 3 || state.currentRound >= 7) {
state.iconMode = false;
state.phraseMode = false;
state.colorMode = false;
state.shooterMode = true;
state.roundTheme = 'Breakout!';
state.missiles = [];
state.bounceEmojis = [];
state.paddleMoving = { left: false, right: false };

const isLearned = (word) => {
    const key = normalizeFrench(word.french);
    const progress = state.wordProgress[key];
    return progress && progress.learned;
};

// Use emoji vocabulary (similar to round 1)
const emojiPool = VOCABULARY.filter(w => w.emoji && !w.tags);
let paddleWords = emojiPool.filter(w => {
    if (isLearned(w)) return Math.random() < 0.15;
    return true;
});
if (paddleWords.length < 20) paddleWords = [...emojiPool];
paddleWords = paddleWords.sort(() => Math.random() - 0.5).slice(0, 50);

state.roundWords = paddleWords.map(w => ({
    ...w,
    key: normalizeFrench(w.french)
}));

state.totalEmojis = state.roundWords.length;
state.clearedEmojis = 0;
state.emojiSpawnQueue = [...state.roundWords].sort(() => Math.random() - 0.5);

// Spawn initial 10
const initialBatch = Math.min(10, state.emojiSpawnQueue.length);
for (let i = 0; i < initialBatch; i++) {
    spawnBounceEmoji(state.emojiSpawnQueue.shift());
}

// Add 5 every 5 seconds until capped
state.emojiSpawnTimer = setInterval(() => {
    if (state.paused) return;
    if (state.emojiSpawnQueue.length === 0) {
        clearInterval(state.emojiSpawnTimer);
        state.emojiSpawnTimer = null;
        return;
    }
    const liveCount = state.bounceEmojis.filter(e => e.alive).length;
    const maxOnScreen = 25;
    if (liveCount >= maxOnScreen) return;
    const wave = Math.min(5, state.emojiSpawnQueue.length, maxOnScreen - liveCount);
    for (let i = 0; i < wave; i++) {
        spawnBounceEmoji(state.emojiSpawnQueue.shift());
    }
}, 5000);

// Set paddle with first word
state.paddleWord = state.roundWords[0];
const paddle = document.getElementById('paddle');
paddle.textContent = state.paddleWord.french;
state.paddleX = (gameArea.offsetWidth - 140) / 2;
paddle.style.left = state.paddleX + 'px';

console.log(`Round ${state.currentRound} - Breakout: ${state.roundWords.length} emojis`);

state.roundChallenges = [];
state.matchedKeys.clear();
state.matchedSteps = 0;
state.activePairs.clear();
state.multiStep = null;

roundNumberEl.textContent = frenchRoundNumber(state.currentRound);
roundThemeEl.textContent = ` - ${state.roundTheme}`;
updateCardCount();

// Show paddle
centerIconContainer.classList.remove('show');
croissantShooter.classList.remove('show');
document.getElementById('paddle-container').classList.add('show');
document.getElementById('paddle-hint').classList.add('show');
state.breakoutScore = 0;
const scoreEl = document.getElementById('top-score');
scoreEl.textContent = '0';
scoreEl.style.color = '#4CAF50';
scoreEl.style.display = 'inline';
state.comboStreak = 0;
document.getElementById('streak-counter').textContent = '';
document.getElementById('streak-counter').classList.add('show');

return state.roundWords.length > 0;
    }
    
    // Round 4: Coffee Shop matching mode
    if (state.currentRound === 4) {
state.roundTheme = 'Au Café';

const shopPool = [...COFFEE_SHOP];
const isLearned = (word) => {
    const key = normalizeFrench(word.french);
    const progress = state.wordProgress[key];
    return progress && progress.learned;
};

let shopSlots = shopPool.filter(w => {
    if (isLearned(w)) return Math.random() < 0.1;
    return true;
});
if (shopSlots.length < 10) shopSlots = [...shopPool];
shopSlots = shopSlots.sort(() => Math.random() - 0.5);

const emojiSet = new Set();
const frenchSet = new Set();
const validatedPairs = [];
for (const pair of shopSlots) {
    const emojiKey = normalizeEmoji(pair.emoji);
    const frKey = normalizeFrench(pair.french);
    if (emojiSet.has(emojiKey) || frenchSet.has(frKey)) continue;
    emojiSet.add(emojiKey);
    frenchSet.add(frKey);
    validatedPairs.push(pair);
}

state.roundWords = validatedPairs.map(w => ({
    ...w,
    key: normalizeFrench(w.french)
}));

state.roundChallenges = [];
state.matchedKeys.clear();
state.matchedSteps = 0;
state.activePairs.clear();
state.multiStep = null;

roundNumberEl.textContent = frenchRoundNumber(state.currentRound);
roundThemeEl.textContent = ` - ${state.roundTheme}`;
updateCardCount();

return state.roundWords.length > 0;
    }
    
    // Round 5: "Tell Me About It" - Listen & Match mode
    if (state.currentRound === 5) {
        console.log('=== ROUND 5 SETUP START ===');
        state.listenMode = true;
        state.roundTheme = 'Tell Me About It';

        const isLearned = (word) => {
            const key = normalizeFrench(word.french);
            const progress = state.wordProgress[key];
            return progress && progress.learned;
        };

        // Build word pool: mostly café + ordering, some unlearned from main
        const cafePool = [...FRENCH_CAFE, ...CAFE_ORDERING];
        const shopPool2 = COFFEE_SHOP.map(w => ({ french: w.french, english: w.english }));
        console.log('R5 pools:', cafePool.length, 'cafe +', shopPool2.length, 'shop');
        
        // Deduplicate by normalized French
        const seenKeys = new Set();
        const allCafe = [];
        for (const w of [...cafePool, ...shopPool2]) {
            const key = normalizeFrench(w.french);
            if (!seenKeys.has(key)) {
                seenKeys.add(key);
                allCafe.push(w);
            }
        }
        
        // Filter: keep unlearned + 10% learned for reinforcement
        let cafeSlots = allCafe.filter(w => {
            if (isLearned(w)) return Math.random() < 0.1;
            return true;
        });
        if (cafeSlots.length < 8) cafeSlots = [...allCafe];
        
        // Add ~25% unlearned from main VOCABULARY
        const mainBase = VOCABULARY.filter(w => !w.tags || (!w.tags.includes('number') && !w.tags.includes('color')));
        const unlearnedMain = mainBase.filter(w => !isLearned(w));
        const mainCount = Math.max(3, Math.floor(cafeSlots.length * 0.25));
        const mainSlots = unlearnedMain.sort(() => Math.random() - 0.5).slice(0, mainCount).map(w => ({
            french: w.french,
            english: w.english
        }));
        
        // Combine, deduplicate, shuffle
        const combined = [...cafeSlots, ...mainSlots];
        const finalKeys = new Set();
        const finalWords = [];
        for (const w of combined.sort(() => Math.random() - 0.5)) {
            const key = normalizeFrench(w.french);
            if (!finalKeys.has(key)) {
                finalKeys.add(key);
                finalWords.push(w);
            }
        }

        state.roundWords = finalWords.slice(0, 25).map(w => ({
            ...w,
            key: normalizeFrench(w.french)
        }));

        console.log('R5 roundWords:', state.roundWords.length, 'listenMode:', state.listenMode);
        if (state.roundWords.length > 0) {
            console.log('R5 first word:', state.roundWords[0].french, '->', state.roundWords[0].english);
        }

        state.roundChallenges = [];
        state.matchedKeys.clear();
        state.matchedSteps = 0;
        state.activePairs.clear();
        state.multiStep = null;

        roundNumberEl.textContent = frenchRoundNumber(state.currentRound);
        roundThemeEl.textContent = ` - ${state.roundTheme}`;
        updateCardCount();

        console.log('=== ROUND 5 SETUP COMPLETE ===', state.roundWords.length, 'words');
        return state.roundWords.length > 0;
    }
    
    // Rounds 1 & 2: Normal matching mode
    const targetPairs = Math.min(
state.roundBasePairs + (state.currentRound - 1) * state.roundIncrement,
state.roundMaxPairs
    );

    const basePool = VOCABULARY.filter(w => !w.tags || (!w.tags.includes('number') && !w.tags.includes('color')));
    const numberPool = VOCABULARY.filter(w => w.tags && w.tags.includes('number'));
    const colorPool = VOCABULARY.filter(w => w.tags && w.tags.includes('color'));

    // Include all vocab types from R1
    let pool = [...basePool, ...numberPool, ...colorPool.map(c => ({ ...c, itemType: 'color' }))];

    // Apply spaced repetition: filter out learned words (with 1/10 chance they still appear)
    const spacedPool = pool.filter(w => shouldIncludeWord(w.french));
    
    // If spaced repetition filtered too many, fall back to full pool
    const effectivePool = spacedPool.length >= targetPairs ? spacedPool : pool;

    // Accept items with emoji OR color
    const validPairs = effectivePool.filter(w => (w.emoji || w.color) && w.french);
    const shuffled = [...validPairs].sort(() => Math.random() - 0.5);
    const candidates = shuffled.slice(0, Math.min(targetPairs * 2, shuffled.length));

    const visualSet = new Set();
    const frenchSet = new Set();
    const validatedPairs = [];

    for (const pair of candidates) {
const visualKey = pair.emoji ? normalizeEmoji(pair.emoji) : (pair.color || '');
const frKey = normalizeFrench(pair.french);
if (visualSet.has(visualKey) || frenchSet.has(frKey)) continue;
visualSet.add(visualKey);
frenchSet.add(frKey);
validatedPairs.push(pair);
    }

    state.roundWords = validatedPairs.slice(0, Math.min(targetPairs, validatedPairs.length));
    state.roundChallenges = [];

    // Add key property to each word for matching
    state.roundWords = state.roundWords.map(w => ({
...w,
key: normalizeFrench(w.french)
    }));

    state.matchedKeys.clear();
    state.matchedSteps = 0;
    state.spawnedEmojiIndices = [];
    state.spawnedWordIndices = [];
    state.activePairs.clear();
    state.multiStep = null;

    roundNumberEl.textContent = frenchRoundNumber(state.currentRound);
    roundThemeEl.textContent = '';
    updateCardCount();

    
    if (state.roundWords.length === 0) {
// Defensive fallback if filtering removed everything
const basePool = VOCABULARY.filter(w => !w.tags || (!w.tags.includes('number') && !w.tags.includes('color')));
state.roundWords = basePool.slice(0, Math.min(25, basePool.length)).map(w => ({
    ...w,
    key: normalizeFrench(w.french)
}));
state.roundChallenges = [];
    }

    return state.roundWords.length > 0;
}



function startSpawning() {
    let pairIndex = 0;
    console.log('startSpawning called - modes:', { listen: state.listenMode, typing: state.typingMode, color: state.colorMode, icon: state.iconMode, phrase: state.phraseMode, shooter: state.shooterMode }, 'roundWords:', state.roundWords.length);

    state.spawnInterval = setInterval(() => {
if (state.paused) return;

if (pairIndex < state.roundWords.length) {
    if (state.typingMode) {
        // Typing mode: only spawn word cards
        spawnTypingWordCardAt(pairIndex);
    } else if (state.colorMode) {
        // Color mode: spawn color disc + word card
        spawnColorDiscAt(pairIndex);
        spawnWordCardAt(pairIndex);
    } else if (state.listenMode) {
        // Listen mode: spawn first 10 pairs, rest added one at a time on match
        const initialCount = Math.min(10, state.roundWords.length);
        if (pairIndex === 0) console.log('R5 spawning: initialCount =', initialCount, 'totalWords =', state.roundWords.length);
        if (pairIndex < initialCount) {
            console.log('R5 spawning pair', pairIndex, ':', state.roundWords[pairIndex]?.french);
            spawnMysteryCardAt(pairIndex);
            spawnAnswerCardAt(pairIndex);
        }
        // Track where progressive spawning picks up
        if (pairIndex === initialCount - 1) {
            state.listenSpawnIndex = initialCount;
        }
    } else if (state.iconMode) {
        // Icon mode: only spawn word cards (icon is in center)
        spawnWordCardAt(pairIndex);
    } else if (state.phraseMode) {
        // Phrase mode: spawn French and English cards
        spawnFrenchCardAt(pairIndex);
        spawnEnglishCardAt(pairIndex);
    } else if (state.shooterMode) {
        // Paddle mode handles its own spawning
    } else {
        // Normal mode: spawn emoji/number bubble or color disc + word card
        const wordData = state.roundWords[pairIndex];
        if (wordData && wordData.itemType === 'color') {
            spawnColorDiscAt(pairIndex);
        } else {
            spawnEmojiCardAt(pairIndex);
        }
        spawnWordCardAt(pairIndex);
    }
    pairIndex++;
}

if (pairIndex >= state.roundWords.length) {
    clearInterval(state.spawnInterval);
    state.spawnInterval = null;

    if (!state.typingMode && !state.iconMode && !state.phraseMode && !state.colorMode && !state.listenMode && state.roundChallenges && state.roundChallenges.length) {
        for (let i = 0; i < state.roundChallenges.length; i++) {
            spawnQuantityCardAt(i);
        }
    }
}
    }, state.typingMode ? 300 : 500);
}


function spawnPairAt(index) {
    // Spawn both cards "atomically" (no user-visible gap where only one exists).
    spawnEmojiCardAt(index);
    spawnWordCardAt(index);
}

function reconcileOrphans() {
    // If for any reason a pair has only one card present, respawn its missing mate.
    for (const [key, entry] of state.activePairs.entries()) {
if (state.matchedKeys.has(key)) continue;
if (state.listenMode) {
    const idx = entry.pairIndex ?? state.roundWords.findIndex(w => w.key === key);
    if (idx >= 0) {
        if (!entry.mystery) spawnMysteryCardAt(idx);
        if (!entry.answer) spawnAnswerCardAt(idx);
    }
    continue;
} else if (!entry.emoji) {
    const idx = entry.pairIndex ?? state.roundWords.findIndex(w => w.key === key);
    if (idx >= 0) {
        if (state.colorMode) {
            spawnColorDiscAt(idx);
        } else {
            spawnEmojiCardAt(idx);
        }
    }
}
if (!entry.word) {
    const idx = entry.pairIndex ?? state.roundWords.findIndex(w => w.key === key);
    if (idx >= 0) spawnWordCardAt(idx);
}
    }
}

function getSpawnPosition() {
    const areaWidth = gameArea.offsetWidth - 100;
    const areaHeight = gameArea.offsetHeight - 100;
    
    // Pick a random edge: 0=top, 1=right, 2=bottom, 3=left
    const edge = Math.floor(Math.random() * 4);
    let x, y, vx, vy;
    
    switch (edge) {
        case 0: // Top
            x = 50 + Math.random() * (areaWidth - 50);
            y = -60;
            vx = (Math.random() - 0.5) * 0.3;
            vy = 0.1 + Math.random() * 0.1;
            break;
        case 1: // Right
            x = areaWidth + 60;
            y = 50 + Math.random() * (areaHeight - 100);
            vx = -0.1 - Math.random() * 0.1;
            vy = (Math.random() - 0.5) * 0.2;
            break;
        case 2: // Bottom
            x = 50 + Math.random() * (areaWidth - 50);
            y = areaHeight + 60;
            vx = (Math.random() - 0.5) * 0.3;
            vy = -0.1 - Math.random() * 0.1;
            break;
        case 3: // Left
            x = -60;
            y = 50 + Math.random() * (areaHeight - 100);
            vx = 0.1 + Math.random() * 0.1;
            vy = (Math.random() - 0.5) * 0.2;
            break;
    }
    
    return { x, y, vx, vy };
}

function startNextRound() {
    // Clear spawn interval if running
    if (state.spawnInterval) {
        clearInterval(state.spawnInterval);
        state.spawnInterval = null;
    }
    
    // Clear any remaining cards
    for (const card of state.cards) {
        card.element.remove();
    }
    state.cards = [];
    
    // Clear missiles
    for (const missile of state.missiles) {
        missile.element.remove();
    }
    state.missiles = [];
    
    // Increment round
    state.currentRound++;
    
    // Hide round complete, center icon, and shooter
    roundCompleteOverlay.classList.remove('show');
    centerIconContainer.classList.remove('show');
    croissantShooter.classList.remove('show');
    document.getElementById('paddle-container').classList.remove('show');
    document.getElementById('paddle-hint').classList.remove('show');
    document.getElementById('top-score').style.display = 'none';
    document.getElementById('streak-counter').classList.remove('show');
    
    // Show round title card with instructions
    const isCoffeeShopRound = state.currentRound === 4;
    const isListenRound = state.currentRound === 5;
    const isPongRound = state.currentRound === 6;
    const isShooterRound = state.currentRound === 3 || state.currentRound >= 7;
    
    if (isListenRound) {
        // Show special instructions for listen & match round
        console.log('R5: Showing title overlay');
        // Ensure no stale overlays
        validationOverlay.classList.remove('show');
        audioSetupOverlay.classList.remove('show');
        roundTitleOverlay.classList.add('show');
        roundTitleText.textContent = `Round ${frenchRoundNumber(state.currentRound)} - Tell Me About It`;
        roundTitleInstructions.textContent = 'Tap 👄 to hear French · Then tap the matching English!';
        
        try {
            setupRound();
            console.log('R5: setupRound succeeded, roundWords:', state.roundWords.length, 'listenMode:', state.listenMode);
        } catch (e) {
            console.error('Round 5 setup failed:', e);
        }
        
        setTimeout(() => {
            console.log('R5: Title timeout fired, starting spawning. roundWords:', state.roundWords.length, 'listenMode:', state.listenMode);
            console.log('R5: gameArea dimensions:', gameArea.offsetWidth, 'x', gameArea.offsetHeight);
            console.log('R5: gameLoop active:', !!gameLoop);
            roundTitleOverlay.classList.remove('show');
            resetRoundTimer();
            startRoundTimer();
            startSpawning();
            // Check after first spawn cycle
            setTimeout(() => {
                console.log('R5: After 1s - cards in state:', state.cards.length, 'DOM cards:', gameArea.querySelectorAll('.card').length);
                console.log('R5: activePairs:', state.activePairs.size, 'listenSpawnIndex:', state.listenSpawnIndex);
            }, 1000);
        }, 3000);
    } else if (isPongRound) {
        roundTitleOverlay.classList.add('show');
        roundTitleText.textContent = `Round ${frenchRoundNumber(state.currentRound)} - Conversation Pong`;
        roundTitleInstructions.innerHTML = '\u2190 \u2192 move paddle \u00b7 Space to load a reply \u00b7 Space again to launch!<br><br><span style="color:#1a5c2a;font-weight:600;">\u2705 Multiple correct replies \u00b7 Speed increases with each match!</span>';
        setupRound();
        setTimeout(() => {
            roundTitleOverlay.classList.remove('show');
            resetRoundTimer();
            startRoundTimer();
            // No spawning needed - pong handles its own loop
        }, 3000);
    } else if (isCoffeeShopRound) {
        // Show special instructions for coffee shop round
        roundTitleOverlay.classList.add('show');
        roundTitleText.textContent = `Round ${frenchRoundNumber(state.currentRound)} - Au Café`;
        roundTitleInstructions.textContent = 'Match café items to their French names!';
        
        // Setup round while showing title
        setupRound();
        
        // After 3 seconds, start the round
        setTimeout(() => {
            roundTitleOverlay.classList.remove('show');
            resetRoundTimer();
            startRoundTimer();
            startSpawning();
        }, 3000);
    } else if (isShooterRound) {
        // Show special instructions for shooter mode
        roundTitleOverlay.classList.add('show');
        roundTitleText.textContent = `Round ${frenchRoundNumber(state.currentRound)} - Breakout!`;
        roundTitleInstructions.innerHTML = '← → move paddle · Catch the matching emojis!<br><br><span style="color:#d32f2f;font-weight:600;">⚠️ Caution: Hitting the wrong word increases the speed of the emoji!</span>';
        
        // Setup round while showing title
        setupRound();
        
        // After 3 seconds, start the round
        setTimeout(() => {
            roundTitleOverlay.classList.remove('show');
            resetRoundTimer();
            startRoundTimer();
            startSpawning();
        }, 3000);
    } else {
        // Show "Match the Pairs" for normal rounds
        validationOverlay.classList.add('show');
        validationText.textContent = 'Match the Pairs';
        validationSubtitle.style.display = 'none';
        validationStatus.textContent = '';
        
        // Setup round
        const isValid = setupRound();
        
        // After 3 seconds, start the round
        setTimeout(() => {
            validationOverlay.classList.remove('show');
            resetRoundTimer();
            startRoundTimer();
            startSpawning();
        }, 3000);
    }
}

function skipRound() {
    // Stop current round activity
    if (state.spawnInterval) {
        clearInterval(state.spawnInterval);
        state.spawnInterval = null;
    }
    stopRoundTimer();
    
    // Clear any remaining cards
    for (const card of state.cards) {
        card.element.remove();
    }
    state.cards = [];
    state.selectedCard = null;
    state.typingTarget = null;
    state.iconTarget = null;
    state.multiStep = null;
    
    // Clear missiles
    for (const missile of state.missiles) {
        missile.element.remove();
    }
    state.missiles = [];
    
    // Hide center icon and shooter
    centerIconContainer.classList.remove('show');
    croissantShooter.classList.remove('show');
    document.getElementById('paddle-container').classList.remove('show');
    document.getElementById('paddle-hint').classList.remove('show');
    document.getElementById('top-score').style.display = 'none';
    
    // Increment round and start the next one
    state.currentRound++;
    
    // Show round title card with instructions
    const isCoffeeShopRound2 = state.currentRound === 4;
    const isListenRound2 = state.currentRound === 5;
    const isPongRound2 = state.currentRound === 6;
    const isShooterRound2 = state.currentRound === 3 || state.currentRound >= 7;
    
    if (isListenRound2) {
        console.log('R5 (skip): Showing title overlay');
        roundTitleOverlay.classList.add('show');
        roundTitleText.textContent = `Round ${frenchRoundNumber(state.currentRound)} - Tell Me About It`;
        roundTitleInstructions.textContent = 'Tap 👄 to hear French · Then tap the matching English!';
        
        try {
            setupRound();
            console.log('R5 (skip): setupRound succeeded, roundWords:', state.roundWords.length, 'listenMode:', state.listenMode);
        } catch (e) {
            console.error('Round 5 (skip) setup failed:', e);
        }
        
        setTimeout(() => {
            console.log('R5 (skip): Title timeout fired, starting spawning. roundWords:', state.roundWords.length, 'listenMode:', state.listenMode);
            console.log('R5 (skip): gameArea dimensions:', gameArea.offsetWidth, 'x', gameArea.offsetHeight);
            console.log('R5 (skip): gameLoop active:', !!gameLoop);
            roundTitleOverlay.classList.remove('show');
            resetRoundTimer();
            startRoundTimer();
            startSpawning();
            setTimeout(() => {
                console.log('R5 (skip): After 1s - cards in state:', state.cards.length, 'DOM cards:', gameArea.querySelectorAll('.card').length);
            }, 1000);
        }, 3000);
    } else if (isPongRound2) {
        roundTitleOverlay.classList.add('show');
        roundTitleText.textContent = `Round ${frenchRoundNumber(state.currentRound)} - Conversation Pong`;
        roundTitleInstructions.innerHTML = '\u2190 \u2192 move paddle \u00b7 Space to load a reply \u00b7 Space again to launch!<br><br><span style="color:#1a5c2a;font-weight:600;">\u2705 Multiple correct replies \u00b7 Speed increases with each match!</span>';
        setupRound();
        setTimeout(() => {
            roundTitleOverlay.classList.remove('show');
            resetRoundTimer();
            startRoundTimer();
        }, 3000);
    } else if (isCoffeeShopRound2) {
        // Show special instructions for coffee shop round
        roundTitleOverlay.classList.add('show');
        roundTitleText.textContent = `Round ${frenchRoundNumber(state.currentRound)} - Au Café`;
        roundTitleInstructions.textContent = 'Match café items to their French names!';
        
        // Setup round while showing title
        setupRound();
        
        // After 3 seconds, start the round
        setTimeout(() => {
            roundTitleOverlay.classList.remove('show');
            resetRoundTimer();
            startRoundTimer();
            startSpawning();
        }, 3000);
    } else if (isShooterRound2) {
        // Show special instructions for shooter mode
        roundTitleOverlay.classList.add('show');
        roundTitleText.textContent = `Round ${frenchRoundNumber(state.currentRound)} - Breakout!`;
        roundTitleInstructions.innerHTML = '← → move paddle · Catch the matching emojis!<br><br><span style="color:#d32f2f;font-weight:600;">⚠️ Caution: Hitting the wrong word increases the speed of the emoji!</span>';
        
        // Setup round while showing title
        setupRound();
        
        // After 3 seconds, start the round
        setTimeout(() => {
            roundTitleOverlay.classList.remove('show');
            resetRoundTimer();
            startRoundTimer();
            startSpawning();
        }, 3000);
    } else {
        // Show "Match the Pairs" for normal rounds
        validationOverlay.classList.add('show');
        validationText.textContent = 'Match the Pairs';
        validationSubtitle.style.display = 'none';
        validationStatus.textContent = '';
        
        // Setup round
        setupRound();
        
        // After 3 seconds, start the round
        setTimeout(() => {
            validationOverlay.classList.remove('show');
            resetRoundTimer();
            startRoundTimer();
            startSpawning();
        }, 3000);
    }
}


// ============================================
// TIMER + VOICE
// ============================================
const timerValueEl = document.getElementById('timer-value');
let roundStartPerf = null;
let timerTick = null;
let roundElapsedMs = 0;

function formatTime(ms) {
    const totalTenths = Math.floor(ms / 100);
    const tenths = totalTenths % 10;
    const totalSeconds = Math.floor(totalTenths / 10);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60);
    const mm = String(minutes).padStart(2, '0');
    const ss = String(seconds).padStart(2, '0');
    return `${mm}:${ss}.${tenths}`;
}

function resetRoundTimer() {
    roundElapsedMs = 0;
    roundStartPerf = performance.now();
    if (timerValueEl) timerValueEl.textContent = formatTime(0);
    if (roundTimeValueEl) roundTimeValueEl.textContent = formatTime(0);
}

function startRoundTimer() {
    if (timerTick) clearInterval(timerTick);
    roundStartPerf = performance.now();
    timerTick = setInterval(() => {
        if (state.paused) return;
        const now = performance.now();
        roundElapsedMs += (now - roundStartPerf);
        roundStartPerf = now;
        if (timerValueEl) timerValueEl.textContent = formatTime(roundElapsedMs);
    }, 100);
}

function stopRoundTimer() {
    if (timerTick) {
        clearInterval(timerTick);
        timerTick = null;
    }
}

// Voice pronunciation via Web Speech API (best-effort)
let audioUnlocked = true;
let cachedFrenchVoice = null;
let voiceListCache = [];
const VOICE_SETTINGS_KEY = 'frenchfast_v20_voice_settings';

function loadVoiceSettings() {
    try {
        const raw = localStorage.getItem(VOICE_SETTINGS_KEY);
        if (!raw) return;
        const data = JSON.parse(raw);
        audioUnlocked = !!data.audioUnlocked;
        if (voiceSelect && data.selectedVoice) {
            voiceSelect.value = data.selectedVoice;
        }
    } catch (e) {}
}

function saveVoiceSettings() {
    try {
        localStorage.setItem(VOICE_SETTINGS_KEY, JSON.stringify({
            audioUnlocked,
            selectedVoice: (voiceSelect ? voiceSelect.value : 'auto')
        }));
    } catch (e) {}
}

function scoreFrenchVoice(v) {
    const lang = (v.lang || '').toLowerCase();
    const name = (v.name || '').toLowerCase();
    let score = 0;

    // Language preference
    if (lang === 'fr-fr') score += 1000;
    if (lang.startsWith('fr')) score += 800;

    // Quality preference heuristics (macOS tends to expose "Enhanced"/"Premium")
    if (name.includes('premium')) score += 200;
    if (name.includes('enhanced')) score += 150;
    if (name.includes('neural')) score += 120;

    // De-prioritize obvious non-French
    if (!lang.startsWith('fr')) score -= 500;

    return score;
}

function getAllVoices() {
    if (!('speechSynthesis' in window) || !window.speechSynthesis.getVoices) return [];
    return window.speechSynthesis.getVoices() || [];
}

function pickBestFrenchVoice(voices) {
    let best = null;
    let bestScore = -1e9;
    for (const v of voices) {
        const s = scoreFrenchVoice(v);
        if (s > bestScore) {
            bestScore = s;
            best = v;
        }
    }
    return best;
}

function populateVoiceSelect() {
    if (!voiceSelect) return;
    const voices = getAllVoices();
    voiceListCache = voices;

    // Keep current selection if possible
    const current = voiceSelect.value || 'auto';

    // Clear options, keep auto
    voiceSelect.innerHTML = '';
    const optAuto = document.createElement('option');
    optAuto.value = 'auto';
    optAuto.textContent = 'Auto (best French)';
    voiceSelect.appendChild(optAuto);

    // Add French voices — only Thomas and Amelie
    const frVoices = voices.filter(v => {
        const name = (v.name || '').toLowerCase();
        return name.includes('thomas') || name.includes('amelie') || name.includes('amélie');
    });
    frVoices.sort((a,b) => scoreFrenchVoice(b) - scoreFrenchVoice(a));

    for (const v of frVoices) {
        const opt = document.createElement('option');
        // voiceURI is most stable; fallback to name
        opt.value = v.voiceURI || v.name;
        opt.textContent = `${v.name} (${v.lang})`;
        voiceSelect.appendChild(opt);
    }

    // Restore selection if still available
    const values = new Set([...voiceSelect.options].map(o => o.value));
    voiceSelect.value = values.has(current) ? current : 'auto';
}

function resolveSelectedVoice() {
    const voices = voiceListCache.length ? voiceListCache : getAllVoices();
    const frVoices = voices.filter(v => (v.lang || '').toLowerCase().startsWith('fr'));
    
    // Amelie for odd rounds (1,3,5...), Thomas for even (2,4,6...)
    const wantAmelie = (state.currentRound % 2) === 1;
    const targetName = wantAmelie ? 'amelie' : 'thomas';
    const altName = wantAmelie ? 'thomas' : 'amelie';
    
    // Try to find target voice
    let voice = frVoices.find(v => (v.name || '').toLowerCase().includes(targetName));
    if (!voice) voice = frVoices.find(v => (v.name || '').toLowerCase().includes(altName));
    if (!voice) voice = pickBestFrenchVoice(voices);
    if (!voice) voice = voices[0] || null;
    return voice;
}

function updateVoiceStatus(msg, ok=false) {
    if (!voiceStatusEl) return;
    voiceStatusEl.textContent = msg || '';
    voiceStatusEl.style.color = ok ? '#2E7D32' : '#999';
}

// Prime voices. On Safari/macOS, premium voices often appear only after a user-gesture speak.
function primeVoices() {
    if (!('speechSynthesis' in window)) return;
    populateVoiceSelect();
    cachedFrenchVoice = resolveSelectedVoice();
}

if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
        primeVoices();
        updateVoiceStatus(audioUnlocked ? 'Audio enabled' : 'Click Enable Audio');
    };
    // Nudge async loading
    setTimeout(primeVoices, 250);
    setTimeout(primeVoices, 1500);
}

function speakFrench(text) {
    try {
        if (!audioUnlocked) {
            updateVoiceStatus('Click Enable Audio', false);
            return;
        }
        if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) return;

        primeVoices();
        const voice = resolveSelectedVoice();
        if (!voice) return;

        const utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'fr-FR';
        utter.rate = 0.95;
        utter.pitch = 1.0;
        utter.voice = voice;

        // Avoid backlog
        if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
            window.speechSynthesis.cancel();
        }

        window.speechSynthesis.speak(utter);
    } catch (e) {
        console.warn('Speech synthesis failed:', e);
    }
}

function unlockAudio() {
    // Must be called from a user gesture (button click) for Safari to expose premium voices reliably
    try {
        audioUnlocked = true;
        saveVoiceSettings();
        primeVoices();
        updateVoiceStatus('Audio enabled', true);
    } catch (e) {}
}


// ============================================
// PROGRESS
// ============================================
function loadProgress() {
    // Get or create player ID
    state.playerId = getOrCreatePlayerId();
    
    const saved = localStorage.getItem('frenchfast_v20_progress');
    state.wordProgress = {};
    state.learnedCount = 0;

    if (saved) {
        try {
            const data = JSON.parse(saved);
            // Verify it's for this player
            if (data.playerId === state.playerId) {
                state.wordProgress = data.wordProgress || {};
            } else {
                console.log('Progress data is for different player, starting fresh');
            }
        } catch (e) {
            console.warn('Progress parse failed:', e);
        }
    }

    for (const k of Object.keys(state.wordProgress)) {
        const p = state.wordProgress[k];
        if (p && p.learned) state.learnedCount += 1;
    }
    
    console.log(`Loaded progress: ${state.learnedCount} words learned, ${Object.keys(state.wordProgress).length} words tracked`);
}


function saveProgress() {
    localStorage.setItem('frenchfast_v20_progress', JSON.stringify({
        playerId: state.playerId,
        wordProgress: state.wordProgress,
        lastSaved: Date.now()
    }));
}


function updateProgressDisplay() {
    const percentage = (state.learnedCount / state.totalWords) * 100;
    progressBar.style.height = percentage + '%';
}

function handleLearnProgress(frenchWord) {
    const key = normalizeFrench(frenchWord);
    
    if (!state.wordProgress[key]) {
        state.wordProgress[key] = { 
            timesCorrect: 0, 
            learned: false, 
            lastSeen: 0, 
            display: frenchWord 
        };
    }

    const progress = state.wordProgress[key];
    progress.display = frenchWord;
    progress.timesCorrect += 1;
    progress.lastSeen = Date.now();

    if (!progress.learned && progress.timesCorrect >= 3) {
        progress.learned = true;
        state.learnedCount += 1;
        console.log(`Word learned: ${frenchWord} (${state.learnedCount} total)`);
    }

    saveProgress();
    updateProgressDisplay();
}

// Check if a word should appear based on spaced repetition
// Learned words appear at 1/10 probability
function shouldIncludeWord(frenchWord) {
    const key = normalizeFrench(frenchWord);
    const progress = state.wordProgress[key];
    
    if (!progress || !progress.learned) {
        return true; // Always include unlearned words
    }
    
    // Learned words have 1/10 chance of appearing
    return Math.random() < 0.1;
}


function updateCardCount() {
    const totalBase = state.roundWords.length;
    const totalChallenges = state.roundChallenges ? state.roundChallenges.length : 0;
    
    // In typing mode, icon mode, color mode, or shooter mode, each word is one step. Otherwise it's base pairs + challenge steps
    const totalSteps = (state.typingMode || state.iconMode || state.colorMode || state.comboMode || state.shooterMode || state.listenMode) ? totalBase : (totalBase + (totalChallenges * 2));

    matchedCountEl.textContent = state.matchedSteps;
    totalCountEl.textContent = totalSteps;
}

function showNextIcon() {
    if (!state.iconMode) return;
    
    if (state.iconQueue.length === 0) {
// Round complete
state.iconTarget = null;
centerIconCircle.textContent = '✓';
return;
    }
    
    // Get next icon from queue
    state.iconTarget = state.iconQueue.shift();
    centerIconCircle.textContent = state.iconTarget.emoji;
    centerIconCircle.classList.remove('correct', 'incorrect');
}

function handleIconModeClick(card) {
    if (!state.iconMode || !state.iconTarget) return false;
    
    // Only word cards can be clicked in icon mode
    if (card.type !== 'word') return false;
    
    const targetKey = normalizeFrench(state.iconTarget.french);
    const clickedKey = normalizeFrench(card.wordData.french);
    
    if (clickedKey === targetKey) {
// Correct!
speakFrench(card.wordData.french);

centerIconCircle.classList.add('correct');
card.element.classList.add('correct');

state.matchedKeys.add(card.pairKey);
state.matchedSteps += 1;
updateCardCount();

handleLearnProgress(card.wordData.french);

setTimeout(() => {
    removeCard(card);
    showNextIcon();
    checkRoundComplete();
}, 500);

return true;
    } else {
// Wrong
centerIconCircle.classList.add('incorrect');
card.element.classList.add('incorrect');

// Show correct word briefly on the icon
const originalEmoji = centerIconCircle.textContent;
centerIconCircle.textContent = state.iconTarget.french;

setTimeout(() => {
    centerIconCircle.classList.remove('incorrect');
    card.element.classList.remove('incorrect');
    centerIconCircle.textContent = originalEmoji;
}, 800);

return true;
    }
}


// ============================================
// CARD SPAWNING
// ============================================
function spawnEmojiCardAt(index) {
    const wordData = state.roundWords[index];
    if (!wordData) {
console.error(`No wordData at index ${index}`);
return;
    }
    const key = wordData.key;

    // Don't spawn if already matched or already present
    if (state.matchedKeys.has(key)) return;

    const existing = state.activePairs.get(key);
    if (existing && existing.emoji) return;

    const id = cardIdCounter++;
    const pos = getSpawnPosition();

    const card = {
id,
type: 'emoji',
wordData,
pairIndex: index,
pairKey: key,
x: pos.x,
y: pos.y,
vx: pos.vx,
vy: pos.vy,
width: 58,
height: 58,
frozen: false,
element: null
    };

    const el = document.createElement('div');
    el.className = 'card emoji-card';
    el.dataset.id = id;
    el.dataset.pairKey = key;
    el.textContent = wordData.emoji;
    el.style.left = pos.x + 'px';
    el.style.top = pos.y + 'px';
    gameArea.appendChild(el);

    card.element = el;
    state.cards.push(card);

    // Track active pair
    if (!state.activePairs.has(key)) {
state.activePairs.set(key, { emoji: card, word: null, spawnTime: Date.now(), pairIndex: index });
    } else {
state.activePairs.get(key).emoji = card;
state.activePairs.get(key).pairIndex = index;
    }
}

function spawnWordCardAt(index) {
    const wordData = state.roundWords[index];
    if (!wordData) {
console.error(`No wordData at index ${index}`);
return;
    }
    const key = wordData.key;

    // Don't spawn if already matched or already present
    if (state.matchedKeys.has(key)) return;

    const existing = state.activePairs.get(key);
    if (existing && existing.word) return;

    const id = cardIdCounter++;
    const pos = getSpawnPosition();

    const card = {
id,
type: 'word',
wordData,
pairIndex: index,
pairKey: key,
x: pos.x,
y: pos.y,
vx: pos.vx,
vy: pos.vy,
width: 0,
height: 0,
frozen: false,
element: null
    };

    const el = document.createElement('div');
    el.className = 'card word-card';
    el.dataset.id = id;
    el.dataset.pairKey = key;
    el.textContent = wordData.french;
    el.style.left = pos.x + 'px';
    el.style.top = pos.y + 'px';
    gameArea.appendChild(el);

    card.element = el;
    card.width = el.offsetWidth;
    card.height = el.offsetHeight;

    state.cards.push(card);

    // Track active pair
    if (!state.activePairs.has(key)) {
state.activePairs.set(key, { emoji: null, word: card, spawnTime: Date.now(), pairIndex: index });
    } else {
state.activePairs.get(key).word = card;
state.activePairs.get(key).pairIndex = index;
    }

    updateCardCount();
}

// Phrase mode: spawn French card
function spawnFrenchCardAt(index) {
    const wordData = state.roundWords[index];
    if (!wordData) {
console.error(`No wordData at index ${index}`);
return;
    }
    const key = wordData.key;

    // Don't spawn if already matched or already present
    if (state.matchedKeys.has(key)) return;

    const existing = state.activePairs.get(key);
    if (existing && existing.french) return;

    const id = cardIdCounter++;
    const pos = getSpawnPosition();

    const card = {
id,
type: 'french',
wordData,
pairIndex: index,
pairKey: key,
x: pos.x,
y: pos.y,
vx: pos.vx,
vy: pos.vy,
width: 0,
height: 0,
frozen: false,
element: null
    };

    const el = document.createElement('div');
    el.className = 'card french-card';
    el.dataset.id = id;
    el.dataset.pairKey = key;
    el.textContent = wordData.french;
    el.style.left = pos.x + 'px';
    el.style.top = pos.y + 'px';
    gameArea.appendChild(el);

    card.element = el;
    card.width = el.offsetWidth;
    card.height = el.offsetHeight;

    state.cards.push(card);

    // Track active pair
    if (!state.activePairs.has(key)) {
state.activePairs.set(key, { french: card, english: null, spawnTime: Date.now(), pairIndex: index });
    } else {
state.activePairs.get(key).french = card;
state.activePairs.get(key).pairIndex = index;
    }

    updateCardCount();
}

// Phrase mode: spawn English card
function spawnEnglishCardAt(index) {
    const wordData = state.roundWords[index];
    if (!wordData) {
console.error(`No wordData at index ${index}`);
return;
    }
    const key = wordData.key;

    // Don't spawn if already matched or already present
    if (state.matchedKeys.has(key)) return;

    const existing = state.activePairs.get(key);
    if (existing && existing.english) return;

    const id = cardIdCounter++;
    const pos = getSpawnPosition();

    const card = {
id,
type: 'english',
wordData,
pairIndex: index,
pairKey: key,
x: pos.x,
y: pos.y,
vx: pos.vx,
vy: pos.vy,
width: 0,
height: 0,
frozen: false,
element: null
    };

    const el = document.createElement('div');
    el.className = 'card english-card';
    el.dataset.id = id;
    el.dataset.pairKey = key;
    el.textContent = wordData.english;
    el.style.left = pos.x + 'px';
    el.style.top = pos.y + 'px';
    gameArea.appendChild(el);

    card.element = el;
    card.width = el.offsetWidth;
    card.height = el.offsetHeight;

    state.cards.push(card);

    // Track active pair
    if (!state.activePairs.has(key)) {
state.activePairs.set(key, { french: null, english: card, spawnTime: Date.now(), pairIndex: index });
    } else {
state.activePairs.get(key).english = card;
state.activePairs.get(key).pairIndex = index;
    }

    updateCardCount();
}

// Listen mode: spawn mystery "?" card
function spawnMysteryCardAt(index) {
    const wordData = state.roundWords[index];
    if (!wordData) { console.warn('R5 mystery: no wordData at index', index); return; }
    const key = wordData.key;

    if (state.matchedKeys.has(key)) return;
    const existing = state.activePairs.get(key);
    if (existing && existing.mystery) return;

    const id = cardIdCounter++;
    const pos = getSpawnPosition();

    const card = {
        id,
        type: 'mystery',
        wordData,
        pairIndex: index,
        pairKey: key,
        x: pos.x,
        y: pos.y,
        vx: pos.vx,
        vy: pos.vy,
        width: 0,
        height: 0,
        frozen: false,
        element: null
    };

    const el = document.createElement('div');
    el.className = 'card mystery-card';
    el.dataset.id = id;
    el.dataset.pairKey = key;
    el.innerHTML = '<span class="mystery-icon">👄</span>';
    el.style.left = pos.x + 'px';
    el.style.top = pos.y + 'px';
    gameArea.appendChild(el);

    card.element = el;
    card.width = el.offsetWidth;
    card.height = el.offsetHeight;
    state.cards.push(card);
    console.log('R5 mystery card spawned:', wordData.french, 'at', Math.round(pos.x), Math.round(pos.y), 'size:', card.width, card.height);

    if (!state.activePairs.has(key)) {
        state.activePairs.set(key, { mystery: card, answer: null, spawnTime: Date.now(), pairIndex: index });
    } else {
        state.activePairs.get(key).mystery = card;
        state.activePairs.get(key).pairIndex = index;
    }

    updateCardCount();
}

// Listen mode: spawn English answer card
function spawnAnswerCardAt(index) {
    const wordData = state.roundWords[index];
    if (!wordData) return;
    const key = wordData.key;

    if (state.matchedKeys.has(key)) return;
    const existing = state.activePairs.get(key);
    if (existing && existing.answer) return;

    const id = cardIdCounter++;
    const pos = getSpawnPosition();

    const card = {
        id,
        type: 'answer',
        wordData,
        pairIndex: index,
        pairKey: key,
        x: pos.x,
        y: pos.y,
        vx: pos.vx,
        vy: pos.vy,
        width: 0,
        height: 0,
        frozen: false,
        element: null
    };

    const el = document.createElement('div');
    el.className = 'card answer-card';
    el.dataset.id = id;
    el.dataset.pairKey = key;
    el.textContent = wordData.english;
    
    // Size circle based on text length
    const textLen = wordData.english.length;
    let diameter, fontSize;
    if (textLen <= 5) { diameter = 68; fontSize = 13; }
    else if (textLen <= 10) { diameter = 82; fontSize = 13; }
    else if (textLen <= 16) { diameter = 100; fontSize = 12; }
    else if (textLen <= 22) { diameter = 118; fontSize = 11; }
    else { diameter = 136; fontSize = 11; }
    el.style.width = diameter + 'px';
    el.style.height = diameter + 'px';
    el.style.fontSize = fontSize + 'px';
    
    el.style.left = pos.x + 'px';
    el.style.top = pos.y + 'px';
    gameArea.appendChild(el);

    card.element = el;
    card.width = el.offsetWidth;
    card.height = el.offsetHeight;
    state.cards.push(card);

    if (!state.activePairs.has(key)) {
        state.activePairs.set(key, { mystery: null, answer: card, spawnTime: Date.now(), pairIndex: index });
    } else {
        state.activePairs.get(key).answer = card;
        state.activePairs.get(key).pairIndex = index;
    }

    updateCardCount();
}

// Shooter mode: spawn phrase card (French text, shoot to reveal English)
function spawnPhraseCardAt(index) {
    const wordData = state.roundWords[index];
    if (!wordData) {
console.error(`No wordData at index ${index}`);
return;
    }
    const key = wordData.key;

    // Don't spawn if already matched
    if (state.matchedKeys.has(key)) return;

    const id = cardIdCounter++;
    const pos = getSpawnPosition();

    const card = {
id,
type: 'phrase',
wordData,
pairIndex: index,
pairKey: key,
x: pos.x,
y: pos.y,
vx: pos.vx,
vy: pos.vy,
width: 0,
height: 0,
frozen: false,
hit: false,
element: null
    };

    const el = document.createElement('div');
    el.className = 'card phrase-card';
    el.dataset.id = id;
    el.dataset.pairKey = key;
    el.textContent = wordData.french;
    el.style.left = pos.x + 'px';
    el.style.top = pos.y + 'px';
    gameArea.appendChild(el);

    card.element = el;
    card.width = el.offsetWidth;
    card.height = el.offsetHeight;

    state.cards.push(card);
    updateCardCount();
}

function spawnTypingWordCardAt(index) {
    const wordData = state.roundWords[index];
    if (!wordData) {
console.error(`No wordData at index ${index}`);
return;
    }
    const key = wordData.key;

    // Don't spawn if already matched
    if (state.matchedKeys.has(key)) return;

    const id = cardIdCounter++;
    const pos = getSpawnPosition();

    const card = {
id,
type: 'typing',
wordData,
pairIndex: index,
pairKey: key,
x: pos.x,
y: pos.y,
vx: pos.vx,
vy: pos.vy,
width: 0,
height: 0,
frozen: false,
element: null
    };

    const el = document.createElement('div');
    el.className = 'card word-card typing-card';
    el.dataset.id = id;
    el.dataset.pairKey = key;
    el.dataset.numeral = wordData.numeral;
    el.textContent = wordData.french;
    
    // Assign a cheerful color from the color vocabulary palette
    const KEY_COLORS = [
'#DC143C', '#0055A4', '#FFD700', '#2E8B57', '#FF8C00',
'#7B2D8E', '#FF69B4', '#40E0D0', '#D2691E', '#007FFF',
'#800020', '#B57EDC', '#FF7F50', '#DAA520', '#6B8E23'
    ];
    const keyColor = KEY_COLORS[index % KEY_COLORS.length];
    el.style.background = `radial-gradient(ellipse at 30% 30%, ${keyColor}cc, ${keyColor})`;
    
    el.style.left = pos.x + 'px';
    el.style.top = pos.y + 'px';
    gameArea.appendChild(el);

    card.element = el;
    card.width = el.offsetWidth;
    card.height = el.offsetHeight;

    state.cards.push(card);
    updateCardCount();
}

function spawnComboNumberAt(index) {
    const wordData = state.roundWords[index];
    if (!wordData) return;
    const key = wordData.key;
    if (state.matchedKeys.has(key)) return;
    const existing = state.activePairs.get(key);
    if (existing && existing.emoji) return;

    const id = cardIdCounter++;
    const pos = getSpawnPosition();
    
    // Pick a random vibrant color for the number bubble
    const BUBBLE_COLORS = [
'#DC143C', '#0055A4', '#FFD700', '#2E8B57', '#FF8C00',
'#7B2D8E', '#FF69B4', '#40E0D0', '#007FFF', '#FF7F50',
'#800020', '#B57EDC', '#DAA520', '#6B8E23', '#D2691E'
    ];
    const bubbleColor = BUBBLE_COLORS[Math.floor(Math.random() * BUBBLE_COLORS.length)];

    const card = {
id,
type: 'emoji',
wordData,
pairIndex: index,
pairKey: key,
x: pos.x,
y: pos.y,
vx: pos.vx,
vy: pos.vy,
width: 68,
height: 68,
frozen: false,
element: null
    };

    const el = document.createElement('div');
    el.className = 'card emoji-card combo-number-bubble';
    el.dataset.id = id;
    el.dataset.pairKey = key;
    el.textContent = wordData.emoji || wordData.numeral;
    el.style.width = '68px';
    el.style.height = '68px';
    el.style.fontSize = '32px';
    el.style.lineHeight = '62px';
    el.style.textAlign = 'center';
    el.style.background = `radial-gradient(circle at 35% 35%, ${bubbleColor}dd, ${bubbleColor})`;
    el.style.left = pos.x + 'px';
    el.style.top = pos.y + 'px';
    gameArea.appendChild(el);

    card.element = el;
    state.cards.push(card);

    if (!state.activePairs.has(key)) {
state.activePairs.set(key, { emoji: card, word: null, spawnTime: Date.now(), pairIndex: index });
    } else {
state.activePairs.get(key).emoji = card;
state.activePairs.get(key).pairIndex = index;
    }
}

function spawnColorDiscAt(index) {
    const wordData = state.roundWords[index];
    if (!wordData) {
console.error(`No wordData at index ${index}`);
return;
    }
    const key = wordData.key;

    // Don't spawn if already matched or already present
    if (state.matchedKeys.has(key)) return;

    const existing = state.activePairs.get(key);
    if (existing && existing.emoji) return;

    const id = cardIdCounter++;
    const pos = getSpawnPosition();

    const card = {
id,
type: 'emoji',  // Reuse emoji type for matching logic
wordData,
pairIndex: index,
pairKey: key,
x: pos.x,
y: pos.y,
vx: pos.vx,
vy: pos.vy,
width: 72,
height: 72,
frozen: false,
element: null
    };

    const el = document.createElement('div');
    el.className = 'card color-disc';
    el.dataset.id = id;
    el.dataset.pairKey = key;
    
    // Special rainbow handling for "couleur"
    if (wordData.color === 'rainbow') {
el.style.background = 'conic-gradient(from 0deg, #ff0000, #ff8800, #ffff00, #00cc00, #0066ff, #8800ff, #ff0000)';
el.style.borderColor = 'rgba(0,0,0,0.2)';
    } else {
el.style.backgroundColor = wordData.color || '#888';

// Add subtle border color variation for light colors
const hex = wordData.color || '#888';
const r = parseInt(hex.slice(1, 3), 16);
const g = parseInt(hex.slice(3, 5), 16);
const b = parseInt(hex.slice(5, 7), 16);
const brightness = (r * 299 + g * 587 + b * 114) / 1000;
if (brightness > 200) {
    el.style.borderColor = `rgba(0,0,0,0.35)`;
}
    }
    
    el.style.left = pos.x + 'px';
    el.style.top = pos.y + 'px';
    gameArea.appendChild(el);

    card.element = el;
    state.cards.push(card);

    // Track active pair
    if (!state.activePairs.has(key)) {
state.activePairs.set(key, { emoji: card, word: null, spawnTime: Date.now(), pairIndex: index });
    } else {
state.activePairs.get(key).emoji = card;
state.activePairs.get(key).pairIndex = index;
    }
}

function spawnQuantityCardAt(challengeIndex) {
    const ch = state.roundChallenges[challengeIndex];
    if (!ch) return;

    const id = cardIdCounter++;
    const pos = getSpawnPosition();

    const card = {
id,
type: 'quantity',
challengeIndex,
wordData: ch,
x: pos.x,
y: pos.y,
vx: pos.vx,
vy: pos.vy,
width: 70,
height: 58,
frozen: false,
element: null
    };

    const el = document.createElement('div');
    el.className = 'card emoji-card';
    el.dataset.id = id;
    el.textContent = ch.emoji;
    el.style.left = pos.x + 'px';
    el.style.top = pos.y + 'px';
    gameArea.appendChild(el);

    card.element = el;
    state.cards.push(card);
}


// ============================================
// GAME LOOP
// ============================================
function update(currentTime) {
    const deltaTime = (currentTime - lastTime) / 16.67;
    lastTime = currentTime;
    
    if (!state.paused) {
        updateCards(deltaTime);
        
        // Update paddle/pong mode
        if (state.pongMode) {
            updatePongMode(deltaTime);
        } else if (state.shooterMode) {
            updatePaddleMode(deltaTime);
        }
    }
    
    gameLoop = requestAnimationFrame(update);
}

function updateCards(deltaTime) {
    const areaWidth = gameArea.offsetWidth - 60;
    const areaHeight = gameArea.offsetHeight;
    const minDistance = 75;
    const centerX = areaWidth / 2;
    const centerY = areaHeight / 2;
    
    for (const card of state.cards) {
        // Skip frozen cards (selected)
        if (card.frozen) continue;
        
        // Apply velocity
        card.x += card.vx * deltaTime * state.velocityMultiplier;
        card.y += card.vy * deltaTime * state.velocityMultiplier;
        
        // Gravity (reduced)
        card.vy += 0.008 * deltaTime * state.velocityMultiplier;
        
        // In shooter mode, push cards away from center where croissant is
        if (state.shooterMode) {
            const cardCenterX = card.x + card.width / 2;
            const cardCenterY = card.y + card.height / 2;
            const dx = cardCenterX - centerX;
            const dy = cardCenterY - centerY;
            const distToCenter = Math.sqrt(dx * dx + dy * dy);
            const avoidRadius = 120; // Keep cards away from center
            
            if (distToCenter < avoidRadius && distToCenter > 0) {
                const pushStrength = 0.05 * (avoidRadius - distToCenter) / avoidRadius;
                card.vx += (dx / distToCenter) * pushStrength;
                card.vy += (dy / distToCenter) * pushStrength;
            }
        }
        
        // Gentle push away from edges/corners
        const edgeMargin = 80;
        if (card.x < edgeMargin) {
            card.vx += 0.02 * (edgeMargin - card.x) / edgeMargin;
        }
        if (card.x + card.width > areaWidth - edgeMargin) {
            card.vx -= 0.02 * (card.x + card.width - (areaWidth - edgeMargin)) / edgeMargin;
        }
        if (card.y > areaHeight - edgeMargin - card.height) {
            card.vy -= 0.01;
        }
        
        // Air resistance (more dampening)
        card.vx *= 0.99;
        card.vy *= 0.995;
        
        // Bounce off walls (reduced)
        if (card.x < 10) {
            card.x = 10;
            card.vx = Math.abs(card.vx) * 0.4 + 0.1;
        }
        if (card.x + card.width > areaWidth) {
            card.x = areaWidth - card.width;
            card.vx = -Math.abs(card.vx) * 0.4 - 0.1;
        }
        
        // Bounce off bottom (reduced)
        if (card.y + card.height > areaHeight - 10) {
            card.y = areaHeight - card.height - 10;
            card.vy = -Math.abs(card.vy) * 0.3 - 0.05;
            card.vx += (Math.random() - 0.5) * 0.2;
        }
        
        // Bounce off top (keep cards in play)
        if (card.y < 10) {
            card.y = 10;
            card.vy = Math.abs(card.vy) * 0.2;
        }
    }
    
    // Card-card collisions (skip frozen cards) - with stronger separation
    for (let i = 0; i < state.cards.length; i++) {
        for (let j = i + 1; j < state.cards.length; j++) {
            const a = state.cards[i];
            const b = state.cards[j];
            
            const dx = (b.x + b.width/2) - (a.x + a.width/2);
            const dy = (b.y + b.height/2) - (a.y + a.height/2);
            const dist = Math.hypot(dx, dy);
            
            if (dist < minDistance && dist > 0) {
                const overlap = minDistance - dist;
                const nx = dx / dist;
                const ny = dy / dist;
                
                // Push apart (stronger)
                const pushStrength = 0.4;
                if (!a.frozen) {
                    a.x -= nx * overlap * pushStrength;
                    a.y -= ny * overlap * pushStrength;
                }
                if (!b.frozen) {
                    b.x += nx * overlap * pushStrength;
                    b.y += ny * overlap * pushStrength;
                }
                
                // Exchange velocity (only for non-frozen)
                if (!a.frozen && !b.frozen) {
                    const dvx = a.vx - b.vx;
                    const dvy = a.vy - b.vy;
                    a.vx -= nx * dvx * 0.15;
                    a.vy -= ny * dvy * 0.15;
                    b.vx += nx * dvx * 0.15;
                    b.vy += ny * dvy * 0.15;
                }
            }
        }
    }
    
    // Update DOM
    for (const card of state.cards) {
        card.element.style.left = card.x + 'px';
        card.element.style.top = card.y + 'px';
    }
}

// ============================================
// CARD INTERACTION
// ============================================

function handleCardClick(cardId) {
    const card = state.cards.find(c => c.id === cardId);
    if (!card) return;

    // Typing mode: select a card to type the numeral
    if (state.typingMode) {
if (card.type === 'typing') {
    // Deselect if clicking the same card
    if (state.typingTarget && state.typingTarget.id === cardId) {
        state.typingTarget.frozen = false;
        state.typingTarget.element.classList.remove('selected');
        state.typingTarget = null;
        state.selectedCard = null;
        return;
    }
    
    // Deselect previous if any
    if (state.typingTarget) {
        state.typingTarget.frozen = false;
        state.typingTarget.element.classList.remove('selected');
    }
    
    // Select this card
    card.frozen = true;
    card.element.classList.add('selected');
    state.typingTarget = card;
    state.selectedCard = card;
}
return;
    }
    
    // Icon mode: click word cards to match the center icon
    if (state.iconMode) {
if (handleIconModeClick(card)) {
    return;
}
    }
    
    // Phrase mode: match French ↔ English cards
    if (state.phraseMode) {
// Clicking a French card: select it and pronounce
if (card.type === 'french') {
    // Deselect if clicking the same card
    if (state.selectedCard && state.selectedCard.id === cardId) {
        state.selectedCard.frozen = false;
        state.selectedCard.element.classList.remove('selected');
        state.selectedCard = null;
        return;
    }
    
    // Deselect previous if any
    if (state.selectedCard) {
        state.selectedCard.frozen = false;
        state.selectedCard.element.classList.remove('selected');
    }
    
    // Select this card and pronounce
    card.frozen = true;
    card.element.classList.add('selected');
    state.selectedCard = card;
    speakFrench(card.wordData.french);
    return;
}

// Clicking an English card: check if it matches selected French card
if (card.type === 'english') {
    if (!state.selectedCard || state.selectedCard.type !== 'french') {
        // No French card selected, just pronounce this card's French equivalent
        speakFrench(card.wordData.french);
        return;
    }
    
    // Check if keys match
    if (card.pairKey === state.selectedCard.pairKey) {
        // Correct match!
        speakFrench(card.wordData.french);
        
        const frenchCard = state.selectedCard;
        
        frenchCard.element.classList.remove('selected');
        frenchCard.element.classList.add('correct');
        card.element.classList.add('correct');
        
        setTimeout(() => {
            removeCard(frenchCard);
            removeCard(card);
        }, 500);
        
        state.matchedKeys.add(card.pairKey);
        state.matchedSteps += 1;
        updateCardCount();
        
        handleLearnProgress(card.wordData.french);
        handleComboFeedback(true, card.wordData);
        
        state.selectedCard = null;
        
        checkRoundComplete();
    } else {
        // Wrong match
        handleComboFeedback(false);
        card.element.classList.add('incorrect');
        state.selectedCard.element.classList.add('incorrect');
        
        setTimeout(() => {
            card.element.classList.remove('incorrect');
            if (state.selectedCard) {
                state.selectedCard.element.classList.remove('incorrect');
            }
        }, 400);
    }
    return;
}

return;
    }

    // Listen mode ("Tell Me About It"): click mystery card to hear French, then click matching English answer
    if (state.listenMode) {
        // Clicking a mystery "?" card: select it, speak French, reveal it's playing
        if (card.type === 'mystery') {
            // Deselect if clicking the same card
            if (state.selectedCard && state.selectedCard.id === cardId) {
                // Re-speak the phrase
                speakFrench(card.wordData.french);
                return;
            }
            
            // Deselect previous (but DON'T reset it — let its reveal timer keep running)
            if (state.selectedCard) {
                state.selectedCard.frozen = false;
                state.selectedCard.element.classList.remove('selected', 'speaking');
            }
            
            // Select and speak
            card.frozen = true;
            card.element.classList.add('selected', 'speaking');
            state.selectedCard = card;
            speakFrench(card.wordData.french);
            
            // Start a 5-second reveal timer for THIS card (if not already revealed)
            if (!card.revealTimer && !card.revealed) {
                card.revealTimer = setTimeout(() => {
                    card.revealTimer = null;
                    card.revealed = true;
                    card.element.textContent = card.wordData.french;
                    card.element.classList.add('hint-text');
                }, 5000);
            }
            return;
        }

        // Clicking an answer card: check if it matches selected mystery card
        if (card.type === 'answer') {
            if (!state.selectedCard || state.selectedCard.type !== 'mystery') {
                // No mystery card selected - just flash hint
                card.element.classList.add('hint-flash');
                setTimeout(() => card.element.classList.remove('hint-flash'), 400);
                return;
            }
            
            if (card.pairKey === state.selectedCard.pairKey) {
                // Correct match!
                speakFrench(card.wordData.french);
                
                // Clear the card's reveal timer if still pending
                if (state.selectedCard.revealTimer) {
                    clearTimeout(state.selectedCard.revealTimer);
                    state.selectedCard.revealTimer = null;
                }
                
                const mysteryCard = state.selectedCard;
                
                // Reveal the French text on the mystery card before removing
                mysteryCard.element.classList.remove('selected', 'speaking', 'hint-text');
                mysteryCard.element.classList.add('correct', 'revealed');
                mysteryCard.element.textContent = mysteryCard.wordData.french;
                card.element.classList.add('correct');
                
                setTimeout(() => {
                    removeCard(mysteryCard);
                    removeCard(card);
                }, 800);
                
                state.matchedKeys.add(card.pairKey);
                state.matchedSteps += 1;
                updateCardCount();
                
                handleLearnProgress(card.wordData.french);
                handleComboFeedback(true, card.wordData);
                
                state.selectedCard = null;
                
                // Progressive spawning: add the next pair
                if (state.listenSpawnIndex < state.roundWords.length) {
                    spawnMysteryCardAt(state.listenSpawnIndex);
                    spawnAnswerCardAt(state.listenSpawnIndex);
                    state.listenSpawnIndex++;
                }
                
                checkRoundComplete();
            } else {
                // Wrong match - flash red and speak the correct answer
                handleComboFeedback(false);
                card.element.classList.add('incorrect');
                state.selectedCard.element.classList.add('incorrect');
                
                // Briefly show what the mystery card actually was
                const savedCard = state.selectedCard;
                const wasRevealed = savedCard.revealed;
                savedCard.element.textContent = savedCard.wordData.french;
                savedCard.element.classList.add('revealed');
                
                setTimeout(() => {
                    card.element.classList.remove('incorrect');
                    if (savedCard && savedCard.element) {
                        savedCard.element.classList.remove('incorrect', 'revealed');
                        if (wasRevealed) {
                            // Already revealed — keep showing French text
                            savedCard.element.textContent = savedCard.wordData.french;
                            savedCard.element.classList.add('hint-text');
                        } else {
                            // Not yet revealed — restore "?" and let the timer keep running
                            savedCard.element.innerHTML = '<span class="mystery-icon">👄</span>';
                        }
                        // Keep it selected so player can try again
                        savedCard.element.classList.add('selected', 'speaking');
                    }
                }, 1000);
            }
            return;
        }

        return;
    }

    // Click on a quantity card starts a 2-step match: number -> noun
    if (card.type === 'quantity') {
if (state.selectedCard && state.selectedCard.id === cardId) {
    state.selectedCard.frozen = false;
    state.selectedCard.element.classList.remove('selected');
    state.selectedCard = null;
    state.multiStep = null;
    return;
}

if (state.selectedCard) {
    state.selectedCard.frozen = false;
    state.selectedCard.element.classList.remove('selected');
}

state.selectedCard = card;
card.frozen = true;
card.element.classList.add('selected');
state.multiStep = { cardId: card.id, step: 0 };
return;
    }

    // If in a quantity sequence, only accept WORD cards as the next answer
    if (state.multiStep && state.selectedCard) {
const quant = state.cards.find(c => c.id === state.multiStep.cardId);
if (!quant) {
    state.multiStep = null;
} else {
    if (card.type !== 'word') return;

    const expected = (state.multiStep.step === 0)
        ? normalizeFrench(quant.wordData.numberFrench)
        : normalizeFrench(quant.wordData.french);

    if (normalizeFrench(card.wordData.french) === expected) {
        speakFrench(card.wordData.french);

        card.element.classList.remove('selected');
        card.element.classList.add('correct');
        setTimeout(() => removeCard(card), 600);

        state.matchedSteps += 1;
        updateCardCount();

        state.multiStep.step += 1;

        if (state.multiStep.step >= 2) {
            quant.element.classList.remove('selected');
            quant.element.classList.add('correct');
            setTimeout(() => removeCard(quant), 600);

            state.matchedKeys.add(normalizeFrench(quant.wordData.french));
            state.selectedCard = null;
            state.multiStep = null;

            handleLearnProgress(quant.wordData.french);

            checkRoundComplete();
        } else {
            quant.element.textContent = `✓ ${quant.wordData.numberFrench} — now pick the noun`;
        }
    } else {
        quant.element.classList.add('incorrect');
        setTimeout(() => quant.element.classList.remove('incorrect'), 450);

        const original = quant.element.textContent;
        quant.element.textContent = (state.multiStep.step === 0) ? quant.wordData.numberFrench : quant.wordData.french;
        quant.element.classList.add('show-word');
        setTimeout(() => {
            quant.element.textContent = original;
            quant.element.classList.remove('show-word');
        }, 900);
    }
    return;
}
    }

    // Normal matching (emoji <-> word)
    if (state.selectedCard === null) {
state.selectedCard = card;
card.frozen = true;
card.element.classList.add('selected');
    } else if (state.selectedCard.id === cardId) {
state.selectedCard.frozen = false;
state.selectedCard.element.classList.remove('selected');
state.selectedCard = null;
    } else {
const first = state.selectedCard;
const second = card;

if (first.type === second.type) {
    first.frozen = false;
    first.element.classList.remove('selected');
    state.selectedCard = second;
    second.frozen = true;
    second.element.classList.add('selected');
    return;
}

second.frozen = true;
second.element.classList.add('selected');

if (normalizeFrench(first.wordData.french) === normalizeFrench(second.wordData.french)) {
    handleCorrectMatch(first, second);
} else {
    handleWrongMatch(first, second);
}
    }
}


function handleCorrectMatch(card1, card2) {
// Update progress (learned after 3 correct matches total across rounds)
    const key = card1.pairKey || card2.pairKey || normalizeFrench(card1.wordData?.french || card2.wordData?.french);
    const displayFrench = card1.wordData?.french || card2.wordData?.french || key;

    if (!state.wordProgress[key]) {
state.wordProgress[key] = { correctTotal: 0, learned: false, lastCorrect: 0, display: displayFrench };
    }

    const progress = state.wordProgress[key];
    progress.display = displayFrench;
    progress.correctTotal += 1;
    progress.lastCorrect = Date.now();

    if (!progress.learned && progress.correctTotal >= 3) {
progress.learned = true;
state.learnedCount += 1;
    }

    saveProgress();
    updateProgressDisplay();

    speakFrench(displayFrench);

    // Track matched
    state.matchedKeys.add(key);
    state.matchedSteps += 1;
    updateCardCount();

    // Visual feedback
    card1.element.classList.remove('selected');
    card2.element.classList.remove('selected');
    card1.element.classList.add('correct');
    card2.element.classList.add('correct');

    // Remove from active tracking now (but also remove any stray mate defensively)
    const entry = state.activePairs.get(key);
    state.activePairs.delete(key);

    // Remove cards after animation
    setTimeout(() => {
removeCard(card1);
removeCard(card2);

// Defensive: if a mate is still on screen (rare race), remove it too
if (entry) {
    if (entry.emoji && entry.emoji.id !== card1.id && entry.emoji.id !== card2.id) removeCard(entry.emoji);
    if (entry.word && entry.word.id !== card1.id && entry.word.id !== card2.id) removeCard(entry.word);
}

updateCardCount();
checkRoundComplete();
    }, 600);

    state.selectedCard = null;
}


function checkRoundComplete() {
    const totalBase = state.roundWords.length;
    const totalChallenges = state.roundChallenges ? state.roundChallenges.length : 0;
    const totalSteps = (state.typingMode || state.colorMode || state.comboMode || state.shooterMode || state.listenMode) ? totalBase : (totalBase + (totalChallenges * 2));

    if (state.matchedSteps >= totalSteps) {
if (state.spawnInterval) {
    clearInterval(state.spawnInterval);
    state.spawnInterval = null;
}
if (state.emojiSpawnTimer) {
    clearInterval(state.emojiSpawnTimer);
    state.emojiSpawnTimer = null;
}

roundCompleteText.textContent = `ROUND ${frenchRoundNumber(state.currentRound).toUpperCase()} COMPLETE`;
nextRoundBtn.textContent = `Start Round ${frenchRoundNumber(state.currentRound + 1)}`;

stopRoundTimer();
if (roundTimeValueEl) roundTimeValueEl.textContent = formatTime(roundElapsedMs);

speakCongratulations();
roundCompleteOverlay.classList.add('show');
    }
}

function speakCongratulations() {
    const phrases = [
{ text: "Félicitations!", lang: "fr-FR" },
{ text: "Excellent travail!", lang: "fr-FR" },
{ text: "Bravo!", lang: "fr-FR" },
{ text: "Très bien!", lang: "fr-FR" },
{ text: "Magnifique!", lang: "fr-FR" }
    ];
    
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    
    if (!audioUnlocked || !('speechSynthesis' in window)) return;
    
    try {
const voice = resolveSelectedVoice();
const utter = new SpeechSynthesisUtterance(phrase.text);
utter.lang = phrase.lang;
utter.rate = 0.9;
utter.pitch = 1.1;
if (voice) utter.voice = voice;

if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
    window.speechSynthesis.cancel();
}

window.speechSynthesis.speak(utter);
    } catch (e) {
console.warn('Congratulations speech failed:', e);
    }
}


function handleWrongMatch(card1, card2) {
    // Flash red
    card1.element.classList.add('incorrect');
    card2.element.classList.add('incorrect');
    
    // Find the emoji card and show the French word
    const emojiCard = card1.type === 'emoji' ? card1 : card2;
    const originalContent = emojiCard.element.textContent;
    
    // Show the correct French word on the emoji
    emojiCard.element.textContent = emojiCard.wordData.french;
    emojiCard.element.classList.add('show-word');
    
    setTimeout(() => {
        card1.element.classList.remove('selected', 'incorrect');
        card2.element.classList.remove('selected', 'incorrect');
        
        // Restore emoji
        emojiCard.element.textContent = originalContent;
        emojiCard.element.classList.remove('show-word');
        
        // Unfreeze both cards
        card1.frozen = false;
        card2.frozen = false;
    }, 1000);
    
    state.selectedCard = null;
}

function removeCard(card) {
    const index = state.cards.findIndex(c => c.id === card.id);
    if (index !== -1) {
        state.cards.splice(index, 1);
    }
    if (card.element.parentNode) {
        card.element.remove();
    }
    updateCardCount();
}

// ============================================
// KEYBOARD
// ============================================
function handleKeydown(e) {
    // Pong mode controls
    if (state.pongMode && !state.paused) {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            state.paddleMoving.left = true;
            return;
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            state.paddleMoving.right = true;
            return;
        } else if (e.key === ' ') {
            e.preventDefault();
            pongSpaceBar();
            return;
        }
    }

    // Paddle mode controls
    if (state.shooterMode && !state.paused) {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            state.paddleMoving.left = true;
            return;
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            state.paddleMoving.right = true;
            return;
        } else if (e.key === ' ') {
            e.preventDefault();
            assignNewPaddleWord();
            return;
        }
    }
    
    if (e.key === 'p') {
        e.preventDefault();
        togglePause();
    } else if (e.key === ' ' && !state.shooterMode) {
        e.preventDefault();
        togglePause();
    } else if (e.key === 'Escape') {
        if (state.selectedCard) {
            state.selectedCard.frozen = false;
            state.selectedCard.element.classList.remove('selected');
            state.selectedCard = null;
        }
        state.typingTarget = null;
    } else if (state.typingMode && state.typingTarget) {
        const numKey = parseInt(e.key);
        if (!isNaN(numKey) && numKey >= 0 && numKey <= 9) {
            e.preventDefault();
            handleTypingInput(numKey);
        }
    }
}

function handleKeyup(e) {
    if (state.shooterMode || state.pongMode) {
        if (e.key === 'ArrowLeft') state.paddleMoving.left = false;
        if (e.key === 'ArrowRight') state.paddleMoving.right = false;
    }
}

// ============================================
// PADDLE MODE FUNCTIONS (Breakout-style Emoji Catching)
// ============================================

const EMOJI_BG_COLORS = [
    '#DC143C', '#0055A4', '#FFD700', '#2E8B57', '#FF8C00',
    '#7B2D8E', '#FF69B4', '#8B4513', '#00CED1', '#6B8E23',
    '#C0392B', '#2980B9', '#F39C12', '#27AE60', '#8E44AD',
    '#E74C3C', '#3498DB', '#E67E22', '#1ABC9C', '#9B59B6'
];
let emojiBgIdx = 0;

function spawnBounceEmoji(wordData) {
    if (!wordData) return;
    const areaWidth = gameArea.offsetWidth;
    const size = 58;
    
    const el = document.createElement('div');
    el.className = 'bounce-emoji';
    el.textContent = wordData.emoji || '❓';
    el.style.width = size + 'px';
    el.style.height = size + 'px';
    el.style.fontSize = (size * 0.55) + 'px';
    
    const color = EMOJI_BG_COLORS[emojiBgIdx++ % EMOJI_BG_COLORS.length];
    el.style.background = `radial-gradient(circle at 35% 35%, ${color}88, ${color}cc)`;
    
    // Spawn from top at random x
    const x = 20 + Math.random() * (areaWidth - size - 40);
    const y = -size - Math.random() * 80;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    gameArea.appendChild(el);
    
    // Random direction, 50% faster base speed
    const angle = (Math.PI * 0.15) + Math.random() * (Math.PI * 0.7); // mostly downward
    const speed = 2.437 + Math.random() * 2.031;
    
    state.bounceEmojis.push({
        wordData,
        x, y,
        vx: Math.cos(angle) * speed * (Math.random() < 0.5 ? 1 : -1),
        vy: Math.abs(Math.sin(angle)) * speed * 0.95,
        size,
        element: el,
        alive: true,
        growScale: 1.0,
        bgColor: color,
        boostUntil: 0,
        paddleImmuneUntil: 0  // timestamp — immune to paddle until this time
    });
}

function updatePaddleMode(deltaTime) {
    const areaWidth = gameArea.offsetWidth;
    const areaHeight = gameArea.offsetHeight;
    const paddleWidth = 140;
    const paddleHeight = 42;
    const paddleY = areaHeight - paddleHeight - 12;
    const paddle = document.getElementById('paddle');
    
    // Move paddle smoothly
    const pSpeed = 8 * deltaTime;
    if (state.paddleMoving.left) state.paddleX -= pSpeed;
    if (state.paddleMoving.right) state.paddleX += pSpeed;
    state.paddleX = Math.max(0, Math.min(areaWidth - paddleWidth, state.paddleX));
    paddle.style.left = state.paddleX + 'px';
    
    const paddleCX = state.paddleX + paddleWidth / 2;
    
    // Update each emoji
    for (let i = state.bounceEmojis.length - 1; i >= 0; i--) {
        const em = state.bounceEmojis[i];
        if (!em.alive) continue;
        
        const s = em.size;
        
        em.x += em.vx * deltaTime;
        em.y += em.vy * deltaTime;
        
        // Speed boost multiplier (50% faster for 2s after paddle hit)
        const now = performance.now();
        const boosted = em.boostUntil > now;
        const boostMul = boosted ? 1.5 : 1.0;
        
        // Wall bounces — gain 10% speed each bounce
        if (em.x <= 0) { em.x = 0; em.vx = Math.abs(em.vx) * 1.0; }
        if (em.x + s >= areaWidth) { em.x = areaWidth - s; em.vx = -Math.abs(em.vx) * 1.0; }
        if (em.y <= 0) { em.y = 0; em.vy = Math.abs(em.vy) * 1.0; }
        
        // Bottom wrap — exit bottom, reappear at top
        if (em.y > areaHeight + s) {
            em.y = -s;
            em.x = 20 + Math.random() * (areaWidth - s - 40);
        }
        
        // Apply boost to movement
        if (boosted) {
            em.x += em.vx * deltaTime * 0.5; // extra 50% movement
            em.y += em.vy * deltaTime * 0.5;
        }
        
        // Paddle collision — only when moving downward
        const eCX = em.x + s / 2;
        if (em.vy > 0 &&
            (!em.paddleImmuneUntil || performance.now() > em.paddleImmuneUntil) &&
            em.y + s >= paddleY && em.y + s <= paddleY + paddleHeight + 8 &&
            eCX >= state.paddleX - 5 && eCX <= state.paddleX + paddleWidth + 5) {
            
            // Bounce
            em.vy = -Math.abs(em.vy);
            em.y = paddleY - s;
            
            // Angle based on hit position
            const hitPos = (eCX - paddleCX) / (paddleWidth / 2);
            em.vx += hitPos * 2.5;
            
            // 50% speed boost for 2 seconds after paddle contact
            em.boostUntil = performance.now() + 2000;
            
            // Check match
            if (state.paddleWord &&
                normalizeFrench(em.wordData.french) === normalizeFrench(state.paddleWord.french)) {
                // ✓ CORRECT — destroy emoji
                speakFrench(em.wordData.french);
                handleLearnProgress(em.wordData.french);
                
                em.alive = false;
                em.element.classList.add('popping');
                setTimeout(() => { if (em.element.parentNode) em.element.remove(); }, 550);
                
                // Shockwave ring effect
                const ring = document.createElement('div');
                ring.className = 'pop-ring';
                ring.style.left = (em.x + em.size/2) + 'px';
                ring.style.top = (em.y + em.size/2) + 'px';
                gameArea.appendChild(ring);
                setTimeout(() => { if (ring.parentNode) ring.remove(); }, 600);
                
                paddle.classList.add('catching');
                setTimeout(() => paddle.classList.remove('catching'), 400);
                
                handleComboFeedback(true, em.wordData);
                
                state.matchedKeys.add(normalizeFrench(em.wordData.french));
                state.clearedEmojis++;
                state.matchedSteps = state.clearedEmojis;
                updateCardCount();
                
                assignNewPaddleWord();
                
                document.getElementById('paddle-hint').classList.remove('show');
                
                state.bounceEmojis.splice(i, 1);
                
                checkRoundComplete();
                continue;
            } else {
                // ✗ WRONG — bounce with extra energy
                speakFrench(em.wordData.french);
                
                em.vx *= 1.1;
                em.vy *= 1.1;
                
                paddle.classList.add('missing');
                setTimeout(() => paddle.classList.remove('missing'), 350);
                
                handleComboFeedback(false);
            }
        }
        
        // Emoji-to-emoji collision
        for (let j = i - 1; j >= 0; j--) {
            const other = state.bounceEmojis[j];
            if (!other.alive) continue;
            
            const dx = (em.x + em.size/2) - (other.x + other.size/2);
            const dy = (em.y + em.size/2) - (other.y + other.size/2);
            const dist = Math.sqrt(dx*dx + dy*dy);
            const minDist = (em.size + other.size) / 2;
            
            if (dist < minDist && dist > 0) {
                const nx = dx / dist;
                const ny = dy / dist;
                const overlap = minDist - dist;
                
                em.x += nx * overlap * 0.5;
                em.y += ny * overlap * 0.5;
                other.x -= nx * overlap * 0.5;
                other.y -= ny * overlap * 0.5;
                
                const dvx = em.vx - other.vx;
                const dvy = em.vy - other.vy;
                const dot = dvx * nx + dvy * ny;
                
                if (dot > 0) {
                    em.vx -= dot * nx * 0.875;
                    em.vy -= dot * ny * 0.875;
                    other.vx += dot * nx * 0.875;
                    other.vy += dot * ny * 0.875;
                }
            }
        }
        
        
        // Clamp velocity to prevent insane speeds
        const maxV = 12;
        em.vx = Math.max(-maxV, Math.min(maxV, em.vx));
        em.vy = Math.max(-maxV, Math.min(maxV, em.vy));
        
        em.element.style.left = em.x + 'px';
        em.element.style.top = em.y + 'px';
    }
}

function updateBreakoutScore(delta) {
    state.breakoutScore += delta;
    const el = document.getElementById('top-score');
    el.textContent = state.breakoutScore;
    if (state.breakoutScore < 0) {
        el.style.color = '#F44336';
    } else {
        el.style.color = '#4CAF50';
    }
}

function handleComboFeedback(correct, wordData) {
    if (!state.comboMode && !state.shooterMode) return;
    
    if (correct) {
        state.comboStreak++;
        updateBreakoutScore(1);
        
        // Streak display
        const streakEl = document.getElementById('streak-counter');
        if (state.comboStreak >= 3) {
            streakEl.textContent = `🔥 ${state.comboStreak}x`;
            streakEl.className = state.comboStreak >= 5 ? 'blaze show' : 'fire show';
        } else {
            streakEl.textContent = '';
        }
        
        // Color flash on color match
        if (wordData && wordData.itemType === 'color' && wordData.color) {
            const flash = document.getElementById('color-flash');
            flash.style.background = `radial-gradient(circle, ${wordData.color}44, ${wordData.color}22, transparent)`;
            flash.classList.remove('flash', 'rainbow');
            void flash.offsetWidth;
            flash.classList.add('flash');
            setTimeout(() => flash.classList.remove('flash'), 650);
        }
        
        // Rainbow burst at 5-streak
        if (state.comboStreak === 5 || state.comboStreak === 10) {
            const flash = document.getElementById('color-flash');
            flash.classList.remove('flash', 'rainbow');
            void flash.offsetWidth;
            flash.classList.add('rainbow');
            setTimeout(() => flash.classList.remove('rainbow'), 1300);
        }
    } else {
        state.comboStreak = 0;
        updateBreakoutScore(-1);
        const streakEl = document.getElementById('streak-counter');
        streakEl.textContent = '';
        streakEl.className = '';
    }
}

function assignNewPaddleWord() {
    const paddle = document.getElementById('paddle');
    // Prefer words that still have live emojis on screen
    const liveKeys = state.bounceEmojis
        .filter(e => e.alive)
        .map(e => normalizeFrench(e.wordData.french));
    const uniqueLive = [...new Set(liveKeys)];
    const unmatched = uniqueLive.filter(k => !state.matchedKeys.has(k));
    
    if (unmatched.length > 0) {
        const pick = unmatched[Math.floor(Math.random() * unmatched.length)];
        const wd = state.bounceEmojis.find(e => e.alive && normalizeFrench(e.wordData.french) === pick)?.wordData;
        if (wd) {
            state.paddleWord = wd;
            paddle.textContent = wd.french;
            return;
        }
    }
    // Fallback: any remaining unmatched word
    const remaining = state.roundWords.filter(w => !state.matchedKeys.has(normalizeFrench(w.french)));
    if (remaining.length > 0) {
        state.paddleWord = remaining[Math.floor(Math.random() * remaining.length)];
        paddle.textContent = state.paddleWord.french;
    } else {
        state.paddleWord = null;
        paddle.textContent = '\u2713';
    }
}

function handleTypingInput(numeral) {
    if (!state.typingTarget) return;
    
    const card = state.typingTarget;
    const expectedNumeral = card.wordData.numeral;
    
    if (numeral === expectedNumeral) {
        // Correct!
        speakFrench(card.wordData.french);
        
        card.element.classList.remove('selected');
        card.element.classList.add('correct');
        
        // Flip to show the numeral
        card.element.textContent = `${expectedNumeral}`;
        card.element.classList.add('show-word');
        
        state.matchedKeys.add(card.pairKey);
        state.matchedSteps += 1;
        updateCardCount();
        
        // Update learning progress
        handleLearnProgress(card.wordData.french);
        
        setTimeout(() => {
            removeCard(card);
            checkRoundComplete();
        }, 800);
        
        state.typingTarget = null;
        state.selectedCard = null;
    } else {
        // Wrong - flash red and show correct numeral briefly
        card.element.classList.add('incorrect');
        const original = card.element.textContent;
        card.element.textContent = `${expectedNumeral}`;
        card.element.classList.add('show-word');
        
        setTimeout(() => {
            card.element.classList.remove('incorrect', 'show-word');
            card.element.textContent = original;
            card.frozen = false;
            card.element.classList.remove('selected');
            state.typingTarget = null;
            state.selectedCard = null;
        }, 1000);
    }
}

// ============================================
// PAUSE
// ============================================
function togglePause() {
    state.paused = !state.paused;
    pauseOverlay.classList.toggle('show', state.paused);
    pauseBtn.textContent = state.paused ? 'Resume' : 'Pause';
}

// ============================================
// START
// ============================================
window.addEventListener('load', init);
    
