import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const cards = [
  { title: 'Sand & Witch',   sub: 'From idea to launch in 21 days', tag: 'SaaS · MVP',  gradient: 'from-[#FFB47A] to-[#E55D43]' },
  { title: 'Sweet Lorens',   sub: 'Onboarding redesign',            tag: 'Fintech',     gradient: 'from-[#A4C9FF] to-[#2853FF]' },
  { title: 'Caffeine Coders', sub: 'Dev tool repositioning',        tag: 'AI Agent',    gradient: 'from-[#1A1A18] to-[#4A4A48]' },
  { title: 'Pasta Palette',  sub: 'Brand + product system',         tag: 'Mobility',    gradient: 'from-[#D8FF5C] to-[#7FB200]' },
  { title: 'Rally Studio',   sub: 'AI-native CRM rebrand',          tag: 'SaaS',        gradient: 'from-[#FFD4C2] to-[#E55D43]' },
  { title: 'Orchestra',      sub: 'Agency operating system',        tag: 'Tooling',     gradient: 'from-[#C9D5FF] to-[#2853FF]' },
]

export default function PortfolioHighlight() {
  const scrollerRef = useRef(null)

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    // simple inertia-free drag scroll
    let isDown = false, startX = 0, scrollLeft = 0
    const onDown = (e) => { isDown = true; startX = (e.pageX ?? e.touches[0].pageX) - el.offsetLeft; scrollLeft = el.scrollLeft; el.classList.add('cursor-grabbing') }
    const onUp = () => { isDown = false; el.classList.remove('cursor-grabbing') }
    const onMove = (e) => { if (!isDown) return; e.preventDefault(); const x = (e.pageX ?? e.touches[0].pageX) - el.offsetLeft; el.scrollLeft = scrollLeft - (x - startX) * 1.2 }
    el.addEventListener('mousedown', onDown); el.addEventListener('mouseleave', onUp); el.addEventListener('mouseup', onUp); el.addEventListener('mousemove', onMove)
    el.addEventListener('touchstart', onDown); el.addEventListener('touchend', onUp); el.addEventListener('touchmove', onMove)
    return () => {
      el.removeEventListener('mousedown', onDown); el.removeEventListener('mouseleave', onUp); el.removeEventListener('mouseup', onUp); el.removeEventListener('mousemove', onMove)
      el.removeEventListener('touchstart', onDown); el.removeEventListener('touchend', onUp); el.removeEventListener('touchmove', onMove)
    }
  }, [])

  const scrollBy = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    gsap.to(el, { scrollLeft: el.scrollLeft + dir * 360, duration: 0.6, ease: 'power3.out' })
  }

  return (
    <section id="work" className="mx-auto max-w-page px-6 lg:px-8 pt-24">
      <div className="flex items-end justify-between mb-10">
        <div>
          <div className="eyebrow">Recent Work</div>
          <h2 className="h2-display mt-2">Real products. <br />Real shipping.</h2>
        </div>
        <div className="hidden md:flex gap-2">
          <button onClick={() => scrollBy(-1)} className="w-11 h-11 rounded-full border border-line flex items-center justify-center hover:bg-soft transition-colors" aria-label="Previous">←</button>
          <button onClick={() => scrollBy(1)} className="w-11 h-11 rounded-full bg-ink text-white border border-ink flex items-center justify-center" aria-label="Next">→</button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-5 overflow-x-auto pb-6 cursor-grab select-none snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none' }}
      >
        {cards.map((c) => (
          <div
            key={c.title}
            className="relative snap-start shrink-0 w-[280px] md:w-[320px] aspect-[3/4] rounded-2xl overflow-hidden bg-ink text-white transition-transform hover:-translate-y-1"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-90`} />
            <span className="absolute top-3.5 left-3.5 px-2.5 py-1 bg-white/15 backdrop-blur rounded-full font-display text-[11px] font-semibold">{c.tag}</span>
            <div className="absolute left-4 right-4 bottom-4">
              <div className="font-display font-semibold text-lg">{c.title}</div>
              <div className="font-body text-[13px] opacity-80">{c.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
