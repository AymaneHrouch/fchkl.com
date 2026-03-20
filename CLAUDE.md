# CLAUDE.md — fchkl.com

## What is this project

`fchkl.com` is the landing page for the **fchkl universe** — a personal creative ecosystem by Aymane. It serves as a hub pointing to all fchkl subdomains.

The name "fchkl" is Moroccan Darija slang. The vibe is **artistic chaos** — dark, atmospheric, slightly absurdist, bilingual (English + Darija).

## Current subdomains

| Subdomain | Purpose |
|---|---|
| `tswira.fchkl.com` | Photography Instagram page |
| `dirassa.fchkl.com` | Fake academic paper generator (AI-powered) |
| `aymane.fchkl.com` | Personal portfolio |
| `fchkl.com` | This landing page |

## Project structure

```
fchkl.com/
├── index.html   # Markup only
├── style.css    # All styles
└── script.js    # Cursor + canvas background animation
```

No framework. No dependencies. Pure HTML/CSS/JS.

## Design system

**Aesthetic**: dark, artistic chaos. Not clean SaaS. Not playful startup. Think: underground art zine meets personal web.

**Colors**:
- Background: `#0a0a08` (near-black, warm)
- Primary text: `#e8e4d4` (warm off-white)
- Muted text: `#6e6b5a`, `#9e9a88`, `#999788` (card desc)
- Accent gold: `#f0c060` (used for badge, cursor)
- Card accents per portal: tswira `#60b0f0`, dirassa `#c060f0`, aymane `#60f0a0`, unknown `#f06060`

**Typography**:
- Display / headings: `Unbounded` (Google Fonts), weight 700/900
- Body / mono: `Space Mono` (Google Fonts), weight 400/700
- Never swap these for system fonts or Inter

**Animations**: staggered `fadeIn` + `slideUp` on load, CSS only. Keep it subtle.

**Background**: animated canvas with slow-drifting radial gradient orbs. Don't remove this — it's core to the feel.

**Cursor**: custom yellow dot (`#f0c060`), `mix-blend-mode: difference`. Keep on desktop, fine to hide on mobile.

**Noise overlay**: subtle grain texture via SVG filter at ~4% opacity. Keep it.

## Tone & copy guidelines

- Language: English + Darija mix. Not French.
- Darija sprinkles used: `mbrk`, `ntiya l'avé découvert`, `chi haja khra`, `ila Allah`, `soon™`
- Avoid: corporate language, excessive explanation, motivational tone
- Keep it dry, slightly cryptic, a little funny

## When adding a new subdomain

1. Add a new `.link-card` div inside `.links-grid`
2. Define a `--accent` CSS variable for its color
3. Add a class like `.card-{name}` with that variable
4. Keep the same structure: `tag` → `name` → `desc` → `arrow`
5. The "???" dashed card should always stay last as a placeholder

## What NOT to do

- Don't add a navbar, header bar, or footer links
- Don't add a logo image — the typographic `fchkl` IS the logo
- Don't lighten the background or make it "more readable"
- Don't add more than ~6 portal cards without rethinking the grid
- Don't change the fonts
- Don't add social media icons or external link lists outside the card grid
