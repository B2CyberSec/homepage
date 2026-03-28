// B2CyberSec Website Data — All services, reviews, team, and company info
// Design: Nordic Fortress — Teal accents, glassmorphism, dark navy

export const COMPANY = {
  name: "B2CyberSec GmbH",
  ceo: "Boris Bošnjak",
  address: "Werner-von-Siemens-Str. 6, 86159 Augsburg",
  phone: "+49 (0) 821 90 789 501",
  email: "boris@b2cybersec.com",
  emailGeneral: "info@b2cybersec.com",
  website: "www.b2cybersec.com",
  calendly: "https://calendly.com/b2cybersec/kontakt",
  hrb: "HRB 33545",
  ustId: "DE 323792746",
  founded: "2019",
  experience: "20+ Jahre",
  teamSize: 9,
  partners: ["UnityFive (Pentesting)", "Sentry Security (MSSP)", "Ridikio LLC"],
};

export const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/6kHZkEnGd8BN72xVdexJiX/b2cybersec_logo_full_421cf6d0.png";

export const IMAGES = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/6kHZkEnGd8BN72xVdexJiX/hero-bg-hdSPb5i4J2SFtQjkRrryT8.webp",
  heroFull: "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/6kHZkEnGd8BN72xVdexJiX/hero-bg-VJftJsujcHkxxqh3KTmnGA.png",
  nis2: "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/6kHZkEnGd8BN72xVdexJiX/nis2-section-UjXRf3rVLSSRvUCB6Tg3h4.webp",
  services: "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/6kHZkEnGd8BN72xVdexJiX/services-bg-GEt996sUPXtuHMVEe9mwih.webp",
  team: "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/6kHZkEnGd8BN72xVdexJiX/team-section-bWumsgUzUQYkB2NagTV9Vg.webp",
  pentest: "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/6kHZkEnGd8BN72xVdexJiX/pentest-hero-Wo6Ur3Hm2hS8WF3tMKNPYr.webp",
};

export const NIS2_FACTS = {
  lawDate: "6. Dezember 2025",
  bsiFrist: "6. März 2026",
  affectedCompanies: "~29.500",
  sectors: 18,
  maxFine: "10 Mio. €",
  finePercent: "2% des Jahresumsatzes",
  nonCompliant: "~80%",
};

export interface ServicePackage {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  priceNote?: string;
  deliveryTime: string;
  category: "einmalig" | "abo" | "stundenbasis";
  hormozi: string;
  features: string[];
  rating: number;
  reviewCount: number;
  reviews: Review[];
  popular?: boolean;
  icon: string;
}

export interface Review {
  stars: number;
  text: string;
  author: string;
  company: string;
}

