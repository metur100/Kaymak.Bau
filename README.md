# Kaymak Bau – Website

„Kaymak Bau – Ihr Profi rund um den Fußboden."

Landing Page / Mehrseiten-Website als **React + Vite + TypeScript** Projekt.
Heller, edler Look (angelehnt an edelfelsen.de & zogabau.de) mit warmem Beige,
dunkler Tinte und Messing-Gold-Akzent.

## Starten

```bash
npm install
npm run dev
```

Danach im Browser: http://localhost:5173

## Build (Produktion)

```bash
npm run build
npm run preview
```

## Seitenstruktur

- **Home** (`/`) – Hero-Video, Zahlen/Statistik, Leistungskacheln, 3D-Schichtmodell, Vorher/Nachher, Werte, Referenz-Teaser, CTA
- **Leistungen** (`/leistungen`) – Übersicht aller Gewerke
  - Detailseiten (`/leistungen/:slug`) – für jedes Gewerk eine eigene Seite (SEO / Google Ads):
    Abdichtung, Wärmedämmung/Tackerplatte/Rolljet, Fußbodenheizung, Estrich, Oberböden, Epoxidharz
- **Referenzen** (`/referenzen`) – Projektübersicht
  - Detailseiten (`/referenzen/:slug`) – Beschreibung, Leistungsumfang, Galerie, Vorher/Nachher
- **Über uns** (`/ueber-uns`)
- **Kontakt** (`/kontakt`) – 3-Schritt-Anfrageformular (Mobile First)

## Hero-Video einbinden

Legen Sie Ihr Stock-Video als **`public/videos/hero.mp4`** ab – es wird automatisch
im Hero abgespielt. Solange keine Datei vorhanden ist, dient das Poster-Bild als Fallback.

Empfohlene, thematisch passende Stock-Quellen (kostenlos bzw. lizenzpflichtig):
- Pexels: pexels.com/search/videos/floor-construction · flooring-installation · concrete-floor
- Freepik (Lizenz beachten): Suche nach „underfloor heating", „epoxy floor", „parquet installation"

Format: Querformat 1920×1080, ruhige Kamerabewegung, als `hero.mp4`.

## Bilder ersetzen

Aktuell werden frei verfügbare Unsplash-Platzhalter genutzt (siehe `src/data/services.ts`
und `src/data/projects.ts`). Für den Livegang durch eigene Fotos ersetzen – am besten
lokale Dateien unter `public/` ablegen und die Pfade in den Datendateien anpassen.

## Inhalte pflegen

- **Leistungen:** `src/data/services.ts`
- **Referenzprojekte:** `src/data/projects.ts`
- **Farben & Typografie:** `src/styles/global.css` (CSS-Variablen unter `:root`)

## Hinweis Formular

Das Anfrageformular ist ein Frontend-Demo. Für den Livebetrieb an einen E-Mail-Dienst
(z. B. Formspree) oder ein eigenes Backend anbinden.
