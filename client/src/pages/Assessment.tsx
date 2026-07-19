/*
 * B2CyberSec — NIS-2 Directive Readiness Check
 * Bilingual via LanguageContext (DE/EN). Default DE.
 *
 * Flow: intro -> questions (12) -> lead form -> result (score + area bars + gaps + CTA)
 * Design: matches site palette — black background, Apple-blue accents, glassmorphic cards.
 */

import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  ShieldCheck,
  ShieldX,
  Sparkles,
  Lock,
  Calendar,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useT } from "@/contexts/LanguageContext";
import type { TranslationKey } from "@/lib/translations";
import { useSeo } from "@/lib/useSeo";
import { getStoredUtm, track, withUtm } from "@/lib/tracking";

type Answer = "yes" | "no" | "dontknow";
type AreaId = "applicability" | "accountability" | "risk" | "incidents" | "audit";

interface Question {
  id: number;
  area: AreaId;
  textKey: TranslationKey;
}

const QUESTIONS: Question[] = [
  { id: 1, area: "applicability", textKey: "as.q1" },
  { id: 2, area: "applicability", textKey: "as.q2" },
  { id: 3, area: "accountability", textKey: "as.q3" },
  { id: 4, area: "accountability", textKey: "as.q4" },
  { id: 5, area: "accountability", textKey: "as.q5" },
  { id: 6, area: "risk", textKey: "as.q6" },
  { id: 7, area: "risk", textKey: "as.q7" },
  { id: 8, area: "incidents", textKey: "as.q8" },
  { id: 9, area: "incidents", textKey: "as.q9" },
  { id: 10, area: "incidents", textKey: "as.q10" },
  { id: 11, area: "audit", textKey: "as.q11" },
  { id: 12, area: "audit", textKey: "as.q12" },
];

const AREA_ORDER: AreaId[] = ["applicability", "accountability", "risk", "incidents", "audit"];

const AREA_LABEL_KEY: Record<AreaId, TranslationKey> = {
  applicability: "as.area.applicability",
  accountability: "as.area.accountability",
  risk: "as.area.risk",
  incidents: "as.area.incidents",
  audit: "as.area.audit",
};

const AREA_SHORT_KEY: Record<AreaId, TranslationKey> = {
  applicability: "as.area.applicability.short",
  accountability: "as.area.accountability.short",
  risk: "as.area.risk.short",
  incidents: "as.area.incidents.short",
  audit: "as.area.audit.short",
};

const RESULT_CALENDLY =
  "https://calendly.com/b2cybersec-team/bojan?utm_source=relaunch&utm_medium=lp&utm_content=selfcheck_result";

