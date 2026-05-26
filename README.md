# Elux 2026 — Pragmatic AI Product Design Partner

Version 1 of the new Elux Space homepage. React + Vite + Tailwind + Framer Motion + GSAP.

## Run

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Stack

- **Vite + React 18** — fast dev, single-page output.
- **Tailwind CSS** — utility-first, tokens defined in `tailwind.config.js`.
- **Framer Motion** — component-level transitions (hover, entry, AnimatePresence).
- **GSAP + ScrollTrigger** — scroll-bound effects: Portfolio drag-scroll arrows (03), Problem→Solution card reveals (05), Industries scroll-switch (08), Hero orb rotation (01).

## Design tokens (from elux.space)

- Background: `#FAFAF7`
- Card: `#FFFFFF`
- Ink: `#101010`
- Primary: `#2853FF` (kept from existing site)
- Lines: `#E6E5DF`
- Font display: Plus Jakarta Sans 400/500/600/700
- Font body: Figtree 300/400/500/600/700

## Sections

1. Hero — animated orb, primary CTA
2. Trust Strip — Clutch rating + client logos
3. Portfolio Highlight — drag-scroll grid with GSAP arrows
4. How AI-Native Solves It — Without / With contrast
5. Problem → Solution — stacked cards (GSAP ScrollTrigger reveal)
6. Numbers — 3-up metric tiles
7. Services by Stage — Seed / Growth / Scale tabs with hover preview
8. Industries — scroll-bound industry switcher (GSAP)
9. How We Work — 3-step process cards
10. Testimonials — mixed video + quote grid
11. Who We're NOT For — anti-positioning + final CTA

Version 2 will live in a parallel folder; structure stays compatible.
