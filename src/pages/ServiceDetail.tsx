import { Link, useParams } from 'react-router-dom'
import { getService, services } from '../data/services'
import RequestForm from '../components/RequestForm'
import NotFound from './NotFound'
import { useReveal } from '../hooks/useReveal'
import '../styles/pages.css'
export default function ServiceDetail() {
  const { slug } = useParams()
  const s = getService(slug || '')
  useReveal(slug)
  if (!s) return <NotFound />
  return (
    <>
      <header className="pagehead"><div className="wrap">
        <div className="pills" style={{ marginBottom: '1.2rem' }}><Link to="/leistungen" className="pill">← Alle Leistungen</Link></div>
        <span className="kicker">Leistung</span><h1>{s.title}</h1><p className="lead">{s.tagline}</p>
      </div></header>

      <section className="section wrap"><img className="dhero__cover reveal" src={s.image} alt={s.title} /></section>

      <section className="section wrap" style={{ paddingTop: 0 }}>
        <div className="dlayout">
          <div className="reveal">
            <h2>Kurz erklärt</h2>
            <p className="lead" style={{ marginTop: '1rem' }}>{s.intro}</p>
            <h3 style={{ marginTop: '2.2rem' }}>Leistungsumfang</h3>
            <ul className="checklist">{s.scope.map(x => <li key={x}>{x}</li>)}</ul>
          </div>
          <aside className="aside reveal">
            <h4>Nächste Schritte</h4>
            <p style={{ marginBottom: '1.2rem' }}>Kostenloses Angebot in 30 Sekunden anfragen.</p>
            <Link to="/kontakt" className="btn btn--accent" style={{ width: '100%' }}>Angebot anfordern</Link>
          </aside>
        </div>
      </section>

      <section className="section wrap" style={{ paddingTop: 0 }}>
        <h4 style={{ marginBottom: '1rem', color: 'var(--muted)', letterSpacing: '.14em', textTransform: 'uppercase', fontSize: '.78rem', fontFamily: 'var(--font-body)' }}>Weitere Leistungen</h4>
        <div className="pills">{services.filter(x => x.slug !== s.slug).map(x => <Link key={x.slug} to={`/leistungen/${x.slug}`} className="pill">{x.title}</Link>)}</div>
      </section>

      <section className="section section--panel"><div className="wrap">
        <div className="head center reveal"><span className="kicker" style={{ justifyContent: 'center' }}>In 30 Sekunden</span><h2>Angebot anfragen</h2></div>
        <RequestForm preselect={s.title} />
      </div></section>
    </>
  )
}
