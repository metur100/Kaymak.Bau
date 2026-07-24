import { useEffect, useRef, useState } from 'react'
import './Stats.css'

const stats = [
  { value: 15, suffix: '+', label: 'Jahre Erfahrung' },
  { value: 500, suffix: '+', label: 'Verlegte Projekte' },
  { value: 6, suffix: '', label: 'Gewerke aus einer Hand' },
  { value: 24, suffix: 'h', label: 'Schnelle Rückmeldung' },
]

function useCountUp(target: number, run: boolean, ms = 1400) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!run) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(target)
      return
    }
    let raf = 0
    const start = performance.now()
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / ms)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, target, ms])
  return n
}

function Stat({ value, suffix, label, run }: { value: number; suffix: string; label: string; run: boolean }) {
  const n = useCountUp(value, run)
  return (
    <div className="stat">
      <span className="stat__num">
        {n}
        <span className="stat__suffix">{suffix}</span>
      </span>
      <span className="stat__label">{label}</span>
    </div>
  )
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [run, setRun] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (e) => {
        if (e[0].isIntersecting) {
          setRun(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <section className="section--dark stats" ref={ref}>
      <div className="container stats__grid">
        {stats.map((s) => (
          <Stat key={s.label} {...s} run={run} />
        ))}
      </div>
    </section>
  )
}
