// Nothing is sent to Google, and the Google script is not even requested, until the
// visitor accepts. Rejecting (or making no choice) leaves analytics completely off.
const GA_MEASUREMENT_ID = 'G-KEDTMFHE3T'

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

function loadAnalytics() {
  if (document.querySelector('script[data-fmc-ga]')) return
  delete window[`ga-disable-${GA_MEASUREMENT_ID}`]
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID)
  const script = document.createElement('script')
  script.async = true
  script.dataset.fmcGa = ''
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)
}

export function applyConsent(value) {
  if (value === 'granted') {
    loadAnalytics()
  } else {
    // If analytics was already started this visit, switch it off again.
    window[`ga-disable-${GA_MEASUREMENT_ID}`] = true
  }
}
