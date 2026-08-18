export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/fmc-logo.avif"
            alt="Focused Minds Creative logo"
            className="h-12 w-12 rounded-full ring-2 ring-[var(--color-accent-200)] shadow-sm object-cover"
          />
          <span className="font-semibold tracking-tight text-lg">Focused Minds Creative</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#services" className="hover:text-slate-900">Services</a>
          <a href="#industrybackgroud" className="hover:text-slate-900">What we build</a>
          <a href="#work" className="hover:text-slate-900">How we work</a>
          <a href="#project" className="hover:text-slate-900">Our work</a>
          <a href="#testimonials" className="hover:text-slate-900">Testimonials</a>
          <a href="#contact" className="px-3 py-1.5 rounded-2xl bg-[var(--color-accent)] text-white hover:opacity-90">Get in touch</a>
        </nav>
      </div>
    </header>
  )
}