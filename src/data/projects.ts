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

const local = (name: string) => `/${name}.jpeg`

export const projects: Project[] = [
  {
    slug: 'wohnbereich-fussbodenheizung',
    title: 'Wohnbereich Fußbodenheizung',
    category: 'Heizsystem',
    location: 'Neubau Einfamilienhaus',
    year: '2026',
    area: '160 m²',
    cover: local('2'),
    before: local('1'),
    after: local('2'),
    description:
      'Vom vorbereiteten Untergrund bis zur sauber verlegten Heizschlange: dieser Wohnbereich zeigt den präzisen Aufbau einer modernen Fußbodenheizung im Neubau.',
    scope: ['Dämm- und Trennlage', 'Verlegeplan erstellt', 'Heizrohre exakt geführt', 'Bereit für Estrich', 'Komplette Abstimmung vor Ort'],
    gallery: [local('1'), local('2'), local('13'), local('14')],
  },
  {
    slug: 'flur-heizkreise',
    title: 'Flur mit Heizkreisen',
    category: 'Tackersystem',
    location: 'Mehrgeschossiges Wohnhaus',
    year: '2026',
    area: '85 m²',
    cover: local('4'),
    before: local('3'),
    after: local('4'),
    description:
      'Enger Grundriss, viele Anschlüsse, trotzdem sauber geführte Heizkreise. Das Projekt zeigt, wie präzise Planung auch in komplexen Bereichen funktioniert.',
    scope: ['Grundriss mit Treppenanschluss', 'Exakte Rohrabstände', 'Saubere Verteilung', 'Anschluss an Verteiler', 'Vorbereitung für nächsten Ausbau'],
    gallery: [local('3'), local('4'), local('15'), local('16')],
  },
  {
    slug: 'dachgeschoss-flaeche',
    title: 'Dachgeschoss Heizfläche',
    category: 'Ausbau',
    location: 'Dachgeschoss Neubau',
    year: '2026',
    area: '120 m²',
    cover: local('6'),
    before: local('5'),
    after: local('6'),
    description:
      'Große offene Fläche unter Dachschrägen mit gleichmäßig verlegtem Heizsystem. Ideal für effiziente Wärmeverteilung ohne sichtbare Technik.',
    scope: ['Offene Grundrissfläche', 'Heizrohre im sauberen Raster', 'Passend für geringen Aufbau', 'Baustellenlogistik koordiniert', 'Fläche estrichbereit'],
    gallery: [local('5'), local('6'), local('17'), local('18')],
  },
  {
    slug: 'sanierung-bestandsflaeche',
    title: 'Sanierung Bestandsfläche',
    category: 'Bodenaufbau',
    location: 'Wohnraumsanierung',
    year: '2026',
    area: '95 m²',
    cover: local('8'),
    before: local('7'),
    after: local('8'),
    description:
      'Vorher strukturieren, danach präzise aufbauen: diese Sanierungsfläche zeigt den sauberen Übergang vom vorbereiteten Untergrund zur verlegten Heiztechnik.',
    scope: ['Untergrund vorbereitet', 'Systemdämmung verlegt', 'Heizkreise installiert', 'Details an Anschlüssen gelöst', 'Bereit für Folgegewerke'],
    gallery: [local('7'), local('8'), local('19'), local('20')],
  },
  {
    slug: 'offene-wohnflaeche-neubau',
    title: 'Offene Wohnfläche Neubau',
    category: 'Komplettsystem',
    location: 'Neubau Wohnhaus',
    year: '2026',
    area: '140 m²',
    cover: local('10'),
    before: local('9'),
    after: local('10'),
    description:
      'Weite Räume brauchen saubere Linienführung. In diesem Neubau wurde die komplette Wohnfläche systematisch für eine ruhige, gleichmäßige Wärmeabgabe vorbereitet.',
    scope: ['Großfläche eingeteilt', 'Verlegeschema optimiert', 'Heizkreise sauber gelegt', 'Schnittstellen abgestimmt', 'Perfekt vorbereitet für Estrich'],
    gallery: [local('9'), local('10'), local('21'), local('22')],
  },
  {
    slug: 'mehrraum-loesung',
    title: 'Mehrraum-Lösung mit Heizkreisen',
    category: 'Wohnungsbau',
    location: 'Mehrraum-Ausbau',
    year: '2026',
    area: '110 m²',
    cover: local('12'),
    before: local('11'),
    after: local('12'),
    description:
      'Mehrere Räume, unterschiedliche Geometrien, eine durchdachte Lösung. Die Bildserie dokumentiert den sauberen Ausbau über mehrere Zonen hinweg.',
    scope: ['Aufteilung nach Räumen', 'Heizkreise je Zone optimiert', 'Saubere Übergänge', 'Baufortschritt dokumentiert', 'Klar vorbereitet für Endausbau'],
    gallery: [local('11'), local('12'), local('23'), local('24')],
  },
]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)