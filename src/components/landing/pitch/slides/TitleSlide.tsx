import { Target } from "lucide-react";
import traceMarketLogo from "@/assets/tracemarket-logo.png";
import circoolerLogo from "@/assets/circooler-logo.png";
import bevisioneersLogo from "@/assets/bevisioneers-logo.png";

interface TitleSlideProps {
  slideNumber: number;
  totalSlides: number;
}

const TitleSlide = ({ slideNumber, totalSlides }: TitleSlideProps) => {
  return (
    <div className="flex-shrink-0 w-[90vw] md:w-[85vw] lg:w-[80vw] max-w-5xl h-[600px] md:h-[700px] rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/20 via-background to-accent/10 p-6 md:p-10 flex flex-col snap-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-accent blur-3xl" />
      </div>

      {/* Logos & Slide Number */}
      <div className="flex items-center justify-between mb-auto relative z-10">
        <div className="flex items-center gap-3">
          <img src={traceMarketLogo} alt="Trace.Market" className="h-8 md:h-10" />
          <div className="w-px h-8 bg-border/50" />
          <img src={circoolerLogo} alt="Circooler.Solutions" className="h-6 md:h-8" />
        </div>
        <span className="text-sm text-muted-foreground font-medium">
          {slideNumber} / {totalSlides}
        </span>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <Target className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">RE:LAUNCH PITCH</span>
        </div>
        
        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
          Trace.Market & <span className="text-accent">Circooler.Solutions</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
          Tracing Markets to Accelerate Transition to <span className="text-primary font-semibold">Circular Solutions</span>
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between relative z-10 mt-auto pt-4">
        <p className="text-sm text-muted-foreground">February 2026 | BeVisioneers Fellowship</p>
        <img 
          src={bevisioneersLogo} 
          alt="BeVisioneers - The Mercedes-Benz Fellowship" 
          className="h-6 md:h-8 opacity-70"
        />
      </div>
    </div>
  );
};

export default TitleSlide;
