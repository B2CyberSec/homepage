/**
 * CYBER-STATUS-CHECK — Relaunch (19.07.2026).
 * Design Read: B2B-Consulting-LP für GF/IT-Leiter (50-500 MA), ruhig-premium/dark-tech,
 * Linear/Apple-minimal, echte Higgsfield-Fotos. Ein Ziel: Calendly-Termin.
 * Mechanik nach Baulig-Teardown (1 CTA, Quali vor Termin, Festpreis offensiv),
 * Regeln nach taste-skill (kein Em-Dash, 1 Accent, echte Bilder, Layout-Vielfalt).
 */

import { useState, type ReactNode } from "react";
import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import { useT } from "@/contexts/LanguageContext";
import { useSeo } from "@/lib/useSeo";
import { check, CALENDLY_BASE } from "@/content/check";

const IMG = {
  hero: "/img/hero-soc.webp",
  expert: "/img/expert.webp",
  report: "/img/report.webp",
  skyline: "/img/skyline.webp",
};

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

function cal(content: string) {
  return CALENDLY_BASE + content;
}

export default function Check() {
  const { lang, setLang } = useT();
  const c = check[lang];
  useSeo(c.meta.title, c.meta.description, "index, follow");

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <SchemaLd lang={lang} />
      <Header lang={lang} setLang={setLang} cta={c.nav.cta} />

      {/* HERO — Vollbild-Foto + linksbündiger Text */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        <img
          src={IMG.hero}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        <div className="container relative">
          <div className="max-w-2xl py-32">
            <FadeUp>
              <p
                className="text-[#0A84FF] text-sm font-semibold uppercase tracking-[0.14em] mb-6"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {c.hero.eyebrow}
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] mb-6" style={{ letterSpacing: "-0.03em" }}>
                {c.hero.h1}
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-xl mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                {c.hero.sub}
              </p>
              <a
                href={cal("hero")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0A84FF] hover:bg-[#1a8fff] text-white font-bold text-base md:text-lg px-8 py-4 shadow-[0_0_30px_rgba(10,132,255,0.4)] transition-all hover:-translate-y-0.5"
              >
                {c.hero.cta}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* TRUST-LEISTE (unter Hero, kein Hero-Stack-Element) */}
      <div className="border-y border-white/10 bg-white/[0.02]">
        <div className="container py-5 text-center">
          <p className="text-sm md:text-base text-white/50" style={{ fontFamily: "'Inter', sans-serif" }}>
            {c.hero.trust}
          </p>
        </div>
      </div>

      {/* PAIN — drei grosse Zahlen, kein Card-Grid */}
      <section className="py-24 md:py-32">
        <div className="container">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-extrabold text-center max-w-3xl mx-auto mb-16" style={{ letterSpacing: "-0.03em" }}>
              {c.pain.h2}
            </h2>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-10 md:gap-6 max-w-5xl mx-auto">
            {c.pain.items.map((it, i) => (
              <FadeUp key={i} delay={i * 0.08} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-[#FF453A] whitespace-nowrap" style={{ letterSpacing: "-0.04em" }}>
                  {it.big}
                </div>
                <p className="mt-4 text-white/60 text-base md:text-lg max-w-xs mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {it.label}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* HOW — Foto links, Text + 4 Module rechts */}
      <section className="py-24 md:py-32 bg-white/[0.02] border-y border-white/10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <img src={IMG.expert} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </FadeUp>
            <div>
              <FadeUp>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ letterSpacing: "-0.03em" }}>
                  {c.how.h2}
                </h2>
                <p className="text-white/60 text-lg mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {c.how.sub}
                </p>
              </FadeUp>
              <div className="space-y-5">
                {c.how.modules.map((m, i) => (
                  <FadeUp key={i} delay={i * 0.06}>
                    <div className="flex gap-4">
                      <div className="flex-none w-9 h-9 rounded-full bg-[#0A84FF]/15 text-[#0A84FF] flex items-center justify-center font-bold" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                        {m.n}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{m.title}</h3>
                        <p className="text-white/55 text-base" style={{ fontFamily: "'Inter', sans-serif" }}>{m.text}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
              <FadeUp delay={0.2}>
                <div className="mt-10 flex items-baseline gap-3">
                  <span className="text-4xl font-extrabold text-[#0A84FF]" style={{ letterSpacing: "-0.03em" }}>{c.how.days}</span>
                  <span className="text-white/60" style={{ fontFamily: "'Inter', sans-serif" }}>{c.how.daysLabel}</span>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* RESULT — Foto (Report) gross links, Punkte rechts */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="lg:order-2">
              <FadeUp>
                <h2 className="text-3xl md:text-5xl font-extrabold mb-4" style={{ letterSpacing: "-0.03em" }}>
                  {c.result.h2}
                </h2>
                <p className="text-white/60 text-lg mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {c.result.sub}
                </p>
              </FadeUp>
              <ul className="space-y-4">
                {c.result.points.map((p, i) => (
                  <FadeUp key={i} delay={i * 0.06}>
                    <li className="flex gap-3 text-base md:text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <svg className="flex-none w-6 h-6 text-[#30D158] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/80">{p}</span>
                    </li>
                  </FadeUp>
                ))}
              </ul>
            </div>
            <FadeUp className="lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <img src={IMG.report} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* OFFER — Wert-Stapel + Festpreis */}
      <section className="py-24 md:py-32 bg-white/[0.02] border-y border-white/10">
        <div className="container">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-3" style={{ letterSpacing: "-0.03em" }}>{c.offer.h2}</h2>
            <p className="text-white/60 text-lg text-center max-w-2xl mx-auto mb-14" style={{ fontFamily: "'Inter', sans-serif" }}>{c.offer.sub}</p>
          </FadeUp>
          <div className="max-w-2xl mx-auto">
            <div className="divide-y divide-white/10 border-y border-white/10">
              {c.offer.rows.map((r, i) => (
                <FadeUp key={i} delay={Math.min(i * 0.03, 0.2)}>
                  <div className="flex items-center justify-between gap-4 py-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className={`flex-none w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${r.bonus ? "bg-[#30D158]/15 text-[#30D158]" : "bg-[#0A84FF]/15 text-[#0A84FF]"}`}>
                        {r.bonus ? "+" : "✓"}
                      </span>
                      <span className="text-base md:text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>{r.label}</span>
                    </div>
                    {r.value && (
                      <span className="flex-none text-sm md:text-base font-semibold text-[#30D158]" style={{ fontFamily: "'Inter', sans-serif" }}>{r.value}</span>
                    )}
                  </div>
                </FadeUp>
              ))}
            </div>
            <FadeUp delay={0.15}>
              <div className="mt-10 text-center">
                <p className="text-white/50" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {c.offer.totalLabel}: <span className="line-through decoration-[#FF453A]/70 decoration-2">{c.offer.total}</span>
                </p>
                <p className="mt-2 text-6xl md:text-7xl font-extrabold" style={{ letterSpacing: "-0.04em" }}>{c.offer.price}</p>
                <p className="mt-2 text-[#0A84FF] font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>{c.offer.priceNote}</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* GUARANTEE — zentrierte Aussage */}
      <section className="py-24 md:py-28">
        <div className="container">
          <FadeUp>
            <div className="max-w-xl mx-auto rounded-2xl border border-[#30D158]/30 bg-[#30D158]/[0.04] p-10 text-center">
              <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-[#30D158]/15 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#30D158]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10.5c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-3" style={{ letterSpacing: "-0.02em" }}>{c.guarantee.h2}</h2>
              <p className="text-white/60 text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>{c.guarantee.text}</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* PROOF — Foto (Skyline) als Hintergrund + Zahlen */}
      <section className="relative py-28 md:py-36 overflow-hidden border-y border-white/10">
        <img src={IMG.skyline} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" loading="lazy" />
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

      {/* SCARCITY */}
      <section className="py-14">
        <div className="container">
          <FadeUp>
            <div className="mx-auto max-w-xl flex items-center justify-center gap-3 rounded-full border border-[#FF9F0A]/30 bg-[#FF9F0A]/[0.06] px-6 py-3 text-center">
              <span className="relative flex h-2.5 w-2.5 flex-none">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF9F0A] opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF9F0A]" />
              </span>
              <span className="text-sm md:text-base font-semibold text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>{c.scarcity}</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* QUALI → CALENDLY */}
      <section id="termin" className="py-16 md:py-24">
        <div className="container">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-3" style={{ letterSpacing: "-0.03em" }}>{c.quali.h2}</h2>
            <p className="text-white/60 text-lg text-center max-w-xl mx-auto mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>{c.quali.sub}</p>
          </FadeUp>
          <FadeUp>
            <QualiFlow content={c.quali} />
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

      <Footer content={c.footer} />
    </div>
  );
}

function Header({ lang, setLang, cta }: { lang: "de" | "en"; setLang: (l: "de" | "en") => void; cta: string }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-[#0A84FF] flex items-center justify-center shadow-[0_0_16px_rgba(10,132,255,0.5)]">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10.5c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286z" />
            </svg>
          </span>
          <span className="font-bold text-lg" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>B2CyberSec</span>
        </Link>
        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-full border border-white/15 overflow-hidden text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {(["de", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 uppercase transition-colors ${lang === l ? "bg-[#0A84FF] text-white" : "text-white/50 hover:text-white"}`}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href={cal("header")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex rounded-full bg-[#0A84FF] hover:bg-[#1a8fff] text-white text-sm font-semibold px-4 py-2 transition-colors"
          >
            {cta}
          </a>
        </div>
      </div>
    </header>
  );
}

function QualiFlow({ content }: { content: (typeof check)["de"]["quali"] }) {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<"open" | "yes" | "no">("open");

  function answer(ok: boolean) {
    if (!ok) return setResult("no");
    if (step === content.questions.length - 1) setResult("yes");
    else setStep(step + 1);
  }
  function restart() {
    setStep(0);
    setResult("open");
  }

  return (
    <div className="max-w-xl mx-auto rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10 text-center">
      {result === "open" && (
        <>
          <div className="flex items-center justify-center gap-2 mb-6">
            {content.questions.map((_, i) => (
              <span key={i} className={`h-2 rounded-full transition-all ${i < step ? "w-2 bg-[#30D158]" : i === step ? "w-8 bg-[#0A84FF]" : "w-2 bg-white/20"}`} />
            ))}
          </div>
          <p className="text-xs uppercase tracking-widest text-white/40 mb-3" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {content.step} {step + 1} / {content.questions.length}
          </p>
          <h3 className="text-2xl md:text-3xl font-extrabold mb-8" style={{ letterSpacing: "-0.02em" }}>{content.questions[step]}</h3>
          <div className="flex items-center justify-center gap-4">
            <button onClick={() => answer(true)} className="px-10 py-3.5 rounded-xl bg-[#0A84FF] hover:bg-[#1a8fff] text-white font-bold text-lg transition-colors">{content.yes}</button>
            <button onClick={() => answer(false)} className="px-10 py-3.5 rounded-xl border border-white/20 hover:bg-white/10 text-white font-bold text-lg transition-colors">{content.no}</button>
          </div>
        </>
      )}
      {result === "yes" && (
        <div>
          <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#30D158]/15 border border-[#30D158]/40 flex items-center justify-center">
            <svg className="w-7 h-7 text-[#30D158]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold mb-3" style={{ letterSpacing: "-0.02em" }}>{content.okTitle}</h3>
          <p className="text-white/60 text-lg mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>{content.okText}</p>
          <a href={cal("quali")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#0A84FF] hover:bg-[#1a8fff] text-white font-bold text-lg px-8 py-4 shadow-[0_0_30px_rgba(10,132,255,0.4)] transition-all hover:-translate-y-0.5">
            {content.okCta}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </a>
          <p className="mt-4 text-sm text-white/40" style={{ fontFamily: "'Inter', sans-serif" }}>{content.okMicro}</p>
        </div>
      )}
      {result === "no" && (
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold mb-3" style={{ letterSpacing: "-0.02em" }}>{content.noTitle}</h3>
          <p className="text-white/60 text-lg mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>{content.noText}</p>
          <Link href="/nis2-check" className="inline-flex rounded-xl bg-[#0A84FF] hover:bg-[#1a8fff] text-white font-bold text-base px-8 py-4 transition-colors">{content.noCta}</Link>
          <button onClick={restart} className="block mx-auto mt-5 text-sm text-white/40 underline underline-offset-4">{content.again}</button>
        </div>
      )}
    </div>
  );
}

function Footer({ content }: { content: (typeof check)["de"]["footer"] }) {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40" style={{ fontFamily: "'Inter', sans-serif" }}>
        <span>{content.rights}</span>
        <div className="flex items-center gap-6">
          <Link href="/impressum" className="hover:text-white/70 transition-colors">{content.imprint}</Link>
          <Link href="/datenschutz" className="hover:text-white/70 transition-colors">{content.privacy}</Link>
        </div>
      </div>
    </footer>
  );
}

function SchemaLd({ lang }: { lang: "de" | "en" }) {
  const c = check[lang];
  const graph = [
    {
      "@type": "Organization",
      name: "B2CyberSec GmbH",
      url: "https://www.b2cybersec.com",
      areaServed: ["DE", "AT", "CH"],
      telephone: "+49-821-90789500",
    },
    {
      "@type": "Service",
      name: "CYBER-STATUS-CHECK",
      provider: { "@type": "Organization", name: "B2CyberSec GmbH" },
      areaServed: "DACH",
      description: c.meta.description,
      offers: { "@type": "Offer", price: "7900", priceCurrency: "EUR" },
    },
    {
      "@type": "FAQPage",
      mainEntity: c.faq.items.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}
