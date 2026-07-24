import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import BeforeAfter from '../components/BeforeAfter'
import CtaBand from '../components/CtaBand'
import { useReveal } from '../components/useReveal'
import '../styles/pages.css'

export default function Referenzen() {
  useReveal()
  return (
    <>
      <header className="pagehead">
        <div className="container">
          <span className="eyebrow pagehead__eyebrow">Referenzen</span>
          <h1>Projekte, die für sich sprechen</h1>
          <p className="lead">
            Ein Blick auf abgeschlossene Arbeiten – jedes Projekt mit eigener Detailseite,
            Leistungsumfang und Bildern.
          </p>
        </div>
      </header>

      <section className="section container">
        <div className="refgrid reveal">
          {projects.map((p) => (
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
                  <span>{p.year}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__head reveal">
            <span className="eyebrow">Vorher · Nachher</span>
            <h2>Sehen Sie den Unterschied</h2>
          </div>
          <div className="reveal">
            <BeforeAfter before={projects[1].before} after={projects[1].after} alt="Gewerbeboden" />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
