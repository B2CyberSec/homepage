// Frosted Daylight — Contact Section
import { COMPANY } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main CTA card */}
          <div className="glass-card glow-orange p-8 lg:p-12 text-center mb-8">
            <span className="mono-label mb-4 block">Kontakt</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Bereit für mehr{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Sicherheit
              </span>
              ?
            </h2>
            <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto">
              Buchen Sie ein kostenloses 30-Minuten-Gespräch. Wir analysieren Ihre
              Situation und zeigen Ihnen den besten Weg.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={COMPANY.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-400 hover:to-orange-500 transition-all duration-300 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40"
              >
                <Calendar className="w-5 h-5" />
                Termin buchen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-xl border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Jetzt anrufen
              </a>
            </div>
          </div>

          {/* Info cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="glass-card p-5 flex items-center gap-3 hover:bg-white/90 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-200/60 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-orange-500" />
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-0.5">Telefon</div>
                <div className="text-sm font-medium text-slate-900 font-mono">
                  {COMPANY.phone}
                </div>
              </div>
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="glass-card p-5 flex items-center gap-3 hover:bg-white/90 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-200/60 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-indigo-500" />
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-0.5">E-Mail</div>
                <div className="text-sm font-medium text-slate-900">
                  {COMPANY.email}
                </div>
              </div>
            </a>
            <div className="glass-card p-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-blue-500" />
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-0.5">Standort</div>
                <div className="text-sm font-medium text-slate-900">
                  Augsburg, Bayern
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
