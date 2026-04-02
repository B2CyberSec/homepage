// Frosted Daylight — Home Page
// Light background, glassmorphism cards, bento-grid layout
// Orange accent, blue instead of green, white background

import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import NIS2Section from "@/components/NIS2Section";
import CTABanner from "@/components/CTABanner";
import WhyUsSection from "@/components/WhyUsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen noise-bg">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <NIS2Section />
      <CTABanner />
      <WhyUsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
