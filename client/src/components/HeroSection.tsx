// Frosted Daylight — Hero Section
// Light background, orange accent, glass effects

import { COMPANY, IMAGES } from "@/lib/data";
import { ShieldCheck, ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-white" />
        <div className="absolute inset-0 dot-grid opacity-40" />
      </div>

      <div className="container relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200/60 text-orange-600 font-mono text-xs tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              IT-Security für den Mittelstand
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
          >
            <span className="text-slate-900">Pragmatische</span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Cybersicherheit
            </span>
            <br />
            <span className="text-slate-400 text-3xl sm:text-4xl lg:text-5xl font-medium">
              für Bayern & Baden-Württemberg
            </span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-slate-500 max-w-2xl mb-10 leading-relaxed"
          >
            NIS-2 Compliance, Pentesting, CISO as a Service & Managed Security — von
            Experten mit {COMPANY.experience} Erfahrung. Wir schützen Ihr Unternehmen,
            bevor es andere tun.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <a
              href={COMPANY.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-400 hover:to-orange-500 transition-all duration-300 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40"
            >
              <Calendar className="w-5 h-5" />
              Termin buchen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-medium rounded-xl border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
            >
              <span className="font-mono text-sm">{COMPANY.phone}</span>
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap gap-6 text-sm text-slate-500 font-mono"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>ISO 27001 konform</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>BSI-Richtlinien</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>DSGVO-konform</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafbfc] to-transparent" />
    </section>
  );
}
