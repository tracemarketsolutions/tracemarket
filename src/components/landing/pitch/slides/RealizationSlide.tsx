import { FileCheck, Globe, TrendingUp, Scale } from "lucide-react";
import PitchSlide from "../PitchSlide";

interface RealizationSlideProps {
  slideNumber: number;
  totalSlides: number;
}

const RealizationSlide = ({ slideNumber, totalSlides }: RealizationSlideProps) => {
  return (
    <PitchSlide
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="The Market Opportunity"
      subtitle="EU Regulations Create Urgent Demand"
      variant="gradient"
    >
      <div className="grid md:grid-cols-2 gap-4 h-full">
        {/* Left - EU DPP Regulation */}
        <div className="space-y-3">
          <div className="bg-info/10 rounded-lg p-3 border border-info/30">
            <div className="flex items-center gap-2 mb-2">
              <Scale className="h-5 w-5 text-info" />
              <h4 className="font-semibold text-foreground text-sm">EU Digital Product Passport (DPP)</h4>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              The EU Ecodesign for Sustainable Products Regulation (ESPR) mandates digital product passports 
              for most products sold in Europe.
            </p>
            <div className="bg-card rounded p-2 border border-border/50">
              <p className="text-[10px] text-foreground">
                <strong className="text-info">Timeline:</strong> Batteries (2027) → Textiles (2027) → Electronics → All products
              </p>
            </div>
          </div>

          <div className="bg-card rounded-lg p-3 border border-border/50">
            <h4 className="font-semibold text-foreground text-sm mb-2">What DPP Requires:</h4>
            <ul className="text-xs text-muted-foreground space-y-1.5">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Complete supply chain traceability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Environmental impact data (carbon, water, energy)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Recyclability and circularity information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>QR-accessible consumer information</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right - Market Size */}
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground text-sm flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            Market Opportunity
          </h4>
          
          <div className="grid grid-cols-1 gap-2">
            <div className="bg-card rounded-lg p-3 border border-primary/30 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <FileCheck className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xl font-bold text-primary">€15B</p>
                <p className="text-xs text-foreground">EU DPP Market by 2030</p>
                <p className="text-[9px] text-muted-foreground">Source: European Commission estimates</p>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-3 border border-accent/30 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/10">
                <Globe className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1">
                <p className="text-xl font-bold text-accent">€1.8T</p>
                <p className="text-xs text-foreground">Global Circular Economy Potential</p>
                <p className="text-[9px] text-muted-foreground">Source: Ellen MacArthur Foundation</p>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-3 border border-info/30 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-info/10">
                <TrendingUp className="h-5 w-5 text-info" />
              </div>
              <div className="flex-1">
                <p className="text-xl font-bold text-info">10,000+</p>
                <p className="text-xs text-foreground">EU SMEs Needing DPP Solutions</p>
                <p className="text-[9px] text-muted-foreground">Most can't afford enterprise solutions</p>
              </div>
            </div>
          </div>

          {/* Our Position */}
          <div className="bg-primary/5 rounded-lg p-2.5 border border-primary/20">
            <p className="text-xs text-foreground text-center">
              <strong className="text-primary">Our position:</strong> Affordable, AI-powered DPP generation 
              designed for SMEs - ready before the 2027 deadline.
            </p>
          </div>
        </div>
      </div>
    </PitchSlide>
  );
};

export default RealizationSlide;
