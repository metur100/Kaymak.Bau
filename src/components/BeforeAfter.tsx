import { useRef, useState, useCallback } from 'react'
import './BeforeAfter.css'
interface P { before: string; after: string; alt?: string }
export default function BeforeAfter({ before, after, alt = 'Vorher-Nachher' }: P) {
  const [pos, setPos] = useState(50)
  const ref = useRef<HTMLDivElement>(null)
  const drag = useRef(false)
  const set = useCallback((x: number) => {
    const el = ref.current; if (!el) return
    const r = el.getBoundingClientRect()
    setPos(Math.max(0, Math.min(100, ((x - r.left) / r.width) * 100)))
  }, [])
  return (
    <div className="ba" ref={ref}
      onMouseMove={(e) => drag.current && set(e.clientX)}
      onMouseUp={() => (drag.current = false)}
      onMouseLeave={() => (drag.current = false)}
      onTouchMove={(e) => set(e.touches[0].clientX)}>
      <img className="ba__after" src={after} alt={`${alt} nachher`} loading="lazy" />
      <div className="ba__clip" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img className="ba__before" src={before} alt={`${alt} vorher`} loading="lazy" />
        <span className="ba__lbl ba__lbl--l">Vorher</span>
      </div>
      <span className="ba__lbl ba__lbl--r">Nachher</span>
      <button type="button" className="ba__handle" style={{ left: `${pos}%` }}
        role="slider" aria-valuenow={Math.round(pos)} aria-valuemin={0} aria-valuemax={100}
        aria-label="Vergleich verschieben"
        onMouseDown={() => (drag.current = true)} onTouchStart={() => (drag.current = true)}
        onKeyDown={(e) => { if (e.key === 'ArrowLeft') setPos(p => Math.max(0, p - 4)); if (e.key === 'ArrowRight') setPos(p => Math.min(100, p + 4)) }}>
        <span aria-hidden="true">‹ ›</span>
      </button>
    </div>
  )
}
