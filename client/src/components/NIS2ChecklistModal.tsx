import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Download, CheckCircle, AlertCircle, FileCheck } from "lucide-react";

// Blocked public email domains
const PUBLIC_DOMAINS = [
  "gmail.com", "googlemail.com", "yahoo.com", "yahoo.de", "yahoo.co.uk",
  "hotmail.com", "hotmail.de", "outlook.com", "outlook.de", "live.com",
  "live.de", "icloud.com", "me.com", "mac.com", "aol.com", "web.de",
  "gmx.de", "gmx.net", "gmx.at", "gmx.ch", "t-online.de", "freenet.de",
  "posteo.de", "mailbox.org", "protonmail.com", "proton.me", "tutanota.com",
  "zoho.com", "yandex.com", "yandex.ru",
];

function isPublicDomain(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  return PUBLIC_DOMAINS.includes(domain || "");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// NIS-2 Checklist download URL — the pre-built PDF checklist
const CHECKLIST_URL = "https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/Hilfsmittel/Checklisten/NIS2-Umsetzungsgesetz-Checkliste.pdf";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function NIS2ChecklistModal({ isOpen, onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; company?: string }>({});

  if (!isOpen) return null;

  function validate() {
    const e: typeof errors = {};
    if (!name.trim() || name.trim().length < 2) e.name = "Bitte geben Sie Ihren vollständigen Namen ein.";
    if (!company.trim() || company.trim().length < 2) e.company = "Bitte geben Sie Ihren Firmennamen ein.";
    if (!email.trim()) {
      e.email = "Bitte geben Sie Ihre geschäftliche E-Mail-Adresse ein.";
    } else if (!isValidEmail(email)) {
      e.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    } else if (isPublicDomain(email)) {
      e.email = "Bitte verwenden Sie Ihre geschäftliche E-Mail-Adresse (keine Gmail, Yahoo, etc.).";
    }
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
    // Trigger download
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = CHECKLIST_URL;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.click();
    }, 800);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 space-y-6 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-muted-foreground hover:bg-secondary transition-colors"
          aria-label="Schließen"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <FileCheck size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">NIS-2 Checkliste herunterladen</h2>
                  <p className="text-sm text-muted-foreground">Kostenlos — sofortiger Download</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                Erhalten Sie unsere vollständige NIS-2 Compliance-Checkliste mit allen Pflichtmaßnahmen
                für Ihr Unternehmen. Bitte geben Sie Ihre geschäftlichen Kontaktdaten ein.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground" htmlFor="nis2-name">
                  Vollständiger Name <span className="text-destructive">*</span>
                </label>
                <input
                  id="nis2-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Max Mustermann"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors ${
                    errors.name ? "border-destructive" : "border-border"
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-destructive flex items-center gap-1">
                    <AlertCircle size={12} />{errors.name}
                  </p>
                )}
              </div>

              {/* Company */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground" htmlFor="nis2-company">
                  Firmenname <span className="text-destructive">*</span>
                </label>
                <input
                  id="nis2-company"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Muster GmbH"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors ${
                    errors.company ? "border-destructive" : "border-border"
                  }`}
                />
                {errors.company && (
                  <p className="text-xs text-destructive flex items-center gap-1">
                    <AlertCircle size={12} />{errors.company}
                  </p>
                )}
              </div>

              {/* Business Email */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground" htmlFor="nis2-email">
                  Geschäftliche E-Mail <span className="text-destructive">*</span>
                </label>
                <input
                  id="nis2-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="max@muster-gmbh.de"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors ${
                    errors.email ? "border-destructive" : "border-border"
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-destructive flex items-center gap-1">
                    <AlertCircle size={12} />{errors.email}
                  </p>
                )}
                <p className="text-xs text-muted-foreground">
                  Keine Gmail, Yahoo oder andere öffentlichen E-Mail-Adressen.
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-12 text-base"
              >
                <Download size={18} className="mr-2" />
                Checkliste jetzt herunterladen
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Kein Spam. Ihre Daten werden nicht weitergegeben.
              </p>
            </form>
          </>
        ) : (
          <div className="text-center space-y-6 py-4">
            <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto">
              <CheckCircle size={40} className="text-green-600" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Download startet…</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vielen Dank, <span className="font-semibold text-foreground">{name}</span>!
                Ihre NIS-2 Checkliste wird heruntergeladen.
              </p>
              <p className="text-sm text-muted-foreground">
                Falls der Download nicht startet,{" "}
                <a
                  href={CHECKLIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  hier klicken
                </a>.
              </p>
            </div>
            <Button
              onClick={onClose}
              variant="outline"
              className="border-border hover:bg-secondary font-semibold"
            >
              Schließen
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
