import { Lightbulb, TrendingUp, Globe, FileCheck, Scale } from "lucide-react";
import PitchSlide from "../PitchSlide";

interface RealizationSlideProps {
  slideNumber: number;
  totalSlides: number;
}

const RealizationSlide = ({ slideNumber, totalSlides }: RealizationSlideProps) => {
  const marketOpportunities = [
    { icon: FileCheck, label: "EU DPP Market", value: "€15B by 2030", note: "Mandatory by 2027" },
    { icon: Globe, label: "Circular Economy", value: "€1.8T", note: "Market to unlock" },
    { icon: TrendingUp, label: "Target Users", value: "10,000+", note: "SMEs in Europe" },
  ];

  return (
    <PitchSlide
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="And We Realized..."
      subtitle="Transparency as Justice"
      variant="gradient"
    >
      <div className="grid md:grid-cols-2 gap-3 h-full">
        {/* Left - The Breakthrough */}
        <div className="space-y-2">
          <div className="bg-primary/10 rounded-lg p-2 border border-primary/20">
            <Lightbulb className="h-4 w-4 text-primary mb-1" />
            <p className="text-xs text-foreground leading-relaxed italic">
              "The key to dismantling systemic inequality isn't just about redistribution - it's about making every transaction transparent and every waste stream visible."
            </p>
          </div>

          <div className="bg-card rounded-lg p-2 border border-border/50">
            <h4 className="font-semibold text-foreground text-xs mb-1">The Vision:</h4>
            <ul className="text-[10px] text-muted-foreground space-y-1">
              <li className="flex items-start gap-1">
                <span className="text-primary">✓</span>
                Every product carries its complete story
              </li>
              <li className="flex items-start gap-1">
                <span className="text-primary">✓</span>
                Waste streams become visible resource flows
              </li>
              <li className="flex items-start gap-1">
                <span className="text-primary">✓</span>
                Sustainable practices automatically rewarded
              </li>
              <li className="flex items-start gap-1">
                <span className="text-primary">✓</span>
                Communities can prove their positive impact
              </li>
            </ul>
          </div>

          {/* EU DPP Info */}
          <div className="bg-info/10 rounded-lg p-2 border border-info/20">
            <div className="flex items-center gap-1 mb-0.5">
              <Scale className="h-3 w-3 text-info" />
              <span className="font-semibold text-foreground text-[10px]">EU Digital Product Passport</span>
            </div>
            <p className="text-[9px] text-muted-foreground">
              The EU ESPR mandates DPPs for products sold in Europe by 2027. Our platform is fully compliant.
            </p>
          </div>
        </div>

        {/* Right - Market Opportunity */}
        <div className="space-y-2">
          <h4 className="font-semibold text-foreground text-xs">Market Opportunity:</h4>
          
          <div className="space-y-1.5">
            {marketOpportunities.map((opp) => (
              <div key={opp.label} className="bg-card rounded-lg p-2 border border-border/50 flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-primary/10">
                  <opp.icon className="h-3 w-3 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground text-xs">{opp.label}</p>
                  <p className="text-[9px] text-muted-foreground">{opp.note}</p>
                </div>
                <p className="text-sm font-bold text-primary">{opp.value}</p>
              </div>
            ))}
          </div>

          {/* Systemic Change */}
          <div className="bg-accent/10 rounded-lg p-2 border border-accent/20">
            <h5 className="font-semibold text-foreground text-[10px] mb-1">Systemic Change Potential:</h5>
            <p className="text-[9px] text-muted-foreground">
              Every transparent supply chain creates a model for others. When you can prove where something came from, you transform exploitation into empowerment and waste into wealth.
            </p>
          </div>
        </div>
      </div>
    </PitchSlide>
  );
};

export default RealizationSlide;
