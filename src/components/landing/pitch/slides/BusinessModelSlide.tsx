import { TrendingUp } from "lucide-react";
import PitchSlide from "../PitchSlide";
import traceMarketLogo from "@/assets/tracemarket-logo.png";
import circoolerLogo from "@/assets/circooler-logo-new.png";
import partnerLogos from "@/assets/partner-logos.png";

interface BusinessModelSlideProps {
  slideNumber: number;
  totalSlides: number;
}

const BusinessModelSlide = ({ slideNumber, totalSlides }: BusinessModelSlideProps) => {
  return (
    <PitchSlide
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Business & Pricing Model"
      subtitle="Fair, Transparent, Accessible for Everyone"
      variant="default"
    >
      <div className="grid md:grid-cols-2 gap-3 h-full">
        {/* Trace.Market Pricing */}
        <div className="bg-card rounded-xl border border-primary/30 p-2.5">
          <div className="flex items-center gap-2 mb-2">
            <img src={traceMarketLogo} alt="Trace.Market" className="h-5" />
          </div>
          <p className="text-[9px] text-muted-foreground mb-2">
            Transparency should be accessible to everyone. Our pricing reflects this belief.
          </p>
          
          <div className="space-y-1.5">
            <div className="bg-primary/5 rounded-lg p-2 border border-primary/20">
              <p className="text-xs font-bold text-primary">FREE</p>
              <p className="text-[9px] text-muted-foreground">LCA & DPP generation for all</p>
            </div>
            
            <div className="bg-card rounded-lg p-2 border border-border/50">
              <p className="text-[10px] font-bold text-foreground">Marketplace: <span className="text-primary">1% commission</span></p>
              <p className="text-[8px] text-muted-foreground">Only on sales we generate</p>
            </div>
            
            <div className="bg-card rounded-lg p-2 border border-border/50">
              <p className="text-[10px] font-bold text-foreground">Private Embed: <span className="text-primary">€1/product/month</span></p>
              <p className="text-[8px] text-muted-foreground">Embed DPP on your own website</p>
            </div>
          </div>
        </div>

        {/* Circooler.Solutions Pricing */}
        <div className="bg-card rounded-xl border border-accent/30 p-2.5">
          <div className="flex items-center gap-2 mb-2">
            <img src={circoolerLogo} alt="Circooler.Solutions" className="h-5" />
          </div>
          <p className="text-[9px] text-muted-foreground mb-2">
            AI tools are free. Expert help is priced based on complexity and value.
          </p>
          
          <div className="space-y-1.5">
            <div className="bg-accent/5 rounded-lg p-2 border border-accent/20">
              <p className="text-xs font-bold text-accent">FREE AI Advisor</p>
              <p className="text-[9px] text-muted-foreground">Self-service circular solutions</p>
            </div>
            
            <div className="bg-card rounded-lg p-2 border border-border/50">
              <p className="text-[10px] font-bold text-foreground">Consulting: <span className="text-accent">€100 - €10,000</span></p>
              <p className="text-[8px] text-muted-foreground">Expert guidance & planning</p>
            </div>
            
            <div className="bg-card rounded-lg p-2 border border-border/50">
              <p className="text-[10px] font-bold text-foreground">Implementation: <span className="text-accent">Custom</span></p>
              <p className="text-[8px] text-muted-foreground">Full project management</p>
            </div>
          </div>
        </div>

        {/* Market Opportunity */}
        <div className="md:col-span-2 bg-secondary/50 rounded-lg p-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">Market Opportunity</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-base font-bold text-primary">€15B</p>
                <p className="text-[8px] text-muted-foreground">EU DPP 2030</p>
              </div>
              <div className="text-center">
                <p className="text-base font-bold text-accent">€1.8T</p>
                <p className="text-[8px] text-muted-foreground">Circular Economy</p>
              </div>
              <div className="text-center">
                <p className="text-base font-bold text-info">10K+</p>
                <p className="text-[8px] text-muted-foreground">Target SMEs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="md:col-span-2 flex items-center justify-center">
          <img src={partnerLogos} alt="Our Partners" className="h-8 opacity-70" />
        </div>
      </div>
    </PitchSlide>
  );
};

export default BusinessModelSlide;
