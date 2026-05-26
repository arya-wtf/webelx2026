import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Section 07 — Services by Stage.
 *
 * Direction: typographic spine + earned visual reveal.
 *
 *  • Stage progression bar at top (Seed → Growth → Scale).
 *    Active stage fills the bar; clicking a stage swaps the list.
 *  • Default state: a confident, type-led service list. No preview visible.
 *  • On hover: the hovered row enlarges, neighbors fade, and a stylized
 *    wireframe preview slides in from the right — shapes are unique
 *    per service. No real screenshots needed.
 *  • Below the list: one primary CTA per stage.
 *
 * Wireframe previews are inline SVG primitives — boxes, lines, dots.
 * Each service maps to one of seven preview "kinds" defined below.
 */

const STAGES = {
  Seed: {
    h: 'Validate fast. Ship a credible MVP in 7 days.',
    p: 'Prove the core value, ship the first version, and look legit from day one.',
    cta: 'Start a Seed engagement',
    items: [
      { kind: 'mvp',        t: 'MVP UX & UI Design',          d: 'Core flows and screens users actually need, ready for development.' },
      { kind: 'prototype',  t: 'Clickable Prototype',         d: 'Demo-ready prototype to sell the idea, test the flow, align stakeholders.' },
      { kind: 'landing',    t: 'Launch-Ready Landing Page',   d: 'Conversion-first page that explains value fast and builds trust instantly.' },
      { kind: 'build',      t: 'No-Code MVP Build',           d: 'Go live with a clean build, responsive layout, and QA included.' },
      { kind: 'pitch',      t: 'Pitch & Demo Readiness',      d: 'Make the product feel credible for investors, pilots, and sales conversations.' },
    ],
  },
  Growth: {
    h: 'Reduce friction. Scale activation and retention.',
    p: 'Audit, redesign, and ship the flows that compound user value.',
    cta: 'Start a Growth engagement',
    items: [
      { kind: 'audit',      t: 'UX Audit & Heuristic Review',  d: 'Identify the 20% of friction causing 80% of drop-off.' },
      { kind: 'flows',      t: 'Activation Flow Redesign',     d: 'Redesign onboarding and aha-moment paths with measurable lift.' },
      { kind: 'system',     t: 'Design System Setup',          d: 'Tokens, components, and docs so your team ships consistent UI.' },
      { kind: 'ab',         t: 'A/B Test Variants',            d: 'Production-ready alternates for the flows that matter.' },
      { kind: 'sprint',     t: 'Feature Sprint Support',       d: 'Embedded design for 1–3 month roadmap pushes.' },
    ],
  },
  Scale: {
    h: 'Mature the product. Operate like a system, not a stack.',
    p: 'Design ops, brand evolution, and dedicated squad support.',
    cta: 'Book a Scale call',
    items: [
      { kind: 'brand',      t: 'Brand Evolution',              d: 'Tighten the brand for enterprise credibility without losing soul.' },
      { kind: 'ops',        t: 'Design Ops Setup',             d: 'Tooling, process, and rituals so design scales with engineering.' },
      { kind: 'squad',      t: 'Dedicated Squad',              d: 'A named designer + builder pair working on retainer.' },
      { kind: 'admin',      t: 'Internal Tools UX',            d: 'Operator interfaces, dashboards, admin panels — done right.' },
      { kind: 'strategy',   t: 'Quarterly Strategy',           d: 'Strategic design partner, not a vendor.' },
    ],
  },
}

const STAGE_ORDER = ['Seed', 'Growth', 'Scale']

// ─── Wireframe preview components ─────────────────────────────────────
// Each maps to a `kind` string from items[]. Pure SVG/divs, no assets.

function Frame({ children }) {
  return (
    <div className="relative w-full aspect-[4/3] bg-white border border-line rounded-2xl overflow-hidden shadow-[0_24px_48px_-24px_rgba(40,83,255,0.18)]">
      <div className="absolute top-0 inset-x-0 h-7 bg-soft border-b border-line flex items-center gap-1.5 px-3">
        <span className="w-2 h-2 rounded-full bg-[#E6E5DF]" />
        <span className="w-2 h-2 rounded-full bg-[#E6E5DF]" />
        <span className="w-2 h-2 rounded-full bg-[#E6E5DF]" />
      </div>
      <div className="absolute inset-0 pt-9 px-5 pb-5">{children}</div>
    </div>
  )
}

