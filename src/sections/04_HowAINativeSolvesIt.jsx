import { motion } from 'framer-motion'

/**
 * Section 04 — How AI-Native Solves It.
 *
 * Core argument of the rebrand. Built as a "transformation" not a "side-by-side":
 *
 *  • Without column: tilted, overlapping cards. Muddy ink. Strikethroughs.
 *    Reads as broken / chaotic.
 *  • With column: grid-aligned cards with a faint vertical connector line.
 *    Soft blue glow behind. Check ticks animate in.
 *  • Center VS: a real bordered circle, not floating text. Subtle pulse.
 *  • Mobile: stacks vertically with a "↓ VS ↓" pivot.
 */

const without = [
  { ic: '📞', t: 'Designer ping',   s: '"need copy by EOD"',          rot: -1.2, overlap: 0   },
  { ic: '📊', t: 'Manual handoff',  s: 'Figma → Webflow rebuild',     rot:  0.8, overlap: -8  },
  { ic: '⚠️', t: 'Scope surprise',  s: '"+2 weeks for backend"',      rot: -0.6, overlap: -10 },
  { ic: '💸', t: 'Budget creep',    s: 'Two vendors. One invoice.',   rot:  1.1, overlap: -12 },
]

const withUs = [
  { t: 'Brief intake',                s: 'Auto-scoped in 24h' },
  { t: 'Design + build in parallel',  s: 'UX, UI, no-code together' },
  { t: 'Ship-ready in days, not quarters', pivot: true },
  { t: 'Live product',                s: 'Investor-ready, user-tested' },
]

