/**
 * NIS-2 CTA Section – Bauhaus Security Design
 * A focused section explaining the NIS-2 urgency and B2CyberSec's approach.
 * Includes a timeline/process visualization.
 */
import { motion } from "framer-motion";
import { ArrowRight, Clock, AlertTriangle } from "lucide-react";

export default function NIS2Section() {
  const scrollToContact = () => {
    const el = document.querySelector("#kontakt");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-28 border-t border-border relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-signal/[0.03] to-transparent pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-signal/20 bg-signal/5 mb-8"
          >
            <Clock className="w-4 h-4 text-signal" />
            <span className="text-sm font-medium text-signal">
              NIS-2 Frist: Oktober 2026
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6"
          >
            Ist Ihr Unternehmen
            <br />
            <span className="text-signal">NIS-2 betroffen?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Über 29.000 Unternehmen in Deutschland müssen die NIS-2-Richtlinie umsetzen.
            Viele wissen es noch nicht. Wir klären das in einem kostenlosen 30-Minuten-Gespräch.
          </motion.p>

          {/* Process steps inline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid sm:grid-cols-3 gap-4 mb-10"
          >
            {[
              { step: "1", title: "Betroffenheitscheck", desc: "Sind Sie NIS-2 pflichtig? Wir finden es heraus." },
              { step: "2", title: "Gap-Analyse", desc: "Wo stehen Sie? Was fehlt? Klarer Maßnahmenplan." },
              { step: "3", title: "Umsetzung", desc: "Pragmatische Umsetzung in 4–8 Wochen." },
            ].map((item, i) => (
              <div key={item.step} className="relative p-5 rounded border border-border bg-card/50 text-left">
                <span className="font-mono text-xs text-signal/50 block mb-2">Schritt {item.step}</span>
                <h3 className="font-heading font-semibold text-base mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                {i < 2 && (
                  <div className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-signal/30" />
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold rounded bg-signal text-background hover:opacity-90 transition-opacity glow-signal"
            >
              Kostenlosen NIS-2 Check starten
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-sm text-muted-foreground">
              30 Min. | Kostenlos | Unverbindlich
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
