import { CheckCircle2 } from "lucide-react";
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
      title="Business Model"
      subtitle="Sustainable Change - Fair & Transparent"
      variant="default"
    >
      <div className="grid md:grid-cols-2 gap-2 h-full">
        {/* Trace.Market Pricing */}
        <div className="bg-card rounded-lg border border-primary/30 p-2">
          <div className="flex items-center gap-2 mb-1.5">
            <img src={traceMarketLogo} alt="Trace.Market" className="h-4" />
          </div>
          <p className="text-[9px] text-muted-foreground mb-1.5">
            We want to make transparency available for everyone. Fair, transparent business model.
          </p>
          <div className="space-y-1">
            <div className="bg-primary/5 rounded p-1.5 border border-primary/20">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground text-xs">Marketplace Listing</span>
                <span className="text-primary font-bold text-xs">FREE</span>
              </div>
              <p className="text-[8px] text-muted-foreground">+ 1% commission on referred sales only</p>
            </div>
            <div className="bg-secondary/50 rounded p-1.5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground text-xs">Private Embed</span>
                <span className="text-accent font-bold text-xs">€1/product/month</span>
              </div>
              <p className="text-[8px] text-muted-foreground">No commission, embed on your own site</p>
            </div>
          </div>
          <ul className="mt-1.5 space-y-0.5">
            {["Free LCA & DPP", "AI-powered data collection", "Swarm blockchain verification"].map((item) => (
              <li key={item} className="flex items-center gap-1 text-[8px] text-muted-foreground">
                <CheckCircle2 className="h-2 w-2 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Circooler.Solutions Pricing */}
        <div className="bg-card rounded-lg border border-accent/30 p-2">
          <div className="flex items-center gap-2 mb-1.5">
            <img src={circoolerLogo} alt="Circooler.Solutions" className="h-4" />
          </div>
          <p className="text-[9px] text-muted-foreground mb-1.5">
            Our AI tool is free to give advice. For deeper support:
          </p>
          <div className="space-y-1">
            <div className="bg-accent/5 rounded p-1.5 border border-accent/20">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground text-xs">AI Advisory</span>
                <span className="text-accent font-bold text-xs">FREE</span>
              </div>
              <p className="text-[8px] text-muted-foreground">Self-service circular economy guidance</p>
            </div>
            <div className="bg-secondary/50 rounded p-1.5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground text-xs">Consulting</span>
                <span className="text-primary font-bold text-xs">€100 - €10,000</span>
              </div>
              <p className="text-[8px] text-muted-foreground">Advisory to project management</p>
            </div>
            <div className="bg-info/5 rounded p-1.5 border border-info/20">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground text-xs">Implementation</span>
                <span className="text-info font-bold text-xs">Custom</span>
              </div>
              <p className="text-[8px] text-muted-foreground">Tailored to project scope</p>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="md:col-span-2 bg-secondary/30 rounded-lg p-1.5">
          <p className="text-[9px] font-semibold text-foreground text-center mb-1">Our Partners & Network</p>
          <img src={partnerLogos} alt="Partner Logos" className="w-full h-auto max-h-12 object-contain opacity-80" />
        </div>
      </div>
    </PitchSlide>
  );
};

export default BusinessModelSlide;
