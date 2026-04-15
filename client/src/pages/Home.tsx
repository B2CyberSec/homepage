/*
Design Philosophy Reminder: Light editorial landing page based on the preferred reference.
Huge centered typography, restrained blue accents, generous whitespace,
clear package hierarchy and structured machine-readable content.
*/
import type { FormEvent, PropsWithChildren } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";

const partnerBadges = ["Cisco", "Palo Alto", "Check Point", "CompTIA", "BSI"];

const quickStats = [
  { value: "115 €/h", label: "Professional Services, remote-first und on-demand" },
  { value: "20+", label: "Jahre Erfahrung von Boris Bosnjak und dem Team" },
  { value: "3", label: "klare Leistungssäulen für Security, Compliance und Tests" },
];

const corePillars = [
  {
    id: "ps",
    eyebrow: "Professional Services",
    title: "IT Network & Security Experten on-demand.",
    price: "115 €/h",
    description:
      "Erfahrene Spezialisten für Architektur, Betrieb, Troubleshooting und Sicherheitsprojekte. Remote-first, schnell verfügbar und für klar abgegrenzte Aufgaben sofort einsetzbar.",
    bullets: [
      "Remote-first Delivery mit minimalem Onsite-Bedarf",
      "Cisco, Palo Alto und Check Point Expertise",
      "Senior-Level Unterstützung für Projekte und Engpässe",
    ],
  },
  {
    id: "nis2",
    eyebrow: "NIS-2 Compliance",
    title: "Readiness mit klaren Paketen und klaren Entscheidungen.",
    price: "3 Pakete",
    description:
      "B2CyberSec strukturiert den Einstieg in die NIS-2-Readiness, priorisiert Lücken und leitet konkrete nächste Maßnahmen für Management, Governance und technische Umsetzung ab.",
    bullets: [
      "Readiness Check als kompakter Einstieg",
      "Readiness Sprint für beschleunigte Vorbereitung",
      "Readiness Plus für vertiefte Umsetzungsreife",
    ],
  },
  {
    id: "pentest",
    eyebrow: "Penetration Testing",
    title: "Gestaffelte Tests für reale Angriffsflächen.",
    price: "ab 3.990€",
    description:
      "Technische Sicherheitsprüfungen mit strukturiertem Scope, zertifizierter Methodik und klarer Priorisierung der Ergebnisse für Unternehmen mit konkretem Handlungsbedarf.",
    bullets: [
      "Mini 3T, Mid 5T, Large 20T",
      "Public Test 1T als Add-on oder fokussierter Außenblick",
      "Zertifizierte Ethical Hacker mit praxisnaher Ergebnisdarstellung",
    ],
  },
];

const nis2Packages = [
  {
    name: "Readiness Check",
    subtitle: "Kompakter Einstieg",
    price: "2.490€",
    description:
      "Schnelle Standortbestimmung für Unternehmen, die ihre Betroffenheit, wesentliche Lücken und die nächsten priorisierten Schritte klar erfassen müssen.",
  },
  {
    name: "Readiness Sprint",
    subtitle: "Beschleunigte Vorbereitung",
    price: "17.900€",
    description:
      "Strukturierte Gap-Bewertung, Priorisierung und belastbare Entscheidungsgrundlage für Management und Fachbereiche in kurzer Zeit.",
  },
  {
    name: "Readiness Plus",
    subtitle: "Vertiefte Reife",
    price: "27.900€",
    description:
      "Umfassenderer Rahmen für Governance, technische Maßnahmen, Zuständigkeiten und belastbare Vorbereitung der nächsten Umsetzungsschritte.",
  },
];

const pentestPackages = [
  {
    name: "Mini",
    duration: "3T",
    price: "3.990€",
    description: "Fokussierter Test für klar begrenzte Anwendungen, Schnittstellen oder Services.",
  },
  {
    name: "Mid",
    duration: "5T",
    price: "6.490€",
    description: "Mehr Prüftiefe für zentrale Systeme, Plattformen oder segmentierte Umgebungen.",
  },
  {
    name: "Large",
    duration: "20T",
    price: "24.900€",
    description: "Umfassender Testumfang für komplexe IT-Landschaften und kritische Services.",
  },
  {
    name: "Public Test",
    duration: "1T",
    price: "1.490€",
    description: "Gezielter Blick von außen auf öffentlich erreichbare Angriffsflächen und Expositionen.",
  },
];

