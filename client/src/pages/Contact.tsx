import {
  Mail, MapPin, Clock, Calendar, MessageSquare
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { COMPANY } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t, calendlyUrl } = useLanguage();

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <SectionHeading
            badge={t("contact.badge")}
            title={t("contact.title")}
            subtitle={t("contact.sub")}
          />
        </div>
      </section>

      {/* Contact Options */}
      <section className="pb-16 lg:pb-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Calendly inline embed */}
            <div className="glass-card glow-teal rounded-2xl p-8 space-y-6 border-primary/30">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Calendar size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{t("contact.book.title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("contact.book.sub")}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t("contact.book.desc")}
              </p>

              {/* Inline Calendly — URL switches with language */}
              <div className="rounded-xl overflow-hidden border border-border" style={{ minHeight: 500 }}>
                <iframe
                  key={calendlyUrl}
                  src={`${calendlyUrl}?hide_gdpr_banner=1`}
                  width="100%"
                  height="500"
                  frameBorder="0"
                  title={t("calendly.title")}
                  className="bg-secondary/60"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-8 space-y-6">
                <h3 className="text-xl font-bold text-foreground">{t("contact.direct.title")}</h3>
                <p className="text-muted-foreground">
                  {t("contact.direct.sub")}
                </p>

                <div className="space-y-4">
                  <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-4 p-4 rounded-xl bg-secondary/60 hover:bg-secondary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">{t("contact.email.label")}</p>
                      <p className="text-sm text-muted-foreground">{COMPANY.email}</p>
                      <p className="text-xs text-muted-foreground mt-1">{t("contact.email.note")}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/60">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t("contact.address.label")}</p>
                      <p className="text-sm text-muted-foreground">{COMPANY.name}</p>
                      <p className="text-sm text-muted-foreground">{COMPANY.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/60">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t("contact.hours.label")}</p>
                      <p className="text-sm text-muted-foreground">{t("contact.hours.val")}</p>
                      <p className="text-sm text-muted-foreground">{t("contact.hours.hotline")}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <MessageSquare size={20} className="text-primary" />
                  <h3 className="text-lg font-bold text-foreground">{t("contact.faq.title")}</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { q: t("contact.faq.q1"), a: t("contact.faq.a1") },
                    { q: t("contact.faq.q2"), a: t("contact.faq.a2") },
                    { q: t("contact.faq.q3"), a: t("contact.faq.a3") },
                  ].map((faq, i) => (
                    <div key={i} className="p-4 rounded-xl bg-secondary/60">
                      <p className="font-medium text-foreground text-sm">{faq.q}</p>
                      <p className="text-sm text-muted-foreground mt-1">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
