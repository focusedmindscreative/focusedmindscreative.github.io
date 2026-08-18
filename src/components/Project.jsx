const platforms = ['iOS', 'Android']

export default function Project() {
  return (
    <section id="project" className="bg-slate-50 border-y border-slate-200">
      <div className="container py-20">
        <div className="mb-10">
          <span className="text-sm font-medium badge-accent px-2 py-1 rounded-full">Selected work</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">Digital work that delivers in the real world</h2>
          <p className="mt-3 text-slate-700 max-w-2xl">
            From high-performing websites to secure mobile and legal-tech products, here are a few of the practical solutions we&rsquo;ve built.
          </p>
        </div>

        <article className="portfolio-feature bg-white border border-slate-200 rounded-2xl p-6">
          <div className="portfolio-aftermath-preview" role="img" aria-label="Blurred preview of the Aftermath Navigator app">
            <div className="portfolio-phone-frame">
              <img src="/aftermath-navigator-blurred.png" alt="" />
            </div>
          </div>
          <div className="portfolio-feature-content">
            <div className="portfolio-feature-header">
              <span className="text-sm font-medium badge-accent px-2 py-1 rounded-full">Featured mobile app &mdash; coming soon</span>
              <div className="portfolio-platforms" aria-label="Platforms">
                {platforms.map((platform) => (
                  <span key={platform} className="portfolio-platform-pill">{platform}</span>
                ))}
              </div>
            </div>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900">Aftermath Navigator</h3>
            <p className="mt-3 text-slate-700">A trauma-informed mobile app for people affected by a road traffic collision.</p>
            <ul className="mt-5 text-sm text-slate-700 space-y-2">
              <li>&bull; Provides immediate calming support through guided breathing and grounding exercises.</li>
              <li>&bull; Offers clear trauma-informed guides on common reactions, next steps and practical support.</li>
              <li>&bull; Connects users to crisis support, emergency call and text options, and direct contact with Aftermath Support.</li>
            </ul>
            <a
              href="https://aftermathsupport.org.uk/2026/06/29/aftermath-navigator-coming-soon/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-5 py-3 rounded-2xl bg-[var(--color-accent)] text-white hover:opacity-90"
            >
              Read the announcement
            </a>
          </div>
        </article>

        <div className="portfolio-support-grid mt-6">
          <article className="bg-white border border-slate-200 rounded-2xl p-5">
            <div className="portfolio-image-frame">
              <img src="/bailey-and-cronin.png" alt="Bailey and Cronin website homepage" className="portfolio-visual" />
            </div>
            <div className="portfolio-card-header">
              <span className="inline-block text-sm font-medium badge-accent px-2 py-1 rounded-full">Website</span>
              <a href="#testimonial-bailey-cronin" className="text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
                Read their testimonial
              </a>
            </div>
            <h3 className="mt-3 font-semibold text-slate-900">Bailey &amp; Cronin Chartered Surveyors</h3>
            <p className="mt-2 text-sm text-slate-700">
              A polished, professional website that gives prospective clients a clear way to learn more and get in touch.
            </p>
            <ul className="mt-4 text-sm text-slate-700 space-y-1">
              <li>&bull; Bespoke website build</li>
              <li>&bull; Professional online presence</li>
              <li>&bull; Integrated contact form</li>
            </ul>
            <div className="portfolio-card-footer">
              <a
                href="https://baileyandcronin.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 text-sm font-medium"
                style={{ color: 'var(--color-accent)' }}
              >
                Visit website &rarr;
              </a>
            </div>
          </article>

          <article className="bg-white border border-slate-200 rounded-2xl p-5">
            <div className="portfolio-image-frame portfolio-image-frame--white">
              <img src="/hydrangea-legal-tools-centred.png" alt="Hydrangea Legal Tools logo" className="portfolio-visual" />
            </div>
            <span className="inline-block mt-5 text-sm font-medium badge-accent px-2 py-1 rounded-full">Legal tech &middot; Coming soon</span>
            <h3 className="mt-3 font-semibold text-slate-900">Hydrangea Legal</h3>
            <p className="mt-2 text-sm text-slate-700">
              A legal CMS and toolkit built to save legal teams time and money through practical innovation.
            </p>
            <ul className="mt-4 text-sm text-slate-700 space-y-1">
              <li>&bull; Accurate interest calculations across historical and current rates</li>
              <li>&bull; Clear management of complex debts, damages, invoices and payments</li>
              <li>&bull; MFA, organisation access and verified branded PDF reports</li>
            </ul>
            <div className="portfolio-card-footer">
              <span className="inline-block mt-5 text-sm font-medium text-slate-500">Website coming soon</span>
            </div>
          </article>

          <article className="bg-white border border-slate-200 rounded-2xl p-5">
            <div className="portfolio-image-frame">
              <div
                className="engager-app-visual"
                role="img"
                aria-label="Stylised Engager.app mobile app visual highlighting secure access, documents and e-signing"
              >
                <div className="engager-app-visual__top">
                  <span>Engager.app</span>
                  <span>Mobile</span>
                </div>
                <p className="engager-app-visual__headline">
                  Client work,
                  <br />on the move.
                </p>
                <div className="engager-app-visual__features">
                  <span>Secure access</span>
                  <span>Documents</span>
                  <span>eSign</span>
                </div>
              </div>
            </div>
            <div className="portfolio-card-header">
              <span className="inline-block text-sm font-medium badge-accent px-2 py-1 rounded-full">Mobile app</span>
              <div className="portfolio-platforms" aria-label="Platforms">
                {platforms.map((platform) => (
                  <span key={platform} className="portfolio-platform-pill">{platform}</span>
                ))}
              </div>
            </div>
            <h3 className="mt-3 font-semibold text-slate-900">Engager.app Mobile App</h3>
            <p className="mt-2 text-sm text-slate-700">
              A bespoke, fully integrated app that brings Engager&rsquo;s web-platform functionality to mobile.
            </p>
            <ul className="mt-4 text-sm text-slate-700 space-y-1">
              <li>&bull; Secure traditional and biometric authentication</li>
              <li>&bull; View, download and sign documents</li>
              <li>&bull; Available for iOS and Android</li>
            </ul>
            <div className="portfolio-card-footer">
              <span className="inline-block mt-5 text-sm font-medium text-slate-500">Bespoke integrated solution</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}