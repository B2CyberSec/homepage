/*
 * DESIGN: Editorial Shock — "Der Weckruf" V2
 * ExpertReferences: Anonymized expert profiles from CVs.
 * No countries, no names — just credentials, certifications, and project experience.
 * Dark editorial cards. Premium, not cheap.
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { Award, Briefcase, Code2, Shield } from "lucide-react";

interface Expert {
  role: { de: string; en: string };
  years: string;
  certifications: string[];
  industries: { de: string[]; en: string[] };
  highlight: { de: string; en: string };
  icon: React.ElementType;
}

const experts: Expert[] = [
  {
    role: {
      de: "Senior Penetration Tester & Red Team Lead",
      en: "Senior Penetration Tester & Red Team Lead",
    },
    years: "16+",
    certifications: ["CEH", "CHFI", "PCNSE", "Splunk Architect"],
    industries: {
      de: ["Finanzsektor", "Telekommunikation", "Behörden"],
      en: ["Financial sector", "Telecommunications", "Public authorities"],
    },
    highlight: {
      de: "Leitete Pentesting-Teams für Finanzinstitute und Behörden. Spezialist für Red Teaming, Social Engineering und Vulnerability Management.",
      en: "Led pentesting teams for financial institutions and public authorities. Specialist in red teaming, social engineering, and vulnerability management.",
    },
    icon: Shield,
  },
  {
    role: {
      de: "Senior Network Architect & Security Consultant",
      en: "Senior Network Architect & Security Consultant",
    },
    years: "20+",
    certifications: ["CCIE Security #18598", "GIAC GPEN", "GIAC GCIA", "Splunk Architect"],
    industries: {
      de: ["Finanzsektor", "Behörden", "Telekommunikation", "Industrie"],
      en: ["Financial sector", "Public authorities", "Telecommunications", "Industry"],
    },
    highlight: {
      de: "20+ Jahre Erfahrung in Cisco- und Palo Alto-Sicherheitsarchitekturen. Weltweite SD-WAN-Deployments für ISPs und Großunternehmen.",
      en: "20+ years of experience in Cisco and Palo Alto security architectures. Worldwide SD-WAN deployments for ISPs and large enterprises.",
    },
    icon: Award,
  },
  {
    role: {
      de: "IT Senior Consultant — Palo Alto & Firewall-Spezialist",
      en: "IT Senior Consultant — Palo Alto & Firewall Specialist",
    },
    years: "20+",
    certifications: ["PCNSE", "CCNP Security", "Microsoft MCP"],
    industries: {
      de: ["Finanzsektor", "Telekommunikation", "Behörden"],
      en: ["Financial sector", "Telecommunications", "Public authorities"],
    },
    highlight: {
      de: "Migrierte Check-Point-Infrastrukturen mit 6.000+ Regeln zu Palo Alto. Weltweiter Rollout von ~100 Firewalls mit 3 Rechenzentren.",
      en: "Migrated Check Point infrastructures with 6,000+ rules to Palo Alto. Worldwide rollout of ~100 firewalls across 3 data centers.",
    },
    icon: Briefcase,
  },
  {
    role: {
      de: "Senior Network Engineer & Cisco Certified Instructor",
      en: "Senior Network Engineer & Cisco Certified Instructor",
    },
    years: "15+",
    certifications: ["CCIE SP #41582", "CCSI #35792", "AWS Solutions Architect", "JNCIA-Junos"],
    industries: {
      de: ["Telekommunikation", "Rechenzentren", "Finanzsektor"],
      en: ["Telecommunications", "Data centers", "Financial sector"],
    },
    highlight: {
      de: "Führte Cisco-zu-Nokia-Migration für deutschen ISP. Entwickelte offizielle Cisco-Trainingsinhalte für SD-Access, SD-WAN und ACI.",
      en: "Led Cisco-to-Nokia migration for German ISP. Developed official Cisco training content for SD-Access, SD-WAN, and ACI.",
    },
    icon: Code2,
  },
];

export default function ExpertReferences() {
  const { lang, t } = useLanguage();

  const calendlyUrl = lang === "de"
    ? "https://calendly.com/b2cybersec/kontakt"
    : "https://calendly.com/b2cybersec/contact";

  return (
    <section id="experten" className="relative bg-[#0d0d0d] py-20 md:py-28">
      <div className="container">
        {/* Section header */}
        <div className="mb-12">
          <p
            className="text-[#ff4500] text-xs font-bold uppercase tracking-[0.25em] mb-3"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {lang === "de" ? "// Unsere Experten" : "// Our Experts"}
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {lang === "de" ? "17 Experten." : "17 Experts."}
            <span className="text-white/35">
              {" "}{lang === "de" ? "Keine Lebensläufe. Ergebnisse." : "No CVs. Results."}
            </span>
          </h2>
          <p
            className="text-white/40 text-sm mt-4 max-w-2xl"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {lang === "de"
              ? "// Anonymisierte Profile. Vollständige CVs auf Anfrage. Kein Freelancer-Netzwerk — echte Festangestellte."
              : "// Anonymized profiles. Full CVs available on request. No freelancer network — real full-time employees."}
          </p>
        </div>

        {/* Expert cards — 2-column grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {experts.map((expert, i) => {
            const ExpertIcon = expert.icon;
            return (
              <div
                key={i}
                className="group flex flex-col gap-4 p-6 md:p-8 border border-white/8 bg-white/[0.02] hover:border-[#ff4500]/30 hover:bg-[#ff4500]/[0.02] transition-all duration-300"
              >
                {/* Header row: icon + role + years */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-[#ff4500]/30 bg-[#ff4500]/[0.08]">
                    <ExpertIcon className="text-[#ff4500]" size={20} />
                  </div>
                  <div className="flex-1">
                    <p
                      className="text-white font-bold text-base leading-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {expert.role[lang]}
                    </p>
                    <p
                      className="text-[#ff4500] text-xs font-bold mt-1"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {expert.years} {lang === "de" ? "Jahre Erfahrung" : "years experience"}
                    </p>
                  </div>
                </div>

                {/* Highlight text */}
                <p className="text-white/55 text-sm leading-relaxed">
                  {expert.highlight[lang]}
                </p>

                {/* Certifications */}
                <div className="flex flex-wrap gap-2">
                  {expert.certifications.map((cert, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider border border-white/10 text-white/40"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {cert}
                    </span>
                  ))}
                </div>

                {/* Industries */}
                <div className="flex flex-wrap gap-2 pt-1 border-t border-white/5">
                  <span
                    className="text-[10px] text-white/25 uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {lang === "de" ? "Branchen:" : "Industries:"}
                  </span>
                  {expert.industries[lang].map((ind, j) => (
                    <span
                      key={j}
                      className="text-[10px] text-white/40 uppercase tracking-wide"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {ind}{j < expert.industries[lang].length - 1 ? " ·" : ""}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 border-t border-white/8">
          <div className="flex-1">
            <p
              className="text-white/40 text-sm"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {lang === "de"
                ? "// Vollständige CVs und Referenzprojekte auf Anfrage. Alle Experten verfügbar innerhalb von 48 Stunden."
                : "// Full CVs and reference projects available on request. All experts available within 48 hours."}
            </p>
          </div>
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 border border-[#ff4500]/40 text-[#ff4500] font-bold uppercase tracking-wider hover:bg-[#ff4500] hover:text-white transition-all duration-200"
            style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem" }}
          >
            {lang === "de" ? "EXPERTEN ANFRAGEN →" : "REQUEST EXPERTS →"}
          </a>
        </div>
      </div>
    </section>
  );
}
