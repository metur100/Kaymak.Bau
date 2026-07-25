import { Link } from 'react-router-dom'
import { services } from '../data/services'
import Cta from '../components/Cta'
import { useReveal } from '../hooks/useReveal'
import '../styles/pages.css'
export default function Services() {
  useReveal()
  return (
    <>
      <header className="pagehead"><div className="wrap"><span className="kicker">Leistungen</span><h1>Alle Gewerke</h1><p className="lead">Ein Ansprechpartner – von der Abdichtung bis zum Finish. Jede Leistung mit eigener Detailseite.</p></div></header>
      <section className="section wrap">
        <div className="tiles">
          {services.map((s, i) => (
            <Link key={s.slug} to={`/leistungen/${s.slug}`} className={`tile ${s.focus ? 'tile--big' : ''} reveal d${(i%3)+1}`}>
              <img className="tile__img" src={s.image} alt={s.title} loading="lazy" />
              <div className="tile__body">{s.focus && <span className="badge">Fokus</span>}<h3>{s.title}</h3><p className="tile__short">{s.short}</p><span className="tile__more">Mehr <span className="arrow">→</span></span></div>
            </Link>
          ))}
        </div>
      </section>
      <Cta />
    </>
  )
}
