import { useEffect, useRef, useState } from 'react'
import './LayerModel.css'

const base = import.meta.env.BASE_URL

const layers = [
  { n: '1', t: 'Wärmedämmung & Tackerplatte', d: 'Tragfähige Dämm- und Trägerschicht als stabile Basis.', c: '#8d8b8b', image: `${base}24.jpeg` },
  { n: '2', t: 'Fußbodenheizung', d: 'Verlegung im Tacker-, Noppen- oder Schlüter-BECOTEC-System.', c: '#e0a11c', image: `${base}Fußbodenheizung2.png` },
  { n: '3', t: 'Estrichschicht', d: 'Zement- oder Anhydritestrich zur Lastverteilung und Ebenheit.', c: '#9a938a', image: `${base}Estrich3.png` },
  { n: '4', t: 'Abdichtung', d: 'Sicherer Feuchteschutz mit Katja Sprint oder Schweißbahn.', c: '#3c3831', image: `${base}Schweißbahn2.png` },
  { n: '5', t: 'Bodenbeschichtung', d: 'Robuste Beschichtung, z. B. mit Epoxidharz, je nach Nutzung.', c: '#6b4f2a', image: `${base}BodenBeschichtung2.png` },
  { n: '6', t: 'Parkett / Klick-Vinyl', d: 'Alternativ hochwertiger Oberbelag aus Parkett oder Klick-Vinyl.', c: '#c9b48a', image: `${base}Vinyl2.png` },
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
