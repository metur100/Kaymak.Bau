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

export const projects: Project[] = [
  {
    slug: 'altbau-komplettaufbau',
    title: 'Altbau Komplettaufbau',
    category: 'Komplettpaket',
    location: 'Region Mitte', year: '2025', area: '180 m²',
    cover: '/9.jpeg',
    before: '/10.jpeg',
    after: '/11.jpeg',
    description: 'Kompletter Bodenaufbau von der Abdichtung bis zum Parkett – alle Schichten aus einer Hand.',
    scope: ['Abdichtung Katja Sprint', 'Wärmedämmung & Tackerplatte', 'Fußbodenheizung BECOTEC', 'Heizestrich', 'Parkett geklebt'],
    gallery: ['/12.jpeg', '/13.jpeg', '/14.jpeg'],
  },
  {
    slug: 'gewerbehalle-epoxid',
    title: 'Gewerbehalle Epoxidharz',
    category: 'Epoxidharz',
    location: 'Gewerbegebiet', year: '2025', area: '640 m²',
    cover: '/15.jpeg',
    before: '/16.jpeg',
    after: '/17.jpeg',
    description: 'Fugenlose Epoxidharz-Beschichtung – chemikalien- und abriebfest für den täglichen Gewerbebetrieb.',
    scope: ['Untergrund gefräst', 'Grundierung', 'Epoxidharz mehrlagig', 'Chip-System', 'Versiegelung'],
    gallery: ['/18.jpeg', '/19.jpeg', '/20.jpeg'],
  },
  {
    slug: 'neubau-fussbodenheizung',
    title: 'Neubau Fußbodenheizung',
    category: 'Fußbodenheizung',
    location: 'Neubaugebiet', year: '2024', area: '145 m²',
    cover: '/21.jpeg',
    before: '/22.jpeg',
    after: '/23.jpeg',
    description: 'Effiziente Schlüter-BECOTEC Fußbodenheizung bei geringer Aufbauhöhe, kombiniert mit hochwertigem Vinyl.',
    scope: ['Dämmung Rolljet', 'Schlüter-BECOTEC', 'Druckprüfung', 'Anhydritestrich', 'Vinyl verklebt'],
    gallery: ['/24.jpeg', '/1.jpeg', '/2.jpeg'],
  },
  {
    slug: 'nassbereich-abdichtung',
    title: 'Nassbereich Abdichtung',
    category: 'Abdichtung',
    location: 'Region Süd', year: '2024', area: '38 m²',
    cover: '/3.jpeg',
    before: '/4.jpeg',
    after: '/5.jpeg',
    description: 'Fachgerechte Abdichtung gegen Feuchtigkeit – sauber verschweißt und dicht an allen Anschlüssen.',
    scope: ['Untergrundprüfung', 'Katja Sprint', 'Wandanschlüsse', 'Dichtigkeitsprüfung', 'Übergabe'],
    gallery: ['/6.jpeg', '/7.jpeg', '/8.jpeg'],
  },
]
export const getProject = (s: string) => projects.find(x => x.slug === s)