const Bar = ({ w = '100%', shade = 'soft', h = 8 }) => (
  <div
    className="rounded"
    style={{
      width: w,
      height: h,
      background: shade === 'primary' ? '#2853FF' : shade === 'ink' ? '#101010' : '#F0EFEA',
    }}
  />
)

const previews = {
  // SEED ───────────────────────────────
  mvp: () => (
    <Frame>
      <div className="flex flex-col gap-2.5">
        <Bar w="60%" h={10} />
        <Bar w="90%" />
        <Bar w="75%" />
        <div className="grid grid-cols-3 gap-2 mt-3">
          <div className="aspect-square bg-soft rounded-md" />
          <div className="aspect-square bg-soft rounded-md" />
          <div className="aspect-square bg-primary/15 rounded-md border border-primary/30" />
        </div>
        <Bar w="30%" shade="primary" h={12} />
      </div>
    </Frame>
  ),
  prototype: () => (
    <Frame>
      <div className="flex gap-3 h-full items-center justify-center">
        <div className="w-[28%] h-[80%] border-2 border-ink rounded-xl p-2 flex flex-col gap-1.5">
          <Bar w="100%" h={6} />
          <Bar w="60%" h={6} />
          <div className="flex-1 bg-soft rounded mt-1" />
          <Bar w="40%" shade="primary" h={8} />
        </div>
        <div className="text-primary text-2xl">→</div>
        <div className="w-[28%] h-[80%] border-2 border-primary rounded-xl p-2 flex flex-col gap-1.5">
          <Bar w="100%" h={6} />
          <Bar w="80%" h={6} />
          <div className="flex-1 bg-primary/10 rounded mt-1" />
          <Bar w="50%" shade="ink" h={8} />
        </div>
      </div>
    </Frame>
  ),
  landing: () => (
    <Frame>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <Bar w="20%" h={7} />
          <div className="flex gap-1.5">
            <Bar w="40px" h={6} />
            <Bar w="40px" h={6} />
            <Bar w="60px" shade="primary" h={10} />
          </div>
        </div>
        <Bar w="85%" h={14} />
        <Bar w="65%" h={14} />
        <Bar w="50%" />
        <div className="flex gap-2 mt-1">
          <Bar w="30%" shade="primary" h={12} />
          <Bar w="22%" h={12} />
        </div>
      </div>
    </Frame>
  ),
  build: () => (
    <Frame>
      <div className="grid grid-cols-2 gap-2 h-full">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="bg-soft rounded-md p-2 flex flex-col gap-1.5">
            <Bar w="60%" h={6} />
            <Bar w="100%" h={5} />
            <div className="flex-1 bg-white rounded mt-0.5 border border-line" />
          </div>
        ))}
      </div>
    </Frame>
  ),
  pitch: () => (
    <Frame>
      <div className="flex flex-col items-center justify-center h-full gap-2 text-center">
        <div className="font-display font-bold text-base text-ink">Series Seed</div>
        <div className="text-[11px] text-muted">12 slides · 90 seconds</div>
        <div className="grid grid-cols-4 gap-1.5 mt-2 w-full">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={`aspect-[4/3] rounded ${i === 2 ? 'bg-primary' : 'bg-soft'}`} />
          ))}
        </div>
      </div>
    </Frame>
  ),

  // GROWTH ───────────────────────────────
  audit: () => (
    <Frame>
      <div className="flex flex-col gap-2 h-full">
        <Bar w="40%" h={8} />
        <div className="grid grid-cols-3 gap-2 mt-1">
          <div className="bg-[#FBF4F1] rounded-md p-2 border border-[#F2DBD3]">
            <div className="text-[18px] font-display font-bold text-[#A04A33]">23</div>
            <div className="text-[9px] text-[#A04A33]">issues</div>
          </div>
          <div className="bg-[#FFF6E0] rounded-md p-2 border border-[#F2E0A8]">
            <div className="text-[18px] font-display font-bold text-[#8B6914]">11</div>
            <div className="text-[9px] text-[#8B6914]">warnings</div>
          </div>
          <div className="bg-[#EDF6EE] rounded-md p-2 border border-[#B8E0C0]">
            <div className="text-[18px] font-display font-bold text-success">8</div>
            <div className="text-[9px] text-success">strong</div>
          </div>
        </div>
        <div className="flex flex-col gap-1.5 mt-1">
          <Bar w="90%" />
          <Bar w="70%" />
          <Bar w="80%" />
        </div>
      </div>
    </Frame>
  ),
  flows: () => (
    <Frame>
      <div className="flex flex-col h-full">
        <div className="flex justify-between text-[10px] text-muted mb-2">
          <span>Step 1</span><span>Step 2</span><span>Step 3</span><span>Step 4</span>
        </div>
        <svg viewBox="0 0 200 80" className="w-full h-full">
          <path d="M 10 60 L 50 50 L 100 35 L 150 20 L 190 15" stroke="#2853FF" strokeWidth="2.5" fill="none" />
          <path d="M 10 65 L 50 65 L 100 60 L 150 55 L 190 52" stroke="#E6E5DF" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
          {[10, 50, 100, 150, 190].map((x, i) => (
            <circle key={i} cx={x} cy={[60,50,35,20,15][i]} r="3" fill="#2853FF" />
          ))}
        </svg>
        <div className="font-display font-semibold text-xs text-primary mt-1">+55% activation</div>
      </div>
    </Frame>
  ),
  system: () => (
    <Frame>
      <div className="grid grid-cols-4 gap-2">
        {['Aa', 'B', '◆', '●', '▭', '◐', '⊞', '◑'].map((g, i) => (
          <div key={i} className="aspect-square bg-soft rounded-md flex items-center justify-center text-ink font-display font-semibold text-sm border border-line">
            {g}
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <Bar w="100%" shade="ink" h={10} />
        <Bar w="100%" shade="primary" h={10} />
        <Bar w="100%" h={10} />
      </div>
    </Frame>
  ),
  ab: () => (
    <Frame>
      <div className="grid grid-cols-2 gap-3 h-full">
        <div className="bg-soft rounded-md p-2 flex flex-col gap-1.5">
          <div className="text-[10px] font-display font-bold text-muted">A</div>
          <Bar w="80%" h={6} />
          <Bar w="100%" />
          <div className="mt-auto"><Bar w="40%" h={10} /></div>
        </div>
        <div className="bg-primary/10 border border-primary/30 rounded-md p-2 flex flex-col gap-1.5">
          <div className="text-[10px] font-display font-bold text-primary">B · +24%</div>
          <Bar w="90%" h={6} />
          <Bar w="100%" />
          <div className="mt-auto"><Bar w="55%" shade="primary" h={10} /></div>
        </div>
      </div>
    </Frame>
  ),
  sprint: () => (
    <Frame>
      <div className="flex flex-col gap-2 h-full">
        <div className="flex justify-between items-center">
          <Bar w="35%" h={8} />
          <div className="text-[10px] text-muted">Wk 1 · 2 · 3 · 4</div>
        </div>
        <div className="flex gap-1 mt-1">
          {[1,1,1,1,0.5,0.5,0,0,0,0,0,0].map((v, i) => (
            <div key={i} className="flex-1 h-8 rounded" style={{ background: v === 1 ? '#2853FF' : v === 0.5 ? '#A8BBFF' : '#F0EFEA' }} />
          ))}
        </div>
        <div className="flex flex-col gap-1.5 mt-2">
          <Bar w="100%" />
          <Bar w="80%" />
          <Bar w="60%" />
        </div>
      </div>
    </Frame>
  ),

  // SCALE ───────────────────────────────
  brand: () => (
    <Frame>
      <div className="flex flex-col items-center justify-center h-full gap-3">
        <div className="font-display font-bold text-3xl tracking-tightest text-ink">elux<span className="text-primary">.</span></div>
        <div className="grid grid-cols-5 gap-1.5">
          {['#101010', '#2853FF', '#FAFAF7', '#F2F1EC', '#E6E5DF'].map((c) => (
            <div key={c} className="w-6 h-6 rounded-md border border-line" style={{ background: c }} />
          ))}
        </div>
        <div className="text-[10px] text-muted">Brand · Palette · Tokens</div>
      </div>
    </Frame>
  ),
  ops: () => (
    <Frame>
      <div className="flex flex-col gap-2">
        {['Tokens',  'Components', 'Patterns', 'Docs'].map((l, i) => (
          <div key={l} className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full ${i < 3 ? 'bg-primary' : 'bg-line'}`} />
            <div className="font-display font-semibold text-[11px] text-ink flex-1">{l}</div>
            <div className="flex-1 h-1.5 rounded bg-soft overflow-hidden">
              <div className="h-full bg-primary" style={{ width: ['90%','75%','60%','30%'][i] }} />
            </div>
          </div>
        ))}
      </div>
    </Frame>
  ),
  squad: () => (
    <Frame>
      <div className="flex flex-col items-center justify-center h-full gap-3">
        <div className="flex gap-3">
          <div className="w-14 h-14 rounded-full bg-soft border border-line flex items-center justify-center font-display font-bold text-ink">D</div>
          <div className="w-14 h-14 rounded-full bg-primary text-white border border-primary flex items-center justify-center font-display font-bold">+</div>
          <div className="w-14 h-14 rounded-full bg-soft border border-line flex items-center justify-center font-display font-bold text-ink">B</div>
        </div>
        <div className="text-[11px] text-muted text-center">Designer + Builder<br/>on retainer</div>
      </div>
    </Frame>
  ),
  admin: () => (
    <Frame>
      <div className="grid grid-cols-[1fr_2fr] gap-2 h-full">
        <div className="bg-soft rounded-md p-2 flex flex-col gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Bar key={i} w={['80%','60%','100%','70%','50%'][i]} h={5} />
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="grid grid-cols-3 gap-1.5">
            <div className="aspect-[4/3] bg-primary/10 border border-primary/30 rounded" />
            <div className="aspect-[4/3] bg-soft rounded" />
            <div className="aspect-[4/3] bg-soft rounded" />
          </div>
          <div className="flex-1 bg-soft rounded" />
        </div>
      </div>
    </Frame>
  ),
  strategy: () => (
    <Frame>
      <div className="flex flex-col gap-2.5">
        <div className="font-display font-semibold text-[11px] text-muted">Q1 · Q2 · Q3 · Q4</div>
        <div className="grid grid-cols-4 gap-1.5">
          {['Plan','Ship','Measure','Iterate'].map((l, i) => (
            <div key={l} className={`rounded-md p-2 text-center ${i === 1 ? 'bg-primary text-white' : 'bg-soft text-ink'}`}>
              <div className="font-display font-semibold text-[10px]">{l}</div>
            </div>
          ))}
        </div>
        <Bar w="100%" />
        <Bar w="80%" />
        <Bar w="65%" />
      </div>
    </Frame>
  ),
}

function Preview({ kind }) {
  const Comp = previews[kind] || previews.mvp
  return <Comp />
}

export default function ServicesByStage() {
  const [stage, setStage] = useState('Seed')
  const [hover, setHover] = useState(null)
  const data = STAGES[stage]
  const activeKind = hover !== null ? data.items[hover].kind : null

  return (
    <section id="services" className="mx-auto max-w-page px-6 lg:px-8 pt-28">
      {/* HEADER */}
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-end mb-12">
        <div>
          <div className="eyebrow">Services by startup stage</div>
          <h2 className="h2-display mt-2">Support that fits where you are.</h2>
        </div>
        <p className="body-text">
          Three stages, one operating model. Pick where you are right now — we'll show you the services built for that moment.
        </p>
      </div>

      {/* STAGE PROGRESSION BAR */}
      <div className="relative mb-12">
        <div className="grid grid-cols-3 gap-3 relative">
          {STAGE_ORDER.map((s, i) => {
            const active = stage === s
            const passed = STAGE_ORDER.indexOf(stage) > i
            return (
              <button
                key={s}
                onClick={() => { setStage(s); setHover(null) }}
                className="group text-left"
              >
                {/* progress line */}
                <div className="h-[3px] rounded-full bg-line overflow-hidden mb-3 relative">
                  <motion.div
                    initial={false}
                    animate={{ width: active ? '100%' : passed ? '100%' : '0%' }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className={`h-full ${active || passed ? 'bg-primary' : ''}`}
                  />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className={`font-display font-semibold text-[11px] uppercase tracking-[0.12em] ${active ? 'text-primary' : passed ? 'text-ink-soft' : 'text-muted'}`}>
                    Stage 0{i + 1}
                  </span>
                  <span className={`font-display text-2xl md:text-[28px] tracking-tight ${active ? 'text-ink' : 'text-ink-soft group-hover:text-ink'} transition-colors`}>
                    {s}
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* STAGE DESCRIPTION */}
      <AnimatePresence mode="wait">
        <motion.div
          key={stage}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 mb-12 items-end"
        >
          <h3 className="font-display font-medium text-[28px] md:text-[36px] leading-[1.15] tracking-tight max-w-2xl">
            {data.h}
          </h3>
          <p className="body-text">{data.p}</p>
        </motion.div>
      </AnimatePresence>

      {/* SERVICE LIST + EARNED PREVIEW */}
      <div
        className="relative grid lg:grid-cols-[1fr_440px] gap-10 lg:gap-12"
        onMouseLeave={() => setHover(null)}
      >
        {/* LIST */}
        <ul className="border-t border-line">
          {data.items.map((it, i) => {
            const isActive = hover === i
            const isDimmed = hover !== null && hover !== i
            return (
              <li key={it.t} className="border-b border-line">
                <motion.button
                  onMouseEnter={() => setHover(i)}
                  onFocus={() => setHover(i)}
                  animate={{ opacity: isDimmed ? 0.35 : 1 }}
                  transition={{ duration: 0.25 }}
                  className="w-full grid grid-cols-[auto_1fr_auto] gap-6 items-center py-7 text-left group"
                >
                  <span className={`font-display font-semibold text-sm transition-colors ${isActive ? 'text-primary' : 'text-muted'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <motion.div
                      animate={{ x: isActive ? 8 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className={`font-display font-medium tracking-tight transition-colors ${isActive ? 'text-ink text-[32px] md:text-[40px]' : 'text-ink text-[24px] md:text-[28px]'}`}
                      style={{ lineHeight: 1.1 }}
                    >
                      {it.t}
                    </motion.div>
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="font-body text-[14px] text-ink-soft mt-2 max-w-md overflow-hidden"
                        >
                          {it.d}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <motion.span
                    animate={{ x: isActive ? 0 : -8, opacity: isActive ? 1 : 0.4, rotate: isActive ? -45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-10 h-10 rounded-full border flex items-center justify-center text-sm ${isActive ? 'border-primary text-primary bg-primary/5' : 'border-line text-ink-soft'}`}
                  >
                    →
                  </motion.span>
                </motion.button>
              </li>
            )
          })}
        </ul>

        {/* PREVIEW STAGE (sticky on lg) */}
        <div className="hidden lg:block">
          <div className="sticky top-24">
            <AnimatePresence mode="wait">
              {activeKind ? (
                <motion.div
                  key={`${stage}-${activeKind}`}
                  initial={{ opacity: 0, x: 24, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 24, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Preview kind={activeKind} />
                  <div className="mt-4 font-display text-[11px] uppercase tracking-[0.12em] text-muted">
                    Representative output — {stage} stage
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-[4/3] rounded-2xl border border-dashed border-line flex flex-col items-center justify-center gap-2 text-center px-8"
                >
                  <div className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-muted">↖</div>
                  <div className="font-display font-semibold text-sm text-ink-soft">Hover a service</div>
                  <div className="font-body text-xs text-muted max-w-[240px]">A representative preview of what gets shipped appears here.</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* CTA BAR */}
      <div className="mt-16 p-6 md:p-8 rounded-2xl bg-ink text-white flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <div className="font-display font-semibold text-[11px] uppercase tracking-[0.12em] text-white/50 mb-1.5">
            You're at the {stage} stage
          </div>
          <div className="font-display font-medium text-xl md:text-2xl tracking-tight">
            Talk to us about the smallest first ship.
          </div>
        </div>
        <a
          href="#contact"
          className="btn-primary self-start md:self-auto"
        >
          {data.cta}
          <span className="w-5 h-5 rounded-full bg-white/20 inline-flex items-center justify-center text-[10px]">→</span>
        </a>
      </div>
    </section>
  )
}
