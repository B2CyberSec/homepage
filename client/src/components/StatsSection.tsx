// Frosted Daylight — Stats Section
import { STATS } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";

export default function StatsSection() {
  const { ref, isVisible } = useInView(0.2);

  return (
    <section className="relative py-16 lg:py-24">
      <div className="container" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 lg:p-8 text-center group"
            >
              <div className="text-3xl lg:text-5xl font-bold font-display bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
