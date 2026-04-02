/*
 * B2CyberSec Visual-First Landing Page
 * Design: "Cinematic Contrast" — Film-Noir meets Cybersecurity
 * Color: Black = Threat, White = Safety, Red = Danger, Green = Protection
 * Typography: Space Grotesk (display), DM Sans (body)
 * Layout: Full-bleed vertical storytelling, each section is a "frame"
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Shield, Phone, Calendar, MapPin, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "wouter";

// CDN Image URLs
const IMAGES = {
  heroProblem: "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/EEdwtfjAyUMaK5wDFoJqyd/hero-problem-gYqRpuoPHHUGj7CbmFP7Cm.webp",
  heroSolution: "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/EEdwtfjAyUMaK5wDFoJqyd/hero-solution-cNasXCsjjiv4D9LsSFDq8j.webp",
  cyberThreat: "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/EEdwtfjAyUMaK5wDFoJqyd/cyber-threat-FtFU9hwui6crnaJfWVm6AU.webp",
  securityCalm: "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/EEdwtfjAyUMaK5wDFoJqyd/security-calm-BTtnFpPKejPNRuLxvJxU8b.webp",
  serverRoom: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80",
  teamWork: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
  officeCalm: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
  handshake: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1920&q=80",
};

/* ─── Animated Counter ─── */
function Counter({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Fade-in on scroll ─── */
function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Navigation ─── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-white" strokeWidth={1.5} />
          <span className="font-display font-bold text-lg tracking-tight text-white">B2CyberSec</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm text-white/60 hover:text-white transition-colors font-body">Realität</a>
          <a href="#solution" className="text-sm text-white/60 hover:text-white transition-colors font-body">Lösung</a>
          <a href="#services" className="text-sm text-white/60 hover:text-white transition-colors font-body">Services</a>
          <a href="#contact" className="text-sm text-white/60 hover:text-white transition-colors font-body">Kontakt</a>
          <a
            href="https://calendly.com/b2cybersec"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-white text-black text-sm font-display font-semibold hover:bg-white/90 transition-colors"
          >
            Jetzt absichern
          </a>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/5"
        >
          <div className="container py-6 flex flex-col gap-4">
            <a href="#problem" onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-white py-2 font-body">Realität</a>
            <a href="#solution" onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-white py-2 font-body">Lösung</a>
            <a href="#services" onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-white py-2 font-body">Services</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-white py-2 font-body">Kontakt</a>
            <a
              href="https://calendly.com/b2cybersec"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-white text-black text-center font-display font-semibold mt-2"
            >
              Jetzt absichern
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

/* ─── Hero: The Problem ─── */
function HeroProblem() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="problem" className="frame noise-overlay scanlines">
      <motion.img
        src={IMAGES.heroProblem}
        alt="Gestresster CEO bei Cyberangriff"
        className="frame-image"
        style={{ y }}
        loading="eager"
      />
      <div className="frame-overlay-danger" />

      <motion.div style={{ opacity }} className="relative z-10 container text-center px-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-red-400 font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4 md:mb-6"
        >
          Irgendwo passiert es gerade
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight"
        >
          Ihr Unternehmen.
          <br />
          <span className="text-red-500">Gehackt.</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-8 md:mt-12 flex flex-wrap justify-center gap-4 md:gap-8 text-white/40 font-body text-xs md:text-sm tracking-wider"
        >
          <span>Daten weg</span>
          <span className="text-white/20">|</span>
          <span>Systeme down</span>
          <span className="text-white/20">|</span>
          <span>Kunden verunsichert</span>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="w-6 h-6 text-white/30" />
      </motion.div>
    </section>
  );
}

