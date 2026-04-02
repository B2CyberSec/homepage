// B2CyberSec — Apple-Style Scroll-Storytelling Landing Page
// Replaces the old "Editorial Shock" design with ultra-clean white Apple aesthetic
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { COMPANY, LOGO_URL, SERVICES, STATS } from "@/lib/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Shield, Search, Zap, UserCog, Users, Eye, FileCheck,
  ChevronDown, Phone, Mail, MapPin, ArrowRight, CheckCircle2, Lock, AlertTriangle
} from "lucide-react";

// Calendly popup helper
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

function openCalendly() {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: COMPANY.calendly });
  } else {
    window.open(COMPANY.calendly, "_blank", "noopener,noreferrer");
  }
}

// Icon resolver
const iconMap: Record<string, React.ElementType> = {
  Shield, Search, Zap, UserCog, Users, Eye, FileCheck,
};

// ─── Reveal Wrapper ─────────────────────────────────────────────────────────
function Reveal({ children, className = "", delay = 0 }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={`${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Navigation ─────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2">
            <img src={LOGO_URL} alt="B2CyberSec" className="h-7 lg:h-8" />
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              ["services", "Services"],
              ["warum", "Warum wir"],
              ["nis2", "NIS-2"],
              ["kontakt", "Kontakt"],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm font-medium text-[#1d1d1f]/70 hover:text-[#1d1d1f] transition-colors"
              >
                {label}
              </button>
            ))}
            <button
              onClick={openCalendly}
              className="text-sm font-semibold bg-[#e8530e] text-white px-5 py-2 rounded-full hover:bg-[#c44400] transition-all hover:shadow-lg hover:shadow-[#e8530e]/20"
            >
              Termin buchen
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`w-5 h-[1.5px] bg-[#1d1d1f] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""}`} />
            <span className={`w-5 h-[1.5px] bg-[#1d1d1f] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`w-5 h-[1.5px] bg-[#1d1d1f] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-black/5 px-6 py-6 space-y-4">
          {[
            ["services", "Services"],
            ["warum", "Warum wir"],
            ["nis2", "NIS-2"],
            ["kontakt", "Kontakt"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="block w-full text-left text-lg font-medium text-[#1d1d1f]/80 hover:text-[#1d1d1f]"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => { setMobileOpen(false); openCalendly(); }}
            className="w-full text-center text-base font-semibold bg-[#e8530e] text-white px-6 py-3 rounded-full mt-4"
          >
            Termin buchen
          </button>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero Section ───────────────────────────────────────────────────────────
function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f7] via-white to-white" />

      <div className="relative z-10 max-w-[900px] mx-auto text-center">
        <div
          className="transition-all duration-1000 ease-out"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <p className="text-[#e8530e] font-semibold text-sm tracking-widest uppercase mb-6">
            IT-Sicherheit aus Augsburg
          </p>
        </div>

        <h1
          className="transition-all duration-1000 ease-out"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "0.2s",
          }}
        >
          <span className="block text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-[#1d1d1f]">
            Cybersicherheit,
          </span>
          <span className="block text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-[#1d1d1f]">
            die Ihr Unternehmen
          </span>
          <span className="block text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-gradient-brand">
            wirklich schützt.
          </span>
        </h1>

        <p
          className="mt-8 text-xl lg:text-2xl text-[#86868b] font-normal max-w-[640px] mx-auto leading-relaxed transition-all duration-1000 ease-out"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "0.5s",
          }}
        >
          Pragmatische IT-Sicherheit für den Mittelstand.
          NIS-2 Compliance, Pentesting und Managed Security — alles aus einer Hand.
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 ease-out"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "0.7s",
          }}
        >
          <button
            onClick={openCalendly}
            className="bg-[#e8530e] text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-[#c44400] transition-all hover:shadow-xl hover:shadow-[#e8530e]/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            Kostenlos beraten lassen
          </button>
          <button
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            className="text-[#1d1d1f] font-semibold text-lg px-8 py-4 rounded-full border border-[#d2d2d7] hover:bg-[#f5f5f7] transition-all"
          >
            Services entdecken
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000"
        style={{ opacity: loaded ? 0.4 : 0, transitionDelay: "1.2s" }}
      >
        <ChevronDown className="w-6 h-6 text-[#86868b] animate-bounce" />
      </div>
    </section>
  );
}

