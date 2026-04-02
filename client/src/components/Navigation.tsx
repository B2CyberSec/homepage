/**
 * Navigation Component – Bauhaus Security Design
 * Minimal top navigation with emergency button and smooth scroll links.
 * Design: Space Grotesk headings, clean lines, signal green accents.
 */
import { useState, useEffect } from "react";
import { Phone, Menu, X, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Pakete & Preise", href: "#pakete" },
  { label: "Warum B2CyberSec", href: "#warum" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <a
          href="/"
          className="font-heading font-bold text-lg tracking-tight text-foreground hover:text-signal transition-colors"
        >
          B2Cyber<span className="text-signal">Sec</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-signal transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+4982190789500"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded bg-destructive text-destructive-foreground hover:opacity-90 transition-opacity glow-emergency animate-pulse-subtle"
          >
            <AlertTriangle className="w-4 h-4" />
            Cyberangriff? Sofort-Hilfe
          </a>
          <button
            onClick={() => handleNavClick("#kontakt")}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded border border-signal text-signal hover:bg-signal hover:text-background transition-all"
          >
            <Phone className="w-4 h-4" />
            Beratung buchen
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="tel:+4982190789500"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded bg-destructive text-destructive-foreground"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            Notfall
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-foreground"
            aria-label="Menü"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-foreground py-2 border-b border-border/50"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#kontakt")}
                className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium rounded border border-signal text-signal hover:bg-signal hover:text-background transition-all"
              >
                <Phone className="w-4 h-4" />
                Beratung buchen
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
