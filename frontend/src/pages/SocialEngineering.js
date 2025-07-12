import React from 'react';
import { useParams, Link } from 'react-router-dom';

const SocialEngineering = () => {
  const { lang } = useParams();
  
  const content = {
    en: {
      hero: {
        title: "100% Risk-Free Social Engineering Assessment",
        subtitle: "Test your employees' security awareness with zero risk to your reputation",
        guarantee: "If we compromise your staff, we'll train them for FREE",
        cta: "Start Risk-Free Assessment"
      },
      riskReversals: [
        {
          title: "No Reputation Damage",
          description: "All testing is conducted confidentially with strict non-disclosure agreements. Your reputation remains protected."
        },
        {
          title: "Employee Protection",
          description: "No employees are embarrassed or penalized. All findings focus on training opportunities, not individual blame."
        },
        {
          title: "Money-Back Guarantee",
          description: "If we don't identify significant social engineering vulnerabilities, receive a full refund within 30 days."
        }
      ],
      services: [
        {
          title: "Phishing Simulation Campaigns",
          description: "Realistic email phishing attacks targeting your employees with immediate educational feedback and reporting.",
          icon: "📧"
        },
        {
          title: "Physical Security Testing",
          description: "Authorized attempts to gain physical access to your facilities through social engineering techniques.",
          icon: "🏢"
        },
        {
          title: "Phone-Based Social Engineering",
          description: "Controlled vishing (voice phishing) calls to test employee response to social engineering over the phone.",
          icon: "📞"
        }
      ],
      methodology: {
        title: "Our Ethical & Safe Methodology",
        steps: [
          { title: "Pre-Authorization", description: "Complete legal documentation and authorization process", icon: "📝" },
          { title: "Scope Definition", description: "Clear boundaries and rules of engagement established", icon: "🎯" },
          { title: "Gentle Testing", description: "Educational-focused assessments without causing distress", icon: "🤝" },
          { title: "Immediate Education", description: "Real-time learning opportunities for affected employees", icon: "🎓" },
          { title: "Comprehensive Training", description: "Company-wide security awareness improvement program", icon: "🛡️" }
        ]
      },
      benefits: [
        "✓ Identify human security vulnerabilities safely",
        "✓ Improve employee security awareness",
        "✓ Reduce successful social engineering attacks by 85%",
        "✓ Comply with cybersecurity insurance requirements",
        "✓ Build a security-conscious culture"
      ],
      testimonial: {
        text: "B2CyberSec's social engineering assessment was eye-opening but never embarrassing for our team. Their approach was professional and educational. Our phishing click rates dropped from 40% to 5% in just 3 months.",
        name: "Andreas Hoffman",
        role: "HR Director, Financial Services AG",
        company: "Financial Services AG"
      }
    },
    de: {
      hero: {
        title: "100% Risikofreie Social Engineering Bewertung",
        subtitle: "Testen Sie das Sicherheitsbewusstsein Ihrer Mitarbeiter ohne Risiko für Ihren Ruf",
        guarantee: "Falls wir Ihr Personal kompromittieren, schulen wir es KOSTENLOS",
        cta: "Risikofreie Bewertung starten"
      },
      riskReversals: [
        {
          title: "Kein Reputationsschaden",
          description: "Alle Tests werden vertraulich mit strengen Geheimhaltungsvereinbarungen durchgeführt. Ihr Ruf bleibt geschützt."
        },
        {
          title: "Mitarbeiterschutz",
          description: "Keine Mitarbeiter werden in Verlegenheit gebracht oder bestraft. Alle Erkenntnisse konzentrieren sich auf Schulungsmöglichkeiten, nicht auf individuelle Schuld."
        },
        {
          title: "Geld-zurück-Garantie",
          description: "Falls wir keine signifikanten Social Engineering Schwachstellen identifizieren, erhalten Sie innerhalb von 30 Tagen eine vollständige Rückerstattung."
        }
      ],
      services: [
        {
          title: "Phishing-Simulationskampagnen",
          description: "Realistische E-Mail-Phishing-Angriffe auf Ihre Mitarbeiter mit sofortigem Bildungsfeedback und Berichterstattung.",
          icon: "📧"
        },
        {
          title: "Physische Sicherheitstests",
          description: "Autorisierte Versuche, physischen Zugang zu Ihren Einrichtungen durch Social Engineering Techniken zu erlangen.",
          icon: "🏢"
        },
        {
          title: "Telefonbasiertes Social Engineering",
          description: "Kontrollierte Vishing (Voice Phishing) Anrufe zur Testung der Mitarbeiterreaktion auf Social Engineering per Telefon.",
          icon: "📞"
        }
      ],
      methodology: {
        title: "Unsere Ethische & Sichere Methodik",
        steps: [
          { title: "Vorautorisierung", description: "Vollständige rechtliche Dokumentation und Autorisierungsprozess", icon: "📝" },
          { title: "Bereichsdefinition", description: "Klare Grenzen und Einsatzregeln festgelegt", icon: "🎯" },
          { title: "Sanfte Tests", description: "Bildungsorientierte Bewertungen ohne Belastung", icon: "🤝" },
          { title: "Sofortige Bildung", description: "Echtzeitlernmöglichkeiten für betroffene Mitarbeiter", icon: "🎓" },
          { title: "Umfassende Schulung", description: "Unternehmensweites Sicherheitsbewusstseins-Verbesserungsprogramm", icon: "🛡️" }
        ]
      },
      benefits: [
        "✓ Menschliche Sicherheitsschwachstellen sicher identifizieren",
        "✓ Mitarbeitersicherheitsbewusstsein verbessern",
        "✓ Erfolgreiche Social Engineering Angriffe um 85% reduzieren",
        "✓ Cybersicherheitsversicherungsanforderungen erfüllen",
        "✓ Sicherheitsbewusste Kultur aufbauen"
      ],
      testimonial: {
        text: "B2CyberSecs Social Engineering Bewertung war aufschlussreich, aber nie peinlich für unser Team. Ihr Ansatz war professionell und lehrreich. Unsere Phishing-Klickraten sanken in nur 3 Monaten von 40% auf 5%.",
        name: "Andreas Hoffman",
        role: "HR-Direktor, Financial Services AG",
        company: "Financial Services AG"
      }
    }
  };

  const currentContent = content[lang] || content.en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-emerald-900">
      {/* Hero Section - Risk Reversal Strategy */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hero-animation">
              <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🛡️ COMPLETELY SAFE & CONFIDENTIAL
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {currentContent.hero.title}
              </h1>
              <p className="text-xl text-emerald-300 mb-6 leading-relaxed">
                {currentContent.hero.subtitle}
              </p>
              <div className="bg-green-950/50 border border-green-500/30 p-6 rounded-lg mb-8 backdrop-blur">
                <div className="text-2xl font-bold text-green-400 mb-2">🎯 Our Promise:</div>
                <p className="text-gray-200 text-lg">{currentContent.hero.guarantee}</p>
              </div>
              <Link
                to="/contact"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block hover-lift"
              >
                {currentContent.hero.cta}
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5475816/pexels-photo-5475816.jpeg"
                alt="Social Engineering Testing"
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px] border border-green-500/20"
              />
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-4 rounded-lg shadow-xl">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Confidential</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Reversals Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why This Assessment is Completely Risk-Free
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {currentContent.riskReversals.map((risk, index) => (
              <div key={index} className="bg-green-950/30 border border-green-500/30 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{risk.title}</h3>
                <p className="text-gray-300 leading-relaxed">{risk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Safe Social Engineering Assessment Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive human security testing with complete protection for your employees and reputation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {currentContent.services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur border border-emerald-500/20 rounded-xl p-8 hover-lift">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900 to-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              {currentContent.methodology.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {currentContent.methodology.steps.map((step, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur border border-emerald-500/20 rounded-xl p-6 text-center relative">
                {index < currentContent.methodology.steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-emerald-500"></div>
                )}
                <div className="text-3xl mb-4">{step.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-8">
                  What You'll Achieve
                </h2>
                <div className="space-y-4">
                  {currentContent.benefits.map((benefit, index) => (
                    <div key={index} className="text-lg text-gray-300 stagger-animation">
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/5475752/pexels-photo-5475752.jpeg"
                  alt="Security Training"
                  className="rounded-2xl shadow-2xl w-full object-cover h-[400px] border border-emerald-500/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-2xl p-8 text-center">
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
                  <div className="text-emerald-400">{currentContent.testimonial.role}</div>
                  <div className="text-gray-400">{currentContent.testimonial.company}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {lang === 'de' ? 'Beginnen Sie Ihre risikofreie Bewertung' : 'Start Your Risk-Free Assessment'}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {lang === 'de' 
              ? 'Testen Sie Ihr Menschliches Sicherheitsnetz ohne Risiko für Mitarbeiter oder Reputation.'
              : 'Test your human security layer without risk to employees or reputation.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block hover-lift"
            >
              {currentContent.hero.cta}
            </Link>
            <div className="text-gray-400 text-sm py-4">
              {lang === 'de' ? '30-Tage Geld-zurück-Garantie' : '30-day money-back guarantee'}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialEngineering;