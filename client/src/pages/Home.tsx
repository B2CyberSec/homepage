import { ArrowRight, CheckCircle2, Clock3, ShieldCheck, Users, Phone, Mail } from "lucide-react";

const offers = [
  {
    name: "Expert Match",
    badge: "Basis",
    description:
      "Die fokussierte Option für eine klar definierte Security-Rolle. Sie erhalten passende Kandidatenvorschläge und einen geradlinigen Prozess ohne unnötigen Overhead.",
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
      "Für Unternehmen, die eine Security-Rolle zügig und sauber besetzen wollen — mit Rollenworkshop, strukturierter Shortlist und enger Prozessbegleitung.",
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
      "Wenn Priorität, Parallelität und Qualitätssicherung besonders hoch sind: mehrere Rollen, klare Servicelevels und zusätzliche Absicherung im Besetzungsprozess.",
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
    text: "Wir definieren Zielprofil, Seniorität, Must-haves und Teamfit, bevor der Markt angesprochen wird.",
  },
  {
    title: "Security-Talent qualifizieren",
    text: "Wir filtern auf Passung statt auf Masse und konzentrieren uns auf Kandidaten, die fachlich und kulturell zur Rolle passen.",
  },
  {
    title: "In 14 Tagen zur Besetzung steuern",
    text: "Sie bekommen einen geführten Prozess mit klaren Entscheidungen, sauberer Koordination und hoher Verbindlichkeit.",
  },
  {
    title: "Kostenlos nacharbeiten, falls nötig",
    text: "Wenn der Match nicht passt, arbeiten wir ohne Zusatzkosten nach, bis die Besetzung wirklich passt.",
  },
];

const differentiators = [
  "Security-Fokus statt Generalisten-Pipeline",
  "Verbindliches 14-Tage-Versprechen",
  "Hohe Qualität durch strukturierte Prüfung und Abstimmung",
  "Klare Verantwortung bis ins Onboarding hinein",
];

