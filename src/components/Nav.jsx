import { motion } from 'framer-motion'

const links = ['Work', 'Services', 'Industries', 'About', 'Journal']

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 backdrop-blur-md bg-bg/80 border-b border-line"
    >
      <div className="mx-auto max-w-page px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-lg tracking-tighter">
          elux<span className="text-primary">.</span>space
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-display text-sm text-ink-soft hover:text-ink transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-primary text-sm">
          Start a Project
          <span className="w-5 h-5 rounded-full bg-white/20 inline-flex items-center justify-center text-[10px]">→</span>
        </a>
      </div>
    </motion.header>
  )
}
