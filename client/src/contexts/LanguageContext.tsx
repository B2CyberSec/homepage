import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "de" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  calendlyUrl: string;
}

const translations: Record<Language, Record<string, string>> = {
  de: {
    // Nav
    "nav.services": "Services",
    "nav.nis2": "NIS-2",
    "nav.pentesting": "Pentesting",
    "nav.professional": "Professional Services",
    "nav.about": "Über uns",
    "nav.contact": "Kontakt",
    "nav.cta": "Erstgespräch buchen",

    // Hero
    "hero.badge": "NIS-2 Frist abgelaufen — BSI-Registrierung seit 6. März 2026 Pflicht",
    "hero.h1a": "IT-Security",
    "hero.h1b": "einfach",
    "hero.h1c": "direkt online buchen",
    "hero.sub": "Klare Preise. Schnelle Lieferung. Keine Überraschungen. Wählen Sie Ihren Security-Service, buchen Sie online — und wir kümmern uns um den Rest.",
    "hero.cta1": "Services ansehen",
    "hero.cta2": "Kostenloses Erstgespräch",
    "hero.catalog": "Live Service-Katalog",
    "hero.all": "Alle 8 Services ansehen",

    // Footer
    "footer.services": "Services",
    "footer.company": "Unternehmen",
    "footer.start": "Jetzt starten",
    "footer.start.desc": "Buchen Sie ein kostenloses Erstgespräch — in 15 Minuten wissen Sie, wie sicher Ihr Unternehmen ist.",
    "footer.cta": "Erstgespräch buchen",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.nis2": "NIS-2 Compliance",
    "footer.about": "Über uns",
    "footer.contact": "Kontakt",
    "footer.impressum": "Impressum",
    "footer.datenschutz": "Datenschutz",
    "footer.all": "Alle Services",

    // Contact page
    "contact.badge": "Kontakt",
    "contact.title": "Sprechen Sie mit uns",
    "contact.sub": "Buchen Sie direkt einen Termin oder schreiben Sie uns — wir melden uns innerhalb von 24 Stunden.",
    "contact.book.title": "Erstgespräch buchen",
    "contact.book.sub": "Kostenlos, 15 Minuten, unverbindlich",
    "contact.book.desc": "Buchen Sie direkt einen Termin in unserem Kalender. In 15 Minuten besprechen wir Ihre Situation und empfehlen den passenden Service — ohne Verkaufsdruck.",
    "contact.direct.title": "Direkter Kontakt",
    "contact.direct.sub": "Schreiben Sie uns direkt — wir antworten innerhalb von 24 Stunden.",
    "contact.email.label": "E-Mail",
    "contact.email.note": "Antwort innerhalb von 24 Stunden",
    "contact.address.label": "Adresse",
    "contact.hours.label": "Geschäftszeiten",
    "contact.hours.val": "Montag – Freitag: 8:00 – 18:00 Uhr",
    "contact.hours.hotline": "Incident-Hotline: 24/7",
    "contact.faq.title": "Häufige Fragen",
    "contact.faq.q1": "Wie schnell können Sie starten?",
    "contact.faq.a1": "Je nach Service ab 48 Stunden. Für die meisten Projekte innerhalb einer Woche.",
    "contact.faq.q2": "Brauche ich ein Erstgespräch?",
    "contact.faq.a2": "Nein. Sie können Services direkt buchen. Das Erstgespräch ist optional und kostenlos.",
    "contact.faq.q3": "Arbeiten Sie auch vor Ort?",
    "contact.faq.a3": "Ja, unsere Onshore-Experten kommen auch zu Ihnen. Nearshore-Experten arbeiten remote.",

    // Calendly iframe title
    "calendly.title": "Calendly Terminbuchung",
  },
  en: {
    // Nav
    "nav.services": "Services",
    "nav.nis2": "NIS-2",
    "nav.pentesting": "Pentesting",
    "nav.professional": "Professional Services",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    "nav.cta": "Book a Free Call",

    // Hero
    "hero.badge": "NIS-2 deadline passed — BSI registration mandatory since March 6, 2026",
    "hero.h1a": "IT Security",
    "hero.h1b": "simple",
    "hero.h1c": "book online directly",
    "hero.sub": "Clear prices. Fast delivery. No surprises. Choose your security service, book online — and we take care of the rest.",
    "hero.cta1": "View Services",
    "hero.cta2": "Free Consultation",
    "hero.catalog": "Live Service Catalog",
    "hero.all": "View all 8 services",

    // Footer
    "footer.services": "Services",
    "footer.company": "Company",
    "footer.start": "Get Started",
    "footer.start.desc": "Book a free 15-minute consultation — and find out how secure your company really is.",
    "footer.cta": "Book Free Call",
    "footer.rights": "All rights reserved.",
    "footer.nis2": "NIS-2 Compliance",
    "footer.about": "About Us",
    "footer.contact": "Contact",
    "footer.impressum": "Legal Notice",
    "footer.datenschutz": "Privacy Policy",
    "footer.all": "All Services",

    // Contact page
    "contact.badge": "Contact",
    "contact.title": "Talk to Us",
    "contact.sub": "Book an appointment directly or write to us — we respond within 24 hours.",
    "contact.book.title": "Book a Free Call",
    "contact.book.sub": "Free, 15 minutes, no obligation",
    "contact.book.desc": "Book a slot directly in our calendar. In 15 minutes we'll assess your situation and recommend the right service — no sales pressure.",
    "contact.direct.title": "Direct Contact",
    "contact.direct.sub": "Write to us directly — we respond within 24 hours.",
    "contact.email.label": "Email",
    "contact.email.note": "Response within 24 hours",
    "contact.address.label": "Address",
    "contact.hours.label": "Business Hours",
    "contact.hours.val": "Monday – Friday: 8:00 AM – 6:00 PM",
    "contact.hours.hotline": "Incident Hotline: 24/7",
    "contact.faq.title": "Frequently Asked Questions",
    "contact.faq.q1": "How quickly can you start?",
    "contact.faq.a1": "Depending on the service, from 48 hours. For most projects within one week.",
    "contact.faq.q2": "Do I need an initial consultation?",
    "contact.faq.a2": "No. You can book services directly. The consultation is optional and free.",
    "contact.faq.q3": "Do you also work on-site?",
    "contact.faq.a3": "Yes, our onshore experts can come to you. Nearshore experts work remotely.",

    // Calendly iframe title
    "calendly.title": "Calendly Appointment Booking",
  },
};

const CALENDLY_URLS: Record<Language, string> = {
  de: "https://calendly.com/b2cybersec/kontakt",
  en: "https://calendly.com/b2cybersec/contact",
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "de",
  setLang: () => {},
  t: (key) => key,
  calendlyUrl: CALENDLY_URLS.de,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("de");

  const setLang = (l: Language) => {
    setLangState(l);
  };

  const t = (key: string): string => {
    return translations[lang][key] ?? translations["de"][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, calendlyUrl: CALENDLY_URLS[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
