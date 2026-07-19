/**
 * CYBER-STATUS-CHECK — Relaunch-Seite. Kundentexte DE + EN.
 * Iterationen NUR hier. Kein Em-Dash (taste-skill), nur wahre Aussagen,
 * keine Kundennamen, Festpreis offensiv.
 */

export interface CheckContent {
  meta: { title: string; description: string };
  nav: { cta: string };
  hero: {
    eyebrow: string;
    h1: string;
    sub: string;
    cta: string;
    trust: string;
  };
  pain: {
    h2: string;
    items: { big: string; label: string }[];
  };
  how: {
    h2: string;
    sub: string;
    modules: { n: string; title: string; text: string }[];
    days: string;
    daysLabel: string;
  };
  result: {
    h2: string;
    sub: string;
    points: string[];
  };
  offer: {
    h2: string;
    sub: string;
    rows: { label: string; value?: string; bonus?: boolean }[];
    totalLabel: string;
    total: string;
    price: string;
    priceNote: string;
  };
  guarantee: { h2: string; text: string };
  proof: {
    h2: string;
    claim: string;
    stats: { value: string; label: string }[];
  };
  scarcity: string;
  quali: {
    h2: string;
    sub: string;
    questions: string[];
    yes: string;
    no: string;
    okTitle: string;
    okText: string;
    okCta: string;
    okMicro: string;
    noTitle: string;
    noText: string;
    noCta: string;
    again: string;
    step: string;
  };
  faq: { h2: string; items: { q: string; a: string }[] };
  footer: { rights: string; imprint: string; privacy: string };
}

const CALENDLY = "https://calendly.com/b2cybersec-team/bojan?utm_source=relaunch&utm_medium=lp&utm_content=";

export const CALENDLY_BASE = CALENDLY;

