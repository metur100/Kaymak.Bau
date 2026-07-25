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

export default function RequestForm({ preselect }: { preselect?: string }) {
  const [step, setStep] = useState(1)
  const [sel, setSel] = useState<string[]>(preselect ? [preselect] : [])
  const [sent, setSent] = useState(false)
  const [d, setD] = useState({ flaeche: '', plz: '', name: '', tel: '', text: '' })
  const toggle = (g: string) => setSel(s => s.includes(g) ? s.filter(x => x !== g) : [...s, g])
  const set = (k: keyof typeof d) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setD(o => ({ ...o, [k]: e.target.value }))

  if (sent) return (
    <div className="rf rf--ok">
      <div className="rf__check" aria-hidden="true">✓</div>
      <h3>Danke, {d.name || 'für Ihre Anfrage'}!</h3>
      <p>Ihre unverbindliche Anfrage ist eingegangen. Wir melden uns zeitnah.</p>
      <p className="rf__note">Demo-Formular – für den Livebetrieb an ein Backend/E-Mail-Dienst anbinden.</p>
    </div>
  )

  return (
    <form className="rf" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
      <div className="rf__steps">{[1, 2, 3].map(s => <span key={s} className={`rf__dot ${step >= s ? 'on' : ''}`}>{s}</span>)}</div>

      {step === 1 && (
        <fieldset className="rf__panel">
          <legend>Schritt 1 · Gewerk wählen</legend>
          <div className="rf__checks">
            {gewerke.map(g => (
              <label key={g} className={`rf__ck ${sel.includes(g) ? 'on' : ''}`}>
                <input type="checkbox" checked={sel.includes(g)} onChange={() => toggle(g)} /><span>{g}</span>
              </label>
            ))}
          </div>
          <button type="button" className="btn btn--ink rf__full" onClick={() => setStep(2)}>Weiter <span className="arrow">→</span></button>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="rf__panel">
          <legend>Schritt 2 · Projektdaten</legend>
          <div className="rf__grid">
            <label className="rf__f"><span>Fläche (m²)</span><input inputMode="numeric" value={d.flaeche} onChange={set('flaeche')} placeholder="z. B. 120" /></label>
            <label className="rf__f"><span>PLZ</span><input inputMode="numeric" value={d.plz} onChange={set('plz')} placeholder="z. B. 00000" /></label>
          </div>
          <div className="rf__nav">
            <button type="button" className="btn btn--ghost" onClick={() => setStep(1)}>Zurück</button>
            <button type="button" className="btn btn--ink" onClick={() => setStep(3)}>Weiter <span className="arrow">→</span></button>
          </div>
        </fieldset>
      )}

      {step === 3 && (
        <fieldset className="rf__panel">
          <legend>Schritt 3 · Kontakt</legend>
          <div className="rf__grid">
            <label className="rf__f"><span>Name</span><input required value={d.name} onChange={set('name')} placeholder="Ihr Name" /></label>
            <label className="rf__f"><span>Telefon</span><input required value={d.tel} onChange={set('tel')} placeholder="Telefonnummer" /></label>
          </div>
          <label className="rf__f"><span>Bemerkungen (Wunschtermin, Bauphase)</span><textarea rows={3} value={d.text} onChange={set('text')} placeholder="Optional" /></label>
          <div className="rf__nav">
            <button type="button" className="btn btn--ghost" onClick={() => setStep(2)}>Zurück</button>
            <button type="submit" className="btn btn--accent">Jetzt unverbindliches Angebot anfordern</button>
          </div>
        </fieldset>
      )}
    </form>
  )
}