export default function HowAINativeSolvesIt() {
  return (
    <section className="relative mx-auto max-w-page px-6 lg:px-8 pt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl mb-14"
      >
        <div className="eyebrow">The difference</div>
        <h2 className="font-display font-medium text-[40px] md:text-[56px] leading-[1.1] tracking-tighter mt-2">
          <span className="text-ink-soft">Old design partners stitch tools.</span>
          <br />
          <span className="text-ink">We ship the product.</span>
        </h2>
      </motion.div>

      {/* Desktop layout: 3 columns. Mobile: stacks. */}
      <div className="grid lg:grid-cols-[1fr_88px_1fr] gap-6 lg:gap-0 items-stretch">

        {/* ─── WITHOUT ELUX ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative p-8 md:p-10 rounded-3xl bg-[#FBF4F1] border border-[#F2DBD3] min-h-[460px] flex flex-col overflow-hidden"
        >
          {/* subtle scratched texture for "broken" feel */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, #8A4A33 0px, #8A4A33 1px, transparent 1px, transparent 8px)',
            }}
            aria-hidden="true"
          />

          <span className="self-start inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#F2DBD3] font-display text-[11px] font-bold uppercase tracking-[0.08em] text-[#A04A33] mb-6">
            Without Elux
          </span>

          <h3 className="font-display font-semibold text-[26px] md:text-[28px] leading-tight tracking-tight mb-7 text-[#5A2D1F]">
            Designers, devs, and PMs <span className="text-[#A04A33] line-through decoration-[1.5px]">all aligned.</span>
          </h3>

          <div className="relative flex-1">
            {without.map((m, i) => (
              <motion.div
                key={m.t}
                initial={{ opacity: 0, y: 12, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: m.rot }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ rotate: 0, scale: 1.02, transition: { duration: 0.2 } }}
                className="relative bg-white border border-[#EFE3DC] rounded-xl px-4 py-3.5 flex items-center gap-3 shadow-[0_2px_6px_rgba(140,60,30,0.06)] cursor-default"
                style={{ marginTop: i === 0 ? 0 : m.overlap, zIndex: i + 1 }}
              >
                <div className="w-9 h-9 rounded-lg bg-[#F2DBD3] flex items-center justify-center text-base shrink-0">
                  {m.ic}
                </div>
                <div className="font-body text-[13.5px] text-ink leading-tight">
                  <span className={i < 3 ? 'line-through decoration-[#C97A5B] decoration-[1px]' : ''}>{m.t}</span>
                  <small className="block text-[#A4715C] text-[11.5px] mt-1 font-body italic">"{m.s}"</small>
                </div>
              </motion.div>
            ))}

            {/* Footer note */}
            <div className="mt-6 font-display font-semibold text-xs uppercase tracking-[0.1em] text-[#A04A33] opacity-70">
              ❌ Result: 6 weeks late. Half the scope.
            </div>
          </div>
        </motion.div>

        {/* ─── VS PIVOT ─────────────────────────────────────────────── */}
        <div className="relative flex lg:flex-col items-center justify-center my-2 lg:my-0">
          {/* connecting line on mobile */}
          <div className="block lg:hidden absolute top-1/2 left-0 right-0 h-px bg-line" aria-hidden="true" />
          {/* connecting line on desktop */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-line" aria-hidden="true" />

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative z-10"
          >
            <div className="relative">
              {/* soft pulsing halo */}
              <div className="absolute inset-0 rounded-full bg-primary/8 blur-xl animate-pulse" aria-hidden="true" />
              <div className="relative w-[72px] h-[72px] rounded-full bg-white border border-line flex flex-col items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                <span className="font-display font-bold text-[18px] tracking-[0.04em] text-ink">VS</span>
                <span className="font-display font-semibold text-[8px] tracking-[0.18em] uppercase text-muted mt-0.5">Pivot</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ─── WITH ELUX ────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative p-8 md:p-10 rounded-3xl bg-[#F3F6FF] border border-[#D7E1FF] min-h-[460px] flex flex-col overflow-hidden"
        >
          {/* soft blue glow */}
          <div
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(40,83,255,0.18) 0%, rgba(40,83,255,0) 70%)',
            }}
            aria-hidden="true"
          />

          <span className="self-start inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#D7E1FF] font-display text-[11px] font-bold uppercase tracking-[0.08em] text-primary mb-6">
            With Elux
          </span>

          <h3 className="font-display font-semibold text-[26px] md:text-[28px] leading-tight tracking-tight mb-7 text-ink">
            One AI-native team. <span className="text-primary">Strategy to ship</span> in one loop.
          </h3>

          <div className="relative flex-1 flex flex-col gap-2.5">
            {/* vertical connector line behind the cards */}
            <div
              className="absolute left-[24px] top-2 bottom-8 w-px bg-gradient-to-b from-primary/30 via-primary/15 to-transparent"
              aria-hidden="true"
            />

            {withUs.map((m, i) => {
              if (m.pivot) {
                return (
                  <motion.div
                    key={m.t}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="self-center my-1 px-4 py-2 rounded-full bg-primary text-white font-display font-semibold text-[11px] uppercase tracking-[0.08em] shadow-[0_4px_12px_rgba(40,83,255,0.25)]"
                  >
                    ↓ {m.t} ↓
                  </motion.div>
                )
              }
              return (
                <motion.div
                  key={m.t}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -2, transition: { duration: 0.15 } }}
                  className="relative bg-white border border-[#D7E1FF] rounded-xl px-4 py-3.5 flex items-center gap-3 cursor-default"
                >
                  {/* check tick — uses currentColor on a circle */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.4, delay: i * 0.08 + 0.35, ease: [0.34, 1.56, 0.64, 1] }}
                    className="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center text-sm shrink-0 shadow-[0_4px_12px_rgba(40,83,255,0.25)]"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7.5L5.5 10.5L11.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                  <div className="font-body text-[13.5px] text-ink leading-tight">
                    {m.t}
                    <small className="block text-muted text-[11.5px] mt-1 font-body">{m.s}</small>
                  </div>
                </motion.div>
              )
            })}

            <div className="mt-6 font-display font-semibold text-xs uppercase tracking-[0.1em] text-primary">
              ✓ Result: 7 days to MVP. Full scope.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
