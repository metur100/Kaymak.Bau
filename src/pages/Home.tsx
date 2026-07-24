import { Link } from 'react-router-dom'
import HeroVideo from '../components/HeroVideo'
import Stats from '../components/Stats'
import LayerModel from '../components/LayerModel'
import BeforeAfter from '../components/BeforeAfter'
import CtaBand from '../components/CtaBand'
import { services } from '../data/services'
import { projects } from '../data/projects'
import { useReveal } from '../components/useReveal'
import '../styles/pages.css'

export default function Home() {
  useReveal()
  const focus = services.filter((s) => s.focus)
  const extra = services.filter((s) => !s.focus)

  return (
    <>
      <HeroVideo
        eyebrow="Bodenaufbau. Heizung. Finish."
        title={<><span>Starke Böden.</span><span><em>Klare Linien.</em></span></>}
        primary={{ label: 'Kostenloses Angebot', to: '/kontakt' }}
      />

      <Stats />

      {/* Leistungen / Kacheln */}
      <section className="section container">
        <div className="section__head reveal">
          <span className="eyebrow">Leistungen</span>
          <h2>Alles für den Boden. Aus einer Hand.</h2>
        </div>
        <div className="tiles reveal">
          {focus.map((s) => (
            <Link key={s.slug} to={`/leistungen/${s.slug}`} className="tile tile--focus">
              <img className="tile__img" src={s.image} alt={s.title} loading="lazy" />
              <div className="tile__body">
                <span className="badge tile__badge">Fokus-Gewerk</span>
                <h3>{s.title}</h3>
                <p className="tile__short">{s.short}</p>
                <span className="tile__link">Mehr erfahren <span className="btn__arrow">→</span></span>
              </div>
            </Link>
          ))}
          {extra.map((s) => (
            <Link key={s.slug} to={`/leistungen/${s.slug}`} className="tile">
              <img className="tile__img" src={s.image} alt={s.title} loading="lazy" />
              <div className="tile__body">
                <h3>{s.title}</h3>
                <p className="tile__short">{s.short}</p>
                <span className="tile__link">Mehr erfahren <span className="btn__arrow">→</span></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3D-Schichtmodell */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__head reveal">
            <span className="eyebrow">Der exakte Schichtaufbau</span>
            <h2>Technik, die langfristig trägt</h2>
          </div>
          <div className="reveal">
            <LayerModel />
          </div>
        </div>
      </section>

      {/* Vorher / Nachher */}
      <section className="section container">
        <div className="section__head reveal">
          <span className="eyebrow">Vorher · Nachher</span>
          <h2>Vorher roh. Nachher bereit.</h2>
        </div>
        <div className="reveal">
          <BeforeAfter before={projects[0].before} after={projects[0].after} alt={projects[0].title} />
        </div>
      </section>

      {/* Werte / Trust */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__head reveal">
            <span className="eyebrow">Warum Kaymak Bau</span>
            <h2>Wenig Worte. Saubere Ausführung.</h2>
          </div>
          <div className="values reveal">
            <div className="value">
              <div className="value__ico">✓</div>
              <h3>Geprüfte Qualität</h3>
              <p>Zertifizierte Systeme, normgerechte Ausführung, saubere Details.</p>
            </div>
            <div className="value">
              <div className="value__ico">↔</div>
              <h3>Klare Kommunikation</h3>
              <p>Deutschsprachige Ansprechpartner und klare Abstimmung auf der Baustelle.</p>
            </div>
            <div className="value">
              <div className="value__ico">⚑</div>
              <h3>Macher-Mentalität</h3>
              <p>Schnelle Entscheidungen, saubere Abläufe und sichtbarer Fortschritt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Referenzen Teaser */}
      <section className="section container">
        <div className="section__head reveal">
          <span className="eyebrow">Referenzen</span>
          <h2>Echte Baustellen. Echte Ergebnisse.</h2>
        </div>
        <div className="refgrid reveal">
          {projects.slice(0, 2).map((p) => (
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
        <div style={{ marginTop: '2rem' }} className="reveal">
          <Link to="/referenzen" className="btn btn--ghost">Alle Referenzen ansehen</Link>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