export const check: Record<"de" | "en", CheckContent> = {
  de: {
    meta: {
      title: "CYBER-STATUS-CHECK: Klarheit über Ihre IT-Sicherheit | B2CyberSec",
      description:
        "In 14 Arbeitstagen wissen Sie schwarz auf weiß, wie sicher Ihre Firma ist. Vorstandstauglicher Bericht zum Festpreis von 7.900 Euro.",
    },
    nav: { cta: "Erstgespräch buchen" },
    hero: {
      eyebrow: "Für Geschäftsführer und IT-Leiter (50 bis 500 Mitarbeiter)",
      h1: "In 14 Arbeitstagen wissen Sie schwarz auf weiß, wie sicher Ihre Firma ist.",
      sub: "Der CYBER-STATUS-CHECK liefert einen vorstandstauglichen Bericht zum Festpreis. Kein Fachchinesisch, keine offene Rechnung.",
      cta: "Kostenloses Erstgespräch buchen",
      trust: "Seit über 20 Jahren im Einsatz bei den größten deutschen Unternehmen.",
    },
    pain: {
      h2: "Ein Sicherheits-Vorfall trifft zuerst Sie.",
      items: [
        { big: "100.000 €+", label: "kostet ein ernster Vorfall im Mittelstand schnell." },
        { big: "10 Mio. €", label: "Bußgeld drohen bei NIS-2, oder 2 Prozent vom Umsatz." },
        { big: "§ 43", label: "GmbHG: die Geschäftsführung haftet persönlich." },
      ],
    },
    how: {
      h2: "Wir prüfen wie ein echter Angreifer. Mit Ihrer Erlaubnis.",
      sub: "Vier Bausteine, ein klares Bild. Ihr Betrieb läuft die ganze Zeit normal weiter.",
      modules: [
        { n: "1", title: "Angreifer-Sicht", text: "Von innen und außen: Kommt jemand rein?" },
        { n: "2", title: "Konfiguration", text: "Firewall, Netz-Trennung und VPN auf dem Prüfstand." },
        { n: "3", title: "Pflichten-Ampel", text: "NIS-2, ISO 27001 und Datenschutz auf einen Blick." },
        { n: "4", title: "Vorstands-Bericht", text: "Verständlich, mit Plan für die nächsten 30, 60, 90 Tage." },
      ],
      days: "14",
      daysLabel: "Arbeitstage vom Start bis zum Bericht",
    },
    result: {
      h2: "Ein Bericht, den Ihr Vorstand versteht.",
      sub: "Kein 200-Seiten-Ordner. Die drei dringendsten Schritte zuerst, dann der Rest.",
      points: [
        "Wo Sie offen sind, klar benannt und nach Dringlichkeit sortiert.",
        "Was Sie zuerst tun: sofort, bald, kann warten.",
        "Schwarz auf weiß, zum Vorzeigen bei Amt, Versicherung und Kunden.",
      ],
    },
    offer: {
      h2: "Alles drin. Ein Festpreis.",
      sub: "Vier Bausteine, vier Extras. Der Wert entsteht durch Addition, nicht durch Rabatt.",
      rows: [
        { label: "Angreifer-Sicht (intern und extern)" },
        { label: "Konfigurations-Prüfung" },
        { label: "Pflichten-Ampel (NIS-2, ISO, Datenschutz)" },
        { label: "Vorstands-Bericht mit 30-60-90-Plan" },
        { label: "Externe Angriffs-Simulation", value: "1.500 €", bonus: true },
        { label: "NIS-2 Vorlagen-Paket", value: "1.500 €", bonus: true },
        { label: "60 Minuten Deep-Dive zum Gesetz", value: "850 €", bonus: true },
        { label: "Nach-Prüfung nach 30 Tagen", value: "990 €", bonus: true },
      ],
      totalLabel: "Gesamtwert",
      total: "12.740 €",
      price: "7.900 €",
      priceNote: "Festpreis. Kein Tagessatz, keine Nachträge.",
    },
    guarantee: {
      h2: "Die Hälfte zahlen Sie erst am Ende.",
      text: "50 Prozent beim Start, 50 Prozent erst, wenn der Bericht auf Ihrem Tisch liegt. Und wir finden etwas, das für Sie zählt.",
    },
    proof: {
      h2: "Die Größten behalten uns. Jahr für Jahr.",
      claim:
        "Die größten deutschen Unternehmen lassen uns seit Jahren in ihre wichtigsten Systeme.",
      stats: [
        { value: "150+", label: "Personenjahre Erfahrung im Team" },
        { value: "66", label: "Fach-Zertifikate" },
        { value: "20+", label: "Jahre bei den Größten" },
      ],
    },
    scarcity: "Wir nehmen 3 Checks pro Monat an. Unsere Senioren machen jeden selbst.",
    quali: {
      h2: "Passt das für Sie? Drei Fragen.",
      sub: "30 Sekunden, dann wissen wir beide, ob ein Gespräch Sinn ergibt.",
      questions: [
        "Sind Sie Geschäftsführer oder IT-Leiter?",
        "Hat Ihre Firma mehr als 50 Mitarbeiter?",
        "Wollen Sie in den nächsten 4 Wochen Klarheit?",
      ],
      yes: "Ja",
      no: "Nein",
      okTitle: "Passt. Sie sind richtig hier.",
      okText: "Suchen Sie sich einen Termin aus. 30 Minuten, ehrlich, ohne Fachchinesisch.",
      okCta: "Termin aussuchen",
      okMicro: "Kein Verkäufer-Theater. Versprochen.",
      noTitle: "Kein Problem.",
      noText: "Dann starten Sie mit unserem kostenlosen Selbstcheck. Dauert 3 Minuten.",
      noCta: "Zum kostenlosen Selbstcheck",
      again: "Fragen nochmal beantworten",
      step: "Frage",
    },
    faq: {
      h2: "Ehrliche Antworten.",
      items: [
        { q: "Was kostet der Check?", a: "7.900 Euro. Festpreis, kein Tagessatz, keine Nachträge nach dem Scoping-Gespräch." },
        { q: "Stört die Prüfung meinen Betrieb?", a: "Nein. Wir schauen, wir ändern nichts. Ihre Firma arbeitet die ganze Zeit normal weiter." },
        { q: "Und wenn bei uns alles in Ordnung ist?", a: "Dann steht genau das im Bericht. Das ist Ihr bestes Ergebnis, und Sie können es Amt, Versicherung und Kunden zeigen." },
        { q: "Wie schnell geht das?", a: "14 Arbeitstage vom Start bis zum Bericht. Den Starttermin legen wir gemeinsam fest." },
      ],
    },
    footer: {
      rights: "© 2026 B2CyberSec GmbH · Werner-von-Siemens-Str. 6 · 86159 Augsburg",
      imprint: "Impressum",
      privacy: "Datenschutz",
    },
  },

  en: {
    meta: {
      title: "CYBER-STATUS-CHECK: Clarity on your IT security | B2CyberSec",
      description:
        "In 14 working days you know in black and white how secure your company is. Board-ready report at a fixed price of 7,900 euro.",
    },
    nav: { cta: "Book a call" },
    hero: {
      eyebrow: "For managing directors and IT leaders (50 to 500 employees)",
      h1: "In 14 working days you know, in black and white, how secure your company is.",
      sub: "The CYBER-STATUS-CHECK delivers a board-ready report at a fixed price. No jargon, no open invoice.",
      cta: "Book a free intro call",
      trust: "20+ years inside Germany's largest companies.",
    },
    pain: {
      h2: "A security incident hits you first.",
      items: [
        { big: "100,000 €+", label: "is what a serious incident quickly costs a mid-size company." },
        { big: "10 M €", label: "fine is possible under NIS-2, or 2 percent of revenue." },
        { big: "§ 43", label: "GmbHG: the management is personally liable." },
      ],
    },
    how: {
      h2: "We test like a real attacker. With your permission.",
      sub: "Four building blocks, one clear picture. Your business keeps running the whole time.",
      modules: [
        { n: "1", title: "Attacker view", text: "From inside and outside: can anyone get in?" },
        { n: "2", title: "Configuration", text: "Firewall, network segmentation and VPN under test." },
        { n: "3", title: "Duties traffic light", text: "NIS-2, ISO 27001 and data protection at a glance." },
        { n: "4", title: "Board report", text: "Clear, with a plan for the next 30, 60, 90 days." },
      ],
      days: "14",
      daysLabel: "working days from start to report",
    },
    result: {
      h2: "A report your board understands.",
      sub: "No 200-page binder. The three most urgent steps first, then the rest.",
      points: [
        "Where you are exposed, named clearly and sorted by urgency.",
        "What to do first: now, soon, can wait.",
        "In black and white, to show to authorities, insurers and clients.",
      ],
    },
    offer: {
      h2: "Everything included. One fixed price.",
      sub: "Four blocks, four extras. The value comes from addition, not from a discount.",
      rows: [
        { label: "Attacker view (internal and external)" },
        { label: "Configuration review" },
        { label: "Duties traffic light (NIS-2, ISO, privacy)" },
        { label: "Board report with 30-60-90 plan" },
        { label: "External attack simulation", value: "1,500 €", bonus: true },
        { label: "NIS-2 template pack", value: "1,500 €", bonus: true },
        { label: "60-minute deep-dive on the law", value: "850 €", bonus: true },
        { label: "Re-scan after 30 days", value: "990 €", bonus: true },
      ],
      totalLabel: "Total value",
      total: "12,740 €",
      price: "7,900 €",
      priceNote: "Fixed price. No day rates, no add-ons.",
    },
    guarantee: {
      h2: "You pay half only at the end.",
      text: "50 percent at the start, 50 percent only when the report is on your desk. And we find something that matters to you.",
    },
    proof: {
      h2: "The largest keep us. Year after year.",
      claim:
        "Germany's largest companies have let us into their most important systems for years.",
      stats: [
        { value: "150+", label: "person-years of experience" },
        { value: "66", label: "professional certificates" },
        { value: "20+", label: "years with the largest" },
      ],
    },
    scarcity: "We take 3 checks per month. Our seniors run every one themselves.",
    quali: {
      h2: "Is this for you? Three questions.",
      sub: "30 seconds, then we both know if a call makes sense.",
      questions: [
        "Are you a managing director or IT leader?",
        "Does your company have more than 50 employees?",
        "Do you want clarity within the next 4 weeks?",
      ],
      yes: "Yes",
      no: "No",
      okTitle: "Good fit. You are in the right place.",
      okText: "Pick a slot. 30 minutes, honest, no jargon.",
      okCta: "Pick a slot",
      okMicro: "No sales theatre. Promised.",
      noTitle: "No problem.",
      noText: "Then start with our free self-check. Takes 3 minutes.",
      noCta: "To the free self-check",
      again: "Answer the questions again",
      step: "Question",
    },
    faq: {
      h2: "Honest answers.",
      items: [
        { q: "What does the check cost?", a: "7,900 euro. Fixed price, no day rate, no add-ons after the scoping call." },
        { q: "Does the check disrupt my business?", a: "No. We look, we change nothing. Your company keeps running the whole time." },
        { q: "And if everything is fine with us?", a: "Then that is exactly what the report says. That is your best result, and you can show it to authorities, insurers and clients." },
        { q: "How fast is it?", a: "14 working days from start to report. We set the start date together." },
      ],
    },
    footer: {
      rights: "© 2026 B2CyberSec GmbH · Werner-von-Siemens-Str. 6 · 86159 Augsburg",
      imprint: "Imprint",
      privacy: "Privacy",
    },
  },
};
