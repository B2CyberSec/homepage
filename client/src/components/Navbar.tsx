/*
 * DESIGN: Editorial Shock — "Der Weckruf"
 * Navbar: Minimal, dark, sticky. Inline SVG logo (clean, professional), language switcher, sparse nav.
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

/** Inline SVG logo — matches original B2CyberSec branding, white/orange on dark */
function B2Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Shield SVG — clean teal-style shield redrawn in white */}
      <svg
        viewBox="0 0 120 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-14 md:h-16 lg:h-20 w-auto"
        aria-hidden="true"
      >
        {/* Shield outline */}
        <path
          d="M60 4 L108 24 L108 72 C108 100 88 124 60 136 C32 124 12 100 12 72 L12 24 Z"
          stroke="white"
          strokeWidth="7"
          fill="none"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* B letter */}
        <text
          x="28"
          y="92"
          fontFamily="'Space Grotesk', 'Arial Black', sans-serif"
          fontWeight="700"
          fontSize="58"
          fill="white"
        >
          B
        </text>
        {/* Superscript 2 */}
        <text
          x="72"
          y="60"
          fontFamily="'Space Grotesk', 'Arial Black', sans-serif"
          fontWeight="700"
          fontSize="28"
          fill="#ff4500"
        >
          2
        </text>
      </svg>

      {/* Text part */}
      <div className="flex flex-col leading-none">
        <span
          className="text-white font-bold tracking-tight"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.4rem, 2.8vw, 2rem)",
            letterSpacing: "-0.01em",
          }}
        >
          B<sup className="text-white text-[0.5em] align-super">2</sup>
          <span style={{ color: "white" }}>CyberSec</span>
        </span>
        <span
          className="text-[#ff4500] font-bold uppercase"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(0.5rem, 0.85vw, 0.65rem)",
            letterSpacing: "0.2em",
            marginTop: "3px",
          }}
        >
          IT Security Solutions &amp; Services
        </span>
      </div>
    </div>
  );
}

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const calendlyUrl = lang === "de"
    ? "https://calendly.com/b2cybersec/kontakt"
    : "https://calendly.com/b2cybersec/contact";

  const navLinks = [
    { label: t("nav.problem"), href: "#problem" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.nis2"), href: "#nis2" },
    { label: t("nav.videos"), href: "#videos" },
    { label: t("nav.preise"), href: "#preise" },
    { label: t("nav.kontakt"), href: "#kontakt" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20 md:h-24">
        {/* Logo — inline SVG, clean and professional */}
        <a href="#" className="flex items-center shrink-0">
          <B2Logo />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-bold text-white/60 hover:text-[#ff4500] transition-colors duration-200 tracking-widest uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {link.label}
            </a>
          ))}

          {/* Language Switcher */}
          <div className="flex items-center gap-0 ml-2 border border-white/10 overflow-hidden">
            <button
              onClick={() => setLang("de")}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                lang === "de"
                  ? "bg-[#ff4500] text-white"
                  : "bg-transparent text-white/50 hover:text-white/80"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              DE
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                lang === "en"
                  ? "bg-[#ff4500] text-white"
                  : "bg-transparent text-white/50 hover:text-white/80"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              EN
            </button>
          </div>

          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 px-5 py-2.5 bg-[#ff4500] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#ff5a1a] transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("nav.cta")}
          </a>
        </div>

        {/* Mobile: Language + Toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <div className="flex items-center gap-0 border border-white/10 overflow-hidden">
            <button
              onClick={() => setLang("de")}
              className={`px-2 py-1 text-xs font-bold tracking-wider transition-all ${
                lang === "de"
                  ? "bg-[#ff4500] text-white"
                  : "bg-transparent text-white/50"
              }`}
            >
              DE
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 text-xs font-bold tracking-wider transition-all ${
                lang === "en"
                  ? "bg-[#ff4500] text-white"
                  : "bg-transparent text-white/50"
              }`}
            >
              EN
            </button>
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white/80 hover:text-[#ff4500] transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0a0a0a]/98 backdrop-blur-lg border-t border-white/5">
          <div className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-white/70 hover:text-[#ff4500] transition-colors uppercase tracking-wide py-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-5 py-3 bg-[#ff4500] text-white text-center font-bold uppercase tracking-wider"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("nav.cta")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
