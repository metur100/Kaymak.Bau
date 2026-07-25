import { Link } from 'react-router-dom'
import { services } from '../data/services'
import './Footer.css'
export default function Footer() {
  const y = new Date().getFullYear()
  return (
    <footer className="ft">
      <div className="wrap ft__grid">
        <div>
          <div className="ft__brand">Kaymak<span>Bau</span></div>
          <p className="ft__slogan">Ihr Profi rund um den Fußboden.</p>
          <p className="ft__cert">Zertifizierter Schlüter-BECOTEC Fachbetrieb</p>
          <Link to="/kontakt" className="btn btn--accent ft__cta">Angebot anfordern</Link>
        </div>
        <div className="ft__col">
          <h4>Leistungen</h4>
          <ul>{services.map(s => <li key={s.slug}><Link to={`/leistungen/${s.slug}`}>{s.title}</Link></li>)}</ul>
        </div>
        <div className="ft__col">
          <h4>Unternehmen</h4>
          <ul>
            <li><Link to="/ueber-uns">Über uns</Link></li>
            <li><Link to="/referenzen">Referenzen</Link></li>
            <li><Link to="/leistungen">Leistungen</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
          </ul>
        </div>
        <div className="ft__col">
          <h4>Kontakt</h4>
          <ul>
            <li>Kaymak Bau</li>
            <li>Musterstraße 12</li>
            <li>00000 Musterstadt</li>
            <li><a href="tel:+490000000000">+49 (0) 000 000 000</a></li>
            <li><a href="mailto:info@kaymak-bau.de">info@kaymak-bau.de</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap ft__bar">
        <span>© {y} Kaymak Bau. Alle Rechte vorbehalten.</span>
        <span className="ft__legal"><Link to="/kontakt">Impressum</Link><Link to="/kontakt">Datenschutz</Link></span>
      </div>
    </footer>
  )
}
