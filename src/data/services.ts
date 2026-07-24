export interface Service {
  slug: string
  title: string
  short: string
  tagline: string
  intro: string
  focus: boolean // Fokus-Hauptgewerk (große Kachel)
  scope: string[]
  benefits: { title: string; text: string }[]
  image: string
}

const local = (name: string) => `/${name}.jpeg`

export const services: Service[] = [
  {
    slug: 'abdichtung',
    title: 'Abdichtung',
    short: 'Katja Sprint & Schweißbahn',
    tagline: 'Der sichere Schutz gegen Bodenfeuchte.',
    focus: true,
    intro:
      'Eine dauerhaft trockene Basis ist die Grundlage jedes langlebigen Bodenaufbaus. Wir dichten Ihre Rohbetondecke fachgerecht gegen aufsteigende Feuchtigkeit ab – mit Katja-Sprint Abdichtungsbahn und Schweißbahn, sauber verschweißt und rissfrei.',
    scope: [
      'Untergrundprüfung & Vorbereitung',
      'Verlegung Katja-Sprint Abdichtungsbahn',
      'Schweißbahn-Systeme, flämmtechnisch verschweißt',
      'Anschlüsse an Wände und Durchdringungen',
      'Dokumentierte Dichtigkeitsprüfung',
    ],
    benefits: [
      { title: 'Rissfrei', text: 'Materialgerechte Verlegung ohne Schwachstellen.' },
      { title: 'Nach DIN', text: 'Ausführung normkonform und dokumentiert.' },
      { title: 'Aus einer Hand', text: 'Abdichtung als Teil des Komplettaufbaus.' },
    ],
    image: local('1'),
  },
  {
    slug: 'waermedaemmung',
    title: 'Wärmedämmung, Tackerplatte & Rolljet',
    short: 'Dämmung & Verlegesysteme',
    tagline: 'Wärme bleibt, wo sie hingehört.',
    focus: true,
    intro:
      'Effiziente Dämmung senkt Ihre Heizkosten und schafft die perfekte Basis für die Fußbodenheizung. Wir verlegen Wärmedämmung mit Tackerplatte und Rolljet-Systemen präzise und lückenlos.',
    scope: [
      'Auswahl passender Dämmstärken',
      'Verlegung Tackerplatten-System',
      'Rolljet-Verlegesystem für schnelle Ausführung',
      'Trittschall- & Wärmedämmung kombiniert',
      'Vorbereitung für die Heizungsverlegung',
    ],
    benefits: [
      { title: 'Effizient', text: 'Spürbar niedrigere Heizkosten.' },
      { title: 'Lückenlos', text: 'Keine Wärmebrücken im Aufbau.' },
      { title: 'Schnell', text: 'Rolljet für zügige Baustellen.' },
    ],
    image: local('3'),
  },
  {
    slug: 'fussbodenheizung',
    title: 'Fußbodenheizung',
    short: 'Tacker-, Noppen- & Schlüter-BECOTEC',
    tagline: 'Behagliche Wärme aus dem Boden.',
    focus: true,
    intro:
      'Als zertifizierter Fachbetrieb für Schlüter-BECOTEC verlegen wir Fußbodenheizungen hocheffizient und gleichmäßig – ob Tackersystem, Noppensystem oder das flachaufbauende BECOTEC-System.',
    scope: [
      'Beratung zum passenden Heizsystem',
      'Tackersystem für flexible Verlegung',
      'Noppensystem für schnelle Fixierung',
      'Schlüter-BECOTEC (geringe Aufbauhöhe)',
      'Druckprüfung & Übergabeprotokoll',
    ],
    benefits: [
      { title: 'Zertifiziert', text: 'Geprüfter Schlüter-BECOTEC Fachbetrieb.' },
      { title: 'Effizient', text: 'Gleichmäßige Wärmeverteilung.' },
      { title: 'Flach', text: 'Geringe Aufbauhöhe möglich.' },
    ],
    image: local('5'),
  },
  {
    slug: 'estricharbeiten',
    title: 'Estricharbeiten',
    short: 'Zement- & Anhydritestrich',
    tagline: 'Die tragfähige Schicht für Ihren Oberboden.',
    focus: false,
    intro:
      'Der Estrich verteilt Lasten und schafft die ebene Fläche für den finalen Bodenbelag. Wir liefern Zement- und Anhydritestrich in präziser Ebenheit – abgestimmt auf Heizung und Oberboden.',
    scope: [
      'Zementestrich (CT)',
      'Anhydrit-/Calciumsulfatestrich (CA)',
      'Heizestrich über Fußbodenheizung',
      'Ebenheit nach DIN 18202',
      'Restfeuchtemessung vor Belegung',
    ],
    benefits: [
      { title: 'Eben', text: 'Präzise Flächen nach Norm.' },
      { title: 'Belastbar', text: 'Tragfähig für jeden Oberboden.' },
      { title: 'Geprüft', text: 'Belegreife durch Feuchtemessung.' },
    ],
    image: local('7'),
  },
  {
    slug: 'oberboeden',
    title: 'Oberböden & Finish',
    short: 'Vinyl, Laminat & Parkett',
    tagline: 'Der letzte Schliff, der bleibt.',
    focus: false,
    intro:
      'Vom robusten Vinyl bis zum edlen Parkett – wir verlegen den sichtbaren Boden sauber und passgenau. Das Finish, das Ihren Räumen Charakter gibt.',
    scope: [
      'Vinyl (Klick & Vollverklebung)',
      'Laminat in allen Nutzungsklassen',
      'Parkett – geklebt oder schwimmend',
      'Sockelleisten & Übergangsprofile',
      'Feinreinigung zur Übergabe',
    ],
    benefits: [
      { title: 'Passgenau', text: 'Saubere Fugen und Kanten.' },
      { title: 'Auswahl', text: 'Vinyl, Laminat oder Parkett.' },
      { title: 'Komplett', text: 'Inklusive Leisten & Profilen.' },
    ],
    image: local('9'),
  },
  {
    slug: 'epoxidharz',
    title: 'Epoxidharz-Beschichtung',
    short: 'Bodenbeschichtungen',
    tagline: 'Fugenlos, belastbar, industrietauglich.',
    focus: false,
    intro:
      'Für Garagen, Werkstätten und Gewerbeflächen bieten Epoxidharz-Systeme eine fugenlose, chemikalien- und abriebfeste Oberfläche – langlebig und leicht zu reinigen.',
    scope: [
      'Untergrundvorbereitung (Fräsen/Kugelstrahlen)',
      'Grundierung & Kratzspachtelung',
      'Epoxidharz-Beschichtung mehrlagig',
      'Farb- & Chip-Systeme nach Wunsch',
      'Versiegelung für lange Haltbarkeit',
    ],
    benefits: [
      { title: 'Fugenlos', text: 'Hygienisch und pflegeleicht.' },
      { title: 'Robust', text: 'Chemikalien- & abriebfest.' },
      { title: 'Gewerbe', text: 'Für hohe Belastung ausgelegt.' },
    ],
    image: local('11'),
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
