import RequestForm from '../components/RequestForm'
import { useReveal } from '../components/useReveal'
import '../styles/pages.css'

export default function Kontakt() {
  useReveal()
  return (
    <>
      <header className="pagehead">
        <div className="container">
          <span className="eyebrow pagehead__eyebrow">Kontakt</span>
          <h1>Kostenloses Angebot anfordern</h1>
          <p className="lead">
            In drei kurzen Schritten zu Ihrem unverbindlichen Angebot – oder rufen Sie uns direkt an.
          </p>
        </div>
      </header>

      <section className="section container">
        <div className="split" style={{ alignItems: 'start' }}>
          <div className="split__body reveal">
            <span className="eyebrow">So erreichen Sie uns</span>
            <h2>Kaymak Bau</h2>
            <ul className="checklist" style={{ marginTop: '1.5rem' }}>
              <li>Musterstraße 12, 00000 Musterstadt</li>
              <li><a href="tel:+490000000000" style={{ textDecoration: 'underline' }}>+49 (0) 000 000 000</a></li>
              <li><a href="mailto:info@kaymak-bau.de" style={{ textDecoration: 'underline' }}>info@kaymak-bau.de</a></li>
              <li>Mo–Fr 08:00–17:00 Uhr</li>
            </ul>
            <p className="lead" style={{ marginTop: '1.5rem' }}>
              Zertifizierter Fachbetrieb für Schlüter-BECOTEC. Deutschsprachiges Team für
              reibungslose Absprachen auf der Baustelle.
            </p>
          </div>
          <div className="reveal">
            <RequestForm />
          </div>
        </div>
      </section>
    </>
  )
}
