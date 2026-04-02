/**
 * Hero Section – Bauhaus Security Design
 * Full-width hero with asymmetric layout, bold headline, trust badges, and CTAs.
 * Background: Generated dark grid/network image.
 */
import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle2 } from "lucide-react";

const trustBadges = [
  "NIS-2 Experten",
  "DSGVO-konform",
  "Standort Augsburg",
];

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/N7SupgC2aPTtT6aL37beu8/hero-bg-TmcQtGm7zGgQSW2gxSWXzn.webp)`,
        }}
      />
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />

      <div className="container relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-3xl">
          {/* Status indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-border bg-surface-1/50 backdrop-blur-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
            </span>
            <span className="text-xs font-mono text-muted-foreground tracking-wide uppercase">
              Aktiv schützend seit 2023
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] tracking-tight mb-6"
          >
            Pragmatische{" "}
            <span className="text-signal">Cybersecurity</span>
            <br />
            für den Mittelstand.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed"
          >
            NIS-2 Compliance, CISO as a Service & Pentesting.
            <br className="hidden sm:block" />
            Keine 200-Seiten-Reports. Nur Lösungen, die funktionieren.
            <br className="hidden sm:block" />
            <span className="text-foreground font-medium">Aus Augsburg. Für Bayern & DACH.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            <button
              onClick={() => scrollTo("#kontakt")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded bg-signal text-background hover:opacity-90 transition-opacity glow-signal"
            >
              Kostenlose Erstberatung
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo("#pakete")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded border border-border text-foreground hover:border-signal hover:text-signal transition-all"
            >
              <Shield className="w-4 h-4" />
              Pakete & Preise ansehen
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 sm:gap-6"
          >
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle2 className="w-4 h-4 text-signal flex-shrink-0" />
                {badge}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
