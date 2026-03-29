/*
 * DESIGN: Editorial Shock — "Der Weckruf"
 * Navbar: Minimal, dark, sticky. Logo left, sparse nav right.
 * Orange accent on hover. No fluff.
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/nFZEie8kzRFKviGqGmc9gt/b2cybersec_logo_full_f57c79bb.png";

const navLinks = [
  { label: "Das Problem", href: "#problem" },
  { label: "Services", href: "#services" },
  { label: "NIS-2", href: "#nis2" },
  { label: "Videos", href: "#videos" },
  { label: "Preise", href: "#preise" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={LOGO_URL}
            alt="B2CyberSec"
            className="h-8 md:h-10 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/60 hover:text-[#ff4500] transition-colors duration-200 tracking-wide uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://calendly.com/b2cybersec/kontakt"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2.5 bg-[#ff4500] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#ff5a1a] transition-all duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Aufwachen
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white/80 hover:text-[#ff4500] transition-colors"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
              href="https://calendly.com/b2cybersec/kontakt"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-5 py-3 bg-[#ff4500] text-white text-center font-bold uppercase tracking-wider"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Aufwachen
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
