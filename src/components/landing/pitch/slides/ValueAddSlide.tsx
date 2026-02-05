import { Building2, Users, Leaf, CheckCircle2, Recycle, TrendingUp, Droplets, Zap } from "lucide-react";
import PitchSlide from "../PitchSlide";
import traceMarketLogo from "@/assets/tracemarket-logo.png";
import circoolerLogo from "@/assets/circooler-logo-new.png";

interface ValueAddSlideProps {
  slideNumber: number;
  totalSlides: number;
}

const ValueAddSlide = ({ slideNumber, totalSlides }: ValueAddSlideProps) => {
  // Circooler.Solutions PROVEN impact based on 2,200kg saved
  const provenImpact = [
    { icon: Recycle, value: "2,200kg", label: "Food diverted", note: "Validated Jan 2025" },
    { icon: Droplets, value: "190,828L", label: "Water saved", note: "Calculated via LCA" },
    { icon: TrendingUp, value: "2,389kg", label: "CO₂ avoided", note: "Verified emissions" },
    { icon: Zap, value: "1,433kWh", label: "Energy saved", note: "Process efficiency" },
  ];

  return (
    <PitchSlide
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Benefits & Proven Impact"
      subtitle="Measurable Value for All Stakeholders"
      variant="default"
    >
      <div className="grid md:grid-cols-2 gap-3 h-full">
        {/* Left - Benefits by Stakeholder */}
        <div className="space-y-2">
          <div className="bg-card rounded-lg border border-primary/30 p-2.5">
            <div className="flex items-center gap-2 mb-1.5">
              <Building2 className="h-4 w-4 text-primary" />
              <h4 className="font-semibold text-foreground text-sm">For Producers</h4>
            </div>
            <ul className="space-y-1">
              <li className="flex items-start gap-2 text-xs">
                <CheckCircle2 className="h-3 w-3 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong className="text-foreground">Prove values</strong> - Show verified sustainability data to customers</span>
              </li>
              <li className="flex items-start gap-2 text-xs">
                <CheckCircle2 className="h-3 w-3 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong className="text-foreground">EU compliance</strong> - Meet DPP requirements before 2027 deadline</span>
              </li>
              <li className="flex items-start gap-2 text-xs">
                <CheckCircle2 className="h-3 w-3 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong className="text-foreground">Waste to revenue</strong> - Find buyers for byproduct streams</span>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-lg border border-info/30 p-2.5">
            <div className="flex items-center gap-2 mb-1.5">
              <Users className="h-4 w-4 text-info" />
              <h4 className="font-semibold text-foreground text-sm">For Consumers</h4>
            </div>
            <ul className="space-y-1">
              <li className="flex items-start gap-2 text-xs">
                <CheckCircle2 className="h-3 w-3 text-info shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong className="text-foreground">Verified claims</strong> - See real data, not just marketing labels</span>
              </li>
              <li className="flex items-start gap-2 text-xs">
                <CheckCircle2 className="h-3 w-3 text-info shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong className="text-foreground">Align purchases</strong> - Buy from producers who share your values</span>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-lg border border-accent/30 p-2.5">
            <div className="flex items-center gap-2 mb-1.5">
              <Leaf className="h-4 w-4 text-accent" />
              <h4 className="font-semibold text-foreground text-sm">For Environment</h4>
            </div>
            <ul className="space-y-1">
              <li className="flex items-start gap-2 text-xs">
                <CheckCircle2 className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong className="text-foreground">Measurable reduction</strong> - Track and verify environmental impact</span>
              </li>
              <li className="flex items-start gap-2 text-xs">
                <CheckCircle2 className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                <span className="text-muted-foreground"><strong className="text-foreground">Circular acceleration</strong> - Connect waste streams to create value</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right - Proven Impact */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-1">
            <img src={circoolerLogo} alt="Circooler.Solutions" className="h-4" />
            <span className="text-sm font-semibold text-foreground">Proven Direct Impact</span>
            <span className="text-[9px] text-muted-foreground">(Volunteer-powered, as of Jan 2025)</span>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            {provenImpact.map((item) => (
              <div key={item.label} className="bg-card rounded-lg p-2.5 text-center border border-accent/30">
                <item.icon className="h-4 w-4 text-accent mx-auto mb-1" />
                <p className="text-lg font-bold text-foreground">{item.value}</p>
                <p className="text-[10px] text-muted-foreground">{item.label}</p>
                <p className="text-[8px] text-accent">{item.note}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 mb-1 mt-3">
            <img src={traceMarketLogo} alt="Trace.Market" className="h-4" />
            <span className="text-sm font-semibold text-foreground">Projected Indirect Impact</span>
            <span className="text-[9px] text-muted-foreground">(By 2030)</span>
          </div>

          <div className="bg-primary/5 rounded-lg p-2.5 border border-primary/20">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-lg font-bold text-primary">5,000</p>
                <p className="text-[9px] text-muted-foreground">Companies in ecosystem</p>
              </div>
              <div>
                <p className="text-lg font-bold text-primary">5M+ kg</p>
                <p className="text-[9px] text-muted-foreground">CO₂ reduced annually</p>
              </div>
              <div>
                <p className="text-lg font-bold text-primary">Millions</p>
                <p className="text-[9px] text-muted-foreground">Consumers informed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PitchSlide>
  );
};

export default ValueAddSlide;
