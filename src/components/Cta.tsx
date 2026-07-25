import { Link } from 'react-router-dom'
import './Cta.css'
interface P { title?: string; text?: string; label?: string; to?: string }
export default function Cta({
  title = 'Bereit für Ihren neuen Boden?',
  text = 'Kostenloses, unverbindliches Angebot – aus einer Hand.',
  label = 'Jetzt Angebot anfordern', to = '/kontakt',
}: P) {
  return (
    <section className="cta">
      <div className="wrap cta__in reveal">
        <div>
          <span className="kicker" style={{ color: '#111' }}>Kaymak Bau</span>
          <h2 className="cta__title">{title}</h2>
          <p className="cta__text">{text}</p>
        </div>
        <Link to={to} className="btn btn--ink cta__btn">{label} <span className="arrow">→</span></Link>
      </div>
    </section>
  )
}
