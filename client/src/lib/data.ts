// B2CyberSec V2 — Frosted Daylight Design
// Company data, services, team, and image assets

export const COMPANY = {
  name: "B2CyberSec GmbH",
  ceo: "Boris Bošnjak",
  address: "Werner-von-Siemens-Str. 6, 86159 Augsburg",
  phone: "+49 (0) 821 90 789 500",
  email: "info@b2cybersec.com",
  calendly: "https://calendly.com/b2cybersec/kontakt",
  hrb: "HRB 33545",
  ustId: "DE 323792746",
  founded: "2019",
  experience: "20+ Jahre",
  teamSize: 9,
  pentesters: 8,
  parent: "Uspor GmbH",
};

export const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/6kHZkEnGd8BN72xVdexJiX/b2cybersec_logo_full_421cf6d0.png";

export const IMAGES = {
  heroBg:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/5nFVTrdFTUeTkXc5tMPXSN/hero-bg-light-L8yU5F75VGet3K8AQ6W9bR.webp",
  servicesGlow:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/5nFVTrdFTUeTkXc5tMPXSN/services-glow-cLPtwkp2yYtvaYUGfu24Sv.webp",
  aboutVisual:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/5nFVTrdFTUeTkXc5tMPXSN/about-visual-VfxgLLSWQfzCHbFGrunCsD.webp",
  nis2Visual:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/5nFVTrdFTUeTkXc5tMPXSN/nis2-visual-VChNpy6UbBoTkrREicupDA.webp",
};

export const NIS2_DATA = {
  lawDate: "6. Dezember 2025",
  bsiFrist: "6. März 2026",
  affectedCompanies: "~29.500",
  sectors: 18,
  maxFine: "10 Mio. €",
  finePercent: "2% des Jahresumsatzes",
  nonCompliant: "~80%",
};

export const SERVICES = [
  {
    id: "security-quick-check",
    name: "Security Quick Check",
    subtitle: "NIS-2 Gap-Analyse",
    description:
      "Vollständige NIS-2 Gap-Analyse mit priorisierter Roadmap. In 14 Tagen wissen Sie, wo Sie stehen.",
    price: "4.900 €",
    category: "einmalig",
    features: [
      "Vollständige NIS-2 Gap-Analyse",
      "Priorisierte Roadmap",
      "Management-Summary",
      "Geld-zurück-Garantie",
    ],
    icon: "Shield" as const,
    gridSpan: "md:col-span-2 md:row-span-2",
  },
  {
    id: "pentesting",
    name: "Pentesting",
    subtitle: "Schwachstellenanalyse",
    description:
      "Externer & interner Penetrationstest durch zertifizierte Partner. Verständlicher Bericht + Re-Test.",
    price: "ab 3.500 €",
    category: "einmalig",
    features: [
      "Externer + interner Test",
      "Social Engineering",
      "Executive Report",
      "Kostenloser Re-Test",
    ],
    icon: "Search" as const,
    gridSpan: "md:col-span-1 md:row-span-1",
  },
  {
    id: "ciso-as-a-service",
    name: "CISO as a Service",
    subtitle: "Ihr externer Sicherheitschef",
    description:
      "Strategische IT-Sicherheitsberatung: 8h/Monat, Board-Reporting, Incident-Koordination. CISO ohne Vollzeitkosten.",
    price: "ab 2.490 €",
    priceNote: "pro Monat",
    category: "abo",
    features: [
      "8h strategische Beratung/Monat",
      "Board-Reporting",
      "Incident-Koordination",
      "Sicherheitsstrategie",
    ],
    icon: "UserCog" as const,
    gridSpan: "md:col-span-1 md:row-span-1",
  },
  {
    id: "managed-security",
    name: "Managed Security",
    subtitle: "24/7 Überwachung (MSSP)",
    description:
      "Rund-um-die-Uhr Überwachung Ihrer IT-Systeme. Monatlicher Statusbericht und Incident-Hotline.",
    price: "ab 1.990 €",
    priceNote: "pro Monat",
    category: "abo",
    features: [
      "24/7 Security Monitoring",
      "Bedrohungserkennung in Echtzeit",
      "Incident-Hotline",
      "Monatlicher Statusbericht",
    ],
    icon: "Eye" as const,
    gridSpan: "md:col-span-1 md:row-span-2",
  },
  {
    id: "compliance-care",
    name: "Compliance Care",
    subtitle: "Dauerhafte NIS-2 Konformität",
    description:
      "Monatliche Compliance-Überwachung, Mitarbeiterschulungen und Richtlinien-Updates — alles inklusive.",
    price: "ab 990 €",
    priceNote: "pro Monat",
    category: "abo",
    features: [
      "Monatliche Überwachung",
      "Mitarbeiterschulungen",
      "Richtlinien-Updates",
      "Audit-Vorbereitung",
    ],
    icon: "FileCheck" as const,
    gridSpan: "md:col-span-1 md:row-span-1",
  },
  {
    id: "professional-services",
    name: "Professional Services",
    subtitle: "Experten-Vermittlung",
    description:
      "Spezialisierte Security-Ingenieure für Ihr Projekt. Nearshore ab 65€/h, Onshore ab 95€/h.",
    price: "ab 65 €/h",
    category: "stundenbasis",
    features: [
      "Network & Cloud Security",
      "SD-WAN, SASE & Zero Trust",
      "Nearshore & Onshore",
      "Ab 48h verfügbar",
    ],
    icon: "Users" as const,
    gridSpan: "md:col-span-1 md:row-span-1",
  },
];

export const STATS = [
  { value: "20+", label: "Jahre Erfahrung" },
  { value: "9", label: "Security-Experten" },
  { value: "150+", label: "Projekte abgeschlossen" },
  { value: "99.9%", label: "Verfügbarkeit MSSP" },
];

export const TEAM = [
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
  { label: "Services", href: "#services" },
  { label: "NIS-2", href: "#nis2" },
  { label: "Über uns", href: "#about" },
  { label: "Kontakt", href: "#contact" },
];

export const ADVANTAGES = [
  {
    icon: "Award" as const,
    title: "Zertifizierte Experten",
    desc: "8 zertifizierte Pentester und Security-Spezialisten mit internationaler Erfahrung.",
  },
  {
    icon: "Zap" as const,
    title: "Schnelle Umsetzung",
    desc: "Security Quick Check in 14 Tagen. Pentesting-Start innerhalb von 48 Stunden möglich.",
  },
  {
    icon: "HeartHandshake" as const,
    title: "Persönliche Betreuung",
    desc: "Fester Ansprechpartner, keine Callcenter. Direkte Kommunikation auf Augenhöhe.",
  },
  {
    icon: "ShieldCheck" as const,
    title: "Geld-zurück-Garantie",
    desc: "Beim Security Quick Check: Wenn Sie nicht zufrieden sind, erhalten Sie Ihr Geld zurück.",
  },
  {
    icon: "Building2" as const,
    title: "Fokus auf KMU",
    desc: "Pragmatische Lösungen für den Mittelstand — keine Enterprise-Overheads, faire Preise.",
  },
  {
    icon: "Clock" as const,
    title: "20+ Jahre Erfahrung",
    desc: "Tiefgreifendes Know-how in Netzwerksicherheit, Compliance und Incident Response.",
  },
];
