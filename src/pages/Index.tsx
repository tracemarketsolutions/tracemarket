import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import EcosystemSection from "@/components/landing/EcosystemSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import MarketplacePreviewSection from "@/components/landing/MarketplacePreviewSection";
import IndustriesSection from "@/components/landing/IndustriesSection";
import PitchSection from "@/components/landing/PitchSection";
import PricingSection from "@/components/landing/PricingSection";
import TeamSection from "@/components/landing/TeamSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <EcosystemSection />
        <HowItWorksSection />
        <MarketplacePreviewSection />
        <IndustriesSection />
        <PitchSection />
        <PricingSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
