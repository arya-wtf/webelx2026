import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const rows = [
  {
    kicker: "You're short on hands.",
    h: 'Ship fast when your team is at capacity.',
    p: 'We step in with clear ownership from UX to build-ready UI. Focused sprints, fast feedback, delivery that keeps your roadmap moving without delays.',
    cta: 'Extend my team',
    mediaCls: 'bg-gradient-to-br from-[#F3F6FF] to-white',
  },
  {
    kicker: 'Adoption is slowing.',
    h: 'UX friction is holding users back.',
    p: 'We audit what\'s breaking the experience, then redesign the flows that matter most so users move faster and the product scales cleanly.',
    cta: 'Redesign my product',
    mediaCls: 'bg-gradient-to-br from-[#FBF4F1] to-white',
  },
  {
    kicker: 'You need an MVP.',
    h: 'Investor-credible product in 7 days.',
    p: 'Prove the core value, ship the first version, and look legit from day one. Landing page, prototype, and pitch readiness in one sprint.',
    cta: 'Launch my MVP',
    mediaCls: 'bg-gradient-to-br from-[#F0F7EE] to-white',
  },
]

export default function ProblemSolution() {
  const wrapRef = useRef(null)

  useEffect(() => {
    if (!wrapRef.current) return
    const cards = wrapRef.current.querySelectorAll('[data-ps-card]')
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <section className="mx-auto max-w-page px-6 lg:px-8 pt-28">
      <div className="max-w-2xl mb-10">
        <div className="eyebrow">Problem to solution</div>
        <h2 className="h2-display mt-2">Building is hard. <br />The right partner makes it simpler.</h2>
      </div>

      <div ref={wrapRef} className="flex flex-col gap-5">
        {rows.map((r) => (
          <div
            key={r.h}
            data-ps-card
            className="grid lg:grid-cols-[1.1fr_0.9fr] border border-line rounded-2xl overflow-hidden bg-white"
          >
            <div className="p-8">
              <div className="font-display font-semibold text-xs text-primary mb-2">{r.kicker}</div>
              <h4 className="font-display font-semibold text-2xl tracking-tight mb-3">{r.h}</h4>
              <p className="body-text max-w-md mb-5">{r.p}</p>
              <a className="btn-primary text-sm" href="#">{r.cta}</a>
            </div>
            <div className={`relative min-h-[220px] ${r.mediaCls}`}>
              <div className="absolute inset-6 bg-white border border-line rounded-xl flex flex-col overflow-hidden">
                <div className="h-6 bg-soft flex items-center px-2 gap-1 border-b border-line">
                  {[0, 1, 2].map((i) => <div key={i} className="w-2 h-2 rounded-full bg-[#D9D7D0]" />)}
                </div>
                <div className="flex-1 p-3.5 flex flex-col gap-1.5">
                  <div className="h-2 w-[90%] rounded bg-line-soft" />
                  <div className="h-2 w-[70%] rounded bg-line-soft" />
                  <div className="h-2 w-[50%] rounded bg-line-soft" />
                  <div className="h-3.5 w-[30%] rounded bg-primary mt-1.5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
