import { Recycle, TrendingUp, Droplets, Zap, CheckCircle2, Target } from "lucide-react";
import PitchSlide from "../PitchSlide";
import traceMarketLogo from "@/assets/tracemarket-logo.png";
import circoolerLogo from "@/assets/circooler-logo-new.png";

interface ImpactSlideProps {
  slideNumber: number;
  totalSlides: number;
}

const ImpactSlide = ({ slideNumber, totalSlides }: ImpactSlideProps) => {
  const validatedElements = [
    { element: "Market Demand", proof: "78% consumers want transparency; EU mandates DPP by 2027", status: "validated" },
    { element: "Technical Solution", proof: "AI tools work - tested with paying clients", status: "validated" },
    { element: "Circular Model", proof: "2,200kg diverted, products created, meals donated", status: "validated" },
    { element: "Team Capability", proof: "Delivered without funding; scaling requires resources", status: "validated" },
  ];

  return (
    <PitchSlide
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="What We've Validated"
      subtitle="Proof Points Before Scaling"
      variant="accent"
    >
      <div className="grid md:grid-cols-2 gap-4 h-full">
        {/* Left - Validation Evidence */}
        <div className="space-y-2">
          <h4 className="font-semibold text-foreground text-sm flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            Key Validation Points
          </h4>
          
          <div className="space-y-2">
            {validatedElements.map((item) => (
              <div key={item.element} className="bg-card rounded-lg p-2.5 border border-primary/30">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                  <p className="font-semibold text-foreground text-sm">{item.element}</p>
                </div>
                <p className="text-xs text-muted-foreground pl-5">{item.proof}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Scaling Targets with Timeline */}
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground text-sm flex items-center gap-2">
            <Target className="h-4 w-4 text-accent" />
            Scaling Targets (With Funding)
          </h4>

          {/* Circooler.Solutions Targets */}
          <div className="bg-card rounded-lg p-2.5 border border-accent/30">
            <div className="flex items-center gap-2 mb-2">
              <img src={circoolerLogo} alt="Circooler" className="h-4" />
              <span className="text-xs font-medium text-foreground">Direct Impact Targets</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-accent/5 rounded p-2 text-center">
                <p className="text-xs font-bold text-accent">Q4 2026</p>
                <p className="text-sm font-bold text-foreground">31,094kg</p>
                <p className="text-[8px] text-muted-foreground">First year target</p>
              </div>
              <div className="bg-accent/5 rounded p-2 text-center">
                <p className="text-xs font-bold text-accent">2030</p>
                <p className="text-sm font-bold text-foreground">177,450kg</p>
                <p className="text-[8px] text-muted-foreground">Annual capacity</p>
              </div>
            </div>
            <div className="mt-2 text-center">
              <p className="text-[9px] text-muted-foreground">
                <strong>Current capacity:</strong> 1,000kg/month (volunteer-powered) | 
                <strong className="text-accent"> Funding unlocks:</strong> legal setup, equipment, HACCP certification
              </p>
            </div>
          </div>

          {/* Trace.Market Targets */}
          <div className="bg-card rounded-lg p-2.5 border border-primary/30">
            <div className="flex items-center gap-2 mb-2">
              <img src={traceMarketLogo} alt="Trace.Market" className="h-4" />
              <span className="text-xs font-medium text-foreground">Indirect Impact Targets</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-primary/5 rounded p-2 text-center">
                <p className="text-xs font-bold text-primary">2027</p>
                <p className="text-sm font-bold text-foreground">500+</p>
                <p className="text-[8px] text-muted-foreground">Companies using DPPs</p>
              </div>
              <div className="bg-primary/5 rounded p-2 text-center">
                <p className="text-xs font-bold text-primary">2030</p>
                <p className="text-sm font-bold text-foreground">5,000+</p>
                <p className="text-[8px] text-muted-foreground">Ecosystem companies</p>
              </div>
            </div>
            <div className="mt-2 text-center">
              <p className="text-[9px] text-muted-foreground">
                Each transparent company influences thousands of consumers and supply chain partners
              </p>
            </div>
          </div>
        </div>
      </div>
    </PitchSlide>
  );
};

export default ImpactSlide;
