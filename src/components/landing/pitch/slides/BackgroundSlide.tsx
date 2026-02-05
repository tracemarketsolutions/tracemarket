import { Quote, Lightbulb, ArrowRight } from "lucide-react";
import PitchSlide from "../PitchSlide";
import gergelyPhoto from "@/assets/team/gergely-aron-dzsida.jpeg";

interface BackgroundSlideProps {
  slideNumber: number;
  totalSlides: number;
}

const BackgroundSlide = ({ slideNumber, totalSlides }: BackgroundSlideProps) => {
  return (
    <PitchSlide
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Why We Started"
      subtitle="A Personal Journey to Systemic Change"
      variant="default"
    >
      <div className="grid md:grid-cols-3 gap-4 h-full">
        {/* Left - The Personal Why */}
        <div className="md:col-span-2 space-y-3">
          {/* Opening Hook */}
          <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
            <div className="flex items-start gap-2">
              <Lightbulb className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-foreground leading-relaxed">
                  After years of documentary work across 30+ countries, I saw the same pattern everywhere: 
                  <strong className="text-primary"> communities had solutions, but lacked connections</strong>. 
                  Resources flowed one way while waste piled up the other.
                </p>
              </div>
            </div>
          </div>

          {/* The Discovery */}
          <div className="bg-card rounded-lg p-3 border border-border/50">
            <h4 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2">
              <ArrowRight className="h-3 w-3 text-primary" />
              The Moment of Clarity
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Working with a small nut-milk producer in Hungary, I discovered something shocking: 
              <strong className="text-foreground"> even the owner didn't know where ingredients actually came from</strong>. 
              Almonds labeled "Spanish" traced back to California. Nobody lied - the system just hid the truth.
            </p>
          </div>

          {/* What We Realized */}
          <div className="bg-accent/5 rounded-lg p-3 border border-accent/20">
            <h4 className="font-semibold text-foreground text-sm mb-2">What This Revealed:</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">1.</span>
                <span>Supply chains are invisible by design - even to those who run them</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">2.</span>
                <span>Without visibility, you can't improve what you can't measure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">3.</span>
                <span>The same producer was discarding 20-30kg of usable byproducts weekly</span>
              </li>
            </ul>
          </div>

          {/* The Insight */}
          <div className="bg-secondary/50 rounded-lg p-2.5">
            <p className="text-xs text-foreground text-center font-medium">
              <span className="text-primary">The insight:</span> We don't have a waste problem. 
              We have a <strong>visibility and connection problem</strong>.
            </p>
          </div>
        </div>

        {/* Right - Quote & Attribution */}
        <div className="flex flex-col justify-between">
          {/* Quote Card */}
          <div className="bg-card rounded-lg p-3 border border-primary/30 relative flex-1 flex flex-col justify-center">
            <Quote className="h-5 w-5 text-primary/30 absolute top-2 left-2" />
            <p className="text-xs text-foreground font-medium pl-4 italic leading-relaxed">
              "The problem is the lack of interoperability, cooperation and appreciation - Waste is actually resource in another process if information is properly shared and cooperation is fostered. All the solutions are invented, we just have to implement them."
            </p>
          </div>

          {/* Attribution */}
          <div className="flex items-center gap-3 mt-3 bg-card rounded-lg p-2 border border-border/50">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30 shrink-0">
              <img src={gergelyPhoto} alt="Gergely Áron Dzsida" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">Gergely Áron Dzsida</p>
              <p className="text-[10px] text-muted-foreground">Co-Founder, Trace.Market & Circooler.Solutions</p>
              <p className="text-[9px] text-primary">BeVisioneers Fellow</p>
            </div>
          </div>
        </div>
      </div>
    </PitchSlide>
  );
};

export default BackgroundSlide;
