// Frosted Daylight — CTA Banner
import { COMPANY } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  const { ref, isVisible } = useInView(0.2);

  return (
    <section className="py-4" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-50 via-orange-50/50 to-indigo-50 border border-slate-200/60"
        >
          <div className="px-6 py-6 lg:px-10 lg:py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-1">
                Kostenlose Erstberatung in 30 Minuten
              </h3>
              <p className="text-sm text-slate-500">
                Unverbindlich. Persönlich. Direkt mit einem Security-Experten.
              </p>
            </div>
            <a
              href={COMPANY.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-400 hover:to-orange-500 transition-all duration-300 shadow-lg shadow-orange-500/20 shrink-0"
            >
              Termin buchen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
