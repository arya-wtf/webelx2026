export default function Footer() {
  return (
    <footer className="bg-ink text-white mt-24">
      <div className="mx-auto max-w-page px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <div className="font-display font-bold text-2xl mb-4">
              elux<span className="text-primary">.</span>space
            </div>
            <p className="font-body text-white/70 max-w-md text-[15px] leading-[1.6]">
              Pragmatic AI product design partner. We design and ship products with founders who move fast.
            </p>
            <a href="#" className="btn-primary mt-8">
              Start a Project
              <span className="w-5 h-5 rounded-full bg-white/20 inline-flex items-center justify-center text-[10px]">→</span>
            </a>
          </div>

          <div className="md:col-span-2">
            <div className="micro text-white/40 mb-4">Studio</div>
            <ul className="space-y-2 text-sm font-body text-white/80">
              <li><a href="#">Work</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Process</a></li>
              <li><a href="#">Journal</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="micro text-white/40 mb-4">Contact</div>
            <ul className="space-y-2 text-sm font-body text-white/80">
              <li>project@elux.space</li>
              <li>Jakarta · Bali</li>
              <li>WhatsApp</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="micro text-white/40 mb-4">Social</div>
            <ul className="space-y-2 text-sm font-body text-white/80">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Dribbble</a></li>
              <li><a href="#">Behance</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/50 font-body">
          <div>© {new Date().getFullYear()} Elux Space. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