/* ─── Stats: The Reality ─── */
function StatsSection() {
  return (
    <section className="bg-black py-20 md:py-32 relative noise-overlay">
      <div className="container relative z-10">
        <FadeIn>
          <p className="text-center text-red-400/80 font-body text-xs md:text-sm tracking-[0.3em] uppercase mb-12 md:mb-16">Die Realität in Deutschland</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 max-w-5xl mx-auto">
          <FadeIn delay={0.1} className="text-center">
            <div className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white">
              <Counter end={46} suffix="%" />
            </div>
            <p className="text-white/40 font-body text-sm mt-3">aller KMU bereits angegriffen</p>
          </FadeIn>
          <FadeIn delay={0.2} className="text-center">
            <div className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white">
              <Counter end={206} />
            </div>
            <p className="text-white/40 font-body text-sm mt-3">Tage bis ein Angriff erkannt wird</p>
          </FadeIn>
          <FadeIn delay={0.3} className="text-center">
            <div className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-red-500">
              <Counter end={4} suffix="M€" />
            </div>
            <p className="text-white/40 font-body text-sm mt-3">durchschnittlicher Schaden</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── Threat Visual ─── */
function ThreatSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={ref} className="frame scanlines" style={{ minHeight: "80vh" }}>
      <motion.img
        src={IMAGES.cyberThreat}
        alt="Bedrohung im Serverraum"
        className="frame-image"
        style={{ y }}
      />
      <div className="frame-overlay-danger" />
      <div className="relative z-10 container text-center">
        <FadeIn>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
            Die Frage ist nicht <em className="text-red-500 not-italic">ob</em>,
            <br />
            sondern <em className="text-red-500 not-italic">wann</em>.
          </h2>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Transition: The Shift ─── */
function TransitionSection() {
  return (
    <section className="py-24 md:py-40 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0a1a0a]" />
      <div className="relative z-10 container text-center">
        <FadeIn>
          <p className="text-white/30 font-body text-sm tracking-[0.4em] uppercase mb-6">Es gibt einen anderen Weg</p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="w-px h-20 bg-gradient-to-b from-red-500/50 to-blue-500/50 mx-auto mb-8" />
        </FadeIn>
        <FadeIn delay={0.4}>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
            Was wäre, wenn Sie
            <br />
            <span className="text-blue-400">ruhig schlafen</span> könnten?
          </h2>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Hero: The Solution ─── */
function HeroSolution() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={ref} id="solution" className="frame">
      <motion.img
        src={IMAGES.heroSolution}
        alt="Entspannter CEO mit grünem Dashboard"
        className="frame-image"
        style={{ y }}
      />
      <div className="frame-overlay-safe" />
      <div className="relative z-10 container text-center px-4">
        <FadeIn>
          <p className="text-blue-400 font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4 md:mb-6">
            So fühlt sich Sicherheit an
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight">
            Alles unter
            <br />
            <span className="text-blue-400">Kontrolle.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-3 md:gap-6">
            {["NIS-2 Compliant", "24/7 Monitoring", "Experten in 48h"].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 border border-blue-500/30 text-blue-400 font-body text-sm md:text-base tracking-wide"
              >
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                {item}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── SOC Visual ─── */
function SOCSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section ref={ref} className="frame" style={{ minHeight: "80vh" }}>
      <motion.img
        src={IMAGES.securityCalm}
        alt="Security Operations Center"
        className="frame-image"
        style={{ y }}
      />
      <div className="frame-overlay-dark" />
      <div className="relative z-10 container">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="text-blue-400/80 font-body text-xs md:text-sm tracking-[0.3em] uppercase mb-4">Managed Security</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Wir wachen.
              <br />
              Sie wachsen.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-8 flex flex-col gap-3">
              {["Rund-um-die-Uhr Überwachung", "Sofortige Incident Response", "Monatliche Security Reports"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/70 font-body text-sm md:text-base">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── Services Grid ─── */
function ServicesSection() {
  const services = [
    {
      title: "NIS-2 Compliance",
      keyword: "Pflicht wird Stärke",
      icon: "🛡️",
    },
    {
      title: "CISO as a Service",
      keyword: "Führung ohne Fixkosten",
      icon: "👤",
    },
    {
      title: "Managed Security",
      keyword: "24/7 Schutzschild",
      icon: "🔒",
    },
    {
      title: "Pentesting",
      keyword: "Angriff ist Verteidigung",
      icon: "⚡",
    },
    {
      title: "Security Quick Check",
      keyword: "Klarheit in 48h",
      icon: "🔍",
    },
    {
      title: "Professional Services",
      keyword: "Experten auf Abruf",
      icon: "🤝",
    },
    {
      title: "Compliance Care",
      keyword: "Sicherheit als Dauerzustand",
      icon: "✅",
    },
  ];

  return (
    <section id="services" className="bg-black py-20 md:py-32 relative noise-overlay">
      <div className="container relative z-10">
        <FadeIn>
          <p className="text-center text-white/30 font-body text-xs md:text-sm tracking-[0.3em] uppercase mb-4">Was wir tun</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-center font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-16 md:mb-20">
            Sieben Wege zur <span className="text-blue-400">Sicherheit</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <FadeIn key={i} delay={0.1 * i}>
              <div className="bg-black p-8 md:p-10 group hover:bg-white/[0.03] transition-colors duration-500 h-full">
                <span className="text-3xl md:text-4xl block mb-6">{service.icon}</span>
                <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-2">{service.title}</h3>
                <p className="text-white/40 font-body text-sm">{service.keyword}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Trust / Collaboration Visual ─── */
function TrustSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section ref={ref} className="frame" style={{ minHeight: "70vh" }}>
      <motion.img
        src={IMAGES.handshake}
        alt="Vertrauensvolle Zusammenarbeit"
        className="frame-image"
        style={{ y }}
      />
      <div className="frame-overlay-dark" />
      <div className="relative z-10 container text-center">
        <FadeIn>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
            Pragmatisch.
            <br />
            Persönlich.
            <br />
            <span className="text-blue-400">Aus Augsburg.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-white/50 font-body text-base md:text-lg max-w-md mx-auto">
            Cybersicherheit für den Mittelstand in Bayern und Baden-Württemberg.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── CTA Section ─── */
function CTASection() {
  return (
    <section id="contact" className="py-24 md:py-40 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent" />
      <div className="relative z-10 container text-center">
        <FadeIn>
          <p className="text-blue-400/80 font-body text-xs md:text-sm tracking-[0.3em] uppercase mb-6">Bereit?</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-8">
            Lassen Sie uns
            <br />
            <span className="text-blue-400">reden.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <a
              href="https://calendly.com/b2cybersec"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-display font-bold text-base md:text-lg hover:bg-blue-400 hover:text-black transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              Termin buchen
            </a>
            <a
              href="tel:+4982190789500"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-display font-semibold text-base md:text-lg hover:border-white/50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +49 821 90 789 500
            </a>
          </div>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-12 flex items-center justify-center gap-2 text-white/30 font-body text-sm">
            <MapPin className="w-4 h-4" />
            <span>Werner-von-Siemens-Str. 6, 86159 Augsburg</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-8 md:py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-white/40" strokeWidth={1.5} />
            <span className="font-display font-semibold text-sm text-white/40">B2CyberSec GmbH</span>
          </div>
          <div className="flex items-center gap-6 text-white/30 font-body text-xs">
            <Link href="/impressum" className="hover:text-white/60 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white/60 transition-colors">Datenschutz</Link>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Nav />
      <HeroProblem />
      <StatsSection />
      <ThreatSection />
      <TransitionSection />
      <HeroSolution />
      <SOCSection />
      <ServicesSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </div>
  );
}
