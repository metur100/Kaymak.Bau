import { Link, useParams } from 'react-router-dom'
import { getProject, projects } from '../data/projects'
import BeforeAfter from '../components/BeforeAfter'
import CtaBand from '../components/CtaBand'
import NotFound from './NotFound'
import { useReveal } from '../components/useReveal'
import '../styles/pages.css'

export default function ReferenzDetail() {
  const { slug } = useParams()
  const project = getProject(slug || '')
  useReveal(slug)

  if (!project) return <NotFound />

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2)

  return (
    <>
      <header className="pagehead">
        <div className="container">
          <div className="pillrow" style={{ marginBottom: '1.4rem' }}>
            <Link to="/referenzen" className="pill">← Alle Referenzen</Link>
          </div>
          <span className="eyebrow pagehead__eyebrow">{project.category}</span>
          <h1>{project.title}</h1>
        </div>
      </header>

      <section className="section container">
        <img className="detail__cover reveal" src={project.cover} alt={project.title} />
      </section>

      <section className="section--tight container">
        <div className="detail__layout">
          <div className="reveal">
            <h2>Projektbeschreibung</h2>
            <p className="lead" style={{ marginTop: '1rem' }}>{project.description}</p>

            <h3 style={{ marginTop: '2.5rem' }}>Ausgeführte Arbeiten</h3>
            <ul className="checklist">
              {project.scope.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>

            <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>Impressionen</h3>
            <div className="gallery">
              {project.gallery.map((g, i) => (
                <img key={i} src={g} alt={`${project.title} – Bild ${i + 1}`} loading="lazy" />
              ))}
            </div>
          </div>

          <aside className="detail__aside reveal">
            <h4>Projektdaten</h4>
            <div className="detail__facts">
              <div className="detail__fact"><span>Kategorie</span><span>{project.category}</span></div>
              <div className="detail__fact"><span>Ort</span><span>{project.location}</span></div>
              <div className="detail__fact"><span>Fläche</span><span>{project.area}</span></div>
              <div className="detail__fact"><span>Jahr</span><span>{project.year}</span></div>
            </div>
            <Link to="/kontakt" className="btn btn--gold" style={{ width: '100%', justifyContent: 'center' }}>
              Ähnliches Projekt anfragen
            </Link>
          </aside>
        </div>
      </section>

      <section className="section--tight container">
        <div className="section__head reveal">
          <span className="eyebrow">Vorher · Nachher</span>
          <h2>Das Ergebnis im Vergleich</h2>
        </div>
        <div className="reveal">
          <BeforeAfter before={project.before} after={project.after} alt={project.title} />
        </div>
      </section>

      <section className="section container">
        <h4 style={{ marginBottom: '1.4rem', color: 'var(--muted)', letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: '0.78rem', fontFamily: 'var(--font-body)' }}>
          Weitere Projekte
        </h4>
        <div className="refgrid">
          {others.map((p) => (
            <Link key={p.slug} to={`/referenzen/${p.slug}`} className="refcard">
              <div className="refcard__media">
                <span className="badge refcard__cat">{p.category}</span>
                <img src={p.cover} alt={p.title} loading="lazy" />
              </div>
              <div className="refcard__body">
                <h3>{p.title}</h3>
                <div className="refcard__meta">
                  <span>{p.location}</span>
                  <span>{p.area}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
