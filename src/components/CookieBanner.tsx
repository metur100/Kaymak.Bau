import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { OPEN_CONSENT_EVENT, readConsent, saveConsent } from '../lib/tracking'
import './CookieBanner.css'

export default function CookieBanner() {
  const [open, setOpen] = useState(() => readConsent() === null)
  const [details, setDetails] = useState(false)
  const [statistics, setStatistics] = useState(() => readConsent()?.statistics ?? false)
  const [marketing, setMarketing] = useState(() => readConsent()?.marketing ?? false)

  useEffect(() => {
    const onOpen = () => {
      const c = readConsent()
      setStatistics(c?.statistics ?? false)
      setMarketing(c?.marketing ?? false)
      setDetails(true)
      setOpen(true)
    }
    window.addEventListener(OPEN_CONSENT_EVENT, onOpen)
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, onOpen)
  }, [])

  if (!open) return null

  const decide = (s: boolean, m: boolean) => {
    const hadGranted = readConsent()
    saveConsent(s, m)
    setOpen(false)
    setDetails(false)
    // Widerruf: bereits geladene Google-Skripte lassen sich nur per Reload entfernen
    if (hadGranted && (hadGranted.statistics || hadGranted.marketing) && !s && !m) window.location.reload()
  }

  return (
    <div className="cb" role="dialog" aria-modal="false" aria-labelledby="cb-title" aria-describedby="cb-text">
      <div className="cb__box">
        <h2 id="cb-title" className="cb__title">Datenschutz-Einstellungen</h2>
        <p id="cb-text" className="cb__text">
          Wir verwenden Cookies und ähnliche Technologien. Technisch notwendige sind immer aktiv. Mit Ihrer
          Einwilligung nutzen wir zusätzlich den Google Tag Manager und Google Ads, um den Erfolg unserer
          Werbeanzeigen zu messen (z.&nbsp;B. Anrufe, WhatsApp-Kontakte, Anfragen). Dabei können Daten an Google
          (auch in die USA) übermittelt werden. Ihre Einwilligung können Sie jederzeit über „Cookie-Einstellungen“
          im Footer widerrufen. Mehr in unserer <Link to="/datenschutz">Datenschutzerklärung</Link>.
        </p>

        {details && (
          <div className="cb__opts">
            <label className="cb__opt">
              <input type="checkbox" checked disabled />
              <span><strong>Notwendig</strong> – Speichert Ihre Cookie-Auswahl. Immer aktiv.</span>
            </label>
            <label className="cb__opt">
              <input type="checkbox" checked={statistics} onChange={e => setStatistics(e.target.checked)} />
              <span><strong>Statistik</strong> – Anonyme Auswertung der Websitenutzung (Google Analytics, sofern im Tag Manager aktiviert).</span>
            </label>
            <label className="cb__opt">
              <input type="checkbox" checked={marketing} onChange={e => setMarketing(e.target.checked)} />
              <span><strong>Marketing</strong> – Google Tag Manager &amp; Google Ads Conversion-Tracking / Remarketing.</span>
            </label>
          </div>
        )}

        <div className="cb__actions">
          <button type="button" className="cb__btn cb__btn--primary" onClick={() => decide(false, false)}>
            Nur notwendige
          </button>
          {details ? (
            <button type="button" className="cb__btn cb__btn--secondary" onClick={() => decide(statistics, marketing)}>
              Auswahl speichern
            </button>
          ) : (
            <button type="button" className="cb__btn cb__btn--secondary" onClick={() => setDetails(true)}>
              Einstellungen
            </button>
          )}
          <button type="button" className="cb__btn cb__btn--primary" onClick={() => decide(true, true)}>
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  )
}
