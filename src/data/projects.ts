export interface Project {
  slug: string
  title: string
  category: string
  location: string
  year: string
  area: string
  cover: string
  description: string
  scope: string[]
  projectLink: string
  gallery: Array<{
    type: 'image' | 'video'
    src: string
    poster?: string
    alt?: string
  }>
}

const base = import.meta.env.BASE_URL

export const projects: Project[] = [
  {
    slug: 'asb-rettungswache-frankfurt',
    title: 'ASB Rettungswache',
    category: 'Komplettes Gebäude',
    location: 'Frankfurt', year: '2025', area: 'Komplettes Gebäude',
    cover: `${base}asb.jpg`,
    description: 'Komplette Ausführung der Bodenarbeiten in der Rettungswache, abgestimmt auf den laufenden Baustellenbetrieb und hohe Nutzungsanforderungen.',
    scope: ['Vollständiger Bodenaufbau im Gebäude', 'Koordinierte Ausführung mehrerer Gewerke', 'Robuste Ausführung für intensive Nutzung'],
    projectLink: 'https://share.google/XkAfcNaYNBzlvNwZW',
    gallery: [
      { type: 'image', src: `${base}asb.jpg`, alt: 'ASB Rettungswache Frankfurt' },
      { type: 'image', src: `${base}asb2.jpeg`, alt: 'ASB Rettungswache Frankfurt Bild 2' },
    ],
  },
  {
    slug: 'villa-kennedy-frankfurt',
    title: 'Villa Kennedy',
    category: 'Premium Objekt',
    location: 'Frankfurt', year: '2025', area: '-',
    cover: `${base}villa.jpg`,
    description: 'Hochwertige Ausführung im gehobenen Objektbereich mit Fokus auf Details, saubere Übergänge und ein präzises Endergebnis.',
    scope: ['Untergrundvorbereitung', 'Präzise Detailausbildung', 'Saubere und termingerechte Ausführung'],
    projectLink: 'https://www.instagram.com/reel/DIwF3gZo1Xy/?utm_source=ig_web_button_share_sheet',
    gallery: [
      { type: 'image', src: `${base}villa.jpg`, alt: 'Villa Kennedy Referenzbild 1' },
      { type: 'image', src: `${base}villa2.jpg`, alt: 'Villa Kennedy Referenzbild 2' },
      { type: 'video', src: `${base}villavideo.mp4`, poster: `${base}villa.jpg`, alt: 'Villa Kennedy Video' },
    ],
  },
  {
    slug: 'gewerbeobjekt-singen',
    title: 'Gewerbeobjekt',
    category: 'Gewerbe',
    location: 'Singen (Baden-Württemberg)', year: '2025', area: '> 900 m²',
    cover: `${base}gewerbe2.jpg`,
    description: 'Großfläche im Gewerbebereich mit besonderer Logistik: Projektumsetzung auf ausdrückliche Anfrage inklusive 340 km Anreise.',
    scope: ['Großflächige Ausführung über 900 m²', 'Baustellenlogistik über weite Distanz', 'Termintreue trotz hohem Umfang'],
    projectLink: 'https://www.instagram.com/p/DZ0xiutCEec/?utm_source=ig_web_button_share_sheet',
    gallery: [
      { type: 'video', src: `${base}gewerbe.mp4`, poster: `${base}gewerbe2.jpg`, alt: 'Gewerbeobjekt Singen Video 1' },
      { type: 'image', src: `${base}gewerbe2.jpg`, alt: 'Gewerbeobjekt Singen Bild 1' },
      { type: 'image', src: `${base}gewerbe3.jpg`, alt: 'Gewerbeobjekt Singen Bild 2' },
      { type: 'image', src: `${base}gewerbe4.jpg`, alt: 'Gewerbeobjekt Singen Bild 3' },
      { type: 'image', src: `${base}gewerbe5.jpg`, alt: 'Gewerbeobjekt Singen Bild 4' },
      { type: 'image', src: `${base}gewerbe6.jpg`, alt: 'Gewerbeobjekt Singen Bild 5' },
      { type: 'video', src: `${base}gewerbe7.mp4`, poster: `${base}gewerbe8.jpg`, alt: 'Gewerbeobjekt Singen Video 2' },
      { type: 'image', src: `${base}gewerbe8.jpg`, alt: 'Gewerbeobjekt Singen Bild 6' },
    ],
  },
  {
    slug: 'feuerwehrwache-aschaffenburg',
    title: 'Feuerwehrwache',
    category: 'Öffentlicher Bau',
    location: 'Aschaffenburg', year: '2025', area: '500 m²',
    cover: `${base}Feuerwehrwache.jpg`,
    description: 'Ausführung der Bodenarbeiten in einer Feuerwehrwache mit belastbaren Flächen und präziser Abstimmung auf funktionale Anforderungen.',
    scope: ['Flächenausführung über 500 m²', 'Belastbare, praxisgerechte Lösung', 'Saubere Übergänge und robuste Details'],
    projectLink: 'https://www.instagram.com/p/DXMb3ZhCOea/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    gallery: [
      { type: 'image', src: `${base}Feuerwehrwache.jpg`, alt: 'Feuerwehrwache Bild 1' },
      { type: 'image', src: `${base}Feuerwehrwache2.jpg`, alt: 'Feuerwehrwache Bild 2' },
      { type: 'image', src: `${base}Feuerwehrwache3.jpg`, alt: 'Feuerwehrwache Bild 3' },
      { type: 'image', src: `${base}Feuerwehrwache4.jpg`, alt: 'Feuerwehrwache Bild 4' },
      { type: 'image', src: `${base}Feuerwehrwache5.jpg`, alt: 'Feuerwehrwache Bild 5' },
      { type: 'image', src: `${base}Feuerwehrwache6.jpg`, alt: 'Feuerwehrwache Bild 6' },
      { type: 'image', src: `${base}Feuerwehrwache7.jpg`, alt: 'Feuerwehrwache Bild 7' },
      { type: 'image', src: `${base}Feuerwehrwache8.jpg`, alt: 'Feuerwehrwache Bild 8' },
      { type: 'image', src: `${base}Feuerwehrwache9.jpg`, alt: 'Feuerwehrwache Bild 9' },
      { type: 'image', src: `${base}Feuerwehrwache10.jpg`, alt: 'Feuerwehrwache Bild 10' },
      { type: 'image', src: `${base}Feuerwehrwache11.jpg`, alt: 'Feuerwehrwache Bild 11' },
      { type: 'image', src: `${base}Feuerwehrwache12.jpg`, alt: 'Feuerwehrwache Bild 12' },
    ],
  },
  {
    slug: 'mehrfamilienhaeuser-naehe-aschaffenburg',
    title: 'Mehrfamilienhäuser',
    category: 'Wohnbau',
    location: 'Nähe Aschaffenburg', year: '2025', area: '1.000 m²',
    cover: `${base}Mehrfamilienhaus.jpg`,
    description: 'Mehrere Wohngebäude in einem Projektverbund mit großem Gesamtumfang und koordiniertem Ablauf über mehrere Einheiten.',
    scope: ['Ausführung in mehreren Häusern', 'Flächenleistung von rund 1.000 m²', 'Koordination über mehrere Bauabschnitte'],
    projectLink: 'https://www.instagram.com/reel/DSaODGXiCW1/?utm_source=ig_web_button_share_sheet',
    gallery: [
      { type: 'image', src: `${base}Mehrfamilienhaus.jpg`, alt: 'Mehrfamilienhäuser Bild' },
      { type: 'video', src: `${base}Mehrfamilienhaus.mp4`, poster: `${base}Mehrfamilienhaus.jpg`, alt: 'Mehrfamilienhäuser Video' },
    ],
  },
  {
    slug: 'wohnbau-eltville',
    title: 'Wohnbau / Objekt',
    category: 'Wohnbau',
    location: 'Eltville (Nähe Mainz)', year: '2025', area: '200 m²',
    cover: `${base}Wohnbau3.jpg`,
    description: 'Wohnbauprojekt mit Schlüter-BEKOTEC System für effizienten Aufbau und zuverlässige, langlebige Flächen im Alltag.',
    scope: ['Schlüter-BEKOTEC System', 'Ausführung auf 200 m²', 'Saubere Endausführung im Wohnbereich'],
    projectLink: 'https://www.instagram.com/p/DP4E-hlCJ1V/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    gallery: [
      { type: 'video', src: `${base}Wohnbau.mp4`, poster: `${base}Wohnbau3.jpg`, alt: 'Wohnbau Eltville Video 1' },
      { type: 'video', src: `${base}Wohnbau2.mp4`, poster: `${base}Wohnbau4.jpg`, alt: 'Wohnbau Eltville Video 2' },
      { type: 'image', src: `${base}Wohnbau3.jpg`, alt: 'Wohnbau Eltville Bild 1' },
      { type: 'image', src: `${base}Wohnbau4.jpg`, alt: 'Wohnbau Eltville Bild 2' },
    ],
  },
]
export const getProject = (s: string) => projects.find(x => x.slug === s)
