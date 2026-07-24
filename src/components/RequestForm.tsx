import { useState } from 'react'
import './RequestForm.css'

const gewerke = [
  'Abdichtung (Katja Sprint / Schweißbahn)',
  'Wärmedämmung, Tackerplatte & Rolljet',
  'Fußbodenheizung (Noppen / BECOTEC)',
  'Estricharbeiten',
  'Oberboden (Vinyl/Parkett)',
  'Epoxidharz-Beschichtung',
  'Komplettpaket',
]

export default function RequestForm() {
  const [step, setStep] = useState(1)
  const [selected, setSelected] = useState<string[]>([])
  const [sent, setSent] = useState(false)
  const [data, setData] = useState({ flaeche: '', plz: '', name: '', tel: '', bemerkung: '' })

  const toggle = (g: string) =>
    setSelected((s) => (s.includes(g) ? s.filter((x) => x !== g) : [...s, g]))

  const set = (k: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setData((d) => ({ ...d, [k]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="rf rf--done">
        <span className="rf__check" aria-hidden="true">✓</span>
        <h3>Vielen Dank, {data.name || 'für Ihre Anfrage'}!</h3>
        <p>Ihre unverbindliche Anfrage ist eingegangen. Wir melden uns zeitnah bei Ihnen.</p>
        <p className="rf__note">
          Hinweis: Dies ist ein Demo-Formular. Für den Livebetrieb bitte an einen
          E-Mail-Dienst oder ein Backend anbinden.
        </p>
      </div>
    )
  }

  return (
    <form className="rf" onSubmit={submit}>
      <div className="rf__steps" aria-hidden="true">
        {[1, 2, 3].map((s) => (
          <span key={s} className={`rf__dot ${step >= s ? 'is-on' : ''}`}>
            {s}
          </span>
        ))}
      </div>

      {step === 1 && (
        <fieldset className="rf__panel">
          <legend className="rf__legend">Schritt 1 · Gewerk wählen</legend>
          <div className="rf__checks">
            {gewerke.map((g) => (
              <label key={g} className={`rf__check-item ${selected.includes(g) ? 'is-checked' : ''}`}>
                <input type="checkbox" checked={selected.includes(g)} onChange={() => toggle(g)} />
                <span>{g}</span>
              </label>
            ))}
          </div>
          <button type="button" className="btn btn--primary rf__next" onClick={() => setStep(2)}>
            Weiter <span className="btn__arrow" aria-hidden="true">→</span>
          </button>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="rf__panel">
          <legend className="rf__legend">Schritt 2 · Projektdaten</legend>
          <div className="rf__row">
            <label className="rf__field">
              <span>Ungefähre Fläche (m²)</span>
              <input inputMode="numeric" value={data.flaeche} onChange={set('flaeche')} placeholder="z. B. 120" />
            </label>
            <label className="rf__field">
              <span>Postleitzahl</span>
              <input inputMode="numeric" value={data.plz} onChange={set('plz')} placeholder="z. B. 00000" />
            </label>
          </div>
          <div className="rf__nav">
            <button type="button" className="btn btn--ghost" onClick={() => setStep(1)}>Zurück</button>
            <button type="button" className="btn btn--primary" onClick={() => setStep(3)}>
              Weiter <span className="btn__arrow" aria-hidden="true">→</span>
            </button>
          </div>
        </fieldset>
      )}

      {step === 3 && (
        <fieldset className="rf__panel">
          <legend className="rf__legend">Schritt 3 · Kontakt</legend>
          <div className="rf__row">
            <label className="rf__field">
              <span>Name</span>
              <input required value={data.name} onChange={set('name')} placeholder="Ihr Name" />
            </label>
            <label className="rf__field">
              <span>Telefon</span>
              <input required value={data.tel} onChange={set('tel')} placeholder="Ihre Telefonnummer" />
            </label>
          </div>
          <label className="rf__field">
            <span>Bemerkungen (Wunschtermin, Bauphase)</span>
            <textarea rows={3} value={data.bemerkung} onChange={set('bemerkung')} placeholder="Optional" />
          </label>
          <div className="rf__nav">
            <button type="button" className="btn btn--ghost" onClick={() => setStep(2)}>Zurück</button>
            <button type="submit" className="btn btn--gold">Jetzt unverbindliches Angebot anfordern</button>
          </div>
        </fieldset>
      )}
    </form>
  )
}
