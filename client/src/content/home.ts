/**
 * Startseite (Relaunch) — Funnel-Top, führt zum CYBER-STATUS-CHECK (/check).
 * DE + EN. Kein Em-Dash, nur wahre Aussagen, keine Kundennamen.
 */

export interface HomeContent {
  meta: { title: string; description: string };
  hero: { eyebrow: string; h1: string; sub: string; cta: string; secondary: string };
  trust: string;
  problem: { h2: string; items: { big: string; label: string }[] };
  solution: {
    h2: string;
    sub: string;
    facts: { value: string; label: string }[];
    cta: string;
  };
  video: { h2: string; sub: string; caption: string };
  proof: { h2: string; claim: string; stats: { value: string; label: string }[] };
  final: { h2: string; sub: string; cta: string };
  faq: { h2: string; items: { q: string; a: string }[] };
}

export const home: Record<"de" | "en", HomeContent> = {
  de: {
    meta: {
      title: "B2CyberSec: IT-Sicherheit, die dem Vorstand standhält",
      description:
        "Wir prüfen, wo Ihre Firma wirklich steht, und liefern in 14 Tagen einen vorstandstauglichen Bericht zum Festpreis. Für den Mittelstand von 50 bis 500 Mitarbeitern.",
    },
    hero: {
      eyebrow: "IT-Security für den Mittelstand (50 bis 500 Mitarbeiter)",
      h1: "IT-Sicherheit, die dem Vorstand standhält.",
      sub: "Wir denken wie Angreifer und berichten wie ein Vorstand. Seit über 20 Jahren, bei den größten deutschen Unternehmen.",
      cta: "Kostenloses Erstgespräch buchen",
      secondary: "So läuft der Check",
    },
    trust: "Über 20 Jahre im Einsatz bei den größten deutschen Unternehmen.",
    problem: {
      h2: "Nichts zu tun ist am teuersten.",
      items: [
        { big: "100.000 €+", label: "kostet ein ernster Vorfall im Mittelstand schnell." },
        { big: "10 Mio. €", label: "Bußgeld drohen bei NIS-2, oder 2 Prozent vom Umsatz." },
        { big: "§ 43", label: "GmbHG: die Geschäftsführung haftet persönlich." },
      ],
    },
    solution: {
      h2: "Ein Einstieg. Der CYBER-STATUS-CHECK.",
      sub: "Kein Projekt, kein Abo. Ein klarer Blick auf Ihre Sicherheit, zum Festpreis.",
      facts: [
        { value: "14", label: "Arbeitstage bis zum Bericht" },
        { value: "7.900 €", label: "Festpreis, kein Tagessatz" },
        { value: "0", label: "Aufwand: Ihr Betrieb läuft weiter" },
      ],
      cta: "Alles zum Check ansehen",
    },
    video: {
      h2: "NIS-2 in wenigen Minuten erklärt.",
      sub: "Was das neue Gesetz für Sie bedeutet, ohne Fachchinesisch.",
      caption: "Verständlich. Versprochen.",
    },
    proof: {
      h2: "Die Größten behalten uns. Jahr für Jahr.",
      claim: "Die größten deutschen Unternehmen lassen uns seit Jahren in ihre wichtigsten Systeme.",
      stats: [
        { value: "150+", label: "Personenjahre Erfahrung im Team" },
        { value: "66", label: "Fach-Zertifikate" },
        { value: "20+", label: "Jahre bei den Größten" },
      ],
    },
    final: {
      h2: "30 Minuten. Dann wissen Sie mehr.",
      sub: "Ehrliche Einschätzung, ohne Fachchinesisch. Danach entscheiden Sie in Ruhe.",
      cta: "Kostenloses Erstgespräch buchen",
    },
    faq: {
      h2: "Ehrliche Antworten.",
      items: [
        { q: "Für wen ist das?", a: "Für Geschäftsführer und IT-Verantwortliche im Mittelstand, 50 bis 500 Mitarbeiter, in Deutschland, Österreich und der Schweiz." },
        { q: "Was kostet der Einstieg?", a: "Der CYBER-STATUS-CHECK kostet 7.900 Euro. Festpreis, kein Tagessatz, keine Nachträge." },
        { q: "Haben wir nicht schon IT-Leute?", a: "Gut so. Wer etwas selbst betreut, kann es nicht selbst prüfen. Ihre Leute bekommen von uns eine klare Liste zum Weiterarbeiten." },
        { q: "Wie schnell geht das?", a: "14 Arbeitstage vom Start bis zum Bericht. Den Starttermin legen wir gemeinsam fest." },
      ],
    },
  },
  en: {
    meta: {
      title: "B2CyberSec: IT security that holds up in the boardroom",
      description:
        "We find out where your company really stands and deliver a board-ready report in 14 days at a fixed price. For mid-size companies from 50 to 500 employees.",
    },
    hero: {
      eyebrow: "IT security for mid-size companies (50 to 500 employees)",
      h1: "IT security that holds up in the boardroom.",
      sub: "We think like attackers and report like a board. For 20+ years, inside Germany's largest companies.",
      cta: "Book a free intro call",
      secondary: "How the check works",
    },
    trust: "20+ years inside Germany's largest companies.",
    problem: {
      h2: "Doing nothing is the most expensive option.",
      items: [
        { big: "100,000 €+", label: "is what a serious incident quickly costs a mid-size company." },
        { big: "10 M €", label: "fine is possible under NIS-2, or 2 percent of revenue." },
        { big: "§ 43", label: "GmbHG: the management is personally liable." },
      ],
    },
    solution: {
      h2: "One entry point. The CYBER-STATUS-CHECK.",
      sub: "No project, no subscription. A clear view of your security, at a fixed price.",
      facts: [
        { value: "14", label: "working days to the report" },
        { value: "7,900 €", label: "fixed price, no day rate" },
        { value: "0", label: "effort: your business keeps running" },
      ],
      cta: "See the full check",
    },
    video: {
      h2: "NIS-2 explained in a few minutes.",
      sub: "What the new law means for you, without the jargon.",
      caption: "Clear. Promised.",
    },
    proof: {
      h2: "The largest keep us. Year after year.",
      claim: "Germany's largest companies have let us into their most important systems for years.",
      stats: [
        { value: "150+", label: "person-years of experience" },
        { value: "66", label: "professional certificates" },
        { value: "20+", label: "years with the largest" },
      ],
    },
    final: {
      h2: "30 minutes. Then you know more.",
      sub: "An honest assessment, without jargon. Then you decide in peace.",
      cta: "Book a free intro call",
    },
    faq: {
      h2: "Honest answers.",
      items: [
        { q: "Who is this for?", a: "For managing directors and IT leaders in mid-size companies, 50 to 500 employees, in Germany, Austria and Switzerland." },
        { q: "What does the entry cost?", a: "The CYBER-STATUS-CHECK costs 7,900 euro. Fixed price, no day rate, no add-ons." },
        { q: "Don't we already have IT people?", a: "Good. Whoever runs something cannot audit it themselves. Your people get a clear list from us to work with." },
        { q: "How fast is it?", a: "14 working days from start to report. We set the start date together." },
      ],
    },
  },
};
