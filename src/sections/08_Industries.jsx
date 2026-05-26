import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatePresence, motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const industries = [
  { name: 'AI & SaaS',          count: '12 projects', headline: 'Built for builders.',    brand: 'elux/case-01' },
  { name: 'Fintech',            count: '07 projects', headline: 'Money. Faster.',          brand: 'elux/case-02' },
  { name: 'Health & Wellness',  count: '05 projects', headline: 'Care, designed.',         brand: 'elux/case-03' },
  { name: 'Mobility',           count: '04 projects', headline: 'Powered to play all day.', brand: 'elux/case-04' },
  { name: 'Marketplace',        count: '06 projects', headline: 'Liquidity, by design.',   brand: 'elux/case-05' },
]

export default function Industries() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (!sectionRef.current) return
    const items = sectionRef.current.querySelectorAll('[data-ind-item]')
    const triggers = []
    items.forEach((el, i) => {
      const t = ScrollTrigger.create({
        trigger: el,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActive(i),
        onEnterBack: () => setActive(i),
      })
      triggers.push(t)
    })
    return () => triggers.forEach((t) => t.kill())
  }, [])

  return (
    <section id="industries" ref={sectionRef} className="mx-auto max-w-page px-6 lg:px-8 pt-28">
      <div className="eyebrow">By industry</div>
      <h2 className="h2-display mt-2 mb-12">Built across the industries where speed compounds.</h2>

      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
        <div className="flex flex-col">
          {industries.map((ind, i) => (
            <div
              key={ind.name}
              data-ind-item
              onMouseEnter={() => setActive(i)}
              className="py-4 border-b border-line flex justify-between items-center cursor-pointer"
            >
              <span className={`font-display font-medium text-2xl md:text-[28px] tracking-tight transition-colors ${active === i ? 'text-ink' : 'text-muted hover:text-ink'}`}>
                {ind.name}
              </span>
              <span className="font-display font-semibold text-xs text-muted">{ind.count}</span>
            </div>
          ))}
        </div>

        <div className="lg:sticky lg:top-24">
          <div className="aspect-[5/4] bg-[#F8F4E8] rounded-2xl relative overflow-hidden flex items-center justify-center p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-8 flex items-center justify-center"
              >
                <div className="w-[80%] aspect-[16/10] bg-[#1A1A18] rounded-lg relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0" style={{ background: 'repeating-linear-gradient(90deg, transparent 0 10px, rgba(40,83,255,.18) 10px 11px)' }} />
                  <div className="relative z-[2] text-white font-display font-bold text-3xl md:text-4xl tracking-tight text-center leading-none">
                    {industries[active].headline}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="absolute top-6 left-6 font-display font-medium text-sm text-ink-soft">{industries[active].brand}</div>
            <div className="absolute top-6 right-6 text-right font-display text-[11px] text-ink-soft leading-relaxed">
              UX &amp; UI Design<br />No-code Build<br />Brand System<br />Launch
            </div>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 font-display text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-soft">
              View all projects
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
