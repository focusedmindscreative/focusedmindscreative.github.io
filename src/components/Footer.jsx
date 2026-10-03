import { OPEN_COOKIE_SETTINGS_EVENT } from './CookieBanner.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 bg-white">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
        <p>&copy; 2025 Focused Minds Creative Ltd. All rights reserved.</p>
        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
          className="underline hover:text-slate-700"
        >
          Cookie settings
        </button>
      </div>
    </footer>
  )
}
