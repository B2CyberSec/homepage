/*
 * DESIGN: Editorial Shock — "Der Weckruf"
 * Contact: Final CTA section with inline Calendly widget.
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Calendar, ArrowRight } from "lucide-react";
import { useEffect } from "react";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { lang, t } = useLanguage();

  const calendlyUrl = lang === "de"
    ? "https://calendly.com/b2cybersec/kontakt"
    : "https://calendly.com/b2cybersec/contact";

  // Load Calendly widget script
  useEffect(() => {
    const existing = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
    // Also add Calendly CSS
    const existingCss = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]');
    if (!existingCss) {
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <section id="kontakt" className="relative py-24 md:py-32 bg-[#0d0d0d]">
      <div ref={ref} className="container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p
              className={`text-[#ff4500] text-sm font-bold uppercase tracking-[0.2em] mb-6 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {t("contact.tag")}
            </p>
            <h2
              className={`text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("contact.title1")}
              <br />
              {t("contact.title2")}
            </h2>
          </div>

          {/* Two options */}
          <div className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Option A: Bad */}
            <div className="p-8 border border-white/5 bg-white/[0.02] text-left">
              <div className="text-4xl mb-4">&#x1F648;</div>
              <h3 className="text-xl font-bold text-white/40 mb-4" style={{ fontFamily: "var(--font-display)" }}>
                {t("contact.optionA_title")}
              </h3>
              <ul className="space-y-3 text-white/40 text-sm">
                <li>{t("contact.optionA_1")}</li>
                <li>{t("contact.optionA_2")}</li>
                <li>{t("contact.optionA_3")}</li>
                <li>{t("contact.optionA_4")}</li>
                <li>{t("contact.optionA_5")}</li>
              </ul>
              <p className="text-white/20 text-xs mt-6" style={{ fontFamily: "var(--font-mono)" }}>
                {t("contact.optionA_note")}
              </p>
            </div>

            {/* Option B: Good */}
            <div className="p-8 border border-[#ff4500]/30 bg-[#ff4500]/[0.05] text-left">
              <div className="text-4xl mb-4">&#x1F6E1;&#xFE0F;</div>
              <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
                {t("contact.optionB_title")}
              </h3>
              <ul className="space-y-3 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#ff4500]">&rarr;</span>
                  {t("contact.optionB_1")}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff4500]">&rarr;</span>
                  {t("contact.optionB_2")}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff4500]">&rarr;</span>
                  {t("contact.optionB_3")}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff4500]">&rarr;</span>
                  {t("contact.optionB_4")}
                </li>
              </ul>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#ff4500] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#ff5a1a] transition-all group"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Calendar size={16} />
                {t("contact.optionB_cta")}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Calendly Inline Widget */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <p className="text-[#ff4500] text-sm font-bold uppercase tracking-[0.2em] mb-3" style={{ fontFamily: "var(--font-mono)" }}>
                {t("calendly.tag")}
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                {t("calendly.title1")} {t("calendly.title2")}
              </h3>
              <p className="text-white/50 mt-3 max-w-lg mx-auto">{t("calendly.desc")}</p>
            </div>
            <div
              className="calendly-inline-widget"
              data-url={`${calendlyUrl}?hide_gdpr_banner=1&background_color=0d0d0d&text_color=ffffff&primary_color=ff4500`}
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>

          {/* Contact methods */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-8 transition-all duration-700 delay-600 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/60 hover:text-[#ff4500] transition-colors">
              <Calendar size={20} />
              <span className="text-sm" style={{ fontFamily: "var(--font-mono)" }}>calendly.com/b2cybersec</span>
            </a>
            <a href="mailto:info@b2cybersec.com" className="flex items-center gap-3 text-white/60 hover:text-[#ff4500] transition-colors">
              <Mail size={20} />
              <span className="text-sm" style={{ fontFamily: "var(--font-mono)" }}>info@b2cybersec.com</span>
            </a>
          </div>

          {/* Final sarcastic note */}
          <p className={`text-white/20 text-xs mt-12 text-center transition-all duration-700 delay-800 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ fontFamily: "var(--font-mono)" }}>
            {t("contact.ps")}
          </p>
        </div>
      </div>
    </section>
  );
}
