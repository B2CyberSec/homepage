import React from 'react';
import { useParams, Link } from 'react-router-dom';

const WirelessSecurity = () => {
  const { lang } = useParams();
  
  const content = {
    en: {
      hero: {
        title: "Real Customer Success Stories",
        subtitle: "See how companies like yours secured their wireless networks and prevented millions in losses",
        cta: "Get Your Success Story"
      },
      beforeAfter: {
        title: "Dramatic Wireless Security Transformations",
        cases: [
          {
            company: "TechCorp Manufacturing",
            before: {
              title: "BEFORE: Vulnerable Factory WiFi",
              points: [
                "❌ 15 unauthorized devices connected daily",
                "❌ WPA2 with weak passwords",
                "❌ Guest network accessing production systems",
                "❌ No wireless intrusion detection"
              ]
            },
            after: {
              title: "AFTER: Enterprise-Grade Security",
              points: [
                "✅ Zero unauthorized access attempts",
                "✅ WPA3 with certificate authentication",
                "✅ Complete network segmentation",
                "✅ 24/7 wireless monitoring system"
              ]
            },
            result: "€2.3M in prevented industrial espionage attempts"
          }
        ]
      },
      services: [
        {
          title: "WiFi Infrastructure Assessment",
          description: "Comprehensive evaluation of your wireless network architecture, access points, and coverage areas for security vulnerabilities.",
          icon: "📡"
        },
        {
          title: "WPA3 & Authentication Testing",
          description: "Analysis of wireless encryption protocols, authentication mechanisms, and certificate management systems.",
          icon: "🔐"
        },
        {
          title: "Rogue Access Point Detection",
          description: "Identification of unauthorized wireless devices and potential evil twin attacks within your network perimeter.",
          icon: "🕵️"
        }
      ],
      testimonials: [
        {
          text: "B2CyberSec found 23 rogue access points in our office building that were completely invisible to our IT team. The attack could have compromised our entire network.",
          name: "Jennifer Müller",
          role: "IT Director, Automotive Solutions GmbH",
          company: "Automotive Solutions GmbH",
          result: "Prevented network breach affecting 2,000+ employees"
        },
        {
          text: "Their wireless assessment revealed that our guest WiFi was directly connected to our production servers. We fixed this in 24 hours and avoided a potential €5M loss.",
          name: "Stefan Wagner",
          role: "CISO, Industrial Systems AG",
          company: "Industrial Systems AG", 
          result: "€5M in prevented losses from production system access"
        }
      ],
      transformation: {
        title: "Your Wireless Security Transformation Roadmap",
        steps: [
          { phase: "Discovery", description: "Complete wireless environment mapping and vulnerability identification", duration: "Day 1-3" },
          { phase: "Assessment", description: "Deep penetration testing of all wireless protocols and configurations", duration: "Day 4-7" },
          { phase: "Remediation", description: "Implementation of enterprise-grade security controls and monitoring", duration: "Day 8-14" },
          { phase: "Validation", description: "Re-testing and confirmation of security improvements", duration: "Day 15-21" }
        ]
      }
    },
    de: {
      hero: {
        title: "Echte Kundenerfolgsgeschichten",
        subtitle: "Sehen Sie, wie Unternehmen wie Ihres ihre drahtlosen Netzwerke sicherten und Millionen an Verlusten verhinderten",
        cta: "Ihre Erfolgsgeschichte erhalten"
      },
      beforeAfter: {
        title: "Dramatische Drahtlose Sicherheitstransformationen",
        cases: [
          {
            company: "TechCorp Manufacturing",
            before: {
              title: "VORHER: Verwundbares Fabrik-WiFi",
              points: [
                "❌ 15 nicht autorisierte Geräte täglich verbunden",
                "❌ WPA2 mit schwachen Passwörtern",
                "❌ Gastnetzwerk mit Zugang zu Produktionssystemen",
                "❌ Keine drahtlose Eindringungserkennung"
              ]
            },
            after: {
              title: "NACHHER: Enterprise-Grade Sicherheit",
              points: [
                "✅ Null nicht autorisierte Zugriffsversuche",
                "✅ WPA3 mit Zertifikat-Authentifizierung",
                "✅ Vollständige Netzwerksegmentierung",
                "✅ 24/7 drahtloses Überwachungssystem"
              ]
            },
            result: "2,3M€ in verhinderten Industriespionageversuchen"
          }
        ]
      },
      services: [
        {
          title: "WiFi-Infrastrukturbewertung",
          description: "Umfassende Evaluierung Ihrer drahtlosen Netzwerkarchitektur, Zugangspunkte und Abdeckungsbereiche für Sicherheitsschwachstellen.",
          icon: "📡"
        },
        {
          title: "WPA3 & Authentifizierungstests",
          description: "Analyse drahtloser Verschlüsselungsprotokolle, Authentifizierungsmechanismen und Zertifikatsverwaltungssysteme.",
          icon: "🔐"
        },
        {
          title: "Erkennung unberechtigter Zugangspunkte",
          description: "Identifizierung nicht autorisierter drahtloser Geräte und potenzieller Evil Twin-Angriffe innerhalb Ihres Netzwerkperimeters.",
          icon: "🕵️"
        }
      ],
      testimonials: [
        {
          text: "B2CyberSec fand 23 unberechtigte Zugangspunkte in unserem Bürogebäude, die für unser IT-Team völlig unsichtbar waren. Der Angriff hätte unser gesamtes Netzwerk kompromittieren können.",
          name: "Jennifer Müller",
          role: "IT-Direktorin, Automotive Solutions GmbH",
          company: "Automotive Solutions GmbH",
          result: "Verhinderte Netzwerkpanne, die 2.000+ Mitarbeiter betroffen hätte"
        },
        {
          text: "Ihre drahtlose Bewertung enthüllte, dass unser Gast-WiFi direkt mit unseren Produktionsservern verbunden war. Wir beheben dies in 24 Stunden und vermieden einen potenziellen 5M€ Verlust.",
          name: "Stefan Wagner",
          role: "CISO, Industrial Systems AG",
          company: "Industrial Systems AG",
          result: "5M€ in verhinderten Verlusten durch Produktionssystemzugang"
        }
      ],
      transformation: {
        title: "Ihr Drahtloser Sicherheitstransformations-Fahrplan",
        steps: [
          { phase: "Entdeckung", description: "Vollständige drahtlose Umgebungskartierung und Schwachstellenidentifizierung", duration: "Tag 1-3" },
          { phase: "Bewertung", description: "Tiefe Penetrationstests aller drahtlosen Protokolle und Konfigurationen", duration: "Tag 4-7" },
          { phase: "Sanierung", description: "Implementierung von Enterprise-Grade Sicherheitskontrollen und Überwachung", duration: "Tag 8-14" },
          { phase: "Validierung", description: "Erneute Tests und Bestätigung der Sicherheitsverbesserungen", duration: "Tag 15-21" }
        ]
      }
    }
  };

  const currentContent = content[lang] || content.en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-indigo-900">
      {/* Hero Section - Social Proof Strategy */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight hero-animation">
              {currentContent.hero.title}
            </h1>
            <p className="text-xl text-indigo-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {currentContent.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Before/After Transformation */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {currentContent.beforeAfter.title}
            </h2>
          </div>
          
          {currentContent.beforeAfter.cases.map((caseStudy, index) => (
            <div key={index} className="max-w-6xl mx-auto mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white">{caseStudy.company}</h3>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* Before */}
                <div className="bg-red-950/30 border border-red-500/30 rounded-xl p-8">
                  <h4 className="text-2xl font-bold text-red-400 mb-6">{caseStudy.before.title}</h4>
                  <div className="space-y-3">
                    {caseStudy.before.points.map((point, idx) => (
                      <div key={idx} className="text-gray-300 text-lg">{point}</div>
                    ))}
                  </div>
                </div>
                
                {/* After */}
                <div className="bg-green-950/30 border border-green-500/30 rounded-xl p-8">
                  <h4 className="text-2xl font-bold text-green-400 mb-6">{caseStudy.after.title}</h4>
                  <div className="space-y-3">
                    {caseStudy.after.points.map((point, idx) => (
                      <div key={idx} className="text-gray-300 text-lg">{point}</div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-indigo-950/50 border border-indigo-500/30 rounded-lg p-6 inline-block">
                  <div className="text-2xl font-bold text-indigo-400">💰 {caseStudy.result}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wireless Security Image */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1660644808226-a5b2e691fc51?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwzfHxjeWJlcnNlY3VyaXR5fGVufDB8fHxibHVlfDE3NTIzNjEzMzN8MA&ixlib=rb-4.1.0&q=85"
              alt="Wireless Security Infrastructure"
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px] border border-indigo-500/20"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Wireless Security Services
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {currentContent.services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur border border-indigo-500/20 rounded-xl p-8 hover-lift">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {currentContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur border border-indigo-500/20 rounded-xl p-8">
                <blockquote className="text-xl text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1494790108755-2616b612b787' : '1507003211169-0a1dd7228f2d'}?w=150&h=150&fit=crop&crop=face`}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-indigo-400">{testimonial.role}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
                <div className="bg-green-950/30 border border-green-500/30 rounded-lg p-4">
                  <div className="text-green-400 font-semibold">Result: {testimonial.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Roadmap */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              {currentContent.transformation.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentContent.transformation.steps.map((step, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur border border-indigo-500/20 rounded-xl p-6 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-bold text-white mb-2">{step.phase}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{step.description}</p>
                  <div className="text-indigo-400 font-semibold text-sm">{step.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {lang === 'de' ? 'Bereit für Ihre Transformation?' : 'Ready for Your Transformation?'}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {lang === 'de' 
              ? 'Schließen Sie sich Hunderten von Unternehmen an, die ihre drahtlosen Netzwerke transformiert haben.'
              : 'Join hundreds of companies who have transformed their wireless networks.'
            }
          </p>
          <Link
            to="/contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block hover-lift"
          >
            {currentContent.hero.cta}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WirelessSecurity;