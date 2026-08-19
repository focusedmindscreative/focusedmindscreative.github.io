import { Laptop, Smartphone, LockKeyhole, LayoutDashboard, FileText, BarChart3, CheckCircle2 } from 'lucide-react'

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

const dashboardRows = [
  { icon: LayoutDashboard, label: 'Project board' },
  { icon: FileText, label: 'Documents' },
  { icon: BarChart3, label: 'Reports' },
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
          <div
            className="industry-visual"
            role="img"
            aria-label="Stylised mockup of a web dashboard and companion mobile app built by Focused Minds Creative"
          >
            <div className="industry-browser">
              <div className="industry-browser__bar">
                <span className="industry-browser__dots" aria-hidden="true">
                  <i></i>
                  <i></i>
                  <i></i>
                </span>
                <span className="industry-browser__url">app.focusedmindscreative.tech</span>
              </div>
              <div className="industry-browser__body">
                <p className="industry-browser__headline">Team workspace,<br />all in one place.</p>
                <ul className="industry-browser__rows">
                  {dashboardRows.map(({ icon: Icon, label }) => (
                    <li key={label} className="industry-row">
                      <Icon className="industry-row__icon" />
                      <span className="industry-row__label">{label}</span>
                      <CheckCircle2 className="industry-row__check" />
                    </li>
                  ))}
                </ul>
                <div className="industry-browser__secure">
                  <LockKeyhole className="industry-browser__secure-icon" />
                  Secure &amp; connected
                </div>
              </div>
            </div>
            <div className="industry-phone">
              <div className="industry-phone__screen">
                <div className="industry-phone__top">
                  <span>FMC</span>
                  <span>Mobile</span>
                </div>
                <p className="industry-phone__headline">Work,<br />on the move.</p>
                <div className="industry-phone__chips">
                  <span>Documents</span>
                  <span>eSign</span>
                  <span>Biometrics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}