/** Rendert **markierte** Schlüsselwörter einer Frage in Brand-Blau. */
function HighlightedText({ text }: { text: string }) {
  const parts = text.split("**");
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="text-[#0A84FF]">{part}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

type Phase = "intro" | "questions" | "lead" | "result";

interface LeadData {
  name: string;
  email: string;
  company: string;
  role: string;
  consent: boolean;
}

const EMPTY_LEAD: LeadData = { name: "", email: "", company: "", role: "", consent: false };

export default function Assessment() {
  const { t, lang } = useT();
  useSeo(
    lang === "de"
      ? "NIS-2 Selbstcheck in 3 Minuten — B2CyberSec"
      : "NIS-2 self-check in 3 minutes — B2CyberSec",
    lang === "de"
      ? "12 Fragen, sofortiges Ergebnis: Wo steht Ihre Firma bei NIS-2 und Geschäftsführer-Haftung? Kostenlos und ohne Anmeldung starten."
      : "12 questions, instant result: where does your company stand on NIS-2 and director liability? Free, no sign-up to start."
  );
  const [phase, setPhase] = useState<Phase>("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [lead, setLead] = useState<LeadData>(EMPTY_LEAD);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [phase]);

  const totalAnswered = Object.keys(answers).length;
  const progress = Math.round((current / QUESTIONS.length) * 100);

  const result = useMemo(() => {
    const yesCount = QUESTIONS.filter((q) => answers[q.id] === "yes").length;
    const tier =
      yesCount <= 4
        ? ("critical" as const)
        : yesCount <= 8
        ? ("action" as const)
        : yesCount <= 11
        ? ("onTrack" as const)
        : ("exemplary" as const);

    const byArea = AREA_ORDER.map((area) => {
      const qs = QUESTIONS.filter((q) => q.area === area);
      const yes = qs.filter((q) => answers[q.id] === "yes").length;
      return {
        id: area,
        total: qs.length,
        yes,
        pct: qs.length === 0 ? 0 : Math.round((yes / qs.length) * 100),
      };
    });

    const gaps = QUESTIONS.filter((q) => answers[q.id] !== "yes");

    return { yesCount, tier, byArea, gaps };
  }, [answers]);

  const tierMeta = {
    critical: {
      label: t("as.tier.critical.label"),
      desc: t("as.tier.critical.desc"),
      color: "text-red-400",
      ring: "from-red-500 to-red-700",
      icon: ShieldX,
    },
    action: {
      label: t("as.tier.action.label"),
      desc: t("as.tier.action.desc"),
      color: "text-amber-300",
      ring: "from-amber-400 to-amber-600",
      icon: ShieldAlert,
    },
    onTrack: {
      label: t("as.tier.onTrack.label"),
      desc: t("as.tier.onTrack.desc"),
      color: "text-[#0A84FF]",
      ring: "from-[#0A84FF] to-[#0066CC]",
      icon: ShieldCheck,
    },
    exemplary: {
      label: t("as.tier.exemplary.label"),
      desc: t("as.tier.exemplary.desc"),
      color: "text-emerald-400",
      ring: "from-emerald-400 to-emerald-600",
      icon: CheckCircle2,
    },
  }[result.tier];
  const TierIcon = tierMeta.icon;

  function start() {
    setPhase("questions");
    setCurrent(0);
  }

  function pickAnswer(a: Answer) {
    const q = QUESTIONS[current];
    setAnswers((prev) => ({ ...prev, [q.id]: a }));
    setTimeout(() => {
      if (current < QUESTIONS.length - 1) {
        setCurrent(current + 1);
      } else {
        setPhase("lead");
      }
    }, 220);
  }

  function goBack() {
    if (current > 0) setCurrent(current - 1);
  }

  function goNext() {
    if (!answers[QUESTIONS[current].id]) return;
    if (current < QUESTIONS.length - 1) setCurrent(current + 1);
    else setPhase("lead");
  }

  async function submitLead(e: React.FormEvent) {
    e.preventDefault();
    if (!lead.name || !lead.email || !lead.company || !lead.consent) return;
    setSubmitting(true);
    try {
      const webhook =
        (import.meta as any).env?.VITE_LEAD_WEBHOOK_URL ||
        "https://hook.eu1.make.com/t32dbgn2rjxrg68y4s9fyftdekih7hpk";
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: lead.name.split(" ")[0] || lead.name,
          lastname: lead.name.split(" ").slice(1).join(" "),
          name: lead.name,
          email: lead.email,
          company: lead.company,
          jobtitle: lead.role,
          cyber_score: `${result.yesCount}/12`,
          cyber_status: result.tier,
          nis2_score: String(result.yesCount),
          nis2_tier: result.tier,
          language: lang,
          consent: lead.consent,
          page_url: window.location.href,
          utm: getStoredUtm(),
          submitted_at: new Date().toISOString(),
        }),
      }).catch(() => {});
      track("Lead", { content_name: "nis2-selbstcheck" });
    } finally {
      setSubmitting(false);
      setPhase("result");
    }
  }

  function restart() {
    setAnswers({});
    setLead(EMPTY_LEAD);
    setCurrent(0);
    setPhase("intro");
  }

  const question = QUESTIONS[current];
  const selected = question ? answers[question.id] : undefined;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main className="pt-24 pb-24">
        <section className="container max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === "de" ? "Zurück zur Startseite" : "Back to home"}
          </Link>

          {phase === "intro" && (
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A84FF]/10 border border-[#0A84FF]/30 text-[#0A84FF] font-mono text-xs uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" />
                  {t("as.intro.duration")}
                </span>
                <h1 className="mt-6 font-display font-extrabold text-5xl md:text-6xl leading-[0.95] tracking-tight">
                  {t("as.title")}
                </h1>
                <p className="mt-5 text-xl text-white/70 leading-relaxed">{t("as.subtitle")}</p>
                <p className="mt-6 text-base text-white/60 leading-relaxed">{t("as.intro.body")}</p>

                <ul className="mt-8 space-y-3">
                  {(["as.intro.point1", "as.intro.point2", "as.intro.point3"] as TranslationKey[]).map(
                    (k) => (
                      <li key={k} className="flex items-start gap-3 text-base text-white/80">
                        <CheckCircle2 className="w-5 h-5 text-[#0A84FF] mt-0.5 flex-none" />
                        <span>{t(k)}</span>
                      </li>
                    ),
                  )}
                </ul>

                <Button
                  onClick={start}
                  size="lg"
                  className="mt-10 h-14 px-8 text-base bg-[#0A84FF] hover:bg-[#0A84FF]/90 text-white shadow-[0_8px_30px_-8px_rgba(10,132,255,0.6)]"
                >
                  {t("as.intro.cta")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              <div className="relative">
                <div
                  className="absolute -inset-4 bg-gradient-to-br from-[#0A84FF]/20 via-transparent to-transparent blur-2xl"
                  aria-hidden
                />
                <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">
                  <h3 className="font-display font-bold text-xl mb-6">
                    {lang === "de" ? "5 Bereiche, abgeleitet aus dem BSIG" : "5 areas, derived from BSIG"}
                  </h3>
                  <ol className="space-y-4">
                    {AREA_ORDER.map((area, i) => (
                      <li key={area} className="flex items-start gap-4">
                        <span className="font-mono text-xs text-[#0A84FF] bg-[#0A84FF]/10 border border-[#0A84FF]/30 rounded-md px-2 py-1 flex-none">
                          0{i + 1}
                        </span>
                        <div>
                          <div className="font-semibold text-white">{t(AREA_LABEL_KEY[area])}</div>
                          <div className="text-sm text-white/50 font-mono">{t(AREA_SHORT_KEY[area])}</div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          )}

          {phase === "questions" && question && (
            <div>
              <div className="mb-10">
                <div className="flex items-center justify-between mb-3 text-sm font-mono text-white/50 uppercase tracking-widest">
                  <span>
                    {t("as.progress")
                      .replace("{current}", String(current + 1))
                      .replace("{total}", String(QUESTIONS.length))}
                  </span>
                  <span>{t(AREA_LABEL_KEY[question.area])}</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#0A84FF] to-[#5EB6FF] transition-all duration-500"
                    style={{ width: `${((current + 1) / QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-12">
                <p className="font-mono text-xs uppercase tracking-widest text-[#0A84FF] mb-4">
                  {t(AREA_SHORT_KEY[question.area])}
                </p>
                <h2 className="font-display font-bold text-2xl md:text-3xl leading-snug">
                  <HighlightedText text={t(question.textKey)} />
                </h2>

                <div className="grid gap-3 mt-10 md:grid-cols-3">
                  {(["yes", "no", "dontknow"] as Answer[]).map((opt) => {
                    const isSelected = selected === opt;
                    const labelKey = `as.opt.${opt}` as TranslationKey;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => pickAnswer(opt)}
                        className={[
                          "group relative h-16 rounded-2xl border text-left px-5 font-semibold transition-all",
                          isSelected
                            ? "bg-[#0A84FF] border-[#0A84FF] text-white shadow-[0_8px_30px_-8px_rgba(10,132,255,0.6)]"
                            : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:border-white/30 hover:text-white",
                        ].join(" ")}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-base">{t(labelKey)}</span>
                          <span
                            className={[
                              "w-6 h-6 rounded-full border-2 flex items-center justify-center transition",
                              isSelected ? "border-white bg-white/20" : "border-white/30 group-hover:border-white/60",
                            ].join(" ")}
                          >
                            {isSelected && <CheckCircle2 className="w-4 h-4" />}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between mt-8">
                <Button
                  variant="ghost"
                  onClick={goBack}
                  disabled={current === 0}
                  className="text-white/70 hover:text-white hover:bg-white/5 disabled:opacity-30"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t("as.btn.back")}
                </Button>
                <span className="text-xs font-mono text-white/40">
                  {totalAnswered}/{QUESTIONS.length} · {progress}%
                </span>
                <Button
                  onClick={goNext}
                  disabled={!selected}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/10 disabled:opacity-40"
                >
                  {current === QUESTIONS.length - 1 ? t("as.btn.results") : t("as.btn.next")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {phase === "lead" && (
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-start">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs uppercase tracking-widest">
                  <Lock className="w-3.5 h-3.5" />
                  {lang === "de" ? "Letzter Schritt" : "Last step"}
                </span>
                <h2 className="mt-5 font-display font-extrabold text-4xl md:text-5xl leading-[0.95] tracking-tight">
                  {t("as.lead.title")}
                </h2>
                <p className="mt-4 text-lg text-white/70">{t("as.lead.subtitle")}</p>
                <p className="mt-4 text-sm text-white/50">{t("as.lead.privacyNote")}</p>
              </div>

              <form
                onSubmit={submitLead}
                className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8"
              >
                <div className="grid gap-4">
                  <Input
                    placeholder={t("as.lead.name")}
                    value={lead.name}
                    onChange={(e) => setLead({ ...lead, name: e.target.value })}
                    required
                    className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-[#0A84FF]"
                  />
                  <Input
                    type="email"
                    placeholder={t("as.lead.email")}
                    value={lead.email}
                    onChange={(e) => setLead({ ...lead, email: e.target.value })}
                    required
                    className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-[#0A84FF]"
                  />
                  <Input
                    placeholder={t("as.lead.company")}
                    value={lead.company}
                    onChange={(e) => setLead({ ...lead, company: e.target.value })}
                    required
                    className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-[#0A84FF]"
                  />
                  <Input
                    placeholder={t("as.lead.role.placeholder")}
                    value={lead.role}
                    onChange={(e) => setLead({ ...lead, role: e.target.value })}
                    className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus-visible:ring-[#0A84FF]"
                  />
                  <label className="flex items-start gap-3 cursor-pointer mt-2">
                    <Checkbox
                      checked={lead.consent}
                      onCheckedChange={(c) => setLead({ ...lead, consent: c === true })}
                      className="mt-0.5 border-white/30 data-[state=checked]:bg-[#0A84FF] data-[state=checked]:border-[#0A84FF]"
                    />
                    <span className="text-sm text-white/60 leading-relaxed">{t("as.lead.consent")}</span>
                  </label>
                </div>

                <Button
                  type="submit"
                  disabled={!lead.name || !lead.email || !lead.company || !lead.consent || submitting}
                  className="w-full mt-6 h-13 py-3 text-base bg-[#0A84FF] hover:bg-[#0A84FF]/90 disabled:opacity-40 shadow-[0_8px_30px_-8px_rgba(10,132,255,0.6)]"
                >
                  {submitting ? (
                    <span className="inline-flex items-center gap-2">
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      {lang === "de" ? "Wird gesendet…" : "Sending…"}
                    </span>
                  ) : (
                    <>
                      {t("as.lead.cta")}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          )}

          {phase === "result" && (
            <div className="grid gap-12">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl p-10 md:p-14 relative overflow-hidden">
                <div
                  className={`absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-30 bg-gradient-to-br ${tierMeta.ring}`}
                  aria-hidden
                />
                <div className="relative">
                  <p className="font-mono text-xs uppercase tracking-widest text-white/50">{t("as.result.your")}</p>
                  <div className="flex items-baseline gap-3 mt-3">
                    <span className="font-display font-extrabold text-7xl md:text-8xl leading-none">
                      {result.yesCount}
                    </span>
                    <span className="text-2xl text-white/50 font-mono">/ {QUESTIONS.length}</span>
                  </div>
                  <p className="mt-2 text-base text-white/60">{t("as.result.scoreOf")}</p>

                  <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/15 bg-black/30">
                    <TierIcon className={`w-5 h-5 ${tierMeta.color}`} />
                    <span className={`font-bold text-lg ${tierMeta.color}`}>{tierMeta.label}</span>
                  </div>
                  <p className="mt-4 max-w-2xl text-base text-white/70 leading-relaxed">{tierMeta.desc}</p>
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl md:text-3xl mb-6">{t("as.result.byArea")}</h3>
                <div className="space-y-4">
                  {result.byArea.map((a) => (
                    <div key={a.id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="font-semibold text-white">{t(AREA_LABEL_KEY[a.id])}</div>
                          <div className="text-xs font-mono text-white/40 mt-0.5">{t(AREA_SHORT_KEY[a.id])}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-mono text-2xl font-bold text-white">
                            {a.yes}/{a.total}
                          </div>
                          <div className="text-xs text-white/40">{a.pct}%</div>
                        </div>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#0A84FF] to-[#5EB6FF] transition-all duration-700"
                          style={{ width: `${a.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl md:text-3xl mb-6">{t("as.result.gaps")}</h3>
                {result.gaps.length === 0 ? (
                  <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-emerald-300">
                    {t("as.result.gaps.empty")}
                  </div>
                ) : (
                  <ul className="space-y-3">
                    {result.gaps.map((q) => (
                      <li
                        key={q.id}
                        className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                      >
                        <span className="font-mono text-xs text-white/50 bg-white/5 border border-white/10 rounded-md px-2 py-1 flex-none">
                          Q{q.id}
                        </span>
                        <div>
                          <div className="text-xs font-mono uppercase tracking-widest text-[#0A84FF] mb-1">
                            {t(AREA_LABEL_KEY[q.area])}
                          </div>
                          <p className="text-base text-white/85 leading-snug"><HighlightedText text={t(q.textKey)} /></p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="rounded-3xl border border-[#0A84FF]/40 bg-gradient-to-br from-[#0A84FF]/10 to-transparent p-10 md:p-14 relative overflow-hidden">
                <div
                  className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#0A84FF]/20 blur-3xl"
                  aria-hidden
                />
                <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] items-center">
                  <div>
                    <h3 className="font-display font-extrabold text-3xl md:text-4xl leading-tight">
                      {t("as.result.cta.title")}
                    </h3>
                    <p className="mt-4 text-lg text-white/75 leading-relaxed">{t("as.result.cta.body")}</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <a
                      href={withUtm(RESULT_CALENDLY)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-14 px-6 rounded-full bg-[#0A84FF] hover:bg-[#0A84FF]/90 text-white font-semibold transition shadow-[0_8px_30px_-8px_rgba(10,132,255,0.6)]"
                    >
                      <Calendar className="w-5 h-5" />
                      {t("as.result.cta.button")}
                    </a>
                    <button
                      onClick={restart}
                      className="inline-flex items-center justify-center gap-2 h-14 px-6 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white font-medium transition"
                    >
                      <RefreshCw className="w-4 h-4" />
                      {t("as.result.restart")}
                    </button>
                  </div>
                </div>
              </div>

              <p className="text-center text-xs text-white/40 font-mono italic">{t("as.result.disclaimer")}</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
