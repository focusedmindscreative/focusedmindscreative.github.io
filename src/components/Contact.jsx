export default function Contact() {
  return (
    <section id="contact" className="container py-20">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <span className="text-sm font-medium badge-accent px-2 py-1 rounded-full">Contact</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">Tell us what you&rsquo;d like to build</h2>
          <p className="mt-3 text-slate-700 max-w-xl">
            Share a few details and we&rsquo;ll come back with a simple plan, an indicative budget and any key considerations.
          </p>
          <div className="self-start bg-white border border-slate-200 rounded-2xl mt-10 p-6 flex flex-col items-start gap-4">
            <p className="text-slate-700">To get started, just drop us an email at:</p>
            <a href="mailto:info@focusedmindscreative.tech" className="px-5 py-3 rounded-2xl bg-[var(--color-accent)] text-white hover:opacity-90">
              info@focusedmindscreative.tech
            </a>
            <p className="text-xs text-slate-500">
              We&rsquo;ll reply within 2 business days. Your details are kept confidential.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/coffee-meeting.avif"
            alt="Coffee-To-Discuss"
            className="object-contain mt-10 self-center rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}