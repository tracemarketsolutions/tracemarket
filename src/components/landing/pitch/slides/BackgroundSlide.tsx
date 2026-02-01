import { Quote, Lightbulb, MapPin, Recycle, ArrowRight } from "lucide-react";
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
      <div className="space-y-5">
        {/* Opening Quote */}
        <div className="bg-primary/5 rounded-xl p-5 border border-primary/20 relative">
          <Quote className="absolute top-4 left-4 h-6 w-6 text-primary/30" />
          <p className="text-base md:text-lg text-foreground italic pl-6 leading-relaxed">
            "Imagine buying a product and having no idea where it came from, what's really in it, or what happens to the waste created in making it."
          </p>
        </div>

        {/* The Story */}
        <div className="space-y-4">
          {/* First Partnership */}
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm text-foreground leading-relaxed">
                Our first partner was <strong className="text-primary">Plantsoul.hu</strong>, an amazing plant-based nut milk producer. When we manually researched their supply chain for our traceability and DPP generation tool, we discovered something surprising: <span className="font-medium">not even the owner knew where all ingredients came from.</span>
              </p>
            </div>
          </div>

          {/* Discovery */}
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
              <Lightbulb className="h-4 w-4 text-accent" />
            </div>
            <div>
              <p className="text-sm text-foreground leading-relaxed">
                We found anomalies: almonds claimed to arrive from <strong>Spain to Hungary</strong> actually came all the way from <strong className="text-accent">California</strong>. The first step was making the supply chain visible. Since then, we've developed an AI tool so every company can do this easily themselves.
              </p>
            </div>
          </div>

          {/* Circular Solution */}
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-info/10 flex items-center justify-center">
              <Recycle className="h-4 w-4 text-info" />
            </div>
            <div>
              <p className="text-sm text-foreground leading-relaxed">
                We also realized they were throwing out <strong className="text-primary">20-30 kg of nut-cream byproducts weekly</strong>—not because it was bad, but because they lacked the energy, resources, and know-how to utilize it. That's when we extended our digital solution with <strong className="text-accent">Circooler.Solutions</strong>.
              </p>
            </div>
          </div>

          {/* Scaling */}
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <ArrowRight className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm text-foreground leading-relaxed">
                We started upcycling those byproducts with volunteer friends into granolas, biscuits, and nutritious food. We then found fruit sources at <strong>MATE Elvira Major</strong> (20-30K kg/year) and <strong>Nagybani piac</strong> (tons of daily loss) — <span className="font-semibold text-primary">390,000 kg of food loss yearly</span> waiting to be transformed.
              </p>
            </div>
          </div>
        </div>

        {/* Key Message */}
        <div className="bg-secondary/50 rounded-lg p-4">
          <p className="text-foreground font-semibold text-center text-sm md:text-base">
            "The problem is the lack of <span className="text-primary">interoperability</span> — Waste is actually <span className="text-accent">resource</span> in another process with properly shared information. We have all the solutions ready."
          </p>
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
