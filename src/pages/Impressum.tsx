import '../styles/pages.css'

export default function Impressum() {
  return (
    <>
      <header className="pagehead">
        <div className="wrap">
          <span className="kicker">Rechtliches</span>
          <h1>Impressum</h1>
          <p className="lead">Angaben gemaess Paragraph 5 TMG.</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="split" style={{ alignItems: 'start' }}>
            <div>
              <h2>Angaben</h2>
              <ul className="checklist" style={{ marginTop: '1.2rem' }}>
                <li>Kaymak Bau</li>
                <li>Werner-Hilpert-Strasse 12, 63128 Dietzenbach</li>
                <li>Telefon: <a href="tel:+491632051432" style={{ textDecoration: 'underline' }}>0163 2051432</a></li>
                <li>E-Mail: <a href="mailto:info@kaymakbodenverlegung.de" style={{ textDecoration: 'underline' }}>info@kaymakbodenverlegung.de</a></li>
                <li>Instagram: <a href="https://www.instagram.com/kaymakbau/" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>instagram.com/kaymakbau</a></li>
              </ul>
            </div>

            <div>
              <h2>Haftungshinweis</h2>
              <p className="lead" style={{ marginTop: '1rem' }}>
                Trotz sorgfaeltiger inhaltlicher Kontrolle uebernehmen wir keine Haftung fuer die Inhalte externer Links.
                Fuer den Inhalt der verlinkten Seiten sind ausschliesslich deren Betreiber verantwortlich.
              </p>

              <h2 style={{ marginTop: '2rem' }}>Urheberrecht</h2>
              <p className="lead" style={{ marginTop: '1rem' }}>
                Die auf dieser Website veroeffentlichten Inhalte und Werke unterliegen dem deutschen Urheberrecht.
                Jede Art der Verwertung ausserhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
