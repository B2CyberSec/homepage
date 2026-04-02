/**
 * Why B2CyberSec Section – Bauhaus Security Design
 * Anti-consulting messaging inspired by enka consulting.
 * Highlights USPs: pragmatism, regional focus, four-eyes principle.
 */
import { motion } from "framer-motion";
import {
  FileX,
  Banknote,
  Clock,
  MapPin,
  Eye,
  Handshake,
} from "lucide-react";

const usps = [
  {
    icon: FileX,
    title: "Keine 200-Seiten-Reports",
    description:
      "Kompakte Aktionspläne statt endloser Dokumentation. Maximal 10 Seiten, priorisiert nach Kritikalität.",
  },
  {
    icon: Banknote,
    title: "Transparente Festpreise",
    description:
      "Festpreise für definierte Leistungen. Keine Überraschungen, keine Nachverhandlungen, keine versteckten Kosten.",
  },
  {
    icon: Clock,
    title: "Schnelle Umsetzung",
    description:
      "2-Tage-Assessment, 1 Woche Report. Nicht Monate später, wenn das Problem schon kritisch ist.",
  },
  {
    icon: MapPin,
    title: "Regional & Persönlich",
    description:
      "Sitz in Augsburg, aktiv in Bayern und Baden-Württemberg. Persönliche Betreuung, kein anonymes Callcenter.",
  },
  {
    icon: Eye,
    title: "Vier-Augen-Prinzip",
    description:
      "Wir beraten und bauen auf — ein unabhängiger Partner testet. Keine Interessenkonflikte, maximale Objektivität.",
  },
  {
    icon: Handshake,
    title: "KMU-DNA",
    description:
      "Wir verstehen die Realität im Mittelstand. Pragmatische Lösungen statt Enterprise-Overkill für Ihre Unternehmensgröße.",
  },
];

export default function WhySection() {
  return (
    <section id="warum" className="py-20 lg:py-28 border-t border-border relative">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="font-mono text-xs text-signal tracking-widest uppercase mb-3 block">
            // Warum B2CyberSec
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Pragmatisch statt bürokratisch.
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg">
            Wir sind keine Konzernberater. Wir sind Ihr Sicherheitspartner, der Ihre Sprache spricht.
          </p>
        </motion.div>

        {/* USP grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {usps.map((usp, i) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded border border-border flex items-center justify-center group-hover:border-signal/40 transition-colors">
                  <usp.icon className="w-5 h-5 text-signal" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-base mb-1.5 group-hover:text-signal transition-colors">
                    {usp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {usp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
