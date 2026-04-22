/*
 * B2CyberSec Home Page
 * Design: Apple Dark Mode + Editorial Precision
 * Sections: Hero, Trust Bar, Services (3), Assessment CTA, FAQ, Contact
 * Copy: Hormozi/Semmelroth style — provocative, direct, result-focused
 */

import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

// Scroll reveal hook
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// Stat counter animation
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

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* ═══════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/2p5EaJetTcCK87pY49WvpP/b2cybersec-hero-bg-TRjVChw6JqazBx7TCmvsdi.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 100%)" }} />

        <div className="container relative z-10 pt-24 pb-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card-blue mb-8 reveal">
              <div className="w-2 h-2 rounded-full bg-[#0A84FF] animate-pulse" />
              <span className="text-[#0A84FF] text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                NIS-2 tritt in Kraft — Sind Sie bereit?
              </span>
            </div>

            {/* Main headline */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.0] mb-6 reveal"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.03em", transitionDelay: "0.1s" }}
            >
              Hacker schlafen nicht.
              <br />
              <span className="text-gradient-blue">Ihre IT-Abteilung</span>
              <br />
              schon.
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed mb-10 reveal"
              style={{ fontFamily: "'Inter', sans-serif", transitionDelay: "0.2s" }}
            >
              Als Geschäftsführer haften Sie persönlich für Sicherheitsvorfälle. NIS-2 macht das zur Pflicht. Wir machen es zur Stärke — in 20+ Jahren haben wir gelernt, wie.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 reveal" style={{ transitionDelay: "0.3s" }}>
              <Link
                href="/nis2-check"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white btn-primary"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Kostenloser NIS-2 Check
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold btn-outline-blue"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Services ansehen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/30" />
          <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TRUST BAR — Stats
      ═══════════════════════════════════════════════════ */}
      <section className="py-12 border-y border-white/10" style={{ background: "rgba(10,132,255,0.04)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 20, suffix: "+", label: "Jahre Erfahrung" },
              { value: 200, suffix: "+", label: "Projekte abgeschlossen" },
              { value: 3, suffix: "", label: "Spezialisierte Experten" },
              { value: 100, suffix: "%", label: "Compliance-Fokus" },
            ].map((stat) => (
              <div key={stat.label} className="reveal">
                <div
                  className="text-4xl md:text-5xl font-extrabold text-[#0A84FF] mb-1"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.03em" }}
                >
                  <StatNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/50 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SERVICES OVERVIEW
      ═══════════════════════════════════════════════════ */}
      <section id="services" className="py-24 md:py-32">
        <div className="container">
          <div className="mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card mb-6">
              <span className="text-white/50 text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Unsere 3 Säulen
              </span>
            </div>
            <h2
              className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.03em" }}
            >
              Kein Bauchladen.
              <br />
              <span className="text-gradient-blue">Drei Disziplinen.</span>
              <br />
              Drei Experten.
            </h2>
            <p className="mt-4 text-white/60 text-lg max-w-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
              Wir verkaufen keine IT-Security-Pakete. Wir lösen konkrete Probleme — mit dem richtigen Experten für Ihr spezifisches Thema.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Service 1: Professional Services */}
            <div id="professional-services" className="gradient-border p-8 reveal group hover:scale-[1.01] transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-[#0A84FF]/10 border border-[#0A84FF]/30 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#0A84FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-[#0A84FF] text-xs font-semibold uppercase tracking-wider mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Säule 01
              </div>
              <h3
                className="text-2xl font-extrabold text-white mb-3"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}
              >
                Professional Services
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                Sie brauchen einen Netzwerk-Spezialisten für 3 Monate? Einen Cloud-Architekten für die Migration? Einen Security-Engineer für das neue Rechenzentrum? Wir liefern den richtigen Experten — ohne Headhunter-Gebühren, ohne Monate des Wartens.
              </p>
              <div className="flex items-center gap-3 mb-6 p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.04)" }}>
                <div className="w-8 h-8 rounded-full bg-[#0A84FF]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#0A84FF] text-xs font-bold">BB</span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Boris Bošnjak</div>
                  <div className="text-white/40 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>CEO, 20+ Jahre IT-Erfahrung</div>
                </div>
              </div>
              <a
                href="https://calendly.com/b2cybersec-team/pro-services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-bold text-white btn-primary w-full justify-center"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Termin mit Boris buchen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Service 2: NIS-2 / Compliance */}
            <div id="nis2" className="gradient-border p-8 reveal group hover:scale-[1.01] transition-transform duration-300" style={{ transitionDelay: "0.1s" }}>
              <div className="w-12 h-12 rounded-xl bg-[#0A84FF]/10 border border-[#0A84FF]/30 flex items-center justify-center mb-6"
                style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/2p5EaJetTcCK87pY49WvpP/b2cybersec-nis2-section-Nqq6sJ5EggL7HSXC6hUwTb.webp)`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <svg className="w-6 h-6 text-[#0A84FF] drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-[#0A84FF] text-xs font-semibold uppercase tracking-wider mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Säule 02
              </div>
              <h3
                className="text-2xl font-extrabold text-white mb-3"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}
              >
                NIS-2 & Compliance
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                Als Geschäftsführer haften Sie persönlich. NIS-2, ISO 27001, DORA, GDPR — kein Unternehmen kann es sich leisten, diese Pflichten zu ignorieren. Unser CISSP-zertifizierter Ex-CISO der Zentralbank BiH und Ex-PwC-Berater macht Compliance zu Ihrem Wettbewerbsvorteil.
              </p>
              <div className="flex items-center gap-3 mb-6 p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.04)" }}>
                <div className="w-8 h-8 rounded-full bg-[#0A84FF]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#0A84FF] text-xs font-bold">SD</span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Senad Džananović</div>
                  <div className="text-white/40 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>CISSP, ex-CISO, ex-PwC, 20+ Jahre</div>
                </div>
              </div>
              <a
                href="https://calendly.com/b2cybersec-team/pro-services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-bold text-white btn-primary w-full justify-center"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Termin mit Senad buchen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Service 3: Pentesting */}
            <div id="pentesting" className="gradient-border p-8 reveal group hover:scale-[1.01] transition-transform duration-300" style={{ transitionDelay: "0.2s" }}>
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#0A84FF]/30 flex items-center justify-center mb-6"
                style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/2p5EaJetTcCK87pY49WvpP/b2cybersec-pentesting-section-QPRTyooSSzNoaaQuhC5j4X.webp)`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <svg className="w-6 h-6 text-white drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="text-[#0A84FF] text-xs font-semibold uppercase tracking-wider mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Säule 03
              </div>
              <h3
                className="text-2xl font-extrabold text-white mb-3"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}
              >
                Penetration Testing
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                Wissen Sie wirklich, wie sicher Ihre Systeme sind? Oder glauben Sie es nur? Wir denken wie Angreifer — und finden die Lücken, bevor es andere tun. Mit spezialisierten Partnern in Sarajevo und Kosovo für maximale Tiefe.
              </p>
              <div className="flex items-center gap-3 mb-6 p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.04)" }}>
                <div className="w-8 h-8 rounded-full bg-[#0A84FF]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#0A84FF] text-xs font-bold">BK</span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Bojan Kornijenko</div>
                  <div className="text-white/40 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>Pentesting Lead, UnityFive & Sentry</div>
                </div>
              </div>
              <a
                href="https://calendly.com/b2cybersec-team/pentesting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-bold text-white btn-primary w-full justify-center"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Termin mit Bojan buchen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          NIS-2 URGENCY SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #000 0%, #050A14 100%)" }}>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/2p5EaJetTcCK87pY49WvpP/b2cybersec-assessment-bg-R8EQYtfvUyzesr9TTha9jf.webp)`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card-blue mb-8 reveal">
              <div className="w-2 h-2 rounded-full bg-[#FF453A] animate-pulse" />
              <span className="text-[#FF453A] text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Achtung: Persönliche Haftung
              </span>
            </div>
            <h2
              className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 reveal"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.03em" }}
            >
              NIS-2 ist kein
              <br />
              IT-Problem.
              <br />
              <span className="text-gradient-blue">Es ist Ihr Problem.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10 reveal" style={{ fontFamily: "'Inter', sans-serif" }}>
              Die NIS-2-Richtlinie macht Geschäftsführer persönlich haftbar für Cybersicherheitsvorfälle. Bußgelder bis zu 10 Millionen Euro oder 2% des weltweiten Jahresumsatzes. Keine Ausreden, keine Delegation. Wissen Sie, wo Ihr Unternehmen steht?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 reveal">
              {[
                { icon: "⚠️", title: "Persönliche Haftung", desc: "Geschäftsführer haften mit privatem Vermögen" },
                { icon: "💶", title: "Bis 10 Mio. Euro", desc: "Bußgelder für Verstöße gegen NIS-2" },
                { icon: "⏰", title: "Jetzt Pflicht", desc: "Umsetzungsfrist ist abgelaufen" },
              ].map((item) => (
                <div key={item.title} className="glass-card rounded-xl p-5 text-left">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{item.title}</div>
                  <div className="text-white/50 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>{item.desc}</div>
                </div>
              ))}
            </div>
            <Link
              href="/nis2-check"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl text-lg font-bold text-white btn-primary reveal"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Jetzt NIS-2 Readiness Check starten — kostenlos
            </Link>
            <p className="mt-3 text-white/30 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
              Dauert 5 Minuten · Sofortige Auswertung · Keine Verpflichtung
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FAQ SECTION (AI-optimized)
      ═══════════════════════════════════════════════════ */}
      <section id="faq" className="py-24 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16 reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card mb-6">
                <span className="text-white/50 text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Häufige Fragen
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl font-extrabold text-white"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.03em" }}
              >
                Was Sie wirklich
                <br />
                <span className="text-gradient-blue">wissen wollen</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Was kostet NIS-2 Compliance?",
                  a: "Das hängt von Ihrer Unternehmensgröße und dem aktuellen Reifegrad ab. Für mittelständische Unternehmen rechnen wir typischerweise mit einem initialen Assessment von 3.000–8.000 Euro, gefolgt von einem Umsetzungsprojekt von 15.000–50.000 Euro. Die Alternative — ein Bußgeld von bis zu 10 Millionen Euro — macht die Investition zur einfachsten Entscheidung des Jahres."
                },
                {
                  q: "Brauche ich einen CISO?",
                  a: "Nicht unbedingt einen Vollzeit-CISO. Was Sie brauchen, ist jemanden, der die Verantwortung für Ihre Informationssicherheit trägt und die richtigen Entscheidungen trifft. Unser Fractional-CISO-Modell gibt Ihnen die Expertise eines erfahrenen CISOs (CISSP-zertifiziert, ex-PwC) zu einem Bruchteil der Kosten — ohne Headhunter, ohne Einarbeitungszeit."
                },
                {
                  q: "Wie lange dauert ein Penetration Test?",
                  a: "Ein fokussierter Pentest einer Webanwendung dauert typischerweise 3–5 Tage. Ein umfassendes Netzwerk-Pentest-Projekt für ein mittelständisches Unternehmen 2–4 Wochen. Sie erhalten einen detaillierten Bericht mit allen gefundenen Schwachstellen, Risikobewertung und konkreten Handlungsempfehlungen — keine generischen Templates."
                },
                {
                  q: "Fällt mein Unternehmen unter NIS-2?",
                  a: "NIS-2 betrifft Unternehmen in 18 kritischen Sektoren mit mehr als 50 Mitarbeitern oder 10 Millionen Euro Jahresumsatz. Dazu gehören Energie, Transport, Gesundheit, Finanzwesen, digitale Infrastruktur und viele mehr. Machen Sie unseren kostenlosen NIS-2 Readiness Check — in 5 Minuten wissen Sie, wo Sie stehen."
                },
                {
                  q: "Was unterscheidet B2CyberSec von anderen IT-Security-Anbietern?",
                  a: "Drei Dinge: Erstens, wir haben echte Experten — kein Junior-Team mit Zertifikaten, sondern Leute mit 20+ Jahren Praxiserfahrung als CISO, bei PwC und in kritischen Infrastrukturen. Zweitens, wir verkaufen Ergebnisse, keine Stunden. Drittens, wir sind klein genug, um persönlich zu sein, und erfahren genug, um es richtig zu machen."
                },
                {
                  q: "Wie schnell kann B2CyberSec einen IT-Experten vermitteln?",
                  a: "In der Regel innerhalb von 1–2 Wochen. Wir haben ein Netzwerk spezialisierter IT-Experten für Netzwerk, Security, Cloud und Infrastruktur. Kein Headhunter-Prozess, keine monatelange Suche — wir kennen die Leute persönlich und können schnell handeln."
                },
              ].map((item, i) => (
                <details
                  key={i}
                  className="glass-card rounded-xl group reveal"
                  style={{ transitionDelay: `${i * 0.05}s` }}
                >
                  <summary
                    className="flex items-center justify-between p-6 cursor-pointer list-none"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    <span className="text-white font-semibold text-base pr-4" style={{ letterSpacing: "-0.01em" }}>{item.q}</span>
                    <svg className="w-5 h-5 text-[#0A84FF] flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <div className="section-divider mb-4" />
                    <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CONTACT SECTION
      ═══════════════════════════════════════════════════ */}
      <section id="kontakt" className="py-24 md:py-32 border-t border-white/10">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2
                className="text-4xl md:text-6xl font-extrabold text-white mb-4"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.03em" }}
              >
                Sprechen wir.
                <br />
                <span className="text-gradient-blue">Ohne Verkaufsdruck.</span>
              </h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                Kein Pitch, kein Druck. Wir hören zu, stellen die richtigen Fragen und geben Ihnen eine ehrliche Einschätzung — ob wir zusammenpassen oder nicht.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Phone */}
              <div className="glass-card rounded-xl p-6 text-center reveal">
                <div className="w-12 h-12 rounded-xl bg-[#0A84FF]/10 border border-[#0A84FF]/30 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#0A84FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-white/40 text-xs uppercase tracking-wider mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Telefon</div>
                <a href="tel:+498219078950" className="text-white font-semibold hover:text-[#0A84FF] transition-colors" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  +49 (0) 821 90 789 500
                </a>
              </div>

              {/* Email */}
              <div className="glass-card rounded-xl p-6 text-center reveal" style={{ transitionDelay: "0.1s" }}>
                <div className="w-12 h-12 rounded-xl bg-[#0A84FF]/10 border border-[#0A84FF]/30 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#0A84FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-white/40 text-xs uppercase tracking-wider mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>E-Mail</div>
                <a href="mailto:boris@b2cybersec.com" className="text-white font-semibold hover:text-[#0A84FF] transition-colors" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  boris@b2cybersec.com
                </a>
              </div>

              {/* NIS-2 Check CTA */}
              <div className="glass-card-blue rounded-xl p-6 text-center reveal" style={{ transitionDelay: "0.2s" }}>
                <div className="w-12 h-12 rounded-xl bg-[#0A84FF]/20 border border-[#0A84FF]/40 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#0A84FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-white/40 text-xs uppercase tracking-wider mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Schnellstart</div>
                <Link href="/nis2-check" className="text-[#0A84FF] font-semibold hover:text-white transition-colors" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  NIS-2 Readiness Check →
                </Link>
              </div>
            </div>

            {/* Calendly embeds */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Boris Bošnjak", role: "Professional Services", url: "https://calendly.com/b2cybersec-team/pro-services" },
                { name: "Senad Džananović", role: "NIS-2 & Compliance", url: "https://calendly.com/b2cybersec-team/pro-services" },
                { name: "Bojan Kornijenko", role: "Penetration Testing", url: "https://calendly.com/b2cybersec-team/pentesting" },
              ].map((expert, i) => (
                <div key={expert.name} className="gradient-border p-6 text-center reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="w-16 h-16 rounded-full bg-[#0A84FF]/10 border border-[#0A84FF]/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#0A84FF] text-xl font-bold" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                      {expert.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div className="text-white font-bold mb-1" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.01em" }}>{expert.name}</div>
                  <div className="text-white/40 text-xs mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>{expert.role}</div>
                  <a
                    href={expert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white btn-primary w-full justify-center"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    Termin buchen
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Was kostet NIS-2 Compliance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Für mittelständische Unternehmen rechnen wir typischerweise mit einem initialen Assessment von 3.000–8.000 Euro, gefolgt von einem Umsetzungsprojekt von 15.000–50.000 Euro."
                }
              },
              {
                "@type": "Question",
                "name": "Brauche ich einen CISO?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nicht unbedingt einen Vollzeit-CISO. Unser Fractional-CISO-Modell gibt Ihnen die Expertise eines erfahrenen CISOs zu einem Bruchteil der Kosten."
                }
              },
              {
                "@type": "Question",
                "name": "Wie lange dauert ein Penetration Test?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ein fokussierter Pentest einer Webanwendung dauert typischerweise 3–5 Tage. Ein umfassendes Netzwerk-Pentest-Projekt 2–4 Wochen."
                }
              },
              {
                "@type": "Question",
                "name": "Fällt mein Unternehmen unter NIS-2?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NIS-2 betrifft Unternehmen in 18 kritischen Sektoren mit mehr als 50 Mitarbeitern oder 10 Millionen Euro Jahresumsatz."
                }
              }
            ]
          })
        }}
      />

      <Footer />
    </div>
  );
}
