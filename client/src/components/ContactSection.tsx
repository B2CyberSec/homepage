/**
 * Contact Section – Bauhaus Security Design
 * Two-column layout: Contact info + Calendly/Form.
 * Augsburg skyline background image at the bottom.
 */
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Calendar, ArrowRight, ExternalLink } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="kontakt" className="py-20 lg:py-28 border-t border-border relative">
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
            // Kontakt
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Lassen Sie uns sprechen.
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg">
            Kostenlose Erstberatung — 30 Minuten, die sich lohnen. Unverbindlich und vertraulich.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Boris card */}
            <div className="p-6 rounded border border-border bg-card/50">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded bg-surface-2 border border-border flex items-center justify-center flex-shrink-0">
                  <span className="font-heading font-bold text-lg text-signal">BB</span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg">Boris Bošnjak</h3>
                  <p className="text-sm text-muted-foreground">
                    Geschäftsführer & Security Consultant
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Seit über 15 Jahren in der IT-Sicherheit. Pragmatisch, direkt und immer auf Augenhöhe mit Ihnen als Geschäftsführer.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <a
                href="tel:+4982190789500"
                className="flex items-center gap-3 text-foreground hover:text-signal transition-colors group"
              >
                <div className="w-10 h-10 rounded border border-border flex items-center justify-center group-hover:border-signal/40 transition-colors">
                  <Phone className="w-4 h-4 text-signal" />
                </div>
                <div>
                  <span className="text-sm font-medium">+49 (0) 821 90 789 500</span>
                  <p className="text-xs text-muted-foreground">Mo–Fr, 9:00–18:00 Uhr</p>
                </div>
              </a>

              <a
                href="mailto:info@b2cybersec.com"
                className="flex items-center gap-3 text-foreground hover:text-signal transition-colors group"
              >
                <div className="w-10 h-10 rounded border border-border flex items-center justify-center group-hover:border-signal/40 transition-colors">
                  <Mail className="w-4 h-4 text-signal" />
                </div>
                <div>
                  <span className="text-sm font-medium">info@b2cybersec.com</span>
                  <p className="text-xs text-muted-foreground">Antwort innerhalb von 24h</p>
                </div>
              </a>

              <div className="flex items-center gap-3 text-foreground">
                <div className="w-10 h-10 rounded border border-border flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-signal" />
                </div>
                <div>
                  <span className="text-sm font-medium">Werner-von-Siemens-Str. 6</span>
                  <p className="text-xs text-muted-foreground">86159 Augsburg, Bayern</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: CTA + Calendly */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Calendly CTA */}
            <div className="p-6 lg:p-8 rounded border border-signal/20 bg-card">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-signal" />
                <h3 className="font-heading font-semibold text-lg">Termin vereinbaren</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Buchen Sie direkt einen 30-minütigen Termin für Ihre kostenlose Erstberatung.
                Wir besprechen Ihre aktuelle Situation und zeigen konkrete nächste Schritte auf.
              </p>
              <a
                href="https://calendly.com/b2cybersec"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-semibold rounded bg-signal text-background hover:opacity-90 transition-opacity glow-signal"
              >
                Kostenlose Erstberatung buchen
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Alternative: Direct contact */}
            <div className="p-6 rounded border border-border bg-card/50">
              <h3 className="font-heading font-semibold text-base mb-3">Oder schreiben Sie uns direkt</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Beschreiben Sie kurz Ihr Anliegen — wir melden uns innerhalb von 24 Stunden.
              </p>
              <a
                href="mailto:info@b2cybersec.com?subject=Anfrage%20über%20Website"
                className="inline-flex items-center gap-2 text-sm text-signal hover:underline font-medium"
              >
                E-Mail senden
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Emergency */}
            <div className="p-4 rounded border border-destructive/30 bg-destructive/5">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-destructive-foreground mb-1">
                    Cyberangriff? Sofort-Hilfe.
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    Bei einem akuten Sicherheitsvorfall erreichen Sie uns direkt:
                  </p>
                  <a
                    href="tel:+4982190789500"
                    className="text-sm font-mono font-bold text-destructive hover:underline"
                  >
                    +49 (0) 821 90 789 500
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Augsburg skyline at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20 pointer-events-none">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/N7SupgC2aPTtT6aL37beu8/augsburg-skyline-KU83QYXBFgofT2H4bRo4Et.webp"
          alt=""
          className="w-full h-full object-cover object-bottom"
        />
      </div>
    </section>
  );
}
