/*
 * DESIGN: Editorial Shock — "Der Weckruf"
 * Home: Single-page scroll experience. Dark theme. Sarcastic tone.
 * Sections flow from provocation → problem → solution → pricing → contact.
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShockStats from "@/components/ShockStats";
import RealityCheck from "@/components/RealityCheck";
import NIS2Section from "@/components/NIS2Section";
import ServicesSection from "@/components/ServicesSection";
import VideosSection from "@/components/VideosSection";
import PricingSection from "@/components/PricingSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ShockStats />
      <RealityCheck />
      <NIS2Section />
      <ServicesSection />
      <VideosSection />
      <PricingSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
