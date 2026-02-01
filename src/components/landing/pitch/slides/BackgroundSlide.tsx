import { Quote } from "lucide-react";
import PitchSlide from "../PitchSlide";

interface BackgroundSlideProps {
  slideNumber: number;
  totalSlides: number;
}

const BackgroundSlide = ({ slideNumber, totalSlides }: BackgroundSlideProps) => {
  return (
    <PitchSlide
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Background Story: Why?"
      subtitle="The Journey That Changed Everything"
      variant="default"
    >
      <div className="space-y-6">
        {/* Quote */}
        <div className="bg-primary/5 rounded-xl p-6 border border-primary/20 relative">
          <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/20" />
          <p className="text-lg md:text-xl text-foreground italic pl-8 leading-relaxed">
            "Imagine buying a product and having no idea where it came from, what's really in it, or what happens to the waste created in making it."
          </p>
        </div>

        {/* Story */}
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            As a filmmaker and sustainability activist, I watched small producers struggle to prove their sustainability claims. I saw tons of perfectly good byproducts thrown away because no one knew what to do with them.
          </p>
          
          <p className="text-foreground leading-relaxed">
            The tipping point came when I met a plant-based milk producer throwing away{" "}
            <strong className="text-primary">20kg of nutritious almond cream every week</strong>—not because it was bad, but because they had no system to trace it, value it, or transform it into something new.
          </p>

          <div className="bg-secondary/50 rounded-lg p-4 mt-4">
            <p className="text-foreground font-semibold text-center text-lg">
              "We don't have a waste problem. We have a <span className="text-primary">traceability</span> and <span className="text-accent">connection</span> problem."
            </p>
          </div>
        </div>

        {/* Attribution */}
        <div className="flex items-center gap-3 pt-2">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
            GD
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">Gergely Aron Dzsida</p>
            <p className="text-xs text-muted-foreground">Co-Founder, Trace.Market</p>
          </div>
        </div>
      </div>
    </PitchSlide>
  );
};

export default BackgroundSlide;
