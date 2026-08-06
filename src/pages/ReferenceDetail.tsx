import { Link, useParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { getProject, projects } from '../data/projects'
import Cta from '../components/Cta'
import NotFound from './NotFound'
import { useReveal } from '../hooks/useReveal'
import '../styles/pages.css'
export default function ReferenceDetail() {
  const { slug } = useParams()
  const p = getProject(slug || '')
  useReveal(slug)
  if (!p) return <NotFound />
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const media = p.gallery
  const imagesCount = media.filter(x => x.type === 'image').length
  const videosCount = media.filter(x => x.type === 'video').length

  const filteredMedia = useMemo(() => {
    if (filter === 'all') return media
    return media.filter(x => x.type === filter)
  }, [filter, media])

  const activeMedia = activeIndex === null ? null : filteredMedia[activeIndex]

  useEffect(() => {
    setFilter('all')
    setActiveIndex(null)
  }, [p.slug])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const others = projects.filter(x => x.slug !== p.slug).slice(0, 2)
  return (
    <>
      <header className="pagehead"><div className="wrap">
        <div className="pills" style={{ marginBottom: '1.2rem' }}><Link to="/referenzen" className="pill">← Alle Referenzen</Link></div>
        <span className="kicker">{p.category}</span><h1>{p.title}</h1>
      </div></header>

      <section className="section wrap"><img className="dhero__cover reveal" src={p.cover} alt={p.title} /></section>

      <section className="section wrap" style={{ paddingTop: 0 }}>
        <div className="dlayout">
          <div className="reveal">
            <h2>Projekt</h2>
            <p className="lead" style={{ marginTop: '1rem' }}>{p.description}</p>
            <h3 style={{ marginTop: '2.2rem' }}>Ausgeführte Arbeiten</h3>
            <ul className="checklist">{p.scope.map(x => <li key={x}>{x}</li>)}</ul>
            <h3 style={{ marginTop: '2.2rem', marginBottom: '1rem' }}>Impressionen</h3>
            <div className="pills" style={{ marginBottom: '1rem' }}>
              <button type="button" className={`pill ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>Alle ({media.length})</button>
              {imagesCount > 0 && <button type="button" className={`pill ${filter === 'image' ? 'active' : ''}`} onClick={() => setFilter('image')}>Bilder ({imagesCount})</button>}
              {videosCount > 0 && <button type="button" className={`pill ${filter === 'video' ? 'active' : ''}`} onClick={() => setFilter('video')}>Videos ({videosCount})</button>}
            </div>
            <div className="gallery gallery--media">
              {filteredMedia.map((item, i) => (
                <button type="button" key={`${item.src}-${i}`} className="gallery__item" onClick={() => setActiveIndex(i)}>
                  {item.type === 'image' ? (
                    <img src={item.src} alt={item.alt || `${p.title} Bild ${i + 1}`} loading="lazy" />
                  ) : (
                    <div className="gallery__videoWrap">
                      <video src={item.src} poster={item.poster || p.cover} preload="metadata" muted playsInline />
                      <span className="gallery__play">▶ Video</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
          <aside className="aside reveal">
            <h4>Projektdaten</h4>
            <div className="facts">
              <div className="fact"><span>Kategorie</span><span>{p.category}</span></div>
              <div className="fact"><span>Ort</span><span>{p.location}</span></div>
              <div className="fact"><span>Fläche</span><span>{p.area}</span></div>
              <div className="fact"><span>Jahr</span><span>{p.year}</span></div>
            </div>
            <a href={p.projectLink} target="_blank" rel="noreferrer" className="btn btn--ghost" style={{ width: '100%', marginBottom: '.7rem' }}>Projekt ansehen</a>
            <Link to="/kontakt" className="btn btn--accent" style={{ width: '100%' }}>Ähnliches anfragen</Link>
          </aside>
        </div>
      </section>

      {activeMedia && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActiveIndex(null)}>
          <button type="button" className="lightbox__close" onClick={() => setActiveIndex(null)} aria-label="Schließen">×</button>
          <div className="lightbox__content" onClick={(event) => event.stopPropagation()}>
            {activeMedia.type === 'image' ? (
              <img src={activeMedia.src} alt={activeMedia.alt || p.title} />
            ) : (
              <video src={activeMedia.src} poster={activeMedia.poster || p.cover} controls autoPlay playsInline />
            )}
          </div>
        </div>
      )}

      <section className="section wrap">
        <h4 style={{ marginBottom: '1.2rem', color: 'var(--muted)', letterSpacing: '.14em', textTransform: 'uppercase', fontSize: '.78rem', fontFamily: 'var(--font-body)' }}>Weitere Projekte</h4>
        <div className="refs">
          {others.map(o => (
            <Link key={o.slug} to={`/referenzen/${o.slug}`} className="ref">
              <div className="ref__media"><span className="badge ref__cat">{o.category}</span><img src={o.cover} alt={o.title} loading="lazy" /></div>
              <div className="ref__body"><h3>{o.title}</h3><div className="ref__meta"><span>{o.location}</span><span>{o.area}</span></div></div>
            </Link>
          ))}
        </div>
      </section>
      <Cta />
    </>
  )
}
