import { Laptop, Smartphone, LockKeyhole } from 'lucide-react'

const points = [
  {
    icon: Laptop,
    text: 'Web applications that simplify complex processes and give teams the tools they need.',
  },
  {
    icon: Smartphone,
    text: 'Mobile apps that make practical services easier to access, wherever users are.',
  },
  {
    icon: LockKeyhole,
    text: 'Connected systems and integrations that reduce manual work while keeping data secure.',
  },
]

export default function Industry() {
  return (
    <section id="industrybackgroud" className="bg-slate-50 border-y border-slate-200">
      <div className="container py-20 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <span className="text-sm font-medium badge-accent px-2 py-1 rounded-full">What we build</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">
            Web applications and mobile apps, built for the way your organisation works
          </h2>
          <p className="mt-3 text-slate-700 max-w-xl">
            We build web applications, mobile apps and integrations for organisations across a range of industries. Clear, scalable software designed around real workflows and the people who use it.
          </p>
          <ul className="mt-6 space-y-3 text-slate-700">
            {points.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-2">
                <Icon className="h-5 w-5" style={{ color: 'var(--color-accent)' }} />
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="industry-image-fade">
            <img
              src="/design-components.avif"
              alt="Design components for a digital product"
              className="w-90 h-90 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}