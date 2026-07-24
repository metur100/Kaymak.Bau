import { Link } from 'react-router-dom'
import './CtaBand.css'

interface Props {
  title?: string
  text?: string
  buttonLabel?: string
  to?: string
}

export default function CtaBand({
  title = 'Bereit für einen Boden, der hält?',
  text = 'Fordern Sie jetzt Ihr kostenloses, unverbindliches Angebot an – ehrlich kalkuliert und aus einer Hand.',
  buttonLabel = 'Kostenloses Angebot anfordern',
  to = '/kontakt',
}: Props) {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <div>
          <span className="eyebrow cta__eyebrow">Kaymak Bau</span>
          <h2 className="cta__title">{title}</h2>
          <p className="cta__text">{text}</p>
        </div>
        <Link to={to} className="btn btn--gold cta__btn">
          {buttonLabel}
          <span className="btn__arrow" aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}
