import { Link, useParams } from 'react-router-dom'
import { getService, services } from '../data/services'
import RequestForm from '../components/RequestForm'
import NotFound from './NotFound'
import { useReveal } from '../components/useReveal'
import '../styles/pages.css'

export default function LeistungDetail() {
  const { slug } = useParams()
  const service = getService(slug || '')
  useReveal(slug)

  if (!service) return <NotFound />

  return (
    <>
      <header className="pagehead">
        <div className="container">
          <div className="pillrow" style={{ marginBottom: '1.4rem' }}>
            <Link to="/leistungen" className="pill">← Alle Leistungen</Link>
          </div>
          <span className="eyebrow pagehead__eyebrow">Leistung</span>
          <h1>{service.title}</h1>
          <p className="lead">{service.tagline}</p>
        </div>
      </header>

      <section className="section container">
        <img className="detail__cover reveal" src={service.image} alt={service.title} />
      </section>

      <section className="section--tight container">
        <div className="detail__layout">
          <div className="reveal">
            <h2>Über diese Leistung</h2>
            <p className="lead" style={{ marginTop: '1rem' }}>{service.intro}</p>

            <h3 style={{ marginTop: '2.5rem' }}>Leistungsumfang</h3>
            <ul className="checklist">
              {service.scope.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <aside className="detail__aside reveal">
            <h4>Ihre Vorteile</h4>
            <div className="detail__facts">
              {service.benefits.map((b) => (
                <div key={b.title} className="detail__fact">
                  <span>{b.title}</span>
                  <span style={{ fontWeight: 400, textAlign: 'right', maxWidth: '60%' }}>{b.text}</span>
                </div>
              ))}
            </div>
            <Link to="/kontakt" className="btn btn--gold" style={{ width: '100%', justifyContent: 'center' }}>
              Angebot anfordern
            </Link>
          </aside>
        </div>
      </section>

      {/* Weitere Leistungen */}
      <section className="section--tight container">
        <h4 style={{ marginBottom: '1rem', color: 'var(--muted)', letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: '0.78rem', fontFamily: 'var(--font-body)' }}>
          Weitere Leistungen
        </h4>
        <div className="pillrow">
          {services.filter((s) => s.slug !== service.slug).map((s) => (
            <Link key={s.slug} to={`/leistungen/${s.slug}`} className="pill">{s.title}</Link>
          ))}
        </div>
      </section>

      {/* Anfrageformular */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__head reveal" style={{ margin: '0 auto 2.5rem', textAlign: 'center' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>In 30 Sekunden</span>
            <h2>Angebot für {service.title}</h2>
          </div>
          <RequestForm />
        </div>
      </section>
    </>
  )
}
