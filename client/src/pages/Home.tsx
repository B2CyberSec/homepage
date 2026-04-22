/*
 * B2CyberSec Home Page
 * Design: Apple Dark Mode + Editorial Precision
 * Section Rhythm (Apple-style alternating): 
 *   Hero → DARK (black)
 *   Stats → DARK (deep navy)
 *   Services → LIGHT (white/near-white)
 *   NIS-2 Urgency → DARK (black)
 *   Assessment CTA → LIGHT (light gray)
 *   FAQ → DARK (black)
 *   Contact → LIGHT (white)
 * Images: Hero bg, 3 service images, team image
 */

import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

// Image URLs (CDN)
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/2p5EaJetTcCK87pY49WvpP/hero-cyber-dark-UCuzooJMhpjD4UWMkdL5mS.webp";
const IMG_PROFESSIONAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/2p5EaJetTcCK87pY49WvpP/service-professional-mQ7TiXHZ5yfEsd5R6H3aMm.webp";
const IMG_NIS2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/2p5EaJetTcCK87pY49WvpP/service-nis2-A7uFyNAAWTCvBVGengVBjh.webp";
const IMG_PENTEST = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/2p5EaJetTcCK87pY49WvpP/service-pentest-UJq8k3pdnQ5vcSRzAMbmfV.webp";
const IMG_TEAM = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/2p5EaJetTcCK87pY49WvpP/team-trust-AT3bUvggJwJPNdFXaVQqmb.webp";

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

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* ═══════════════════════════════════════════════════
          HERO — DARK (black + hero image)
      ═══════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0.25) 100%)" }} />

        <div className="container relative z-10 pt-24 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card-blue mb-8 reveal">
              <div className="w-2 h-2 rounded-full bg-[#0A84FF] animate-pulse" />
              <span className="text-[#0A84FF] text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                NIS-2 tritt in Kraft — Sind Sie bereit?
              </span>
            </div>

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

            <p
              className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed mb-10 reveal"
              style={{ fontFamily: "'Inter', sans-serif", transitionDelay: "0.2s" }}
            >
              Als Geschäftsführer haften Sie persönlich für Sicherheitsvorfälle. NIS-2 macht das zur Pflicht. Wir machen es zur Stärke — in 20+ Jahren haben wir gelernt, wie.
            </p>

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

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/30" />
          <svg className="w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          STATS — DARK (deep navy)
      ═══════════════════════════════════════════════════ */}
      <section className="py-16 border-y border-white/10" style={{ background: "linear-gradient(135deg, #050A14 0%, #0A1628 100%)" }}>
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
          SERVICES — LIGHT (white background)
      ═══════════════════════════════════════════════════ */}
      <section id="services" className="py-24 md:py-32" style={{ background: "#f5f7fa" }}>
        <div className="container">
          <div className="mb-16 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ background: "rgba(10,132,255,0.08)", border: "1px solid rgba(10,132,255,0.2)" }}>
              <span className="text-[#0A84FF] text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Unsere 3 Säulen
              </span>
            </div>
            <h2
              className="text-4xl md:text-6xl font-extrabold leading-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.03em", color: "#0a0a0a" }}
            >
              Kein Bauchladen.
              <br />
              <span className="text-gradient-blue">Drei Disziplinen.</span>
              <br />
              Drei Experten.
            </h2>
            <p className="mt-4 text-gray-500 text-lg max-w-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
              Wir verkaufen keine IT-Security-Pakete. Wir lösen konkrete Probleme — mit dem richtigen Experten für Ihr spezifisches Thema.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service 1: Professional Services */}
            <div id="professional-services" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 reveal group">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={IMG_PROFESSIONAL}
                  alt="Professional IT Services — Experten für Netzwerk, Cloud und Security"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.6) 100%)" }} />
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold text-white" style={{ background: "#0A84FF", fontFamily: "'JetBrains Mono', monospace" }}>
                    Säule 01
                  </span>
                </div>
              </div>
              <div className="p-7">
                <h3
                  className="text-2xl font-extrabold mb-3"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em", color: "#0a0a0a" }}
                >
                  Professional Services
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Sie brauchen einen Netzwerk-Spezialisten für 3 Monate? Einen Cloud-Architekten für die Migration? Wir liefern den richtigen Experten — ohne Headhunter-Gebühren, ohne Monate des Wartens.
                </p>
                <div className="flex items-center gap-3 mb-6 p-3 rounded-xl" style={{ background: "#f5f7fa" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(10,132,255,0.12)" }}>
                    <span className="text-[#0A84FF] text-xs font-bold">BB</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: "#0a0a0a" }}>Boris Bošnjak</div>
                    <div className="text-gray-400 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>CEO, 20+ Jahre IT-Erfahrung</div>
                  </div>
                </div>
                <a
                  href="https://calendly.com/b2cybersec-team/pro-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white w-full justify-center btn-primary"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Termin mit Boris buchen
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Service 2: NIS-2 / Compliance */}
            <div id="nis2" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 reveal group" style={{ transitionDelay: "0.1s" }}>
              <div className="relative h-52 overflow-hidden">
                <img
                  src={IMG_NIS2}
                  alt="NIS-2 Compliance und Governance — CISSP-zertifizierter Ex-CISO"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.6) 100%)" }} />
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold text-white" style={{ background: "#0A84FF", fontFamily: "'JetBrains Mono', monospace" }}>
                    Säule 02
                  </span>
                </div>
              </div>
              <div className="p-7">
                <h3
                  className="text-2xl font-extrabold mb-3"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em", color: "#0a0a0a" }}
                >
                  NIS-2 & Compliance
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Als Geschäftsführer haften Sie persönlich. NIS-2, ISO 27001, DORA, GDPR — kein Unternehmen kann es sich leisten, diese Pflichten zu ignorieren. Unser CISSP-zertifizierter Ex-CISO der Zentralbank BiH und Ex-PwC-Berater macht Compliance zu Ihrem Wettbewerbsvorteil.
                </p>
                <div className="flex items-center gap-3 mb-6 p-3 rounded-xl" style={{ background: "#f5f7fa" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(10,132,255,0.12)" }}>
                    <span className="text-[#0A84FF] text-xs font-bold">SD</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: "#0a0a0a" }}>Senad Džananović</div>
                    <div className="text-gray-400 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>CISSP, ex-CISO, ex-PwC, 20+ Jahre</div>
                  </div>
                </div>
                <a
                  href="https://calendly.com/b2cybersec-team/pro-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white w-full justify-center btn-primary"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Termin mit Senad buchen
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Service 3: Pentesting */}
            <div id="pentesting" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 reveal group" style={{ transitionDelay: "0.2s" }}>
              <div className="relative h-52 overflow-hidden">
                <img
                  src={IMG_PENTEST}
                  alt="Penetration Testing — Wir denken wie Angreifer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.6) 100%)" }} />
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold text-white" style={{ background: "#0A84FF", fontFamily: "'JetBrains Mono', monospace" }}>
                    Säule 03
                  </span>
                </div>
              </div>
              <div className="p-7">
                <h3
                  className="text-2xl font-extrabold mb-3"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em", color: "#0a0a0a" }}
                >
                  Penetration Testing
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Wissen Sie wirklich, wie sicher Ihre Systeme sind? Oder glauben Sie es nur? Wir denken wie Angreifer — und finden die Lücken, bevor es andere tun. Mit spezialisierten Partnern in Sarajevo und Kosovo für maximale Tiefe.
                </p>
                <div className="flex items-center gap-3 mb-6 p-3 rounded-xl" style={{ background: "#f5f7fa" }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(10,132,255,0.12)" }}>
                    <span className="text-[#0A84FF] text-xs font-bold">BK</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: "#0a0a0a" }}>Bojan Kornijenko</div>
                    <div className="text-gray-400 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>Pentesting Lead, UnityFive & Sentry</div>
                  </div>
                </div>
                <a
                  href="https://calendly.com/b2cybersec-team/pentesting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white w-full justify-center btn-primary"
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
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          NIS-2 URGENCY — DARK (black)
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(10,132,255,0.3) 0%, transparent 70%)" }} />
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
          TEAM / ÜBER UNS — LIGHT (off-white)
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32" style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="reveal order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={IMG_TEAM}
                  alt="B2CyberSec Team — Boris, Senad und Bojan"
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: "480px" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.4) 100%)" }} />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full inline-flex" style={{ background: "rgba(10,132,255,0.9)" }}>
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="text-white text-xs font-semibold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      20+ Jahre kombinierte Erfahrung
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="reveal order-1 lg:order-2" style={{ transitionDelay: "0.15s" }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ background: "rgba(10,132,255,0.08)", border: "1px solid rgba(10,132,255,0.2)" }}>
                <span className="text-[#0A84FF] text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Wer wir sind
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.03em", color: "#0a0a0a" }}
              >
                Echte Experten.
                <br />
                <span className="text-gradient-blue">Keine Berater-Floskeln.</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                B2CyberSec ist keine Agentur mit Zertifikaten auf dem Papier. Wir sind drei Spezialisten, die in kritischen Infrastrukturen, bei PwC und in echten Sicherheitsvorfällen gearbeitet haben.
              </p>
              <div className="space-y-4">
                {[
                  { initials: "BB", name: "Boris Bošnjak", role: "CEO & Professional Services", detail: "20+ Jahre IT-Erfahrung, Netzwerk & Security" },
                  { initials: "SD", name: "Senad Džananović", role: "NIS-2 & Compliance", detail: "CISSP, ex-CISO Zentralbank BiH, ex-PwC" },
                  { initials: "BK", name: "Bojan Kornijenko", role: "Penetration Testing Lead", detail: "UnityFive & Sentry, Red Team Spezialist" },
                ].map((person) => (
                  <div key={person.name} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: "#f5f7fa" }}>
                    <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(10,132,255,0.12)" }}>
                      <span className="text-[#0A84FF] text-sm font-bold">{person.initials}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: "#0a0a0a" }}>{person.name}</div>
                      <div className="text-[#0A84FF] text-xs font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>{person.role}</div>
                      <div className="text-gray-400 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>{person.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FAQ — DARK (black)
      ═══════════════════════════════════════════════════ */}
      <section id="faq" className="py-24 md:py-32 bg-black">
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
          CONTACT — LIGHT (white)
      ═══════════════════════════════════════════════════ */}
      <section id="kontakt" className="py-24 md:py-32" style={{ background: "#ffffff", borderTop: "1px solid #e5e7eb" }}>
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2
                className="text-4xl md:text-6xl font-extrabold mb-4"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.03em", color: "#0a0a0a" }}
              >
                Sprechen wir.
                <br />
                <span className="text-gradient-blue">Ohne Verkaufsdruck.</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                Kein Pitch, kein Druck. Wir hören zu, stellen die richtigen Fragen und geben Ihnen eine ehrliche Einschätzung — ob wir zusammenpassen oder nicht.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Phone */}
              <div className="rounded-2xl p-6 text-center reveal shadow-sm" style={{ background: "#f5f7fa", border: "1px solid #e5e7eb" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(10,132,255,0.1)", border: "1px solid rgba(10,132,255,0.2)" }}>
                  <svg className="w-6 h-6 text-[#0A84FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-gray-400 text-xs uppercase tracking-wider mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Telefon</div>
                <a href="tel:+498219078950" className="font-semibold hover:text-[#0A84FF] transition-colors" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: "#0a0a0a" }}>
                  +49 (0) 821 90 789 500
                </a>
              </div>

              {/* Email */}
              <div className="rounded-2xl p-6 text-center reveal shadow-sm" style={{ background: "#f5f7fa", border: "1px solid #e5e7eb", transitionDelay: "0.1s" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(10,132,255,0.1)", border: "1px solid rgba(10,132,255,0.2)" }}>
                  <svg className="w-6 h-6 text-[#0A84FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-gray-400 text-xs uppercase tracking-wider mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>E-Mail</div>
                <a href="mailto:info@b2cybersec.com" className="font-semibold hover:text-[#0A84FF] transition-colors" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: "#0a0a0a" }}>
                  info@b2cybersec.com
                </a>
              </div>

              {/* NIS-2 Check CTA */}
              <div className="rounded-2xl p-6 text-center reveal shadow-sm" style={{ background: "rgba(10,132,255,0.06)", border: "1px solid rgba(10,132,255,0.2)", transitionDelay: "0.2s" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(10,132,255,0.12)", border: "1px solid rgba(10,132,255,0.3)" }}>
                  <svg className="w-6 h-6 text-[#0A84FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-gray-400 text-xs uppercase tracking-wider mb-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Schnellstart</div>
                <Link href="/nis2-check" className="font-semibold hover:opacity-80 transition-opacity" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: "#0A84FF" }}>
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
                <div key={expert.name} className="rounded-2xl p-6 text-center reveal shadow-sm" style={{ background: "#f5f7fa", border: "1px solid #e5e7eb", transitionDelay: `${i * 0.1}s` }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(10,132,255,0.1)", border: "1px solid rgba(10,132,255,0.2)" }}>
                    <span className="text-[#0A84FF] text-xl font-bold" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                      {expert.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div className="font-bold mb-1" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.01em", color: "#0a0a0a" }}>{expert.name}</div>
                  <div className="text-gray-400 text-xs mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>{expert.role}</div>
                  <a
                    href={expert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white btn-primary w-full justify-center"
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
              { "@type": "Question", "name": "Was kostet NIS-2 Compliance?", "acceptedAnswer": { "@type": "Answer", "text": "Für mittelständische Unternehmen rechnen wir typischerweise mit einem initialen Assessment von 3.000–8.000 Euro, gefolgt von einem Umsetzungsprojekt von 15.000–50.000 Euro." } },
              { "@type": "Question", "name": "Brauche ich einen CISO?", "acceptedAnswer": { "@type": "Answer", "text": "Nicht unbedingt einen Vollzeit-CISO. Unser Fractional-CISO-Modell gibt Ihnen die Expertise eines erfahrenen CISOs zu einem Bruchteil der Kosten." } },
              { "@type": "Question", "name": "Wie lange dauert ein Penetration Test?", "acceptedAnswer": { "@type": "Answer", "text": "Ein fokussierter Pentest einer Webanwendung dauert typischerweise 3–5 Tage. Ein umfassendes Netzwerk-Pentest-Projekt 2–4 Wochen." } },
              { "@type": "Question", "name": "Fällt mein Unternehmen unter NIS-2?", "acceptedAnswer": { "@type": "Answer", "text": "NIS-2 betrifft Unternehmen in 18 kritischen Sektoren mit mehr als 50 Mitarbeitern oder 10 Millionen Euro Jahresumsatz." } }
            ]
          })
        }}
      />

      <Footer />
    </div>
  );
}
