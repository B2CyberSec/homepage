/**
 * Design reminder for Home.tsx
 * Precision Luxury Interface: ruhige Apple-nahe Hierarchie, hochwertige Materialität,
 * mobile-first Stapelung, klare CTA-Priorität und großzügige, aber kontrollierte Abstände.
 */
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CalendarDays,
  Globe2,
  Menu,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const CALENDLY_URL = "https://calendly.com/b2cybersec/kontakt";

type Language = "de" | "en";

const heroImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/EwEqphW4QWhsHd3m98p6bW/b2cybersec-hero-cyber-command-mNnBy4HQDP6TPmyZ7kswJG.webp";
const nis2Image =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/EwEqphW4QWhsHd3m98p6bW/b2cybersec-nis2-compliance-VwMzS9iSctsiTBc9Z5E63e.webp";
const servicesImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/EwEqphW4QWhsHd3m98p6bW/b2cybersec-professional-services-BGEWttYxXSzj3FHftcFabf.webp";
const contactImage =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/EwEqphW4QWhsHd3m98p6bW/b2cybersec-contact-trust-nKtnbY9tNCr33CeXUZYHa7.webp";

const content = {
  de: {
    nav: {
      solutions: "Lösungen",
      plans: "Pakete",
      contact: "Kontakt",
      cta: "Termin buchen",
      menu: "Menü",
      close: "Schließen",
    },
    hero: {
      eyebrow: "B2CYBERSEC GMBH | DACH",
      title: "CYBERSECURITY FÜR ENTSCHEIDER.",
      text: "NIS-2, Beratung und Experten auf Abruf. Klar, schnell und wirksam.",
      primary: "Beratung buchen",
      secondary: "Pakete ansehen",
      stats: ["NIS-2 READY", "EXPERTS ON DEMAND", "DACH FOCUS"],
    },
    statement: "WENIG TEXT. KLARE SICHERHEIT.",
    sectionLabel: "Lösungen",
    sectionTitle: "ZWEI FOKUS-BEREICHE. EIN KLARES VERSPRECHEN.",
    sectionText:
      "Compliance dort, wo Regulierung zählt. Experten dort, wo Geschwindigkeit zählt.",
    solutions: [
      {
        label: "NIS-2",
        title: "COMPLIANCE, DIE VOM BOARD BIS ZUR UMSETZUNG FUNKTIONIERT.",
        text: "Assessment, Roadmap, Begleitung und klare Prioritäten für Ihre NIS-2-Reife.",
        cta: "NIS-2 ansehen",
        href: "#plans",
        image: nis2Image,
      },
      {
        label: "PROFESSIONAL SERVICES",
        title: "SECURITY-EXPERTEN AUF ABRUF FÜR KRITISCHE MOMENTE.",
        text: "Architektur, Advisory, Incident-nahe Unterstützung und operative Spezialisten, wenn sie gebraucht werden.",
        cta: "Services ansehen",
        href: "#plans",
        image: servicesImage,
      },
    ],
    pricingLabel: "Pakete",
    pricingTitle: "KLAR STRUKTURIERT. SCHNELL VERSTANDEN.",
    pricingText:
      "Einfache Angebotslogik im Tarif-Stil — reduziert auf das, was Entscheider sofort brauchen.",
    plans: [
      {
        category: "NIS-2",
        name: "START",
        price: "AUF ANFRAGE",
        cadence: "Projektbasiert",
        features: ["Gap-Analyse", "Management-Briefing", "Priorisierte Roadmap"],
      },
      {
        category: "NIS-2",
        name: "READY",
        price: "AUF ANFRAGE",
        cadence: "Begleitetes Paket",
        features: ["Umsetzungsbegleitung", "Dokumentationspaket", "Kontroll-Review"],
      },
      {
        category: "PRO SERVICES",
        name: "FLEX",
        price: "RETAINER",
        cadence: "Monatlich",
        features: ["Experten auf Abruf", "Remote oder vor Ort", "Skalierbare Kontingente"],
      },
      {
        category: "PRO SERVICES",
        name: "DEDICATED",
        price: "INDIVIDUELL",
        cadence: "Für kritische Vorhaben",
        features: ["Lead Expert / Interim Advisory", "Strategische Begleitung", "Priorisierte Verfügbarkeit"],
      },
    ],
    contact: {
      label: "Kontakt",
      title: "DER NÄCHSTE SCHRITT IST EINFACH.",
      text: "Sprechen Sie mit B2CyberSec über NIS-2, Security Advisory oder Experten auf Abruf.",
      primary: "Calendly öffnen",
      secondary: "Website besuchen",
      detailsTitle: "B2CYBERSEC GMBH",
      details: [
        "CEO: Boris Bošnjak",
        "Region: DACH",
        "Telefon: +49 (0) 821 90 789 500",
        "Website: www.b2cybersec.com",
      ],
    },
    footer: "Cybersecurity Consulting | NIS-2 Compliance | Professional Services",
  },
  en: {
    nav: {
      solutions: "Solutions",
      plans: "Packages",
      contact: "Contact",
      cta: "Book a call",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      eyebrow: "B2CYBERSEC GMBH | DACH",
      title: "CYBERSECURITY FOR DECISION-MAKERS.",
      text: "NIS-2, advisory and experts on demand. Clear, fast and effective.",
      primary: "Book a consultation",
      secondary: "View packages",
      stats: ["NIS-2 READY", "EXPERTS ON DEMAND", "DACH FOCUS"],
    },
    statement: "LESS TEXT. MORE SECURITY CLARITY.",
    sectionLabel: "Solutions",
    sectionTitle: "TWO CORE AREAS. ONE CLEAR PROMISE.",
    sectionText:
      "Compliance where regulation matters. Experts where speed matters.",
    solutions: [
      {
        label: "NIS-2",
        title: "COMPLIANCE THAT WORKS FROM BOARDROOM TO EXECUTION.",
        text: "Assessment, roadmap, implementation guidance and clear priorities for your NIS-2 maturity.",
        cta: "Explore NIS-2",
        href: "#plans",
        image: nis2Image,
      },
      {
        label: "PROFESSIONAL SERVICES",
        title: "ON-DEMAND SECURITY EXPERTS FOR CRITICAL MOMENTS.",
        text: "Architecture, advisory, incident-adjacent support and operational specialists when you need them.",
        cta: "Explore services",
        href: "#plans",
        image: servicesImage,
      },
    ],
    pricingLabel: "Packages",
    pricingTitle: "CLEAR STRUCTURE. FAST TO UNDERSTAND.",
    pricingText:
      "A reduced tariff-style offer system built around what decision-makers need to see instantly.",
    plans: [
      {
        category: "NIS-2",
        name: "START",
        price: "ON REQUEST",
        cadence: "Project-based",
        features: ["Gap analysis", "Management briefing", "Prioritized roadmap"],
      },
      {
        category: "NIS-2",
        name: "READY",
        price: "ON REQUEST",
        cadence: "Guided package",
        features: ["Implementation guidance", "Documentation package", "Control review"],
      },
      {
        category: "PRO SERVICES",
        name: "FLEX",
        price: "RETAINER",
        cadence: "Monthly",
        features: ["Experts on demand", "Remote or on-site", "Scalable capacity"],
      },
      {
        category: "PRO SERVICES",
        name: "DEDICATED",
        price: "CUSTOM",
        cadence: "For critical initiatives",
        features: ["Lead expert / interim advisory", "Strategic guidance", "Priority availability"],
      },
    ],
    contact: {
      label: "Contact",
      title: "THE NEXT STEP IS SIMPLE.",
      text: "Talk to B2CyberSec about NIS-2, security advisory or experts on demand.",
      primary: "Open Calendly",
      secondary: "Visit website",
      detailsTitle: "B2CYBERSEC GMBH",
      details: [
        "CEO: Boris Bošnjak",
        "Region: DACH",
        "Phone: +49 (0) 821 90 789 500",
        "Website: www.b2cybersec.com",
      ],
    },
    footer: "Cybersecurity Consulting | NIS-2 Compliance | Professional Services",
  },
} as const;

