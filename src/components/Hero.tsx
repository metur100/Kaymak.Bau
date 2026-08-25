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
          <Link to="/kontakt" className="btn btn--accent">Jetzt anfragen</Link>
        </div>

        <div className="hero__quickcontact">
          <a href="tel:+491632051432" className="hero__quickcontact-link" aria-label="Anrufen">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          <a href="https://wa.me/491632051432" target="_blank" rel="noreferrer" className="hero__quickcontact-link" aria-label="WhatsApp">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5.003L2 22l5.116-1.334A9.958 9.958 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
              <path fill="currentColor" stroke="none" d="M16.72 14.06c-.28-.14-1.64-.81-1.9-.9-.25-.1-.44-.14-.62.14-.19.28-.72.9-.88 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.38-1.64-1.54-1.92-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.05-.22-.53-.45-.46-.62-.47h-.53c-.18 0-.46.07-.71.35-.24.28-.93.91-.93 2.22 0 1.31.95 2.58 1.08 2.76.14.18 1.87 2.86 4.54 4.01.63.27 1.13.44 1.51.56.64.2 1.22.17 1.68.1.51-.08 1.64-.67 1.87-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
