import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  const base = import.meta.env.BASE_URL

  return (
    <section className="hero">
      <div className="hero__media">
        <video className="hero__video" autoPlay muted loop playsInline
          poster="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80">
          <source src={`${base}videos/hero.mp4`} type="video/mp4" />
        </video>
        <div className="hero__scrim" aria-hidden="true" />
      </div>

      <div className="wrap hero__content">
        <span className="hero__kicker">Generalunternehmer für Bodenaufbau</span>
        <h1 className="hero__title">
          Kaymak Bau
          <span className="hero__sub">Ihr Profi rund um den Fußboden.</span>
        </h1>
        <div className="hero__actions">
          <Link to="/leistungen" className="btn btn--accent">Unsere Leistungen <span className="arrow">→</span></Link>
          <Link to="/kontakt" className="btn btn--light">Kontakt aufnehmen</Link>
        </div>
      </div>
    </section>
  )
}
