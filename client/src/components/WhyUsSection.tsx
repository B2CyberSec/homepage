// Frosted Daylight — Why Us Section
import { ADVANTAGES } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { Award, Zap, HeartHandshake, ShieldCheck, Building2, Clock } from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Award, Zap, HeartHandshake, ShieldCheck, Building2, Clock,
};

export default function WhyUsSection() {
  const { ref, isVisible } = useInView(0.05);

  return (
    <section className="relative py-24 lg:py-32">
      {/* Separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="mono-label mb-4 block">Warum B2CyberSec</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Ihr Vorteil
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Pragmatische IT-Sicherheit ohne Enterprise-Overheads — direkt, persönlich und
            auf den Punkt.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {ADVANTAGES.map((adv, i) => {
            const Icon = ICON_MAP[adv.icon] || Award;
            return (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="glass-card p-6 lg:p-7 group hover:bg-white/90 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-200/60 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-all duration-300">
                  <Icon className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{adv.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{adv.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
