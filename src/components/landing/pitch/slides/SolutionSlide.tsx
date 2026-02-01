import { Globe, Recycle, CheckCircle2 } from "lucide-react";
import PitchSlide from "../PitchSlide";

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
      <div className="space-y-4">
        {/* Mission Statement */}
        <p className="text-sm text-muted-foreground italic border-l-2 border-primary pl-3">
          We rebuild economic systems to be <span className="text-primary font-medium">fair and transparent</span> by making supply chains visible and waste streams valuable.
        </p>

        {/* Two Platforms */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Trace.Market */}
          <div className="bg-card rounded-xl border border-primary/30 p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Trace.Market</h4>
                <p className="text-xs text-muted-foreground">The Transparency Engine</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Makes supply chains visible. Helps companies see their processes, measure impact, prove their values.
            </p>
            <ul className="space-y-1.5">
              {[
                "Blockchain-verified DPPs",
                "LCA impact measurement",
                "3D supply chain visualization",
                "Marketplace integration",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-foreground">
                  <CheckCircle2 className="h-3 w-3 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Circooler */}
          <div className="bg-card rounded-xl border border-accent/30 p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-accent/10">
                <Recycle className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Circooler.Solutions</h4>
                <p className="text-xs text-muted-foreground">Circular Transformation</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Concrete implementation of circular economy principles. We identify, plan, and execute waste-to-value solutions.
            </p>
            <ul className="space-y-1.5">
              {[
                "Waste stream analysis",
                "R&D partnerships",
                "Implementation support",
                "B2B waste matching",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-foreground">
                  <CheckCircle2 className="h-3 w-3 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Integration Power */}
        <div className="bg-secondary/50 rounded-lg p-3 text-center">
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">Integration Power:</span> Every circular solution gets complete traceability through DPPs, creating verified stories of transformation.
          </p>
        </div>
      </div>
    </PitchSlide>
  );
};

export default SolutionSlide;
