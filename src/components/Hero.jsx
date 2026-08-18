import { Shield, ChevronRight } from 'lucide-react'

const highlights = [
  'Web, mobile & integration expertise',
  'Clear, secure, scalable design',
  'Straightforward communication & support',
]

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'radial-gradient(60% 60% at 70% 10%, var(--color-accent-100), transparent)' }}
      />
      <div className="container py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="/fmc-logo.avif"
            alt="Focused Minds Creative"
            className="h-24 w-24 md:h-28 md:w-28 rounded-full ring-2 ring-[var(--color-accent-200)] shadow-md mb-6 object-cover"
          />
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900">
            Seamless Digital Solutions, Built for Your Business
          </h1>
          <p className="mt-6 text-lg text-slate-700 max-w-xl">
            We design and support secure web platforms, mobile apps, and integrations&mdash;crafted with clarity, scalability, and long-term success in mind.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="px-5 py-3 rounded-2xl bg-[var(--color-accent)] text-white hover:opacity-90">Start a project</a>
            <a href="#services" className="px-5 py-3 rounded-2xl ring-1 ring-slate-300 text-slate-700 hover:bg-slate-50">Explore services</a>
          </div>
          <p className="mt-4 text-sm text-slate-500">Straightforward communication &middot; Sensible budgets &middot; Practical security</p>
        </div>
        <div className="border border-slate-200 bg-white rounded-2xl p-6">
          <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
            <Shield className="h-5 w-5" style={{ color: 'var(--color-accent)' }} />
            Powerful Digital Solutions for Your Business
          </h3>
          <ul className="space-y-2 text-slate-700">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <ChevronRight className="h-4 w-4 mt-1 text-slate-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}