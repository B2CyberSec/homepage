/**
 * Home Page – B2CyberSec Website
 * Bauhaus Security Design: Functional Industrialism
 * Assembles all sections into a single-page scrolling experience.
 */
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import PentestSection from "@/components/PentestSection";
import PricingSection from "@/components/PricingSection";
import WhySection from "@/components/WhySection";
import NIS2Section from "@/components/NIS2Section";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <PentestSection />
        <WhySection />
        <PricingSection />
        <NIS2Section />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
