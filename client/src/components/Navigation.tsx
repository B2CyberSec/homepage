/*
 * B2CyberSec Navigation
 * Design: Sticky, blur backdrop, Apple-dark style
 * Mobile: Hamburger menu with full-screen overlay
 * i18n: DE/EN via LanguageContext
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useT, type Lang } from "@/contexts/LanguageContext";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const { lang, setLang, t } = useT();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const assessmentHref = lang === "de" ? "/nis2-check" : "/readiness-check";

  const navLinks = [
    { href: "/#services", label: t("nav.services") },
    { href: "/#nis2", label: t("nav.nis2") },
    { href: "/#pentesting", label: t("nav.pentesting") },
    { href: assessmentHref, label: t("nav.assessment") },
    { href: "/#kontakt", label: t("nav.contact") },
  ];

  const switchLang = (next: Lang) => setLang(next);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "nav-blur" : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-[#0A84FF] flex items-center justify-center shadow-[0_0_16px_rgba(10,132,255,0.5)] group-hover:shadow-[0_0_24px_rgba(10,132,255,0.7)] transition-all duration-200">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10.5c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286z" />
                </svg>
              </div>
              <span
                className="text-white font-bold text-lg tracking-tight hidden sm:block"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}
              >
                B2CyberSec
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right cluster: Language switch + CTA + Hamburger */}
            <div className="flex items-center gap-3">
              {/* Language switcher (desktop + tablet) */}
              <div
                role="group"
                aria-label={t("lang.switchTo")}
                className="hidden sm:flex items-center text-[11px] tracking-wider rounded-full border border-white/15 bg-white/5 backdrop-blur overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => switchLang("de")}
                  aria-pressed={lang === "de"}
                  className={`px-2.5 py-1 transition-colors ${
                    lang === "de" ? "bg-white text-black font-semibold" : "text-white/70 hover:text-white"
                  }`}
                >
                  DE
                </button>
                <button
                  type="button"
                  onClick={() => switchLang("en")}
                  aria-pressed={lang === "en"}
                  className={`px-2.5 py-1 transition-colors ${
                    lang === "en" ? "bg-white text-black font-semibold" : "text-white/70 hover:text-white"
                  }`}
                >
                  EN
                </button>
              </div>

              <a
                href={assessmentHref}
                className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg text-sm font-bold text-white btn-primary"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {t("nav.cta")}
              </a>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex flex-col gap-1.5 p-2"
                aria-label="Menü öffnen"
              >
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(0,0,0,0.97)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-bold text-white hover:text-[#0A84FF] transition-colors duration-200"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}
            >
              {link.label}
            </a>
          ))}

          {/* Language switcher in mobile menu */}
          <div
            role="group"
            aria-label={t("lang.switchTo")}
            className="mt-2 flex items-center text-sm tracking-wider rounded-full border border-white/15 bg-white/5 overflow-hidden"
          >
            <button
              type="button"
              onClick={() => switchLang("de")}
              aria-pressed={lang === "de"}
              className={`px-4 py-1.5 transition-colors ${
                lang === "de" ? "bg-white text-black font-semibold" : "text-white/70"
              }`}
            >
              DE
            </button>
            <button
              type="button"
              onClick={() => switchLang("en")}
              aria-pressed={lang === "en"}
              className={`px-4 py-1.5 transition-colors ${
                lang === "en" ? "bg-white text-black font-semibold" : "text-white/70"
              }`}
            >
              EN
            </button>
          </div>

          <a
            href={assessmentHref}
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-8 py-4 rounded-xl text-lg font-bold text-white btn-primary"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            {t("nav.cta")}
          </a>
        </div>
      </div>
    </>
  );
}
