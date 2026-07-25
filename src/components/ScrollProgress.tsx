import { useScrollProgress } from '../hooks/useScrollProgress'
export default function ScrollProgress() {
  const p = useScrollProgress()
  return <div className="progress" style={{ width: `${p}%` }} aria-hidden="true" />
}
