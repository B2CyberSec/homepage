/*
 * DESIGN: Editorial Shock — "Der Weckruf"
 * Hero: Full-screen, dark, cinematic. Massive provocative headline.
 * Cracked shield background. Orange accent. Scroll indicator.
 */
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/nFZEie8kzRFKviGqGmc9gt/hero_dark_shield-JbWCjoZivdZti8vfGCE3Fs.webp";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container pt-32 pb-20">
        <div className="max-w-5xl">
          {/* Tag */}
          <div
            className={`inline-flex items-center gap-2 mb-8 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-block w-2 h-2 bg-[#ff4500] rounded-full animate-pulse" />
            <span
              className="text-[#ff4500] text-sm font-bold uppercase tracking-[0.2em]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Spoiler: Sie sind nicht sicher
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-bold leading-[0.9] tracking-tight mb-8 transition-all duration-1000 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-white">Ihre IT-Sicherheit</span>
            <br />
            <span className="text-white">ist ein </span>
            <span className="text-[#ff4500] italic">Witz.</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg md:text-xl lg:text-2xl text-white/60 max-w-2xl leading-relaxed mb-4 transition-all duration-1000 delay-500 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Wir meinen das ernst. 80% der deutschen Unternehmen sind nicht
            NIS-2 compliant. Die BSI-Frist ist{" "}
            <span className="text-[#ff4500] font-bold">abgelaufen</span>.
            Das Bußgeld:{" "}
            <span className="text-white font-bold">bis zu 10 Mio. €</span>.
          </p>

          <p
            className={`text-base md:text-lg text-white/40 max-w-xl mb-12 transition-all duration-1000 delay-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Aber klar, Ihr IT-Admin macht das schon. Bis er kündigt.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-900 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="https://calendly.com/b2cybersec/kontakt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#ff4500] text-white font-bold text-lg uppercase tracking-wider hover:bg-[#ff5a1a] transition-all duration-200 group"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Jetzt aufwachen
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#problem"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white/80 font-bold text-lg uppercase tracking-wider hover:border-[#ff4500] hover:text-[#ff4500] transition-all duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Die unbequeme Wahrheit
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/30 text-xs uppercase tracking-[0.3em]" style={{ fontFamily: "var(--font-mono)" }}>
          Scrollen
        </span>
        <ChevronDown className="text-white/30" size={20} />
      </div>
    </section>
  );
}
