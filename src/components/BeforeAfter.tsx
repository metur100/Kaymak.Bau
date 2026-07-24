import { useRef, useState, useCallback } from 'react'
import './BeforeAfter.css'

interface Props {
  before: string
  after: string
  beforeLabel?: string
  afterLabel?: string
  alt?: string
}

export default function BeforeAfter({
  before,
  after,
  beforeLabel = 'Vorher',
  afterLabel = 'Nachher',
  alt = 'Vorher-Nachher-Vergleich',
}: Props) {
  const [pos, setPos] = useState(50)
  const ref = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const p = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(0, Math.min(100, p)))
  }, [])

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 4))
    if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 4))
  }

  return (
    <div
      className="ba"
      ref={ref}
      onMouseMove={(e) => dragging.current && setFromClientX(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => setFromClientX(e.touches[0].clientX)}
    >
      <img className="ba__img ba__img--after" src={after} alt={`${alt} – ${afterLabel}`} loading="lazy" />
      <div className="ba__clip" style={{ width: `${pos}%` }}>
        <img className="ba__img" src={before} alt={`${alt} – ${beforeLabel}`} loading="lazy" style={{ width: ref.current?.offsetWidth || '100%' }} />
        <span className="ba__label ba__label--before">{beforeLabel}</span>
      </div>
      <span className="ba__label ba__label--after">{afterLabel}</span>

      <button
        type="button"
        className="ba__handle"
        style={{ left: `${pos}%` }}
        aria-label="Vergleichsregler verschieben"
        role="slider"
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
        onKeyDown={onKey}
        onMouseDown={() => (dragging.current = true)}
        onTouchStart={() => (dragging.current = true)}
      >
        <span className="ba__grip" aria-hidden="true">‹ ›</span>
      </button>
    </div>
  )
}