const strengths = [
  {
    title: "Remote-first Delivery",
    text: "B2CyberSec arbeitet effizient, schnell anbindbar und mit einem klaren Fokus auf digitale Zusammenarbeit.",
  },
  {
    title: "20+ Jahre Erfahrung",
    text: "Boris Bosnjak und das Team kombinieren langjährige Network- und Security-Erfahrung mit pragmatischer Umsetzung.",
  },
  {
    title: "Klare Herstellerbasis",
    text: "Kompetenzen rund um Cisco, Palo Alto und Check Point werden mit anerkannten Standards und Zertifizierungen verbunden.",
  },
  {
    title: "Entscheidungsreife statt Theorie",
    text: "Die Leistungen sind so strukturiert, dass Management und Fachbereiche konkrete nächste Schritte ableiten können.",
  },
];

const faqs = [
  {
    question: "Was bietet B2CyberSec im Bereich Professional Services an?",
    answer:
      "B2CyberSec stellt IT Network & Security Experten on-demand bereit. Die Unterstützung ist remote-first organisiert und eignet sich für Projekte, Engpässe, Betriebsunterstützung, Troubleshooting sowie Sicherheits- und Architekturthemen.",
  },
  {
    question: "Was kostet Professional Services bei B2CyberSec?",
    answer:
      "Professional Services werden mit 115 € pro Stunde angeboten. Unternehmen erhalten damit kurzfristig verfügbare Senior-Expertise für klar definierte Aufgaben in Network und Security.",
  },
  {
    question: "Welche NIS-2 Pakete bietet B2CyberSec an?",
    answer:
      "B2CyberSec bietet drei Pakete für NIS-2 Compliance an: Readiness Check, Readiness Sprint und Readiness Plus. Die Pakete unterscheiden sich in Tiefe, Umfang und Entscheidungsreife der gelieferten Ergebnisse.",
  },
  {
    question: "Welche Herstellerkompetenzen deckt B2CyberSec ab?",
    answer:
      "B2CyberSec nennt Cisco, Palo Alto, Check Point, CompTIA und BSI als relevante Hersteller-, Partner- oder Zertifizierungsbasis. Fortinet gehört ausdrücklich nicht zum ausgewiesenen Kompetenzprofil dieser Website-Version.",
  },
  {
    question: "Wie sind die Penetration Tests strukturiert?",
    answer:
      "Die Penetration Tests sind in vier Formate gegliedert: Mini 3T für 3.990 €, Mid 5T für 6.490 €, Large 20T für 24.900 € und Public Test 1T für 1.490 €. Dadurch lassen sich unterschiedliche Scope-Größen klar abbilden.",
  },
  {
    question: "Wer ist der Ansprechpartner bei B2CyberSec?",
    answer:
      "Ansprechpartner ist Boris Bosnjak, CEO von B2CyberSec. Er bringt mehr als 20 Jahre Erfahrung im Bereich IT Network & Security mit und ist über Telefon, E-Mail und Calendly direkt erreichbar.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "B2CyberSec GmbH",
  url: "https://www.b2cybersec.com",
  telephone: "+49 (0) 821 90 789 500",
  email: "info@b2cybersec.com",
  sameAs: ["https://calendly.com/boris-bosnjak-b2cybersec"],
  founder: {
    "@type": "Person",
    name: "Boris Bosnjak",
    jobTitle: "CEO",
  },
  description:
    "B2CyberSec GmbH bietet Professional Services für IT Network & Security, NIS-2 Compliance Pakete und Penetration Testing für Unternehmen.",
  knowsAbout: ["Cisco", "Palo Alto", "Check Point", "CompTIA", "BSI", "NIS-2", "Penetration Testing"],
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Professional Services",
      serviceType: "IT Network & Security Experten on-demand",
      provider: { "@type": "Organization", name: "B2CyberSec GmbH" },
      offers: {
        "@type": "Offer",
        price: "115",
        priceCurrency: "EUR",
        description: "Professional Services für IT Network & Security zu 115 € pro Stunde",
      },
      description:
        "Remote-first Professional Services mit erfahrenen IT Network & Security Experten für Projekte, Betrieb und Engpässe.",
    },
    {
      "@type": "Service",
      name: "NIS-2 Compliance",
      serviceType: "Readiness Check, Readiness Sprint und Readiness Plus",
      provider: { "@type": "Organization", name: "B2CyberSec GmbH" },
      offers: [
        { "@type": "Offer", name: "Readiness Check", price: "2490", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Readiness Sprint", price: "17900", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Readiness Plus", price: "27900", priceCurrency: "EUR" },
      ],
      description:
        "NIS-2 Readiness Services zur strukturierten Bewertung, Priorisierung und Vorbereitung nächster Maßnahmen.",
    },
    {
      "@type": "Service",
      name: "Penetration Testing",
      serviceType: "Mini 3T, Mid 5T, Large 20T und Public Test 1T",
      provider: { "@type": "Organization", name: "B2CyberSec GmbH" },
      offers: [
        { "@type": "Offer", name: "Mini 3T", price: "3990", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Mid 5T", price: "6490", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Large 20T", price: "24900", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Public Test 1T", price: "1490", priceCurrency: "EUR" },
      ],
      description:
        "Gestaffelte Penetration Tests für unterschiedliche Scope-Größen und reale Angriffsflächen.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

function Reveal({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ kicker, title, description, centered = false }: { kicker: string; title: string; description: string; centered?: boolean }) {
  return (
    <div className={centered ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}>
      <p className="info-kicker">{kicker}</p>
      <h2 className="section-title mt-5 text-slate-950">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-slate-500">{description}</p>
    </div>
  );
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Anfrage über b2cybersec.com von ${formData.name || "Interessent"}`;
    const body = [
      `Name: ${formData.name}`,
      `E-Mail: ${formData.email}`,
      `Unternehmen: ${formData.company}`,
      "",
      "Anliegen:",
      formData.message,
    ].join("\n");

    window.location.href = `mailto:info@b2cybersec.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="site-shell bg-background text-foreground">
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(servicesSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/82 backdrop-blur-xl">
        <div className="container flex h-18 items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3 text-sm font-semibold tracking-[0.18em] text-slate-950 uppercase">
            <span className="inline-flex size-9 items-center justify-center rounded-full border border-sky-500/30 bg-sky-50 text-[0.74rem] font-bold text-sky-700">
              B2
            </span>
            <span>B2CyberSec</span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {[
              ["Services", "#services"],
              ["Warum wir", "#warum-wir"],
              ["NIS-2", "#nis2"],
              ["Kontakt", "#kontakt"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
                {label}
              </a>
            ))}
          </nav>

          <a href="https://calendly.com/boris-bosnjak-b2cybersec" target="_blank" rel="noreferrer" className="hero-cta hidden sm:inline-flex">
            Termin buchen
            <ArrowRight className="size-4" />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden px-4 pb-22 pt-16 sm:px-0 sm:pb-28 sm:pt-24">
          <div className="hero-glow hero-glow-left" aria-hidden="true" />
          <div className="hero-glow hero-glow-right" aria-hidden="true" />
          <div className="container relative">
            <Reveal className="mx-auto flex max-w-5xl flex-col items-center text-center">
              <p className="info-kicker">IT-Security für Unternehmen</p>
              <h1 className="hero-title mt-7 text-slate-950">
                Cybersicherheit,
                <br />
                die Ihr Unternehmen
                <br />
                <span className="accent-word">jetzt handlungsfähig macht.</span>
              </h1>
              <p className="mx-auto mt-7 max-w-3xl text-xl leading-9 text-slate-500 sm:text-2xl">
                Professional Services, NIS-2 Compliance und Penetration Testing —
                klar strukturiert, remote-first und mit der Erfahrung von Boris
                Bosnjak und zertifizierten Experten.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="https://calendly.com/boris-bosnjak-b2cybersec" target="_blank" rel="noreferrer" className="hero-cta">
                  Kostenlos beraten lassen
                  <CalendarDays className="size-4" />
                </a>
                <a href="#services" className="hero-cta-secondary">
                  Services entdecken
                </a>
              </div>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
                {partnerBadges.map((badge) => (
                  <span key={badge} className="trust-pill">
                    {badge}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal className="mx-auto mt-16 grid max-w-5xl gap-4 md:grid-cols-3">
              {quickStats.map((item) => (
                <article key={item.label} className="stat-card">
                  <p className="font-display text-3xl font-semibold tracking-[-0.05em] text-slate-950">{item.value}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{item.label}</p>
                </article>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-24" id="services">
          <div className="container">
            <Reveal>
              <SectionHeader
                centered
                kicker="Drei Säulen"
                title="Alles, was Unternehmen für Security, Compliance und technische Prüfung brauchen."
                description="Die neue Version bündelt die B2CyberSec-Leistungen in drei klaren Säulen. Jede Säule ist so formuliert, dass Menschen, Suchmaschinen und KI-Systeme Nutzen, Scope und Preisstruktur direkt erfassen können."
              />
            </Reveal>

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {corePillars.map((pillar, index) => (
                <Reveal key={pillar.id} className="h-full" >
                  <article className={`pillar-card h-full ${index === 1 ? "pillar-card-featured" : ""}`}>
                    <p className="info-kicker">{pillar.eyebrow}</p>
                    <h3 className="mt-5 font-display text-3xl font-semibold tracking-[-0.05em] text-slate-950">
                      {pillar.title}
                    </h3>
                    <div className="mt-6 inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
                      {pillar.price}
                    </div>
                    <p className="mt-6 text-base leading-8 text-slate-500">{pillar.description}</p>
                    <div className="mt-8 space-y-4">
                      {pillar.bullets.map((item) => (
                        <div key={item} className="flex gap-3 text-slate-700">
                          <CheckCircle2 className="mt-1 size-5 shrink-0 text-sky-600" />
                          <p className="leading-7">{item}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-24" id="nis2">
          <div className="container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <Reveal>
              <SectionHeader
                kicker="NIS-2 Compliance"
                title="Readiness, die Prioritäten sichtbar macht."
                description="B2CyberSec übersetzt regulatorischen Druck in einen belastbaren Entscheidungsrahmen. Statt allgemeiner Beratung stehen klar abgegrenzte Pakete im Mittelpunkt, die Reifegrad, Lücken und nächste Schritte konkret strukturieren."
              />
              <div className="gradient-panel mt-10">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="mt-1 size-6 shrink-0 text-sky-600" />
                  <p className="text-base leading-8 text-slate-600">
                    Die Frist ist vorbei. Unternehmen müssen ihren Status jetzt belastbar
                    verstehen, Maßnahmen priorisieren und Management-Entscheidungen mit
                    klarer Faktenbasis treffen.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-5">
              {nis2Packages.map((pkg, index) => (
                <Reveal key={pkg.name}>
                  <article className={`package-card ${index === 1 ? "package-card-highlight" : ""}`}>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">{pkg.subtitle}</p>
                        <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em] text-slate-950">{pkg.name}</h3>
                      </div>
                      <div className="price-badge">{pkg.price}</div>
                    </div>
                    <p className="mt-5 text-base leading-8 text-slate-500">{pkg.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24" id="pentest">
          <div className="container">
            <Reveal>
              <SectionHeader
                centered
                kicker="Penetration Testing"
                title="Gestaffelte Testformate für konkrete Scope-Größen."
                description="Die Pentest-Struktur ist bewusst klar gehalten: Unternehmen sehen schnell, welche Testtiefe zu ihrem Umfang passt und welche Budgetspanne einzuplanen ist."
              />
            </Reveal>

            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {pentestPackages.map((pkg) => (
                <Reveal key={pkg.name}>
                  <article className="test-card h-full">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-950">{pkg.name}</h3>
                        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">{pkg.duration}</p>
                      </div>
                      <div className="price-badge">{pkg.price}</div>
                    </div>
                    <p className="mt-6 text-base leading-8 text-slate-500">{pkg.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-24 text-white" id="warum-wir">
          <div className="container grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <p className="info-kicker info-kicker-dark">Warum B2CyberSec</p>
              <h2 className="section-title mt-5 text-white">
                Erfahrung, Klarheit und ein Setup,
                <br />
                das Entscheidungen beschleunigt.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Boris Bosnjak führt B2CyberSec mit mehr als 20 Jahren Erfahrung in IT
                Network & Security. Die Positionierung ist bewusst pragmatisch:
                kein Overhead, kein unnötiger Beratungsballast, sondern ein direkter Weg
                zu umsetzbaren Sicherheitsmaßnahmen.
              </p>
              <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">CEO</p>
                <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em] text-white">Boris Bosnjak</h3>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  Ansprechpartner für Professional Services, NIS-2 Compliance und
                  Penetration Testing. Direkt erreichbar über Telefon, E-Mail und Calendly.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {strengths.map((item) => (
                <Reveal key={item.title}>
                  <article className="dark-card h-full">
                    <BadgeCheck className="size-5 text-sky-300" />
                    <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.04em] text-white">{item.title}</h3>
                    <p className="mt-4 text-base leading-8 text-slate-300">{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24" id="faq">
          <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <Reveal>
              <SectionHeader
                kicker="AEO / GEO FAQ"
                title="Strukturiert für Menschen, Suchmaschinen und KI-Systeme."
                description="Die Antworten sind absichtlich klar, konkret und maschinenlesbar formuliert. So lassen sich Leistungen, Preise, Herstellerbasis und Ansprechpartner ohne Interpretationsverlust erfassen."
              />
            </Reveal>

            <div className="space-y-4">
              {faqs.map((item) => (
                <Reveal key={item.question}>
                  <details className="faq-row group">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                      <span className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-950">{item.question}</span>
                      <ChevronRight className="mt-1 size-5 shrink-0 text-slate-400 transition group-open:rotate-90" />
                    </summary>
                    <p className="mt-5 pr-6 text-base leading-8 text-slate-500">{item.answer}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-24" id="kontakt">
          <div className="container grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <SectionHeader
                kicker="Kontakt"
                title="Direkter Zugang zu Boris Bosnjak und B2CyberSec."
                description="Für ein Erstgespräch, eine Paketbewertung oder kurzfristige Expertensuche können Interessenten direkt über Calendly buchen oder eine Anfrage per Telefon, E-Mail oder Formular vorbereiten."
              />

              <div className="mt-10 space-y-4">
                <a href="tel:+4982190789500" className="contact-chip">
                  <Phone className="size-5 text-sky-600" />
                  +49 (0) 821 90 789 500
                </a>
                <a href="mailto:info@b2cybersec.com" className="contact-chip">
                  <Mail className="size-5 text-sky-600" />
                  info@b2cybersec.com
                </a>
                <a href="https://calendly.com/boris-bosnjak-b2cybersec" target="_blank" rel="noreferrer" className="contact-chip">
                  <CalendarDays className="size-5 text-sky-600" />
                  Calendly-Termin buchen
                </a>
              </div>
            </Reveal>

            <Reveal>
              <form onSubmit={handleSubmit} className="contact-form-card">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="space-y-2 text-sm text-slate-600">
                    <span>Name</span>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                      className="contact-input"
                      placeholder="Max Mustermann"
                      required
                    />
                  </label>
                  <label className="space-y-2 text-sm text-slate-600">
                    <span>E-Mail</span>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                      className="contact-input"
                      placeholder="name@unternehmen.de"
                      required
                    />
                  </label>
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <label className="space-y-2 text-sm text-slate-600">
                    <span>Unternehmen</span>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(event) => setFormData((current) => ({ ...current, company: event.target.value }))}
                      className="contact-input"
                      placeholder="Unternehmensname"
                    />
                  </label>
                  <label className="space-y-2 text-sm text-slate-600">
                    <span>Leistungsbereich</span>
                    <select className="contact-input" defaultValue="Professional Services">
                      <option>Professional Services</option>
                      <option>NIS-2 Compliance</option>
                      <option>Penetration Testing</option>
                      <option>Allgemeine Anfrage</option>
                    </select>
                  </label>
                </div>

                <label className="mt-5 block space-y-2 text-sm text-slate-600">
                  <span>Nachricht</span>
                  <textarea
                    rows={6}
                    value={formData.message}
                    onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
                    className="contact-input min-h-36 resize-y"
                    placeholder="Beschreiben Sie kurz Ihren Bedarf, Ihr Projekt oder den gewünschten Zeitrahmen."
                    required
                  />
                </label>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md text-sm leading-7 text-slate-500">
                    Das Formular öffnet Ihre E-Mail-Anwendung mit vorausgefüllter Anfrage.
                    Für ein direktes Gespräch eignet sich der Calendly-Link oben.
                  </p>
                  <button type="submit" className="hero-cta">
                    Anfrage vorbereiten
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="container flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-950">B2CyberSec GmbH</p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-500">
              Professional Services, NIS-2 Compliance und Penetration Testing für Unternehmen.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-slate-500 lg:items-end">
            <div className="flex flex-wrap gap-3">
              <a href="#" className="transition hover:text-slate-950">Impressum</a>
              <a href="#" className="transition hover:text-slate-950">Datenschutz</a>
            </div>
            <p>Telefon: +49 (0) 821 90 789 500</p>
            <p>E-Mail: info@b2cybersec.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
