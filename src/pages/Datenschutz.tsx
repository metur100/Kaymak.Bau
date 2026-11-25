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

              <h2 style={{ marginTop: '2rem' }}>Cookies &amp; Einwilligung</h2>
              <p className="lead" style={{ marginTop: '1rem' }}>
                Beim ersten Besuch fragen wir über ein Cookie-Banner Ihre Einwilligung ein. Ihre Auswahl wird im
                lokalen Speicher Ihres Browsers (localStorage) gespeichert; dies ist technisch notwendig
                (§ 25 Abs. 2 TDDDG). Alle weiteren Dienste werden nur mit Ihrer Einwilligung geladen
                (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Sie können Ihre Einwilligung jederzeit mit Wirkung
                für die Zukunft über den Link „Cookie-Einstellungen“ im Footer ändern oder widerrufen.
              </p>

              <h2 style={{ marginTop: '2rem' }}>Google Tag Manager &amp; Google Ads</h2>
              <p className="lead" style={{ marginTop: '1rem' }}>
                Nur nach Ihrer Einwilligung nutzen wir den Google Tag Manager sowie das Conversion-Tracking von
                Google Ads der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Damit messen
                wir, ob Besucher, die über eine unserer Anzeigen auf die Website gelangt sind, uns anrufen, per
                WhatsApp kontaktieren oder das Anfrageformular absenden. Dabei werden Cookies gesetzt und Daten wie
                IP-Adresse, Geräte- und Browserinformationen, aufgerufene Seiten sowie die genannten Interaktionen
                an Google übermittelt. Inhalte des Formulars (Name, Telefonnummer, Nachricht) werden nicht an
                Google übertragen. Eine Übermittlung in die USA ist möglich; Google ist unter dem
                EU-US Data Privacy Framework zertifiziert. Wir verwenden den Google Consent Mode, sodass ohne
                Einwilligung keine Google-Skripte geladen werden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO.
                Weitere Informationen: <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>policies.google.com/privacy</a>.
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
