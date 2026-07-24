import { useState } from 'react'
import './LayerModel.css'

const layers = [
  { n: '05', title: 'Oberboden / Beschichtung', desc: 'Vinyl, Parkett oder fugenlose Epoxidharz-Beschichtung – die sichtbare Oberfläche.', color: '#7a5a34' },
  { n: '04', title: 'Estrichschicht', desc: 'Zement- oder Anhydritestrich als tragfähige, ebene Basis für den Oberboden.', color: '#9a9284' },
  { n: '03', title: 'Fußbodenheizung', desc: 'Tacker-, Noppen- oder Schlüter-BECOTEC-System für behagliche Wärme.', color: '#b8863b' },
  { n: '02', title: 'Wärmedämmung & Tackerplatte', desc: 'Dämmung mit Tackerplatte & Rolljet – hält die Wärme im Raum.', color: '#c9b48a' },
  { n: '01', title: 'Abdichtung', desc: 'Katja Sprint / Schweißbahn schützt zuverlässig gegen Bodenfeuchte.', color: '#4a463f' },
  { n: '00', title: 'Rohbetondecke (Bestand)', desc: 'Der vorhandene Untergrund, auf dem wir aufbauen.', color: '#2b2823' },
]

export default function LayerModel() {
  const [active, setActive] = useState(2)
  return (
    <div className="lm">
      <div className="lm__stack" role="list">
        {layers.map((l, i) => (
          <button
            type="button"
            key={l.n}
            role="listitem"
            className={`lm__layer ${active === i ? 'is-active' : ''}`}
            style={{ ['--lc' as string]: l.color }}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            aria-pressed={active === i}
          >
            <span className="lm__n">{l.n}</span>
            <span className="lm__t">{l.title}</span>
          </button>
        ))}
      </div>
      <div className="lm__detail" aria-live="polite">
        <span className="badge">Schicht {layers[active].n}</span>
        <h3>{layers[active].title}</h3>
        <p>{layers[active].desc}</p>
        <p className="lm__hint">Fahren Sie über die Schichten, um den Aufbau zu erkunden.</p>
      </div>
    </div>
  )
}
