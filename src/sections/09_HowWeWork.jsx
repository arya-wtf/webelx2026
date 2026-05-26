import { motion } from 'framer-motion'

const steps = [
  { step: 'Step 01', t: 'Brief & align',                  p: 'One async intake, one strategy call. We come back with scope, timeline, and the smallest first ship in 48 hours.', asset: 'radial-gradient(circle at 30% 30%, #D8FF5C, #7FB200)' },
  { step: 'Step 02', t: 'Design & build in parallel',     p: 'UX, UI, and front-end happen in the same sprint. Less handoff. Faster feedback. Real builds, not pretty mockups.', asset: 'radial-gradient(circle at 70% 30%, #FFD4C2, #E55D43)' },
  { step: 'Step 03', t: 'Ship & iterate',                 p: 'Live on day 7. Then weekly improvements based on real users, not on Slack opinions.', asset: 'radial-gradient(circle at 50% 60%, #C9D5FF, #2853FF)' },
]

export default function HowWeWork() {
  return (
    <section className="mx-auto max-w-page px-6 lg:px-8 pt-28">
      <div className="eyebrow">Our process</div>
      <h2 className="h2-display mt-2 mb-12">A loop, not a waterfall.</h2>

      <div className="grid md:grid-cols-3 gap-5">
        {steps.map((s, i) => (
          <motion.div
            key={s.t}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="p-7 border border-line rounded-2xl bg-white min-h-[300px] flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="font-display font-semibold text-xs text-primary uppercase tracking-[0.08em] mb-3.5">{s.step}</div>
              <h4 className="font-display font-semibold text-2xl tracking-tight mb-2.5">{s.t}</h4>
              <p className="body-text text-[13px]">{s.p}</p>
            </div>
            <div className="aspect-[5/3] rounded-xl mt-4 relative overflow-hidden" style={{ background: s.asset }}>
              <div className="absolute inset-0" style={{ background: 'repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,.18) 0 1px, transparent 1px 6px)' }} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
