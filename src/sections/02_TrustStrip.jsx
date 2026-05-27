import { motion } from 'framer-motion'

/**
 * Section 02 — Trust Strip.
 *
 * Replaces fake logo row with verified third-party platform proof.
 * Source of every number below:
 *   - Clutch:     5.0 · 10 verified reviews     https://clutch.co/profile/elux-space
 *   - Contra:     5.00 · 11× hired · $10k+      https://contra.com/eluxspace/work
 *   - Dribbble:   Featured · 2.9K followers     https://dribbble.com/eluxspace
 *   - DesignRush: Verified directory profile    https://www.designrush.com/agency/profile/elux-space
 *
 * Two categories of proof: buyer-side (Clutch, Contra, DesignRush) and
 * peer-side (Dribbble). Both link out so claims are verifiable in 2 clicks.
 *
 * Founded 2021 · Malang, Indonesia
 * Clients: Singapore · Sydney · Scotland · New York
 *
 * A second row keeps honest dashed placeholders for real client logos
 * that will land later — visually flagged as asset-blocked so it can't
 * accidentally ship as finished.
 */

const badges = [
  {
    name: 'Clutch',
    rating: '5.0',
    proof: '10 verified reviews',
    href: 'https://clutch.co/profile/elux-space',
    showStars: true,
  },
  {
    name: 'Contra',
    rating: '5.00',
    proof: '11× hired · LottieFiles × Figma expert',
    href: 'https://contra.com/eluxspace/work',
    showStars: true,
  },
  {
    name: 'Dribbble',
    rating: null,
    proof: 'Featured · 2.9K followers',
    href: 'https://dribbble.com/eluxspace',
    showStars: false,
  },
  {
    name: 'DesignRush',
    rating: null,
    proof: 'Verified agency profile',
    href: 'https://www.designrush.com/agency/profile/elux-space',
    showStars: false,
  },
]

function Stars() {
  return <span className="text-[#F5B544] tracking-[1.5px] text-xs">★★★★★</span>
}

function Badge({ b, idx }) {
  return (
    <motion.a
      href={b.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group flex items-center gap-3 px-4 py-2.5 rounded-full bg-white border border-line hover:border-ink/40 hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all"
    >
      {b.showStars && <Stars />}
      <div className="flex items-baseline gap-1.5">
        {b.rating && (
          <span className="font-display font-bold text-sm text-ink tabular-nums">{b.rating}</span>
        )}
        <span className="font-display font-semibold text-[11px] uppercase tracking-[0.08em] text-ink-soft">
          on {b.name}
        </span>
      </div>
      <span className="hidden md:inline font-body text-[12px] text-muted">
        · {b.proof}
      </span>
      <span className="font-display text-[11px] text-muted group-hover:text-primary group-hover:translate-x-0.5 transition-all">
        →
      </span>
    </motion.a>
  )
}

export default function TrustStrip() {
  return (
    <section className="bg-soft border-y border-line">
      <div className="mx-auto max-w-page px-6 lg:px-8 py-10 md:py-12">
        {/* TOP ROW — verified platform badges */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="font-display font-semibold text-[10px] uppercase tracking-[0.16em] text-muted mb-2.5">
              Verified by
            </div>
            <div className="font-display font-medium text-[15px] text-ink">
              Buyers and peers vet studios on third-party platforms. We're on four.
            </div>
          </div>
          <div className="flex flex-wrap gap-2 lg:gap-2.5">
            {badges.map((b, i) => (
              <Badge key={b.name} b={b} idx={i} />
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-8 h-px bg-line" aria-hidden="true" />

        {/* CLIENT LOGOS — honest placeholders (asset-blocked) */}
        <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center">
          <div>
            <div className="font-display font-semibold text-[10px] uppercase tracking-[0.16em] text-muted mb-2">
              Working with
            </div>
            <div className="font-display text-[12px] text-ink-soft max-w-[180px] leading-snug">
              Founders in Singapore, Sydney, Scotland &amp; New York.
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                className="aspect-[5/2] rounded-md border border-dashed border-line bg-white/40 flex items-center justify-center"
                title="Client logo placeholder — to be replaced with real client logo"
              >
                <span className="font-display font-semibold text-[9px] uppercase tracking-[0.1em] text-muted">
                  Client logo
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* META LINE */}
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-1 text-[11px] font-display font-semibold uppercase tracking-[0.1em] text-muted">
          <span>Founded 2021</span>
          <span className="text-line">•</span>
          <span>Malang, Indonesia</span>
          <span className="text-line">•</span>
          <span>Global delivery</span>
        </div>
      </div>
    </section>
  )
}