export default function Home() {
  const openCalendly = () => {
    window.open("https://calendly.com/b2cybersec/kontakt", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#hero" className="text-lg font-semibold tracking-tight text-white">
            B2CyberSec
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#angebote" className="text-sm font-medium text-white/65 hover:text-white">Angebot</a>
            <a href="#ablauf" className="text-sm font-medium text-white/65 hover:text-white">Ablauf</a>
            <a href="#warum" className="text-sm font-medium text-white/65 hover:text-white">Warum wir</a>
            <a href="#kontakt" className="text-sm font-medium text-white/65 hover:text-white">Kontakt</a>
          </nav>
          <button
            onClick={openCalendly}
            className="rounded-full bg-[#ff5a1f] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#ff6d38]"
          >
            Termin buchen
          </button>
        </div>
      </header>

      <main>
        <section id="hero" className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,90,31,0.22),_transparent_30%)]" />
          <div className="relative mx-auto max-w-7xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ff5a1f]/30 bg-[#ff5a1f]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#ffb08a]">
              <ShieldCheck className="h-4 w-4" />
              Cybersecurity Recruiting
            </div>
            <div className="mt-8 grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div>
                <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                  Passender Security-Experte in 14 Tagen — oder wir arbeiten kostenlos nach, bis es passt.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70 sm:text-xl">
                  B2CyberSec positioniert Ihr Security-Recruiting auf Ergebnis: passende Kandidaten, klare Prozessführung und eine Besetzung, die fachlich wie kulturell tragfähig ist.
                </p>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/45">
                  Für CISO, Security Engineer, IAM, SOC, GRC, Cloud Security und weitere spezialisierte Rollen.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <button
                    onClick={openCalendly}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff5a1f] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#ff6d38]"
                  >
                    Erstgespräch buchen
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <a
                    href="#angebote"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/5"
                  >
                    Angebote ansehen
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 text-white">
                  <Clock3 className="h-5 w-5 text-[#ff5a1f]" />
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ffb08a]">Unser Versprechen</span>
                </div>
                <p className="mt-5 text-2xl font-semibold leading-snug text-white">
                  Passung vor Masse.
                </p>
                <p className="mt-3 text-base leading-relaxed text-white/65">
                  Sie bekommen keinen unsortierten Kandidatenstrom, sondern einen klar geführten Match-Prozess mit Nacharbeit ohne Zusatzkosten, falls der erste Vorschlag nicht passt.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    "Spezialisiert auf Security-Rollen",
                    "Klare Kommunikation im Auswahlprozess",
                    "Kostenlose Nacharbeit bis zur Passung",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-white/75">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#ff5a1f]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="angebote" className="border-y border-white/5 bg-[#0d0d0d] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ffb08a]">3-Stufen-Angebot</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Das passende Modell für Ihre offene Security-Rolle.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/65">
                Jede Stufe ist auf ein klares Ergebnis ausgelegt: schnellerer Match, bessere Passung und mehr Sicherheit im Besetzungsprozess.
              </p>
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {offers.map((offer, index) => (
                <article
                  key={offer.name}
                  className={`flex h-full flex-col rounded-[2rem] border p-8 ${
                    index === 1
                      ? "border-[#ff5a1f]/40 bg-[#ff5a1f]/[0.08]"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${
                      index === 1
                        ? "bg-[#ff5a1f]/15 text-[#ffb08a]"
                        : "bg-white/10 text-white/60"
                    }`}>
                      {offer.badge}
                    </span>
                    {index === 1 && (
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ffb08a]">
                        Empfohlen
                      </span>
                    )}
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-white">{offer.name}</h3>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-white/65">{offer.description}</p>
                  <ul className="mt-8 space-y-3">
                    {offer.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-white/75">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#ff5a1f]" />
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
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ffb08a]">Ablauf</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                  Ein strukturierter Weg vom Briefing bis zur Besetzung.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-white/65">
                  Unser Prozess kombiniert Security-Verständnis, präzise Qualifizierung und hohe Verbindlichkeit auf beiden Seiten.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ffb08a]">0{index + 1}</div>
                    <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/65">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="warum" className="bg-[#111111] px-6 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ffb08a]">Warum B2CyberSec</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Wenn Security-Rollen wirklich passen sollen, reicht generisches Recruiting nicht aus.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/65">
                Wir bringen Spezialisierung, Auswahlqualität und Prozessklarheit zusammen — damit Sie nicht nur schnell, sondern richtig besetzen.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {differentiators.map((item) => (
                <div key={item} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
                  <Users className="h-5 w-5 text-[#ff5a1f]" />
                  <p className="mt-4 text-base leading-relaxed text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="px-6 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#ff5a1f]/20 bg-[#ff5a1f]/[0.07] p-8 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ffb08a]">Kontakt</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Lassen Sie uns Ihre Security-Rolle schnell und passend besetzen.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/70">
              Im Erstgespräch klären wir Zielprofil, Angebotsstufe und den konkreten Weg, wie wir Ihr 14-Tage-Versprechen belastbar umsetzen.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={openCalendly}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff5a1f] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#ff6d38]"
              >
                Termin buchen
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="tel:+4982190789500"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-4 text-base font-semibold text-white"
              >
                <Phone className="h-4 w-4" />
                +49 (0) 821 90 789 500
              </a>
            </div>
            <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2">
              <div className="flex items-center gap-3 text-sm text-white/75">
                <Mail className="h-4 w-4 text-[#ff5a1f]" />
                info@b2cybersec.com
              </div>
              <div className="text-sm text-white/75">
                Werner-von-Siemens-Str. 6, 86159 Augsburg
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-sm text-white/45 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>B2CyberSec GmbH · Cybersecurity Recruiting</p>
          <p>Passender Security-Experte in 14 Tagen — oder wir arbeiten kostenlos nach, bis es passt.</p>
        </div>
      </footer>
    </div>
  );
}
