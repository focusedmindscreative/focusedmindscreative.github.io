import { useEffect, useRef, useState } from 'react'
import { applyConsent, clearStoredConsent, getStoredConsent, storeConsent } from '../lib/consent.js'

export const OPEN_COOKIE_SETTINGS_EVENT = 'fmc:open-cookie-settings'

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => getStoredConsent() === null)
  const dialogRef = useRef(null)

  useEffect(() => {
    const stored = getStoredConsent()
    if (stored) applyConsent(stored)
    const reopen = () => {
      clearStoredConsent()
      setVisible(true)
    }
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen)
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen)
  }, [])

  // Block page scroll and move focus into the dialog while a choice is pending.
  useEffect(() => {
    if (!visible) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()
    return () => {
      document.body.style.overflow = previous
    }
  }, [visible])

  function choose(value) {
    storeConsent(value)
    applyConsent(value)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end bg-slate-900/60 backdrop-blur-sm">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Cookie consent"
        tabIndex={-1}
        className="w-full border-t border-slate-200 bg-white p-4 shadow-lg outline-none"
      >
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-600">
            We use cookies from Google Analytics to understand how visitors use this site. They are
            only set if you accept. You can change your mind at any time from the footer.
          </p>
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() => choose('denied')}
              className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Reject
            </button>
            <button
              type="button"
              onClick={() => choose('granted')}
              className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-600"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
