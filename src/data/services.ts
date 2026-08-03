export interface Service {
  slug: string
  title: string
  short: string
  tagline: string
  intro: string
  focus: boolean
  scope: string[]
  image: string
}

const base = import.meta.env.BASE_URL

export const services: Service[] = [
  {
    slug: 'abdichtung',
    title: 'Abdichtung',
    short: 'Katja Sprint & Schweißbahn',
    tagline: 'Sicherer Schutz gegen Bodenfeuchte.',
    focus: true,
    intro: 'Trockene Basis für jeden Aufbau. Katja-Sprint Abdichtungsbahn & Schweißbahn – sauber verschweißt und rissfrei.',
    scope: ['Untergrundprüfung', 'Katja-Sprint Abdichtungsbahn', 'Schweißbahn verschweißt', 'Wand- & Durchdringungsanschlüsse', 'Dichtigkeitsprüfung'],
    image: `${base}Schweißbahn.png`,
  },
  {
    slug: 'waermedaemmung',
    title: 'Wärmedämmung, Tackerplatte & Rolljet',
    short: 'Dämmung & Verlegesysteme',
    tagline: 'Wärme bleibt, wo sie hingehört.',
    focus: true,
    intro: 'Effiziente Dämmung mit Tackerplatte und Rolljet – lückenlos verlegt als perfekte Basis für die Fußbodenheizung.',
    scope: ['Passende Dämmstärken', 'Tackerplatten-System', 'Rolljet-Verlegesystem', 'Trittschall & Wärme kombiniert', 'Vorbereitung Heizung'],
    image: `${base}5.jpeg`,
  },
  {
    slug: 'fussbodenheizung',
    title: 'Fußbodenheizung',
    short: 'Tacker-, Noppen- & Schlüter-BECOTEC',
    tagline: 'Behagliche Wärme aus dem Boden.',
    focus: true,
    intro: 'Zertifizierter Schlüter-BECOTEC Fachbetrieb. Tacker-, Noppen- oder BECOTEC-System – hocheffizient und gleichmäßig.',
    scope: ['Systemberatung', 'Tackersystem', 'Noppensystem', 'Schlüter-BECOTEC', 'Druckprüfung & Protokoll'],
    image: `${base}Fußbodenheizung.png`,
  },
  {
    slug: 'estricharbeiten',
    title: 'Estricharbeiten',
    short: 'Zement- & Anhydritestrich',
    tagline: 'Die tragfähige Schicht für Ihren Boden.',
    focus: false,
    intro: 'Zement- und Anhydritestrich in präziser Ebenheit – abgestimmt auf Heizung und Oberboden.',
    scope: ['Zementestrich (CT)', 'Anhydritestrich (CA)', 'Heizestrich', 'Ebenheit nach DIN 18202', 'Restfeuchtemessung'],
    image: `${base}Estrich.png`,
  },
  {
    slug: 'oberboeden',
    title: 'Oberböden & Finish',
    short: 'Vinyl, Laminat & Parkett',
    tagline: 'Der letzte Schliff, der bleibt.',
    focus: false,
    intro: 'Vom robusten Vinyl bis zum edlen Parkett – sauber und passgenau verlegt.',
    scope: ['Vinyl (Klick & verklebt)', 'Laminat', 'Parkett', 'Sockelleisten & Profile', 'Feinreinigung'],
    image: `${base}Vinyl.png`,
  },
  {
    slug: 'epoxidharz',
    title: 'Epoxidharz-Beschichtung',
    short: 'Bodenbeschichtungen',
    tagline: 'Fugenlos, belastbar, industrietauglich.',
    focus: false,
    intro: 'Fugenlose, chemikalien- und abriebfeste Oberflächen für Garage, Werkstatt und Gewerbe.',
    scope: ['Untergrund fräsen/strahlen', 'Grundierung', 'Epoxidharz mehrlagig', 'Farb- & Chip-Systeme', 'Versiegelung'],
    image: `${base}Epoxidharz.png`,
  },
]
export const getService = (s: string) => services.find(x => x.slug === s)
