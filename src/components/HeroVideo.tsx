import './HeroVideo.css'

interface Props {
  eyebrow?: string
  title: React.ReactNode
  subtitle?: string
  highlights?: string[]
  primary?: { label: string; to: string }
  secondary?: { label: string; to: string }
}

// Hero mit Hintergrundvideo. Video-Datei unter /public/videos/hero.mp4 ablegen.
// Solange keine Datei vorhanden ist, dient das Poster-Bild als Fallback.
export default function HeroVideo({ eyebrow, title, subtitle, highlights, primary, secondary }: Props) {
  return (
    <section className="hero">
      <div className="hero__media">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay" aria-hidden="true" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          {eyebrow && <span className="eyebrow hero__eyebrow">{eyebrow}</span>}
          <h1 className="hero__title">{title}</h1>
          {subtitle && <p className="hero__sub">{subtitle}</p>}
          {highlights && highlights.length > 0 && (
            <div className="hero__highlights" aria-label="Vorteile">
              {highlights.map((item) => (
                <span key={item} className="hero__pill">{item}</span>
              ))}
            </div>
          )}
          {(primary || secondary) && (
            <div className="hero__actions">
              {primary && (
                <a href={primary.to} className="btn btn--gold hero__btn">
                  {primary.label}
                  <span className="btn__arrow" aria-hidden="true">→</span>
                </a>
              )}
              {secondary && (
                <a href={secondary.to} className="btn btn--light hero__btn">
                  {secondary.label}
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>Entdecken</span>
        <span className="hero__scrollline" />
      </div>
    </section>
  )
}
