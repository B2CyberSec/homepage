/**
 * Pricing Section – Bauhaus Security Design
 * Transparent pricing packages inspired by Cybervize and CyRiSo.
 * Monospace font for prices, clean card layout.
 */
import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";

const packages = [
  {
    name: "Security Quick Check",
    price: "1.900",
    unit: "Festpreis",
    description: "In 2 Tagen wissen Sie, wo Sie stehen.",
    features: [
      "2-Tage-Assessment vor Ort",
      "Priorisierter Aktionsplan (max. 10 Seiten)",
      "Management-Summary für die Geschäftsführung",
      "30 Min. Follow-up Call inklusive",
    ],
    cta: "Quick Check buchen",
    popular: false,
  },
  {
    name: "NIS-2 Readiness Paket",
    price: "4.900",
    unit: "Festpreis",
    description: "Von der Gap-Analyse bis zum Maßnahmenplan.",
    features: [
      "NIS-2 Betroffenheitsanalyse",
      "Gap-Analyse gegen NIS-2 Anforderungen",
      "Priorisierter Umsetzungsplan",
      "Dokumentationsvorlagen inklusive",
      "4 Wochen Umsetzungsbegleitung",
    ],
    cta: "NIS-2 Paket anfragen",
    popular: true,
  },
  {
    name: "CISO as a Service",
    price: "2.500",
    unit: "pro Monat",
    description: "Ihr externer CISO — ohne Festanstellung.",
    features: [
      "Strategische Sicherheitsführung",
      "Regelmäßige Security-Reviews",
      "Reporting an Geschäftsführung",
      "Incident-Response-Koordination",
      "Flexible Laufzeit, monatlich kündbar",
    ],
    cta: "CISO-Paket besprechen",
    popular: false,
  },
];

export default function PricingSection() {
  const scrollToContact = () => {
    const el = document.querySelector("#kontakt");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pakete" className="py-20 lg:py-28 border-t border-border">
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
            // Pakete & Preise
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Transparente Preise.
            <br />
            <span className="text-muted-foreground">Keine Überraschungen.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg">
            Festpreise für definierte Leistungen. Weil Budgetsicherheit für KMU kein Nice-to-have ist.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative flex flex-col p-6 lg:p-8 rounded border transition-all duration-300 ${
                pkg.popular
                  ? "border-signal/40 bg-card glow-signal"
                  : "border-border bg-card/50 hover:border-signal/20"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-signal text-background text-xs font-semibold">
                  <Star className="w-3 h-3" />
                  Empfohlen
                </div>
              )}

              <h3 className="font-heading font-semibold text-lg mb-1">{pkg.name}</h3>
              <p className="text-sm text-muted-foreground mb-5">{pkg.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="font-mono text-xs text-muted-foreground">ab</span>
                  <span className="font-mono font-bold text-3xl lg:text-4xl text-signal tabular-nums">
                    {pkg.price}€
                  </span>
                </div>
                <span className="font-mono text-xs text-muted-foreground">{pkg.unit}</span>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-signal flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={scrollToContact}
                className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded transition-all ${
                  pkg.popular
                    ? "bg-signal text-background hover:opacity-90"
                    : "border border-border text-foreground hover:border-signal hover:text-signal"
                }`}
              >
                {pkg.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          Alle Preise zzgl. MwSt. Individuelle Pakete auf Anfrage.{" "}
          <button onClick={scrollToContact} className="text-signal hover:underline">
            Sprechen Sie mit uns
          </button>
          .
        </motion.p>
      </div>
    </section>
  );
}
