import { motion } from 'framer-motion'

const without = [
  { ic: '📞', t: 'Designer ping', s: '"need copy by EOD"' },
  { ic: '📊', t: 'Manual handoff', s: 'Figma → Webflow rebuild' },
  { ic: '⚠️', t: 'Scope surprise', s: '"+2 weeks for backend"' },
]
const withUs = [
  { ic: '✓', t: 'Brief intake', s: 'Auto-scoped in 24h' },
  { ic: '✓', t: 'Design + build in parallel', s: 'UX, UI, no-code together' },
  { ic: '✓', t: 'Live product', s: 'Investor-ready, user-tested' },
]

export default function HowAINativeSolvesIt() {
  return (
    <section className="mx-auto max-w-page px-6 lg:px-8 pt-28">
      <div className="max-w-2xl mb-10">
        <div className="eyebrow">The difference</div>
        <h2 className="h2-display mt-2">Old design partners stitch tools. <br />We ship the product.</h2>
      </div>

      <div className="grid lg:grid-cols-[1fr_60px_1fr] gap-4 lg:gap-0 items-stretch">
        {/* WITHOUT */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="p-8 border border-[#F2DBD3] bg-[#FBF4F1] rounded-2xl min-h-[380px] flex flex-col"
        >
          <span className="self-start inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white border border-line micro text-ink-soft mb-6">Without Elux</span>
          <h3 className="font-display font-semibold text-[22px] leading-tight mb-5">
            Designers, devs, and PMs in 5 different Slacks.
          </h3>
          <div className="flex-1 flex flex-col gap-2">
            {without.map((m, i) => (
              <div
                key={m.t}
                className="p-3 bg-white border border-[#EFE3DC] rounded-xl flex items-center gap-3 shadow-soft"
                style={{ transform: `rotate(${[-0.6, 0.8, -0.3][i]}deg)` }}
              >
                <div className="w-7 h-7 rounded-lg bg-[#F2DBD3] flex items-center justify-center text-sm shrink-0">{m.ic}</div>
                <div className="font-body text-[13px] text-ink">
                  {m.t}
                  <small className="block text-muted text-[11px] mt-0.5">{m.s}</small>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* VS */}
        <div className="flex items-center justify-center font-display font-bold text-muted text-xs tracking-[0.1em]">VS</div>

        {/* WITH */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="p-8 border border-[#D7E1FF] bg-[#F3F6FF] rounded-2xl min-h-[380px] flex flex-col"
        >
          <span className="self-start inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white border border-line micro text-ink-soft mb-6">With Elux</span>
          <h3 className="font-display font-semibold text-[22px] leading-tight mb-5">
            One AI-native team. Strategy to ship in one loop.
          </h3>
          <div className="flex-1 flex flex-col gap-2.5">
            {withUs.slice(0, 2).map((m) => (
              <div key={m.t} className="p-3 bg-white border border-[#D7E1FF] rounded-xl flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-primary-soft text-primary font-bold flex items-center justify-center text-sm shrink-0">{m.ic}</div>
                <div className="font-body text-[13px] text-ink">
                  {m.t}
                  <small className="block text-muted text-[11px] mt-0.5">{m.s}</small>
                </div>
              </div>
            ))}
            <div className="self-center font-display font-semibold text-[11px] uppercase tracking-[0.06em] text-primary bg-primary-soft px-3.5 py-2 rounded-full my-1">
              Ship-ready in days, not quarters
            </div>
            {withUs.slice(2).map((m) => (
              <div key={m.t} className="p-3 bg-white border border-[#D7E1FF] rounded-xl flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-primary-soft text-primary font-bold flex items-center justify-center text-sm shrink-0">{m.ic}</div>
                <div className="font-body text-[13px] text-ink">
                  {m.t}
                  <small className="block text-muted text-[11px] mt-0.5">{m.s}</small>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
