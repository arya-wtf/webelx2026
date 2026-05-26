# Version 1 — Tracking Doc

**Project:** Elux Space rebrand → Pragmatic AI Product Design Partner
**Folder:** `/Users/aryapradana/Documents/ClaudeDekstop/elux2026`
**Stack:** Vite + React 18 + Tailwind + Framer Motion + GSAP
**Mode:** Lightmode
**Started:** 2026-05-26

---

## Locked decisions (do not revisit in v1)

| Area | Decision |
|---|---|
| Scaffold | Vite + React + Tailwind, full project folder |
| Motion | Framer Motion (component-level) + GSAP ScrollTrigger (scroll-bound) |
| Palette | Off-white + ink + Elux blue |
| BG | `#FAFAF7` |
| Card | `#FFFFFF` |
| Ink | `#101010` |
| Primary | `#2853FF` (kept from existing elux.space) |
| Line | `#E6E5DF` |
| Display font | Plus Jakarta Sans 400/500/600/700 |
| Body font | Figtree 300/400/500/600/700 |
| Copy | Dummy is fine — focus is visual |
| Source of truth | `🖥️ Website Visual Reference — AI Product Design Partner.pdf` |

---

## Section status

Legend: ✅ shipped · 🟡 needs refine · 🔴 skipped, needs real assets · ⏸ later

| # | Section | File | Status | Needs assets? | Notes |
|---|---|---|---|---|---|
| 01 | Hero | `01_Hero.jsx` | 🟡 | no | Orb is CSS gradient placeholder. Tagline + CTA wired. |
| 02 | Trust Strip | `02_TrustStrip.jsx` | 🟡 | no | Text-only logos, Clutch rating. |
| 03 | Portfolio Highlight | `03_PortfolioHighlight.jsx` | 🔴 | YES | Drag-scroll grid live, but 6 cards are gradient placeholders. Skip refine. |
| 04 | How AI-Native Solves It | `04_HowAINativeSolvesIt.jsx` | 🟡 | no | Without/With contrast layout. Pure layout + copy. |
| 05 | Problem → Solution | `05_ProblemSolution.jsx` | 🟡 | no | Stacked cards w/ GSAP reveal. Frame mockups are CSS. |
| 06 | Numbers | `06_Numbers.jsx` | 🟡 | no | 7d / 55% / 89% tiles. Pure typography. |
| 07 | Services by Stage | `07_ServicesByStage.jsx` | 🟡 | no | Seed/Growth/Scale tabs, hover preview. Main commercial section. |
| 08 | Industries | `08_Industries.jsx` | 🔴 | YES | Scroll-bound switcher works, but right panel needs real case visuals. Skip refine. |
| 09 | How We Work | `09_HowWeWork.jsx` | 🟡 | partial | 3 step cards. Radial gradient blobs are acceptable decoration. |
| 10 | Testimonials | `10_Testimonials.jsx` | 🟡 | partial | Quote cards fine. Two video tiles (Fluz, Coinflow) need real client videos later. |
| 11 | Who We're NOT For | `11_WhoWereNotFor.jsx` | 🟡 | no | Anti-positioning + final CTA. Pure layout + copy. |

---

## Refinement priority (asset-light only)

Order I'll work through unless told otherwise:

1. **01 Hero** — biggest first-impression lever
2. **04 How AI-Native Solves It** — the core argument of the whole rebrand
3. **07 Services by Stage** — main commercial section, most interaction
4. **11 Who We're NOT For** — punchy closer, easy quality win
5. **05 Problem → Solution** — stacked-card scroll polish
6. **06 Numbers** — typographic rhythm
7. **02 Trust Strip** — minor, mostly typography
8. **09 How We Work** — gradient assets, motion polish

**Skipped until real assets land:**
- 03 Portfolio Highlight
- 08 Industries
- 10 Testimonials (video tiles only — quote cards stay in scope)

---

## What's done

- [x] Project scaffolded (Vite + React + Tailwind)
- [x] Tokens locked from elux.space (#2853FF, Plus Jakarta Sans, Figtree)
- [x] 11 section components built
- [x] Nav + Footer
- [x] Framer Motion wired (entry, hover, AnimatePresence)
- [x] GSAP wired (Hero orb rotate, Problem→Solution reveal, Industries scroll-switch, Portfolio scroll arrows)
- [x] Production build passes (405 modules, 0 errors)
- [x] Live in browser at `localhost:5173`

## What's pending

- [ ] Refine the 8 asset-light sections (see priority order above)
- [ ] Responsive pass (built for desktop 1240px; mobile + tablet need real review)
- [ ] Micro-interaction audit (hover/focus/active states across buttons + links)
- [ ] Real copy pass (dummy structure may not match final voice)
- [ ] Accessibility check (focus visible, color contrast, keyboard nav)

## Skipped for v1 (need real assets — revisit before launch)

- [ ] Portfolio cards (03) — needs 6+ real project screenshots
- [ ] Industries feature panel (08) — needs case visual per industry
- [ ] Testimonial videos (10) — needs Fluz + Coinflow client video clips
- [ ] Hero orb upgrade — Unicorn.studio asset or Spline scene
- [ ] How We Work step assets (09) — Rive/Remotion 2D animations (optional)

---

## Open questions / decisions deferred

- Hero visual: stay with CSS orb, or commit to Unicorn.studio / Spline?
- Real logo lockup for nav + footer (currently text `elux.space`)
- Favicon and OG image
- Contact form vs. mailto:
- Journal/blog index — link to existing Webflow or rebuild?
- Domain plan: replace elux.space directly or staging subdomain first?

---

## Notes for v2

Version 2 will fork from v1 — same content structure, different visual direction. Candidates discussed:

- Editorial / BORING-agency direction (cream + lime + condensed display)
- Pure-white SaaS direction (crisper, less editorial)
- Other directions TBD

Keep v1 stable; v2 lives in a parallel folder when we start.

---

## File map

```
elux2026/
├── VERSION-1.md          ← this doc
├── README.md
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    │   ├── Nav.jsx
    │   └── Footer.jsx
    └── sections/
        ├── 01_Hero.jsx
        ├── 02_TrustStrip.jsx
        ├── 03_PortfolioHighlight.jsx        🔴 skip
        ├── 04_HowAINativeSolvesIt.jsx
        ├── 05_ProblemSolution.jsx
        ├── 06_Numbers.jsx
        ├── 07_ServicesByStage.jsx
        ├── 08_Industries.jsx                🔴 skip
        ├── 09_HowWeWork.jsx
        ├── 10_Testimonials.jsx
        └── 11_WhoWereNotFor.jsx
```
