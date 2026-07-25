import { Link } from 'react-router-dom'
import '../styles/pages.css'
export default function NotFound() {
  return (
    <section className="nf wrap">
      <div>
        <span className="kicker" style={{ justifyContent: 'center' }}>Fehler 404</span>
        <h1 style={{ margin: '1rem 0' }}>Seite nicht gefunden</h1>
        <p className="lead center" style={{ marginBottom: '2rem' }}>Diese Seite existiert nicht mehr.</p>
        <Link to="/" className="btn btn--accent">Zur Startseite</Link>
      </div>
    </section>
  )
}
