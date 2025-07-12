import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

// Landing Page Components
import WebAppPentest from './pages/WebAppPentest';
import NetworkSecurity from './pages/NetworkSecurity';
import MobileSecurity from './pages/MobileSecurity';
import WirelessSecurity from './pages/WirelessSecurity';
import SocialEngineering from './pages/SocialEngineering';
import CloudSecurity from './pages/CloudSecurity';
import IoTSecurity from './pages/IoTSecurity';
import APISecurity from './pages/APISecurity';
import RedTeam from './pages/RedTeam';
import LongTermPentest from './pages/LongTermPentest';

// Navigation Component
const Navigation = () => {
  const location = useLocation();
  const [language, setLanguage] = React.useState('en');
  
  const services = [
    { key: 'webapp', name: { en: 'Web Application Testing', de: 'Web-Anwendungs-Tests' }, path: '/webapp' },
    { key: 'network', name: { en: 'Network Security', de: 'Netzwerksicherheit' }, path: '/network' },
    { key: 'mobile', name: { en: 'Mobile Security', de: 'Mobile Sicherheit' }, path: '/mobile' },
    { key: 'wireless', name: { en: 'Wireless Security', de: 'Drahtlose Sicherheit' }, path: '/wireless' },
    { key: 'social', name: { en: 'Social Engineering', de: 'Social Engineering' }, path: '/social' },
    { key: 'cloud', name: { en: 'Cloud Security', de: 'Cloud-Sicherheit' }, path: '/cloud' },
    { key: 'iot', name: { en: 'IoT Security', de: 'IoT-Sicherheit' }, path: '/iot' },
    { key: 'api', name: { en: 'API Security', de: 'API-Sicherheit' }, path: '/api' },
    { key: 'redteam', name: { en: 'Red Team Assessment', de: 'Red Team Bewertung' }, path: '/redteam' },
    { key: 'ltpt', name: { en: 'Long Term Penetration Testing', de: 'Langzeit-Penetrationstests' }, path: '/ltpt' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900/95 to-blue-900/95 backdrop-blur-lg border-b border-blue-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            <span className="text-blue-400">B2Cyber</span>Sec GmbH
          </Link>
          
          <div className="hidden lg:flex items-center space-x-8">
            {services.slice(0, 5).map(service => (
              <Link
                key={service.key}
                to={`${service.path}/${language}`}
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                  location.pathname.includes(service.path) ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {service.name[language]}
              </Link>
            ))}
            <div className="relative group">
              <button className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors">
                More Services
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {services.slice(5).map(service => (
                  <Link
                    key={service.key}
                    to={`${service.path}/${language}`}
                    className="block px-4 py-3 text-sm text-gray-300 hover:text-blue-400 hover:bg-slate-700 first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    {service.name[language]}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex bg-slate-800 rounded-lg p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  language === 'en' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('de')}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  language === 'de' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                DE
              </button>
            </div>
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              {language === 'en' ? 'Get Started' : 'Jetzt Starten'}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Home Component
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Elite <span className="text-blue-400">Penetration Testing</span> Services
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              B2CyberSec GmbH delivers world-class cybersecurity assessments that expose vulnerabilities before attackers do. 
              Protect your digital assets with our comprehensive penetration testing solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
              <Link to="/webapp/en" className="bg-slate-800/50 hover:bg-slate-700 backdrop-blur border border-blue-500/20 rounded-xl p-6 transition-all hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">WA</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Web Apps</h3>
                <p className="text-gray-400 text-sm">Application Security</p>
              </Link>
              <Link to="/network/en" className="bg-slate-800/50 hover:bg-slate-700 backdrop-blur border border-blue-500/20 rounded-xl p-6 transition-all hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">NS</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Network</h3>
                <p className="text-gray-400 text-sm">Infrastructure Security</p>
              </Link>
              <Link to="/mobile/en" className="bg-slate-800/50 hover:bg-slate-700 backdrop-blur border border-blue-500/20 rounded-xl p-6 transition-all hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">MS</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Mobile</h3>
                <p className="text-gray-400 text-sm">App Security</p>
              </Link>
              <Link to="/cloud/en" className="bg-slate-800/50 hover:bg-slate-700 backdrop-blur border border-blue-500/20 rounded-xl p-6 transition-all hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">CS</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Cloud</h3>
                <p className="text-gray-400 text-sm">Cloud Security</p>
              </Link>
              <Link to="/ltpt/en" className="bg-slate-800/50 hover:bg-slate-700 backdrop-blur border border-blue-500/20 rounded-xl p-6 transition-all hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">LT</span>
                </div>
                <h3 className="text-white font-semibold mb-2">LTPT</h3>
                <p className="text-gray-400 text-sm">Long-term Testing</p>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
              >
                Schedule Free Security Assessment
              </Link>
              <Link
                to="/webapp/en"
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webapp/:lang" element={<WebAppPentest />} />
          <Route path="/network/:lang" element={<NetworkSecurity />} />
          <Route path="/mobile/:lang" element={<MobileSecurity />} />
          <Route path="/wireless/:lang" element={<WirelessSecurity />} />
          <Route path="/social/:lang" element={<SocialEngineering />} />
          <Route path="/cloud/:lang" element={<CloudSecurity />} />
          <Route path="/iot/:lang" element={<IoTSecurity />} />
          <Route path="/api/:lang" element={<APISecurity />} />
          <Route path="/redteam/:lang" element={<RedTeam />} />
          <Route path="/ltpt/:lang" element={<LongTermPentest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;