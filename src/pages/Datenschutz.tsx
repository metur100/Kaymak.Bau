import '../styles/pages.css'

export default function Datenschutz() {
  return (
    <>
      <header className="pagehead">
        <div className="wrap">
          <span className="kicker">Rechtliches</span>
          <h1>Datenschutz</h1>
          <p className="lead">Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap">
          <div className="split" style={{ alignItems: 'start' }}>
            <div>
              <h2>Verantwortlich</h2>
              <ul className="checklist" style={{ marginTop: '1.2rem' }}>
                <li>Kaymak Bau</li>
                <li>Werner-Hilpert-Strasse 12, 63128 Dietzenbach</li>
                <li>Telefon: <a href="tel:+491632051432" style={{ textDecoration: 'underline' }}>0163 2051432</a></li>
                <li>E-Mail: <a href="mailto:info@kaymakbodenverlegung.de" style={{ textDecoration: 'underline' }}>info@kaymakbodenverlegung.de</a></li>
              </ul>

              <h2 style={{ marginTop: '2rem' }}>Kontaktaufnahme</h2>
              <p className="lead" style={{ marginTop: '1rem' }}>
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung Ihrer Anfrage.
                Die Verarbeitung erfolgt auf Grundlage von Artikel 6 Absatz 1 Buchstabe b und f DSGVO.
              </p>
            </div>

            <div>
              <h2>Server-Logfiles</h2>
              <p className="lead" style={{ marginTop: '1rem' }}>
                Beim Aufruf dieser Website koennen durch den Hosting-Anbieter technisch erforderliche Verbindungsdaten
                in Server-Logfiles verarbeitet werden (zum Beispiel IP-Adresse, Datum und Uhrzeit, aufgerufene Seite).
              </p>

              <h2 style={{ marginTop: '2rem' }}>Google Fonts</h2>
              <p className="lead" style={{ marginTop: '1rem' }}>
                Diese Website nutzt Schriftarten von Google Fonts. Beim Laden der Schriftarten kann eine Verbindung
                zu Servern von Google hergestellt werden.
              </p>

              <h2 style={{ marginTop: '2rem' }}>Formularhinweis</h2>
              <p className="lead" style={{ marginTop: '1rem' }}>
                Das Anfrageformular auf dieser Website ist als Demo eingebunden und sendet derzeit keine Daten
                an einen externen Server oder E-Mail-Dienst.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
