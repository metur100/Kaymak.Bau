import RequestForm from '../components/RequestForm'
import { useReveal } from '../hooks/useReveal'
import '../styles/pages.css'
export default function Contact() {
  useReveal()
  return (
    <>
      <header className="pagehead"><div className="wrap"><span className="kicker">Kontakt</span><h1>Angebot anfordern</h1><p className="lead">In drei kurzen Schritten – oder rufen Sie uns direkt an.</p></div></header>
      <section className="section">
        <div className="wrap">
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="reveal">
              <span className="kicker">So erreichen Sie uns</span>
              <h2>Kaymak Bau</h2>
              <ul className="checklist" style={{ marginTop: '1.4rem' }}>
                <li><a href="https://maps.google.com/?q=Werner-Hilpert-Stra%C3%9Fe+12,+63128+Dietzenbach" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>Werner-Hilpert-Straße 12, 63128 Dietzenbach</a></li>
                <li><a href="tel:+491632051432" style={{ textDecoration: 'underline' }}>0163 2051432</a></li>
                <li><a href="mailto:info@kaymakbodenverlegung.de" style={{ textDecoration: 'underline' }}>info@kaymakbodenverlegung.de</a></li>
                <li><a href="https://www.instagram.com/kaymakbau/" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>instagram.com/kaymakbau</a></li>
                <li>Mo–Fr 08:00–19:00 Uhr · Sa 09:00–16:00 Uhr · So geschlossen</li>
              </ul>
              <p className="lead" style={{ marginTop: '1.2rem' }}>Zertifizierter Schlüter-BECOTEC Fachbetrieb. Deutschsprachiges Team.</p>
            </div>
            <div className="reveal"><RequestForm /></div>
          </div>
        </div>
      </section>
    </>
  )
}
