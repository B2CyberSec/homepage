/**
 * Datenschutz / Privacy Policy — bilingual via useT()
 * Routes: /datenschutz (DE) and /privacy (EN alias)
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { useT } from "@/contexts/LanguageContext";

export default function Datenschutz() {
  const { t, lang } = useT();

  const sections = [
    { title: t("ds.s1.title"), body: t("ds.s1.body") },
    { title: t("ds.s2.title"), body: t("ds.s2.body") },
    { title: t("ds.s3.title"), body: t("ds.s3.body") },
    { title: t("ds.s4.title"), body: t("ds.s4.body") },
    { title: t("ds.s5.title"), body: t("ds.s5.body") },
    { title: t("ds.s6.title"), body: t("ds.s6.body") },
    { title: t("ds.s7.title"), body: t("ds.s7.body") },
    { title: t("ds.s8.title"), body: t("ds.s8.body") },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="container pt-32 pb-20">
        <div className="max-w-3xl mx-auto">
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
            {t("ds.title")}
          </h1>
          <p className="text-white/60 text-base md:text-lg mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            {t("ds.subtitle")}
          </p>

          <div className="space-y-8 text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>
            {sections.map((s) => (
              <section key={s.title}>
                <h2
                  className="text-xl font-bold text-white mb-4"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}
                >
                  {s.title}
                </h2>
                <div className="glass-card rounded-xl p-6 text-base leading-relaxed">
                  <p className="whitespace-pre-line">{s.body}</p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
