import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const MobileSecurity = () => {
  const { lang } = useParams();
  const [timeLeft, setTimeLeft] = useState(72 * 60 * 60); // 72 hours in seconds
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  const content = {
    en: {
      hero: {
        title: "FLASH SALE: 50% Off Mobile Security Testing",
        subtitle: "Limited Time: Professional mobile app penetration testing at half price",
        urgency: "Only 72 hours left - 8 slots remaining",
        originalPrice: "€15,000",
        salePrice: "€7,500",
        cta: "Claim 50% Discount Now"
      },
      benefits: [
        "✓ Complete iOS & Android app security audit",
        "✓ OWASP MASVS compliance testing",
        "✓ API endpoint vulnerability assessment", 
        "✓ Binary analysis and reverse engineering",
        "✓ Detailed remediation roadmap included"
      ],
      features: [
        {
          title: "Static & Dynamic Analysis",
          description: "Comprehensive code review and runtime testing to identify vulnerabilities in your mobile application across all platforms."
        },
        {
          title: "API Security Testing",
          description: "Deep assessment of mobile API endpoints, authentication mechanisms, and data transmission security protocols."
        },
        {
          title: "Device-Specific Testing",
          description: "Testing across multiple device configurations, OS versions, and security settings to ensure comprehensive coverage."
        }
      ],
      socialProof: {
        title: "Join 200+ App Developers Who Chose This Offer",
        testimonials: [
          { name: "Marcus Weber", company: "FinTech Solutions", text: "Saved us €200K in potential App Store penalties" },
          { name: "Lisa Chen", company: "MedApp GmbH", text: "Fixed 15 critical vulnerabilities before launch" },
          { name: "David Schmidt", company: "E-Commerce Pro", text: "Best investment for our mobile security" }
        ]
      },
      guarantee: {
        title: "100% Money-Back Guarantee",
        description: "If we don't find at least 5 significant vulnerabilities, get your money back. No questions asked."
      }
    },
    de: {
      hero: {
        title: "FLASH SALE: 50% Rabatt auf Mobile Sicherheitstests",
        subtitle: "Begrenzte Zeit: Professionelle Mobile App Penetrationstests zum halben Preis",
        urgency: "Nur noch 72 Stunden - 8 Plätze verfügbar",
        originalPrice: "15.000€",
        salePrice: "7.500€",
        cta: "50% Rabatt jetzt sichern"
      },
      benefits: [
        "✓ Vollständige iOS & Android App Sicherheitsprüfung",
        "✓ OWASP MASVS Compliance-Tests",
        "✓ API Endpunkt Schwachstellenbewertung",
        "✓ Binäranalyse und Reverse Engineering",
        "✓ Detaillierter Sanierungsfahrplan inklusive"
      ],
      features: [
        {
          title: "Statische & Dynamische Analyse",
          description: "Umfassende Code-Überprüfung und Laufzeittests zur Identifizierung von Schwachstellen in Ihrer mobilen Anwendung auf allen Plattformen."
        },
        {
          title: "API-Sicherheitstests",
          description: "Tiefgreifende Bewertung mobiler API-Endpunkte, Authentifizierungsmechanismen und Datenübertragungssicherheitsprotokolle."
        },
        {
          title: "Gerätespezifische Tests",
          description: "Tests über mehrere Gerätekonfigurationen, OS-Versionen und Sicherheitseinstellungen hinweg für umfassende Abdeckung."
        }
      ],
      socialProof: {
        title: "Schließen Sie sich 200+ App-Entwicklern an, die dieses Angebot wählten",
        testimonials: [
          { name: "Marcus Weber", company: "FinTech Solutions", text: "Ersparte uns 200K€ in potenziellen App Store Strafen" },
          { name: "Lisa Chen", company: "MedApp GmbH", text: "15 kritische Schwachstellen vor Launch behoben" },
          { name: "David Schmidt", company: "E-Commerce Pro", text: "Beste Investition für unsere mobile Sicherheit" }
        ]
      },
      guarantee: {
        title: "100% Geld-zurück-Garantie",
        description: "Falls wir nicht mindestens 5 bedeutende Schwachstellen finden, bekommen Sie Ihr Geld zurück. Keine Fragen gestellt."
      }
    }
  };

  const currentContent = content[lang] || content.en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-purple-900">
      {/* Hero Section - Scarcity + Urgency Strategy */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-red-600 text-white px-6 py-3 rounded-full text-lg font-bold mb-6 animate-pulse">
              🔥 LIMITED TIME OFFER
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight hero-animation">
              {currentContent.hero.title}
            </h1>
            
            <p className="text-2xl text-purple-300 mb-8 leading-relaxed">
              {currentContent.hero.subtitle}
            </p>
            
            {/* Countdown Timer */}
            <div className="bg-slate-800/50 backdrop-blur border border-purple-500/30 rounded-2xl p-8 mb-8">
              <div className="text-red-400 font-semibold mb-4 text-lg">
                ⏰ {currentContent.hero.urgency}
              </div>
              <div className="text-6xl font-mono font-bold text-white mb-4">
                {formatTime(timeLeft)}
              </div>
              <div className="text-gray-400">Hours : Minutes : Seconds</div>
            </div>
            
            {/* Pricing */}
            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="text-3xl text-gray-500 line-through">{currentContent.hero.originalPrice}</div>
              <div className="text-5xl font-bold text-green-400">{currentContent.hero.salePrice}</div>
              <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold">
                50% OFF
              </div>
            </div>
            
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 rounded-lg font-bold text-xl transition-all hover-lift inline-block mb-8"
            >
              {currentContent.hero.cta}
            </Link>
            
            {/* Benefits */}
            <div className="text-left max-w-2xl mx-auto">
              {currentContent.benefits.map((benefit, index) => (
                <div key={index} className="text-lg text-gray-300 mb-2 stagger-animation">
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What You Get With This Limited Offer
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete mobile application security assessment using industry-leading tools and methodologies.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {currentContent.features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-8 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">📱</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Image */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxjeWJlcnNlY3VyaXR5fGVufDB8fHxibHVlfDE3NTIzNjEzMzN8MA&ixlib=rb-4.1.0&q=85"
              alt="Mobile Security Testing"
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px] border border-purple-500/20"
            />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              {currentContent.socialProof.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.socialProof.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur border border-purple-500/20 rounded-xl p-6">
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div className="text-white font-semibold">{testimonial.name}</div>
                <div className="text-purple-400 text-sm">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-green-950/30 border border-green-500/30 rounded-2xl p-8">
              <div className="text-6xl mb-6">🛡️</div>
              <h2 className="text-3xl font-bold text-white mb-4">
                {currentContent.guarantee.title}
              </h2>
              <p className="text-xl text-gray-300">
                {currentContent.guarantee.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {lang === 'de' ? 'Verpassen Sie diese Gelegenheit nicht!' : "Don't Miss This Opportunity!"}
          </h2>
          <div className="text-2xl text-red-400 font-bold mb-8">
            ⏰ {formatTime(timeLeft)} {lang === 'de' ? 'verbleibend' : 'remaining'}
          </div>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 rounded-lg font-bold text-xl transition-all hover-lift inline-block"
          >
            {lang === 'de' ? '50% Rabatt jetzt sichern' : 'Secure 50% Discount Now'}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MobileSecurity;