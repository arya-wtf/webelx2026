/**
 * Footer — "fat footer" per elux-website-review-deck.html (slide 9 row 14):
 *   "Services, industries, comparison pages, blog. Footers are SEO real
 *    estate + internal-link juice."
 *
 * Structure:
 *   • Pre-footer journal hook (surfaces the 82-article SEO calendar)
 *   • Big wordmark + tagline (pulled from elux.space)
 *   • 5 link columns: Services / Industries / Compare / Studio / Connect
 *   • Contact block: hello@elux.space + +62 851-5698-9279
 *   • Shop row: UI8 / Gumroad / Creative Market (kept from existing site)
 *   • Legal row: copyright + privacy/terms/cookies + system status
 *
 * Dark throughout. White/10 top divider so it merges cleanly with section 11.
 */

const services = [
  { label: 'MVP UX & UI design',      href: '#' },
  { label: 'Clickable prototype',     href: '#' },
  { label: 'Launch-ready landing',    href: '#' },
  { label: 'No-code MVP build',       href: '#' },
  { label: 'UX audit',                href: '#' },
  { label: 'Activation flow redesign',href: '#' },
  { label: 'Design system setup',     href: '#' },
  { label: 'Dedicated squad',         href: '#' },
]

const industries = [
  { label: 'AI & SaaS',          href: '#' },
  { label: 'Fintech',            href: '#' },
  { label: 'Health & wellness',  href: '#' },
  { label: 'Mobility',           href: '#' },
  { label: 'Marketplace',        href: '#' },
]

const compare = [
  { label: 'Elux vs freelancer',          href: '#' },
  { label: 'Elux vs traditional agency',  href: '#' },
  { label: 'Elux vs in-house design',     href: '#' },
  { label: 'Elux vs no-code agency',      href: '#' },
]

const studio = [
  { label: 'Work',     href: '#work' },
  { label: 'Journal',  href: '#journal' },
  { label: 'About',    href: '#about' },
  { label: 'Process',  href: '#process' },
  { label: 'Careers',  href: '#careers' },
  { label: 'Contact',  href: '#contact' },
]

const socials = [
  { label: 'Dribbble',  href: 'https://dribbble.com/' },
  { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'Behance',   href: 'https://behance.net/' },
  { label: 'LinkedIn',  href: 'https://linkedin.com/' },
]

const shop = [
  { label: 'UI8',             href: 'https://ui8.net/' },
  { label: 'Gumroad',         href: 'https://gumroad.com/' },
  { label: 'Creative Market', href: 'https://creativemarket.com/' },
]

function ColumnHeading({ children }) {
  return (
    <div className="font-display font-semibold text-[11px] uppercase tracking-[0.14em] text-white/45 mb-5">
      {children}
    </div>
  )
}

function LinkList({ items }) {
  return (
    <ul className="space-y-2.5">
      {items.map((it) => (
        <li key={it.label}>
          <a
            href={it.href}
            className="font-body text-[14px] text-white/80 hover:text-white transition-colors inline-flex items-center gap-1.5 group"
          >
            <span>{it.label}</span>
            <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary text-[12px]">→</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      {/* faint divider so the footer reads as its own block when section 11
          (also dark) meets it flush */}
      <div className="border-t border-white/10" aria-hidden="true" />

      {/* ─── JOURNAL HOOK ──────────────────────────────────────────── */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-page px-6 lg:px-8 py-12 grid lg:grid-cols-[1.2fr_1fr] gap-8 items-end">
          <div>
            <div className="font-display font-semibold text-[11px] uppercase tracking-[0.14em] text-primary mb-3">
              The Journal
            </div>
            <h3 className="font-display font-medium text-[26px] md:text-[36px] leading-[1.1] tracking-tightest max-w-xl">
              Notes on shipping AI-native products, with the receipts.
            </h3>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-2 self-stretch sm:self-end w-full"
          >
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <input
              id="footer-email"
              type="email"
              placeholder="founder@yourstartup.com"
              className="flex-1 bg-white/5 border border-white/15 rounded-lg px-4 py-3.5 font-body text-[14px] text-white placeholder:text-white/35 focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              className="btn-primary justify-center"
            >
              Get the journal
              <span className="w-5 h-5 rounded-full bg-white/20 inline-flex items-center justify-center text-[10px]">→</span>
            </button>
          </form>
        </div>
      </div>

      {/* ─── BRAND + COLUMNS ───────────────────────────────────────── */}
      <div className="mx-auto max-w-page px-6 lg:px-8 py-16 grid lg:grid-cols-12 gap-10">
        {/* brand + tagline + contact */}
        <div className="lg:col-span-4">
          <a href="#" className="inline-block font-display font-bold text-4xl tracking-tightest leading-none">
            elux<span className="text-primary">.</span>space
          </a>
          <p className="font-body text-white/65 text-[15px] leading-[1.6] mt-5 max-w-sm">
            We help startups and companies design digital products people love and trust.
          </p>

          <div className="mt-8 space-y-2">
            <a href="mailto:hello@elux.space" className="block font-display font-medium text-white hover:text-primary transition-colors">
              hello@elux.space
            </a>
            <a href="tel:+6285156989279" className="block font-body text-white/65 hover:text-white transition-colors">
              +62 851-5698-9279
            </a>
            <div className="font-body text-white/45 text-[13px] mt-1">
              Jakarta · Bali · Remote
            </div>
          </div>

          {/* status pill */}
          <div className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-success opacity-60 animate-ping" />
              <span className="relative w-2 h-2 rounded-full bg-success" />
            </span>
            <span className="font-display text-[11px] font-semibold text-white/75 tracking-wide">
              Booking Q3 — 2 slots open
            </span>
          </div>
        </div>

        {/* 5 link columns */}
        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <ColumnHeading>Services</ColumnHeading>
            <LinkList items={services} />
          </div>
          <div>
            <ColumnHeading>Industries</ColumnHeading>
            <LinkList items={industries} />
          </div>
          <div>
            <ColumnHeading>Compare</ColumnHeading>
            <LinkList items={compare} />
          </div>
          <div>
            <ColumnHeading>Studio</ColumnHeading>
            <LinkList items={studio} />
          </div>
          <div>
            <ColumnHeading>Connect</ColumnHeading>
            <LinkList items={socials} />
            <div className="mt-7">
              <ColumnHeading>Shop</ColumnHeading>
              <LinkList items={shop} />
            </div>
          </div>
        </div>
      </div>

      {/* ─── LEGAL / META ─────────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-page px-6 lg:px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="font-body text-[12px] text-white/45">
            © {new Date().getFullYear()} Elux Space. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-6 text-[12px] font-body text-white/55">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
          <div className="font-display text-[11px] text-white/35 tracking-wide">
            Built by Elux · v2026.1
          </div>
        </div>
      </div>
    </footer>
  )
}
