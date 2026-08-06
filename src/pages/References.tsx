import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import Cta from '../components/Cta'
import { useReveal } from '../hooks/useReveal'
import '../styles/pages.css'
export default function References() {
  useReveal()
  return (
    <>
      <header className="pagehead"><div className="wrap"><span className="kicker">Referenzen</span><h1>Unsere Projekte</h1><p className="lead">Aktuelle und abgeschlossene Baustellen mit Details, Impressionen und Projektlink.</p></div></header>
      <section className="section">
        <div className="wrap">
          <div className="refs">
            {projects.map((p, i) => (
              <Link key={p.slug} to={`/referenzen/${p.slug}`} className={`ref reveal d${(i%3)+1}`}>
                <div className="ref__media"><span className="badge ref__cat">{p.category}</span><img src={p.cover} alt={p.title} loading="lazy" /></div>
                <div className="ref__body"><h3>{p.title}</h3><div className="ref__meta"><span>{p.location}</span><span>{p.area}</span><span>{p.year}</span></div></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  )
}
