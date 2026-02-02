import { Quote, MapPin, Recycle, ArrowRight, Lightbulb } from "lucide-react";
import PitchSlide from "../PitchSlide";
import plantsoulProduct from "@/assets/products/circooler-product-1.jpg";
import circoolerProduct2 from "@/assets/products/circooler-product-2.jpg";
import circoolerProduct3 from "@/assets/products/circooler-product-3.jpg";
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
      title="Background Story: Why?"
      subtitle="The Journey That Changed Everything"
      variant="default"
    >
      <div className="grid md:grid-cols-2 gap-4 h-full">
        {/* Left Column - Story */}
        <div className="space-y-3 text-xs md:text-sm">
          {/* Plantsoul Partnership */}
          <div className="flex gap-2">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="h-3 w-3 text-primary" />
            </div>
            <div>
              <p className="text-foreground leading-relaxed">
                Our first partner was <strong className="text-primary">Plantsoul.hu</strong>, a plant-based nut milk producer. When we manually researched their supply chain for our traceability tool, we discovered not even the owner knew where all ingredients came from. Almonds claimed to arrive from <strong>Spain</strong> actually came from <strong className="text-accent">California</strong>.
              </p>
            </div>
          </div>

          {/* AI Tool Development */}
          <div className="flex gap-2">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
              <Lightbulb className="h-3 w-3 text-accent" />
            </div>
            <div>
              <p className="text-foreground leading-relaxed">
                The first step was making supply chains visible. Since then, we developed an <strong className="text-primary">AI tool</strong> so every company can do this easily themselves.
              </p>
            </div>
          </div>

          {/* Circooler.Solutions */}
          <div className="flex gap-2">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-info/10 flex items-center justify-center">
              <Recycle className="h-3 w-3 text-info" />
            </div>
            <div>
              <p className="text-foreground leading-relaxed">
                We realized Plantsoul was discarding <strong className="text-primary">20-30 kg of nut-cream byproducts weekly</strong>. That's when we extended our digital solution (Trace.Market) with physical solutions: <strong className="text-accent">Circooler.Solutions</strong> - a circular solution accelerator for planning, advising, and implementing solutions.
              </p>
            </div>
          </div>

          {/* Scaling */}
          <div className="flex gap-2">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
              <ArrowRight className="h-3 w-3 text-primary" />
            </div>
            <div>
              <p className="text-foreground leading-relaxed">
                We found fruit sources at <strong>MATE Elvira Major</strong> (20-30K kg/year) and <strong>Nagybani Piac</strong> (tons daily). These sources alone represent <span className="font-semibold text-primary">390,000 kg of food loss yearly</span>.
              </p>
            </div>
          </div>

          {/* Impact */}
          <div className="bg-primary/5 rounded-lg p-2 border border-primary/20">
            <p className="text-foreground font-medium text-center">
              We've saved <span className="text-primary font-bold">2,200 kg</span> of food, created nutritious snacks, and donated meals to hundreds - validating our concept.
            </p>
          </div>
        </div>

        {/* Right Column - Images & Quote */}
        <div className="flex flex-col gap-3">
          {/* Product Images */}
          <div className="flex gap-2 justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-primary/30">
              <img src={plantsoulProduct} alt="Circooler Product" className="w-full h-full object-cover" />
            </div>
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-accent/30">
              <img src={circoolerProduct2} alt="Circooler Product" className="w-full h-full object-cover" />
            </div>
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-info/30">
              <img src={circoolerProduct3} alt="Circooler Product" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Quote */}
          <div className="bg-secondary/50 rounded-lg p-3 relative flex-1">
            <Quote className="absolute top-2 left-2 h-4 w-4 text-primary/30" />
            <p className="text-foreground font-medium text-center text-xs md:text-sm pl-4 italic">
              "The problem is the lack of interoperability, cooperation and appreciation - Waste is actually resource in another process if information is properly shared and cooperation is fostered. All the solutions are invented, we just have to implement them."
            </p>
          </div>

          {/* Attribution */}
          <div className="flex items-center gap-3 justify-center">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/30">
              <img src={gergelyPhoto} alt="Gergely Áron Dzsida" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">Gergely Áron Dzsida</p>
              <p className="text-xs text-muted-foreground">Co-Founder, Trace.Market & Circooler.Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </PitchSlide>
  );
};

export default BackgroundSlide;
