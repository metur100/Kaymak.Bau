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
  const base = import.meta.env.BASE_URL
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const loc = useLocation()
  const isSolid = scrolled || loc.pathname !== '/'

  useEffect(() => { setOpen(false) }, [loc.pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`nav ${isSolid ? 'nav--solid' : ''}`}>
      <div className="wrap nav__row">
        <Link to="/" className="nav__brand" aria-label="Kaymak Bau Startseite">
          <img className="nav__logo" src={`${base}logo.png`} alt="Kaymak Bau" />
        </Link>

        <nav className={`nav__menu ${open ? 'open' : ''}`} aria-label="Hauptnavigation">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === '/'}
              className={({ isActive }) => `nav__link ${isActive ? 'active' : ''}`}>
              {n.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className={`nav__overlay ${open ? 'open' : ''}`}
          aria-label="Menü schließen"
          onClick={() => setOpen(false)}
        />

        <button type="button" className={`burger ${open ? 'open' : ''}`} aria-label="Menü"
          aria-expanded={open} onClick={() => setOpen(o => !o)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
