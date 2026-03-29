/*
 * DESIGN: Editorial Shock — "Der Weckruf"
 * Pricing: Transparent, bold pricing tables. No "Preis auf Anfrage" BS.
 * Orange highlights on featured packages.
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check } from "lucide-react";

const einmalig = [
  {
    name: "Security Quick Check",
    price: "990 €",
    period: "einmalig",
    tagline: "Der Einstieg. Keine Ausreden.",
    features: [
      "2-stündige Schwachstellenanalyse",
      "Sofortiger Ergebnisbericht",
      "Priorisierte Handlungsempfehlungen",
      "Ergebnis in 48 Stunden",
    ],
    featured: false,
    cta: "Quick Check buchen",
  },
  {
    name: "CyberSchild Audit (NIS-2)",
    price: "4.900 €",
    period: "einmalig",
    tagline: "Für die, die es ernst meinen.",
    features: [
      "Vollständige NIS-2 Gap-Analyse",
      "Detaillierte Mängelliste",
      "Priorisierte Roadmap",
      "Management-Summary",
      "Ergebnis in 14 Arbeitstagen",
      "Garantie: Keine Lücke = kein Geld",
    ],
    featured: true,
    cta: "Audit starten",
  },
  {
    name: "NIS-2 Komplett",
    price: "9.900 €",
    period: "einmalig",
    tagline: "Audit + Umsetzung. Alles aus einer Hand.",
    features: [
      "Alles aus dem CyberSchild Audit",
      "Komplette Umsetzungsbegleitung",
      "Richtlinien & Dokumentation",
      "Mitarbeiterschulungen",
      "BSI-Registrierung",
      "Abschlusszertifikat",
    ],
    featured: false,
    cta: "Komplett-Paket buchen",
  },
];

const pentesting = [
  {
    name: "PenTest Starter",
    price: "3.500 €",
    features: [
      "Externer Penetrationstest",
      "Web-App oder Netzwerk",
      "Executive Report",
      "Technischer Detailbericht",
      "Kostenloser Re-Test nach 90 Tagen",
    ],
    lieferzeit: "21 Arbeitstage",
  },
  {
    name: "PenTest Professional",
    price: "8.900 €",
    features: [
      "Umfassender Pentest (intern + extern)",
      "Social Engineering",
      "Physischer Zugangstest",
      "Executive + technischer Report",
      "1 Stunde CISO-Beratung gratis",
    ],
    lieferzeit: "30 Arbeitstage",
  },
];

const abos = [
  {
    name: "CISO as a Service",
    price: "ab 2.490 €",
    period: "/Monat",
    laufzeit: "6 Monate",
    features: [
      "Strategische IT-Sicherheitsberatung",
      "8h/Monat dedizierte Beratung",
      "Board-Reporting",
      "Incident-Koordination",
    ],
  },
  {
    name: "NIS-2 Compliance Care",
    price: "ab 990 €",
    period: "/Monat",
    laufzeit: "12 Monate",
    features: [
      "Monatliche Compliance-Überwachung",
      "Mitarbeiterschulungen",
      "Richtlinien-Updates",
      "Audit-Vorbereitung",
    ],
  },
  {
    name: "MSSP Basic",
    price: "ab 1.990 €",
    period: "/Monat",
    laufzeit: "12 Monate",
    features: [
      "24/7 Security Monitoring",
      "Monatlicher Statusbericht",
      "Incident-Hotline",
    ],
  },
  {
    name: "MSSP Professional",
    price: "ab 3.990 €",
    period: "/Monat",
    laufzeit: "12 Monate",
    features: [
      "Alles aus MSSP Basic",
      "Threat Intelligence",
      "Quartalsweiser Pentest",
      "Dedizierter Ansprechpartner",
    ],
  },
];

export default function PricingSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="preise" className="relative py-24 md:py-32 bg-[#0d0d0d]">
      <div ref={ref} className="container">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p
            className="text-[#ff4500] text-sm font-bold uppercase tracking-[0.2em] mb-4"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            // Preise — Ja, echte Preise
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Transparenz ist sexy.
            <br />
            <span className="text-white/40">„Preis auf Anfrage" ist es nicht.</span>
          </h2>
        </div>

        {/* NIS-2 & Quick Check Packages */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
            Festpreis-Pakete
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {einmalig.map((pkg, i) => (
              <div
                key={i}
                className={`relative flex flex-col p-6 md:p-8 border transition-all duration-700 ${
                  pkg.featured
                    ? "border-[#ff4500]/50 bg-[#ff4500]/[0.05]"
                    : "border-white/5 bg-white/[0.02]"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-[#ff4500] text-white text-xs font-bold uppercase tracking-wider">
                    Beliebteste Wahl
                  </div>
                )}
                <h4 className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                  {pkg.name}
                </h4>
                <p className="text-white/40 text-sm mt-1 mb-6" style={{ fontFamily: "var(--font-mono)" }}>
                  {pkg.tagline}
                </p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    {pkg.price}
                  </span>
                  <span className="text-white/40 text-sm">{pkg.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check className="text-[#ff4500] mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-white/70 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://calendly.com/b2cybersec/kontakt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 font-bold text-sm uppercase tracking-wider transition-all ${
                    pkg.featured
                      ? "bg-[#ff4500] text-white hover:bg-[#ff5a1a]"
                      : "border border-white/20 text-white/80 hover:border-[#ff4500] hover:text-[#ff4500]"
                  }`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Pentesting */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
            Pentesting
          </h3>
          <p className="text-white/40 text-sm mb-8" style={{ fontFamily: "var(--font-mono)" }}>
            // Wir hacken Sie. Damit es kein anderer tut.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {pentesting.map((pkg, i) => (
              <div key={i} className="p-6 md:p-8 border border-white/5 bg-white/[0.02]">
                <h4 className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                  {pkg.name}
                </h4>
                <div className="flex items-baseline gap-2 mt-2 mb-1">
                  <span className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    {pkg.price}
                  </span>
                </div>
                <p className="text-white/30 text-xs mb-6" style={{ fontFamily: "var(--font-mono)" }}>
                  Lieferzeit: {pkg.lieferzeit}
                </p>
                <ul className="space-y-2">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check className="text-[#ff4500] mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-white/70 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://calendly.com/b2cybersec/kontakt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mt-6 py-3 border border-white/20 text-white/80 font-bold text-sm uppercase tracking-wider hover:border-[#ff4500] hover:text-[#ff4500] transition-all"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Pentest anfragen
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Subscriptions */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
            Abo-Modelle
          </h3>
          <p className="text-white/40 text-sm mb-8" style={{ fontFamily: "var(--font-mono)" }}>
            // Dauerhafter Schutz. Weil Hacker keine Einmalzahlung akzeptieren.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {abos.map((pkg, i) => (
              <div key={i} className="p-6 border border-white/5 bg-white/[0.02]">
                <h4 className="text-base font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                  {pkg.name}
                </h4>
                <div className="flex items-baseline gap-1 mt-2 mb-1">
                  <span className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    {pkg.price}
                  </span>
                  <span className="text-white/40 text-sm">{pkg.period}</span>
                </div>
                <p className="text-white/30 text-xs mb-4" style={{ fontFamily: "var(--font-mono)" }}>
                  Laufzeit: {pkg.laufzeit}
                </p>
                <ul className="space-y-2">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check className="text-[#ff4500] mt-0.5 flex-shrink-0" size={14} />
                      <span className="text-white/60 text-xs">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Staff Augmentation */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
            Experten auf Zeit
          </h3>
          <p className="text-white/40 text-sm mb-8" style={{ fontFamily: "var(--font-mono)" }}>
            // Ihr Team braucht Verstärkung? Wir haben 17 Experten. Einer passt.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 md:p-8 border border-white/5 bg-white/[0.02]">
              <h4 className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                Nearshore
              </h4>
              <p className="text-white/40 text-sm mt-1">IT-Security-Experten, remote</p>
              <div className="flex items-baseline gap-1 mt-4">
                <span className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                  65–95 €
                </span>
                <span className="text-white/40 text-sm">/Stunde</span>
              </div>
              <p className="text-white/30 text-xs mt-2" style={{ fontFamily: "var(--font-mono)" }}>
                Verfügbar ab 48 Stunden
              </p>
            </div>
            <div className="p-6 md:p-8 border border-white/5 bg-white/[0.02]">
              <h4 className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                Onshore (Deutschland)
              </h4>
              <p className="text-white/40 text-sm mt-1">IT-Security-Experten, vor Ort oder remote</p>
              <div className="flex items-baseline gap-1 mt-4">
                <span className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                  95–135 €
                </span>
                <span className="text-white/40 text-sm">/Stunde</span>
              </div>
              <p className="text-white/30 text-xs mt-2" style={{ fontFamily: "var(--font-mono)" }}>
                Verfügbar ab 1 Woche
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
