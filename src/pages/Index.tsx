import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import AudienceSection from "@/components/landing/AudienceSection";
import MarketplacePreviewSection from "@/components/landing/MarketplacePreviewSection";
import EcosystemSection from "@/components/landing/EcosystemSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import IndustriesSection from "@/components/landing/IndustriesSection";
import PitchSection from "@/components/landing/PitchSection";
import PricingSection from "@/components/landing/PricingSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <AudienceSection />
        <MarketplacePreviewSection />
        <EcosystemSection />
        <HowItWorksSection />
        <IndustriesSection />
        <PitchSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
