/**
 * B2CyberSec Home Page — fully bilingual (DE/EN)
 * Design: Apple Dark Mode + Editorial Precision
 * Section Rhythm: Hero(dark) → Stats(dark) → Services(light) → Urgency(dark) → Team(light) → FAQ(dark) → Contact(light)
 * All copy via useT() — see /lib/translations.ts
 */

import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { useT } from "@/contexts/LanguageContext";

// Image URLs (CDN — already WebP)
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/2p5EaJetTcCK87pY49WvpP/hero-cyber-dark-UCuzooJMhpjD4UWMkdL5mS.webp";
const IMG_PROFESSIONAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/2p5EaJetTcCK87pY49WvpP/svc-professional-abstract-Y7YVQUagMSUp6raRXa6ova.webp";
const IMG_NIS2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/2p5EaJetTcCK87pY49WvpP/svc-nis2-abstract-YNSNeNBSRyGN6zBzVrBaV6.webp";
const IMG_PENTEST = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/2p5EaJetTcCK87pY49WvpP/svc-pentest-abstract-FoPqCjQsKJeLEEY34ro3tm.webp";


const CALENDLY_BORIS = "https://calendly.com/b2cybersec-team/pro-services";
const CALENDLY_SENAD = "https://calendly.com/senad-b2cybersec/nis2";
const CALENDLY_BOJAN = "https://calendly.com/b2cybersec-team/pentesting";

// NIS-2 explainer video (hosted on CDN)
const NIS2_VIDEO_URL_DE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663406320538/yaVPiPBedKAitidB.mp4";
const NIS2_VIDEO_URL_EN = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663406320538/DyqKDTOwBWmqGQHm.mp4";
const NIS2_VIDEO_POSTER = "/videos/nis2-poster.jpg";

// Scroll reveal hook
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// Animated counter
function StatNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          let start = 0;
          const duration = 1500;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            if (ref.current) ref.current.textContent = Math.floor(eased * value) + suffix;
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

