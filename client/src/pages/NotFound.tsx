import { Link } from "wouter";
import { useT } from "@/contexts/LanguageContext";
import { useSeo } from "@/lib/useSeo";

export default function NotFound() {
  const { lang } = useT();
  useSeo(
    lang === "de" ? "Seite nicht gefunden — B2CyberSec" : "Page not found — B2CyberSec",
    lang === "de"
      ? "Diese Seite gibt es nicht (mehr)."
      : "This page does not exist (anymore).",
    "noindex, nofollow"
  );

  const t =
    lang === "de"
      ? {
          h2: "Seite nicht gefunden",
          body: "Diese Seite gibt es nicht oder sie wurde verschoben.",
          home: "Zur Startseite",
          check: "Zum CYBER-STATUS-CHECK",
        }
      : {
          h2: "Page not found",
          body: "This page does not exist or has been moved.",
          home: "Go to homepage",
          check: "Go to CYBER-STATUS-CHECK",
        };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black text-white px-6">
      <div className="text-center max-w-md">
        <p
          className="text-7xl md:text-8xl font-extrabold text-[#0A84FF] mb-4"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.04em" }}
        >
          404
        </p>
        <h1
          className="text-2xl md:text-3xl font-bold mb-3"
          style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}
        >
          {t.h2}
        </h1>
        <p className="text-white/60 text-base mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
          {t.body}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-[#0A84FF] hover:bg-[#1a8fff] text-white font-bold px-6 py-3 transition-colors"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            {t.home}
          </Link>
          <Link
            href="/check"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-bold px-6 py-3 transition-colors"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            {t.check}
          </Link>
        </div>
      </div>
    </div>
  );
}
