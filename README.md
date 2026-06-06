# BirdieX — Golf App Prototype

A high-fidelity mobile UI prototype for BirdieX, a golf social app. Built as a static HTML/CSS/JS prototype for design validation and developer handoff.

---

## Getting Started

No installation required. Download the repo and open `index.html` directly in a browser.

---

## Screens

| Screen | ID | Description |
|---|---|---|
| Feed | `#page-feed` | Home feed with match updates and social activity |
| Match | `#page-match` | Active match scoring and live view |
| Play | `#page-play` | Start a new round / game mode selection |
| Friends | `#page-friends` | Friends list and social connections |
| Profile | `#page-profile` | User profile, stats, and settings |

---

## Design System

See [`design-system.html`](design-system.html) for all components, tokens, and UI patterns used in this prototype.

### Key Tokens

```css
--bx-green: #3DD68C          /* Primary brand color */
--bx-bg: #F4F7F5             /* App background */
--bx-card: #FFFFFF           /* Card surface */
--bx-text: #1A1A1A           /* Primary text */
--bx-muted: #7A8A84          /* Secondary text */
--bx-radius-card: 18px       /* Card border radius */
--bx-radius-btn: 12px        /* Button border radius */
```

### Typography
- Font: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (loaded via Google Fonts)
- Base size: 14px minimum on mobile
- Line height: 1.5–1.7

---

## Project Structure

```
birdiex-prototype/
├── index.html          # Main app (all screens)
├── design-system.html  # Component library & tokens
├── serve.js            # Local dev server
├── assets/
│   ├── brand/          # Logo, avatar placeholders
│   ├── icons/          # SVG icons
│   └── images/         # Course photos, backgrounds
└── CLAUDE.md           # AI design rules (internal)
```

---

## For Developers

This is a **prototype only** — not production code. When implementing:

- All spacing follows an **8px base grid**
- Navigation is tab-based, single-page app structure
- Animations use `cubic-bezier(0.25, 0, 0, 1)` — never `linear` or `ease`
- All transitions respect `prefers-reduced-motion`
- Target viewport: **390px wide** (iPhone 14 Pro base)

---

## Notes

- No backend, no API calls — all data is hardcoded for demo purposes
- No environment variables or secrets in this project
