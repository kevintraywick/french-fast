Original prompt: Let's get back to french-fast/SESSION_HANDOFF_2026-02-23.md. Bounce physics are looking much better. Tiles are moving a bit too slowly--they should do a few things:
- Start slightly faster on each level
- Have more random variation in speed from tile to tile
- Bounce threshold should be at the edges of the tiles--right now it looks like they overlap a bit before colliding.

2026-02-23
- Reviewed `SESSION_HANDOFF_2026-02-23.md` and current physics sections in `src/main.js`.
- Updated non-breakout spawn speed to include round-based boost with wider random spread.
- Added per-card `speedVariance` jitter in free-bounce rounds so tiles keep distinct movement speeds.
- Switched non-breakout card-card collisions from circle approximation to edge-based AABB overlap resolution with impulse response.
- Validation: `node --check src/main.js` passed and `npm run build` passed.
- Validation blocker: develop-web-game Playwright client could not run because `playwright` package is not installed in this environment (`ERR_MODULE_NOT_FOUND: Cannot find package 'playwright'`).
- Follow-up tuning after user feedback ("bunched up"): raised non-breakout speed floor/variance band and adjusted edge-collision response with anti-stick separating impulse + tiny tangential jitter to reduce clumping.
- Re-validation: `node --check src/main.js` passed and `npm run build` passed after follow-up tuning.
- Second follow-up after severe clumping/wrap report:
- Root cause found in non-breakout AABB collision branch: normal direction did not match the L3 impulse convention, which can suppress proper bounce and produce wrap/pass-through feel.
- Fix applied: corrected normal direction/sign usage, restored L3-style impulse gate (`velAlongNormal < 0`) and removed the extra anti-stick/tangential jitter additions.
- Retuned non-breakout speed variance slightly down from prior aggressive setting while keeping faster/more varied motion than baseline.
- Re-validation: `node --check src/main.js` passed and `npm run build` passed.
- Verified rounds 1/2/4/5 all use the same non-breakout physics path (`state.shooterMode === false`): same update loop, same wall bounce, same card-card collision branch.
- Identified R4/R5 visual collision drift causes:
- R5 mystery cards can change rendered size/shape after spawn (reveal/hint classes), while cached physics width/height were stale.
- Hover/selection scale transforms changed visible size without changing physics bounds.
- Fixes applied:
- Sync non-breakout `card.width`/`card.height` from live DOM size each frame before physics update.
- Removed hover scale transforms from moving cards (base `.card`, `.mystery-card`, `.answer-card`) and changed mystery pulse to glow-only (no scale growth).
- Re-validation: `node --check src/main.js` passed and `npm run build` passed.