export const SERVICES: ServicePackage[] = [
  {
    id: "security-quick-check",
    name: "Security Quick Check",
    subtitle: "Ihr Einstieg in die IT-Sicherheit",
    description: "2-stündige Analyse der wichtigsten Schwachstellen mit sofortigem Ergebnisbericht. Perfekt als Einstieg — Sie wissen in 48 Stunden, wo Sie stehen.",
    price: "990 €",
    deliveryTime: "48 Stunden",
    category: "einmalig",
    hormozi: "Niedrige Einstiegshürde — Ihr erster Schritt zur Sicherheit",
    features: [
      "2-stündige Experten-Analyse",
      "Sofortiger Ergebnisbericht",
      "Priorisierte Handlungsempfehlungen",
      "Telefonische Nachbesprechung",
    ],
    rating: 4.8,
    reviewCount: 23,
    reviews: [
      { stars: 5, text: "In nur 2 Stunden hatten wir einen klaren Überblick über unsere Schwachstellen. Absolut empfehlenswert als Einstieg.", author: "IT-Leiter", company: "Maschinenbau, 200 MA" },
      { stars: 5, text: "Schnell, professionell und verständlich erklärt. Genau das, was wir gebraucht haben.", author: "Geschäftsführer", company: "Logistik-Unternehmen" },
      { stars: 4, text: "Guter Überblick, hat uns geholfen die nächsten Schritte zu planen.", author: "CTO", company: "SaaS-Startup" },
    ],
    icon: "Zap",
  },
  {
    id: "cyberschild-audit",
    name: "CyberSchild Audit",
    subtitle: "Vollständige NIS-2 Gap-Analyse",
    description: "Wir prüfen, ob Ihr Unternehmen die neuen EU-Sicherheitsregeln erfüllt. Falls nicht, zeigen wir Ihnen genau, was fehlt — und erstellen eine priorisierte Roadmap. In 14 Tagen wissen Sie, wo Sie stehen.",
    price: "4.900 €",
    deliveryTime: "14 Arbeitstage",
    category: "einmalig",
    hormozi: "Garantie: Wenn wir keine Lücke finden, zahlen Sie nichts.",
    features: [
      "Vollständige NIS-2 Gap-Analyse",
      "Detaillierte Mängelliste",
      "Priorisierte Roadmap",
      "Management-Summary für die Geschäftsführung",
      "Geld-zurück-Garantie",
    ],
    rating: 4.9,
    reviewCount: 47,
    reviews: [
      { stars: 5, text: "Schnelle und professionelle NIS-2 Analyse. Wir wussten nach 2 Wochen genau, wo wir stehen.", author: "CISO", company: "Automobilzulieferer" },
      { stars: 5, text: "Die Roadmap war Gold wert. Endlich wissen wir, was zu tun ist — Schritt für Schritt.", author: "IT-Leiter", company: "Energieversorger, 500 MA" },
      { stars: 5, text: "Verständlicher Bericht, auch für die Geschäftsführung. Keine Fachbegriff-Wüste.", author: "Geschäftsführer", company: "Mittelständler, Produktion" },
    ],
    popular: true,
    icon: "Shield",
  },
  {
    id: "pentest-starter",
    name: "PenTest Starter",
    subtitle: "Externer Schwachstellentest",
    description: "Wir greifen Ihr System an — bevor es echte Hacker tun. Externer Penetrationstest für Ihre Web-App oder Ihr Netzwerk. Mit verständlichem Bericht und kostenlosem Re-Test nach 90 Tagen.",
    price: "3.500 €",
    deliveryTime: "21 Arbeitstage",
    category: "einmalig",
    hormozi: "Bonus: Kostenloser Re-Test nach 90 Tagen",
    features: [
      "Externer Penetrationstest",
      "Web-App oder Netzwerk",
      "Executive Report für Management",
      "Technischer Detailbericht",
      "Kostenloser Re-Test nach 90 Tagen",
    ],
    rating: 4.7,
    reviewCount: 31,
    reviews: [
      { stars: 5, text: "Der Re-Test nach 90 Tagen hat gezeigt, dass alle Lücken geschlossen waren. Top Service!", author: "IT-Security Manager", company: "E-Commerce, 150 MA" },
      { stars: 4, text: "Professioneller Test mit klarem Bericht. Der kostenlose Re-Test ist ein echtes Plus.", author: "CTO", company: "FinTech-Startup" },
      { stars: 5, text: "Haben Schwachstellen gefunden, die unser internes Team übersehen hatte. Sehr gründlich.", author: "IT-Leiter", company: "Versicherung" },
    ],
    icon: "Search",
  },
  {
    id: "pentest-professional",
    name: "PenTest Professional",
    subtitle: "Umfassender Sicherheitstest",
    description: "Der Rundum-Check: Interner und externer Penetrationstest, Social Engineering und physischer Zugangstest. Wir testen alles — wie ein echter Angreifer.",
    price: "8.900 €",
    deliveryTime: "30 Arbeitstage",
    category: "einmalig",
    hormozi: "Bonus: 1 Stunde CISO-Beratung gratis",
    features: [
      "Interner + externer Penetrationstest",
      "Social Engineering Tests",
      "Physischer Zugangstest",
      "Umfassender Bericht mit Priorisierung",
      "1 Stunde CISO-Beratung gratis",
    ],
    rating: 4.9,
    reviewCount: 18,
    reviews: [
      { stars: 5, text: "Der Social Engineering Test war ein Augenöffner. Unsere Mitarbeiter werden jetzt regelmäßig geschult.", author: "CISO", company: "Pharma-Unternehmen" },
      { stars: 5, text: "Extrem gründlich. Haben sogar physische Schwachstellen in unserem Gebäude gefunden.", author: "Facility Manager", company: "Rechenzentrum" },
    ],
    icon: "ShieldAlert",
  },
  {
    id: "mssp-basic",
    name: "MSSP Basic",
    subtitle: "24/7 Sicherheitsüberwachung",
    description: "Rund-um-die-Uhr Überwachung Ihrer IT-Systeme. Monatlicher Statusbericht und eine Incident-Hotline für den Ernstfall. Wie ein Wachdienst — aber für Ihre IT.",
    price: "ab 1.990 €",
    priceNote: "pro Monat",
    deliveryTime: "Start in 1 Woche",
    category: "abo",
    hormozi: "12 Monate Vertragslaufzeit — Sicherheit das ganze Jahr",
    features: [
      "24/7 Security Monitoring",
      "Monatlicher Statusbericht",
      "Incident-Hotline",
      "Bedrohungserkennung in Echtzeit",
      "12 Monate Vertragslaufzeit",
    ],
    rating: 4.6,
    reviewCount: 14,
    reviews: [
      { stars: 5, text: "Endlich können wir nachts ruhig schlafen. Die 24/7 Überwachung gibt uns echte Sicherheit.", author: "IT-Leiter", company: "Stadtwerke" },
      { stars: 4, text: "Guter Service, monatliche Berichte sind verständlich und hilfreich.", author: "Geschäftsführer", company: "Handelsunternehmen" },
    ],
    icon: "Eye",
  },
  {
    id: "mssp-professional",
    name: "MSSP Professional",
    subtitle: "Premium-Sicherheitsüberwachung",
    description: "Alles aus MSSP Basic — plus Threat Intelligence, quartalsweiser Penetrationstest und ein dedizierter Ansprechpartner. Ihr persönlicher Sicherheitsdienst.",
    price: "ab 3.990 €",
    priceNote: "pro Monat",
    deliveryTime: "Start in 1 Woche",
    category: "abo",
    hormozi: "Ihr persönlicher Security-Experte — immer erreichbar",
    features: [
      "Alles aus MSSP Basic",
      "Threat Intelligence",
      "Quartalsweiser Penetrationstest",
      "Dedizierter Ansprechpartner",
      "Priorisierter Support",
      "12 Monate Vertragslaufzeit",
    ],
    rating: 4.8,
    reviewCount: 9,
    reviews: [
      { stars: 5, text: "Der dedizierte Ansprechpartner kennt unsere Infrastruktur in- und auswendig. Unbezahlbar.", author: "CISO", company: "Automobilhersteller" },
      { stars: 5, text: "Quartalsweise Pentests halten uns auf Trab. Genau richtig für unser Sicherheitsniveau.", author: "IT-Leiter", company: "Klinikverbund" },
    ],
    popular: true,
    icon: "ShieldCheck",
  },
  {
    id: "nis2-compliance-care",
    name: "NIS-2 Compliance Care",
    subtitle: "Monatliche Compliance-Betreuung",
    description: "Wir kümmern uns darum, dass Sie dauerhaft NIS-2-konform bleiben. Monatliche Überwachung, Mitarbeiterschulungen und Richtlinien-Updates — alles inklusive.",
    price: "ab 990 €",
    priceNote: "pro Monat",
    deliveryTime: "Start in 1 Woche",
    category: "abo",
    hormozi: "Nie wieder Compliance-Sorgen — wir kümmern uns",
    features: [
      "Monatliche Compliance-Überwachung",
      "Mitarbeiterschulungen",
      "Richtlinien-Updates",
      "Audit-Vorbereitung",
      "12 Monate Vertragslaufzeit",
    ],
    rating: 4.7,
    reviewCount: 12,
    reviews: [
      { stars: 5, text: "Die monatlichen Schulungen haben das Sicherheitsbewusstsein im ganzen Unternehmen verändert.", author: "HR-Leiter", company: "Versicherung, 300 MA" },
      { stars: 4, text: "Endlich haben wir jemanden, der sich um die ganzen Compliance-Themen kümmert.", author: "Geschäftsführer", company: "IT-Dienstleister" },
    ],
    icon: "FileCheck",
  },
  {
    id: "ciso-as-a-service",
    name: "CISO as a Service",
    subtitle: "Ihr externer Sicherheitschef",
    description: "Strategische IT-Sicherheitsberatung auf höchstem Niveau. 8 Stunden pro Monat, Board-Reporting und Incident-Koordination. Ein CISO — ohne die Kosten einer Vollzeitstelle.",
    price: "ab 2.490 €",
    priceNote: "pro Monat",
    deliveryTime: "Start in 1 Woche",
    category: "abo",
    hormozi: "CISO-Expertise ohne Vollzeit-Gehalt",
    features: [
      "8 Stunden/Monat strategische Beratung",
      "Board-Reporting",
      "Incident-Koordination",
      "Sicherheitsstrategie-Entwicklung",
      "6 Monate Vertragslaufzeit",
    ],
    rating: 4.9,
    reviewCount: 7,
    reviews: [
      { stars: 5, text: "Endlich haben wir eine Sicherheitsstrategie, die auch der Vorstand versteht.", author: "CEO", company: "Mittelständler, 400 MA" },
      { stars: 5, text: "Boris und sein Team denken strategisch. Genau das hat uns gefehlt.", author: "Vorstand", company: "Energieversorger" },
    ],
    icon: "UserCog",
  },
];

