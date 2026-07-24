import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Leistungen from './pages/Leistungen'
import LeistungDetail from './pages/LeistungDetail'
import Referenzen from './pages/Referenzen'
import ReferenzDetail from './pages/ReferenzDetail'
import UeberUns from './pages/UeberUns'
import Kontakt from './pages/Kontakt'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/leistungen/:slug" element={<LeistungDetail />} />
          <Route path="/referenzen" element={<Referenzen />} />
          <Route path="/referenzen/:slug" element={<ReferenzDetail />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
