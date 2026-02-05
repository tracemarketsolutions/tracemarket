import { CheckCircle2, Heart, ArrowRight } from "lucide-react";
import PitchSlide from "../PitchSlide";
import traceMarketLogo from "@/assets/tracemarket-logo.png";
import circoolerLogo from "@/assets/circooler-logo-new.png";

interface SolutionSlideProps {
  slideNumber: number;
  totalSlides: number;
}

const SolutionSlide = ({ slideNumber, totalSlides }: SolutionSlideProps) => {
  return (
    <PitchSlide
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Our Solution"
      subtitle="Two Integrated Platforms for Transparency & Circularity"
      variant="gradient"
    >
      <div className="grid md:grid-cols-2 gap-4 h-full">
        {/* Trace.Market */}
        <div className="bg-card rounded-xl border border-primary/30 p-3 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <img src={traceMarketLogo} alt="Trace.Market" className="h-6" />
          </div>
          <p className="text-[11px] text-muted-foreground mb-2">
            <strong className="text-foreground">What it does:</strong> Makes supply chains visible through 
            AI-powered data collection and generates EU-compliant Digital Product Passports.
          </p>
          
          <div className="space-y-1.5 flex-1">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-foreground font-medium">AI Data Collection</p>
                <p className="text-[9px] text-muted-foreground">Scrapes websites, processes documents to build supply chain maps automatically</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-foreground font-medium">LCA Calculation</p>
                <p className="text-[9px] text-muted-foreground">Life-Cycle Assessment: measures CO2, water, and energy footprint</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-foreground font-medium">Interactive Supply Chain Maps</p>
                <p className="text-[9px] text-muted-foreground">Visualize ingredient origins and transport routes on 3D maps</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-foreground font-medium">Marketplace Integration</p>
                <p className="text-[9px] text-muted-foreground">List products or embed DPPs on your own website</p>
              </div>
            </div>
          </div>

          <div className="bg-primary/10 rounded p-1.5 mt-2 border border-primary/20">
            <p className="text-[9px] text-primary text-center font-medium">EU DPP Ready (2027 mandate)</p>
          </div>
        </div>

        {/* Circooler.Solutions */}
        <div className="bg-card rounded-xl border border-accent/30 p-3 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <img src={circoolerLogo} alt="Circooler.Solutions" className="h-6" />
          </div>
          <p className="text-[11px] text-muted-foreground mb-2">
            <strong className="text-foreground">What it does:</strong> Transforms waste streams into resources 
            through consulting, planning, and hands-on implementation of circular solutions.
          </p>
          
          <div className="space-y-1.5 flex-1">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-foreground font-medium">AI Waste Analysis</p>
                <p className="text-[9px] text-muted-foreground">Free tool identifies circular opportunities in your waste streams</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-foreground font-medium">Consulting & Planning</p>
                <p className="text-[9px] text-muted-foreground">Expert guidance on implementing circular solutions (€100-€10K)</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-foreground font-medium">Partner Network</p>
                <p className="text-[9px] text-muted-foreground">Connect with businesses who can use your byproducts</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-foreground font-medium">Implementation Support</p>
                <p className="text-[9px] text-muted-foreground">Hands-on help setting up circular processes</p>
              </div>
            </div>
          </div>

          <div className="bg-accent/10 rounded p-1.5 mt-2 border border-accent/20 flex items-center justify-center gap-2">
            <Heart className="h-3 w-3 text-accent" />
            <p className="text-[9px] text-accent font-medium">Buy-One-Give-One: Donate a meal per sale</p>
          </div>
        </div>

        {/* Integration Power */}
        <div className="md:col-span-2 bg-secondary/50 rounded-lg p-2.5 flex items-center justify-center gap-4">
          <span className="text-xs text-muted-foreground">Trace.Market</span>
          <ArrowRight className="h-4 w-4 text-primary" />
          <span className="text-xs text-foreground font-medium">Every circular solution gets a verified DPP</span>
          <ArrowRight className="h-4 w-4 text-accent" />
          <span className="text-xs text-muted-foreground">Circooler.Solutions</span>
        </div>
      </div>
    </PitchSlide>
  );
};

export default SolutionSlide;
