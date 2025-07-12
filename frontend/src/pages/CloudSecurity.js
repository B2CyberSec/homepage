import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CloudSecurity = () => {
  const { lang } = useParams();
  
  const content = {
    en: {
      hero: {
        title: "FREE Cloud Security Masterclass",
        subtitle: "Learn the 7 Critical Cloud Security Mistakes That Cost Companies Millions",
        leadMagnet: "Download our exclusive 50-page Cloud Security Blueprint used by Fortune 500 companies",
        cta: "Get Free Masterclass + Blueprint"
      },
      valueFirst: {
        title: "What You'll Learn in This Free Masterclass",
        items: [
          {
            title: "The #1 Cloud Misconfiguration",
            description: "That exposed 540 million Facebook records and how to prevent it in your infrastructure",
            icon: "☁️"
          },
          {
            title: "AWS/Azure Security Checklist",
            description: "50-point security checklist that prevents 95% of cloud breaches (normally €5,000 value)",
            icon: "✅"
          },
          {
            title: "Identity & Access Management",
            description: "Advanced IAM strategies that even AWS experts get wrong, revealed step-by-step",
            icon: "🔐"
          }
        ]
      },
      leadMagnet: {
        title: "BONUS: Free Cloud Security Blueprint",
        description: "This 50-page guide contains the exact framework we use for Fortune 500 companies:",
        benefits: [
          "📋 Complete cloud security assessment methodology",
          "🛡️ Advanced threat detection configurations",
          "⚙️ Automated security monitoring setups",
          "📊 Compliance templates for ISO 27001, SOC 2",
          "🚨 Incident response playbooks for cloud breaches"
        ],
        value: "Normally €2,500 - yours FREE"
      },
      services: [
        {
          title: "AWS Security Assessment",
          description: "Comprehensive security review of your Amazon Web Services infrastructure, including IAM, S3, EC2, and VPC configurations.",
          icon: "🚀"
        },
        {
          title: "Azure Security Review",
          description: "Complete Microsoft Azure security assessment covering Active Directory, Storage Accounts, Virtual Networks, and security policies.",
          icon: "☁️"
        },
        {
          title: "Multi-Cloud Security",
          description: "Cross-platform security assessment for organizations using multiple cloud providers with unified security frameworks.",
          icon: "🌐"
        }
      ],
      socialProof: {
        title: "Join 10,000+ Cloud Professionals Who Downloaded This Guide",
        stats: [
          { number: "10,000+", label: "Cloud professionals trained" },
          { number: "€50M+", label: "In prevented cloud breaches" },
          { number: "500+", label: "Companies secured" }
        ]
      },
      testimonial: {
        text: "This free cloud security training was more valuable than courses I paid thousands for. The blueprint alone saved us €200,000 in potential compliance fines.",
        name: "Michael Brennan",
        role: "Cloud Architect, TechCorp International",
        company: "TechCorp International"
      }
    },
    de: {
      hero: {
        title: "KOSTENLOSE Cloud-Sicherheits-Masterclass",
        subtitle: "Lernen Sie die 7 kritischen Cloud-Sicherheitsfehler, die Unternehmen Millionen kosten",
        leadMagnet: "Laden Sie unseren exklusiven 50-seitigen Cloud-Sicherheits-Blueprint herunter, der von Fortune 500 Unternehmen verwendet wird",
        cta: "Kostenlose Masterclass + Blueprint erhalten"
      },
      valueFirst: {
        title: "Was Sie in dieser kostenlosen Masterclass lernen",
        items: [
          {
            title: "Die #1 Cloud-Fehlkonfiguration",
            description: "Die 540 Millionen Facebook-Datensätze preisgab und wie Sie es in Ihrer Infrastruktur verhindern",
            icon: "☁️"
          },
          {
            title: "AWS/Azure Sicherheits-Checkliste",
            description: "50-Punkte Sicherheitscheckliste, die 95% der Cloud-Datenpannen verhindert (normalerweise 5.000€ Wert)",
            icon: "✅"
          },
          {
            title: "Identity & Access Management",
            description: "Fortgeschrittene IAM-Strategien, die selbst AWS-Experten falsch machen, Schritt für Schritt enthüllt",
            icon: "🔐"
          }
        ]
      },
      leadMagnet: {
        title: "BONUS: Kostenloser Cloud-Sicherheits-Blueprint",
        description: "Dieser 50-seitige Leitfaden enthält das exakte Framework, das wir für Fortune 500 Unternehmen verwenden:",
        benefits: [
          "📋 Vollständige Cloud-Sicherheitsbewertungsmethodik",
          "🛡️ Erweiterte Bedrohungserkennungskonfigurationen",
          "⚙️ Automatisierte Sicherheitsüberwachungssetups",
          "📊 Compliance-Vorlagen für ISO 27001, SOC 2",
          "🚨 Incident Response Playbooks für Cloud-Datenpannen"
        ],
        value: "Normalerweise 2.500€ - Ihrer KOSTENLOS"
      },
      services: [
        {
          title: "AWS-Sicherheitsbewertung",
          description: "Umfassende Sicherheitsüberprüfung Ihrer Amazon Web Services Infrastruktur, einschließlich IAM, S3, EC2 und VPC-Konfigurationen.",
          icon: "🚀"
        },
        {
          title: "Azure-Sicherheitsüberprüfung",
          description: "Vollständige Microsoft Azure Sicherheitsbewertung umfassend Active Directory, Storage Accounts, Virtual Networks und Sicherheitsrichtlinien.",
          icon: "☁️"
        },
        {
          title: "Multi-Cloud-Sicherheit",
          description: "Plattformübergreifende Sicherheitsbewertung für Organisationen, die mehrere Cloud-Anbieter mit einheitlichen Sicherheitsframeworks verwenden.",
          icon: "🌐"
        }
      ],
      socialProof: {
        title: "Schließen Sie sich 10.000+ Cloud-Profis an, die diesen Leitfaden heruntergeladen haben",
        stats: [
          { number: "10.000+", label: "Cloud-Profis geschult" },
          { number: "50M€+", label: "In verhinderten Cloud-Datenpannen" },
          { number: "500+", label: "Unternehmen gesichert" }
        ]
      },
      testimonial: {
        text: "Diese kostenlose Cloud-Sicherheitsschulung war wertvoller als Kurse, für die ich Tausende bezahlt habe. Der Blueprint allein ersparte uns 200.000€ in potenziellen Compliance-Strafen.",
        name: "Michael Brennan",
        role: "Cloud-Architekt, TechCorp International",
        company: "TechCorp International"
      }
    }
  };

  const currentContent = content[lang] || content.en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-cyan-900">
      {/* Hero Section - Free Value + Lead Magnet Strategy */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hero-animation">
              <div className="inline-block bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🎁 100% FREE - No Credit Card Required
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {currentContent.hero.title}
              </h1>
              <p className="text-xl text-cyan-300 mb-6 leading-relaxed">
                {currentContent.hero.subtitle}
              </p>
              <div className="bg-cyan-950/50 border border-cyan-500/30 p-6 rounded-lg mb-8 backdrop-blur">
                <p className="text-gray-200 leading-relaxed">
                  {currentContent.hero.leadMagnet}
                </p>
              </div>
              <Link
                to="/contact"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block hover-lift"
              >
                {currentContent.hero.cta}
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg"
                alt="Cloud Security Professional"
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px] border border-cyan-500/20"
              />
              <div className="absolute -bottom-6 -right-6 bg-cyan-600 text-white p-4 rounded-lg shadow-xl">
                <div className="text-2xl font-bold">FREE</div>
                <div className="text-sm">€2,500 Value</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value First Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              {currentContent.valueFirst.title}
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {currentContent.valueFirst.items.map((item, index) => (
              <div key={index} className="bg-cyan-950/30 border border-cyan-500/30 rounded-xl p-8 text-center">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-950/50 to-blue-950/50 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-white mb-4">
                  {currentContent.leadMagnet.title}
                </h2>
                <p className="text-xl text-gray-300">
                  {currentContent.leadMagnet.description}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="space-y-3 mb-6">
                    {currentContent.leadMagnet.benefits.map((benefit, index) => (
                      <div key={index} className="text-gray-300 text-lg stagger-animation">
                        {benefit}
                      </div>
                    ))}
                  </div>
                  <div className="bg-green-600 text-white px-4 py-2 rounded-lg inline-block font-bold">
                    {currentContent.leadMagnet.value}
                  </div>
                </div>
                <div className="text-center">
                  <img
                    src="https://images.pexels.com/photos/10988021/pexels-photo-10988021.jpeg"
                    alt="Cloud Security Blueprint"
                    className="rounded-lg shadow-xl w-full max-w-sm mx-auto object-cover h-64 border border-cyan-500/20"
                  />
                  <Link
                    to="/contact"
                    className="mt-6 bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors block hover-lift"
                  >
                    {lang === 'de' ? 'Jetzt kostenlos herunterladen' : 'Download Free Now'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Professional Cloud Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              After you've implemented our free blueprint, upgrade to our professional assessment services.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {currentContent.services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur border border-cyan-500/20 rounded-xl p-8 hover-lift">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              {currentContent.socialProof.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.socialProof.stats.map((stat, index) => (
              <div key={index} className="text-center stagger-animation">
                <div className="text-5xl font-bold text-cyan-400 mb-2 counter">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900 to-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-semibold text-white mb-8 leading-relaxed">
              "{currentContent.testimonial.text}"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                alt={currentContent.testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-white">{currentContent.testimonial.name}</div>
                <div className="text-cyan-400">{currentContent.testimonial.role}</div>
                <div className="text-gray-400">{currentContent.testimonial.company}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {lang === 'de' ? 'Holen Sie sich jetzt Ihren kostenlosen Blueprint' : 'Get Your Free Blueprint Now'}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {lang === 'de' 
              ? 'Schließen Sie sich Tausenden von Cloud-Profis an, die bereits ihre Infrastruktur gesichert haben.'
              : 'Join thousands of cloud professionals who have already secured their infrastructure.'
            }
          </p>
          <Link
            to="/contact"
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block hover-lift"
          >
            {currentContent.hero.cta}
          </Link>
          <div className="mt-4 text-gray-400 text-sm">
            {lang === 'de' ? 'Keine Kreditkarte erforderlich • Sofortiger Download' : 'No credit card required • Instant download'}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudSecurity;