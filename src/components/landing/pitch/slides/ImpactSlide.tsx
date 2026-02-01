import { Recycle, TrendingUp, Droplets, Zap, Utensils, AlertCircle } from "lucide-react";
import PitchSlide from "../PitchSlide";

interface ImpactSlideProps {
  slideNumber: number;
  totalSlides: number;
}

const ImpactSlide = ({ slideNumber, totalSlides }: ImpactSlideProps) => {
  // Based on the spreadsheet data for 2,200kg saved:
  // Water: ~191,000L (based on ratio from table)
  // Carbon: ~2,389kg CO2 (based on ratio from table)
  // Energy: ~1,433kWh (based on ratio from table)
  const currentImpact = [
    { icon: Recycle, value: "2,200kg", label: "Food waste diverted", sublabel: "Total saved to date" },
    { icon: Droplets, value: "191,000L", label: "Water saved", sublabel: "Based on food production footprint" },
    { icon: TrendingUp, value: "2,389kg", label: "CO₂ avoided", sublabel: "Carbon footprint reduced" },
    { icon: Zap, value: "1,433kWh", label: "Energy saved", sublabel: "Resource efficiency" },
  ];

  const targets2030 = [
    { value: "177,450kg", label: "Annual food recovery" },
    { value: "80.7M L", label: "Water saved" },
    { value: "1M+ kg", label: "CO₂ avoided" },
    { value: "605,654kWh", label: "Energy saved" },
  ];

  const risks = [
    { risk: "Scaling without resources", mitigation: "Multiple funding streams, proven bootstrap model" },
    { risk: "Resistance to transparency", mitigation: "EU DPP mandate, consumer demand, competitive advantage" },
    { risk: "Technology adoption barriers", mitigation: "User-friendly design, education, transparency-first marketing" },
  ];

  return (
    <PitchSlide
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Impact + Challenges"
      subtitle="Measured Justice — KPIs & Risks"
      variant="accent"
    >
      <div className="space-y-4">
        {/* Current Impact */}
        <div>
          <h4 className="font-semibold text-foreground mb-2 text-sm">
            Current Achievement (Volunteer-Powered, 1,000kg/month):
          </h4>
          <div className="grid grid-cols-4 gap-2">
            {currentImpact.map((item) => (
              <div key={item.label} className="bg-card rounded-lg p-2 text-center border border-border/50">
                <item.icon className="h-5 w-5 text-primary mx-auto mb-1" />
                <p className="text-sm font-bold text-foreground">{item.value}</p>
                <p className="text-[10px] text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-center text-accent mt-2 font-medium">
            💡 Funding needed for economic scaling beyond volunteer capacity
          </p>
        </div>

        {/* 2030 Targets */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-3 border border-primary/20">
          <h4 className="font-semibold text-foreground mb-2 text-sm">2030 Vision:</h4>
          <div className="grid grid-cols-4 gap-2 text-center">
            {targets2030.map((target) => (
              <div key={target.label}>
                <p className="text-sm font-bold text-foreground">{target.value}</p>
                <p className="text-[10px] text-muted-foreground">{target.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Risks */}
        <div>
          <h4 className="font-semibold text-foreground mb-2 text-sm flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-destructive" />
            Risks & Mitigation
          </h4>
          <div className="space-y-2">
            {risks.map((item) => (
              <div key={item.risk} className="bg-secondary/50 rounded-lg p-2 text-xs">
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
