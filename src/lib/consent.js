// Google Analytics 4 measurement ID (format G-XXXXXXXXXX). Set VITE_GA_MEASUREMENT_ID at build time.
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || ''

const STORAGE_KEY = 'fmc-cookie-consent'

export function getStoredConsent() {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return value === 'granted' || value === 'denied' ? value : null
  } catch {
    return null
  }
}

export function storeConsent(value) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // Storage unavailable; the choice just won't persist.
  }
}

export function clearStoredConsent() {
  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }
}

let scriptLoaded = false

function gtag() {
  window.dataLayer.push(arguments)
}

// Called once per page load. Analytics storage defaults to denied.
export function initAnalytics() {
  if (!GA_MEASUREMENT_ID || scriptLoaded) return
  window.dataLayer = window.dataLayer || []
  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true })
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`
  document.head.appendChild(script)
  scriptLoaded = true
}

export function applyConsent(value) {
  if (!GA_MEASUREMENT_ID) return
  initAnalytics()
  gtag('consent', 'update', { analytics_storage: value })
}
