import { Globe, Recycle, CheckCircle2, Heart } from "lucide-react";
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
      title="Introducing Our Solution"
      subtitle="Rebuilding the System for Justice & Transparency"
      variant="gradient"
    >
      <div className="grid md:grid-cols-2 gap-4 h-full">
        {/* Trace.Market */}
        <div className="bg-card rounded-xl border border-primary/30 p-3">
          <div className="flex items-center gap-2 mb-2">
            <img src={traceMarketLogo} alt="Trace.Market" className="h-6" />
            <div>
              <p className="text-xs text-muted-foreground">The Transparency Engine</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mb-2">
            Makes supply chains visible. Helps companies see their processes, measure impact, and prove their values.
          </p>
          <ul className="space-y-1">
            {[
              "Swarm blockchain-verified DPPs",
              "LCA impact measurement",
              "3D supply chain visualization",
              "Marketplace integration",
              "EU ESPR compliant",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs text-foreground">
                <CheckCircle2 className="h-3 w-3 text-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Circooler.Solutions */}
        <div className="bg-card rounded-xl border border-accent/30 p-3">
          <div className="flex items-center gap-2 mb-2">
            <img src={circoolerLogo} alt="Circooler.Solutions" className="h-6" />
            <div>
              <p className="text-xs text-muted-foreground">Circular Transformation</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mb-2">
            Concrete implementation of circular economy principles. We identify, plan, and execute waste-to-value solutions.
          </p>
          <ul className="space-y-1">
            {[
              "Waste stream analysis",
              "R&D partnerships",
              "Implementation support",
              "B2B waste matching",
              "Partner network connections",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs text-foreground">
                <CheckCircle2 className="h-3 w-3 text-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Buy One Give One */}
        <div className="md:col-span-2 bg-primary/5 rounded-lg p-2 border border-primary/20">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-primary" />
              <span className="font-semibold text-foreground text-sm">Buy-One-Give-One Model</span>
            </div>
            <p className="text-xs text-muted-foreground">
              With Circooler.Solutions, we donate a meal for every sale. Until now, we've donated everything as we're seeking funding for legal operations.
            </p>
          </div>
        </div>

        {/* Integration Power */}
        <div className="md:col-span-2 bg-secondary/50 rounded-lg p-2 text-center">
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">Integration Power:</span> Every circular solution gets complete traceability through DPPs, creating verified stories of transformation.
          </p>
        </div>
      </div>
    </PitchSlide>
  );
};

export default SolutionSlide;
