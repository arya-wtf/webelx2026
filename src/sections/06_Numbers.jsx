import { motion } from 'framer-motion'

const tiles = [
  { big: '7d',  lab: 'MVP timeline',     desc: 'From signed brief to live, investor-ready MVP — average across 12 seed-stage launches.' },
  { big: '55%', lab: 'Faster onboarding', desc: 'Median improvement on activation flow after one Elux redesign sprint.', feat: true },
  { big: '89%', lab: 'Fewer regressions', desc: 'Design + dev under one roof means UI bugs don\'t ping-pong across handoffs.' },
]

export default function Numbers() {
  return (
    <section className="mx-auto max-w-page px-6 lg:px-8 pt-28">
      <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-end mb-10">
        <div>
          <div className="eyebrow">By the numbers</div>
          <h2 className="h2-display mt-2">Outcomes founders care about.</h2>
        </div>
        <p className="body-text">Across 40+ launches, our partner founders see faster shipping cycles and measurably less rework.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {tiles.map((t, i) => (
          <motion.div
            key={t.lab}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={`p-8 rounded-2xl min-h-[220px] flex flex-col justify-between ${
              t.feat ? 'bg-ink text-white border border-ink' : 'bg-white border border-line'
            }`}
          >
            <div>
              <div className="font-display font-medium text-[64px] md:text-[72px] leading-none tracking-tighter">{t.big}</div>
              <div className={`font-display font-semibold text-[13px] uppercase tracking-[0.08em] mt-2 ${t.feat ? 'text-white/60' : 'text-muted'}`}>{t.lab}</div>
            </div>
            <p className={`font-body text-[13px] leading-[1.5] mt-4 ${t.feat ? 'text-white/70' : 'text-ink-soft'}`}>{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
