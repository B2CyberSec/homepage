/*
 * DESIGN: Editorial Shock — "Der Weckruf"
 * Team: SOC image background. Stats about the team. No individual photos.
 * Sarcastic but professional.
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/nFZEie8kzRFKviGqGmc9gt/team_augsburg-isMkQDs3DeU7fBD9uvXdhZ.webp";

export default function TeamSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={TEAM_IMG}
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]" />
      </div>

      <div ref={ref} className="relative z-10 container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <p
              className="text-[#ff4500] text-sm font-bold uppercase tracking-[0.2em] mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              // Wer wir sind
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              17 Experten.
              <br />
              20+ Jahre.
              <br />
              <span className="text-white/40">Null Toleranz für Bullshit.</span>
            </h2>
            <div className="space-y-4 text-white/60 text-lg leading-relaxed">
              <p>
                B2CyberSec ist kein Startup mit drei Leuten und einem LinkedIn-Profil. 
                Wir sind 17 IT-Security-Spezialisten mit über 20 Jahren Erfahrung. 
                Sitz in Augsburg. Einsatzgebiet: ganz Deutschland.
              </p>
              <p>
                Wir machen keine PowerPoint-Präsentationen über Cybersecurity. 
                Wir <span className="text-white font-bold">machen</span> Cybersecurity. 
                Pentests, NIS-2 Audits, CISO-Beratung, 24/7 Monitoring. 
                Hands-on, nicht Hands-off.
              </p>
              <p className="text-white/40" style={{ fontFamily: "var(--font-mono)" }}>
                // Und ja, wir können auch innerhalb von 48 Stunden einen Experten bereitstellen. 
                Weil wir wissen, dass Cyberangriffe nicht auf Ihren Terminkalender Rücksicht nehmen.
              </p>
            </div>
          </div>

          {/* Right: Stats */}
          <div
            className={`grid grid-cols-2 gap-6 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {[
              { number: "17", label: "Security-Experten", sub: "Kein Freelancer-Netzwerk" },
              { number: "20+", label: "Jahre Erfahrung", sub: "In IT-Security & Netzwerk" },
              { number: "48h", label: "Experte verfügbar", sub: "Wenn es brennt" },
              { number: "24/7", label: "Monitoring", sub: "Auch Weihnachten" },
              { number: "18", label: "Sektoren abgedeckt", sub: "NIS-2 Compliance" },
              { number: "100%", label: "Transparente Preise", sub: "Kein 'Preis auf Anfrage'" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-5 border border-white/5 bg-white/[0.02]"
              >
                <span
                  className="text-3xl md:text-4xl font-bold text-[#ff4500] block"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.number}
                </span>
                <span className="text-white text-sm font-bold block mt-1" style={{ fontFamily: "var(--font-display)" }}>
                  {stat.label}
                </span>
                <span className="text-white/30 text-xs block mt-1" style={{ fontFamily: "var(--font-mono)" }}>
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
