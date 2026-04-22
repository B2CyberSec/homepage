/**
 * Impressum / Imprint — bilingual via useT()
 * Routes: /impressum (DE) and /imprint (EN alias)
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { useT } from "@/contexts/LanguageContext";

export default function Impressum() {
  const { t, lang } = useT();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="container pt-32 pb-20">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-10 transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {lang === "de" ? "Zurück zur Startseite" : "Back to home"}
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card mb-6">
            <span
              className="text-white/50 text-xs font-semibold uppercase tracking-wider"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {lang === "de" ? "Rechtliches" : "Legal"}
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl font-extrabold text-white mb-3"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.03em" }}
          >
            {t("imp.title")}
          </h1>
          <p className="text-white/60 text-base md:text-lg mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            {t("imp.subtitle")}
          </p>

          <div className="space-y-10 text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>
            <section>
              <h2
                className="text-xl font-bold text-white mb-4"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}
              >
                {t("imp.section.company")} & {t("imp.section.address")}
              </h2>
              <div className="glass-card rounded-xl p-6 space-y-1 text-base leading-relaxed">
                <p className="text-white font-semibold">{t("imp.value.company")}</p>
                <p className="mt-3 whitespace-pre-line">{t("imp.value.address")}</p>
              </div>
            </section>

            <section>
              <h2
                className="text-xl font-bold text-white mb-4"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}
              >
                {t("imp.section.contact")}
              </h2>
              <div className="glass-card rounded-xl p-6 space-y-2 text-base leading-relaxed">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#0A84FF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+498219078950" className="hover:text-white transition-colors">
                    {t("imp.value.phone")}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#0A84FF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@b2cybersec.com" className="hover:text-white transition-colors">
                    {t("imp.value.email")}
                  </a>
                </div>
              </div>
            </section>

            <section>
              <h2
                className="text-xl font-bold text-white mb-4"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}
              >
                {t("imp.section.represented")}
              </h2>
              <div className="glass-card rounded-xl p-6 text-base leading-relaxed">
                <p className="text-white">{t("imp.value.represented")}</p>
              </div>
            </section>

            <section>
              <h2
                className="text-xl font-bold text-white mb-4"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}
              >
                {t("imp.section.register")}
              </h2>
              <div className="glass-card rounded-xl p-6 text-base leading-relaxed">
                <p className="text-white">{t("imp.value.register")}</p>
              </div>
            </section>

            <section>
              <h2
                className="text-xl font-bold text-white mb-4"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}
              >
                {t("imp.section.vat")}
              </h2>
              <div className="glass-card rounded-xl p-6 text-base leading-relaxed">
                <p className="text-white">{t("imp.value.vat")}</p>
              </div>
            </section>

            <section>
              <h2
                className="text-xl font-bold text-white mb-4"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}
              >
                {t("imp.section.founded")}
              </h2>
              <div className="glass-card rounded-xl p-6 text-base leading-relaxed">
                <p className="text-white">{t("imp.value.founded")}</p>
              </div>
            </section>

            <section>
              <h2
                className="text-xl font-bold text-white mb-4"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}
              >
                {t("imp.section.responsible")}
              </h2>
              <div className="glass-card rounded-xl p-6 text-base leading-relaxed">
                <p className="text-white">{t("imp.value.represented")}</p>
                <p>{t("imp.value.company")}</p>
              </div>
            </section>

            <section>
              <h2
                className="text-xl font-bold text-white mb-4"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}
              >
                {t("imp.section.disputeTitle")}
              </h2>
              <div className="glass-card rounded-xl p-6 text-base leading-relaxed">
                <p>{t("imp.section.disputeBody")}</p>
              </div>
            </section>

            <section>
              <h2
                className="text-xl font-bold text-white mb-4"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}
              >
                {t("imp.section.liabilityTitle")}
              </h2>
              <div className="glass-card rounded-xl p-6 text-base leading-relaxed">
                <p>{t("imp.section.liabilityBody")}</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
