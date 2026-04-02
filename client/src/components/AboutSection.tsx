// Frosted Daylight — About Section
import { COMPANY, IMAGES, TEAM } from "@/lib/data";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users } from "lucide-react";

export default function AboutSection() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="mono-label mb-4 block">Über uns</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Ihr Security-Team
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl">
            {COMPANY.teamSize} Experten mit {COMPANY.experience} Erfahrung in
            IT-Sicherheit, Netzwerk-Engineering und Compliance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left column — Image + Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card overflow-hidden aspect-[16/10]">
              <img
                src={IMAGES.aboutVisual}
                alt="B2CyberSec Security"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3">
              <div className="glass-card p-4 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                <div>
                  <div className="text-sm font-medium text-slate-900">Standort</div>
                  <div className="text-xs text-slate-500">{COMPANY.address}</div>
                </div>
              </div>
              <div className="glass-card p-4 flex items-center gap-3">
                <Calendar className="w-5 h-5 text-orange-500 shrink-0" />
                <div>
                  <div className="text-sm font-medium text-slate-900">
                    Gegründet {COMPANY.founded}
                  </div>
                  <div className="text-xs text-slate-500">
                    Tochter der {COMPANY.parent}
                  </div>
                </div>
              </div>
              <div className="glass-card p-4 flex items-center gap-3">
                <Users className="w-5 h-5 text-orange-500 shrink-0" />
                <div>
                  <div className="text-sm font-medium text-slate-900">
                    {COMPANY.teamSize} Experten
                  </div>
                  <div className="text-xs text-slate-500">
                    Davon {COMPANY.pentesters} zertifizierte Pentester
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column — Team grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4">
              {TEAM.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                  className="glass-card p-5 text-center group hover:bg-white/90 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-100 to-indigo-100 border border-slate-200/60 flex items-center justify-center mx-auto mb-3 group-hover:border-orange-300/60 transition-colors">
                    <span className="text-sm font-bold font-mono text-slate-600">
                      {member.initials}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-slate-900 mb-0.5">
                    {member.name}
                  </div>
                  <div className="text-xs text-slate-500">{member.role}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
