import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LOGO_URL, COMPANY } from "@/lib/data";
import CalendlyButton from "@/components/CalendlyButton";
import { useLanguage } from "@/contexts/LanguageContext";

function LangSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex items-center gap-0.5 rounded-lg border border-border bg-secondary/60 p-0.5 text-xs font-semibold">
      <button
        onClick={() => setLang("de")}
        className={`px-2.5 py-1 rounded-md transition-colors ${
          lang === "de"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Deutsch"
      >
        DE
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-2.5 py-1 rounded-md transition-colors ${
          lang === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { label: t("nav.services"), href: "/services" },
    { label: t("nav.nis2"), href: "/nis-2" },
    { label: t("nav.pentesting"), href: "/pentesting" },
    { label: t("nav.professional"), href: "/professional-services" },
    { label: t("nav.about"), href: "/ueber-uns" },
    { label: t("nav.contact"), href: "/kontakt" },
  ];

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
          {/* Full logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src={LOGO_URL}
              alt="B2CyberSec — IT Security Solutions & Services"
              className="h-10 lg:h-12 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
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
            <LangSwitcher />
            <CalendlyButton className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-sm">
              {t("nav.cta")}
              <ChevronRight size={16} className="ml-1" />
            </CalendlyButton>
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
            {navItems.map((item) => (
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
              <div className="px-4 flex justify-center">
                <LangSwitcher />
              </div>
              <div className="px-4">
                <CalendlyButton className="w-full bg-primary text-primary-foreground font-semibold">
                  {t("nav.cta")}
                </CalendlyButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  const { t, lang } = useLanguage();
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {lang === "de"
                ? `IT-Security transparent und direkt online buchbar. Klare Preise, schnelle Lieferung, ${COMPANY.experience} Erfahrung.`
                : `IT security transparent and bookable online. Clear prices, fast delivery, ${COMPANY.experience} of experience.`}
            </p>
            <div className="text-sm text-muted-foreground leading-relaxed space-y-0.5">
              <p className="font-semibold text-foreground">{COMPANY.name}</p>
              <p>Werner-von-Siemens-Str. 6</p>
              <p>86159 Augsburg</p>
              <p>{lang === "de" ? "Deutschland" : "Germany"}</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t("footer.services")}</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link href="/nis-2" className="hover:text-foreground transition-colors">{t("footer.nis2")}</Link></li>
              <li><Link href="/pentesting" className="hover:text-foreground transition-colors">Pentesting</Link></li>
              <li><Link href="/professional-services" className="hover:text-foreground transition-colors">{t("nav.professional")}</Link></li>
              <li><Link href="/services" className="hover:text-foreground transition-colors">{t("footer.all")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t("footer.company")}</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link href="/ueber-uns" className="hover:text-foreground transition-colors">{t("footer.about")}</Link></li>
              <li><Link href="/kontakt" className="hover:text-foreground transition-colors">{t("footer.contact")}</Link></li>
              <li><Link href="/impressum" className="hover:text-foreground transition-colors">{t("footer.impressum")}</Link></li>
              <li><Link href="/datenschutz" className="hover:text-foreground transition-colors">{t("footer.datenschutz")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">{t("footer.start")}</h4>
            <p className="text-sm text-muted-foreground mb-4">
              {t("footer.start.desc")}
            </p>
            <CalendlyButton className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-sm" size="default">
              {t("footer.cta")}
            </CalendlyButton>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. {t("footer.rights")}</p>
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
