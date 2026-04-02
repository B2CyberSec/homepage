/**
 * Services Section – Bauhaus Security Design
 * Grid of service cards with status indicators and hover effects.
 * Each service has an icon, description, and "active" status dot.
 */
import { motion } from "framer-motion";
import {
  Shield,
  FileCheck,
  UserCheck,
  Users,
  Lock,
  Zap,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "NIS-2 Compliance",
    description:
      "Gap-Analyse, Maßnahmenplan und Umsetzungsbegleitung. Wir machen Sie NIS-2 ready — pragmatisch und termingerecht.",
    tag: "Kernkompetenz",
  },
  {
    icon: UserCheck,
    title: "CISO as a Service",
    description:
      "Ihr externer Chief Information Security Officer. Strategische Sicherheitsführung ohne Festanstellung.",
    tag: "Ab 2.500€/Monat",
  },
  {
    icon: Shield,
    title: "Pentesting",
    description:
      "Unabhängige Sicherheitstests nach dem Vier-Augen-Prinzip. Wir beraten — ein spezialisierter Partner testet.",
    tag: "Vier-Augen-Prinzip",
  },
  {
    icon: Users,
    title: "Professional Services",
    description:
      "Erfahrene Security-Experten für Ihre Projekte. Flexible Vermittlung von Spezialisten nach Bedarf.",
    tag: "Experten-Vermittlung",
  },
  {
    icon: Lock,
    title: "Managed Security (MSSP)",
    description:
      "24/7 Überwachung und Incident Response. Ihr Security Operations Center — ohne eigene Infrastruktur.",
    tag: "24/7 Schutz",
  },
  {
    icon: Zap,
    title: "Security Quick Check",
    description:
      "In 2 Tagen wissen Sie, wo Sie stehen. Kompakter Sicherheits-Check mit priorisiertem Aktionsplan.",
    tag: "Festpreis",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Care",
    description:
      "Laufende Compliance-Betreuung für DSGVO, ISO 27001 und branchenspezifische Anforderungen.",
    tag: "Laufend",
  },
];

export default function ServicesSection() {
  return (
    <section id="leistungen" className="py-20 lg:py-28 relative">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/N7SupgC2aPTtT6aL37beu8/services-pattern-U5eGXdbZu4wHMMnKtUfSkU.webp)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="font-mono text-xs text-signal tracking-widest uppercase mb-3 block">
            // Leistungen
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Alles aus einer Hand.
            <br />
            <span className="text-muted-foreground">Keine Kompromisse.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg">
            Von der Analyse bis zum laufenden Schutz — wir decken das gesamte Spektrum der IT-Sicherheit ab.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative p-6 rounded border border-border bg-card/50 backdrop-blur-sm hover:border-signal/30 transition-all duration-300"
            >
              {/* Status dot */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                  {service.tag}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-signal" />
              </div>

              <service.icon className="w-5 h-5 text-signal mb-4" />
              <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-signal transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
