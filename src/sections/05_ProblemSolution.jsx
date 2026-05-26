import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Section 05 — Problem → Solution (true stacked-card scroll).
 *
 * The PDF asked for "keep layout, tapi interactionnya stacked card."
 * Implementation:
 *   • A sticky wrapper pins for ~3× viewport height while the cards
 *     slide up and stack on top of each other.
 *   • Each card has its own custom visual (no repeated browser frames):
 *       1. Short on hands     → team-formation (avatars filling a row)
 *       2. Adoption is slowing → flatlining chart that bends upward
 *       3. Need an MVP        → countdown clock + rocket trail
 *   • Mobile (< lg): falls back to normal vertical stacking, no pin.
 *
 * Visuals are inline SVG/divs. No real asset dependency.
 */

const cards = [
  {
    id: 'hands',
    kicker: "You're short on hands.",
    h: 'Ship fast when your team is at capacity.',
    p: 'We step in with clear ownership from UX to build-ready UI. Focused sprints, fast feedback, delivery that keeps your roadmap moving without delays.',
    cta: 'Extend my team',
    accent: 'from-[#F3F6FF] to-white',
    ring:   'ring-[#D7E1FF]',
  },
  {
    id: 'adoption',
    kicker: 'Adoption is slowing.',
    h: 'UX friction is holding users back.',
    p: 'We audit what is breaking the experience, then redesign the flows that matter most so users move faster and the product scales cleanly.',
    cta: 'Redesign my product',
    accent: 'from-[#FBF4F1] to-white',
    ring:   'ring-[#F2DBD3]',
  },
  {
    id: 'mvp',
    kicker: 'You need an MVP.',
    h: 'Investor-credible product in 7 days.',
    p: 'Prove the core value, ship the first version, and look legit from day one. Landing page, prototype, and pitch readiness in one sprint.',
    cta: 'Launch my MVP',
    accent: 'from-[#F0F7EE] to-white',
    ring:   'ring-[#B8E0C0]',
  },
]

// ─── Visuals ─────────────────────────────────────────────────────────

