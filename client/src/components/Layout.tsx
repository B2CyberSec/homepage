import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LOGO_URL, COMPANY, NAV_ITEMS } from "@/lib/data";

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
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img src={LOGO_URL} alt="B2CyberSec" className="h-10 lg:h-12 w-auto" />
            <span className="text-lg font-bold tracking-tight hidden sm:block">
              B2CyberSec
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    location === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone size={16} />
              <span className="font-mono">{COMPANY.phone}</span>
            </a>
            <a href={COMPANY.calendly} target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
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
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="container py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <div className="pt-4 border-t border-border mt-4 space-y-3">
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground">
                <Phone size={16} />
                <span className="font-mono">{COMPANY.phone}</span>
              </a>
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
    <footer className="border-t border-border bg-background/50">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <img src={LOGO_URL} alt="B2CyberSec" className="h-10 w-auto" />
              <span className="text-lg font-bold">B2CyberSec</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              IT-Security transparent und direkt online buchbar. Klare Preise, schnelle Lieferung, {COMPANY.experience} Erfahrung.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone size={14} />
                <span className="font-mono">{COMPANY.phone}</span>
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail size={14} />
                {COMPANY.email}
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link href="/nis-2" className="hover:text-foreground transition-colors">NIS-2 Compliance</Link></li>
              <li><Link href="/pentesting" className="hover:text-foreground transition-colors">Pentesting</Link></li>
              <li><Link href="/mssp" className="hover:text-foreground transition-colors">Managed Security (MSSP)</Link></li>
              <li><Link href="/experten" className="hover:text-foreground transition-colors">Experten auf Zeit</Link></li>
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
            <a href={COMPANY.calendly} target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                Erstgespräch buchen
              </Button>
            </a>
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
