import { useEffect, useRef, useState } from 'react'
import './LayerModel.css'

const base = import.meta.env.BASE_URL

const layers = [
  { n: '05', t: 'Oberboden / Beschichtung', d: 'Vinyl, Parkett oder Epoxidharz.', c: '#6b4f2a', image: `${base}1.jpeg` },
  { n: '04', t: 'Estrichschicht', d: 'Zement- oder Anhydritestrich.', c: '#9a938a', image: `${base}2.jpeg` },
  { n: '03', t: 'Fußbodenheizung', d: 'Tacker, Noppen oder Schlüter-BECOTEC.', c: '#e0a11c', image: `${base}1.jpeg` },
  { n: '02', t: 'Wärmedämmung & Tackerplatte', d: 'Dämmung & Rolljet.', c: '#c9b48a', image: `${base}2.jpeg` },
  { n: '01', t: 'Abdichtung', d: 'Katja Sprint / Schweißbahn.', c: '#3c3831', image: `${base}1.jpeg` },
  { n: '00', t: 'Rohbetondecke (Bestand)', d: 'Der vorhandene Untergrund.', c: '#1c1a17', image: `${base}2.jpeg` },
]

export default function LayerModel() {
  const [active, setActive] = useState(2)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = wrapRef.current; if (!el) return
    const io = new IntersectionObserver((e) => { if (e[0].isIntersecting) { setSeen(true); io.disconnect() } }, { threshold: 0.3 })
    io.observe(el); return () => io.disconnect()
  }, [])

  return (
    <div className="lm" ref={wrapRef}>
      <div className={`lm__stack ${seen ? 'seen' : ''}`} role="list">
        {layers.map((l, i) => (
          <button type="button" key={l.n} role="listitem"
            className={`lm__row ${active === i ? 'active' : ''}`}
            style={{ ['--c' as string]: l.c, ['--i' as string]: i }}
            onClick={() => setActive(i)}
            aria-pressed={active === i}>
            <span className="lm__n">{l.n}</span>
            <span className="lm__t">{l.t}</span>
          </button>
        ))}
      </div>
      <div className="lm__info" aria-live="polite">
        <div className="lm__imagewrap">
          <img src={layers[active].image} alt={layers[active].t} className="lm__image" loading="lazy" />
        </div>
        <span className="badge">Schicht {layers[active].n}</span>
        <h3 className="lm__title">{layers[active].t}</h3>
        <p>{layers[active].d}</p>
      </div>
    </div>
  )
}
