import { Link } from 'react-router-dom'
import Stats from '../components/Stats'
import Cta from '../components/Cta'
import { useReveal } from '../hooks/useReveal'
import '../styles/pages.css'
const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`
export default function About() {
  useReveal()
  return (
    <>
      <header className="pagehead"><div className="wrap"><span className="kicker">Über uns</span><h1>Ein Team. Alle Gewerke.</h1><p className="lead">Als Generalunternehmer läuft der Vertrag direkt über uns – Sie bekommen einen fertigen Boden.</p></div></header>

      <section className="section wrap">
        <div className="split">
          <div className="split__media reveal"><img src={img('photo-1581092160562-40aa08e78837')} alt="Kaymak Bau Baustelle" /></div>
          <div className="reveal">
            <span className="kicker">Unser Anspruch</span>
            <h2>Geprüfte Qualität</h2>
            <p className="lead">Zertifizierter Schlüter-BECOTEC Fachbetrieb – hocheffizient und rissfrei nach DIN.</p>
            <ul className="checklist">
              <li>Zertifizierte Fachkompetenz</li>
              <li>Deutschsprachiges Team</li>
              <li>Lösungen statt Probleme</li>
            </ul>
            <Link to="/leistungen" className="btn btn--ghost">Unsere Leistungen</Link>
          </div>
        </div>
      </section>

      <Stats />

      <section className="section wrap">
        <div className="head reveal"><span className="kicker">Wofür wir stehen</span><h2>Unsere Werte</h2></div>
        <div className="values">
          <div className="value reveal d1"><div className="value__ico">✓</div><h3>Transparenz</h3><p>Klare Kommunikation, ehrliche Kalkulation.</p></div>
          <div className="value reveal d2"><div className="value__ico">⚑</div><h3>Macher-Mentalität</h3><p>Sofortige Umsetzung, verlässliche Termine.</p></div>
          <div className="value reveal d3"><div className="value__ico">◆</div><h3>Qualität nach Norm</h3><p>Fachgerecht nach DIN – dokumentiert und geprüft.</p></div>
        </div>
      </section>
      <Cta />
    </>
  )
}
