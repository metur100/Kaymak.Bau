import { useEffect } from 'react'
// Adds .in to every .reveal element when it enters the viewport
export function useReveal(dep?: unknown) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [dep])
}
