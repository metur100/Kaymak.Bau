import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './styles/global.css'

const base = import.meta.env.BASE_URL
const stripTrailingSlash = (value: string) => (value.endsWith('/') ? value.slice(0, -1) : value)

{
  const { pathname, search, hash } = window.location
  const baseNoSlash = stripTrailingSlash(base)
  const hasHashRoute = hash.startsWith('#/')

  if (!hasHashRoute) {
    const pathWithoutBase = pathname.startsWith(baseNoSlash)
      ? pathname.slice(baseNoSlash.length) || '/'
      : pathname

    if (pathWithoutBase !== '/') {
      const normalized = `${base}#${pathWithoutBase}${search}`
      window.history.replaceState(null, '', normalized)
    }
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