// ─── Problem / Stats Section ────────────────────────────────────────────────
function StatsSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#f5f5f7]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[#e8530e] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
            Die Realität
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-center text-[#1d1d1f] leading-tight max-w-[800px] mx-auto">
            Die meisten Unternehmen sind
            <br />
            <span className="text-gradient-brand">nicht vorbereitet.</span>
          </h2>
        </Reveal>

        <div className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-[#1d1d1f] tracking-tight">
                  {stat.value}
                </div>
                <p className="mt-2 text-sm lg:text-base text-[#86868b] leading-snug">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-16 lg:mt-20 max-w-[700px] mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-[#e8530e] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-semibold text-[#1d1d1f] mb-2">NIS-2 ist seit Dezember 2025 Gesetz.</p>
                  <p className="text-[#86868b] leading-relaxed">
                    Die BSI-Meldepflicht gilt seit März 2026. Wer jetzt nicht handelt, riskiert Bußgelder
                    bis zu 10 Millionen Euro oder 2% des Jahresumsatzes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Services Section ───────────────────────────────────────────────────────
function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[#e8530e] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
            Unsere Services
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-center text-[#1d1d1f] leading-tight max-w-[700px] mx-auto">
            Alles, was Ihr Unternehmen
            <br />
            <span className="text-gradient-brand">sicher macht.</span>
          </h2>
        </Reveal>

        <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Shield;
            return (
              <Reveal key={service.id} delay={i * 0.08}>
                <div className="group bg-[#f5f5f7] rounded-2xl p-8 hover:bg-white hover:shadow-lg hover:shadow-black/5 transition-all duration-500 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-[#e8530e]/10 flex items-center justify-center mb-5 group-hover:bg-[#e8530e]/15 transition-colors">
                    <Icon className="w-6 h-6 text-[#e8530e]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1d1d1f] mb-1">{service.name}</h3>
                  <p className="text-sm font-medium text-[#e8530e] mb-3">{service.tagline}</p>
                  <p className="text-[#86868b] text-sm leading-relaxed flex-1">{service.description}</p>
                  <div className="mt-6 pt-5 border-t border-[#d2d2d7]/50">
                    <span className="text-lg font-bold text-[#1d1d1f]">{service.price}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.5}>
          <p className="mt-8 text-center text-sm text-[#86868b]">
            Alle Preise netto zzgl. MwSt. Individuelle Pakete auf Anfrage.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Image Feature Section ──────────────────────────────────────────────────
function ImageFeatureSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#f5f5f7] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div>
              <p className="text-[#e8530e] font-semibold text-sm tracking-widest uppercase mb-4">
                Unser Ansatz
              </p>
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold text-[#1d1d1f] leading-tight mb-6">
                Pragmatisch.
                <br />
                Nicht theoretisch.
              </h2>
              <p className="text-lg text-[#86868b] leading-relaxed mb-8">
                Wir verkaufen keine Angst. Wir liefern Lösungen, die funktionieren —
                zugeschnitten auf den Mittelstand in Bayern und Baden-Württemberg.
              </p>
              <div className="space-y-4">
                {[
                  "Klare Pakete statt endloser Beratung",
                  "Transparente Preise, keine versteckten Kosten",
                  "Vier-Augen-Prinzip durch Partnernetzwerk",
                  "Persönlicher Ansprechpartner in Augsburg",
                ].map((item, i) => (
                  <Reveal key={i} delay={0.1 + i * 0.1}>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#e8530e] flex-shrink-0" />
                      <span className="text-[#1d1d1f] font-medium">{item}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/10">
                <img
                  src="/images/server-room.jpg"
                  alt="Server Room — Professionelle IT-Infrastruktur"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl shadow-black/10">
                <div className="text-3xl font-bold text-[#e8530e]">20+</div>
                <div className="text-sm text-[#86868b]">Jahre Erfahrung</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── NIS-2 Deep Dive Section ────────────────────────────────────────────────
function NIS2Section() {
  return (
    <section id="nis2" className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[#e8530e] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
            NIS-2 Compliance
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-center text-[#1d1d1f] leading-tight max-w-[800px] mx-auto">
            Von der Pflicht
            <br />
            <span className="text-gradient-brand">zur Chance.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 text-center text-lg text-[#86868b] max-w-[600px] mx-auto leading-relaxed">
            NIS-2 betrifft rund 29.500 Unternehmen in Deutschland. Wir machen Compliance
            einfach, verständlich und bezahlbar.
          </p>
        </Reveal>

        <div className="mt-16 lg:mt-20 grid lg:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Analyse",
              desc: "Vollständige Gap-Analyse in 14 Tagen. Sie erhalten eine priorisierte Roadmap mit konkreten Maßnahmen.",
              icon: Search,
            },
            {
              step: "02",
              title: "Umsetzung",
              desc: "Wir begleiten Sie bei der Implementierung aller notwendigen Maßnahmen — technisch und organisatorisch.",
              icon: Shield,
            },
            {
              step: "03",
              title: "Dauerhaft konform",
              desc: "Mit Compliance Care bleiben Sie dauerhaft NIS-2-konform. Monatliche Überwachung, Schulungen, Updates.",
              icon: CheckCircle2,
            },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <div className="relative bg-[#f5f5f7] rounded-2xl p-8 lg:p-10 h-full">
                <span className="text-6xl font-bold text-[#e8530e]/10 absolute top-6 right-8">
                  {item.step}
                </span>
                <item.icon className="w-8 h-8 text-[#e8530e] mb-5" />
                <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">{item.title}</h3>
                <p className="text-[#86868b] leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-12 text-center">
            <button
              onClick={openCalendly}
              className="inline-flex items-center gap-2 text-[#e8530e] font-semibold text-lg hover:gap-3 transition-all"
            >
              NIS-2 Beratung anfragen
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Why Us Section ─────────────────────────────────────────────────────────
function WhyUsSection() {
  return (
    <section id="warum" className="py-24 lg:py-32 bg-[#1d1d1f] text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <p className="text-[#e8530e] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
            Warum B2CyberSec
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-center text-white leading-tight max-w-[800px] mx-auto">
            Sicherheit braucht
            <br />
            <span className="text-gradient-brand">Vertrauen.</span>
          </h2>
        </Reveal>

        <div className="mt-16 lg:mt-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="space-y-8">
              {[
                {
                  title: "Lokal verankert",
                  desc: "Aus Augsburg, für den Mittelstand in Bayern und Baden-Württemberg. Persönlich, nicht anonym.",
                },
                {
                  title: "Vier-Augen-Prinzip",
                  desc: "Unser Partnernetzwerk garantiert unabhängige Prüfungen. Pentesting durch externe Spezialisten.",
                },
                {
                  title: "Transparent & fair",
                  desc: "Klare Preise, klare Leistungen. Keine versteckten Kosten, keine endlosen Beratungsschleifen.",
                },
                {
                  title: "20+ Jahre Erfahrung",
                  desc: "Boris Bošnjak und sein Team bringen über zwei Jahrzehnte Erfahrung in IT-Sicherheit mit.",
                },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="flex gap-5">
                    <div className="w-1 bg-[#e8530e] rounded-full flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-white/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src="/images/security-lock.jpg"
                  alt="Cybersicherheit — Schutz für Ihr Unternehmen"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -top-4 -right-4 lg:-right-8 bg-white rounded-2xl p-5 shadow-xl">
                <Lock className="w-8 h-8 text-[#e8530e] mb-2" />
                <div className="text-sm font-bold text-[#1d1d1f]">Zertifiziert</div>
                <div className="text-xs text-[#86868b]">ISO 27001 konform</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonial / Social Proof ─────────────────────────────────────────────
function TestimonialSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="max-w-[800px] mx-auto text-center">
            <p className="text-[#e8530e] font-semibold text-sm tracking-widest uppercase mb-8">
              Kundenstimmen
            </p>
            <blockquote className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold text-[#1d1d1f] leading-tight">
              &ldquo;In nur 2 Wochen hatten wir eine klare Roadmap für unsere NIS-2 Compliance.
              Professionell, verständlich und pragmatisch.&rdquo;
            </blockquote>
            <div className="mt-8">
              <p className="text-[#1d1d1f] font-semibold">IT-Leiter</p>
              <p className="text-[#86868b]">Automobilzulieferer, 500 Mitarbeiter</p>
            </div>
          </div>
        </Reveal>

        <div className="section-divider mt-16 lg:mt-20" />

        <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "Endlich können wir nachts ruhig schlafen. Die 24/7 Überwachung gibt uns echte Sicherheit.",
              author: "IT-Leiter",
              company: "Stadtwerke",
            },
            {
              quote: "Boris und sein Team denken strategisch. Genau das hat uns gefehlt.",
              author: "Vorstand",
              company: "Energieversorger",
            },
            {
              quote: "Schnell, professionell und verständlich erklärt. Genau das, was wir gebraucht haben.",
              author: "Geschäftsführer",
              company: "Logistik-Unternehmen",
            },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <div className="bg-[#f5f5f7] rounded-2xl p-8 h-full flex flex-col">
                <p className="text-[#1d1d1f] leading-relaxed flex-1">&ldquo;{item.quote}&rdquo;</p>
                <div className="mt-6 pt-4 border-t border-[#d2d2d7]/50">
                  <p className="font-semibold text-[#1d1d1f] text-sm">{item.author}</p>
                  <p className="text-[#86868b] text-sm">{item.company}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section id="kontakt" className="py-24 lg:py-40 bg-[#f5f5f7]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold text-[#1d1d1f] leading-tight">
            Bereit für
            <br />
            <span className="text-gradient-brand">echte Sicherheit?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 text-xl text-[#86868b] max-w-[500px] mx-auto leading-relaxed">
            15 Minuten. Kostenlos. Kein Vertriebsgespräch —
            nur eine ehrliche Einschätzung Ihrer Situation.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <button
            onClick={openCalendly}
            className="mt-10 bg-[#e8530e] text-white font-semibold text-lg px-10 py-5 rounded-full hover:bg-[#c44400] transition-all hover:shadow-2xl hover:shadow-[#e8530e]/25 hover:scale-[1.02] active:scale-[0.98] glow-brand"
          >
            Jetzt Termin buchen
          </button>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#86868b]">
            <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-[#1d1d1f] transition-colors">
              <Phone className="w-4 h-4" />
              {COMPANY.phone}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-[#1d1d1f] transition-colors">
              <Mail className="w-4 h-4" />
              {COMPANY.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Augsburg
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-12 lg:py-16 border-t border-[#d2d2d7]/50">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & info */}
          <div className="md:col-span-2">
            <img src={LOGO_URL} alt="B2CyberSec" className="h-7 mb-4" />
            <p className="text-sm text-[#86868b] leading-relaxed max-w-[300px]">
              Pragmatische IT-Sicherheit für den Mittelstand.
              Aus Augsburg für Bayern und Baden-Württemberg.
            </p>
            <div className="mt-4 space-y-1 text-sm text-[#86868b]">
              <p>{COMPANY.address}</p>
              <p>{COMPANY.phone}</p>
              <p>{COMPANY.email}</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-[#1d1d1f] mb-4 text-sm">Services</h4>
            <ul className="space-y-2 text-sm text-[#86868b]">
              <li><button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#1d1d1f] transition-colors">NIS-2 Compliance</button></li>
              <li><button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#1d1d1f] transition-colors">Pentesting</button></li>
              <li><button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#1d1d1f] transition-colors">CISO as a Service</button></li>
              <li><button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#1d1d1f] transition-colors">Managed Security</button></li>
              <li><button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-[#1d1d1f] transition-colors">Professional Services</button></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-[#1d1d1f] mb-4 text-sm">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-[#86868b]">
              <li><Link href="/impressum" className="hover:text-[#1d1d1f] transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-[#1d1d1f] transition-colors">Datenschutz</Link></li>
            </ul>
          </div>
        </div>

        <div className="section-divider mt-10" />

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#86868b]">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. Alle Rechte vorbehalten.</p>
          <p>
            Geschäftsführer: {COMPANY.ceo} | HRB 33545 | USt-IdNr.: DE 323792746
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page Composition ──────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ImageFeatureSection />
      <NIS2Section />
      <WhyUsSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </div>
  );
}
