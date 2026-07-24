import { Link } from 'react-router-dom'
import '../styles/pages.css'

export default function NotFound() {
  return (
    <section className="notfound container">
      <div>
        <span className="eyebrow" style={{ justifyContent: 'center' }}>Fehler 404</span>
        <h1 style={{ margin: '1rem 0' }}>Seite nicht gefunden</h1>
        <p className="lead" style={{ margin: '0 auto 2rem' }}>
          Die gewünschte Seite existiert nicht mehr oder wurde verschoben.
        </p>
        <Link to="/" className="btn btn--gold">Zur Startseite</Link>
      </div>
    </section>
  )
}
