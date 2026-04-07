import { ArrowRight, CheckCircle2, Clock3, ShieldCheck, Users, Phone, Mail } from "lucide-react";

const offers = [
  {
    name: "Expert Match",
    badge: "Basis",
    description:
      "Die schnellste Option für eine klar definierte Security-Rolle. Sie erhalten in kurzer Zeit passende Kandidatenvorschläge und einen schlanken, verlässlichen Prozess.",
    features: [
      "1 Rolle gleichzeitig",
      "Kandidatenvorschläge",
      "Standard-Support",
    ],
  },
  {
    name: "Rapid Cyber Placement",
    badge: "Kernangebot",
    description:
      "Unser Standard für Unternehmen, die nicht nur CVs, sondern einen echten Besetzungsprozess brauchen — von der Rollenklärung bis zum erfolgreichen Onboarding.",
    features: [
      "Rollenworkshop",
      "Shortlist",
      "Interview-Koordination",
      "Besetzungsbegleitung",
      "Onboarding",
    ],
  },
  {
    name: "Cyber Bench on Demand",
    badge: "Premium",
    description:
      "Für Teams mit hohem Zeitdruck, mehreren offenen Positionen oder erhöhtem Qualitätsanspruch. Priorisiert, skalierbar und mit zusätzlicher Absicherung.",
    features: [
      "Priorisierte Besetzung",
      "Mehrere Rollen parallel",
      "SLA",
      "Qualitätskontrolle",
      "Backup-Kandidat",
    ],
  },
];

const processSteps = [
  {
    title: "Rolle schärfen",
    text: "Wir klären fachliche Anforderungen, Seniorität, Teamfit und Zielprofil, damit nicht nur gesucht, sondern passend gesucht wird.",
  },
  {
    title: "Passende Security-Experten identifizieren",
    text: "Wir priorisieren Qualität vor Volumen und liefern Kandidaten, die fachlich und kulturell zur Rolle passen.",
  },
  {
    title: "Besetzung in 14 Tagen vorantreiben",
    text: "Sie bekommen einen klaren, geführten Prozess mit enger Koordination statt unverbundener Profile und langem Hin und Her.",
  },
  {
    title: "Kostenlos nacharbeiten, bis es passt",
    text: "Wenn der Match nicht passt, arbeiten wir ohne Zusatzkosten nach, bis die Rolle passend besetzt ist.",
  },
];

const differentiators = [
  "Fokus auf Security-Rollen statt Generalisten-Recruiting",
  "Klare Positionierung mit verbindlichem 14-Tage-Versprechen",
  "Vom ersten Briefing bis zum Onboarding begleitet",
  "Höhere Sicherheit durch strukturierte Qualitätskontrolle",
];

