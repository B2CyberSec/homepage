/*
 * B2CyberSec NIS-2 Readiness Check
 * Design: Apple Dark Mode + Editorial Precision
 * Flow: Questions → Lead Form → Score + Recommendation → Calendly redirect
 * HubSpot: Lead creation via API (key configurable via VITE_HUBSPOT_API_KEY)
 */

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

// ─── Types ────────────────────────────────────────────────────────────────────

type Answer = "yes" | "partial" | "no" | null;

interface Question {
  id: number;
  category: string;
  text: string;
  hint: string;
  weights: { yes: number; partial: number; no: number };
}

interface LeadData {
  name: string;
  company: string;
  email: string;
  phone: string;
}

// ─── Questions ────────────────────────────────────────────────────────────────

const QUESTIONS: Question[] = [
  {
    id: 1,
    category: "Governance",
    text: "Hat Ihr Unternehmen eine dokumentierte Informationssicherheits-Richtlinie?",
    hint: "Eine schriftliche Policy, die regelt, wie mit Informationen und IT-Systemen umgegangen wird.",
    weights: { yes: 10, partial: 5, no: 0 },
  },
  {
    id: 2,
    category: "Governance",
    text: "Gibt es eine klare Verantwortlichkeit für Informationssicherheit (z.B. CISO oder ISB)?",
    hint: "Eine benannte Person oder Funktion, die für IT-Sicherheit verantwortlich ist.",
    weights: { yes: 10, partial: 5, no: 0 },
  },
  {
    id: 3,
    category: "Risikomanagement",
    text: "Führen Sie regelmäßige Risikoanalysen für Ihre IT-Systeme durch?",
    hint: "Mindestens jährliche Bewertung von Bedrohungen, Schwachstellen und deren Auswirkungen.",
    weights: { yes: 10, partial: 5, no: 0 },
  },
  {
    id: 4,
    category: "Risikomanagement",
    text: "Haben Sie einen dokumentierten Business Continuity Plan (BCP) oder Notfallplan?",
    hint: "Ein Plan, der beschreibt, wie der Betrieb bei einem Sicherheitsvorfall aufrechterhalten wird.",
    weights: { yes: 8, partial: 4, no: 0 },
  },
  {
    id: 5,
    category: "Technische Maßnahmen",
    text: "Sind alle Systeme mit aktuellen Sicherheitsupdates und Patches versorgt?",
    hint: "Regelmäßiges Patching von Betriebssystemen, Anwendungen und Firmware.",
    weights: { yes: 10, partial: 5, no: 0 },
  },
  {
    id: 6,
    category: "Technische Maßnahmen",
    text: "Nutzen Sie Multi-Faktor-Authentifizierung (MFA) für kritische Systeme und Remote-Zugriffe?",
    hint: "MFA für VPN, Admin-Zugänge, E-Mail und Cloud-Dienste.",
    weights: { yes: 10, partial: 5, no: 0 },
  },
  {
    id: 7,
    category: "Technische Maßnahmen",
    text: "Werden Ihre Systeme regelmäßig auf Schwachstellen gescannt oder getestet?",
    hint: "Vulnerability Scans, Penetration Tests oder externe Security-Audits.",
    weights: { yes: 8, partial: 4, no: 0 },
  },
  {
    id: 8,
    category: "Incident Management",
    text: "Haben Sie einen definierten Prozess zur Erkennung und Meldung von Sicherheitsvorfällen?",
    hint: "NIS-2 verlangt die Meldung erheblicher Vorfälle innerhalb von 24 Stunden.",
    weights: { yes: 10, partial: 5, no: 0 },
  },
  {
    id: 9,
    category: "Incident Management",
    text: "Wurden Ihre Mitarbeiter in den letzten 12 Monaten zu Cybersicherheit geschult?",
    hint: "Security Awareness Training, Phishing-Simulationen oder ähnliche Maßnahmen.",
    weights: { yes: 8, partial: 4, no: 0 },
  },
  {
    id: 10,
    category: "Supply Chain",
    text: "Bewerten Sie die Sicherheit Ihrer wichtigsten IT-Dienstleister und Lieferanten?",
    hint: "NIS-2 fordert explizit das Management von Risiken in der Lieferkette.",
    weights: { yes: 8, partial: 4, no: 0 },
  },
  {
    id: 11,
    category: "Datenschutz & Compliance",
    text: "Ist Ihr Unternehmen bereits nach ISO 27001 oder einem vergleichbaren Standard zertifiziert?",
    hint: "ISO 27001, SOC 2, BSI IT-Grundschutz oder ähnliche Zertifizierungen.",
    weights: { yes: 10, partial: 5, no: 0 },
  },
  {
    id: 12,
    category: "Datenschutz & Compliance",
    text: "Wissen Sie, ob Ihr Unternehmen unter die NIS-2-Richtlinie fällt?",
    hint: "NIS-2 gilt für Unternehmen in 18 kritischen Sektoren mit 50+ Mitarbeitern oder 10 Mio. € Umsatz.",
    weights: { yes: 6, partial: 3, no: 0 },
  },
];

