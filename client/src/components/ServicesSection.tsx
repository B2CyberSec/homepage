/*
 * DESIGN: Editorial Shock — "Der Weckruf"
 * Services: Dark cards with orange accents. Sarcastic descriptions.
 * Each service has a "what you think" vs "what we do" angle.
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Search, Users, Zap, Lock, HeadphonesIcon } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "NIS-2 Compliance",
    tagline: "Bevor das BSI klopft.",
    description: "Vollständige Gap-Analyse, Mängelliste, priorisierte Roadmap. In 14 Arbeitstagen wissen Sie, wo Sie stehen. Und wo nicht.",
    price: "ab 4.900 €",
    guarantee: "Garantie: Finden wir keine Lücke, zahlen Sie nichts.",
  },
  {
    icon: Search,
    title: "Penetration Testing",
    tagline: "Wir hacken Sie. Legal.",
    description: "Externer oder umfassender Pentest inkl. Social Engineering. Wir finden die Lücken, bevor es jemand anderes tut.",
    price: "ab 3.500 €",
    guarantee: "Bonus: Kostenloser Re-Test nach 90 Tagen.",
  },
  {
    icon: Zap,
    title: "Security Quick Check",
    tagline: "48 Stunden. 990 €. Keine Ausreden.",
    description: "2-stündige Analyse der wichtigsten Schwachstellen mit sofortigem Ergebnisbericht. Der schnellste Weg zu wissen, wie schlimm es wirklich ist.",
    price: "990 €",
    guarantee: "Ergebnis in 48 Stunden. Nicht 48 Tagen.",
  },
  {
    icon: Lock,
    title: "CISO as a Service",
    tagline: "Ein CISO, den Sie sich leisten können.",
    description: "Strategische IT-Sicherheitsberatung, 8h/Monat, Board-Reporting, Incident-Koordination. Ohne 150k Jahresgehalt.",
    price: "ab 2.490 €/Monat",
    guarantee: "Ab 6 Monate. Kein Risiko, volle Expertise.",
  },
  {
    icon: Users,
    title: "Experten auf Zeit",
    tagline: "Ihr Team ist zu dünn? Unseres nicht.",
    description: "IT-Security-Experten auf Stundenbasis. Nearshore ab 65 €/h, Onshore ab 95 €/h. Verfügbar ab 48 Stunden.",
    price: "ab 65 €/h",
    guarantee: "17 Experten. Einer passt zu Ihrem Problem.",
  },
  {
    icon: HeadphonesIcon,
    title: "Managed Security (MSSP)",
    tagline: "24/7 Überwachung. Auch wenn Sie schlafen.",
    description: "Security Monitoring, Threat Intelligence, Incident-Hotline. Weil Hacker keine Bürozeiten haben.",
    price: "ab 1.990 €/Monat",
    guarantee: "12 Monate. Rund um die Uhr geschützt.",
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#0a0a0a]">
      <div className="container">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p
            className="text-[#ff4500] text-sm font-bold uppercase tracking-[0.2em] mb-4"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            // Was wir tun
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Keine leeren Versprechen.
            <br />
            <span className="text-white/40">Klare Preise. Klare Ergebnisse.</span>
          </h2>
          <p className="text-white/50 text-lg mt-6 max-w-2xl">
            Andere reden über Cybersecurity. Wir machen es. Mit 17 Experten, 20+ Jahren Erfahrung und Preisen, die wir nicht hinter „Preis auf Anfrage" verstecken.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className={`group relative p-6 md:p-8 border border-white/5 bg-white/[0.02] hover:border-[#ff4500]/30 hover:bg-[#ff4500]/[0.03] transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:border-[#ff4500]/30 transition-colors mb-6">
                  <Icon className="text-[#ff4500]" size={24} />
                </div>

                {/* Content */}
                <h3
                  className="text-xl font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-[#ff4500] text-sm font-bold mb-4"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {service.tagline}
                </p>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Price */}
                <div className="mt-auto">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {service.price}
                    </span>
                  </div>
                  <p className="text-white/30 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
                    {service.guarantee}
                  </p>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-6 right-6 text-white/10 group-hover:text-[#ff4500] transition-colors">
                  <span className="text-2xl">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm mb-6" style={{ fontFamily: "var(--font-mono)" }}>
            // Alle Preise netto zzgl. MwSt. Keine versteckten Kosten. Versprochen.
          </p>
        </div>
      </div>
    </section>
  );
}
