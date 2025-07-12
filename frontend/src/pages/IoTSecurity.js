import React from 'react';
import { useParams, Link } from 'react-router-dom';

const IoTSecurity = () => {
  const { lang } = useParams();
  
  const content = {
    en: {
      hero: {
        title: "Common IoT Security Objections? We've Got Answers.",
        subtitle: "Every concern you have about IoT security testing - addressed with real solutions",
        cta: "Get All Your Questions Answered"
      },
      objections: [
        {
          objection: "\"IoT security testing will disrupt our operations\"",
          response: "Reality Check",
          answer: "Our testing is designed for zero operational impact. We test in parallel with production systems and use non-intrusive methodologies. 500+ manufacturing companies have tested with us without a single minute of downtime.",
          proof: "99.9% uptime maintained across all IoT assessments"
        },
        {
          objection: "\"Our IoT devices are too old/custom for security testing\"",
          response: "Actually...",
          answer: "Legacy and custom IoT devices are our specialty. We've secured 20+ year old industrial systems and proprietary devices that 'can't be tested'. Our team includes reverse engineering experts who've cracked the toughest custom protocols.",
          proof: "Successfully tested 1,200+ unique IoT device types"
        },
        {
          objection: "\"IoT security is too expensive for our budget\"",
          response: "Here's the Math",
          answer: "A single IoT breach costs an average of €3.2M. Our comprehensive assessment costs €15,000. That's 99.5% savings compared to breach costs. Plus, cyber insurance discounts often cover 50% of our fees.",
          proof: "ROI of 2,000% for prevented IoT breaches"
        }
      ],
      services: [
        {
          title: "Industrial IoT Assessment",
          description: "Security testing for manufacturing systems, SCADA networks, and industrial control systems without operational disruption.",
          icon: "🏭"
        },
        {
          title: "Smart Building Security",
          description: "Comprehensive assessment of building automation systems, HVAC controls, lighting systems, and access controls.",
          icon: "🏢"
        },
        {
          title: "Consumer IoT Testing",
          description: "Security evaluation of smart home devices, wearables, connected vehicles, and consumer electronics.",
          icon: "📱"
        }
      ],
      methodology: {
        title: "Our Non-Disruptive Testing Methodology",
        steps: [
          { title: "Device Discovery", description: "Passive network scanning to identify all IoT devices", icon: "🔍" },
          { title: "Firmware Analysis", description: "Offline analysis of device firmware and software", icon: "💾" },
          { title: "Protocol Testing", description: "Communication protocol security assessment", icon: "📡" },
          { title: "Endpoint Security", description: "Individual device security configuration review", icon: "🔒" },
          { title: "Network Segmentation", description: "IoT network isolation and access control testing", icon: "🌐" }
        ]
      },
      caseStudy: {
        title: "How We Secured a Smart Factory Without Stopping Production",
        challenge: "Manufacturing plant with 500+ IoT sensors couldn't afford production downtime for testing",
        solution: "Deployed shadow network testing environment and passive monitoring for 30 days",
        result: "Identified 47 critical vulnerabilities, fixed all issues during scheduled maintenance windows, zero production impact",
        savings: "€12M in prevented ransomware attack"
      },
      faq: [
        {
          question: "Will testing damage our IoT devices?",
          answer: "No. We use read-only analysis techniques and non-invasive testing methods. We've never damaged a device in 10+ years of IoT testing."
        },
        {
          question: "How long does IoT security testing take?",
          answer: "Typical assessments take 2-4 weeks depending on device count. Most testing happens in background without affecting operations."
        },
        {
          question: "Do you test proprietary IoT protocols?",
          answer: "Yes. Our team includes protocol reverse engineering experts who've analyzed 200+ proprietary IoT communication protocols."
        }
      ]
    },
    de: {
      hero: {
        title: "Häufige IoT-Sicherheitseinwände? Wir haben Antworten.",
        subtitle: "Jede Sorge, die Sie bezüglich IoT-Sicherheitstests haben - mit echten Lösungen adressiert",
        cta: "Alle Ihre Fragen beantwortet bekommen"
      },
      objections: [
        {
          objection: "\"IoT-Sicherheitstests werden unseren Betrieb stören\"",
          response: "Realitätscheck",
          answer: "Unsere Tests sind für null operative Auswirkungen konzipiert. Wir testen parallel mit Produktionssystemen und verwenden nicht-intrusive Methodologien. 500+ Fertigungsunternehmen haben mit uns getestet ohne eine einzige Minute Ausfallzeit.",
          proof: "99,9% Uptime bei allen IoT-Bewertungen beibehalten"
        },
        {
          objection: "\"Unsere IoT-Geräte sind zu alt/individuell für Sicherheitstests\"",
          response: "Tatsächlich...",
          answer: "Legacy- und individuelle IoT-Geräte sind unsere Spezialität. Wir haben 20+ Jahre alte Industriesysteme und proprietäre Geräte gesichert, die 'nicht getestet werden können'. Unser Team umfasst Reverse Engineering Experten, die die härtesten individuellen Protokolle geknackt haben.",
          proof: "Erfolgreich 1.200+ einzigartige IoT-Gerätetypen getestet"
        },
        {
          objection: "\"IoT-Sicherheit ist zu teuer für unser Budget\"",
          response: "Hier ist die Mathematik",
          answer: "Eine einzelne IoT-Datenpanne kostet durchschnittlich 3,2M€. Unsere umfassende Bewertung kostet 15.000€. Das sind 99,5% Einsparungen verglichen mit Datenpannenkosten. Außerdem decken Cyber-Versicherungsrabatte oft 50% unserer Gebühren ab.",
          proof: "ROI von 2.000% für verhinderte IoT-Datenpannen"
        }
      ],
      services: [
        {
          title: "Industrielle IoT-Bewertung",
          description: "Sicherheitstests für Fertigungssysteme, SCADA-Netzwerke und industrielle Steuerungssysteme ohne operative Störung.",
          icon: "🏭"
        },
        {
          title: "Smart Building Sicherheit",
          description: "Umfassende Bewertung von Gebäudeautomationssystemen, HVAC-Steuerungen, Beleuchtungssystemen und Zugangskontrollen.",
          icon: "🏢"
        },
        {
          title: "Verbraucher-IoT-Tests",
          description: "Sicherheitsevaluierung von Smart Home Geräten, Wearables, vernetzten Fahrzeugen und Verbraucherelektronik.",
          icon: "📱"
        }
      ],
      methodology: {
        title: "Unsere Nicht-Störende Testmethodik",
        steps: [
          { title: "Geräteerkennung", description: "Passives Netzwerk-Scannen zur Identifizierung aller IoT-Geräte", icon: "🔍" },
          { title: "Firmware-Analyse", description: "Offline-Analyse von Gerätefirmware und Software", icon: "💾" },
          { title: "Protokolltests", description: "Kommunikationsprotokoll-Sicherheitsbewertung", icon: "📡" },
          { title: "Endpunkt-Sicherheit", description: "Individuelle Gerätesicherheitskonfigurationsüberprüfung", icon: "🔒" },
          { title: "Netzwerksegmentierung", description: "IoT-Netzwerkisolation und Zugriffskontrolltests", icon: "🌐" }
        ]
      },
      caseStudy: {
        title: "Wie wir eine Smart Factory sicherten ohne Produktion zu stoppen",
        challenge: "Fertigungsanlage mit 500+ IoT-Sensoren konnte sich keine Produktionsausfallzeit für Tests leisten",
        solution: "Eingesetzte Schatten-Netzwerk-Testumgebung und passive Überwachung für 30 Tage",
        result: "47 kritische Schwachstellen identifiziert, alle Probleme während geplanter Wartungsfenster behoben, null Produktionsauswirkung",
        savings: "12M€ in verhinderten Ransomware-Angriffen"
      },
      faq: [
        {
          question: "Werden Tests unsere IoT-Geräte beschädigen?",
          answer: "Nein. Wir verwenden nur-lesende Analysetechniken und nicht-invasive Testmethoden. Wir haben nie ein Gerät in 10+ Jahren IoT-Tests beschädigt."
        },
        {
          question: "Wie lange dauern IoT-Sicherheitstests?",
          answer: "Typische Bewertungen dauern 2-4 Wochen je nach Geräteanzahl. Die meisten Tests passieren im Hintergrund ohne Betriebsbeeinträchtigung."
        },
        {
          question: "Testen Sie proprietäre IoT-Protokolle?",
          answer: "Ja. Unser Team umfasst Protokoll-Reverse-Engineering-Experten, die 200+ proprietäre IoT-Kommunikationsprotokolle analysiert haben."
        }
      ]
    }
  };

  const currentContent = content[lang] || content.en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-orange-900">
      {/* Hero Section - Objection Handling Strategy */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight hero-animation">
              {currentContent.hero.title}
            </h1>
            <p className="text-xl text-orange-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {currentContent.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Objections & Responses */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {currentContent.objections.map((obj, index) => (
              <div key={index} className="max-w-5xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Objection */}
                  <div className="bg-red-950/30 border border-red-500/30 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-red-400 mb-4">Common Objection:</h3>
                    <blockquote className="text-xl text-gray-300 italic mb-4">
                      {obj.objection}
                    </blockquote>
                  </div>
                  
                  {/* Response */}
                  <div className="bg-green-950/30 border border-green-500/30 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-green-400 mb-4">{obj.response}:</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{obj.answer}</p>
                    <div className="bg-green-600 text-white px-4 py-2 rounded-lg inline-block font-semibold text-sm">
                      ✓ {obj.proof}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IoT Security Image */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <img
              src="https://images.pexels.com/photos/7663144/pexels-photo-7663144.jpeg"
              alt="IoT Security Infrastructure"
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px] border border-orange-500/20"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive IoT Security Services
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {currentContent.services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur border border-orange-500/20 rounded-xl p-8 hover-lift">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              {currentContent.methodology.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {currentContent.methodology.steps.map((step, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur border border-orange-500/20 rounded-xl p-6 text-center relative">
                {index < currentContent.methodology.steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-orange-500"></div>
                )}
                <div className="text-3xl mb-4">{step.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-gradient-to-r from-orange-900 to-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                {currentContent.caseStudy.title}
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-4 gap-6">
              <div className="bg-slate-800/50 backdrop-blur border border-orange-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-400 mb-3">Challenge</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{currentContent.caseStudy.challenge}</p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur border border-orange-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Solution</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{currentContent.caseStudy.solution}</p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur border border-orange-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-400 mb-3">Result</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{currentContent.caseStudy.result}</p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur border border-orange-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-400 mb-3">Savings</h3>
                <p className="text-gray-300 text-sm leading-relaxed font-bold text-lg">{currentContent.caseStudy.savings}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Have Questions? We've Got Answers.
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {currentContent.faq.map((item, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur border border-orange-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">{item.question}</h3>
                <p className="text-gray-300 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-orange-950/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {lang === 'de' ? 'Bereit, Ihre IoT-Sicherheitsbedenken anzugehen?' : 'Ready to Address Your IoT Security Concerns?'}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {lang === 'de' 
              ? 'Lassen Sie uns alle Ihre Fragen beantworten und einen maßgeschneiderten IoT-Sicherheitsplan erstellen.'
              : "Let's answer all your questions and create a tailored IoT security plan."
            }
          </p>
          <Link
            to="/contact"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block hover-lift"
          >
            {currentContent.hero.cta}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IoTSecurity;