const MAX_SCORE = QUESTIONS.reduce((sum, q) => sum + q.weights.yes, 0);

// ─── Score interpretation ─────────────────────────────────────────────────────

function getScoreResult(score: number) {
  const pct = (score / MAX_SCORE) * 100;
  if (pct >= 75) {
    return {
      level: "Gut aufgestellt",
      color: "#30D158",
      colorClass: "score-high",
      bgClass: "bg-[#30D158]/10 border-[#30D158]/30",
      icon: "✓",
      description: "Ihr Unternehmen hat bereits solide Grundlagen. Es gibt noch Optimierungspotenzial, aber Sie sind auf einem guten Weg zur NIS-2-Compliance.",
      recommendation: "Wir empfehlen ein gezieltes Gap-Assessment, um die verbleibenden Lücken zu schließen und Ihre Dokumentation zu vervollständigen.",
      calendlyUrl: "https://calendly.com/b2cybersec-team/pro-services",
      expert: "Senad Džananović",
      expertRole: "NIS-2 & Compliance",
    };
  } else if (pct >= 45) {
    return {
      level: "Handlungsbedarf",
      color: "#FF9F0A",
      colorClass: "score-medium",
      bgClass: "bg-[#FF9F0A]/10 border-[#FF9F0A]/30",
      icon: "!",
      description: "Es bestehen erhebliche Lücken in Ihrer Sicherheitsstrategie. Ohne Maßnahmen riskieren Sie Bußgelder und persönliche Haftung als Geschäftsführer.",
      recommendation: "Wir empfehlen ein umfassendes NIS-2-Readiness-Assessment mit anschließendem Umsetzungsplan. Starten Sie jetzt, bevor Aufsichtsbehörden aktiv werden.",
      calendlyUrl: "https://calendly.com/b2cybersec-team/pro-services",
      expert: "Senad Džananović",
      expertRole: "NIS-2 & Compliance",
    };
  } else {
    return {
      level: "Kritischer Nachholbedarf",
      color: "#FF453A",
      colorClass: "score-low",
      bgClass: "bg-[#FF453A]/10 border-[#FF453A]/30",
      icon: "✗",
      description: "Ihr Unternehmen ist erheblichen Risiken ausgesetzt. Die aktuelle Situation stellt eine direkte Gefahr für Ihren Betrieb und Ihre persönliche Haftung als Geschäftsführer dar.",
      recommendation: "Sofortiger Handlungsbedarf. Wir empfehlen ein Notfall-Assessment innerhalb der nächsten 2 Wochen, um die kritischsten Lücken zu identifizieren und zu schließen.",
      calendlyUrl: "https://calendly.com/b2cybersec-team/pro-services",
      expert: "Senad Džananović",
      expertRole: "NIS-2 & Compliance",
    };
  }
}

