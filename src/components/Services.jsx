import { Smartphone, CodeXml, Workflow, Unplug } from 'lucide-react'

const services = [
  {
    icon: Smartphone,
    title: 'Mobile apps',
    text: 'Elegant iOS and Android apps that feel fast and easy to use.',
  },
  {
    icon: CodeXml,
    title: 'Bespoke software',
    text: 'Tailored systems that match how your business works.',
  },
  {
    icon: Workflow,
    title: 'Automation',
    text: 'Connect your tools and cut routine tasks so your team gets time back.',
  },
  {
    icon: Unplug,
    title: 'Integration',
    text: 'Seamless system integrations for custom solutions or third-party platforms, ensuring smooth data flow and enhanced operational efficiency.',
  },
]

export default function Services() {
  return (
    <section id="services" className="container py-20">
      <div className="mb-10">
        <span className="text-sm font-medium badge-accent px-2 py-1 rounded-full">What we do</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">Smart solutions, real results</h2>
        <p className="mt-3 text-slate-700 max-w-2xl">We deliver precisely what your business needs&mdash;efficient, effective, and impactful.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ icon: Icon, title, text }) => (
          <div key={title} className="bg-white border border-slate-200 rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-2">
              <span
                className="h-10 w-10 grid place-content-center rounded-xl"
                style={{ background: 'var(--color-accent-50)', boxShadow: 'inset 0 0 0 1px var(--color-accent-100)' }}
              >
                <Icon className="h-5 w-5" style={{ color: 'var(--color-accent)' }} />
              </span>
              <h3 className="font-semibold">{title}</h3>
            </div>
            <p className="text-sm text-slate-700">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}