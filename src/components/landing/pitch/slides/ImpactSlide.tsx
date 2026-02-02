import { Recycle, TrendingUp, Droplets, Zap, AlertCircle, Globe, Building2 } from "lucide-react";
import PitchSlide from "../PitchSlide";
import traceMarketLogo from "@/assets/tracemarket-logo.png";
import circoolerLogo from "@/assets/circooler-logo-new.png";

interface ImpactSlideProps {
  slideNumber: number;
  totalSlides: number;
}

const ImpactSlide = ({ slideNumber, totalSlides }: ImpactSlideProps) => {
  // Circooler.Solutions DIRECT impact based on 2,200kg saved
  const circoolerImpact = [
    { icon: Recycle, value: "2,200kg", label: "Food waste diverted" },
    { icon: Droplets, value: "190,828L", label: "Water saved" },
    { icon: TrendingUp, value: "2,389kg", label: "CO₂ avoided" },
    { icon: Zap, value: "1,433kWh", label: "Energy saved" },
  ];

  // Trace.Market INDIRECT impact - 5,000 companies by 2030
  // Assuming average company saves 1,000kg CO2/year through better supply chain visibility
  const traceMarketImpact = [
    { icon: Building2, value: "5,000", label: "Companies in ecosystem" },
    { icon: TrendingUp, value: "5M+ kg", label: "CO₂ reduced annually" },
    { icon: Droplets, value: "500M+ L", label: "Water footprint tracked" },
    { icon: Zap, value: "2.5M kWh", label: "Energy optimized" },
  ];

  const risks = [
    { risk: "Scaling without resources", mitigation: "Multiple funding streams, proven bootstrap" },
    { risk: "Resistance to transparency", mitigation: "EU mandate, consumer demand" },
  ];

  return (
    <PitchSlide
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Impact + Challenges"
      subtitle="Direct & Indirect Impact - Interconnected Solutions"
      variant="accent"
    >
      <div className="grid md:grid-cols-2 gap-2 h-full">
        {/* Circooler.Solutions - Direct Impact */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <img src={circoolerLogo} alt="Circooler.Solutions" className="h-4" />
            <span className="text-[10px] text-muted-foreground">DIRECT Impact (1,000kg/month)</span>
          </div>
          <div className="grid grid-cols-2 gap-1">
            {circoolerImpact.map((item) => (
              <div key={item.label} className="bg-card rounded p-1.5 text-center border border-accent/30">
                <item.icon className="h-3 w-3 text-accent mx-auto mb-0.5" />
                <p className="text-xs font-bold text-foreground">{item.value}</p>
                <p className="text-[8px] text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="bg-accent/10 rounded p-1.5 border border-accent/20">
            <p className="text-[9px] text-foreground text-center">
              <strong>390,000 kg/year</strong> identified from Plantsoul + MATE + Nagybani
            </p>
          </div>
          <p className="text-[9px] text-center text-accent font-medium">
            💡 Funding needed for scaling beyond volunteer capacity
          </p>
        </div>

        {/* Trace.Market - Indirect Impact */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <img src={traceMarketLogo} alt="Trace.Market" className="h-4" />
            <span className="text-[10px] text-muted-foreground">INDIRECT Impact (by 2030)</span>
          </div>
          <div className="grid grid-cols-2 gap-1">
            {traceMarketImpact.map((item) => (
              <div key={item.label} className="bg-card rounded p-1.5 text-center border border-primary/30">
                <item.icon className="h-3 w-3 text-primary mx-auto mb-0.5" />
                <p className="text-xs font-bold text-foreground">{item.value}</p>
                <p className="text-[8px] text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="bg-primary/10 rounded p-1.5 border border-primary/20">
            <p className="text-[9px] text-foreground text-center">
              Transparency enables <strong>optimization</strong> across all supply chains
            </p>
          </div>
        </div>

        {/* Risks - Full Width */}
        <div className="md:col-span-2 bg-secondary/50 rounded p-1.5">
          <h4 className="font-semibold text-foreground mb-1 text-[10px] flex items-center gap-1">
            <AlertCircle className="h-3 w-3 text-destructive" />
            Key Risks & Mitigation
          </h4>
          <div className="grid grid-cols-2 gap-1">
            {risks.map((item) => (
              <div key={item.risk} className="bg-card rounded p-1 text-[8px] border border-border/50">
                <span className="font-medium text-foreground">{item.risk}:</span>{" "}
                <span className="text-muted-foreground">{item.mitigation}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PitchSlide>
  );
};

export default ImpactSlide;
