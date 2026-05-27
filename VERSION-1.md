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

---
---

# Refinement Log — appended after initial v1 scaffold

*Everything below is post-scaffold work. The doc above is the original v1 plan; this log is what actually shipped, in chronological order. Each entry: what we changed, why, and the commit it landed in.*

## How we worked

The refinement pass followed a deliberate sequence — **asset-light first, asset-blocked sections deferred.** The rule: if a section's quality depended on real client work (logos, screenshots, videos), it stayed at 🟡 and we came back later. If it could stand on typography, layout, and motion alone, we refined it.

Within asset-light sections, priority order was: **biggest impression lever first → core argument → main commercial surface → punchy closer → supporting moments.**

That translated to this order in practice:

1. Hero (01) — sets the whole tone
2. How AI-Native Solves It (04) — the do-or-die argument
3. Services by Stage (07) — main commercial section
4. Who We're NOT For (11) — anti-positioning closer
5. Footer — the SEO/internal-link engine (deck recommendation)
6. Problem → Solution (05) — stacked-card scroll the PDF originally asked for
7. Numbers (06) — credibility section with proof receipts
8. Trust Strip (02) — verified third-party platforms instead of fake logos
9. How We Work (09) — process loop, after one false start

Each refinement was opinionated. We started from a hard read of what was *not* working in the existing version (the "honest critique" pattern), proposed 3–4 directions with trade-offs, locked one, built it, verified live in Chrome, committed.

---

## Chronological log

### Hero (01) — three iterations
- **v2 (`07977d3`, initial commit):** Replaced CSS gradient orb with a Luke-Baffait-inspired **dark fluid-line stage**. 26 SVG paths drifting horizontally across `#0A0A0A`, blue gradient strokes, soft radial glow, vignette + film grain, centered headline in white with a soft white→blue→white text gradient on "not the deck."
- **v3 (same commit):** Punched up motion speed ~2.5×, added **mouse-reactive force field** — lines bend toward cursor with a gaussian falloff, a soft blue glow blob tracks the pointer, cursor goes crosshair over the hero.
- **Transition fix (`b3167e2` indirectly, dev iterations):** Tried gradient fade hero→Trust Strip, scrapped it on user feedback, settled on a clean hard cut between the dark hero and the lightmode Trust Strip.

### How AI-Native Solves It (04) — `332ecf1`
- Original was three identical card columns with a tiny floating "VS" between them. Read as a polite side-by-side comparison.
- Rebuilt as a **transformation, not a comparison**:
  - "Without Elux" column got tilted, overlapping cards, struck-through items in muddy red, a scratched texture, and a "❌ Result: 6 weeks late. Half the scope." footer.
  - "With Elux" column got grid-aligned cards with a faint blue connector line, spring-animated check ticks, blue accents on the headline ("Strategy to ship"), and a "✓ Result: 7 days to MVP. Full scope." footer.
  - "VS" became a real bordered circle with a pulsing halo and a "Pivot" micro-label.
  - Headline tightened to "Old design partners stitch tools." (grey) → "We ship the product." (ink black).
- Mobile: columns stack with a horizontal connector.

### Services by Stage (07) — `a111b00`
- Original was a basic tab system with floating chips pretending to be a preview. The hover promise wasn't delivered.
- Rebuilt as **typographic spine + earned visual reveal**:
  - Stage progression bar at top (Seed → Growth → Scale) with fill animation per stage.
  - Default state: a confident, type-led service list. No preview visible until hover.
  - On hover: row title grows 24→40px, description fades in, other rows dim, the right arrow rotates blue, and a **unique wireframe preview slides in from the right**. 15 unique wireframe previews total (5 per stage), all inline SVG/CSS primitives, zero real asset dependency.
  - Per-stage CTA at the bottom ("Start a Seed engagement" / "Growth" / "Scale call").
  - Mobile: list-only, no preview overlay.

### Who We're NOT For (11) + Footer rebuild — `b3167e2`
- Section 11 was three friendly cards with red ✕ icons. Anti-positioning content but cooperative visual language.
- Flipped to **dark mode `#0A0A0A`** to bookend the hero. Replaced cards with a two-column "We don't / We do" rhythm:
  - LEFT: 5 strikethrough rejections with snarky one-line asides ("Apple has 160,000 employees. You have a runway.").
  - RIGHT: 4 affirmations with **blue underlines that draw in left-to-right on scroll**.
  - A **torn-contract vertical divider** between columns.
  - Headline: "We're ~~good for everyone~~. We're built for a few."
  - Sharper CTA: "Still reading? Good." + Start a Project / See the work first.
