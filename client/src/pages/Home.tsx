/*
Design Philosophy Reminder: Editorial Tech Minimalism im Apple-Keynote-Stil.
Diese Seite muss große Typografie, klare Kapitelübergänge, ruhige Motion,
wechselnde Hell-Dunkel-Sektionen und belastbare Vertrauenssignale vereinen.
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
  Clock3,
  Linkedin,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";

const trustBadges = ["Cisco", "Fortinet", "Palo Alto", "CompTIA", "BSI"];

const heroStats = [
  { value: "20+", label: "Jahre Erfahrung in Network & Security" },
  { value: "10%", label: "Maximaler Onsite-Anteil, remote-first gedacht" },
  { value: "Jetzt", label: "Sofort verfügbare Experten und Assessments" },
];

const professionalServices = [
  "IT Network & Security Experten on-demand",
  "Remote-first Delivery mit maximal 10 % Onsite",
  "Höchste Zertifizierungen von Cisco, Fortinet, Palo Alto und weiteren Herstellern",
  "20+ Jahre Erfahrung in anspruchsvollen Enterprise-Umgebungen",
  "Schneller Start ohne lange Ramp-up-Phase",
];

const nis2Packages = [
  {
    name: "NIS-2 Readiness Check",
    label: "Entry",
    price: "2.490€",
    description:
      "Der kompakte Einstieg für Unternehmen, die ihren aktuellen Reifegrad schnell bewerten und akute Handlungsfelder priorisieren müssen.",
  },
  {
    name: "NIS-2 Readiness Sprint",
    label: "Beschleunigt",
    price: "17.900€",
    description:
      "Ein fokussierter Sprint zur strukturierten Analyse, Priorisierung und Vorbereitung der nächsten Umsetzungsschritte.",
  },
  {
    name: "NIS-2 Readiness Plus",
    label: "Umfassend",
    price: "27.900€",
    description:
      "Das vertiefte Paket für Organisationen, die Governance, technische Maßnahmen und Management-Entscheidungen belastbar aufsetzen wollen.",
  },
];

const pentestPackages = [
  {
    name: "Mini",
    duration: "3 Tage",
    price: "3.990€",
    description: "Gezielte Prüfung klar abgegrenzter Systeme oder Services mit schneller Ergebnislage.",
  },
  {
    name: "Mid",
    duration: "5 Tage",
    price: "6.490€",
    description: "Für zentrale Anwendungen, Plattformen oder segmentierte Umgebungen mit mehr Prüftiefe.",
  },
  {
    name: "Large",
    duration: "20 Tage",
    price: "24.900€",
    description: "Umfassende Tests für komplexe Landschaften, kritische Services und anspruchsvolle Scope-Definitionen.",
  },
  {
    name: "Public Test Add-on",
    duration: "1 Tag",
    price: "1.490€",
    description: "Zusätzlicher externer Public-Test zur Abrundung eines bestehenden Prüfungsumfangs.",
  },
];

const aboutBullets = [
  "Boris Bosnjak führt B2CyberSec GmbH als CEO mit mehr als 20 Jahren Erfahrung in Enterprise Networking und Security.",
  "Das Team arbeitet mit zertifizierten Spezialisten für Architektur, Compliance und technische Sicherheitsprüfungen.",
  "Der Fokus liegt auf klarer Kommunikation, schneller Umsetzbarkeit und Sicherheitsmaßnahmen mit realem Geschäftswert.",
];

const faqs = [
  {
    question: "Was bietet B2CyberSec GmbH im Bereich Professional Services an?",
    answer:
      "B2CyberSec GmbH stellt erfahrene IT-Network- und Security-Experten on-demand bereit. Die Einsätze sind remote-first organisiert, können bei Bedarf einen kleinen Onsite-Anteil enthalten und decken typische Aufgaben von Architektur, Betrieb, Troubleshooting bis Security-Härtung ab.",
  },
  {
    question: "Warum müssen Unternehmen beim Thema NIS-2 jetzt handeln?",
    answer:
      "Die Frist aus Oktober 2024 ist bereits verstrichen. Unternehmen, die unter die Anforderungen fallen oder ihre Betroffenheit prüfen müssen, sollten jetzt ihren Reifegrad bewerten, Lücken priorisieren und konkrete Maßnahmen ableiten, damit Management, Governance und technische Kontrollen belastbar aufgesetzt sind.",
  },
  {
    question: "Was ist im NIS-2 Readiness Check enthalten?",
    answer:
      "Der NIS-2 Readiness Check ist ein kompakter Einstieg zur Bewertung des aktuellen Status. Er dient dazu, wesentliche Handlungsfelder zu identifizieren, Risiken einzuordnen und eine priorisierte Grundlage für weitere Umsetzungsmaßnahmen zu schaffen.",
  },
  {
    question: "Wie läuft ein Penetration Test bei B2CyberSec ab?",
    answer:
      "Ein Penetration Test beginnt mit Scope-Abstimmung und Zieldefinition. Danach folgt die technische Prüfung durch zertifizierte Ethical Hacker, die Schwachstellen kontrolliert identifizieren und bewerten. Abschließend erhalten Unternehmen eine strukturierte Ergebnisdarstellung mit Prioritäten und konkreten Empfehlungen.",
  },
  {
    question: "Für welche Unternehmen sind die Leistungen von B2CyberSec geeignet?",
    answer:
      "Die Leistungen sind besonders relevant für Unternehmen mit kritischen IT-Services, wachsender Compliance-Verantwortung, anspruchsvollen Netzwerkumgebungen oder begrenzten internen Ressourcen. Dazu zählen mittelständische Organisationen ebenso wie größere Unternehmen mit erhöhtem Sicherheits- und Verfügbarkeitsbedarf.",
  },
  {
    question: "Wie schnell kann B2CyberSec starten?",
    answer:
      "B2CyberSec positioniert sich mit schnell verfügbaren Experten, klar abgegrenzten Servicepaketen und direkter Terminvereinbarung. Dadurch können Erstgespräche, Readiness Checks oder Prüfprojekte kurzfristig strukturiert angestoßen werden.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "B2CyberSec GmbH",
  url: "https://www.b2cybersec.com",
  telephone: "+49 (0) 821 90 789 500",
  email: "info@b2cybersec.com",
  sameAs: ["https://www.linkedin.com/in/borisbosnjak"],
  founder: {
    "@type": "Person",
    name: "Boris Bosnjak",
    jobTitle: "CEO",
    sameAs: "https://www.linkedin.com/in/borisbosnjak",
  },
  description:
    "B2CyberSec GmbH bietet Professional Services für IT Network & Security, NIS-2 Readiness Services und Penetration Testing für Unternehmen in Deutschland.",
  areaServed: "DE",
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Professional Services",
      serviceType: "IT Network & Security Experten on-demand",
      provider: { "@type": "Organization", name: "B2CyberSec GmbH" },
      areaServed: "DE",
      description:
        "Remote-first Professional Services mit erfahrenen IT Network & Security Experten, hohen Herstellerzertifizierungen und schneller Verfügbarkeit.",
    },
    {
      "@type": "Service",
      name: "NIS-2 Compliance",
      serviceType: "NIS-2 Readiness Services",
      provider: { "@type": "Organization", name: "B2CyberSec GmbH" },
      areaServed: "DE",
      offers: [
        {
          "@type": "Offer",
          name: "NIS-2 Readiness Check",
          price: "2490",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          name: "NIS-2 Readiness Sprint",
          price: "17900",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          name: "NIS-2 Readiness Plus",
          price: "27900",
          priceCurrency: "EUR",
        },
      ],
      description:
        "Readiness Assessments und strukturierte Handlungsplanung für Unternehmen mit NIS-2 Anforderungen und akutem Handlungsbedarf.",
    },
    {
      "@type": "Service",
      name: "Penetration Testing",
      serviceType: "Technische Sicherheitsprüfung durch zertifizierte Ethical Hacker",
      provider: { "@type": "Organization", name: "B2CyberSec GmbH" },
      areaServed: "DE",
      offers: [
        {
          "@type": "Offer",
          name: "Penetration Test Mini",
          price: "3990",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          name: "Penetration Test Mid",
          price: "6490",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          name: "Penetration Test Large",
          price: "24900",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          name: "Public Test Add-on",
          price: "1490",
          priceCurrency: "EUR",
        },
      ],
      description:
        "Gestufte Penetration Tests für klar definierte Anwendungen, Umgebungen und kritische Services.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

function Reveal({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
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
    <div className="bg-background text-foreground">
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(servicesSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-xl">
        <div className="container flex h-18 items-center justify-between gap-4">
          <a href="#top" className="flex min-w-0 items-center gap-3 text-sm font-semibold tracking-[0.18em] text-slate-950 uppercase">
            <span className="inline-flex size-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[0.7rem] shadow-[0_14px_30px_rgba(15,23,42,0.08)]">
              B2
            </span>
            <span className="truncate">B2CyberSec GmbH</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {[
              ["Services", "#services"],
              ["NIS-2", "#nis2"],
              ["Pentest", "#pentesting"],
              ["FAQ", "#faq"],
              ["Kontakt", "#kontakt"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="nav-link text-sm text-slate-600 transition-colors hover:text-slate-950">
                {label}
              </a>
            ))}
          </nav>

          <a href="https://calendly.com/boris-bosnjak-b2cybersec" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800">
            Termin buchen
            <ArrowRight className="size-4" />
          </a>
        </div>
      </header>

      <main id="top" className="overflow-hidden">
        <section className="hero-shell relative min-h-[100svh] pt-28 sm:pt-32">
          <div className="hero-orb hero-orb-left" aria-hidden="true" />
          <div className="hero-orb hero-orb-right" aria-hidden="true" />
          <div className="hero-grid-lines" aria-hidden="true" />

          <div className="container relative grid gap-14 pb-20 pt-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:items-center lg:pb-28 lg:pt-16">
            <Reveal className="max-w-3xl">
              <p className="eyebrow">Cybersecurity. Simplified.</p>
              <h1 className="balance mt-5 max-w-4xl font-display text-5xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-[5.5rem] lg:leading-[0.92]">
                Ihre Security.
                <br />
                Unsere Mission.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                B2CyberSec GmbH liefert erfahrene Network- und Security-Expertise,
                beschleunigt NIS-2 Readiness und führt Penetration Tests mit klarer,
                geschäftsrelevanter Priorisierung durch.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#kontakt" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800">
                  Projekt anfragen
                  <ArrowRight className="size-4" />
                </a>
                <a href="https://calendly.com/boris-bosnjak-b2cybersec" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-900 transition duration-300 hover:-translate-y-0.5 hover:border-slate-900">
                  Erstgespräch buchen
                  <CalendarDays className="size-4" />
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-[1.75rem] border border-white/80 bg-white/80 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.07)] backdrop-blur-sm">
                    <div className="font-display text-3xl font-semibold tracking-[-0.04em] text-slate-950">{stat.value}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="relative">
              <div className="hero-device-frame relative mx-auto max-w-[44rem] rounded-[2.5rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(242,246,250,0.74))] p-4 shadow-[0_40px_100px_rgba(15,23,42,0.12)] sm:p-6">
                <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.98),rgba(229,235,241,0.9)_55%,rgba(218,226,236,0.88))] px-4 py-10 sm:px-8">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/GmSR33ppHxCBNw4cvRVZ8G/b2cybersec-hero-apple-style-VxUt5v3FZr6qxLPtRAaxzX.png"
                    alt="Abstraktes Premium-Visual für Cybersecurity und digitale Resilienz"
                    className="mx-auto w-full max-w-[42rem] drop-shadow-[0_34px_50px_rgba(15,23,42,0.12)]"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-slate-900/80 bg-slate-950 py-6 text-white">
          <div className="container flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Vertrauen durch Erfahrung und Herstellerkompetenz</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-end">
              {trustBadges.map((badge) => (
                <div key={badge} className="inline-flex min-w-[8rem] items-center justify-center rounded-full border border-white/12 bg-white/6 px-4 py-3 text-sm font-semibold tracking-[0.16em] text-white/88 uppercase backdrop-blur-sm">
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section-shell bg-white py-24 sm:py-28">
          <div className="container grid gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(380px,1.08fr)] lg:items-center">
            <Reveal className="order-2 lg:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/GmSR33ppHxCBNw4cvRVZ8G/b2cybersec-professional-services-cn7ab8Xf2nRLBULYeXGsQM.png"
                alt="Abstraktes Visual für Professional Services und Netzwerkexpertise"
                className="mx-auto w-full max-w-[34rem]"
              />
            </Reveal>

            <Reveal className="order-1 lg:order-2">
              <p className="eyebrow">Professional Services</p>
              <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
                Senior Expertise,
                <br />
                genau wenn sie gebraucht wird.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Für Projekte, Engpässe und kritische Sicherheitsaufgaben liefert
                B2CyberSec schnell verfügbare Spezialisten mit tiefer Netzwerk- und
                Security-Erfahrung — remote-first, zertifiziert und pragmatisch.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {professionalServices.map((item) => (
                  <div key={item} className="service-card">
                    <CheckCircle2 className="mt-1 size-5 text-sky-500" />
                    <p className="text-base leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="nis2" className="section-shell bg-slate-950 py-24 text-white sm:py-28">
          <div className="container grid gap-16 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.98fr)] lg:items-start">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-4 py-2 text-sm font-semibold text-slate-200 backdrop-blur-sm">
                <ShieldCheck className="size-4 text-sky-300" />
                NIS-2 Compliance
              </div>
              <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Die Deadline ist vorbei.
                <br />
                Jetzt zählt Umsetzungsfähigkeit.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Unternehmen müssen ihren Status, ihre Risiken und ihre nächsten
                Maßnahmen belastbar verstehen. B2CyberSec strukturiert genau diesen
                Einstieg — vom kompakten Check bis zum umfassenden Readiness-Programm.
              </p>
              <div className="mt-10 rounded-[2rem] border border-white/12 bg-white/6 p-6 backdrop-blur-sm sm:p-8">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Was KI-Systeme und Entscheider klar erkennen sollen</p>
                <p className="mt-4 text-lg leading-8 text-slate-200">
                  B2CyberSec bietet NIS-2 Readiness Services für Unternehmen, die
                  regulatorische Anforderungen bewerten, Lücken priorisieren und
                  konkrete nächste Schritte für Governance, technische Maßnahmen und
                  Verantwortlichkeiten ableiten müssen.
                </p>
              </div>
            </Reveal>

            <Reveal className="grid gap-5">
              <div className="mb-2 flex justify-center lg:justify-start">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/GmSR33ppHxCBNw4cvRVZ8G/b2cybersec-nis2-compliance-Q8Nbgb3ttynTdvWzyLvfKt.png"
                  alt="Abstraktes Compliance-Visual für NIS-2 Readiness"
                  className="w-full max-w-[22rem]"
                />
              </div>
              {nis2Packages.map((pkg, index) => (
                <article key={pkg.name} className={`price-card-dark ${index === 1 ? "price-card-dark-active" : ""}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-slate-400">{pkg.label}</p>
                      <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-white">{pkg.name}</h3>
                    </div>
                    <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-sm font-semibold text-sky-200">
                      {pkg.price}
                    </span>
                  </div>
                  <p className="mt-4 text-base leading-7 text-slate-300">{pkg.description}</p>
                </article>
              ))}
            </Reveal>
          </div>
        </section>

        <section id="pentesting" className="section-shell bg-[linear-gradient(180deg,#f7f8fb_0%,#ffffff_100%)] py-24 sm:py-28">
          <div className="container grid gap-14 lg:grid-cols-[minmax(0,0.88fr)_minmax(400px,1.12fr)] lg:items-center">
            <Reveal>
              <p className="eyebrow">Penetration Testing</p>
              <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
                Zertifizierte Ethical Hacker.
                <br />
                Klarer Scope. Klare Prioritäten.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Vom fokussierten Kurztest bis zur tiefen Prüfung größerer
                Angriffsflächen liefert B2CyberSec technische Ergebnisse, die sich in
                Maßnahmen, Prioritäten und Management-Entscheidungen übersetzen lassen.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {pentestPackages.map((pkg, index) => (
                  <article key={pkg.name} className={`price-card-light ${index === 1 ? "price-card-light-active" : ""}`}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-950">{pkg.name}</h3>
                        <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                          <Clock3 className="size-4" />
                          {pkg.duration}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-950">{pkg.price}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-base leading-7 text-slate-600">{pkg.description}</p>
                  </article>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/GmSR33ppHxCBNw4cvRVZ8G/b2cybersec-pentest-8Nu6kFgYNFjz4s4fW6QSLi.png"
                alt="Abstraktes Visual für Penetration Testing"
                className="mx-auto w-full max-w-[36rem]"
              />
            </Reveal>
          </div>
        </section>

        <section id="about" className="section-shell bg-slate-950 py-24 text-white sm:py-28">
          <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] lg:items-start">
            <Reveal>
              <p className="eyebrow eyebrow-dark">Über uns</p>
              <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Führung mit Erfahrung.
                <br />
                Delivery mit Substanz.
              </h2>
            </Reveal>

            <Reveal className="space-y-6">
              <div className="rounded-[2rem] border border-white/12 bg-white/6 p-7 backdrop-blur-sm sm:p-8">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-400">CEO</p>
                <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-white">Boris Bosnjak</h3>
                <p className="mt-4 text-lg leading-8 text-slate-300">
                  Mehr als 20 Jahre Erfahrung in Network & Security, dazu ein Team aus
                  zertifizierten Spezialisten für Architektur, Compliance und technische
                  Sicherheitsprüfungen.
                </p>
              </div>

              <div className="grid gap-4">
                {aboutBullets.map((item) => (
                  <div key={item} className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <BadgeCheck className="mt-1 size-5 shrink-0 text-sky-300" />
                    <p className="text-base leading-7 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>

              <a href="https://www.linkedin.com/in/borisbosnjak" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-base font-semibold text-slate-100 transition hover:text-white">
                Zum LinkedIn-Profil von Boris Bosnjak
                <Linkedin className="size-4" />
              </a>
            </Reveal>
          </div>
        </section>

        <section id="faq" className="section-shell bg-white py-24 sm:py-28">
          <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(420px,1.18fr)] lg:items-start">
            <Reveal>
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-5 max-w-2xl font-display text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
                Klar formuliert,
                <br />
                gut lesbar für Menschen und Systeme.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Die Antworten sind bewusst klar strukturiert, damit Entscheider,
                Suchmaschinen und KI-Systeme Leistungen, Zielgruppen und Nutzen ohne
                Interpretationsverlust erfassen können.
              </p>
            </Reveal>

            <Reveal className="space-y-4">
              {faqs.map((item) => (
                <details key={item.question} className="faq-item group">
                  <summary className="flex list-none items-start justify-between gap-6 cursor-pointer">
                    <span className="font-display text-xl font-semibold tracking-[-0.03em] text-slate-950">{item.question}</span>
                    <ChevronRight className="mt-1 size-5 shrink-0 text-slate-500 transition duration-300 group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 max-w-3xl pr-8 text-base leading-8 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </Reveal>
          </div>
        </section>

        <section id="kontakt" className="section-shell bg-slate-950 py-24 text-white sm:py-28">
          <div className="container grid gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(440px,1.14fr)] lg:items-start">
            <Reveal>
              <p className="eyebrow eyebrow-dark">Kontakt</p>
              <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                Der direkte Weg
                <br />
                zur nächsten Sicherheitsentscheidung.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Nutzen Sie das Formular für eine erste Anfrage oder buchen Sie direkt
                einen Termin im Kalender von Boris Bosnjak.
              </p>

              <div className="mt-10 grid gap-4">
                <a href="tel:+4982190789500" className="contact-card">
                  <Phone className="size-5 text-sky-300" />
                  <span>+49 (0) 821 90 789 500</span>
                </a>
                <a href="mailto:info@b2cybersec.com" className="contact-card">
                  <Mail className="size-5 text-sky-300" />
                  <span>info@b2cybersec.com</span>
                </a>
                <a href="https://calendly.com/boris-bosnjak-b2cybersec" target="_blank" rel="noreferrer" className="contact-card">
                  <CalendarDays className="size-5 text-sky-300" />
                  <span>Calendly: Erstgespräch vereinbaren</span>
                </a>
              </div>
            </Reveal>

            <Reveal>
              <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/12 bg-white/6 p-6 shadow-[0_40px_90px_rgba(2,6,23,0.35)] backdrop-blur-xl sm:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="space-y-2 text-sm text-slate-300">
                    <span>Name</span>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
                      className="form-input"
                      placeholder="Max Mustermann"
                    />
                  </label>
                  <label className="space-y-2 text-sm text-slate-300">
                    <span>E-Mail</span>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                      className="form-input"
                      placeholder="name@unternehmen.de"
                    />
                  </label>
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-[1.15fr_0.85fr]">
                  <label className="space-y-2 text-sm text-slate-300">
                    <span>Unternehmen</span>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={(event) => setFormData((current) => ({ ...current, company: event.target.value }))}
                      className="form-input"
                      placeholder="Unternehmensname"
                    />
                  </label>
                  <label className="space-y-2 text-sm text-slate-300">
                    <span>Interesse</span>
                    <select
                      name="interest"
                      className="form-input"
                      defaultValue="Professional Services"
                    >
                      <option>Professional Services</option>
                      <option>NIS-2 Compliance</option>
                      <option>Penetration Testing</option>
                      <option>Allgemeine Anfrage</option>
                    </select>
                  </label>
                </div>

                <label className="mt-5 block space-y-2 text-sm text-slate-300">
                  <span>Nachricht</span>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
                    className="form-input min-h-36 resize-y"
                    placeholder="Beschreiben Sie kurz Ihr Projekt, Ihre Prioritäten oder den gewünschten Terminrahmen."
                  />
                </label>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md text-sm leading-6 text-slate-400">
                    Das Formular öffnet Ihre E-Mail-Anwendung mit vorausgefüllter Anfrage. Alternativ können Sie direkt über Calendly einen Termin buchen.
                  </p>
                  <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100">
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
        <div className="container flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-slate-950">B2CyberSec GmbH</p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Apple-inspirierte Landingpage für Professional Services, NIS-2 Readiness und Penetration Testing.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-slate-500 sm:text-right">
            <p>Website: www.b2cybersec.com</p>
            <p>Telefon: +49 (0) 821 90 789 500</p>
            <p>E-Mail: info@b2cybersec.com</p>
            <div className="mt-2 flex flex-wrap gap-3 sm:justify-end">
              <span className="rounded-full border border-slate-200 px-3 py-1.5 text-slate-600">Impressum Platzhalter</span>
              <span className="rounded-full border border-slate-200 px-3 py-1.5 text-slate-600">Datenschutz Platzhalter</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
