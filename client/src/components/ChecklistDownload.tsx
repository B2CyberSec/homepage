/*
 * DESIGN: Editorial Shock — "Der Weckruf"
 * NIS-2 Checklist Download: Form with name + business email validation.
 * Blocks public email domains (gmail, gmx, web.de, etc.)
 */
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Download, FileText, AlertTriangle, CheckCircle } from "lucide-react";

const CHECKLIST_PDF_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/nFZEie8kzRFKviGqGmc9gt/NIS2_Checkliste_B2CyberSec_0c6e1c0e.pdf";

const BLOCKED_DOMAINS = [
  "gmail.com", "googlemail.com", "gmx.de", "gmx.net", "gmx.at", "gmx.ch",
  "web.de", "yahoo.com", "yahoo.de", "hotmail.com", "hotmail.de",
  "outlook.com", "outlook.de", "t-online.de", "freenet.de",
  "posteo.de", "mailbox.org", "aol.com", "icloud.com", "me.com",
  "live.com", "live.de", "msn.com", "protonmail.com", "proton.me",
  "mail.de", "mail.com", "yandex.com", "zoho.com",
];

function isBusinessEmail(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  if (!domain) return false;
  return !BLOCKED_DOMAINS.includes(domain);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ChecklistDownload() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const features = t("checklist.features").split("|");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;

    // Validate name
    if (!name.trim() || name.trim().length < 2) {
      setNameError(t("checklist.name_error"));
      valid = false;
    } else {
      setNameError("");
    }

    // Validate email
    if (!isValidEmail(email)) {
      setEmailError(t("checklist.email_error"));
      valid = false;
    } else if (!isBusinessEmail(email)) {
      setEmailError(t("checklist.email_error"));
      valid = false;
    } else {
      setEmailError("");
    }

    if (!valid) return;

    // Trigger download
    setSubmitted(true);
    const link = document.createElement("a");
    link.href = CHECKLIST_PDF_URL;
    link.download = "NIS2_Checkliste_B2CyberSec.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#0a0a0a]">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Info */}
            <div>
              <p className="text-[#ff4500] text-sm font-bold uppercase tracking-[0.2em] mb-4" style={{ fontFamily: "var(--font-mono)" }}>
                {t("checklist.tag")}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4" style={{ fontFamily: "var(--font-display)" }}>
                {t("checklist.title1")}
                <br />
                <span className="text-[#ff4500]">{t("checklist.title2")}</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                {t("checklist.desc")}
              </p>

              {/* Feature badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                {features.map((f, i) => (
                  <span key={i} className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-white/[0.03] text-white/70 text-sm">
                    <FileText size={14} className="text-[#ff4500]" />
                    {f}
                  </span>
                ))}
              </div>

              {/* PDF preview visual */}
              <div className="flex items-center gap-4 p-4 border border-white/5 bg-white/[0.02]">
                <div className="w-12 h-16 bg-[#ff4500]/10 border border-[#ff4500]/20 flex items-center justify-center flex-shrink-0">
                  <FileText size={24} className="text-[#ff4500]" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">NIS2_Checkliste_B2CyberSec.pdf</p>
                  <p className="text-white/40 text-xs" style={{ fontFamily: "var(--font-mono)" }}>PDF &middot; 37 {t("checklist.features").split("|")[0].replace(/[0-9]+\s*/, "")}</p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="p-8 border border-white/10 bg-white/[0.03]">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-display)" }}>
                      {t("checklist.name_label")} *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => { setName(e.target.value); setNameError(""); }}
                      placeholder={t("checklist.name_placeholder")}
                      className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white placeholder-white/30 focus:border-[#ff4500] focus:outline-none transition-colors"
                    />
                    {nameError && (
                      <p className="flex items-center gap-1.5 mt-2 text-[#ff4500] text-xs">
                        <AlertTriangle size={12} />
                        {nameError}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white text-sm font-bold uppercase tracking-wider mb-2" style={{ fontFamily: "var(--font-display)" }}>
                      {t("checklist.email_label")} *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
                      placeholder={t("checklist.email_placeholder")}
                      className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 text-white placeholder-white/30 focus:border-[#ff4500] focus:outline-none transition-colors"
                    />
                    {emailError && (
                      <p className="flex items-center gap-1.5 mt-2 text-[#ff4500] text-xs">
                        <AlertTriangle size={12} />
                        {emailError}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#ff4500] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#ff5a1a] transition-all group"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <Download size={18} />
                    {t("checklist.submit")}
                  </button>

                  <p className="text-white/30 text-xs text-center" style={{ fontFamily: "var(--font-mono)" }}>
                    {t("checklist.privacy")}
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle size={48} className="text-[#ff4500] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
                    {t("checklist.features").split("|")[2] || "Download started!"}
                  </h3>
                  <p className="text-white/60 mb-6">
                    {t("checklist.privacy")}
                  </p>
                  <button
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = CHECKLIST_PDF_URL;
                      link.download = "NIS2_Checkliste_B2CyberSec.pdf";
                      link.target = "_blank";
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-[#ff4500] text-[#ff4500] font-bold text-sm uppercase tracking-wider hover:bg-[#ff4500] hover:text-white transition-all"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <Download size={16} />
                    {t("checklist.submit")}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
