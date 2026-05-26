import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Section 06 — Numbers.
 *
 * Editorial typography + count-up motion + sourced proof per stat.
 * Layout:
 *
 *   ┌─────────────────────────────┐  ┌──────────────────────┐
 *   │   55%                       │  │  7d                  │
 *   │   (HERO — huge, ink)        │  │  (supporting)        │
 *   │   FASTER ONBOARDING         │  │  AVG MVP TIMELINE    │
 *   │   long description          │  │  short description   │
 *   │   receipts row              │  └──────────────────────┘
 *   │                             │  ┌──────────────────────┐
 *   │                             │  │  89%                 │
 *   │                             │  │  (supporting)        │
 *   │                             │  │  FEWER REGRESSIONS   │
 *   │                             │  │  short description   │
 *   └─────────────────────────────┘  └──────────────────────┘
 *
 * The hero number counts up from 0 → 55 on scroll.
 * The two supporting numbers count up as their tiles enter the viewport.
 * Each tile has a "source" footnote AND a per-client receipt strip.
 */

const heroStat = {
  value: 55,
  suffix: '%',
  label: 'Faster onboarding',
  desc: 'Median improvement on activation flow after one Elux redesign sprint. Measured on the first complete user funnel that ships after engagement.',
  source: 'Median across 8 Growth-stage redesigns · 2024–2026',
  receipts: [
    { client: 'Sand & Witch', delta: '+62%' },
    { client: 'Sweet Lorens', delta: '+48%' },
    { client: 'Caffeine Coders', delta: '+71%' },
    { client: 'Pasta Palette', delta: '+39%' },
  ],
}

const supportStats = [
  {
    value: 7,
    suffix: 'd',
    label: 'Avg MVP timeline',
    desc: 'From signed brief to live, investor-ready MVP.',
    source: 'Avg across 12 Seed launches',
  },
  {
    value: 89,
    suffix: '%',
    label: 'Fewer regressions',
    desc: 'Design + dev under one roof — UI bugs don’t ping-pong across handoffs.',
    source: 'Internal QA, 2025 cohort',
  },
]

/** Count-up hook: ticks from 0 to `target` once when ref enters viewport. */
function useCountUp(target, { duration = 1.6, start = 0 } = {}) {
  const ref = useRef(null)
  const [val, setVal] = useState(start)
  useEffect(() => {
    if (!ref.current) return
    const obj = { n: start }
    const tween = gsap.to(obj, {
      n: target,
      duration,
      ease: 'power2.out',
      onUpdate: () => setVal(Math.round(obj.n)),
      paused: true,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })
    return () => {
      tween.kill()
      ScrollTrigger.getAll()
        .filter((t) => t.trigger === ref.current)
        .forEach((t) => t.kill())
    }
  }, [target, duration, start])
  return [ref, val]
}

function HeroStat() {
  const [ref, val] = useCountUp(heroStat.value)
  return (
    <div
      ref={ref}
      className="relative lg:col-span-7 bg-card border border-line rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[520px] overflow-hidden"
    >
      {/* faint blue corner glow */}
      <div
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(40,83,255,0.10) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative">
        <div className="font-display font-semibold text-[11px] uppercase tracking-[0.14em] text-primary mb-6">
          The number we lead with
        </div>
        <div className="flex items-start">
          <span className="font-display font-medium text-[150px] md:text-[220px] leading-[0.85] tracking-tightest tabular-nums text-ink">
            {val}
          </span>
          <span className="font-display font-medium text-[80px] md:text-[110px] leading-[0.85] tracking-tightest text-primary ml-1 mt-2">
            {heroStat.suffix}
          </span>
        </div>
        <div className="font-display font-medium text-2xl md:text-3xl tracking-tight mt-3">
          {heroStat.label}.
        </div>
      </div>

      <div className="relative max-w-md">
        <p className="font-body text-[14.5px] leading-[1.6] text-ink-soft">
          {heroStat.desc}
        </p>
        <div className="font-display font-semibold text-[11px] uppercase tracking-[0.1em] text-muted mt-3">
          ↳ {heroStat.source}
        </div>
      </div>

      {/* receipts strip — per-client proof */}
      <div className="relative pt-7 border-t border-line">
        <div className="font-display font-semibold text-[11px] uppercase tracking-[0.14em] text-muted mb-3">
          Receipts
        </div>
        <div className="flex flex-wrap gap-x-7 gap-y-2">
          {heroStat.receipts.map((r) => (
            <div key={r.client} className="flex items-baseline gap-2">
              <span className="font-display font-semibold text-[13px] text-ink">{r.client}</span>
              <span className="font-display font-semibold text-[13px] text-primary tabular-nums">{r.delta}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SupportStat({ stat, dark = false }) {
  const [ref, val] = useCountUp(stat.value)
  return (
    <div
      ref={ref}
      className={`flex-1 rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[250px] ${
        dark ? 'bg-ink text-white border border-ink' : 'bg-card text-ink border border-line'
      }`}
    >
      <div>
        <div className="flex items-baseline">
          <span className="font-display font-medium text-[88px] md:text-[112px] leading-[0.85] tracking-tightest tabular-nums">
            {val}
          </span>
          <span className={`font-display font-medium text-[40px] md:text-[52px] leading-[0.85] tracking-tightest ml-0.5 ${dark ? 'text-white/70' : 'text-primary'}`}>
            {stat.suffix}
          </span>
        </div>
        <div className={`font-display font-semibold text-[13px] uppercase tracking-[0.08em] mt-3 ${dark ? 'text-white/60' : 'text-muted'}`}>
          {stat.label}
        </div>
      </div>
      <div>
        <p className={`font-body text-[13.5px] leading-[1.55] ${dark ? 'text-white/75' : 'text-ink-soft'}`}>
          {stat.desc}
        </p>
        <div className={`font-display font-semibold text-[10.5px] uppercase tracking-[0.1em] mt-2 ${dark ? 'text-white/45' : 'text-muted'}`}>
          ↳ {stat.source}
        </div>
      </div>
    </div>
  )
}

export default function Numbers() {
  return (
    <section className="mx-auto max-w-page px-6 lg:px-8 pt-28">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-end mb-12"
      >
        <div>
          <div className="eyebrow">By the numbers</div>
          <h2 className="h2-display mt-2">Outcomes founders care about.</h2>
        </div>
        <p className="body-text">
          Three numbers we will defend in a meeting. With receipts. Across <strong className="text-ink">40+ launches</strong>, here is what our partners actually see.
        </p>
      </motion.div>

      {/* STATS GRID */}
      <div className="grid lg:grid-cols-12 gap-5">
        <HeroStat />
        <div className="lg:col-span-5 flex flex-col gap-5">
          <SupportStat stat={supportStats[0]} dark={true} />
          <SupportStat stat={supportStats[1]} dark={false} />
        </div>
      </div>

      {/* METHODOLOGY NOTE */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-6 border-t border-line"
      >
        <div className="font-body text-[13px] text-muted max-w-2xl">
          Numbers are from real engagements. Where stats compare before/after, the baseline is the client's own pre-engagement metric — not an industry benchmark. Methodology available on request.
        </div>
        <a
          href="#contact"
          className="font-display font-semibold text-[13px] text-primary hover:underline shrink-0"
        >
          Ask for the methodology →
        </a>
      </motion.div>
    </section>
  )
}
