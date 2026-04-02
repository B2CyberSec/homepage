// Frosted Daylight — Services Section (Bento Grid)
import { SERVICES, COMPANY, IMAGES } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { Shield, Search, UserCog, Eye, FileCheck, Users, ArrowRight } from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield, Search, UserCog, Eye, FileCheck, Users,
};

export default function ServicesSection() {
  const { ref, isVisible } = useInView(0.05);
  const main = SERVICES[0];
  const second = SERVICES[1];
  const middle = SERVICES.slice(2, 5);
  const last = SERVICES[5];
  const MainIcon = ICON_MAP[main.icon] || Shield;
  const SecondIcon = ICON_MAP[second.icon] || Shield;
  const LastIcon = ICON_MAP[last.icon] || Shield;

  return (
    <section id="services" className="relative py-24 lg:py-32">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-10">
        <img src={IMAGES.servicesGlow} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="mono-label mb-4 block">Unsere Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Alles aus einer Hand
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl">
            Von der ersten Analyse bis zur dauerhaften Überwachung — wir begleiten Sie
            auf dem gesamten Weg zur IT-Sicherheit.
          </p>
        </motion.div>

        {/* Row 1: Main (2 cols) + Second (1 col) */}
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-5 mb-4 lg:mb-5">
          {/* Security Quick Check — Featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0 }}
            className="lg:col-span-2 glass-card gradient-border glow-orange-hover group"
          >
            <div className="p-7 lg:p-10 flex flex-col h-full">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-orange-500 group-hover:bg-orange-100 group-hover:border-orange-300/60 transition-all duration-300">
                  <MainIcon className="w-6 h-6" />
                </div>
                <span className="font-mono text-[10px] tracking-wider uppercase text-slate-400 px-2.5 py-1 rounded-full border border-slate-200/60 bg-slate-50/60">
                  Einmalig
                </span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1">
                {main.name}
              </h3>
              <p className="text-sm text-orange-500/80 font-medium mb-3">{main.subtitle}</p>
              <p className="text-base text-slate-500 leading-relaxed mb-6">
                {main.description}
              </p>
              <div className="grid grid-cols-2 gap-2 mb-6 flex-1">
                {main.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400/60 mt-1.5 shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-5 border-t border-slate-200/40 flex items-center justify-between">
                <span className="text-2xl font-bold text-slate-900 font-display">
                  {main.price}
                </span>
                <a
                  href={COMPANY.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-1.5 text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
                >
                  Jetzt starten
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Pentesting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="glass-card gradient-border glow-orange-hover group"
          >
            <div className="p-6 lg:p-7 flex flex-col h-full">
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-orange-500 group-hover:bg-orange-100 transition-all duration-300">
                  <SecondIcon className="w-5 h-5" />
                </div>
                <span className="font-mono text-[10px] tracking-wider uppercase text-slate-400 px-2.5 py-1 rounded-full border border-slate-200/60 bg-slate-50/60">
                  Einmalig
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{second.name}</h3>
              <p className="text-xs text-orange-500/80 font-medium mb-3">{second.subtitle}</p>
              <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">
                {second.description}
              </p>
              <div className="pt-4 border-t border-slate-200/40 flex items-center justify-between">
                <span className="text-xl font-bold text-slate-900 font-display">
                  {second.price}
                </span>
                <a
                  href={COMPANY.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-1.5 text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
                >
                  Anfragen
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Middle 3 services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-4 lg:mb-5">
          {middle.map((svc, i) => {
            const Icon = ICON_MAP[svc.icon] || Shield;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.16 + i * 0.08 }}
                className="glass-card p-6 lg:p-7 group hover:bg-white/90 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200/60 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-100 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[10px] tracking-wider uppercase text-slate-400 px-2.5 py-1 rounded-full border border-slate-200/60 bg-slate-50/60">
                    {svc.category === "abo" ? "Abo" : svc.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{svc.name}</h3>
                <p className="text-xs text-indigo-500/80 font-medium mb-3">{svc.subtitle}</p>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{svc.description}</p>
                <div className="pt-4 border-t border-slate-200/40 flex items-center justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-bold text-slate-900 font-display">
                      {svc.price}
                    </span>
                    {svc.priceNote && (
                      <span className="text-xs text-slate-400">{svc.priceNote}</span>
                    )}
                  </div>
                  <a
                    href={COMPANY.calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-1.5 text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    Details
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Row 3: Professional Services — full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card gradient-border glow-orange-hover group"
        >
          <div className="p-6 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-100 transition-all duration-300">
              <LastIcon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-1">{last.name}</h3>
              <p className="text-sm text-orange-500/80 font-medium mb-2">{last.subtitle}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{last.description}</p>
            </div>
            <div className="flex items-center gap-6 shrink-0">
              <span className="text-2xl font-bold text-slate-900 font-display">
                {last.price}
              </span>
              <a
                href={COMPANY.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-1.5 text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
              >
                Anfragen
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