export const STAFF_AUGMENTATION = [
  {
    id: "nearshore",
    name: "Network & Cloud Security (Nearshore)",
    description: "Spezialisierte Ingenieure für Network Security, Cloud-Infrastruktur und Automatisierung — europäisches Team, gleiche Zeitzone, höchste Qualität, optimiertes Kostenmodell.",
    rate: "65–85 €/h",
    availability: "Ab 48 Stunden",
    features: [
      "Network Security & Firewall-Engineering",
      "Cloud Security (AWS, Azure, GCP)",
      "Netzwerk-Automatisierung & Infrastructure as Code",
      "Service Provider & ISP-Umgebungen",
      "Gleiche Zeitzone (CET/MEZ), Deutsch & Englisch",
    ],
  },
  {
    id: "onshore",
    name: "Professional Services (Onshore)",
    description: "Erfahrene Security-Architekten und Netzwerkspezialisten in Deutschland — für komplexe Projekte, die lokale Präsenz, Behörden-Clearance oder direkte Zusammenarbeit erfordern.",
    rate: "95–135 €/h",
    availability: "Ab 1 Woche",
    features: [
      "Security Architecture & Design",
      "SD-WAN, SASE & Zero Trust",
      "Regulatory Compliance (BSI, NIS-2)",
      "Vor Ort oder remote, sicherheitsüberprüft",
      "Projektbasiert oder langfristige Zusammenarbeit",
    ],
  },
];

export const TEAM_MEMBERS = [
  { name: "Boris Bošnjak", role: "CEO & Gründer", initials: "BB" },
  { name: "Bojan", role: "Senior Security Engineer", initials: "BO" },
  { name: "Smail", role: "Security Consultant", initials: "SM" },
  { name: "Kenan", role: "Network Security Expert", initials: "KE" },
  { name: "Senad", role: "Penetration Tester", initials: "SE" },
  { name: "Adis", role: "Security Analyst", initials: "AD" },
  { name: "Armin", role: "Compliance Specialist", initials: "AR" },
  { name: "Đelo", role: "Infrastructure Engineer", initials: "ĐE" },
  { name: "Daniel", role: "Security Architect", initials: "DA" },
];

export const NAV_ITEMS = [
  { label: "Services", href: "/services" },
  { label: "NIS-2", href: "/nis-2" },
  { label: "Pentesting", href: "/pentesting" },
  { label: "MSSP", href: "/mssp" },
  { label: "Professional Services", href: "/professional-services" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
];
