import { Link } from 'react-router-dom'
import Stats from '../components/Stats'
import CtaBand from '../components/CtaBand'
import { useReveal } from '../components/useReveal'
import '../styles/pages.css'

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`

export default function UeberUns() {
  useReveal()
  return (
    <>
      <header className="pagehead">
        <div className="container">
          <span className="eyebrow pagehead__eyebrow">Über uns</span>
          <h1>Ein Team. Alle Gewerke. Ein Ansprechpartner.</h1>
          <p className="lead">
            Kaymak Bau tritt als Generalunternehmer auf: Der Vertrag läuft direkt über uns,
            die Abwicklung steuern wir im Hintergrund – Sie bekommen einen fertigen Boden.
          </p>
        </div>
      </header>

      <section className="section container">
        <div className="split reveal">
          <div className="split__media">
            <img src={img('photo-1581092160562-40aa08e78837')} alt="Kaymak Bau auf der Baustelle" />
          </div>
          <div className="split__body">
            <span className="eyebrow">Unser Anspruch</span>
            <h2>Geprüfte Qualität für Ihren Boden</h2>
            <p className="lead">
              Als zertifizierter Fachbetrieb für Schlüter-BECOTEC verlegen wir Abdichtung,
              Tacker- und Noppensysteme hocheffizient und rissfrei – nach DIN-Normen.
            </p>
            <ul className="checklist">
              <li>Zertifizierte Fachkompetenz im Bodenaufbau</li>
              <li>Durchgehend deutschsprachiges Team</li>
              <li>Lösungsorientiert – wir bringen Lösungen, keine Probleme</li>
            </ul>
            <Link to="/leistungen" className="btn btn--ghost">Unsere Leistungen</Link>
          </div>
        </div>
      </section>

      <Stats />

      <section className="section container">
        <div className="section__head reveal">
          <span className="eyebrow">Wofür wir stehen</span>
          <h2>Unsere Werte</h2>
        </div>
        <div className="values reveal">
          <div className="value">
            <div className="value__ico">✓</div>
            <h3>Transparenz</h3>
            <p>Klare Kommunikation und ehrliche Kalkulation – von der Anfrage bis zur Übergabe.</p>
          </div>
          <div className="value">
            <div className="value__ico">⚑</div>
            <h3>Macher-Mentalität</h3>
            <p>Sofortige Umsetzung, pragmatische Lösungen, verlässliche Termine.</p>
          </div>
          <div className="value">
            <div className="value__ico">◆</div>
            <h3>Qualität nach Norm</h3>
            <p>Fachgerechte Ausführung nach DIN – dokumentiert und geprüft.</p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
