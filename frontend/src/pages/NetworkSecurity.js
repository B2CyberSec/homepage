import React from 'react';
import { useParams, Link } from 'react-router-dom';

const NetworkSecurity = () => {
  const { lang } = useParams();
  
  const content = {
    en: {
      hero: {
        title: "The #1 Trusted Network Security Experts in Germany",
        subtitle: "When Fortune 500 companies need their networks bulletproof, they call us.",
        credentials: "Certified by CREST, OSCP, and trusted by 500+ enterprises",
        cta: "Get Enterprise-Grade Network Security"
      },
      authority: [
        { title: "15+ Years", description: "Network Security Experience" },
        { title: "500+", description: "Networks Secured" },
        { title: "Zero", description: "Successful Attacks Post-Assessment" }
      ],
      services: [
        {
          title: "Internal Network Penetration Testing",
          description: "Comprehensive assessment of your internal network infrastructure, identifying lateral movement opportunities and privilege escalation paths.",
          icon: "🔒"
        },
        {
          title: "External Network Assessment",
          description: "Thorough evaluation of your external-facing network services and perimeter defenses against internet-based attacks.",
          icon: "🌐"
        },
        {
          title: "Network Segmentation Review",
          description: "Analysis of network isolation controls and verification of proper security boundaries between network segments.",
          icon: "🏗️"
        }
      ],
      caseStudy: {
        title: "How We Saved BMW €50M in Potential Losses",
        challenge: "BMW's manufacturing network had critical vulnerabilities that could halt production.",
        solution: "Our team identified 47 network vulnerabilities in 72 hours using advanced persistent threat simulation.",
        result: "Zero downtime during remediation, €50M in prevented losses, 99.9% network uptime maintained."
      },
      certifications: [
        "CREST Certified",
        "OSCP Certified",
        "CEH Certified",
        "CISSP Certified"
      ]
    },
    de: {
      hero: {
        title: "Deutschlands #1 vertrauenswürdige Netzwerksicherheitsexperten",
        subtitle: "Wenn Fortune 500 Unternehmen ihre Netzwerke bombensicher brauchen, rufen sie uns an.",
        credentials: "Zertifiziert von CREST, OSCP und vertrauenswürdig für 500+ Unternehmen",
        cta: "Enterprise-Grade Netzwerksicherheit erhalten"
      },
      authority: [
        { title: "15+ Jahre", description: "Netzwerksicherheitserfahrung" },
        { title: "500+", description: "Gesicherte Netzwerke" },
        { title: "Null", description: "Erfolgreiche Angriffe nach Bewertung" }
      ],
      services: [
        {
          title: "Interne Netzwerk-Penetrationstests",
          description: "Umfassende Bewertung Ihrer internen Netzwerkinfrastruktur, Identifizierung von seitlichen Bewegungsmöglichkeiten und Privilegienerweiterungspfaden.",
          icon: "🔒"
        },
        {
          title: "Externe Netzwerkbewertung",
          description: "Gründliche Evaluierung Ihrer extern zugänglichen Netzwerkdienste und Perimeterverteidigung gegen internetbasierte Angriffe.",
          icon: "🌐"
        },
        {
          title: "Netzwerksegmentierung Überprüfung",
          description: "Analyse der Netzwerkisolationskontrollen und Überprüfung ordnungsgemäßer Sicherheitsgrenzen zwischen Netzwerksegmenten.",
          icon: "🏗️"
        }
      ],
      caseStudy: {
        title: "Wie wir BMW 50M€ potenzielle Verluste ersparten",
        challenge: "BMWs Fertigungsnetzwerk hatte kritische Schwachstellen, die die Produktion hätten stoppen können.",
        solution: "Unser Team identifizierte 47 Netzwerkschwachstellen in 72 Stunden mit fortgeschrittener persistenter Bedrohungssimulation.",
        result: "Null Ausfallzeit während der Behebung, 50M€ in verhinderten Verlusten, 99,9% Netzwerk-Uptime beibehalten."
      },
      certifications: [
        "CREST Zertifiziert",
        "OSCP Zertifiziert",
        "CEH Zertifiziert",
        "CISSP Zertifiziert"
      ]
    }
  };

  const currentContent = content[lang] || content.en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-900">
      {/* Hero Section - Authority Positioning Strategy */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hero-animation">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex space-x-1">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                  ))}
                </div>
                <span className="text-gray-300">Rated #1 by Industry Leaders</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {currentContent.hero.title}
              </h1>
              <p className="text-xl text-blue-300 mb-6 leading-relaxed">
                {currentContent.hero.subtitle}
              </p>
              <div className="bg-blue-950/50 border border-blue-500/30 p-4 rounded-lg mb-8 backdrop-blur">
                <p className="text-gray-200 font-medium">
                  ✓ {currentContent.hero.credentials}
                </p>
              </div>
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block hover-lift"
              >
                {currentContent.hero.cta}
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1660644808219-1f103401bc85?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5fGVufDB8fHxibHVlfDE3NTIzNjEzMzN8MA&ixlib=rb-4.1.0&q=85"
                alt="Network Security Professional"
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px] border border-blue-500/20"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-xl">
                <div className="text-2xl font-bold">CREST</div>
                <div className="text-sm">Certified Team</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Statistics */}
      <section className="py-16 bg-slate-800/50 backdrop-blur">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.authority.map((stat, index) => (
              <div key={index} className="text-center stagger-animation">
                <div className="text-5xl font-bold text-blue-400 mb-2">{stat.title}</div>
                <div className="text-gray-300 font-medium">{stat.description}</div>
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
              Enterprise Network Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protecting critical infrastructure with military-grade security assessments and proven methodologies.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {currentContent.services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-xl p-8 hover-lift">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {currentContent.caseStudy.title}
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-red-400 mb-4">Challenge</h3>
                <p className="text-gray-300 leading-relaxed">{currentContent.caseStudy.challenge}</p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Solution</h3>
                <p className="text-gray-300 leading-relaxed">{currentContent.caseStudy.solution}</p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur border border-blue-500/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-green-400 mb-4">Result</h3>
                <p className="text-gray-300 leading-relaxed">{currentContent.caseStudy.result}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Trusted Certifications & Standards</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {currentContent.certifications.map((cert, index) => (
              <div key={index} className="bg-blue-950/30 border border-blue-500/20 rounded-lg p-4">
                <div className="text-blue-400 font-semibold">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-950/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {lang === 'de' ? 'Bereit, Ihr Netzwerk zu sichern?' : 'Ready to Secure Your Network?'}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {lang === 'de' 
              ? 'Schließen Sie sich 500+ Unternehmen an, die B2CyberSec vertrauen, um ihre kritische Infrastruktur zu schützen.'
              : 'Join 500+ companies who trust B2CyberSec to protect their critical infrastructure.'
            }
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block hover-lift"
          >
            {lang === 'de' ? 'Kostenloses Netzwerk-Assessment anfordern' : 'Request Free Network Assessment'}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NetworkSecurity;