/**
 * Startseite (Relaunch) — Funnel-Top im neuen Premium-Stil.
 * Ein Ziel: Erstgespräch buchen oder weiter zum CYBER-STATUS-CHECK (/check).
 * Regeln nach taste-skill (kein Em-Dash, 1 Accent, echte Bilder, Layout-Vielfalt).
 */

import { useState, type ReactNode } from "react";
import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import { useT } from "@/contexts/LanguageContext";
import { useSeo } from "@/lib/useSeo";
import { home } from "@/content/home";
import { CALENDLY_BASE } from "@/content/check";

const IMG = { shield: "/img/shield.webp", handshake: "/img/handshake.webp" };
const VIDEO = {
  de: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663406320538/yaVPiPBedKAitidB.mp4",
  en: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663406320538/DyqKDTOwBWmqGQHm.mp4",
  poster: "/videos/nis2-poster.jpg",
};

function cal(content: string) {
  return CALENDLY_BASE + content;
}

function FadeUp({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function HomeNew() {
  const { lang, setLang } = useT();
  const c = home[lang];
  useSeo(c.meta.title, c.meta.description, "index, follow");

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <FaqSchema lang={lang} />
      <Header lang={lang} setLang={setLang} cta={lang === "de" ? "Gespräch buchen" : "Book a call"} />

      {/* HERO — Text links, Shield-Foto rechts */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        <img src={IMG.shield} alt="" className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="container relative">
          <div className="max-w-2xl py-32">
            <FadeUp>
              <p className="text-[#0A84FF] text-sm font-semibold uppercase tracking-[0.14em] mb-6" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {c.hero.eyebrow}
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] mb-6" style={{ letterSpacing: "-0.03em" }}>
                {c.hero.h1}
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-xl mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                {c.hero.sub}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a href={cal("home_hero")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#0A84FF] hover:bg-[#1a8fff] text-white font-bold text-base md:text-lg px-8 py-4 shadow-[0_0_30px_rgba(10,132,255,0.4)] transition-all hover:-translate-y-0.5">
                  {c.hero.cta}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </a>
                <Link href="/check" className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {c.hero.secondary}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* TRUST-LEISTE */}
      <div className="border-y border-white/10 bg-white/[0.02]">
        <div className="container py-5 text-center">
          <p className="text-sm md:text-base text-white/50" style={{ fontFamily: "'Inter', sans-serif" }}>{c.trust}</p>
        </div>
      </div>

      {/* PROBLEM — drei Zahlen */}
      <section className="py-24 md:py-32">
        <div className="container">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-extrabold text-center max-w-3xl mx-auto mb-16" style={{ letterSpacing: "-0.03em" }}>{c.problem.h2}</h2>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-10 md:gap-6 max-w-5xl mx-auto">
            {c.problem.items.map((it, i) => (
              <FadeUp key={i} delay={i * 0.08} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-[#FF453A] whitespace-nowrap" style={{ letterSpacing: "-0.04em" }}>{it.big}</div>
                <p className="mt-4 text-white/60 text-base md:text-lg max-w-xs mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>{it.label}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION — Check-Teaser, 3 Fakten + Link auf /check */}
      <section className="py-24 md:py-32 bg-white/[0.02] border-y border-white/10">
        <div className="container text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-3" style={{ letterSpacing: "-0.03em" }}>{c.solution.h2}</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-14" style={{ fontFamily: "'Inter', sans-serif" }}>{c.solution.sub}</p>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {c.solution.facts.map((f, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="text-4xl md:text-5xl font-extrabold text-[#0A84FF]" style={{ letterSpacing: "-0.03em" }}>{f.value}</div>
                <p className="mt-2 text-white/55 text-base md:text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>{f.label}</p>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.1}>
            <Link href="/check" className="inline-flex items-center gap-2 rounded-xl border border-[#0A84FF]/50 hover:bg-[#0A84FF]/10 text-[#0A84FF] font-bold text-base px-8 py-4 transition-colors" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
              {c.solution.cta}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* VIDEO — NIS-2 Erklärvideo, click-to-play */}
      <section className="py-24 md:py-32">
        <div className="container">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-3" style={{ letterSpacing: "-0.03em" }}>{c.video.h2}</h2>
            <p className="text-white/60 text-lg text-center max-w-2xl mx-auto mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>{c.video.sub}</p>
          </FadeUp>
          <FadeUp>
            <VideoPlayer src={lang === "de" ? VIDEO.de : VIDEO.en} poster={VIDEO.poster} caption={c.video.caption} />
          </FadeUp>
        </div>
      </section>

      {/* PROOF — Handshake-Foto Hintergrund + Zahlen */}
      <section className="relative py-28 md:py-36 overflow-hidden border-y border-white/10">
        <img src={IMG.handshake} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="container relative">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-extrabold text-center max-w-3xl mx-auto mb-6" style={{ letterSpacing: "-0.03em" }}>{c.proof.h2}</h2>
            <p className="text-white/70 text-lg md:text-xl text-center max-w-2xl mx-auto mb-16" style={{ fontFamily: "'Inter', sans-serif" }}>{c.proof.claim}</p>
          </FadeUp>
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
            {c.proof.stats.map((s, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="text-4xl md:text-5xl font-extrabold text-[#0A84FF]" style={{ letterSpacing: "-0.03em" }}>{s.value}</div>
                <p className="mt-2 text-sm md:text-base text-white/55" style={{ fontFamily: "'Inter', sans-serif" }}>{s.label}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 md:py-32">
        <div className="container text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-3" style={{ letterSpacing: "-0.03em" }}>{c.final.h2}</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>{c.final.sub}</p>
            <a href={cal("home_final")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#0A84FF] hover:bg-[#1a8fff] text-white font-bold text-base md:text-lg px-8 py-4 shadow-[0_0_30px_rgba(10,132,255,0.4)] transition-all hover:-translate-y-0.5">
              {c.final.cta}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </a>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white/[0.02] border-t border-white/10">
        <div className="container">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12" style={{ letterSpacing: "-0.03em" }}>{c.faq.h2}</h2>
          </FadeUp>
          <div className="max-w-2xl mx-auto space-y-3">
            {c.faq.items.map((f, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <details className="group rounded-xl border border-white/10 bg-white/[0.02] px-6 py-5">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-lg font-bold">
                    {f.q}
                    <span className="text-[#0A84FF] text-2xl font-light transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-white/60 text-base leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{f.a}</p>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}

function VideoPlayer({ src, poster, caption }: { src: string; poster: string; caption: string }) {
  const [play, setPlay] = useState(false);
  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black">
        {play ? (
          <video className="absolute inset-0 w-full h-full" src={src} poster={poster} controls autoPlay />
        ) : (
          <button onClick={() => setPlay(true)} className="absolute inset-0 w-full h-full group" aria-label="Video abspielen">
            <img src={poster} alt="" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-20 h-20 rounded-full bg-[#0A84FF] flex items-center justify-center shadow-[0_0_40px_rgba(10,132,255,0.6)] group-hover:scale-105 transition-transform">
                <svg className="w-8 h-8 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </span>
            </span>
          </button>
        )}
      </div>
      <p className="mt-4 text-center text-white/50 text-base" style={{ fontFamily: "'Inter', sans-serif" }}>{caption}</p>
    </div>
  );
}

function Header({ lang, setLang, cta }: { lang: "de" | "en"; setLang: (l: "de" | "en") => void; cta: string }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-[#0A84FF] flex items-center justify-center shadow-[0_0_16px_rgba(10,132,255,0.5)]">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10.5c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286z" /></svg>
          </span>
          <span className="font-bold text-lg" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>B2CyberSec</span>
        </Link>
        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-full border border-white/15 overflow-hidden text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {(["de", "en"] as const).map((l) => (
              <button key={l} onClick={() => setLang(l)} className={`px-3 py-1.5 uppercase transition-colors ${lang === l ? "bg-[#0A84FF] text-white" : "text-white/50 hover:text-white"}`}>{l}</button>
            ))}
          </div>
          <a href={cal("home_header")} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex rounded-full bg-[#0A84FF] hover:bg-[#1a8fff] text-white text-sm font-semibold px-4 py-2 transition-colors">{cta}</a>
        </div>
      </div>
    </header>
  );
}

function Footer({ lang }: { lang: "de" | "en" }) {
  const t = lang === "de"
    ? { rights: "© 2026 B2CyberSec GmbH · Werner-von-Siemens-Str. 6 · 86159 Augsburg", imp: "Impressum", pri: "Datenschutz" }
    : { rights: "© 2026 B2CyberSec GmbH · Werner-von-Siemens-Str. 6 · 86159 Augsburg", imp: "Imprint", pri: "Privacy" };
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40" style={{ fontFamily: "'Inter', sans-serif" }}>
        <span>{t.rights}</span>
        <div className="flex items-center gap-6">
          <Link href="/impressum" className="hover:text-white/70 transition-colors">{t.imp}</Link>
          <Link href="/datenschutz" className="hover:text-white/70 transition-colors">{t.pri}</Link>
        </div>
      </div>
    </footer>
  );
}

function FaqSchema({ lang }: { lang: "de" | "en" }) {
  const c = home[lang];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: lang,
          mainEntity: c.faq.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }),
      }}
    />
  );
}