function VisualTeam({ progress = 1 }) {
  // 5 avatar slots, filling in left-to-right as `progress` rises (0..1)
  const fillCount = Math.round(progress * 5)
  return (
    <div className="w-full aspect-[4/3] rounded-2xl bg-white border border-line p-7 flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="font-display font-semibold text-[11px] uppercase tracking-[0.1em] text-muted">Sprint team</div>
        <div className="font-display font-semibold text-[11px] text-primary">{fillCount}/5 ready</div>
      </div>
      <div className="grid grid-cols-5 gap-3">
        {[0, 1, 2, 3, 4].map((i) => {
          const filled = i < fillCount
          return (
            <div key={i} className="flex flex-col items-center gap-2">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-base transition-all duration-500 ${
                  filled
                    ? 'bg-primary text-white shadow-[0_4px_12px_rgba(40,83,255,0.25)] scale-100'
                    : 'bg-soft text-muted border border-dashed border-line scale-95'
                }`}
              >
                {filled ? ['D', 'B', 'U', 'F', 'P'][i] : '?'}
              </div>
              <div className={`font-display text-[10px] ${filled ? 'text-ink' : 'text-muted'}`}>
                {['Design', 'Build', 'UX', 'FE', 'PM'][i]}
              </div>
            </div>
          )
        })}
      </div>
      <div className="h-1.5 rounded-full bg-soft overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  )
}

function VisualAdoption({ progress = 1 }) {
  // chart flatlines then bends upward. `progress` controls the bend.
  // path uses cubic to ease into the lift.
  const lift = Math.max(0, progress - 0.4) // start lifting partway through
  const liftY = 60 - lift * 35
  return (
    <div className="w-full aspect-[4/3] rounded-2xl bg-white border border-line p-7 flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="font-display font-semibold text-[11px] uppercase tracking-[0.1em] text-muted">Activation rate</div>
        <div className="font-display font-semibold text-[11px] text-primary">+{Math.round(lift * 55)}%</div>
      </div>
      <svg viewBox="0 0 200 80" className="w-full h-full">
        {/* grid */}
        {[20, 40, 60].map((y) => (
          <line key={y} x1="0" x2="200" y1={y} y2={y} stroke="#F0EFEA" strokeWidth="1" />
        ))}
        {/* flat baseline */}
        <path d="M 0 65 L 80 64 L 100 64" stroke="#C9C9C0" strokeWidth="2" fill="none" />
        {/* lifting curve */}
        <path
          d={`M 100 64 C 130 64, 150 ${liftY + 10}, 200 ${liftY}`}
          stroke="#2853FF"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* end dot */}
        <circle cx="200" cy={liftY} r="3.5" fill="#2853FF" />
        <circle cx="200" cy={liftY} r="8" fill="#2853FF" fillOpacity="0.15" />
      </svg>
      <div className="font-body text-[11px] text-muted">Before Elux ──── After Elux</div>
    </div>
  )
}

function VisualMVP({ progress = 1 }) {
  // big countdown 07 → 00 days, with a rocket trail beneath
  const days = Math.max(0, Math.round(7 - progress * 7))
  return (
    <div className="w-full aspect-[4/3] rounded-2xl bg-white border border-line p-7 flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="font-display font-semibold text-[11px] uppercase tracking-[0.1em] text-muted">Days to MVP</div>
        <div className="font-display font-semibold text-[11px] text-primary">{days === 0 ? 'Launch' : 'Building'}</div>
      </div>
      <div className="flex items-center justify-center">
        <div className="font-display font-bold text-[88px] leading-none tracking-tightest tabular-nums text-ink">
          0{days}
        </div>
      </div>
      <div className="relative h-3">
        <div className="absolute inset-y-1/2 left-0 right-0 h-px bg-soft" />
        <div
          className="absolute inset-y-1/2 left-0 h-[2px] bg-primary transition-all duration-500"
          style={{ width: `${progress * 100}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 transition-all duration-500"
          style={{ left: `calc(${progress * 100}% - 8px)` }}
        >
          <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_16px_rgba(40,83,255,0.6)]" />
        </div>
      </div>
    </div>
  )
}

const visuals = { hands: VisualTeam, adoption: VisualAdoption, mvp: VisualMVP }

// ─── Section ─────────────────────────────────────────────────────────

export default function ProblemSolution() {
  const wrapRef = useRef(null)
  const stickyRef = useRef(null)
  const cardRefs = useRef([])
  const [progress, setProgress] = useState([0, 0, 0])

  useEffect(() => {
    // mobile: skip the pin entirely
    const mq = window.matchMedia('(min-width: 1024px)')
    if (!mq.matches) return

    const ctx = gsap.context(() => {
      const wrap = wrapRef.current
      if (!wrap) return
      // Sticky pin runs for ~3× viewport. Each card owns 1/3 of that.
      const totalScroll = window.innerHeight * 2.8
      const st = ScrollTrigger.create({
        trigger: wrap,
        start: 'top top',
        end: `+=${totalScroll}`,
        pin: stickyRef.current,
        pinSpacing: true,
        scrub: 0.5,
        onUpdate: (self) => {
          // map global progress (0..1) to per-card progress
          // segment widths: 0.0–0.33 card1, 0.33–0.66 card2, 0.66–1.0 card3
          const p = self.progress
          const seg = 1 / cards.length
          const next = cards.map((_, i) => {
            const segStart = i * seg
            const segEnd = (i + 1) * seg
            let local = (p - segStart) / (segEnd - segStart)
            local = Math.max(0, Math.min(1, local))
            return local
          })
          setProgress(next)

          // animate the cards stacking — each card translates up as it
          // becomes active and rests on the stack as the next one slides over
          cardRefs.current.forEach((el, i) => {
            if (!el) return
            const local = next[i]
            // active card sits at translateY 0; future cards sit below viewport.
            const yEnter = i === 0 ? 0 : 100 * (1 - local) // % of card height
            gsap.set(el, {
              yPercent: yEnter,
              scale: 1 - i * 0.02 * (1 - (next[i] || 0)), // tiny depth illusion
            })
          })
        },
      })
      return () => st.kill()
    }, wrapRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="mx-auto max-w-page px-6 lg:px-8 pt-28">
      {/* HEADER */}
      <div className="max-w-2xl mb-12">
        <div className="eyebrow">Problem to solution</div>
        <h2 className="h2-display mt-2">
          Building is hard. <br />
          The right partner makes it simpler.
        </h2>
        <p className="lede mt-5">
          Three founder modes. Pick the one that sounds like your week — the path forward looks different for each.
        </p>
      </div>

      {/* PINNED STACKED-CARD AREA (desktop) ─────────────────────────── */}
      <div ref={wrapRef} className="hidden lg:block relative">
        <div
          ref={stickyRef}
          className="h-screen w-full flex items-center"
        >
          <div className="relative w-full h-[560px]">
            {cards.map((c, i) => {
              const Visual = visuals[c.id]
              const isActive = progress[i] > 0 && (i === cards.length - 1 || progress[i + 1] === 0)
              return (
                <div
                  key={c.id}
                  ref={(el) => (cardRefs.current[i] = el)}
                  className="absolute inset-0"
                  style={{ zIndex: i + 1 }}
                >
                  <div
                    className={`relative h-full grid grid-cols-[1.1fr_0.9fr] border border-line rounded-3xl overflow-hidden bg-gradient-to-br ${c.accent} ring-1 ${c.ring} shadow-[0_24px_60px_-30px_rgba(0,0,0,0.18)]`}
                  >
                    {/* card index */}
                    <div className="absolute top-6 left-6 flex items-center gap-3 z-10">
                      <span className="font-display font-bold text-[11px] tracking-[0.18em] uppercase text-muted">
                        Mode {String(i + 1).padStart(2, '0')} / 03
                      </span>
                      <div className="flex gap-1">
                        {cards.map((_, j) => (
                          <span
                            key={j}
                            className={`block w-6 h-[2px] rounded-full ${j <= i ? 'bg-primary' : 'bg-line'}`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* copy */}
                    <div className="p-10 lg:p-14 pt-20 flex flex-col justify-between">
                      <div>
                        <div className="font-display font-semibold text-[15px] text-primary mb-4">{c.kicker}</div>
                        <h3 className="font-display font-semibold text-3xl lg:text-[40px] leading-[1.1] tracking-tight mb-5">{c.h}</h3>
                        <p className="font-body text-[15px] leading-[1.6] text-ink-soft max-w-md">{c.p}</p>
                      </div>
                      <a className="btn-primary self-start mt-6" href="#contact">
                        {c.cta}
                        <span className="w-5 h-5 rounded-full bg-white/20 inline-flex items-center justify-center text-[10px]">→</span>
                      </a>
                    </div>

                    {/* visual */}
                    <div className="p-8 lg:p-10 flex items-center">
                      <Visual progress={Math.min(1, (progress[i] || 0) * 1.4)} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* MOBILE FALLBACK ─────────────────────────────────────────────── */}
      <div className="lg:hidden flex flex-col gap-5">
        {cards.map((c, i) => {
          const Visual = visuals[c.id]
          return (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`border border-line rounded-3xl overflow-hidden bg-gradient-to-br ${c.accent} ring-1 ${c.ring}`}
            >
              <div className="p-7">
                <div className="font-display font-semibold text-[11px] tracking-[0.18em] uppercase text-muted mb-4">
                  Mode {String(i + 1).padStart(2, '0')} / 03
                </div>
                <div className="font-display font-semibold text-sm text-primary mb-2">{c.kicker}</div>
                <h3 className="font-display font-semibold text-[26px] leading-[1.15] tracking-tight mb-3">{c.h}</h3>
                <p className="font-body text-[14px] leading-[1.55] text-ink-soft mb-5">{c.p}</p>
                <a className="btn-primary text-sm" href="#contact">{c.cta}</a>
              </div>
              <div className="px-7 pb-7">
                <Visual progress={1} />
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
