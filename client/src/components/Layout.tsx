import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LOGO_URL, COMPANY, NAV_ITEMS } from "@/lib/data"; // LOGO_URL still used in Navbar
import CalendlyButton from "@/components/CalendlyButton";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-border shadow-sm shadow-black/5"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Full logo — no separate text label needed */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src={LOGO_URL}
              alt="B2CyberSec — IT Security Solutions & Services"
              className="h-10 lg:h-12 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    location === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-black/5"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href={COMPANY.calendly} target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-sm">
                Erstgespräch buchen
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menü"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-border shadow-md">
          <div className="container py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-black/5"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <div className="pt-4 border-t border-border mt-4 space-y-3">
              <a href={COMPANY.calendly} target="_blank" rel="noopener noreferrer" className="block px-4">
                <Button className="w-full bg-primary text-primary-foreground font-semibold">
                  Erstgespräch buchen
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="block">
              <span className="text-2xl font-extrabold tracking-tight text-foreground hover:text-primary transition-colors">
                B²CyberSec
              </span>
              <span className="block text-xs font-semibold uppercase tracking-widest text-primary mt-0.5">
                IT Security Solutions &amp; Services
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              IT-Security transparent und direkt online buchbar. Klare Preise, schnelle Lieferung, {COMPANY.experience} Erfahrung.
            </p>
            <div className="text-sm text-muted-foreground leading-relaxed">
              <p className="font-medium text-foreground">{COMPANY.name}</p>
              <p>Werner-von-Siemens-Str. 6</p>
              <p>86159 Augsburg</p>
              <p>Deutschland</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link href="/nis-2" className="hover:text-foreground transition-colors">NIS-2 Compliance</Link></li>
              <li><Link href="/pentesting" className="hover:text-foreground transition-colors">Pentesting</Link></li>
              <li><Link href="/professional-services" className="hover:text-foreground transition-colors">Professional Services</Link></li>
              <li><Link href="/services" className="hover:text-foreground transition-colors">Alle Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Unternehmen</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link href="/ueber-uns" className="hover:text-foreground transition-colors">Über uns</Link></li>
              <li><Link href="/kontakt" className="hover:text-foreground transition-colors">Kontakt</Link></li>
              <li><Link href="/impressum" className="hover:text-foreground transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Jetzt starten</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Buchen Sie ein kostenloses Erstgespräch — in 15 Minuten wissen Sie, wie sicher Ihr Unternehmen ist.
            </p>
            <CalendlyButton className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-sm" size="default">
              Erstgespräch buchen
            </CalendlyButton>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. Alle Rechte vorbehalten.</p>
          <p>{COMPANY.address}</p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
