import { Link, useParams } from 'react-router-dom'
import { getProject, projects } from '../data/projects'
import BeforeAfter from '../components/BeforeAfter'
import Cta from '../components/Cta'
import NotFound from './NotFound'
import { useReveal } from '../hooks/useReveal'
import '../styles/pages.css'
export default function ReferenceDetail() {
  const { slug } = useParams()
  const p = getProject(slug || '')
  useReveal(slug)
  if (!p) return <NotFound />
  const others = projects.filter(x => x.slug !== p.slug).slice(0, 2)
  return (
    <>
      <header className="pagehead"><div className="wrap">
        <div className="pills" style={{ marginBottom: '1.2rem' }}><Link to="/referenzen" className="pill">← Alle Referenzen</Link></div>
        <span className="kicker">{p.category}</span><h1>{p.title}</h1>
      </div></header>

      <section className="section wrap"><img className="dhero__cover reveal" src={p.cover} alt={p.title} /></section>

      <section className="section wrap" style={{ paddingTop: 0 }}>
        <div className="dlayout">
          <div className="reveal">
            <h2>Projekt</h2>
            <p className="lead" style={{ marginTop: '1rem' }}>{p.description}</p>
            <h3 style={{ marginTop: '2.2rem' }}>Ausgeführte Arbeiten</h3>
            <ul className="checklist">{p.scope.map(x => <li key={x}>{x}</li>)}</ul>
            <h3 style={{ marginTop: '2.2rem', marginBottom: '1rem' }}>Impressionen</h3>
            <div className="gallery">{p.gallery.map((g, i) => <img key={i} src={g} alt={`${p.title} Bild ${i + 1}`} loading="lazy" />)}</div>
          </div>
          <aside className="aside reveal">
            <h4>Projektdaten</h4>
            <div className="facts">
              <div className="fact"><span>Kategorie</span><span>{p.category}</span></div>
              <div className="fact"><span>Ort</span><span>{p.location}</span></div>
              <div className="fact"><span>Fläche</span><span>{p.area}</span></div>
              <div className="fact"><span>Jahr</span><span>{p.year}</span></div>
            </div>
            <Link to="/kontakt" className="btn btn--accent" style={{ width: '100%' }}>Ähnliches anfragen</Link>
          </aside>
        </div>
      </section>

      <section className="section section--panel"><div className="wrap">
        <div className="head reveal"><span className="kicker">Vorher · Nachher</span><h2>Im Vergleich</h2></div>
        <div className="reveal"><BeforeAfter before={p.before} after={p.after} /></div>
      </div></section>

      <section className="section wrap">
        <h4 style={{ marginBottom: '1.2rem', color: 'var(--muted)', letterSpacing: '.14em', textTransform: 'uppercase', fontSize: '.78rem', fontFamily: 'var(--font-body)' }}>Weitere Projekte</h4>
        <div className="refs">
          {others.map(o => (
            <Link key={o.slug} to={`/referenzen/${o.slug}`} className="ref">
              <div className="ref__media"><span className="badge ref__cat">{o.category}</span><img src={o.cover} alt={o.title} loading="lazy" /></div>
              <div className="ref__body"><h3>{o.title}</h3><div className="ref__meta"><span>{o.location}</span><span>{o.area}</span></div></div>
            </Link>
          ))}
        </div>
      </section>
      <Cta />
    </>
  )
}
