import { Link } from 'react-router-dom'
import Stats from '../components/Stats'
import Cta from '../components/Cta'
import { useReveal } from '../hooks/useReveal'
import '../styles/pages.css'
export default function About() {
  useReveal()
  const base = import.meta.env.BASE_URL
  return (
    <>
      <header className="pagehead"><div className="wrap"><span className="kicker">Über uns</span><h1>Ein Team. Alle Gewerke.</h1><p className="lead">Alles aus einer Hand: Wir koordinieren Ihr Projekt, damit Sie sich um nichts kümmern müssen.</p></div></header>

      <section className="section">
        <div className="wrap">
          <div className="split">
            <div className="split__media about__media reveal"><img className="about__img" src={`${base}uberuns.jpeg`} alt="Kaymak Bau Team bei der Arbeit" /></div>
            <div className="reveal">
              <span className="kicker">Wie wir arbeiten</span>
              <h2>Ihr fester Ansprechpartner</h2>
              <p className="lead">Reibungslose Abläufe statt Baustellen-Stress. Bei uns haben Sie genau einen festen Ansprechpartner, der den gesamten Bodenaufbau von A bis Z steuert. Durch unser eingespieltes Netzwerk greifen alle Gewerke nahtlos ineinander.</p>
              <ul className="checklist">
                <li>1 fester Ansprechpartner für das gesamte Projekt</li>
                <li>Perfekt koordiniert – ohne Abstimmungsprobleme</li>
                <li>Höchste Verlässlichkeit – von der Planung bis zur Übergabe</li>
              </ul>
              <Link to="/leistungen" className="btn btn--ghost">Unsere Leistungen</Link>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      <section className="section">
        <div className="wrap">
          <div className="head reveal"><span className="kicker">Wofür wir stehen</span><h2>Unsere Werte</h2></div>
          <div className="values">
            <div className="value reveal d1"><div className="value__ico">✓</div><h3>Transparenz</h3><p>Klare Kommunikation, ehrliche Kalkulation.</p></div>
            <div className="value reveal d2"><div className="value__ico">⚑</div><h3>Macher-Mentalität</h3><p>Sofortige Umsetzung, verlässliche Termine.</p></div>
            <div className="value reveal d3"><div className="value__ico">◆</div><h3>Qualität nach Norm</h3><p>Fachgerecht nach DIN – dokumentiert und geprüft.</p></div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  )
}
