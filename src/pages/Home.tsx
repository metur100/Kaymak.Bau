import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Marquee from '../components/Marquee'
import LayerModel from '../components/LayerModel'
import BeforeAfter from '../components/BeforeAfter'
import Cta from '../components/Cta'
import { services } from '../data/services'
import { projects } from '../data/projects'
import { useReveal } from '../hooks/useReveal'
import '../styles/pages.css'

export default function Home() {
  useReveal()

  return (
    <>
      <Hero />
      <Stats />
      <Marquee />

      <section className="section wrap">
        <div className="head reveal">
          <span className="kicker">Leistungen</span>
          <h2>Alles rund um den Boden</h2>
          <p className="lead">Jedes Gewerk mit eigener Seite – aus einer Hand.</p>
        </div>
        <div className="tiles">
          {services.map((s, i) => (
            <Link key={s.slug} to={`/leistungen/${s.slug}`} className={`tile reveal reveal-zoga d${(i % 3) + 1}`}>
              <img className="tile__img" src={s.image} alt={s.title} loading="lazy" />
              <div className="tile__body">
                {s.focus && <span className="badge">Fokus</span>}
                <h3>{s.title}</h3>
                <p className="tile__short">{s.short}</p>
                <span className="tile__more">Mehr <span className="arrow">→</span></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section--panel">
        <div className="wrap">
          <div className="head reveal">
            <span className="kicker">Der exakte Schichtaufbau</span>
            <h2>So entsteht ein Boden, der hält</h2>
            <p className="lead">Jede Lage hat eine klare Funktion für Haltbarkeit, Komfort und Effizienz.</p>
          </div>
          <div className="reveal reveal-float"><LayerModel /></div>
        </div>
      </section>

      <section className="section wrap">
        <div className="head reveal">
          <span className="kicker">Vorher · Nachher</span>
          <h2>Sehen Sie den Unterschied</h2>
        </div>
        <div className="reveal"><BeforeAfter before="/1.jpeg" after="/2.jpeg" /></div>
      </section>

      <section className="section section--panel">
        <div className="wrap">
          <div className="head reveal">
            <span className="kicker">Warum Kaymak Bau</span>
            <h2>Vertrauen mit Substanz</h2>
            <p className="lead">Verlässliche Abläufe, saubere Ausführung und klare Ansprechpartner für Ihr Projekt.</p>
          </div>
          <div className="values">
            <div className="value reveal reveal-float d1"><div className="value__ico">✓</div><h3>Geprüfte Qualität</h3><p>Zertifizierter Schlüter-BECOTEC Fachbetrieb. Rissfrei nach DIN.</p></div>
            <div className="value reveal reveal-float d2"><div className="value__ico">↔</div><h3>Klare Kommunikation</h3><p>Deutschsprachiges Team von der Anfrage bis zur Übergabe.</p></div>
            <div className="value reveal reveal-float d3"><div className="value__ico">⚑</div><h3>Macher-Mentalität</h3><p>Wir bringen Lösungen, keine Probleme.</p></div>
          </div>
        </div>
      </section>

      <section className="section wrap">
        <div className="head reveal">
          <span className="kicker">Referenzen</span>
          <h2>Ausgewählte Projekte</h2>
        </div>
        <div className="refs">
          {projects.slice(0, 2).map((p, i) => (
            <Link key={p.slug} to={`/referenzen/${p.slug}`} className={`ref reveal reveal-ref-arc d${i+1}`}>
              <div className="ref__media"><span className="badge ref__cat">{p.category}</span><img src={p.cover} alt={p.title} loading="lazy" /></div>
              <div className="ref__body"><h3>{p.title}</h3><div className="ref__meta"><span>{p.location}</span><span>{p.area}</span><span>{p.year}</span></div></div>
            </Link>
          ))}
        </div>
        <div className="reveal" style={{ marginTop: '2rem' }}><Link to="/referenzen" className="btn btn--ghost">Alle Referenzen</Link></div>
      </section>

      <Cta />
    </>
  )
}
