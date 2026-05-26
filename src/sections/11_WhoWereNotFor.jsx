import { motion } from 'framer-motion'

const cards = [
  { h: 'Logo-only or banner gigs',  p: 'We don\'t do one-off graphics. ', strike: '"Just a quick logo"', tail: ' turns into months of unscoped revisions.' },
  { h: 'Spec-doc-first projects',   p: 'If approval takes longer than building, we\'re not the right partner. We work with founders who can decide fast.', strike: '', tail: '' },
  { h: '"Make it look like Apple"', p: 'We design for your audience and your stage — not for moodboards. If reference-matching is the goal, hire a copyist.', strike: '', tail: '' },
]

export default function WhoWereNotFor() {
  return (
    <section id="contact" className="mx-auto max-w-page px-6 lg:px-8 pt-28">
      <div className="mb-9">
        <div className="eyebrow">Honest filter</div>
        <h2 className="h2-display mt-2">
          If you want a <span className="line-through text-muted">logo and a banner</span>, <br />
          we're not your team.
        </h2>
        <p className="lede mt-4">
          Elux is for founders shipping real product. If your brief is one-off graphics or a 6-month spec doc, save your time and ours.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {cards.map((c, i) => (
          <motion.div
            key={c.h}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="p-7 border border-line rounded-2xl bg-white min-h-[240px] flex flex-col justify-between"
          >
            <div className="w-11 h-11 rounded-xl bg-[#FBF4F1] text-danger flex items-center justify-center text-lg mb-5">✕</div>
            <div>
              <h4 className="font-display font-semibold text-lg tracking-tight mb-2">{c.h}</h4>
              <p className="body-text text-[13px]">
                {c.p}
                {c.strike && <span className="line-through text-muted">{c.strike}</span>}
                {c.tail}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 p-10 md:p-14 bg-ink text-white rounded-3xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="font-display font-semibold text-xs uppercase tracking-[0.14em] text-white/50 mb-2">Still here?</div>
          <h3 className="font-display font-medium text-3xl md:text-4xl tracking-tight leading-tight">
            Then we should probably talk.
          </h3>
        </div>
        <a href="mailto:project@elux.space" className="btn-primary self-start md:self-auto">
          Start a Project
          <span className="w-5 h-5 rounded-full bg-white/20 inline-flex items-center justify-center text-[10px]">→</span>
        </a>
      </div>
    </section>
  )
}
