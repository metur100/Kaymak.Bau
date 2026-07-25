export interface Project {
  slug: string
  title: string
  category: string
  location: string
  year: string
  area: string
  cover: string
  before: string
  after: string
  description: string
  scope: string[]
  gallery: string[]
}

const base = import.meta.env.BASE_URL

export const projects: Project[] = [
  {
    slug: 'altbau-komplettaufbau',
    title: 'Altbau Komplettaufbau',
    category: 'Komplettpaket',
    location: 'Region Mitte', year: '2025', area: '180 m²',
    cover: `${base}9.jpeg`,
    before: `${base}10.jpeg`,
    after: `${base}11.jpeg`,
    description: 'Kompletter Bodenaufbau von der Abdichtung bis zum Parkett – alle Schichten aus einer Hand.',
    scope: ['Abdichtung Katja Sprint', 'Wärmedämmung & Tackerplatte', 'Fußbodenheizung BECOTEC', 'Heizestrich', 'Parkett geklebt'],
    gallery: [`${base}12.jpeg`, `${base}13.jpeg`, `${base}14.jpeg`],
  },
  {
    slug: 'gewerbehalle-epoxid',
    title: 'Gewerbehalle Epoxidharz',
    category: 'Epoxidharz',
    location: 'Gewerbegebiet', year: '2025', area: '640 m²',
    cover: `${base}15.jpeg`,
    before: `${base}16.jpeg`,
    after: `${base}17.jpeg`,
    description: 'Fugenlose Epoxidharz-Beschichtung – chemikalien- und abriebfest für den täglichen Gewerbebetrieb.',
    scope: ['Untergrund gefräst', 'Grundierung', 'Epoxidharz mehrlagig', 'Chip-System', 'Versiegelung'],
    gallery: [`${base}18.jpeg`, `${base}19.jpeg`, `${base}20.jpeg`],
  },
  {
    slug: 'neubau-fussbodenheizung',
    title: 'Neubau Fußbodenheizung',
    category: 'Fußbodenheizung',
    location: 'Neubaugebiet', year: '2024', area: '145 m²',
    cover: `${base}21.jpeg`,
    before: `${base}22.jpeg`,
    after: `${base}23.jpeg`,
    description: 'Effiziente Schlüter-BECOTEC Fußbodenheizung bei geringer Aufbauhöhe, kombiniert mit hochwertigem Vinyl.',
    scope: ['Dämmung Rolljet', 'Schlüter-BECOTEC', 'Druckprüfung', 'Anhydritestrich', 'Vinyl verklebt'],
    gallery: [`${base}24.jpeg`, `${base}1.jpeg`, `${base}2.jpeg`],
  },
  {
    slug: 'nassbereich-abdichtung',
    title: 'Nassbereich Abdichtung',
    category: 'Abdichtung',
    location: 'Region Süd', year: '2024', area: '38 m²',
    cover: `${base}3.jpeg`,
    before: `${base}4.jpeg`,
    after: `${base}5.jpeg`,
    description: 'Fachgerechte Abdichtung gegen Feuchtigkeit – sauber verschweißt und dicht an allen Anschlüssen.',
    scope: ['Untergrundprüfung', 'Katja Sprint', 'Wandanschlüsse', 'Dichtigkeitsprüfung', 'Übergabe'],
    gallery: [`${base}6.jpeg`, `${base}7.jpeg`, `${base}8.jpeg`],
  },
]
export const getProject = (s: string) => projects.find(x => x.slug === s)
