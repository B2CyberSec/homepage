/*
 * B2CyberSec — central translation dictionary (DE / EN).
 * All UI strings live here. Use dot-notation keys.
 *
 * Convention: keys must exist in BOTH `de` and `en`.
 * Long-form legal text (Impressum, Datenschutz) is kept here too,
 * with line breaks via "\n\n" for paragraph separation.
 */

/* eslint-disable max-len */

export const translations = {
  de: {
    // ──────────────────────────  NAV / LANG SWITCHER  ──────────────────────────
    "nav.services": "Services",
    "nav.nis2": "NIS-2",
    "nav.pentesting": "Pentesting",
    "nav.assessment": "Readiness Check",
    "nav.contact": "Kontakt",
    "nav.cta": "NIS-2 Check starten",
    "lang.de": "DE",
    "lang.en": "EN",
    "lang.switchTo": "Sprache wechseln",

    // ──────────────────────────  HERO  ──────────────────────────
    "hero.eyebrow": "NIS-2 TRITT IN KRAFT — SIND SIE BEREIT?",
    "hero.h1.line1": "Hacker schlafen nicht.",
    "hero.h1.line2": "Ihre IT-Abteilung schon.",
    "hero.sub": "Als Geschäftsführer haften Sie persönlich für Sicherheitsvorfälle. NIS-2 macht das zur Pflicht. Wir machen es zur Stärke — in 20+ Jahren haben wir gelernt, wie.",
    "hero.cta.primary": "Kostenlosen NIS-2 Check starten",
    "hero.cta.secondary": "Direktes Gespräch buchen",
    "hero.tag.compliant": "DSGVO-konform · 100% Compliance-Fokus",

    // ──────────────────────────  STATS  ──────────────────────────
    "stats.years": "Jahre Erfahrung",
    "stats.projects": "Projekte abgeschlossen",
    "stats.experts": "Spezialisierte Experten",
    "stats.compliance": "Compliance-Fokus",

    // ──────────────────────────  SERVICES SECTION  ──────────────────────────
    "services.eyebrow": "DREI SÄULEN. EIN ZIEL.",
    "services.headline.line1": "Fokussiert. Spezialisiert.",
    "services.headline.line2": "Ergebnisorientiert.",
    "services.subline": "Drei Disziplinen. Ein Team.",

    "services.s1.tag": "Säule 01",
    "services.s1.title": "Professional Services",
    "services.s1.desc": "Sie brauchen einen Netzwerk-Spezialisten für 3 Monate? Einen Cloud-Architekten für die Migration? Wir liefern den richtigen Experten — ohne Headhunter-Gebühren, ohne Monate des Wartens.",
    "services.s1.lead.name": "Boris Bošnjak",
    "services.s1.lead.role": "CEO, 20+ Jahre IT-Erfahrung",
    "services.s1.cta": "Termin mit Boris buchen",

    "services.s2.tag": "Säule 02",
    "services.s2.title": "NIS-2 & Compliance",
    "services.s2.desc": "Als Geschäftsführer haften Sie persönlich. NIS-2, ISO 27001, DORA, GDPR — kein Unternehmen kann es sich leisten, diese Pflichten zu ignorieren. Unser CISSP-zertifizierter Ex-CISO mit Big-4-Beratungserfahrung macht Compliance zu Ihrem Wettbewerbsvorteil.",
    "services.s2.lead.name": "Senad Džananović",
    "services.s2.lead.role": "CISSP, ex-CISO, Big-4-Erfahrung, 20+ Jahre",
    "services.s2.cta": "Termin mit Senad buchen",

    "services.s3.tag": "Säule 03",
    "services.s3.title": "Penetration Testing",
    "services.s3.desc": "Wissen Sie wirklich, wie sicher Ihre Systeme sind? Oder glauben Sie es nur? Wir denken wie Angreifer — und finden die Lücken, bevor es andere tun. Mit spezialisierten Partnern in Sarajevo und Kosovo für maximale Tiefe.",
    "services.s3.lead.name": "Bojan Kornijenko",
    "services.s3.lead.role": "Penetration Testing Lead, OSCP, Red Team",
    "services.s3.cta": "Termin mit Bojan buchen",

    // ──────────────────────────  NIS-2 URGENCY  ──────────────────────────
    "urgency.eyebrow": "NIS-2 GESCHÄFTSFÜHRER-HAFTUNG",
    "urgency.headline": "Bußgelder bis 10 Mio. €. Persönliche Haftung. Heute.",
    "urgency.body": "Seit dem 17. Oktober 2024 ist NIS-2 in Deutschland verbindlich. Geschäftsführer können persönlich haftbar gemacht werden, wenn keine angemessenen Cybersecurity-Maßnahmen nachweisbar sind. Wir helfen Ihnen, die Pflichten in 90 Tagen umzusetzen.",
    "urgency.bullet1": "BSI-Meldepflicht innerhalb von 24 Stunden",
    "urgency.bullet2": "Nachweispflicht von Risikomanagement-Maßnahmen",
    "urgency.bullet3": "Persönliche Haftung der Geschäftsführung",
    "urgency.cta": "NIS-2 Readiness Check starten",

    // ──────────────────────────  TEAM SECTION  ──────────────────────────
    "team.eyebrow": "WER WIR SIND",
    "team.headline.line1": "Echte Experten.",
    "team.headline.line2": "Keine Berater-Floskeln.",
    "team.body": "B2CyberSec ist keine Agentur mit Zertifikaten auf dem Papier. Wir sind ein wachsendes Team aus über 10 Spezialisten — mit Erfahrung in kritischen Infrastrukturen, internationalen Top-Beratungen und echten Sicherheitsvorfällen. Drei erfahrene Leads steuern unsere Kernbereiche:",
    "team.image.badge": "20+ Jahre kombinierte Erfahrung",

    "team.boris.role": "CEO & Professional Services",
    "team.boris.detail": "20+ Jahre IT-Erfahrung, Netzwerk & Security",
    "team.senad.role": "NIS-2 & Compliance",
    "team.senad.detail": "CISSP, ex-CISO, Big-4-Erfahrung",
    "team.bojan.role": "Penetration Testing Lead",
    "team.bojan.detail": "OSCP, Offensive Security, Red Team",

    // ──────────────────────────  FAQ  ──────────────────────────
    "faq.eyebrow": "HÄUFIGE FRAGEN",
    "faq.headline": "Antworten, die ein Berater nicht gerne gibt.",

    "faq.q1": "Was kostet NIS-2 Compliance?",
    "faq.a1": "Pauschal nicht zu beantworten — aber: ein NIS-2 Readiness Assessment kostet typischerweise 5.000–15.000 €. Eine vollständige Implementierung liegt je nach Unternehmensgröße bei 30.000–150.000 €. Im Vergleich zu Bußgeldern bis 10 Mio. € oder 2 % des Jahresumsatzes ist das eine Investition, die sich rechnet.",

    "faq.q2": "Brauche ich einen CISO?",
    "faq.a2": "Wenn Sie unter NIS-2 fallen: faktisch ja. Sie brauchen jemanden, der die Verantwortung trägt und entscheiden kann. Aber Sie brauchen keinen Vollzeit-CISO mit 180.000 € Jahresgehalt. Ein Fractional CISO oder ein erfahrener externer Berater reicht für die meisten KMU völlig aus.",

    "faq.q3": "Fällt mein Unternehmen unter NIS-2?",
    "faq.a3": "Wenn Sie mehr als 50 Mitarbeiter oder 10 Mio. € Umsatz haben und in einem der 18 NIS-2 Sektoren tätig sind (Energie, Gesundheit, Banken, IT-Dienste, Logistik, Lebensmittelproduktion etc.) — sehr wahrscheinlich ja. Unser Readiness Check sagt es Ihnen in 5 Minuten.",

    "faq.q4": "Wie lange dauert ein Penetration Test?",
    "faq.a4": "Ein Standard-Pentest für eine Webanwendung dauert typischerweise 5–10 Werktage. Komplexe Infrastrukturen, Active Directory-Tests oder Red Team Engagements können 3–6 Wochen dauern. Wir liefern keine Standard-Reports — sondern reproduzierbare Angriffspfade und priorisierte Empfehlungen.",

    "faq.q5": "Was unterscheidet B2CyberSec von großen Beratungen?",
    "faq.a5": "Sie bekommen unsere Senior-Leute. Punkt. Keine Junior-Berater, die mit Ihrem Geld lernen. Wir haben kombiniert über 60 Jahre Erfahrung in IT-Security, Compliance und Pentesting — und wir sprechen Klartext, kein Berater-Sprech.",

    "faq.q6": "Wie schnell können wir starten?",
    "faq.a6": "Erstgespräch innerhalb von 48 Stunden. Readiness Assessment in 1–2 Wochen. Erste Maßnahmen typischerweise innerhalb von 4 Wochen umgesetzt. Buchen Sie ein Gespräch — Sie verlieren nichts außer 30 Minuten.",

    // ──────────────────────────  CONTACT (CALENDLY)  ──────────────────────────
    "contact.eyebrow": "TERMIN BUCHEN",
    "contact.headline.line1": "Sprechen wir.",
    "contact.headline.line2": "Ohne Verkaufsdruck.",
    "contact.subline": "30 Minuten direkt mit unseren Leads — kein Sales-Funnel, keine generischen Slides. Sie wählen Ihren Experten und Termin.",

    "contact.boris.title": "Professional Services",
    "contact.boris.desc": "IT-Experten, Cloud-Migration, Netzwerk-Architektur",
    "contact.senad.title": "NIS-2 & Compliance",
    "contact.senad.desc": "Readiness, ISO 27001, DORA, GRC, AI Governance",
    "contact.bojan.title": "Penetration Testing",
    "contact.bojan.desc": "Webapp, Infrastruktur, Red Team, OSCP",
    "contact.cta": "Termin buchen",

    // ──────────────────────────  FOOTER  ──────────────────────────
    "footer.tagline": "IT-Infrastruktur, NIS-2 Compliance und Penetration Testing. 20+ Jahre Erfahrung. Augsburg, Deutschland.",
    "footer.col.services": "Services",
    "footer.col.company": "Unternehmen",
    "footer.col.legal": "Rechtliches",
    "footer.link.assessment": "NIS-2 Readiness Check",
    "footer.link.imprint": "Impressum",
    "footer.link.privacy": "Datenschutz",
    "footer.copyright": "© {year} B2CyberSec GmbH. Alle Rechte vorbehalten.",

    // ──────────────────────────  ASSESSMENT (NIS-2 DIRECTOR CHECK)  ──────────────────────────
    "as.title": "NIS-2 Director Readiness Check",
    "as.subtitle": "12 Fragen. 5 Bereiche. Ein klares Bild Ihrer NIS-2-Pflichten.",
    "as.intro.body": "Als Geschäftsführer haften Sie persönlich. Dieser Check beantwortet in unter 5 Minuten, ob Sie die wichtigsten NIS-2-Pflichten erfüllen — basierend auf den §§28, 30, 32, 33, 38, 39 BSIG.",
    "as.intro.point1": "Anonym & sicher — DSGVO-konform",
    "as.intro.point2": "Sofortiges Ergebnis mit Bereichs-Auswertung",
    "as.intro.point3": "Konkrete Empfehlungen statt Berater-Floskeln",
    "as.intro.cta": "Check starten",
    "as.intro.duration": "≈ 5 Minuten · 12 Fragen",

    "as.area.applicability": "Anwendbarkeit",
    "as.area.applicability.short": "§28 BSIG",
    "as.area.accountability": "Geschäftsführer-Haftung",
    "as.area.accountability.short": "§38 BSIG",
    "as.area.risk": "Risikomanagement",
    "as.area.risk.short": "§30 BSIG",
    "as.area.incidents": "Vorfälle & Kontinuität",
    "as.area.incidents.short": "§30/§32 BSIG",
    "as.area.audit": "Registrierung & Audit",
    "as.area.audit.short": "§33/§39 BSIG",

    "as.q1": "Hat Ihr Unternehmen geprüft, ob es unter das NIS2-Umsetzungsgesetz fällt — z.B. als Betreiber kritischer Infrastrukturen, wichtige oder besonders wichtige Einrichtung?",
    "as.q2": "Liegt eine dokumentierte Analyse vor, die belegt, warum Ihr Unternehmen betroffen oder nicht betroffen ist?",
    "as.q3": "Haben Sie als Geschäftsführer die Cybersecurity-Risikomanagement-Maßnahmen persönlich und schriftlich genehmigt?",
    "as.q4": "Ist Ihnen bewusst, dass das NIS2UmsuCG eine persönliche Haftung für Geschäftsführer einführt — einschließlich persönlicher Bußgelder?",
    "as.q5": "Erhalten Sie regelmäßig verständliche Cybersecurity-Risikoberichte, die fundierte Entscheidungen auf Geschäftsführungsebene ermöglichen?",
    "as.q6": "Existiert eine formale, dokumentierte Cybersecurity-Risikobewertung, die innerhalb der letzten 12 Monate aktualisiert wurde?",
    "as.q7": "Kennen Sie Ihre kritischen IT-Lieferanten — und enthalten Ihre Verträge Sicherheitsanforderungen gemäß NIS-2?",
    "as.q8": "Hat Ihr Unternehmen einen dokumentierten und getesteten Incident Response Plan mit klar definierten Rollen und Eskalationswegen?",
    "as.q9": "Ist Ihnen bewusst, dass NIS-2 eine Meldung an das BSI innerhalb von 24 Stunden vorschreibt — und gibt es einen internen Prozess dafür?",
    "as.q10": "Gibt es einen getesteten Wiederherstellungsplan für kritische Geschäftsprozesse nach einem Cyberangriff?",
    "as.q11": "Ist Ihr Unternehmen beim BSI registriert und wurde eine Kontaktperson mit 24/7-Erreichbarkeit benannt?",
    "as.q12": "Könnten Sie bei einer BSI-Prüfung morgen Nachweise vorlegen, dass Maßnahmen umgesetzt, genehmigt und überwacht werden?",

    "as.opt.yes": "Ja",
    "as.opt.no": "Nein",
    "as.opt.dontknow": "Weiß nicht",

    "as.progress": "Frage {current} von {total}",
    "as.btn.back": "Zurück",
    "as.btn.next": "Weiter",
    "as.btn.results": "Mein Ergebnis ansehen",

    // Lead form (gate before results)
    "as.lead.title": "Letzter Schritt vor Ihrem Ergebnis",
    "as.lead.subtitle": "Wir bereiten Ihre persönliche Auswertung vor. Wohin dürfen wir das Ergebnis schicken?",
    "as.lead.name": "Vor- und Nachname",
    "as.lead.email": "Geschäftliche E-Mail",
    "as.lead.company": "Unternehmen",
    "as.lead.role": "Rolle (optional)",
    "as.lead.role.placeholder": "z.B. Geschäftsführer, CISO, IT-Leiter",
    "as.lead.consent": "Ich willige ein, dass meine Daten zur Auswertung und Kontaktaufnahme verarbeitet werden. Mehr in der Datenschutzerklärung.",
    "as.lead.cta": "Ergebnis anzeigen",
    "as.lead.privacyNote": "Keine Newsletter-Spam, keine Weitergabe an Dritte.",

    // Results
    "as.result.your": "Ihr Ergebnis",
    "as.result.scoreOf": "von 12 Pflichten erfüllt",
    "as.result.byArea": "Ergebnis nach Bereich",
    "as.result.gaps": "Ihre wichtigsten Lücken",
    "as.result.gaps.empty": "Keine kritischen Lücken identifiziert. Vorbildlich.",
    "as.result.cta.title": "Diese Lücken schließen — schneller als Sie denken.",
    "as.result.cta.body": "Vereinbaren Sie ein 30-minütiges Strategiegespräch mit unserem NIS-2 Lead. Kein Verkaufsdruck — nur Klartext, was als Nächstes zu tun ist.",
    "as.result.cta.button": "Termin mit Experten buchen",
    "as.result.restart": "Check wiederholen",
    "as.result.disclaimer": "Diese Selbstbewertung ersetzt keine formale Compliance-Prüfung. Sie liefert eine erste Einschätzung Ihrer NIS-2-Reife.",

    // Result tier descriptions
    "as.tier.critical.label": "Kritisch",
    "as.tier.critical.desc": "Akuter Handlungsbedarf. Sie erfüllen weniger als die Hälfte der wesentlichen NIS-2-Pflichten. Persönliche Haftungsrisiken sind hoch.",
    "as.tier.action.label": "Handlungsbedarf",
    "as.tier.action.desc": "Sie sind auf dem Weg, aber wesentliche Pflichten sind noch offen. Ein strukturierter 90-Tage-Plan bringt Sie zur Konformität.",
    "as.tier.onTrack.label": "Auf gutem Weg",
    "as.tier.onTrack.desc": "Solide Basis. Wenige gezielte Maßnahmen schließen die verbleibenden Lücken zur vollen NIS-2-Konformität.",
    "as.tier.exemplary.label": "Vorbildlich",
    "as.tier.exemplary.desc": "Sie erfüllen alle abgefragten Pflichten. Halten Sie die Maßnahmen aktuell und dokumentiert.",

    // ──────────────────────────  IMPRESSUM  ──────────────────────────
    "imp.title": "Impressum",
    "imp.subtitle": "Angaben gemäß § 5 TMG",
    "imp.section.company": "Unternehmen",
    "imp.section.address": "Anschrift",
    "imp.section.contact": "Kontakt",
    "imp.section.represented": "Vertreten durch",
    "imp.section.register": "Handelsregister",
    "imp.section.vat": "Umsatzsteuer-ID",
    "imp.section.founded": "Gründungsjahr",
    "imp.section.responsible": "Verantwortlich i.S.d. § 18 Abs. 2 MStV",
    "imp.section.disputeTitle": "EU-Streitschlichtung",
    "imp.section.disputeBody": "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    "imp.section.liabilityTitle": "Haftung für Inhalte",
    "imp.section.liabilityBody": "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.",
    "imp.value.company": "B2CyberSec GmbH",
    "imp.value.address": "Werner-von-Siemens-Straße 6, 86159 Augsburg, Deutschland",
    "imp.value.phone": "+49 (0) 821 90 789 500",
    "imp.value.email": "info@b2cybersec.com",
    "imp.value.represented": "Boris Bošnjak (Geschäftsführer)",
    "imp.value.register": "Amtsgericht Augsburg, HRB 33545",
    "imp.value.vat": "DE 323792746",
    "imp.value.founded": "2021",

    // ──────────────────────────  DATENSCHUTZ  ──────────────────────────
    "ds.title": "Datenschutzerklärung",
    "ds.subtitle": "Information gemäß DSGVO",
    "ds.s1.title": "1. Verantwortlicher",
    "ds.s1.body": "Verantwortlich für die Datenverarbeitung auf dieser Website ist die B2CyberSec GmbH, Werner-von-Siemens-Straße 6, 86159 Augsburg, Deutschland. Kontakt: info@b2cybersec.com",
    "ds.s2.title": "2. Erhebung allgemeiner Informationen",
    "ds.s2.body": "Beim Besuch dieser Website werden technisch notwendige Daten (z.B. IP-Adresse, Browsertyp, Datum/Uhrzeit, übertragene Datenmenge) automatisch erfasst und zur Sicherstellung des Betriebs sowie zur Abwehr von Angriffen verarbeitet. Eine Auswertung zu personenbezogenen Profilen findet nicht statt.",
    "ds.s3.title": "3. Cookies und Analyse",
    "ds.s3.body": "Diese Website verwendet ausschließlich technisch notwendige Cookies sowie eine datensparsame, anonyme Reichweitenmessung (Umami) ohne IP-Speicherung. Es findet kein Cross-Site-Tracking statt.",
    "ds.s4.title": "4. NIS-2 Readiness Check (Lead-Formular)",
    "ds.s4.body": "Wenn Sie unseren NIS-2 Readiness Check ausfüllen, verarbeiten wir die freiwillig angegebenen Daten (Name, E-Mail, Unternehmen) zur Auswertung und für eine einmalige Kontaktaufnahme. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b und f DSGVO. Sie können der Verarbeitung jederzeit widersprechen.",
    "ds.s5.title": "5. Einbindung von Calendly",
    "ds.s5.body": "Zur Terminbuchung nutzen wir den Dienst Calendly (Calendly LLC, USA). Beim Aufruf wird eine Verbindung zu Calendly aufgebaut. Es gelten die Datenschutzbestimmungen von Calendly: https://calendly.com/privacy",
    "ds.s6.title": "6. Ihre Rechte",
    "ds.s6.body": "Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Wenden Sie sich dazu an datenschutz@b2cybersec.com. Beschwerderecht besteht bei der zuständigen Aufsichtsbehörde.",
    "ds.s7.title": "7. Kontakt Datenschutz",
    "ds.s7.body": "Bei Fragen zum Datenschutz wenden Sie sich bitte an: datenschutz@b2cybersec.com",
  },

  en: {
    // ──────────────────────────  NAV / LANG SWITCHER  ──────────────────────────
    "nav.services": "Services",
    "nav.nis2": "NIS-2",
    "nav.pentesting": "Pentesting",
    "nav.assessment": "Readiness Check",
    "nav.contact": "Contact",
    "nav.cta": "Start NIS-2 Check",
    "lang.de": "DE",
    "lang.en": "EN",
    "lang.switchTo": "Switch language",

    // ──────────────────────────  HERO  ──────────────────────────
    "hero.eyebrow": "NIS-2 IS LIVE — ARE YOU READY?",
    "hero.h1.line1": "Hackers don't sleep.",
    "hero.h1.line2": "Your IT department does.",
    "hero.sub": "As a director, you are personally liable for security incidents. NIS-2 makes it law. We turn it into a strength — with 20+ years of hands-on experience.",
    "hero.cta.primary": "Start free NIS-2 check",
    "hero.cta.secondary": "Book a direct call",
    "hero.tag.compliant": "GDPR-compliant · 100% compliance focus",

    // ──────────────────────────  STATS  ──────────────────────────
    "stats.years": "Years of experience",
    "stats.projects": "Projects delivered",
    "stats.experts": "Specialised experts",
    "stats.compliance": "Compliance focus",

    // ──────────────────────────  SERVICES SECTION  ──────────────────────────
    "services.eyebrow": "THREE PILLARS. ONE GOAL.",
    "services.headline.line1": "Focused. Specialised.",
    "services.headline.line2": "Outcome-driven.",
    "services.subline": "Three disciplines. One team.",

    "services.s1.tag": "Pillar 01",
    "services.s1.title": "Professional Services",
    "services.s1.desc": "Need a network specialist for 3 months? A cloud architect for the migration? We deliver the right expert — no headhunter fees, no months of waiting.",
    "services.s1.lead.name": "Boris Bošnjak",
    "services.s1.lead.role": "CEO, 20+ years in IT",
    "services.s1.cta": "Book a call with Boris",

    "services.s2.tag": "Pillar 02",
    "services.s2.title": "NIS-2 & Compliance",
    "services.s2.desc": "As a director, you are personally liable. NIS-2, ISO 27001, DORA, GDPR — no company can afford to ignore these obligations. Our CISSP-certified ex-CISO with Big-4 advisory background turns compliance into a competitive advantage.",
    "services.s2.lead.name": "Senad Džananović",
    "services.s2.lead.role": "CISSP, ex-CISO, Big-4 background, 20+ years",
    "services.s2.cta": "Book a call with Senad",

    "services.s3.tag": "Pillar 03",
    "services.s3.title": "Penetration Testing",
    "services.s3.desc": "Do you really know how secure your systems are — or do you only believe it? We think like attackers and find the gaps before someone else does. Backed by specialised partners in Sarajevo and Kosovo for maximum depth.",
    "services.s3.lead.name": "Bojan Kornijenko",
    "services.s3.lead.role": "Penetration Testing Lead, OSCP, Red Team",
    "services.s3.cta": "Book a call with Bojan",

    // ──────────────────────────  NIS-2 URGENCY  ──────────────────────────
    "urgency.eyebrow": "NIS-2 DIRECTOR LIABILITY",
    "urgency.headline": "Fines up to € 10 million. Personal liability. Today.",
    "urgency.body": "NIS-2 is binding in Germany. Directors can be held personally liable if no adequate cybersecurity measures can be evidenced. We help you implement the obligations in 90 days.",
    "urgency.bullet1": "24-hour notification duty to the BSI",
    "urgency.bullet2": "Documented evidence of risk-management measures",
    "urgency.bullet3": "Personal liability of management",
    "urgency.cta": "Start NIS-2 readiness check",

    // ──────────────────────────  TEAM SECTION  ──────────────────────────
    "team.eyebrow": "WHO WE ARE",
    "team.headline.line1": "Real experts.",
    "team.headline.line2": "No consulting fluff.",
    "team.body": "B2CyberSec is not an agency with paper certificates. We are a growing team of more than 10 specialists — with hands-on experience in critical infrastructure, top-tier international consultancies and real security incidents. Three experienced leads run our core areas:",
    "team.image.badge": "20+ years combined experience",

    "team.boris.role": "CEO & Professional Services",
    "team.boris.detail": "20+ years in IT, network & security",
    "team.senad.role": "NIS-2 & Compliance",
    "team.senad.detail": "CISSP, ex-CISO, Big-4 background",
    "team.bojan.role": "Penetration Testing Lead",
    "team.bojan.detail": "OSCP, Offensive Security, Red Team",

    // ──────────────────────────  FAQ  ──────────────────────────
    "faq.eyebrow": "FREQUENT QUESTIONS",
    "faq.headline": "Answers a consultant won't give you straight.",

    "faq.q1": "What does NIS-2 compliance cost?",
    "faq.a1": "It depends — but as a benchmark: a NIS-2 readiness assessment is typically € 5,000–15,000. A full implementation lands at € 30,000–150,000 depending on company size. Compared with fines of up to € 10 million or 2 % of annual revenue, that's an investment that pays for itself.",

    "faq.q2": "Do I need a CISO?",
    "faq.a2": "If you fall under NIS-2: effectively yes. You need someone who carries responsibility and can decide. But you don't need a full-time CISO at a € 180,000 salary. A fractional CISO or an experienced external advisor is enough for most SMEs.",

    "faq.q3": "Does my company fall under NIS-2?",
    "faq.a3": "If you have more than 50 employees or € 10 million in revenue and operate in one of the 18 NIS-2 sectors (energy, health, banking, IT services, logistics, food production, etc.) — most likely yes. Our readiness check tells you in 5 minutes.",

    "faq.q4": "How long does a penetration test take?",
    "faq.a4": "A standard pentest of a web application typically takes 5–10 working days. Complex infrastructure, Active Directory tests or red team engagements may take 3–6 weeks. We don't deliver template reports — we deliver reproducible attack paths and prioritised recommendations.",

    "faq.q5": "What sets B2CyberSec apart from large consultancies?",
    "faq.a5": "You get our senior people. Period. No junior consultants learning on your budget. We have a combined 60+ years of experience in IT security, compliance and pentesting — and we speak plain language, no consulting jargon.",

    "faq.q6": "How fast can we start?",
    "faq.a6": "First call within 48 hours. Readiness assessment in 1–2 weeks. First measures typically in place within 4 weeks. Book a call — you only lose 30 minutes.",

    // ──────────────────────────  CONTACT (CALENDLY)  ──────────────────────────
    "contact.eyebrow": "BOOK A CALL",
    "contact.headline.line1": "Let's talk.",
    "contact.headline.line2": "No sales pressure.",
    "contact.subline": "30 minutes directly with our leads — no funnel, no generic slides. You pick the expert and the slot.",

    "contact.boris.title": "Professional Services",
    "contact.boris.desc": "IT experts, cloud migration, network architecture",
    "contact.senad.title": "NIS-2 & Compliance",
    "contact.senad.desc": "Readiness, ISO 27001, DORA, GRC, AI Governance",
    "contact.bojan.title": "Penetration Testing",
    "contact.bojan.desc": "Web, infrastructure, red team, OSCP",
    "contact.cta": "Book a call",

    // ──────────────────────────  FOOTER  ──────────────────────────
    "footer.tagline": "IT infrastructure, NIS-2 compliance and penetration testing. 20+ years of experience. Augsburg, Germany.",
    "footer.col.services": "Services",
    "footer.col.company": "Company",
    "footer.col.legal": "Legal",
    "footer.link.assessment": "NIS-2 Readiness Check",
    "footer.link.imprint": "Imprint",
    "footer.link.privacy": "Privacy",
    "footer.copyright": "© {year} B2CyberSec GmbH. All rights reserved.",

    // ──────────────────────────  ASSESSMENT  ──────────────────────────
    "as.title": "NIS-2 Director Readiness Check",
    "as.subtitle": "12 questions. 5 areas. A clear picture of your NIS-2 obligations.",
    "as.intro.body": "As a director you are personally liable. In under 5 minutes this check tells you whether you meet the key NIS-2 obligations — based on §§ 28, 30, 32, 33, 38, 39 of the German BSIG.",
    "as.intro.point1": "Anonymous & secure — GDPR-compliant",
    "as.intro.point2": "Instant result with breakdown by area",
    "as.intro.point3": "Concrete recommendations, no consulting fluff",
    "as.intro.cta": "Start the check",
    "as.intro.duration": "≈ 5 minutes · 12 questions",

    "as.area.applicability": "Applicability",
    "as.area.applicability.short": "§28 BSIG",
    "as.area.accountability": "Director liability",
    "as.area.accountability.short": "§38 BSIG",
    "as.area.risk": "Risk management",
    "as.area.risk.short": "§30 BSIG",
    "as.area.incidents": "Incidents & continuity",
    "as.area.incidents.short": "§30/§32 BSIG",
    "as.area.audit": "Registration & audit",
    "as.area.audit.short": "§33/§39 BSIG",

    "as.q1": "Does your organisation know — and have it documented — whether it is subject to the German NIS-2 implementation act, e.g. as an operator of critical infrastructure or a (highly) important entity?",
    "as.q2": "Is there a documented analysis showing why your organisation is or is not in scope?",
    "as.q3": "Have you, as a director, personally and in writing approved the cybersecurity risk-management measures?",
    "as.q4": "Are you aware that NIS2UmsuCG introduces personal liability for directors — including personal financial penalties?",
    "as.q5": "Do you regularly receive cybersecurity risk reports — understandable without technical expertise — that enable informed decisions at board level?",
    "as.q6": "Does a formal, documented cybersecurity risk assessment exist that has been updated within the last 12 months?",
    "as.q7": "Do you know which of your IT suppliers are critical — and do your contracts include security requirements aligned with NIS-2?",
    "as.q8": "Does your organisation have a documented and tested incident response plan with clearly defined roles and escalation paths?",
    "as.q9": "Are you aware that NIS-2 requires notification of significant incidents to the BSI within 24 hours — and is there an internal process to ensure this?",
    "as.q10": "Is there a tested recovery plan that restores critical business processes after a cyberattack within a defined timeframe?",
    "as.q11": "Is your organisation registered with the BSI and has a contact person with 24/7 availability been formally designated?",
    "as.q12": "If a BSI inspector requested evidence of compliance tomorrow — could you produce documentation showing measures are implemented, approved and overseen by management?",

    "as.opt.yes": "Yes",
    "as.opt.no": "No",
    "as.opt.dontknow": "Don't know",

    "as.progress": "Question {current} of {total}",
    "as.btn.back": "Back",
    "as.btn.next": "Next",
    "as.btn.results": "View my results",

    "as.lead.title": "Last step before your result",
    "as.lead.subtitle": "We are preparing your personal evaluation. Where should we send it?",
    "as.lead.name": "First and last name",
    "as.lead.email": "Business email",
    "as.lead.company": "Company",
    "as.lead.role": "Role (optional)",
    "as.lead.role.placeholder": "e.g. Director, CISO, Head of IT",
    "as.lead.consent": "I agree that my data may be processed for the evaluation and follow-up. See our privacy policy for details.",
    "as.lead.cta": "Show my result",
    "as.lead.privacyNote": "No newsletter spam, no sharing with third parties.",

    "as.result.your": "Your result",
    "as.result.scoreOf": "of 12 obligations met",
    "as.result.byArea": "Result by area",
    "as.result.gaps": "Your most important gaps",
    "as.result.gaps.empty": "No critical gaps identified. Exemplary.",
    "as.result.cta.title": "Close these gaps — faster than you think.",
    "as.result.cta.body": "Book a 30-minute strategy call with our NIS-2 lead. No sales pressure — just a clear next step.",
    "as.result.cta.button": "Book an expert call",
    "as.result.restart": "Retake the check",
    "as.result.disclaimer": "This self-assessment does not replace a formal compliance audit. It provides a first indication of your NIS-2 maturity.",

    "as.tier.critical.label": "Critical",
    "as.tier.critical.desc": "Immediate action required. You meet less than half of the essential NIS-2 obligations. Personal liability risk is high.",
    "as.tier.action.label": "Action needed",
    "as.tier.action.desc": "You're on the way, but key obligations are still open. A structured 90-day plan brings you to compliance.",
    "as.tier.onTrack.label": "On track",
    "as.tier.onTrack.desc": "Solid foundation. A few targeted measures close the remaining gaps to full NIS-2 compliance.",
    "as.tier.exemplary.label": "Exemplary",
    "as.tier.exemplary.desc": "You meet all assessed obligations. Keep the measures current and documented.",

    // ──────────────────────────  IMPRESSUM (English version)  ──────────────────────────
    "imp.title": "Imprint",
    "imp.subtitle": "Information pursuant to § 5 TMG (German Telemedia Act)",
    "imp.section.company": "Company",
    "imp.section.address": "Address",
    "imp.section.contact": "Contact",
    "imp.section.represented": "Represented by",
    "imp.section.register": "Commercial register",
    "imp.section.vat": "VAT ID",
    "imp.section.founded": "Year founded",
    "imp.section.responsible": "Responsible according to § 18 (2) MStV",
    "imp.section.disputeTitle": "EU dispute resolution",
    "imp.section.disputeBody": "The European Commission provides a platform for online dispute resolution: https://ec.europa.eu/consumers/odr/. We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration body.",
    "imp.section.liabilityTitle": "Liability for content",
    "imp.section.liabilityBody": "As a service provider, we are responsible for our own content on these pages in accordance with § 7 (1) TMG and the general laws. Obligations to remove or block the use of information under general law remain unaffected.",
    "imp.value.company": "B2CyberSec GmbH",
    "imp.value.address": "Werner-von-Siemens-Strasse 6, 86159 Augsburg, Germany",
    "imp.value.phone": "+49 (0) 821 90 789 500",
    "imp.value.email": "info@b2cybersec.com",
    "imp.value.represented": "Boris Bošnjak (Managing Director)",
    "imp.value.register": "Local court Augsburg, HRB 33545",
    "imp.value.vat": "DE 323792746",
    "imp.value.founded": "2021",

    // ──────────────────────────  PRIVACY (English version)  ──────────────────────────
    "ds.title": "Privacy Policy",
    "ds.subtitle": "Information under the GDPR",
    "ds.s1.title": "1. Controller",
    "ds.s1.body": "The controller for the data processing on this website is B2CyberSec GmbH, Werner-von-Siemens-Strasse 6, 86159 Augsburg, Germany. Contact: info@b2cybersec.com",
    "ds.s2.title": "2. Collection of general information",
    "ds.s2.body": "When you visit this website, technically necessary data (e.g. IP address, browser type, date/time, transferred volume) is automatically collected and processed to ensure operation and to defend against attacks. No personal profiling is performed.",
    "ds.s3.title": "3. Cookies and analytics",
    "ds.s3.body": "This website uses only technically necessary cookies and a privacy-friendly, anonymous analytics solution (Umami) without IP storage. There is no cross-site tracking.",
    "ds.s4.title": "4. NIS-2 readiness check (lead form)",
    "ds.s4.body": "When you complete our NIS-2 readiness check, we process the data you voluntarily provide (name, email, company) for evaluation and a one-off contact. The legal basis is Art. 6 (1) (b) and (f) GDPR. You can object to the processing at any time.",
    "ds.s5.title": "5. Use of Calendly",
    "ds.s5.body": "We use Calendly (Calendly LLC, USA) for scheduling. When you open the widget, a connection is established to Calendly. Calendly's privacy policy applies: https://calendly.com/privacy",
    "ds.s6.title": "6. Your rights",
    "ds.s6.body": "You have the right at any time to information, rectification, erasure, restriction of processing, data portability and objection. To exercise these rights, contact datenschutz@b2cybersec.com. You also have the right to lodge a complaint with the competent supervisory authority.",
    "ds.s7.title": "7. Privacy contact",
    "ds.s7.body": "For privacy-related questions please contact: datenschutz@b2cybersec.com",
  },
} as const;

// All keys are guaranteed to exist in DE; we use that as the master.
export type TranslationKey = keyof (typeof translations)["de"];
