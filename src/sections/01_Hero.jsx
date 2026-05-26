import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * Hero — dark fluid-line stage with mouse-reactive flow.
 *
 *  • 26 SVG paths drifting horizontally, each with its own freq/amp/phase
 *  • Speed bumped ~2.5× from v2 for clearly visible motion
 *  • Mouse field: lines bend toward the cursor with a soft falloff
 *    (gaussian, ~340px radius). A glow blob also tracks the cursor.
 *  • Soft, tall transition to lightmode at the bottom
 */
export default function Hero() {
  const sectionRef = useRef(null)
  const svgRef = useRef(null)
  const pathsRef = useRef([])
  const glowRef = useRef(null)
  // mouse state in SVG (viewBox) coords — lerped each frame
  const mouseRef = useRef({ x: 800, y: 400, tx: 800, ty: 400, active: 0, ta: 0 })

  useEffect(() => {
    const W = 1600
    const H = 800
    const LINE_COUNT = 26
    const SEGMENTS = 26
    const paths = pathsRef.current.slice(0, LINE_COUNT)

    const seeds = paths.map((_, i) => ({
      base: H * 0.5 + (i - LINE_COUNT / 2) * 18,
      amp: 28 + Math.random() * 60,
      freq: 1.4 + Math.random() * 1.4,
      phase: Math.random() * Math.PI * 2,
      // ~2.5× faster than v2
      speed: 0.18 + Math.random() * 0.28,
    }))

    const buildPath = (s, t, mx, my, ma) => {
      const pts = []
      const RADIUS = 340          // mouse influence radius (svg units)
      const STRENGTH = 90 * ma    // peak vertical pull
      for (let i = 0; i <= SEGMENTS; i++) {
        const x = (W / SEGMENTS) * i
        let y =
          s.base +
          Math.sin((i / SEGMENTS) * Math.PI * s.freq + s.phase + t * s.speed) *
            s.amp +
          Math.sin((i / SEGMENTS) * Math.PI * (s.freq * 2.1) + t * s.speed * 0.6) *
            (s.amp * 0.3)

        // mouse field — gaussian falloff in 2D
        if (ma > 0.01) {
          const dx = x - mx
          const dy = y - my
          const d2 = dx * dx + dy * dy
          const sigma2 = RADIUS * RADIUS
          const w = Math.exp(-d2 / (2 * sigma2))
          // pull each point toward the mouse y, scaled by gaussian
          y += (my - y) * w * 0.55 * ma
          // small horizontal compression (subtle elasticity)
          // (handled implicitly by neighboring points' similar pulls)
          // optional vertical kick that fades with distance
          y += Math.sin(t * 4 + i * 0.4) * STRENGTH * w * 0.05
        }

        pts.push([x, y])
      }
      // Catmull-Rom → cubic-bezier smoothing
      let d = `M ${pts[0][0]} ${pts[0][1]}`
      for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[i === 0 ? i : i - 1]
        const p1 = pts[i]
        const p2 = pts[i + 1]
        const p3 = pts[i + 2 < pts.length ? i + 2 : i + 1]
        const cp1x = p1[0] + (p2[0] - p0[0]) / 6
        const cp1y = p1[1] + (p2[1] - p0[1]) / 6
        const cp2x = p2[0] - (p3[0] - p1[0]) / 6
        const cp2y = p2[1] - (p3[1] - p1[1]) / 6
        d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2[0]} ${p2[1]}`
      }
      return d
    }

    let raf = 0
    const t0 = performance.now()
    const tick = (now) => {
      const t = (now - t0) / 1000
      const m = mouseRef.current
      // lerp toward target
      m.x += (m.tx - m.x) * 0.12
      m.y += (m.ty - m.y) * 0.12
      m.active += (m.ta - m.active) * 0.08
      for (let i = 0; i < paths.length; i++) {
        const el = paths[i]
        if (!el) continue
        el.setAttribute('d', buildPath(seeds[i], t, m.x, m.y, m.active))
      }
      // move the glow blob (CSS pixels)
      if (glowRef.current && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const px = (m.x / W) * rect.width
        const py = (m.y / H) * rect.height
        glowRef.current.style.transform = `translate3d(${px - 220}px, ${py - 220}px, 0)`
        glowRef.current.style.opacity = (0.55 * m.active).toFixed(3)
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    // gentle entry
    gsap.fromTo(svgRef.current, { opacity: 0 }, { opacity: 1, duration: 1.4, ease: 'power2.out' })

    // mouse listeners on the hero section
    const sec = sectionRef.current
    if (!sec) return () => cancelAnimationFrame(raf)
    const onMove = (e) => {
      const r = sec.getBoundingClientRect()
      const nx = (e.clientX - r.left) / r.width
      const ny = (e.clientY - r.top) / r.height
      const m = mouseRef.current
      m.tx = nx * W
      m.ty = ny * H
      m.ta = 1
    }
    const onLeave = () => { mouseRef.current.ta = 0 }
    const onEnter = () => { mouseRef.current.ta = 1 }
    sec.addEventListener('mousemove', onMove)
    sec.addEventListener('mouseleave', onLeave)
    sec.addEventListener('mouseenter', onEnter)

    return () => {
      cancelAnimationFrame(raf)
      sec.removeEventListener('mousemove', onMove)
      sec.removeEventListener('mouseleave', onLeave)
      sec.removeEventListener('mouseenter', onEnter)
    }
  }, [])

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  const LINE_COUNT = 26

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#0A0A0A] text-white cursor-crosshair"
    >
      {/* base radial warmth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 55%, rgba(40,83,255,0.28) 0%, rgba(40,83,255,0.08) 35%, transparent 70%)',
        }}
      />

      {/* mouse-tracked glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute top-0 left-0 w-[440px] h-[440px] rounded-full opacity-0 mix-blend-screen"
        style={{
          background:
            'radial-gradient(circle, rgba(110,139,255,0.55) 0%, rgba(40,83,255,0.18) 30%, transparent 65%)',
          filter: 'blur(20px)',
          transition: 'opacity 200ms ease',
        }}
        aria-hidden="true"
      />

      {/* fluid lines */}
      <svg
        ref={svgRef}
        className="pointer-events-none absolute inset-0 w-full h-full"
        viewBox="0 0 1600 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#2853FF" stopOpacity="0" />
            <stop offset="35%"  stopColor="#2853FF" stopOpacity="0.7" />
            <stop offset="65%"  stopColor="#A8BBFF" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#2853FF" stopOpacity="0" />
          </linearGradient>
          <filter id="softBlur" x="-5%" y="-5%" width="110%" height="110%">
            <feGaussianBlur stdDeviation="0.4" />
          </filter>
        </defs>
        <g filter="url(#softBlur)">
          {Array.from({ length: LINE_COUNT }).map((_, i) => (
            <path
              key={i}
              ref={(el) => (pathsRef.current[i] = el)}
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth={0.7 + (i % 5 === 0 ? 0.7 : 0)}
              strokeLinecap="round"
              strokeOpacity={0.5 + (i % 4 === 0 ? 0.25 : 0)}
            />
          ))}
        </g>
      </svg>

      {/* vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.65) 100%)',
        }}
      />

      {/* grain */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.08]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
          backgroundSize: '220px 220px',
        }}
      />

      {/* CONTENT */}
      <div className="relative mx-auto max-w-page px-6 lg:px-8 py-28 md:py-36 lg:py-44 min-h-[640px] flex flex-col items-center justify-center text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.09 } } }}
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-display text-xs font-semibold text-white bg-white/10 backdrop-blur ring-1 ring-white/15"
          >
            <span className="text-primary">★</span> Pragmatic AI product design partner
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-display font-medium text-[44px] md:text-[72px] lg:text-[88px] leading-[1.04] tracking-tightest text-white mt-7 max-w-5xl"
          >
            Ship the product,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E8BFF] via-white to-[#6E8BFF]">
              not the deck.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-body text-base md:text-lg leading-[1.6] text-white/70 mt-6 max-w-xl mx-auto"
          >
            We design and build AI-native products for founders who need to launch fast
            and look credible from day one. UX, UI, and front-end — under one roof.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mt-9">
            <a className="btn-primary" href="#contact">
              Start a Project
              <span className="w-5 h-5 rounded-full bg-white/20 inline-flex items-center justify-center text-[10px]">→</span>
            </a>
            <a
              className="btn inline-flex items-center gap-2.5 px-5 py-3.5 rounded-lg font-display font-semibold text-sm text-white border border-white/25 hover:border-white/60 transition-colors bg-transparent"
              href="#work"
            >
              See Recent Work
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="absolute left-1/2 -translate-x-1/2 bottom-10 flex flex-col items-center gap-2 text-white/40"
          >
            <span className="font-display text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            <span className="block w-px h-8 bg-white/25" />
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}
