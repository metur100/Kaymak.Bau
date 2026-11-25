// Consent + conversion tracking helpers (Google Tag Manager / Consent Mode v2)

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
    kbLoadGoogleTag?: () => void
  }
}

export type Consent = { v: 1; statistics: boolean; marketing: boolean; ts: number }

const KEY = 'kb_consent'
export const OPEN_CONSENT_EVENT = 'kb:open-consent'

export function readConsent(): Consent | null {
  try {
    const c = JSON.parse(localStorage.getItem(KEY) || 'null')
    return c && c.v === 1 ? (c as Consent) : null
  } catch {
    return null
  }
}

// gtag() is defined inline in index.html (must push the `arguments` object for Consent Mode)
const gtag = (...args: unknown[]) => window.gtag?.(...args)

export function saveConsent(statistics: boolean, marketing: boolean) {
  const c: Consent = { v: 1, statistics, marketing, ts: Date.now() }
  try { localStorage.setItem(KEY, JSON.stringify(c)) } catch { /* ignore */ }

  gtag('consent', 'update', {
    ad_storage: marketing ? 'granted' : 'denied',
    ad_user_data: marketing ? 'granted' : 'denied',
    ad_personalization: marketing ? 'granted' : 'denied',
    analytics_storage: statistics ? 'granted' : 'denied',
  })

  if (statistics || marketing) window.kbLoadGoogleTag?.()
  track('consent_update', { consent_statistics: statistics, consent_marketing: marketing })
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))
}

/** Push an event to the dataLayer. Without consent GTM is not loaded, so nothing is sent. */
export function track(event: string, params: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })
}

let clickListenerInstalled = false

/** Global listener: tracks every click on tel: and WhatsApp links site-wide. */
export function installClickTracking() {
  if (clickListenerInstalled) return
  clickListenerInstalled = true
  document.addEventListener('click', e => {
    const a = (e.target as HTMLElement | null)?.closest?.('a') as HTMLAnchorElement | null
    if (!a) return
    const href = a.getAttribute('href') || ''
    const location = window.location.hash.replace(/^#/, '') || '/'
    if (href.startsWith('tel:')) {
      track('phone_click', { link_url: href, click_location: location })
    } else if (/^https?:\/\/(wa\.me|api\.whatsapp\.com|wa\.link)\//i.test(href)) {
      track('whatsapp_click', { link_url: href, click_location: location })
    }
  }, { capture: true })
}
