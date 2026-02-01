import { Target } from "lucide-react";
import PitchDeck from "./pitch/PitchDeck";

const PitchSection = () => {
  return (
    <section id="pitch" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Target className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">RE:LAUNCH Pitch Deck</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tracing Markets to Accelerate <span className="gradient-text">Circular Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Scroll through our investor pitch to learn about our mission, impact, and vision for a transparent, circular economy.
          </p>
        </div>
      </div>

      {/* Horizontal Scrolling Pitch Deck */}
      <PitchDeck />
    </section>
  );
};

export default PitchSection;
