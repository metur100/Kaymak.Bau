import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Header.css'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/leistungen', label: 'Leistungen' },
  { to: '/referenzen', label: 'Referenzen' },
  { to: '/ueber-uns', label: 'Über uns' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const loc = useLocation()
  const solid = loc.pathname !== '/'

  useEffect(() => setOpen(false), [loc.pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`hdr ${scrolled ? 'hdr--scrolled' : ''} ${open ? 'hdr--open' : ''} ${solid ? 'hdr--solid' : ''}`}>
      <div className="hdr__inner container">
        <Link to="/" className="hdr__brand" aria-label="Kaymak Bau Startseite">
          <span className="hdr__name">
            Kaymak<span> Bau</span>
          </span>
        </Link>

        <nav className={`hdr__nav ${open ? 'is-open' : ''}`} aria-label="Hauptnavigation">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              className={({ isActive }) => `hdr__link ${isActive ? 'is-active' : ''}`}
            >
              {n.label}
            </NavLink>
          ))}
          <Link to="/kontakt" className="btn btn--gold hdr__cta">
            Angebot anfordern
          </Link>
        </nav>

        <button
          type="button"
          className={`hdr__burger ${open ? 'is-open' : ''}`}
          aria-label="Menü umschalten"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="hdr__burgerline hdr__burgerline--top" />
          <span className="hdr__burgerline hdr__burgerline--mid" />
          <span className="hdr__burgerline hdr__burgerline--bottom" />
        </button>
      </div>
    </header>
  )
}
