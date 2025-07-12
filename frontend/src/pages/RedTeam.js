import React from 'react';
import { useParams, Link } from 'react-router-dom';

const RedTeam = () => {
  const { lang } = useParams();
  
  const content = {
    en: {
      hero: {
        title: "Join the Elite Red Team Community",
        subtitle: "Exclusive access to advanced persistent threat simulations used by Fortune 500 companies",
        exclusivity: "By invitation only - but we're opening 25 spots this quarter",
        cta: "Apply for Membership"
      },
      community: {
        title: "What Makes Our Red Team Community Exclusive",
        benefits: [
          {
            title: "Advanced TTPs Library",
            description: "Access to classified tactics, techniques, and procedures from real-world APT campaigns",
            icon: "🔓"
          },
          {
            title: "Monthly War Games",
            description: "Participate in realistic cyber warfare scenarios with peer red team specialists",
            icon: "⚔️"
          },
          {
            title: "Zero-Day Research",
            description: "First access to newly discovered vulnerabilities and exploitation techniques",
            icon: "🎯"
          }
        ]
      },
      services: [
        {
          title: "Advanced Persistent Threat Simulation",
          description: "Multi-week, realistic APT campaigns simulating nation-state actors and advanced criminal groups targeting your organization.",
          icon: "🎭"
        },
        {
          title: "Purple Team Exercises",
          description: "Collaborative red and blue team exercises to improve detection capabilities and incident response procedures.",
          icon: "🤝"
        },
        {
          title: "Threat Intelligence Integration",
          description: "Custom threat modeling based on your industry's specific threat landscape and known adversary tactics.",
          icon: "🧠"
        }
      ],
      insider: {
        title: "Insider Knowledge & Resources",
        items: [
          "📚 Exclusive red team methodology playbooks",
          "🎥 Private video library of advanced attack techniques",
          "💬 Direct access to elite red team operators",
          "🛠️ Custom tooling and exploit frameworks",
          "📊 Industry threat intelligence reports",
          "🏆 Certification in advanced red team operations"
        ]
      },
      testimonial: {
        text: "The B2CyberSec red team community elevated our security posture beyond what I thought possible. The exclusive techniques and direct access to elite operators is invaluable. Our detection capabilities improved 400% in 6 months.",
        name: "Colonel Hans Weber (Ret.)",
        role: "Chief Security Officer",
        company: "Defense Contractor GmbH",
        clearance: "Former NATO Cyber Defense"
      },
      membership: {
        title: "Membership Tiers",
        tiers: [
          {
            name: "Associate",
            price: "€5,000/month",
            features: ["Basic red team assessments", "Monthly community calls", "Standard TTPs library"]
          },
          {
            name: "Professional",
            price: "€12,000/month", 
            features: ["Advanced APT simulations", "Weekly war games", "Extended TTPs library", "Custom tooling access"],
            popular: true
          },
          {
            name: "Elite",
            price: "€25,000/month",
            features: ["Nation-state level simulations", "Daily threat intelligence", "Zero-day research access", "1-on-1 operator mentoring", "Custom tool development"]
          }
        ]
      }
    },
    de: {
      hero: {
        title: "Treten Sie der Elite Red Team Community bei",
        subtitle: "Exklusiver Zugang zu erweiterten persistenten Bedrohungssimulationen, die von Fortune 500 Unternehmen verwendet werden",
        exclusivity: "Nur auf Einladung - aber wir öffnen 25 Plätze in diesem Quartal",
        cta: "Für Mitgliedschaft bewerben"
      },
      community: {
        title: "Was unsere Red Team Community exklusiv macht",
        benefits: [
          {
            title: "Erweiterte TTPs Bibliothek",
            description: "Zugang zu klassifizierten Taktiken, Techniken und Verfahren aus realen APT-Kampagnen",
            icon: "🔓"
          },
          {
            title: "Monatliche War Games",
            description: "Teilnahme an realistischen Cyber-Kriegsführungsszenarien mit Peer Red Team Spezialisten",
            icon: "⚔️"
          },
          {
            title: "Zero-Day Forschung",
            description: "Erster Zugang zu neu entdeckten Schwachstellen und Exploitationstechniken",
            icon: "🎯"
          }
        ]
      },
      services: [
        {
          title: "Erweiterte Persistente Bedrohungssimulation",
          description: "Mehrwöchige, realistische APT-Kampagnen, die nationalstaatliche Akteure und erweiterte kriminelle Gruppen simulieren, die Ihre Organisation angreifen.",
          icon: "🎭"
        },
        {
          title: "Purple Team Übungen",
          description: "Kollaborative Red und Blue Team Übungen zur Verbesserung der Erkennungsfähigkeiten und Incident Response Verfahren.",
          icon: "🤝"
        },
        {
          title: "Threat Intelligence Integration",
          description: "Benutzerdefinierte Bedrohungsmodellierung basierend auf der spezifischen Bedrohungslandschaft Ihrer Branche und bekannten Gegnertaktiken.",
          icon: "🧠"
        }
      ],
      insider: {
        title: "Insider-Wissen & Ressourcen",
        items: [
          "📚 Exklusive Red Team Methodologie Playbooks",
          "🎥 Private Videobibliothek erweiterter Angriffstechniken",
          "💬 Direkter Zugang zu Elite Red Team Operatoren",
          "🛠️ Benutzerdefinierte Tools und Exploit-Frameworks",
          "📊 Branchenbedrohungsintelligenz-Berichte",
          "🏆 Zertifizierung in erweiterten Red Team Operationen"
        ]
      },
      testimonial: {
        text: "Die B2CyberSec Red Team Community hob unsere Sicherheitslage über das hinaus, was ich für möglich hielt. Die exklusiven Techniken und direkter Zugang zu Elite-Operatoren ist unbezahlbar. Unsere Erkennungsfähigkeiten verbesserten sich in 6 Monaten um 400%.",
        name: "Colonel Hans Weber (a.D.)",
        role: "Chief Security Officer",
        company: "Defense Contractor GmbH",
        clearance: "Ehemals NATO Cyber Defense"
      },
      membership: {
        title: "Mitgliedschaftsstufen",
        tiers: [
          {
            name: "Associate",
            price: "5.000€/Monat",
            features: ["Basis Red Team Bewertungen", "Monatliche Community Calls", "Standard TTPs Bibliothek"]
          },
          {
            name: "Professional",
            price: "12.000€/Monat",
            features: ["Erweiterte APT-Simulationen", "Wöchentliche War Games", "Erweiterte TTPs Bibliothek", "Benutzerdefinierter Tool-Zugang"],
            popular: true
          },
          {
            name: "Elite",
            price: "25.000€/Monat",
            features: ["Nationalstaatsebene Simulationen", "Tägliche Bedrohungsintelligenz", "Zero-Day Forschungszugang", "1-zu-1 Operator Mentoring", "Benutzerdefinierte Tool-Entwicklung"]
          }
        ]
      }
    }
  };

  const currentContent = content[lang] || content.en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-red-900">
      {/* Hero Section - Community/Insider Strategy */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hero-animation">
              <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🔒 EXCLUSIVE MEMBERSHIP
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {currentContent.hero.title}
              </h1>
              <p className="text-xl text-red-300 mb-6 leading-relaxed">
                {currentContent.hero.subtitle}
              </p>
              <div className="bg-red-950/50 border border-red-500/30 p-6 rounded-lg mb-8 backdrop-blur">
                <p className="text-gray-200 leading-relaxed">
                  ⚡ {currentContent.hero.exclusivity}
                </p>
              </div>
              <Link
                to="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block hover-lift"
              >
                {currentContent.hero.cta}
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5475816/pexels-photo-5475816.jpeg"
                alt="Elite Red Team Operator"
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px] border border-red-500/20"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-4 rounded-lg shadow-xl">
                <div className="text-2xl font-bold">Elite</div>
                <div className="text-sm">Operators Only</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Benefits */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              {currentContent.community.title}
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {currentContent.community.benefits.map((benefit, index) => (
              <div key={index} className="bg-red-950/30 border border-red-500/30 rounded-xl p-8 text-center">
                <div className="text-4xl mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
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
              Elite Red Team Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Military-grade offensive security operations for organizations facing advanced threats.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {currentContent.services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur border border-red-500/20 rounded-xl p-8 hover-lift">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insider Resources */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                {currentContent.insider.title}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {currentContent.insider.items.map((item, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur border border-red-500/20 rounded-lg p-4">
                  <div className="text-gray-300 text-lg">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-950/30 border border-red-500/30 rounded-2xl p-8 text-center">
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
                  <div className="text-red-400">{currentContent.testimonial.role}</div>
                  <div className="text-gray-400">{currentContent.testimonial.company}</div>
                  <div className="text-yellow-400 text-sm">{currentContent.testimonial.clearance}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              {currentContent.membership.title}
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {currentContent.membership.tiers.map((tier, index) => (
              <div key={index} className={`relative rounded-xl p-8 ${
                tier.popular 
                  ? 'bg-red-600 border-2 border-red-400' 
                  : 'bg-slate-800/50 border border-red-500/20'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                <div className="text-4xl font-bold text-white mb-6">{tier.price}</div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold text-center block transition-colors ${
                    tier.popular
                      ? 'bg-white text-red-600 hover:bg-gray-100'
                      : 'bg-red-600 text-white hover:bg-red-700'
                  }`}
                >
                  {lang === 'de' ? 'Bewerben' : 'Apply Now'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {lang === 'de' ? 'Bereit, der Elite beizutreten?' : 'Ready to Join the Elite?'}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {lang === 'de' 
              ? 'Nur 25 Plätze verfügbar. Bewerben Sie sich heute für exklusiven Zugang.'
              : 'Only 25 spots available. Apply today for exclusive access.'
            }
          </p>
          <Link
            to="/contact"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block hover-lift"
          >
            {currentContent.hero.cta}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RedTeam;