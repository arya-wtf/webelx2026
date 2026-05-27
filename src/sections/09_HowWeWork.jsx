import { motion } from 'framer-motion'

/**
 * Section 09 — How We Work.
 *
 * Editorial vertical timeline. Uses the same visual primitives as
 * sections 04 / 06 / 07: card borders, eyebrow → H2 → lede header,
 * tabular numbers for credibility, subtle fade-up motion.
 *
 * Each step is a 2-column row:
 *   • Left: big tabular time marker (the credibility number, visible)
 *   • Right: step number, title, description, deliverables strip
 *
 * A hairline on the left connects the rows with a primary blue dot
 * at each anchor. A small "and loop" arrow at the bottom returns
 * visually to step 01 so the H2 ("a loop, not a waterfall") pays off
 * without taking over the layout.
 */

const STEPS = [
  {
    n: '01',
    time: '48h',
    timeLabel: 'to scope',
    t: 'Brief & align',
    desc: 'One async intake, one strategy call. We come back with scope, timeline, and the smallest first ship in 48 hours.',
    deliverables: ['Scoped brief', 'Timeline', 'First-ship plan'],
  },
  {
    n: '02',
    time: 'Day 1–6',
    timeLabel: 'design + build',
    t: 'Design & build in parallel',
    desc: 'UX, UI, and front-end happen in the same sprint. Less handoff. Faster feedback. Real builds, not pretty mockups.',
    deliverables: ['UX flows', 'UI screens', 'Production build'],
  },
  {
    n: '03',
    time: 'Day 7',
    timeLabel: 'live → ∞',
    t: 'Ship & iterate',
    desc: 'Live on day 7. Then weekly improvements based on real users, not on Slack opinions.',
    deliverables: ['Public launch', 'Weekly improvements', 'Usage telemetry'],
  },
]

export default function HowWeWork() {
  return (
    <section className="mx-auto max-w-page px-6 lg:px-8 pt-28">
      {/* HEADER — same pattern as sections 04, 06, 07 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-end mb-14"
      >
        <div>
          <div className="eyebrow">Our process</div>
          <h2 className="h2-display mt-2">A loop, not a waterfall.</h2>
        </div>
        <p className="body-text">
          We don't hand off, then disappear. The same team that designed it ships it — and keeps shipping every week after launch.
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div className="relative">
        {/* hairline connector running the full height behind the dots */}
        <div
          className="absolute left-[7px] md:left-[calc(20%+7px)] lg:left-[calc(28%+7px)] top-2 bottom-16 w-px bg-line"
          aria-hidden="true"
        />

        <ol className="flex flex-col">
          {STEPS.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid grid-cols-[40px_1fr] md:grid-cols-[20%_1fr] lg:grid-cols-[28%_1fr] gap-5 md:gap-10 pb-10 last:pb-0"
            >
              {/* LEFT: dot + big time marker */}
              <div className="relative">
                {/* anchor dot on the hairline */}
                <span
                  className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-white border-2 border-primary"
                  aria-hidden="true"
                />
                {/* time block (only visible md+) */}
                <div className="hidden md:block pl-8">
                  <div className="font-display font-medium text-[40px] md:text-[56px] leading-none tracking-tightest tabular-nums text-ink">
                    {s.time}
                  </div>
                  <div className="font-display font-semibold text-[11px] uppercase tracking-[0.14em] text-muted mt-2">
                    {s.timeLabel}
                  </div>
                </div>
              </div>

              {/* RIGHT: step card */}
              <div className="card-base p-6 md:p-7">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-display font-semibold text-[11px] tracking-[0.14em] uppercase text-muted">
                    Step {s.n}
                  </div>
                  {/* mobile-only time pill (since left column is collapsed on small screens) */}
                  <div className="md:hidden font-display font-semibold text-[11px] tracking-[0.06em] uppercase text-primary tabular-nums">
                    {s.time} · {s.timeLabel}
                  </div>
                </div>
                <h3 className="font-display font-semibold text-[22px] md:text-[26px] tracking-tight mb-3">
                  {s.t}
                </h3>
                <p className="body-text mb-5 max-w-2xl">{s.desc}</p>

                {/* deliverables strip */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-4 border-t border-line-soft">
                  <div className="font-display font-semibold text-[10.5px] uppercase tracking-[0.14em] text-muted">
                    You walk away with
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {s.deliverables.map((d) => (
                      <span
                        key={d}
                        className="inline-flex items-center px-2.5 py-1 rounded-full bg-soft border border-line font-display text-[11.5px] font-medium text-ink-soft"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>

        {/* "AND LOOP" return arrow — pays off the headline without dominating */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative grid grid-cols-[40px_1fr] md:grid-cols-[20%_1fr] lg:grid-cols-[28%_1fr] gap-5 md:gap-10 pt-2"
        >
          <div className="relative">
            <span
              className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full bg-primary"
              aria-hidden="true"
            />
            <div className="hidden md:block pl-8">
              <div className="font-display font-medium text-[24px] leading-none tracking-tightest text-primary">
                ↑
              </div>
              <div className="font-display font-semibold text-[11px] uppercase tracking-[0.14em] text-primary mt-2">
                and loop
              </div>
            </div>
          </div>
          <div className="font-body text-[13.5px] text-ink-soft max-w-2xl pt-1">
            After ship, we're not done — we're on weekly cycles. Each loop trims friction, adds value, and gets you closer to product-market fit.
            <span className="md:hidden block mt-2 font-display font-semibold text-[11px] uppercase tracking-[0.14em] text-primary">
              ↑ and loop
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
