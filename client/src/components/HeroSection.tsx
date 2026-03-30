/*
 * DESIGN: Editorial Shock — "Der Weckruf" V2
 * Hero: Full-screen cracked padlock image. Minimal text. Maximum visual impact.
 * "Weniger ist mehr" — the image does the talking.
 */
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/nFZEie8kzRFKviGqGmc9gt/hero_visual_v2-eLw2wvdVCbGrCAXD4bReSC.webp";

export default function HeroSection() {
  const { lang, t } = useLanguage();
  const [loaded, setLoaded] = useState(false);

  const calendlyUrl = lang === "de"
    ? "https://calendly.com/b2cybersec/kontakt"
    : "https://calendly.com/b2cybersec/contact";

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Full-bleed background — the cracked padlock IS the message */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Gebrochenes Schloss — Ihre IT-Sicherheit"
          className="w-full h-full object-cover"
        />
        {/* Gradient: transparent at top, heavy black at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
      </div>

      {/* Minimal text — bottom-anchored, punchy */}
      <div className="relative z-10 container pb-24 pt-32 w-full">
        <div className="max-w-4xl">
          {/* Live indicator */}
          <div className={`inline-flex items-center gap-2 mb-6 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="inline-block w-2 h-2 bg-[#ff4500] rounded-full animate-pulse" />
            <span className="text-[#ff4500] text-xs font-bold uppercase tracking-[0.25em]" style={{ fontFamily: "var(--font-mono)" }}>
              {t("hero.spoiler")}
            </span>
          </div>

          {/* Headline — two lines max */}
          <h1
            className={`font-bold leading-[0.88] tracking-tight mb-8 transition-all duration-1000 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 7vw, 7rem)"
            }}
          >
            <span className="text-white">{t("hero.title1")}</span>
            <br />
            <span className="text-white">{t("hero.title2")} </span>
            <span className="text-[#ff4500] italic">{t("hero.title3")}</span>
          </h1>

          {/* Single sarcastic line — no paragraph walls */}
          <p
            className={`text-white/50 mb-10 transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)" }}
          >
            {t("hero.sarcasm")}
          </p>

          {/* CTAs */}
          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#ff4500] text-white font-bold uppercase tracking-wider hover:bg-[#ff5a1a] transition-all duration-200 group"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(0.85rem, 1.2vw, 1rem)" }}
            >
              {t("hero.cta1")}
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#problem"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white/70 font-bold uppercase tracking-wider hover:border-[#ff4500] hover:text-[#ff4500] transition-all duration-200"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(0.85rem, 1.2vw, 1rem)" }}
            >
              {t("hero.cta2")}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 animate-bounce">
        <ChevronDown className="text-white/30" size={20} />
      </div>
    </section>
  );
}
