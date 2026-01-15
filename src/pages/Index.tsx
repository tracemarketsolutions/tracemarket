import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import AudienceSection from "@/components/landing/AudienceSection";
import MarketplacePreviewSection from "@/components/landing/MarketplacePreviewSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import IndustriesSection from "@/components/landing/IndustriesSection";
import PricingSection from "@/components/landing/PricingSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AudienceSection />
        <MarketplacePreviewSection />
        <HowItWorksSection />
        <IndustriesSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
