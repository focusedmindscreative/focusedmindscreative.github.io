import { Search, FlaskConical, Hammer, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: '1 \u00b7 Discover',
    text: 'We clarify goals, risks and timelines together.',
  },
  {
    icon: FlaskConical,
    title: '2 \u00b7 Prototype',
    text: 'A quick model so we can test the idea early.',
  },
  {
    icon: Hammer,
    title: '3 \u00b7 Build',
    text: 'Short sprints, regular demos and feedback.',
  },
  {
    icon: Rocket,
    title: '4 \u00b7 Launch & handover',
    text: 'Deploy, document and support your team.',
  },
]

export default function HowWeWork() {
  return (
    <section id="work" className="container py-20">
      <div className="mb-10">
        <span className="text-sm font-medium badge-accent px-2 py-1 rounded-full">How we work</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">Small team. Senior attention. Clear outcomes.</h2>
        <p className="mt-3 text-slate-700 max-w-2xl">We keep things simple and keep you in the loop. You always know what we&rsquo;re building and why.</p>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        {steps.map(({ icon: Icon, title, text }) => (
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