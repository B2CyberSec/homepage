// Frosted Daylight — NIS-2 Section
import { COMPANY, IMAGES, NIS2_DATA } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { Clock, Building2, AlertTriangle, Layers, ArrowRight } from "lucide-react";

export default function NIS2Section() {
  const { ref, isVisible } = useInView(0.05);

  return (
    <section id="nis2" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-card overflow-hidden">
              <img
                src={IMAGES.nis2Visual}
                alt="NIS-2 Compliance Framework"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-200/60 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      {NIS2_DATA.nonCompliant} nicht konform
                    </div>
                    <div className="text-xs text-slate-500">
                      der betroffenen Unternehmen
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="mono-label mb-4 block">NIS-2 Richtlinie</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              NIS-2 ist{" "}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Pflicht
              </span>
            </h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Seit dem {NIS2_DATA.lawDate} gilt die NIS-2-Richtlinie in Deutschland. Bis
              zum {NIS2_DATA.bsiFrist} müssen sich {NIS2_DATA.affectedCompanies}{" "}
              Unternehmen beim BSI registrieren. Bei Verstößen drohen Strafen bis zu{" "}
              {NIS2_DATA.maxFine} oder {NIS2_DATA.finePercent}.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="glass-card p-4">
                <Clock className="w-5 h-5 text-orange-500 mb-2" />
                <div className="text-2xl font-bold text-slate-900 font-display">
                  {NIS2_DATA.bsiFrist}
                </div>
                <div className="text-xs text-slate-500">BSI-Registrierungsfrist</div>
              </div>
              <div className="glass-card p-4">
                <Building2 className="w-5 h-5 text-orange-500 mb-2" />
                <div className="text-2xl font-bold text-slate-900 font-display">
                  {NIS2_DATA.affectedCompanies}
                </div>
                <div className="text-xs text-slate-500">Betroffene Unternehmen</div>
              </div>
              <div className="glass-card p-4">
                <AlertTriangle className="w-5 h-5 text-red-500 mb-2" />
                <div className="text-2xl font-bold text-slate-900 font-display">
                  {NIS2_DATA.maxFine}
                </div>
                <div className="text-xs text-slate-500">Maximale Strafe</div>
              </div>
              <div className="glass-card p-4">
                <Layers className="w-5 h-5 text-indigo-500 mb-2" />
                <div className="text-2xl font-bold text-slate-900 font-display">
                  {NIS2_DATA.sectors}
                </div>
                <div className="text-xs text-slate-500">Betroffene Sektoren</div>
              </div>
            </div>

            <a
              href={COMPANY.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-400 hover:to-orange-500 transition-all duration-300 shadow-lg shadow-orange-500/20"
            >
              NIS-2 Quick Check starten
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
