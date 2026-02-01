import { Lightbulb, Globe, TrendingUp, Building } from "lucide-react";
import PitchSlide from "../PitchSlide";

interface RealizationSlideProps {
  slideNumber: number;
  totalSlides: number;
}

const RealizationSlide = ({ slideNumber, totalSlides }: RealizationSlideProps) => {
  const opportunities = [
    { icon: Globe, value: "€15B", label: "EU DPP market by 2030", detail: "Mandatory by 2027" },
    { icon: TrendingUp, value: "€1.8T", label: "Global circular economy", detail: "Waiting to be unlocked" },
    { icon: Building, value: "10,000+", label: "EU producers need solutions", detail: "Right now" },
  ];

  return (
    <PitchSlide
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="And We Realized..."
      subtitle='The "Aha" Moment: Transparency as Justice'
      variant="accent"
    >
      <div className="space-y-6">
        {/* Breakthrough Quote */}
        <div className="bg-primary/10 rounded-xl p-5 border border-primary/30">
          <Lightbulb className="h-8 w-8 text-primary mb-3" />
          <p className="text-foreground leading-relaxed font-medium">
            "The key to dismantling systemic inequality isn't just about redistribution—it's about{" "}
            <span className="text-primary">making every transaction transparent</span> and{" "}
            <span className="text-accent">every waste stream visible</span>."
          </p>
        </div>

        {/* Mission Statement */}
        <p className="text-muted-foreground text-sm">
          When you can prove where something came from, who made it, and what it can become, you transform exploitation into empowerment and waste into wealth.
        </p>

        {/* Market Opportunity */}
        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm">Market Opportunity Discovered:</h4>
          <div className="grid grid-cols-3 gap-3">
            {opportunities.map((item) => (
              <div key={item.label} className="bg-card rounded-lg p-3 border border-border/50 text-center">
                <item.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-xl font-display font-bold text-foreground">{item.value}</p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-xs text-primary font-medium">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision */}
        <div className="bg-secondary/50 rounded-lg p-4">
          <h4 className="font-semibold text-foreground mb-2 text-sm">The Vision:</h4>
          <ul className="space-y-1 text-xs text-muted-foreground">
            <li>✓ Every product carries its complete story—from origin to impact</li>
            <li>✓ Waste streams become visible resource flows</li>
            <li>✓ Sustainable practices automatically rewarded through market mechanisms</li>
            <li>✓ Consumers can align purchases with values through verified data</li>
          </ul>
        </div>
      </div>
    </PitchSlide>
  );
};

export default RealizationSlide;
