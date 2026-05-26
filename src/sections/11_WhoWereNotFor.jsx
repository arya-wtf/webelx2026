import { motion } from 'framer-motion'

/**
 * Section 11 — Who We're NOT For.
 *
 * Direction: sharp, dark, anti-positioning with a "We don't / We do" rhythm.
 *
 *  • Dark canvas (#0A0A0A) bookends the hero at the top of the page.
 *  • Editorial headline, no chrome, just type.
 *  • Two columns: left = rejections (strikethrough, muddy red),
 *                 right = affirmations (animated blue underlines).
 *  • A thin vertical "torn contract" divider between columns.
 *  • Sharper CTA at the bottom — earned, not pleading.
 *  • Mobile: columns stack.
 */

const REJECT = [
  { t: 'Just a quick logo and a banner.',  aside: 'Quick is a budget word. We don\'t do quick.' },
  { t: 'Make it look like Apple.',          aside: 'Apple has 160,000 employees. You have a runway.' },
  { t: 'A 6-month spec doc, then build.',   aside: 'You\'d be out of cash before kickoff.' },
  { t: 'Pixel-perfect or it\'s wrong.',     aside: 'Pixels are not the product. Outcomes are.' },
  { t: '"Use AI" as the entire brief.',     aside: 'AI is a tool. Founders are the strategy.' },
]

const ACCEPT = [
  { t: 'Founders who can decide in a meeting.' },
  { t: 'Products that need to ship this quarter.' },
  { t: 'Briefs that start with the user, not the tech.' },
  { t: 'Teams who measure success in adoption, not awards.' },
]

export default function WhoWereNotFor() {
  return (
    <section id="contact" className="relative bg-[#0A0A0A] text-white">
      {/* subtle radial warmth from the bottom-right */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 80% 90%, rgba(40,83,255,0.18) 0%, rgba(40,83,255,0.04) 30%, transparent 65%)',
        }}
      />

      {/* faint grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
          backgroundSize: '220px 220px',
        }}
      />

      <div className="relative mx-auto max-w-page px-6 lg:px-8 py-24 md:py-32">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mb-16 md:mb-20"
        >
          <div className="font-display font-semibold text-[11px] uppercase tracking-[0.18em] text-white/50 mb-5">
            ⚠ Honest filter
          </div>
          <h2 className="font-display font-medium text-[40px] md:text-[64px] lg:text-[80px] leading-[1.02] tracking-tightest">
            We're <span className="text-[#E55D43] italic line-through decoration-[2px]">good for everyone.</span>
            <br />
            <span className="text-white">We're built for a few.</span>
          </h2>
          <p className="font-body text-white/65 text-base md:text-lg leading-[1.6] mt-7 max-w-2xl">
            Saying who we're <em>not</em> for is faster than 30 discovery calls. If any of the left column sounds like you, we'll save us both a meeting.
          </p>
        </motion.div>

        {/* TWO COLUMNS */}
        <div className="relative grid lg:grid-cols-[1fr_1px_1fr] gap-10 lg:gap-0">

          {/* WE DON'T */}
          <div className="lg:pr-12">
            <div className="flex items-baseline gap-3 mb-8">
              <span className="font-display font-bold text-[#E55D43] text-xl">×</span>
              <h3 className="font-display font-semibold text-2xl md:text-3xl tracking-tight text-white">We don't take on:</h3>
            </div>
            <ul className="flex flex-col">
              {REJECT.map((r, i) => (
                <motion.li
                  key={r.t}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="group py-5 border-b border-white/10 last:border-0"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-display font-semibold text-xs text-white/35 pt-2 tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <div className="font-display font-medium text-xl md:text-[26px] leading-tight tracking-tight text-white/85 group-hover:text-white transition-colors">
                        <span className="line-through decoration-[#E55D43] decoration-[1.5px]">{r.t}</span>
                      </div>
                      <div className="font-body italic text-[13px] text-white/45 mt-2">
                        — {r.aside}
                      </div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* TORN CONTRACT DIVIDER */}
          <div className="hidden lg:block relative" aria-hidden="true">
            {/* upper half */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px bg-white/15 h-[40%]" />
            {/* gap with a tick mark */}
            <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/40" />
            {/* lower half — offset slightly to suggest a tear */}
            <div className="absolute left-1/2 top-[55%] -translate-x-1/2 w-px bg-white/15 h-[45%]" />
          </div>

          {/* WE DO */}
          <div className="lg:pl-12">
            <div className="flex items-baseline gap-3 mb-8">
              <span className="font-display font-bold text-primary text-xl">✓</span>
              <h3 className="font-display font-semibold text-2xl md:text-3xl tracking-tight text-white">We're built for:</h3>
            </div>
            <ul className="flex flex-col">
              {ACCEPT.map((a, i) => (
                <motion.li
                  key={a.t}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 + 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="group py-5 border-b border-white/10 last:border-0"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-display font-semibold text-xs text-primary pt-2 tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <div className="relative inline-block font-display font-medium text-xl md:text-[26px] leading-tight tracking-tight text-white">
                        <span>{a.t}</span>
                        {/* animated underline that draws in on scroll */}
                        <motion.span
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true, margin: '-60px' }}
                          transition={{ duration: 0.7, delay: i * 0.08 + 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute left-0 right-0 -bottom-1 h-[2px] bg-primary origin-left"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* SHARP CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 md:mt-28 pt-10 border-t border-white/10 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div className="max-w-2xl">
            <div className="font-display font-semibold text-[11px] uppercase tracking-[0.18em] text-white/45 mb-3">
              Still reading?
            </div>
            <h3 className="font-display font-medium text-[32px] md:text-[48px] leading-[1.05] tracking-tightest">
              Good. <span className="text-white/55">That probably means we should talk.</span>
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:project@elux.space"
              className="btn-primary"
            >
              Start a Project
              <span className="w-5 h-5 rounded-full bg-white/20 inline-flex items-center justify-center text-[10px]">→</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-lg font-display font-semibold text-sm text-white border border-white/25 hover:border-white/60 transition-colors"
            >
              Or, see the work first
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
