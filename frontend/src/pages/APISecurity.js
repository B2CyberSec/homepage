import React from 'react';
import { useParams, Link } from 'react-router-dom';

const APISecurity = () => {
  const { lang } = useParams();
  
  const content = {
    en: {
      hero: {
        title: "Premium API Security Testing",
        subtitle: "Worth €25,000. Yours for €8,500.",
        value: "Everything you need to secure your APIs, bundled into one comprehensive package",
        originalPrice: "€25,000",
        packagePrice: "€8,500",
        savings: "€16,500",
        cta: "Get Premium Package"
      },
      valueStack: {
        title: "What's Included in Your Premium Package",
        items: [
          { service: "REST API Security Assessment", normalPrice: "€8,000", value: "Comprehensive testing of all REST endpoints" },
          { service: "GraphQL Security Audit", normalPrice: "€6,000", value: "Advanced GraphQL-specific vulnerability testing" },
          { service: "API Authentication Testing", normalPrice: "€4,000", value: "OAuth, JWT, API key security validation" },
          { service: "Rate Limiting & DDoS Testing", normalPrice: "€3,000", value: "API resilience and availability testing" },
          { service: "OWASP API Top 10 Assessment", normalPrice: "€2,500", value: "Industry-standard API security checklist" },
          { service: "API Documentation Security Review", normalPrice: "€1,500", value: "Documentation leak and exposure analysis" }
        ],
        bonus: [
          { item: "24/7 Priority Support", value: "€2,000 value" },
          { item: "API Security Monitoring Setup", value: "€3,000 value" },
          { item: "Custom API Security Training", value: "€5,000 value" }
        ]
      },
      services: [
        {
          title: "REST API Penetration Testing",
          description: "Complete security assessment of RESTful APIs including endpoint enumeration, parameter tampering, and business logic testing.",
          icon: "🔗"
        },
        {
          title: "GraphQL Security Assessment",
          description: "Specialized testing for GraphQL APIs including introspection attacks, query complexity analysis, and schema validation.",
          icon: "📊"
        },
        {
          title: "API Gateway Security",
          description: "Comprehensive evaluation of API gateway configurations, rate limiting, authentication, and traffic management security.",
          icon: "🛡️"
        }
      ],
      guarantee: {
        title: "Our Triple Guarantee",
        items: [
          "🎯 Find critical API vulnerabilities or full refund",
          "⚡ Complete assessment in 14 days or it's free",
          "🛡️ 90-day remediation support included"
        ]
      },
      urgency: {
        title: "Limited Time: Package Pricing Ends Soon",
        subtitle: "After this month, individual services return to regular pricing",
        deadline: "Package expires: December 31st, 2024"
      }
    },
    de: {
      hero: {
        title: "Premium API-Sicherheitstests",
        subtitle: "Wert 25.000€. Ihrer für 8.500€.",
        value: "Alles was Sie brauchen, um Ihre APIs zu sichern, in einem umfassenden Paket gebündelt",
        originalPrice: "25.000€",
        packagePrice: "8.500€",
        savings: "16.500€",
        cta: "Premium Paket erhalten"
      },
      valueStack: {
        title: "Was in Ihrem Premium Paket enthalten ist",
        items: [
          { service: "REST API Sicherheitsbewertung", normalPrice: "8.000€", value: "Umfassende Tests aller REST-Endpunkte" },
          { service: "GraphQL Sicherheitsaudit", normalPrice: "6.000€", value: "Erweiterte GraphQL-spezifische Schwachstellentests" },
          { service: "API-Authentifizierungstests", normalPrice: "4.000€", value: "OAuth, JWT, API-Schlüssel Sicherheitsvalidierung" },
          { service: "Rate Limiting & DDoS Tests", normalPrice: "3.000€", value: "API-Resilience und Verfügbarkeitstests" },
          { service: "OWASP API Top 10 Bewertung", normalPrice: "2.500€", value: "Industrie-Standard API-Sicherheitscheckliste" },
          { service: "API-Dokumentations-Sicherheitsüberprüfung", normalPrice: "1.500€", value: "Dokumentationsleck und Expositionsanalyse" }
        ],
        bonus: [
          { item: "24/7 Priority Support", value: "2.000€ Wert" },
          { item: "API-Sicherheitsüberwachung Setup", value: "3.000€ Wert" },
          { item: "Maßgeschneiderte API-Sicherheitsschulung", value: "5.000€ Wert" }
        ]
      },
      services: [
        {
          title: "REST API Penetrationstests",
          description: "Vollständige Sicherheitsbewertung von RESTful APIs einschließlich Endpunkt-Enumeration, Parameter-Manipulation und Business Logic Testing.",
          icon: "🔗"
        },
        {
          title: "GraphQL Sicherheitsbewertung",
          description: "Spezialisierte Tests für GraphQL APIs einschließlich Introspektionsangriffen, Abfragekomplexitätsanalyse und Schema-Validierung.",
          icon: "📊"
        },
        {
          title: "API Gateway Sicherheit",
          description: "Umfassende Evaluierung von API Gateway Konfigurationen, Rate Limiting, Authentifizierung und Traffic Management Sicherheit.",
          icon: "🛡️"
        }
      ],
      guarantee: {
        title: "Unsere Dreifach-Garantie",
        items: [
          "🎯 Kritische API-Schwachstellen finden oder volle Rückerstattung",
          "⚡ Vollständige Bewertung in 14 Tagen oder kostenlos",
          "🛡️ 90-Tage Sanierungsunterstützung inklusive"
        ]
      },
      urgency: {
        title: "Begrenzte Zeit: Paketpreise enden bald",
        subtitle: "Nach diesem Monat kehren individuelle Services zu regulären Preisen zurück",
        deadline: "Paket läuft ab: 31. Dezember 2024"
      }
    }
  };

  const currentContent = content[lang] || content.en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-violet-900">
      {/* Hero Section - Price Anchoring + Value Stack Strategy */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight hero-animation">
              {currentContent.hero.title}
            </h1>
            <p className="text-2xl text-violet-300 mb-8 leading-relaxed">
              {currentContent.hero.subtitle}
            </p>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              {currentContent.hero.value}
            </p>
            
            {/* Pricing Display */}
            <div className="max-w-md mx-auto bg-violet-950/50 border border-violet-500/30 rounded-2xl p-8 mb-8">
              <div className="text-gray-400 line-through text-2xl mb-2">
                {lang === 'de' ? 'Einzelpreise: ' : 'Individual Pricing: '}{currentContent.hero.originalPrice}
              </div>
              <div className="text-5xl font-bold text-violet-400 mb-2">
                {currentContent.hero.packagePrice}
              </div>
              <div className="bg-green-600 text-white px-4 py-2 rounded-lg inline-block font-bold">
                {lang === 'de' ? 'Sparen Sie ' : 'Save '}{currentContent.hero.savings}
              </div>
            </div>
            
            <Link
              to="/contact"
              className="bg-violet-600 hover:bg-violet-700 text-white px-12 py-6 rounded-lg font-bold text-xl transition-colors inline-block hover-lift"
            >
              {currentContent.hero.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Value Stack Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              {currentContent.valueStack.title}
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Core Services */}
            <div className="space-y-4 mb-8">
              {currentContent.valueStack.items.map((item, index) => (
                <div key={index} className="bg-violet-950/30 border border-violet-500/30 rounded-lg p-6 flex justify-between items-center">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{item.service}</h3>
                    <p className="text-gray-300">{item.value}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-violet-400">{item.normalPrice}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bonus Items */}
            <div className="border-t border-violet-500/30 pt-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {lang === 'de' ? 'KOSTENLOSE Boni (im Paket enthalten):' : 'FREE Bonuses (included in package):'}
              </h3>
              <div className="space-y-4">
                {currentContent.valueStack.bonus.map((bonus, index) => (
                  <div key={index} className="bg-green-950/30 border border-green-500/30 rounded-lg p-6 flex justify-between items-center">
                    <div className="text-xl font-semibold text-white">{bonus.item}</div>
                    <div className="text-green-400 font-bold">{bonus.value}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Total Value */}
            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-violet-950 to-purple-950 border border-violet-500/30 rounded-xl p-8">
                <div className="text-3xl font-bold text-white mb-4">
                  {lang === 'de' ? 'Gesamtwert: über 35.000€' : 'Total Value: Over €35,000'}
                </div>
                <div className="text-5xl font-bold text-violet-400">
                  {lang === 'de' ? 'Ihr Preis: nur 8.500€' : 'Your Price: Only €8,500'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Security Image */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1567619363836-e5fd63f69b20?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxoYWNraW5nfGVufDB8fHxibHVlfDE3NTIyNjgzODh8MA&ixlib=rb-4.1.0&q=85"
              alt="API Security Testing"
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px] border border-violet-500/20"
            />
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Core API Security Services
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {currentContent.services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur border border-violet-500/20 rounded-xl p-8 hover-lift">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-gradient-to-r from-violet-900 to-purple-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              {currentContent.guarantee.title}
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {currentContent.guarantee.items.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur border border-violet-500/30 rounded-lg p-6 text-center">
                  <div className="text-xl font-semibold text-white">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20 bg-red-950/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {currentContent.urgency.title}
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            {currentContent.urgency.subtitle}
          </p>
          <div className="bg-red-600 text-white px-6 py-3 rounded-full inline-block font-semibold mb-8">
            ⏰ {currentContent.urgency.deadline}
          </div>
          <div className="max-w-md mx-auto">
            <Link
              to="/contact"
              className="w-full bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors block hover-lift"
            >
              {lang === 'de' ? 'Paket jetzt sichern' : 'Secure Package Now'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APISecurity;