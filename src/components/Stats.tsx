import { useEffect, useRef, useState } from 'react'
import './Stats.css'

const data = [
  { v: 15, s: '+', l: 'Jahre Erfahrung' },
  { v: 500, s: '+', l: 'Projekte umgesetzt' },
  { v: 6, s: '', l: 'Gewerke aus einer Hand' },
  { v: 100, s: '%', l: 'Deutschsprachiges Team' },
]

function useCount(t: number, run: boolean, ms = 1400) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!run) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(t); return }
    let raf = 0; const start = performance.now()
    const tick = (x: number) => {
      const p = Math.min(1, (x - start) / ms)
      setN(Math.round(t * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, t, ms])
  return n
}

function Item({ v, s, l, run }: { v: number; s: string; l: string; run: boolean }) {
  const n = useCount(v, run)
  return (
    <div className="stat">
      <div className="stat__num">{n}<span>{s}</span></div>
      <div className="stat__lbl">{l}</div>
    </div>
  )
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [run, setRun] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const io = new IntersectionObserver((e) => { if (e[0].isIntersecting) { setRun(true); io.disconnect() } }, { threshold: 0.4 })
    io.observe(el); return () => io.disconnect()
  }, [])
  return (
    <section className="section--dark stats" ref={ref}>
      <div className="wrap stats__grid">
        {data.map((d) => <Item key={d.l} {...d} run={run} />)}
      </div>
    </section>
  )
}
