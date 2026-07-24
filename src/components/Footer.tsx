import { Link } from 'react-router-dom'
import { services } from '../data/services'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="ftr">
      <div className="container ftr__grid">
        <div className="ftr__brandcol">
          <div className="ftr__brand">
            Kaymak<span> Bau</span>
          </div>
          <p className="ftr__slogan">Ihr Profi rund um den Fußboden.</p>
          <p className="ftr__cert">Zertifizierter Fachbetrieb für Schlüter-BECOTEC</p>
        </div>

        <div className="ftr__col">
          <h4>Leistungen</h4>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/leistungen/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="ftr__col">
          <h4>Unternehmen</h4>
          <ul>
            <li><Link to="/ueber-uns">Über uns</Link></li>
            <li><Link to="/referenzen">Referenzen</Link></li>
            <li><Link to="/leistungen">Alle Leistungen</Link></li>
            <li><Link to="/kontakt">Kontakt</Link></li>
          </ul>
        </div>

        <div className="ftr__col">
          <h4>Kontakt</h4>
          <ul className="ftr__contact">
            <li>Kaymak Bau</li>
            <li>Musterstraße 12</li>
            <li>00000 Musterstadt</li>
            <li><a href="tel:+490000000000">+49 (0) 000 000 000</a></li>
            <li><a href="mailto:info@kaymak-bau.de">info@kaymak-bau.de</a></li>
          </ul>
        </div>
      </div>

      <div className="ftr__bar container">
        <span>© {year} Kaymak Bau. Alle Rechte vorbehalten.</span>
        <span className="ftr__legal">
          <Link to="/kontakt">Impressum</Link>
          <Link to="/kontakt">Datenschutz</Link>
        </span>
      </div>
    </footer>
  )
}
