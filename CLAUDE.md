# French Fast — Project Notes

## Overview
Vanilla JS French vocabulary game. No framework, no build step needed (uses Vite for dev/bundling).
- **Entry**: `index.html` → `src/main.js` (~4000+ lines, single file), `styles/main.css`
- **Run**: `npm run dev` (Vite)

## Git / GitHub
- Upstream: `kevintraywick/french-fast` (original repo — file issues here)
- Fork: `deliciousllc/french-fast-delicious` (origin remote)
- `git remote add upstream https://github.com/kevintraywick/french-fast`
- GitHub username for this project: `deliciousllc`

## Open PRs (as of 2026-02-23)
- **PR #5** — `fix/issue-4-physics`: Physics tuning + top bar redesign. **Not yet merged.**
- **PR (issue #2)** — `fix/issue-2-translation-reveal`: Translation reveal, English hints, audio fixes. **Not yet merged.**
- Both PRs are against `kevintraywick/french-fast` main.

## Game Structure — 6 Rounds
| Round | French Name | Theme | Mode |
|-------|-------------|-------|------|
| 1 | Un | Les Mots | Tile matching |
| 2 | Deux | La Mémoire | Tile matching |
| 3 | Trois | Breakout! | Paddle + bouncing emojis (`shooterMode`) |
| 4 | Quatre | Au Café | Coffee shop matching |
| 5 | Cinq | Tell Me About It | Listen & match (`listenMode`) |
| 6 | Six | Conversation Pong | Missile launch pong (`pongMode`) |

## Key Architecture
- **`state`** object: single source of truth for all game state
- **`pongState`** object: L6-specific state (phraseY, missileX/Y, convIndex, etc.)
- **Game loop**: `requestAnimationFrame` → `update(currentTime)` → `deltaTime` normalized
- **Round setup**: `setupRound()` dispatches by `state.currentRound` → sets mode flags
- **Physics paths**:
  - Non-breakout cards (R1/2/4/5): `updateCards()` → AABB collision, restitution 0.88, no gravity
  - Breakout emojis (R3): `updatePaddleMode()` → circle collision, restitution 0.92
  - L6 missile: straight upward, no bounce
- **`velocityMultiplier`**: always `1.0` — don't change to 0.2 for breakout (was a Codex bug)

## Key Functions
- `setupRound()` — initializes round, dispatches to mode-specific setup
- `setupPongRound()` — L6 setup; calls `loadPongConversation(0, false)` (false = no auto-speak on start)
- `loadPongConversation(index, speak=true)` — loads next L6 phrase; speak=false suppresses auto TTS
- `frenchRoundNumber(n)` — returns French word for round number (Un, Deux... all 1-20)
- `startNextRound()` / `skipRound(direction)` — round navigation
- `togglePause()` — instant resume (no countdown); countdown only on round start/skip
- `runCountdown(callback, immediate=false)` — 3-2-1-GO; `immediate=true` skips it
- `showTranslationToast(wordData)` — shows french=english overlay on correct match
- `showEnglishHint(emojiCard)` — shows English hint after 3 wrong matches
- `updateAudioBtn()` — updates voice-test-btn text/class based on `audioUnlocked`

## Top Bar Layout
```
[LEFT CLUSTER]                              [RIGHT CLUSTER]
[⏮] [Round Cinq | Tell Me About It] [⏭] | ⏱ 00:00.0 | ✓ 0/50     [🔊 Audio] [Voice ▾]  [🌙]  [Pause]
```
- `.top-bar-left` / `.top-bar-right` with `margin-left: auto` on right
- `#round-label`: fixed `width: 270px` — keeps nav buttons in same position all levels
- `#round-theme:not(:empty)::before` — CSS inserts ` | ` separator, no JS involvement
- All buttons + `<select>` share `height: 29px; box-sizing: border-box`
- `#theme-toggle-btn` and `#pause-btn` have `margin-left: 8px` for visual sub-group separation

## Audio
- `audioUnlocked` defaults to `true`
- `loadVoiceSettings()` is defined but **never called** — saved voice state not restored on load (known gap)
- Voice test button click: toggles `audioUnlocked`; enabling plays "Bonjour" utterance
- `saveVoiceSettings()` saves `audioUnlocked` + selected voice to localStorage

## CSS Dark Mode
- Toggle: `body.dark-mode` class
- All top-bar buttons: `body.dark-mode #top-bar button` rule
- Audio on dark: `body.dark-mode #voice-test-btn.audio-on` — dark green tint
- `#round-theme` dark: `color: #64b5f6` (light blue)

## Known Issues / Future Work
- `loadVoiceSettings()` never called — voice preference not restored on page reload
- `SESSION_HANDOFF_2026-02-23.md` in project root — Codex artifact, safe to delete
- Mobile layout not built yet — top bar groups are designed to stack vertically when needed
- PRs #2 and #5 not yet merged into upstream