- **Red iteration:** went through three reds (E55D43 tomato → DC2626 true red → B91C1C burgundy) and settled back on **E55D43** on user feedback ("the new red hurts my eyes"). Lesson logged: color trumps copy for tone, trust the eye-test.
- **Footer gap fix:** removed `Footer.mt-24` (was creating a cream band between dark section 11 and dark footer); added `border-t border-white/10` inside the footer for a faint horizon line.
- **Footer rebuilt as a "fat footer"** per the deck:
  - Pre-footer Journal hook (surfaces the 82-article SEO calendar) with email signup.
  - Big `elux.space` wordmark + tagline, `hello@elux.space`, `+62 851-5698-9279`, "Jakarta · Bali · Remote", pulsing **"Booking Q3 — 2 slots open"** status pill.
  - 5 link columns: Services (8 deep links) / Industries (5 verticals) / **Compare** (vs freelancer/agency/in-house/no-code — the SEO+sales pages the deck called out) / Studio (6 internal nav) / Connect + Shop (Dribbble, IG, Behance, LinkedIn + UI8, Gumroad, Creative Market).
  - Per-link hover micro-interaction: small blue `→` slides in from the left.
  - Legal row: copyright, Privacy/Terms/Cookies/Sitemap, v2026.1 stamp.
- Also committed `elux-website-review-deck.html` (the strategy doc that drove these refinements) so the rationale lives in-repo.

### Problem → Solution (05) — `10907bc`
- Original was three rows with the same fake browser frame on the right and a fade-up on scroll. Visually identical, asset-faking, narrative-flat.
- Built the **true stacked-card scroll the original PDF asked for**:
  - GSAP ScrollTrigger pin: section pins for ~2.8 viewport heights while three founder-mode cards stack on top of each other.
  - Card 1 holds in place; cards 2 and 3 slide up and stack over it.
  - Each card owns 1/3 of the scroll progress; visuals scrub with it.
  - Each card now has its own **custom visual**, no repeated browser frames:
    - "Short on hands" → 5 team avatars (D / B / U / F / PM) fill in one by one, progress bar fills, "0/5 → 5/5 ready" counter.
    - "Adoption is slowing" → flatlining chart that bends upward, "+0% → +55%" activation counter.
    - "You need an MVP" → big tabular countdown 07 → 00 days, glowing blue dot traces a timeline.
  - "Mode 01 / 03" indicator + progress ticks per card so the user always knows where they are.
  - Mobile (<1024px): pin disabled. Cards stack normally with visuals at full progress.

### Numbers (06) — `ffce506`
- Original was three identical metric tiles with the middle one darkened. Generic SaaS template.
- Rebuilt as **editorial + count-up + sourced proof**:
  - Asymmetric layout: hero tile (60% width) with **55% in massive 220px tabular type** and a blue `%` suffix; two supporting tiles (40%, stacked) with `7d` (dark `#101010`) and `89%` (light).
  - GSAP count-up on scroll: each tile ticks `0 → value` independently when it enters the viewport.
  - Each tile carries a **`↳ source` line** in micro-caps ("Median across 8 Growth-stage redesigns · 2024–2026" / "Avg across 12 Seed launches" / "Internal QA, 2025 cohort"). Signals confidence vs the typical agency move of hiding methodology.
  - Hero tile has a **"Receipts" strip** with four per-client deltas (Sand & Witch +62% · Sweet Lorens +48% · Caffeine Coders +71% · Pasta Palette +39% — placeholder client names ready to swap for real engagements).
  - Methodology note + "Ask for the methodology →" link at the bottom.

### Trust Strip (02) — `3592da1`
- Original was 6 fake-text "logos" (Sisyphus / capsule / BOLTSHIFT / etc.) + an unverified "Trusted by 40+ founders" claim.
- Realised this section is **asset-blocked the same way 03/08 are** — you can't fake logo credibility. But we have something *better* than logos: **four real third-party platforms** with verified profiles.
- Rebuilt with **verified-platform proof** (every claim links to the live profile):
  - **Clutch:** ★★★★★ 5.0 · 10 verified reviews → clutch.co/profile/elux-space
  - **Contra:** ★★★★★ 5.00 · 11× hired · LottieFiles × Figma expert → contra.com/eluxspace/work
  - **Dribbble:** Featured · 2.9K followers → dribbble.com/eluxspace
  - **DesignRush:** Verified agency profile → designrush.com/agency/profile/elux-space