const fadeUp = {
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.72 },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("de");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = content[language];

  const navItems = [
    { href: "#solutions", label: t.nav.solutions },
    { href: "#plans", label: t.nav.plans },
    { href: "#contact", label: t.nav.contact },
  ];

  const openCalendlyPopup = () => {
    const calendly = (
      window as Window & {
        Calendly?: {
          initPopupWidget: (options: { url: string }) => void;
        };
      }
    ).Calendly;

    if (calendly?.initPopupWidget) {
      calendly.initPopupWidget({ url: CALENDLY_URL });
      return;
    }

    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(132,149,171,0.16),_transparent_26%),radial-gradient(circle_at_84%_12%,_rgba(181,194,210,0.14),_transparent_22%),linear-gradient(180deg,_rgba(255,255,255,0.92),_rgba(246,248,251,0.98))]" />

      <header className="fixed inset-x-0 top-0 z-50">
        <div className="container pt-3 sm:pt-4">
          <div className="frame-panel px-3 py-3 sm:px-5 lg:px-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="#top"
                className="min-w-0 flex-1 text-[0.78rem] font-semibold tracking-[0.14em] text-[#0b1f6d] sm:flex-none sm:text-sm sm:tracking-[0.2em]"
                onClick={closeMobileMenu}
              >
                <span className="flex items-center gap-2.5 sm:gap-3">
                  <span className="inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#0b1f6d]" />
                  <span className="truncate">B2CYBERSEC</span>
                </span>
              </a>

              <nav className="hidden items-center gap-7 text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-slate-600 lg:flex">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="transition-colors hover:text-[#0b1f6d]">
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="ml-auto flex items-center gap-1.5 sm:gap-3">
                <div className="hidden items-center rounded-full border border-black/8 bg-white/86 p-1 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:inline-flex">
                  <button
                    type="button"
                    onClick={() => setLanguage("de")}
                    className={`rounded-full px-2 py-1.25 text-[0.62rem] font-semibold uppercase tracking-[0.12em] transition-all sm:px-3 sm:py-1.5 sm:text-[0.68rem] sm:tracking-[0.16em] ${
                      language === "de"
                        ? "bg-[#0b1f6d] text-white"
                        : "text-slate-500 hover:text-[#0b1f6d]"
                    }`}
                  >
                    DE
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    className={`rounded-full px-2 py-1.25 text-[0.62rem] font-semibold uppercase tracking-[0.12em] transition-all sm:px-3 sm:py-1.5 sm:text-[0.68rem] sm:tracking-[0.16em] ${
                      language === "en"
                        ? "bg-[#0b1f6d] text-white"
                        : "text-slate-500 hover:text-[#0b1f6d]"
                    }`}
                  >
                    EN
                  </button>
                </div>

                <Button
                  type="button"
                  onClick={openCalendlyPopup}
                  className="hidden rounded-full bg-[#0b1f6d] px-5 text-white shadow-[0_16px_36px_rgba(15,23,42,0.14)] lg:inline-flex"
                >
                  {t.nav.cta}
                </Button>

                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/8 bg-white/82 text-[#0b1f6d] shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-colors hover:bg-white lg:hidden sm:h-11 sm:w-11"
                  aria-expanded={mobileMenuOpen}
                  aria-label={mobileMenuOpen ? t.nav.close : t.nav.menu}
                  onClick={() => setMobileMenuOpen((open) => !open)}
                >
                  {mobileMenuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
                </button>
              </div>
            </div>

            {mobileMenuOpen && (
              <div className="mt-4 border-t border-black/7 pt-4 lg:hidden">
                <div className="mb-3 flex items-center justify-between gap-3 rounded-[1.15rem] border border-black/7 bg-white/72 px-4 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.05)] backdrop-blur-xl">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {language === "de" ? "Sprache" : "Language"}
                  </span>
                  <div className="inline-flex items-center rounded-full border border-black/8 bg-white/90 p-1">
                    <button
                      type="button"
                      onClick={() => setLanguage("de")}
                      className={`rounded-full px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] transition-all ${
                        language === "de"
                          ? "bg-[#0b1f6d] text-white"
                          : "text-slate-500 hover:text-[#0b1f6d]"
                      }`}
                    >
                      DE
                    </button>
                    <button
                      type="button"
                      onClick={() => setLanguage("en")}
                      className={`rounded-full px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] transition-all ${
                        language === "en"
                          ? "bg-[#0b1f6d] text-white"
                          : "text-slate-500 hover:text-[#0b1f6d]"
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>
                <nav className="grid gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="rounded-[1.15rem] border border-black/7 bg-white/72 px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-colors hover:text-[#0b1f6d]"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <Button
                  type="button"
                  onClick={() => {
                    closeMobileMenu();
                    openCalendlyPopup();
                  }}
                  className="mt-3 w-full rounded-full bg-[#0b1f6d] text-white shadow-[0_18px_36px_rgba(15,23,42,0.14)]"
                >
                  {t.nav.cta}
                  <CalendarDays className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main id="top" className="relative z-10">
        <section className="container pt-32 pb-14 sm:pt-36 sm:pb-16 lg:min-h-screen lg:pt-28 lg:pb-24 xl:pt-32">
          <div className="grid items-start gap-8 lg:min-h-[calc(100vh-10rem)] lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.02fr)] lg:items-center lg:gap-12 xl:gap-16">
            <motion.div {...fadeUp} className="relative z-10 max-w-[35rem] lg:pr-4 xl:max-w-[38rem] xl:pr-6">
              <div className="section-kicker mb-5">{t.hero.eyebrow}</div>
              <h1 className="max-w-[10ch] text-[clamp(2.08rem,9.6vw,4.1rem)] font-semibold uppercase leading-[0.9] tracking-[-0.08em] text-[#0b1f6d] sm:max-w-[10ch] sm:text-[clamp(2.9rem,10vw,6.25rem)]">
                {t.hero.title}
              </h1>
              <p className="mt-5 max-w-xl text-[0.98rem] leading-7 text-slate-600 sm:mt-7 sm:text-[1.05rem] sm:leading-8">
                {t.hero.text}
              </p>

              <div className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:gap-4">
                <Button
                  type="button"
                  size="lg"
                  onClick={openCalendlyPopup}
                  className="w-full rounded-full bg-[#0b1f6d] px-6 text-white shadow-[0_18px_42px_rgba(15,23,42,0.16)] sm:w-auto sm:px-7"
                >
                  {t.hero.primary}
                  <CalendarDays className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full rounded-full border-black/10 bg-white/74 px-6 text-[#0b1f6d] backdrop-blur-xl sm:w-auto sm:px-7"
                >
                  <a href="#plans">
                    {t.hero.secondary}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="mt-8 grid max-w-[24rem] grid-cols-2 gap-2.5 sm:mt-10 sm:flex sm:max-w-none sm:flex-wrap sm:gap-3">
                {t.hero.stats.map((stat, index) => (
                  <span
                    key={stat}
                    className={`inline-flex items-center justify-center rounded-full border border-black/7 bg-white/84 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-slate-600 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:justify-start sm:px-4 sm:text-[0.66rem] sm:tracking-[0.2em] ${index === 2 ? "col-span-2 sm:col-span-1" : ""}`}
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.12 }}
              className="lg:ml-auto lg:w-full lg:max-w-[48rem]"
            >
              <div className="frame-panel relative overflow-hidden p-2.5 sm:p-4">
                <img
                  src={heroImage}
                  alt="Bright premium cybersecurity consulting environment"
                  className="hero-image h-[22rem] w-full object-cover object-center sm:h-[30rem] lg:h-[42rem]"
                />
                <div className="absolute inset-x-3 bottom-3 grid gap-2.5 sm:inset-x-6 sm:bottom-6 sm:grid-cols-3 sm:gap-3">
                  <div className="glass-panel px-4 py-3.5">
                    <div className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      NIS-2
                    </div>
                    <div className="mt-1.5 text-base font-semibold text-[#0b1f6d] sm:mt-2 sm:text-lg">Governance</div>
                  </div>
                  <div className="glass-panel px-4 py-3.5">
                    <div className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Advisory
                    </div>
                    <div className="mt-1.5 text-base font-semibold text-[#0b1f6d] sm:mt-2 sm:text-lg">Expert Pool</div>
                  </div>
                  <div className="glass-panel px-4 py-3.5">
                    <div className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Region
                    </div>
                    <div className="mt-1.5 text-base font-semibold text-[#0b1f6d] sm:mt-2 sm:text-lg">DACH</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="container py-8 sm:py-12 lg:py-14">
          <motion.div
            {...fadeUp}
            className="frame-panel px-5 py-8 text-left sm:px-10 sm:py-12 md:px-14 md:py-14 md:text-center"
          >
            <p className="max-w-[13ch] text-[clamp(1.95rem,9vw,4.7rem)] font-semibold uppercase leading-[0.94] tracking-[-0.07em] text-[#0b1f6d] md:mx-auto">
              {t.statement}
            </p>
          </motion.div>
        </section>

        <section id="solutions" className="container py-14 sm:py-18 lg:py-24">
          <motion.div {...fadeUp} className="max-w-4xl">
            <div className="section-kicker">{t.sectionLabel}</div>
            <h2 className="mt-4 max-w-[12ch] text-[clamp(2.05rem,10vw,4.8rem)] font-semibold uppercase leading-[0.94] tracking-[-0.065em] text-[#0b1f6d]">
              {t.sectionTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {t.sectionText}
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 lg:mt-12 xl:grid-cols-2 xl:gap-6">
            {t.solutions.map((item, index) => (
              <motion.article
                key={item.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.08 * index }}
                className="solution-card"
              >
                <div className="absolute inset-0">
                  <img src={item.image} alt={item.label} className="h-full w-full object-cover object-center" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.02),rgba(248,250,252,0.84)_58%,rgba(248,250,252,0.97)_100%)] sm:bg-[linear-gradient(180deg,rgba(248,250,252,0.04),rgba(248,250,252,0.88)_65%,rgba(248,250,252,0.97)_100%)]" />
                </div>
                <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-8 lg:p-10">
                  <div className="section-kicker mb-4">{item.label}</div>
                  <h3 className="max-w-[14ch] text-[clamp(1.75rem,8vw,3.15rem)] font-semibold uppercase leading-[0.96] tracking-[-0.06em] text-[#0b1f6d]">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-6.5 text-slate-600 sm:text-base sm:leading-7">
                    {item.text}
                  </p>
                  <div className="mt-6 sm:mt-7">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full rounded-full border-black/10 bg-white/82 px-6 text-[#0b1f6d] backdrop-blur-xl sm:w-auto"
                    >
                      <a href={item.href}>
                        {item.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="plans" className="container py-14 sm:py-18 lg:py-24">
          <motion.div {...fadeUp} className="max-w-4xl">
            <div className="section-kicker">{t.pricingLabel}</div>
            <h2 className="mt-4 max-w-[11ch] text-[clamp(2.05rem,10vw,4.8rem)] font-semibold uppercase leading-[0.94] tracking-[-0.065em] text-[#0b1f6d]">
              {t.pricingTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {t.pricingText}
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:gap-5 md:mt-12 md:grid-cols-2 xl:grid-cols-4">
            {t.plans.map((plan, index) => (
              <motion.article
                key={`${plan.category}-${plan.name}`}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.06 * index }}
                className="plan-card flex h-full flex-col justify-between px-5 py-6 sm:px-6 sm:py-7"
              >
                <div>
                  <div className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {plan.category}
                  </div>
                  <div className="mt-3 text-[1.85rem] font-semibold uppercase tracking-[-0.05em] text-[#0b1f6d] sm:text-[2rem]">
                    {plan.name}
                  </div>
                  <div className="mt-5 text-lg font-semibold uppercase tracking-[-0.03em] text-[#0b1f6d] sm:mt-6 sm:text-xl">
                    {plan.price}
                  </div>
                  <div className="mt-1 text-sm text-slate-500">{plan.cadence}</div>
                </div>

                <div className="mt-7 border-t border-black/7 pt-5 sm:mt-8 sm:pt-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#0b1f6d]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="container py-14 sm:py-18 lg:py-24">
          <motion.div {...fadeUp} className="frame-panel relative overflow-hidden p-2.5 sm:p-4">
            <div className="absolute inset-0">
              <img
                src={contactImage}
                alt="Bright premium consultation environment"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.96)_0%,rgba(248,250,252,0.9)_48%,rgba(248,250,252,0.66)_76%,rgba(248,250,252,0.44)_100%)] lg:bg-[linear-gradient(90deg,rgba(248,250,252,0.96)_0%,rgba(248,250,252,0.9)_46%,rgba(248,250,252,0.58)_72%,rgba(248,250,252,0.24)_100%)]" />
            </div>

            <div className="relative z-10 grid gap-6 p-5 sm:gap-8 sm:p-8 lg:min-h-[34rem] lg:grid-cols-[0.95fr_0.65fr] lg:gap-10 lg:p-10 xl:p-14">
              <div className="flex max-w-2xl flex-col justify-between">
                <div>
                  <div className="section-kicker">{t.contact.label}</div>
                  <h2 className="mt-4 max-w-[11ch] text-[clamp(2.05rem,10vw,4.8rem)] font-semibold uppercase leading-[0.94] tracking-[-0.065em] text-[#0b1f6d]">
                    {t.contact.title}
                  </h2>
                  <p className="mt-5 max-w-lg text-[0.98rem] leading-7 text-slate-600 sm:text-lg sm:leading-8">
                    {t.contact.text}
                  </p>
                </div>

                <div className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:gap-4">
                  <Button
                    type="button"
                    size="lg"
                    onClick={openCalendlyPopup}
                    className="w-full rounded-full bg-[#0b1f6d] px-6 text-white shadow-[0_18px_42px_rgba(15,23,42,0.16)] sm:w-auto sm:px-7"
                  >
                    {t.contact.primary}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full rounded-full border-black/10 bg-white/76 px-6 text-[#0b1f6d] backdrop-blur-xl sm:w-auto sm:px-7"
                  >
                    <a href="https://www.b2cybersec.com" target="_blank" rel="noreferrer">
                      {t.contact.secondary}
                      <Globe2 className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="glass-panel self-start p-5 sm:self-end sm:p-7">
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {t.contact.detailsTitle}
                </div>
                <div className="mt-5 space-y-3.5 text-sm leading-6 text-slate-700 sm:space-y-4 sm:text-base">
                  {t.contact.details.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </div>
                <a
                  href="tel:+4982190789500"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#0b1f6d]"
                >
                  <Phone className="h-4 w-4" />
                  +49 (0) 821 90 789 500
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-black/6 py-8">
        <div className="container flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="font-semibold uppercase tracking-[0.18em] text-slate-700">B2CYBERSEC GMBH</div>
          <div className="max-w-3xl">{t.footer}</div>
        </div>
      </footer>
    </div>
  );
}
