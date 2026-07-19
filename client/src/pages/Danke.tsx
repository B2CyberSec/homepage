/*
 * Danke-Seite nach Calendly-Buchung (/termin-gebucht).
 * Zweck: Buchung messbar machen (Pixel "Schedule" + Vercel-Event) und No-Shows senken,
 * indem klar gesagt wird, was als Nächstes passiert.
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { useT } from "@/contexts/LanguageContext";
import { useSeo } from "@/lib/useSeo";
import { track } from "@/lib/tracking";
import { track as vaTrack } from "@vercel/analytics";

export default function Danke() {
  const { lang } = useT();
  useSeo(
    lang === "de" ? "Termin bestätigt — B2CyberSec" : "Appointment confirmed — B2CyberSec",
    lang === "de"
      ? "Ihr Gespräch mit Bojan ist gebucht."
      : "Your call with Bojan is booked.",
    "noindex, nofollow"
  );
  useEffect(() => {
    track("Schedule", { content_name: "bojan-30min" });
    vaTrack("termin_gebucht");
  }, []);

  const t =
    lang === "de"
      ? {
          h1: "Ihr Termin steht.",
          sub: "Sie bekommen sofort eine Bestätigung per E-Mail, mit Kalender-Eintrag und Video-Link.",
          steps: [
            "Bojan liest Ihre Antworten aus der Buchung vor dem Gespräch.",
            "30 Minuten, IT zu IT. Kein Verkaufsdruck.",
            "Danach wissen Sie, ob und wie es sinnvoll weitergeht.",
          ],
          tip: "Tipp: Verschieben ist kein Problem — der Link dafür steht in der Bestätigungs-Mail.",
          home: "Zur Startseite",
        }
      : {
          h1: "Your appointment is booked.",
          sub: "A confirmation email with calendar invite and video link is on its way.",
          steps: [
            "Bojan reads your booking answers before the call.",
            "30 minutes, IT to IT. No sales pressure.",
            "Afterwards you will know whether and how to proceed.",
          ],
          tip: "Tip: rescheduling is easy — the link is in your confirmation email.",
          home: "Go to homepage",
        };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-lg text-center py-20">
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0A84FF] shadow-[0_0_40px_rgba(10,132,255,0.5)] mb-8">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-4"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.03em" }}
        >
          {t.h1}
        </h1>
        <p className="text-white/70 text-lg mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
          {t.sub}
        </p>
        <ol className="text-left space-y-4 mb-10">
          {t.steps.map((s, i) => (
            <li key={i} className="flex gap-4 items-start">
              <span className="flex-none w-7 h-7 rounded-full bg-white/10 text-[#0A84FF] font-bold text-sm flex items-center justify-center">
                {i + 1}
              </span>
              <span className="text-white/80 text-base" style={{ fontFamily: "'Inter', sans-serif" }}>
                {s}
              </span>
            </li>
          ))}
        </ol>
        <p className="text-white/45 text-sm mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
          {t.tip}
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-bold px-6 py-3 transition-colors"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
        >
          {t.home}
        </Link>
      </div>
    </div>
  );
}