export default function Home() {
  useScrollReveal();
  const { t, lang } = useT();

  const services = [
    {
      id: "professional-services",
      tagKey: "services.s1.tag" as const,
      titleKey: "services.s1.title" as const,
      descKey: "services.s1.desc" as const,
      leadInitials: "BB",
      leadNameKey: "services.s1.lead.name" as const,
      leadRoleKey: "services.s1.lead.role" as const,
      ctaKey: "services.s1.cta" as const,
      img: IMG_PROFESSIONAL,
      url: CALENDLY_BORIS,
    },
    {
      id: "nis2",
      tagKey: "services.s2.tag" as const,
      titleKey: "services.s2.title" as const,
      descKey: "services.s2.desc" as const,
      leadInitials: "SD",
      leadNameKey: "services.s2.lead.name" as const,
      leadRoleKey: "services.s2.lead.role" as const,
      ctaKey: "services.s2.cta" as const,
      img: IMG_NIS2,
      url: CALENDLY_SENAD,
    },
    {
      id: "pentesting",
      tagKey: "services.s3.tag" as const,
      titleKey: "services.s3.title" as const,
      descKey: "services.s3.desc" as const,
      leadInitials: "BK",
      leadNameKey: "services.s3.lead.name" as const,
      leadRoleKey: "services.s3.lead.role" as const,
      ctaKey: "services.s3.cta" as const,
      img: IMG_PENTEST,
      url: CALENDLY_BOJAN,
    },
  ];


  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
  ];


  const assessmentPath = lang === "en" ? "/readiness-check" : "/nis2-check";

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* HERO — DARK */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center right" }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0.25) 100%)" }} />

        <div className="container relative z-10 pt-24 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card-blue mb-8 reveal">
              <div className="w-2 h-2 rounded-full bg-[#0A84FF] animate-pulse" />
              <span className="text-[#0A84FF] text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {t("hero.eyebrow")}
              </span>
            </div>

            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] mb-6 reveal"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.03em", transitionDelay: "0.1s" }}
            >
              <span className="text-gradient-blue">{t("hero.h1.line1")}</span>
              <br />
              {t("hero.h1.line2")}
            </h1>

            <p
              className="text-xl md:text-2xl text-white/70 max-w-xl leading-relaxed mb-10 reveal"
              style={{ fontFamily: "'Inter', sans-serif", transitionDelay: "0.2s" }}
            >
              {t("hero.sub")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 reveal" style={{ transitionDelay: "0.3s" }}>
              <a
                href="/cyber-status-check"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white btn-primary"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t("hero.cta.primary")}
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold btn-outline-blue"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {t("hero.cta.secondary")}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/30" />
          <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* STATS — DARK */}
      <section className="py-16 border-y border-white/10" style={{ background: "linear-gradient(135deg, #050A14 0%, #0A1628 100%)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 20, suffix: "+", labelKey: "stats.years" as const },
              { value: 200, suffix: "+", labelKey: "stats.projects" as const },
              { value: 10, suffix: "+", labelKey: "stats.experts" as const },
              { value: 100, suffix: "%", labelKey: "stats.compliance" as const },
            ].map((stat) => (
              <div key={stat.labelKey} className="reveal">
                <div
                  className="text-4xl md:text-5xl font-extrabold text-[#0A84FF] mb-1"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.03em" }}
                >
                  <StatNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/50 text-base" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {t(stat.labelKey)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — LIGHT */}
      <section id="services" className="py-24 md:py-32" style={{ background: "#f5f7fa" }}>
        <div className="container">
          <div className="mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ background: "rgba(10,132,255,0.08)", border: "1px solid rgba(10,132,255,0.2)" }}>
              <span className="text-[#0A84FF] text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {t("services.eyebrow")}
              </span>
            </div>
            <h2
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.03em", color: "#0a0a0a" }}
            >
              {t("services.headline.line1")}<br />
              <span className="text-gradient-blue">{t("services.headline.line2")}</span>
            </h2>
            <p className="mt-2 text-xl font-semibold" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: "#0A84FF", letterSpacing: "-0.01em" }}>
              {t("services.subline")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {services.map((s, i) => (
              <div
                key={s.id}
                id={s.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 reveal group flex flex-col"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={s.img}
                    alt={t(s.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="416"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.6) 100%)" }} />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold text-white" style={{ background: "#0A84FF", fontFamily: "'JetBrains Mono', monospace" }}>
                      {t(s.tagKey)}
                    </span>
                  </div>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h3
                    className="text-2xl font-extrabold mb-3"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em", color: "#0a0a0a" }}
                  >
                    {t(s.titleKey)}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed mb-6 flex-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {t(s.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NIS-2 EXPLAINER VIDEO — DARK */}
      <section
        id="nis2-video"
        className="py-24 md:py-32 relative overflow-hidden bg-black"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(10,132,255,0.25) 0%, transparent 70%)",
          }}
        />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card-blue mb-6 reveal">
                <svg
                  className="w-3.5 h-3.5 text-[#0A84FF]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span
                  className="text-[#0A84FF] text-xs font-semibold uppercase tracking-wider"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {t("nis2video.eyebrow")}
                </span>
              </div>
              <h2
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 reveal"
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  letterSpacing: "-0.03em",
                }}
              >
                {t("nis2video.headline")}
              </h2>
              <p
                className="text-white/60 text-xl leading-relaxed reveal"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t("nis2video.body")}
              </p>
            </div>

            <div className="relative reveal">
              {/* Glow backdrop */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-60 blur-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(10,132,255,0.35), rgba(10,132,255,0.05) 60%, transparent)",
                }}
                aria-hidden="true"
              />
              {/* Gradient-border video card */}
              <div className="relative gradient-border rounded-2xl overflow-hidden">
                <div className="relative aspect-video bg-black">
                  <video
                    className="w-full h-full object-cover bg-black"
                    src={lang === "en" ? NIS2_VIDEO_URL_EN : NIS2_VIDEO_URL_DE}
                    poster={NIS2_VIDEO_POSTER}
                    controls
                    preload="metadata"
                    playsInline
                    controlsList="nodownload"
                    aria-label={t("nis2video.aria")}
                  >
                    {t("nis2video.fallback")}
                  </video>
                </div>
              </div>
              <p
                className="mt-4 text-center text-xs text-white/40"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {t("nis2video.caption")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NIS-2 URGENCY — DARK */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(10,132,255,0.3) 0%, transparent 70%)" }} />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card-blue mb-8 reveal">
              <div className="w-2 h-2 rounded-full bg-[#FF453A] animate-pulse" />
              <span className="text-[#FF453A] text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {t("urgency.eyebrow")}
              </span>
            </div>
            <h2
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 reveal"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.03em" }}
            >
              {t("urgency.headline")}
            </h2>
            <p className="text-white/60 text-xl leading-relaxed mb-10 reveal" style={{ fontFamily: "'Inter', sans-serif" }}>
              {t("urgency.body")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 reveal">
              {[t("urgency.bullet1"), t("urgency.bullet2"), t("urgency.bullet3")].map((bullet, i) => (
                <div key={i} className="glass-card rounded-xl p-5 text-left">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: "rgba(10,132,255,0.15)" }}>
                    <svg className="w-5 h-5 text-[#0A84FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-white text-sm font-semibold leading-snug" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {bullet}
                  </div>
                </div>
              ))}
            </div>
            <Link
              href={assessmentPath}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white btn-primary reveal"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              {t("urgency.cta")}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL SERVICES — HORMOZI STYLE */}
      <section id="ps" className="py-24 md:py-32" style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ background: "rgba(10,132,255,0.08)", border: "1px solid rgba(10,132,255,0.2)" }}>
                <span className="text-[#0A84FF] text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {t("ps.eyebrow")}
                </span>
              </div>
              <h2
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.03em", color: "#0a0a0a" }}
              >
                {t("ps.headline.line1")}<br />
                <span className="text-gradient-blue">{t("ps.headline.line2")}</span>
              </h2>
              <p className="text-gray-500 text-xl leading-relaxed max-w-2xl mx-auto mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
                {t("ps.body")}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { labelKey: "ps.seg.network" as const, svg: <svg className="w-8 h-8 text-[#0A84FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9 9 0 013 12c0-1.47.353-2.856.978-4.082" /></svg> },
                { labelKey: "ps.seg.cloud" as const, svg: <svg className="w-8 h-8 text-[#0A84FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg> },
                { labelKey: "ps.seg.security" as const, svg: <svg className="w-8 h-8 text-[#0A84FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg> },
                { labelKey: "ps.seg.infra" as const, svg: <svg className="w-8 h-8 text-[#0A84FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" /></svg> },
              ].map((seg) => (
                <div key={seg.labelKey} className="reveal p-5 rounded-2xl" style={{ background: "#f5f7fa", border: "1px solid #e5e7eb" }}>
                  <div className="mb-3 flex justify-center">{seg.svg}</div>
                  <div className="font-bold text-sm" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: "#0a0a0a" }}>{t(seg.labelKey)}</div>
                </div>
              ))}
            </div>

            <div className="reveal rounded-2xl p-8 md:p-12 text-left" style={{ background: "linear-gradient(135deg, #2d2d2d 0%, #3a3a3a 100%)" }}>
              <h3
                className="text-2xl md:text-3xl font-extrabold text-white mb-4"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}
              >
                {t("ps.offer.headline")}
              </h3>
              <div className="space-y-3 mb-6">
                {["ps.offer.b1" as const, "ps.offer.b2" as const, "ps.offer.b3" as const, "ps.offer.b4" as const].map((key) => (
                  <div key={key} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#0A84FF] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    <span className="text-white/80 text-base" style={{ fontFamily: "'Inter', sans-serif" }}>{t(key)}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/50 text-sm italic" style={{ fontFamily: "'Inter', sans-serif" }}>
                {t("ps.offer.proof")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — DARK */}
      <section id="faq" className="py-24 md:py-32 bg-black">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16 reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card mb-6">
                <span className="text-white/50 text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {t("faq.eyebrow")}
                </span>
              </div>
              <h2
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.03em" }}
              >
                {t("faq.headline")}
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((item, i) => (
                <details
                  key={i}
                  className="glass-card rounded-xl group reveal"
                  style={{ transitionDelay: `${i * 0.05}s` }}
                >
                  <summary
                    className="flex items-center justify-between p-6 cursor-pointer list-none"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    <span className="text-white font-semibold text-2xl pr-4" style={{ letterSpacing: "-0.01em" }}>{item.q}</span>
                    <svg className="w-5 h-5 text-[#0A84FF] flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <div className="section-divider mb-4" />
                    <p className="text-white/60 text-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT — LIGHT */}
      <section id="kontakt" className="py-24 md:py-32" style={{ background: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ background: "rgba(10,132,255,0.08)", border: "1px solid rgba(10,132,255,0.2)" }}>
                <span className="text-[#0A84FF] text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {t("contact.eyebrow")}
                </span>
              </div>
              <h2
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.03em", color: "#0a0a0a" }}
              >
                {t("contact.headline.line1")}<br />
                <span className="text-gradient-blue">{t("contact.headline.line2")}</span>
              </h2>
              <p className="text-gray-500 text-xl max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                {t("contact.subline")}
              </p>
            </div>

            <div className="text-center reveal">
              <a
                href="/cyber-status-check"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white btn-primary"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {t("contact.cta")}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org FAQ structured data — language-aware */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "inLanguage": lang === "en" ? "en" : "de",
            "mainEntity": faqs.map(f => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
          }),
        }}
      />

      <Footer />
    </div>
  );
}
