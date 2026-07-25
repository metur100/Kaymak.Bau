import RequestForm from '../components/RequestForm'
import { useReveal } from '../hooks/useReveal'
import '../styles/pages.css'
export default function Contact() {
  useReveal()
  return (
    <>
      <header className="pagehead"><div className="wrap"><span className="kicker">Kontakt</span><h1>Angebot anfordern</h1><p className="lead">In drei kurzen Schritten – oder rufen Sie uns direkt an.</p></div></header>
      <section className="section wrap">
        <div className="split" style={{ alignItems: 'start' }}>
          <div className="reveal">
            <span className="kicker">So erreichen Sie uns</span>
            <h2>Kaymak Bau</h2>
            <ul className="checklist" style={{ marginTop: '1.4rem' }}>
              <li>Musterstraße 12, 00000 Musterstadt</li>
              <li><a href="tel:+490000000000" style={{ textDecoration: 'underline' }}>+49 (0) 000 000 000</a></li>
              <li><a href="mailto:info@kaymak-bau.de" style={{ textDecoration: 'underline' }}>info@kaymak-bau.de</a></li>
              <li>Mo–Fr 08:00–17:00 Uhr</li>
            </ul>
            <p className="lead" style={{ marginTop: '1.2rem' }}>Zertifizierter Schlüter-BECOTEC Fachbetrieb. Deutschsprachiges Team.</p>
          </div>
          <div className="reveal"><RequestForm /></div>
        </div>
      </section>
    </>
  )
}