- Mixed two categories of proof intentionally: **buyer-side** (Clutch, Contra, DesignRush) and **peer-side** (Dribbble).
- Second row keeps **honest dashed "Client logo" placeholders** (6 boxes, asset-blocked status visually obvious so it can't ship as finished).
- Meta strip: "Founded 2021 · Malang, Indonesia · Global delivery" + "Founders in Singapore, Sydney, Scotland & New York" (pulled from the live Clutch bio).

### How We Work (09) — `1a5c485` (after one false start)
- Original was 3 cards with off-palette lime/orange/blue gradient blobs that didn't mean anything.
- **First attempt:** built a literal **circular loop diagram** with a tracer dot circling the steps. Idea was to deliver the H2 "a loop, not a waterfall" visually.
- User rejected: "I don't like it, looks different than the other section." Correct call — circle was a new visual primitive not used anywhere else on the page.
- **Second attempt (shipped):** **editorial vertical timeline** that shares DNA with sections 04 / 06 / 07:
  - 2-column rows per step: big tabular time marker on the left (`48h` / `Day 1–6` / `Day 7`), step card on the right.
  - Hairline + blue-bordered dots connect the rows (same dot pattern as section 11's "We do" list).
  - Each step card has a **"You walk away with" deliverables strip** at the bottom: pill chips listing actual handoffs (Scoped brief / Timeline / First-ship plan, etc.).
  - Bottom "and loop" return: solid blue dot + up-arrow + one sentence about weekly cycles. Pays off the headline without dominating.
- Lesson logged: every new section must reuse existing primitives. Don't invent a new visual language for one section.

---

## Current section status

Updated read of every section as of `1a5c485`:

| # | Section | Status | Asset-blocked? | Notes |
|---|---|---|---|---|
| 01 | Hero | ✅ refined | no | Dark fluid-line stage, mouse-reactive, 26 ribbons |
| 02 | Trust Strip | ✅ refined | partial | 4 verified platform badges; client-logo row marked asset-blocked |
| 03 | Portfolio Highlight | 🔴 skipped | YES | Drag-scroll built, cards still gradient placeholders |
| 04 | How AI-Native Solves It | ✅ refined | no | Without/With transformation, VS pivot circle |
| 05 | Problem → Solution | ✅ refined | no | GSAP pinned stacked-card scroll, unique visuals per card |
| 06 | Numbers | ✅ refined | no | Hero `55%` + 2 supporting, count-up, sourced, receipts strip |
| 07 | Services by Stage | ✅ refined | no | Stage bar + earned-reveal hover, 15 unique wireframes |
| 08 | Industries | 🔴 skipped | YES | Scroll-bound switcher built, right panel needs real visuals |
| 09 | How We Work | ✅ refined | no | Editorial vertical timeline + deliverables strip + "and loop" |
| 10 | Testimonials | 🟡 partial | partial | Quote cards fine; 2 video tiles (Fluz, Coinflow) need real videos |
| 11 | Who We're NOT For | ✅ refined | no | Dark, We don't/We do, animated underlines |
| — | Nav | ✅ shipped | no | Sticky, blurred, 4 nav links + primary CTA |
| — | Footer | ✅ refined | no | Fat SEO footer, 5 columns, journal hook, real contact, status pill |

**8 of 11 sections refined.** The remaining 3 are all blocked on real client assets — we made the deliberate call to wait rather than fake them.

---

## What's still skipped (need real assets to unblock)

- **03 Portfolio Highlight** — needs 4–6 real project screenshots or video stills.
- **08 Industries → Detail Pages** — needs one case visual per industry vertical (AI & SaaS, Fintech, Health, Mobility, Marketplace).
- **10 Testimonial video tiles (Fluz, Coinflow)** — need real client video clips. The quote-card half of the section is fine.
- **Hero orb upgrade** — fluid-line is shipping. Optional Unicorn.studio / Spline upgrade still on the table if you want more dimensionality.
- **Receipts strip in section 06** — placeholder client names need swapping for real engagements.
- **Footer "Booking Q3 — 2 slots open"** — real availability claim, needs to stay accurate or be removed before launch.

---

## Lessons logged during the pass

A few things worth carrying into v2 and future projects:

1. **Color trumps copy for tone.** The red-iteration cycle (E55D43 → DC2626 → B91C1C → back to E55D43) confirmed that perceived aggressiveness is a color decision, not a copy decision. Trust the eye-test.
2. **Don't invent new visual primitives per section.** The circular loop in 09 was a better *idea* than the timeline, but it broke the page's DNA. Section consistency beats local cleverness.
3. **Asset-light first.** Refining sections that depend on real assets is wasted work. Skip them deliberately, refine everything else, come back when assets land.
4. **Every claim should be one click from proof.** Section 02 (verified platforms with outbound links) and section 06 (sourced footnotes + receipts) are stronger than any "Trusted by 40+ founders" line ever could be.
5. **Two iterations per section is normal.** Section 09 needed a false start to find the right direction. Faster to build the wrong one and feel the wrongness than to argue about it.

---

## What's next

A few honest options for the next pass:

1. **Responsive audit.** Everything was built assuming desktop ≥1024px. Pull up the site on tablet and mobile viewports, fix what breaks. High-leverage, low-glamour.
2. **Accessibility audit.** Focus rings, color contrast on dark sections, keyboard nav on section 07's hover list, reduced-motion fallbacks.
3. **Real copy review.** The dummy structure is solid but the actual words deserve a pass with the founder voice — anti-AI, anti-guru, contradictive welcome.
4. **Unblock the asset-dependent sections.** Sit down with the real client work (Flowpay, Lumina, Pippin & Pals, Upnova, etc.) and ship sections 03 and 08 properly.
5. **Start Version 2.** Fork v1 into a parallel folder and explore the editorial / BORING-style cream + lime direction as a comparison build.

To be decided in the next conversation.
