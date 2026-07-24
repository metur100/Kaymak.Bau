import { Link } from 'react-router-dom'
import { services } from '../data/services'
import CtaBand from '../components/CtaBand'
import { useReveal } from '../components/useReveal'
import '../styles/pages.css'

export default function Leistungen() {
  useReveal()
  return (
    <>
      <header className="pagehead">
        <div className="container">
          <span className="eyebrow pagehead__eyebrow">Leistungen</span>
          <h1>Alle Gewerke rund um den Fußboden</h1>
          <p className="lead">
            Als Generalunternehmer steuern wir jedes Gewerk – Sie haben einen Ansprechpartner
            von der Abdichtung bis zum Finish. Jede Leistung hat ihre eigene Detailseite.
          </p>
        </div>
      </header>

      <section className="section container">
        <div className="tiles reveal">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/leistungen/${s.slug}`}
              className="tile tile--uniform"
            >
              <img className="tile__img" src={s.image} alt={s.title} loading="lazy" />
              <div className="tile__body">
                {s.focus && <span className="badge tile__badge">Fokus-Gewerk</span>}
                <h3>{s.title}</h3>
                <p className="tile__short">{s.short}</p>
                <span className="tile__link">Mehr erfahren <span className="btn__arrow">→</span></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