// ─── HubSpot Lead Submission ──────────────────────────────────────────────────

async function submitHubSpotLead(lead: LeadData, score: number, answers: (Answer | null)[]) {
  // HubSpot Forms API (no CORS issues, works from frontend)
  // Portal ID and Form ID can be configured — using a placeholder until API key is provided
  const portalId = import.meta.env.VITE_HUBSPOT_PORTAL_ID || "PLACEHOLDER";
  const formId = import.meta.env.VITE_HUBSPOT_FORM_ID || "PLACEHOLDER";

  const payload = {
    fields: [
      { name: "firstname", value: lead.name.split(" ")[0] || lead.name },
      { name: "lastname", value: lead.name.split(" ").slice(1).join(" ") || "" },
      { name: "company", value: lead.company },
      { name: "email", value: lead.email },
      { name: "phone", value: lead.phone },
      { name: "nis2_score", value: String(score) },
      { name: "nis2_score_pct", value: String(Math.round((score / MAX_SCORE) * 100)) },
      { name: "lead_source", value: "NIS-2 Readiness Check" },
    ],
    context: {
      pageUri: window.location.href,
      pageName: "NIS-2 Readiness Check",
    },
  };

  if (portalId === "PLACEHOLDER" || formId === "PLACEHOLDER") {
    // HubSpot not yet configured — log and continue
    console.log("[B2CyberSec] HubSpot not configured. Lead data:", payload);
    return { success: true, mock: true };
  }

  try {
    const res = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    return { success: res.ok };
  } catch (e) {
    console.error("[B2CyberSec] HubSpot submission error:", e);
    return { success: false };
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

type Phase = "intro" | "questions" | "lead" | "result";

export default function Assessment() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(Answer | null)[]>(new Array(QUESTIONS.length).fill(null));
  const [lead, setLead] = useState<LeadData>({ name: "", company: "", email: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const totalScore = answers.reduce((sum, ans, i) => {
    if (!ans) return sum;
    return sum + QUESTIONS[i].weights[ans];
  }, 0);

  const scoreResult = getScoreResult(totalScore);
  const progress = ((currentQ + 1) / QUESTIONS.length) * 100;

  function handleAnswer(answer: Answer) {
    const newAnswers = [...answers];
    newAnswers[currentQ] = answer;
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQ < QUESTIONS.length - 1) {
        setCurrentQ(currentQ + 1);
      } else {
        setPhase("lead");
      }
    }, 300);
  }

  async function handleLeadSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!lead.name || !lead.company || !lead.email) {
      setError("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }
    setError("");
    setSubmitting(true);
    await submitHubSpotLead(lead, totalScore, answers);
    setSubmitting(false);
    setPhase("result");
  }

  const q = QUESTIONS[currentQ];
  const answeredCount = answers.filter(Boolean).length;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="pt-24 pb-20 min-h-screen flex flex-col">
        {/* ── INTRO ── */}
        {phase === "intro" && (
          <div className="container flex-1 flex items-center">
            <div className="max-w-3xl mx-auto text-center py-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card-blue mb-8">
                <div className="w-2 h-2 rounded-full bg-[#0A84FF] animate-pulse" />
                <span className="text-[#0A84FF] text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Kostenlos · 5 Minuten · Sofortige Auswertung
                </span>
              </div>
              <h1
                className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.03em" }}
              >
                NIS-2
                <br />
                <span className="text-gradient-blue">Readiness Check</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                12 Fragen. 5 Minuten. Eine ehrliche Einschätzung, ob Ihr Unternehmen NIS-2-konform ist — und was Sie als Geschäftsführer riskieren, wenn nicht.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-10 max-w-lg mx-auto">
                {[
                  { icon: "📋", label: "12 Fragen" },
                  { icon: "⚡", label: "Sofort-Ergebnis" },
                  { icon: "🎯", label: "Persönliche Empfehlung" },
                ].map((item) => (
                  <div key={item.label} className="glass-card rounded-xl p-4 text-center">
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <div className="text-white/60 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>{item.label}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setPhase("questions")}
                className="inline-flex items-center gap-2 px-10 py-5 rounded-xl text-lg font-bold text-white btn-primary"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Check starten
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* ── QUESTIONS ── */}
        {phase === "questions" && (
          <div className="container flex-1 flex flex-col items-center justify-center py-8">
            {/* Progress bar */}
            <div className="w-full max-w-2xl mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/40 text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Frage {currentQ + 1} von {QUESTIONS.length}
                </span>
                <span className="text-[#0A84FF] text-xs font-semibold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {answeredCount} beantwortet
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0A84FF] rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question card */}
            <div className="w-full max-w-2xl gradient-border p-8 md:p-10">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md glass-card-blue mb-6">
                <span className="text-[#0A84FF] text-xs font-semibold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  {q.category}
                </span>
              </div>

              <h2
                className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-tight"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}
              >
                {q.text}
              </h2>

              <p className="text-white/40 text-sm mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                {q.hint}
              </p>

              <div className="grid grid-cols-1 gap-3">
                {[
                  { value: "yes" as Answer, label: "Ja, vollständig umgesetzt", icon: "✓", color: "#30D158" },
                  { value: "partial" as Answer, label: "Teilweise / in Arbeit", icon: "~", color: "#FF9F0A" },
                  { value: "no" as Answer, label: "Nein / nicht vorhanden", icon: "✗", color: "#FF453A" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-200 border ${
                      answers[currentQ] === option.value
                        ? "border-[#0A84FF] bg-[#0A84FF]/10"
                        : "border-white/10 hover:border-white/30 glass-card"
                    }`}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-sm"
                      style={{ background: `${option.color}20`, color: option.color, fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {option.icon}
                    </div>
                    <span className="text-white font-medium text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={() => currentQ > 0 && setCurrentQ(currentQ - 1)}
                  disabled={currentQ === 0}
                  className="flex items-center gap-2 text-white/40 hover:text-white disabled:opacity-30 text-sm transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Zurück
                </button>
                {answers[currentQ] && currentQ < QUESTIONS.length - 1 && (
                  <button
                    onClick={() => setCurrentQ(currentQ + 1)}
                    className="flex items-center gap-2 text-[#0A84FF] hover:text-white text-sm font-semibold transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Weiter
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
                {answers[currentQ] && currentQ === QUESTIONS.length - 1 && (
                  <button
                    onClick={() => setPhase("lead")}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold text-white btn-primary"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    Ergebnis anzeigen
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ── LEAD FORM ── */}
        {phase === "lead" && (
          <div className="container flex-1 flex items-center justify-center py-8">
            <div className="w-full max-w-lg">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card-blue mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#30D158] animate-pulse" />
                  <span className="text-[#30D158] text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    Fast fertig
                  </span>
                </div>
                <h2
                  className="text-3xl md:text-4xl font-extrabold text-white mb-3"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.03em" }}
                >
                  Ihr Ergebnis ist bereit.
                </h2>
                <p className="text-white/50 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Bitte geben Sie Ihre Kontaktdaten ein, damit wir Ihnen eine persönliche Auswertung zusenden können.
                </p>
              </div>

              <form onSubmit={handleLeadSubmit} className="gradient-border p-8 space-y-4">
                {[
                  { key: "name", label: "Ihr Name *", placeholder: "Max Mustermann", type: "text" },
                  { key: "company", label: "Unternehmen *", placeholder: "Mustermann GmbH", type: "text" },
                  { key: "email", label: "E-Mail-Adresse *", placeholder: "max@mustermann.de", type: "email" },
                  { key: "phone", label: "Telefon (optional)", placeholder: "+49 821 123456", type: "tel" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-white/60 text-xs mb-1.5 uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={lead[field.key as keyof LeadData]}
                      onChange={(e) => setLead({ ...lead, [field.key]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-card text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#0A84FF] border border-white/10 transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif", background: "rgba(255,255,255,0.04)" }}
                    />
                  </div>
                ))}

                {error && (
                  <p className="text-[#FF453A] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{error}</p>
                )}

                <p className="text-white/30 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben. Datenschutzerklärung: <Link href="/datenschutz" className="text-[#0A84FF] hover:underline">b2cybersec.com/datenschutz</Link>
                </p>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl text-base font-bold text-white btn-primary disabled:opacity-50"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  {submitting ? "Wird übermittelt..." : "Ergebnis anzeigen →"}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* ── RESULT ── */}
        {phase === "result" && (
          <div className="container flex-1 flex flex-col items-center justify-center py-8">
            <div className="w-full max-w-2xl">
              {/* Score display */}
              <div className="text-center mb-8">
                <div
                  className="inline-flex items-center justify-center w-28 h-28 rounded-full border-4 mx-auto mb-6"
                  style={{ borderColor: scoreResult.color, background: `${scoreResult.color}15` }}
                >
                  <div>
                    <div
                      className="text-3xl font-extrabold"
                      style={{ color: scoreResult.color, fontFamily: "'Bricolage Grotesque', sans-serif" }}
                    >
                      {Math.round((totalScore / MAX_SCORE) * 100)}%
                    </div>
                    <div className="text-white/40 text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Score</div>
                  </div>
                </div>

                <h2
                  className="text-3xl md:text-4xl font-extrabold text-white mb-3"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.03em" }}
                >
                  {scoreResult.level}
                </h2>
                <p className="text-white/60 text-base leading-relaxed max-w-lg mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {scoreResult.description}
                </p>
              </div>

              {/* Recommendation */}
              <div className={`rounded-xl p-6 border mb-6 ${scoreResult.bgClass}`}>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: scoreResult.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>Unsere Empfehlung</div>
                    <p className="text-white/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{scoreResult.recommendation}</p>
                  </div>
                </div>
              </div>

              {/* Category breakdown */}
              <div className="gradient-border p-6 mb-6">
                <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Auswertung nach Kategorien</h3>
                {["Governance", "Risikomanagement", "Technische Maßnahmen", "Incident Management", "Supply Chain", "Datenschutz & Compliance"].map((cat) => {
                  const catQuestions = QUESTIONS.filter(q => q.category === cat);
                  const catMax = catQuestions.reduce((s, q) => s + q.weights.yes, 0);
                  const catScore = catQuestions.reduce((s, q, i) => {
                    const qi = QUESTIONS.indexOf(q);
                    const ans = answers[qi];
                    return s + (ans ? q.weights[ans] : 0);
                  }, 0);
                  const pct = catMax > 0 ? (catScore / catMax) * 100 : 0;
                  const color = pct >= 75 ? "#30D158" : pct >= 45 ? "#FF9F0A" : "#FF453A";
                  return (
                    <div key={cat} className="mb-3">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-white/60" style={{ fontFamily: "'Inter', sans-serif" }}>{cat}</span>
                        <span style={{ color, fontFamily: "'JetBrains Mono', monospace" }}>{Math.round(pct)}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full">
                        <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: color }} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="glass-card-blue rounded-xl p-6 text-center">
                <div className="text-white/60 text-sm mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Nächster Schritt: Sprechen Sie mit unserem Experten
                </div>
                <div className="text-white font-bold text-lg mb-1" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>
                  {scoreResult.expert}
                </div>
                <div className="text-white/40 text-xs mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {scoreResult.expertRole}
                </div>
                <a
                  href={scoreResult.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white btn-primary"
                  style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                  Kostenloses Erstgespräch buchen
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <p className="mt-3 text-white/30 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Kein Verkaufsdruck · Ehrliche Einschätzung · 30 Minuten
                </p>
              </div>

              <div className="text-center mt-6">
                <Link href="/" className="text-white/40 hover:text-white text-sm transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                  ← Zurück zur Startseite
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
