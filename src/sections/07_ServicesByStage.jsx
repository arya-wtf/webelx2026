import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const STAGES = {
  Seed: {
    h: 'Validate fast. Ship a credible MVP in 7 days.',
    p: 'Prove the core value, ship the first version, and look legit from day one.',
    items: [
      { t: 'MVP UX & UI Design', d: 'Core flows and screens users actually need, ready for development.' },
      { t: 'Clickable Prototype', d: 'Demo-ready prototype to sell the idea, test the flow, align stakeholders.' },
      { t: 'Launch-Ready Landing Page', d: 'Conversion-first page that explains value fast and builds trust instantly.' },
      { t: 'No-Code MVP Build', d: 'Go live with a clean build, responsive layout, and QA included.' },
      { t: 'Pitch & Demo Readiness', d: 'Make the product feel credible for investors, pilots, and sales conversations.' },
    ],
  },
  Growth: {
    h: 'Reduce friction. Scale activation and retention.',
    p: 'Audit, redesign, and ship the flows that compound user value.',
    items: [
      { t: 'UX Audit & Heuristic Review', d: 'Identify the 20% of friction causing 80% of drop-off.' },
      { t: 'Activation Flow Redesign', d: 'Redesign onboarding and aha-moment paths with measurable lift.' },
      { t: 'Design System Setup', d: 'Tokens, components, and docs so your team ships consistent UI.' },
      { t: 'A/B Test Variants', d: 'Production-ready alternates for the flows that matter.' },
      { t: 'Feature Sprint Support', d: 'Embedded design for 1–3 month roadmap pushes.' },
    ],
  },
  Scale: {
    h: 'Mature the product. Operate like a system, not a stack.',
    p: 'Design ops, brand evolution, and dedicated squad support.',
    items: [
      { t: 'Brand Evolution', d: 'Tighten the brand for enterprise credibility without losing soul.' },
      { t: 'Design Ops Setup', d: 'Tooling, process, and rituals so design scales with engineering.' },
      { t: 'Dedicated Squad', d: 'A named designer + builder pair working on retainer.' },
      { t: 'Internal Tools UX', d: 'Operator interfaces, dashboards, admin panels — done right.' },
      { t: 'Quarterly Strategy', d: 'Strategic design partner, not a vendor.' },
    ],
  },
}

export default function ServicesByStage() {
  const [stage, setStage] = useState('Seed')
  const [hover, setHover] = useState(0)
  const data = STAGES[stage]

  return (
    <section id="services" className="mx-auto max-w-page px-6 lg:px-8 pt-28">
      <div className="eyebrow">Services by startup stage</div>
      <h2 className="h2-display mt-2 mb-7">Support that fits where you are.</h2>

      <div className="inline-flex bg-soft p-1.5 rounded-full mb-10">
        {Object.keys(STAGES).map((s) => (
          <button
            key={s}
            onClick={() => { setStage(s); setHover(0) }}
            className={`px-5 py-2.5 rounded-full font-display font-semibold text-sm transition-colors ${
              stage === s ? 'bg-primary text-white' : 'text-ink-soft hover:text-ink'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={stage + hover}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <h3 className="font-display font-semibold text-3xl leading-tight tracking-tight mb-3">{data.h}</h3>
              <p className="body-text mb-6">{data.p}</p>
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-soft to-white border border-line rounded-2xl relative overflow-hidden">
                <div className="absolute top-[16%] left-[8%] bg-white border border-line rounded-lg px-2.5 py-2 font-display text-[11px] font-semibold shadow-card">
                  {data.items[hover]?.t || 'Preview'}
                </div>
                <div className="absolute top-[40%] right-[10%] bg-primary text-white border border-primary rounded-lg px-2.5 py-2 font-display text-[11px] font-semibold shadow-card">
                  ↑ activation +55%
                </div>
                <div className="absolute bottom-[18%] left-[14%] bg-white border border-line rounded-lg px-2.5 py-2 font-display text-[11px] font-semibold shadow-card">
                  Investor preview
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="border-t border-line">
          {data.items.map((it, i) => (
            <div
              key={it.t}
              onMouseEnter={() => setHover(i)}
              className="grid grid-cols-[auto_1fr_auto] gap-5 py-5 border-b border-line items-start cursor-pointer group"
            >
              <span className="font-display font-semibold text-sm text-muted pt-1">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <div className="font-display font-semibold text-lg tracking-tight group-hover:text-primary transition-colors">{it.t}</div>
                <div className="font-body text-[13px] text-ink-soft mt-1 max-w-md">{it.d}</div>
              </div>
              <span className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-sm">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
