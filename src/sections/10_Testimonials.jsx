import { motion } from 'framer-motion'

const items = [
  { kind: 'video', brand: 'Fluz' },
  { kind: 'quote', text: 'Elux helped us work on some of our most ambitious launches. They moved fast without breaking the design.', logo: 'SISYPHUS' },
  { kind: 'quote', text: 'A real partner that accelerates our growth — not a vendor we have to manage.', logo: 'NETEVIA' },
  { kind: 'video', brand: 'Coinflow' },
  { kind: 'quote', text: 'Flexibility, scalability, and security we actually needed for a fintech MVP.', logo: 'SPLITIT' },
  { kind: 'quote', text: 'With Elux we reliably expanded our product offering without scaling the team.', logo: 'BNY' },
]

export default function Testimonials() {
  return (
    <section className="bg-soft mt-28">
      <div className="mx-auto max-w-page px-6 lg:px-8 py-20">
        <div className="eyebrow">In their words</div>
        <h2 className="h2-display mt-2 mb-10">Built with founders who ship.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr] gap-4">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.06 }}
            >
              {it.kind === 'video' ? (
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-ink to-[#3A3A38] relative overflow-hidden cursor-pointer">
                  <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 60%, rgba(40,83,255,.2), transparent 50%)' }} />
                  <span className="absolute top-4 left-4 font-display font-semibold text-sm text-white/90">{it.brand}</span>
                  <div className="absolute left-4 bottom-4 w-11 h-11 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white">▶</div>
                </div>
              ) : (
                <div className="p-6 border border-line rounded-2xl bg-card min-h-[240px] flex flex-col justify-between">
                  <p className="font-body text-[15px] leading-snug">"{it.text}"</p>
                  <div className="font-display font-bold text-base text-ink-soft mt-4">{it.logo}</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
