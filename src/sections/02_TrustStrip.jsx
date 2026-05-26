import { motion } from 'framer-motion'

const logos = [
  { label: 'Sisyphus', cls: 'font-bold' },
  { label: 'capsule',  cls: 'italic font-medium' },
  { label: 'BOLTSHIFT', cls: 'font-light tracking-[2px]' },
  { label: 'icetubs.', cls: 'font-mono' },
  { label: 'DUA',      cls: 'font-bold' },
  { label: 'warner',   cls: 'italic font-medium' },
]

export default function TrustStrip() {
  return (
    <section className="bg-soft">
      <div className="mx-auto max-w-page px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="text-[#F5B544] tracking-[2px] text-sm">★★★★★</div>
            <div className="font-display font-semibold text-sm text-ink">5.0 on Clutch · Trusted by 40+ founders</div>
          </div>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3 opacity-70">
            {logos.map((l) => (
              <span key={l.label} className={`font-display text-lg text-ink-soft ${l.cls}`}>
                {l.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
