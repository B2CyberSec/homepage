/**
 * Stats Section – Bauhaus Security Design
 * Animated counters showing key cybersecurity statistics.
 * Uses JetBrains Mono for numbers, subtle border separators.
 */
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const stats: Stat[] = [
  { value: 58, suffix: "%", label: "der KMU waren 2024 von Cyberangriffen betroffen" },
  { value: 200, suffix: "T€", label: "durchschnittlicher Schaden pro Angriff" },
  { value: 29, suffix: "k", label: "NIS-2 betroffene Unternehmen in Deutschland" },
  { value: 4, suffix: " Wochen", label: "bis zur NIS-2 Readiness mit B2CyberSec" },
];

function AnimatedCounter({ value, suffix, prefix }: { value: number; suffix: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-mono font-bold text-3xl sm:text-4xl lg:text-5xl text-signal tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 lg:py-20 border-y border-border">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`text-center lg:text-left ${
                i > 0 ? "lg:border-l lg:border-border lg:pl-8" : ""
              }`}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              <p className="mt-2 text-sm text-muted-foreground leading-snug max-w-[200px] mx-auto lg:mx-0">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