export default function Home() {
  const openCalendly = () => {
    window.open("https://calendly.com/b2cybersec/kontakt", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-white text-[#111827]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#hero" className="text-lg font-semibold tracking-tight text-[#111827]">
            B2CyberSec
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#angebote" className="text-sm font-medium text-[#4b5563] hover:text-[#111827]">Angebot</a>
            <a href="#ablauf" className="text-sm font-medium text-[#4b5563] hover:text-[#111827]">Ablauf</a>
            <a href="#warum" className="text-sm font-medium text-[#4b5563] hover:text-[#111827]">Warum wir</a>
            <a href="#kontakt" className="text-sm font-medium text-[#4b5563] hover:text-[#111827]">Kontakt</a>
          </nav>
          <button
            onClick={openCalendly}
            className="rounded-full bg-[#e8530e] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#c44400]"
          >
            Termin buchen
          </button>
        </div>
      </header>

      <main>
        <section id="hero" className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(232,83,14,0.14),_transparent_35%)]" />
          <div className="relative mx-auto max-w-7xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#fed7aa] bg-[#fff7ed] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c2410c]">
              <ShieldCheck className="h-4 w-4" />
              Cybersecurity Recruiting
            </div>
            <div className="mt-8 grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[#111827] sm:text-5xl lg:text-7xl">
                  Passender Security-Experte in 14 Tagen — oder wir arbeiten kostenlos nach, bis es passt.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#4b5563] sm:text-xl">
                  B2CyberSec hilft Ihnen, Security-Rollen schneller und treffsicherer zu besetzen — vom ersten Rollenbriefing bis zur erfolgreichen Übergabe ins Onboarding.
                </p>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#6b7280]">
                  Für CISO, Security Engineer, IAM, SOC, GRC, Cloud Security und weitere spezialisierte Rollen.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <button
                    onClick={openCalendly}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e8530e] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#c44400]"
                  >
                    Erstgespräch buchen
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <a
                    href="#angebote"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d1d5db] px-8 py-4 text-base font-semibold text-[#111827] transition hover:bg-[#f9fafb]"
                  >
                    Angebote ansehen
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-[#e5e7eb] bg-[#f9fafb] p-8 shadow-sm">
                <div className="flex items-center gap-3 text-[#111827]">
                  <Clock3 className="h-5 w-5 text-[#e8530e]" />
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c2410c]">Unser Versprechen</span>
                </div>
                <p className="mt-5 text-2xl font-semibold leading-snug text-[#111827]">
                  Passung vor Masse.
                </p>
                <p className="mt-3 text-base leading-relaxed text-[#4b5563]">
                  Sie kaufen bei uns keine CV-Flut, sondern einen strukturierten Match-Prozess mit klarer Verantwortlichkeit, enger Abstimmung und verbindlicher Nacharbeit, falls es nicht sofort passt.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    "Spezialisiert auf Security-Rollen",
                    "Klare Kommunikation im Recruiting-Prozess",
                    "Verbindliche Nacharbeit ohne Zusatzkosten",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-[#374151]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#e8530e]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="angebote" className="bg-[#f8fafc] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c2410c]">3-Stufen-Angebot</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#111827] sm:text-5xl">
                Das passende Angebotsmodell für Ihren Besetzungsdruck.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#4b5563]">
                Vom fokussierten Einzel-Match bis zum priorisierten Multi-Role-Setup: Jede Stufe baut auf einem klaren Ergebnis und einer eindeutigen Verantwortung auf.
              </p>
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {offers.map((offer, index) => (
                <article
                  key={offer.name}
                  className={`flex h-full flex-col rounded-3xl border p-8 shadow-sm ${
                    index === 1 ? "border-[#fdba74] bg-white" : "border-[#e5e7eb] bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${
                      index === 1
                        ? "bg-[#fff7ed] text-[#c2410c]"
                        : "bg-[#f3f4f6] text-[#4b5563]"
                    }`}>
                      {offer.badge}
                    </span>
                    {index === 1 && (
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c2410c]">
                        Empfohlen
                      </span>
                    )}
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-[#111827]">{offer.name}</h3>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-[#4b5563]">{offer.description}</p>
                  <ul className="mt-8 space-y-3">
                    {offer.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-[#374151]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#e8530e]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ablauf" className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c2410c]">Ablauf</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#111827] sm:text-5xl">
                  So wird aus einer offenen Rolle in kurzer Zeit ein passender Match.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-[#4b5563]">
                  Unser Prozess ist darauf ausgelegt, Entscheidungsgeschwindigkeit und Qualitätskontrolle gleichzeitig zu erhöhen — ohne unnötige Schleifen.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="rounded-3xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c2410c]">0{index + 1}</div>
                    <h3 className="mt-4 text-xl font-semibold text-[#111827]">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#4b5563]">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="warum" className="bg-[#111827] px-6 py-24 text-white lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#fdba74]">Warum B2CyberSec</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Recruiting für Security-Rollen braucht mehr als nur Suchvolumen.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/70">
                Wir verbinden Security-Verständnis, strukturierte Auswahl und klare Prozessführung. So steigt die Chance auf einen Match, der fachlich und im Team wirklich funktioniert.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {differentiators.map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <Users className="h-5 w-5 text-[#fdba74]" />
                  <p className="mt-4 text-base leading-relaxed text-white/85">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#e5e7eb] bg-[#fff7ed] p-8 shadow-sm sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c2410c]">Kontakt</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#111827] sm:text-5xl">
              Lassen Sie uns Ihre Security-Rolle sauber und schnell besetzen.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#4b5563]">
              Im Erstgespräch klären wir, welche Rolle Sie besetzen wollen, welches Angebotsmodell passt und wie wir das 14-Tage-Versprechen für Ihren Fall konkret umsetzen.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={openCalendly}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e8530e] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#c44400]"
              >
                Termin buchen
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="tel:+4982190789500"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d1d5db] bg-white px-8 py-4 text-base font-semibold text-[#111827]"
              >
                <Phone className="h-4 w-4" />
                +49 (0) 821 90 789 500
              </a>
            </div>
            <div className="mt-10 grid gap-4 border-t border-[#fed7aa] pt-8 sm:grid-cols-2">
              <div className="flex items-center gap-3 text-sm text-[#374151]">
                <Mail className="h-4 w-4 text-[#e8530e]" />
                info@b2cybersec.com
              </div>
              <div className="text-sm text-[#374151]">
                Werner-von-Siemens-Str. 6, 86159 Augsburg
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 px-6 py-8 text-sm text-[#6b7280] lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>B2CyberSec GmbH · Cybersecurity Recruiting</p>
          <p>Passender Security-Experte in 14 Tagen — oder wir arbeiten kostenlos nach, bis es passt.</p>
        </div>
      </footer>
    </div>
  );
}
