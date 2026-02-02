import { Target } from "lucide-react";
import traceMarketLogo from "@/assets/tracemarket-logo.png";
import circoolerLogo from "@/assets/circooler-logo-new.png";
import bevisioneersLogo from "@/assets/bevisioneers-logo.png";

interface TitleSlideProps {
  slideNumber: number;
  totalSlides: number;
}

const TitleSlide = ({ slideNumber, totalSlides }: TitleSlideProps) => {
  return (
    <div className="flex-shrink-0 w-[90vw] md:w-[85vw] lg:w-[80vw] max-w-5xl aspect-video rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/20 via-background to-accent/10 p-4 md:p-6 lg:p-8 flex flex-col snap-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-accent blur-3xl" />
      </div>

      {/* Header - Logos */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2 md:gap-3">
          <img src={traceMarketLogo} alt="Trace.Market" className="h-6 md:h-8" />
          <div className="w-px h-6 bg-border/50" />
          <img src={circoolerLogo} alt="Circooler.Solutions" className="h-6 md:h-8" />
        </div>
        <img 
          src={bevisioneersLogo} 
          alt="BeVisioneers - The Mercedes-Benz Fellowship" 
          className="h-6 md:h-8"
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
          <Target className="h-3 w-3 md:h-4 md:w-4 text-primary" />
          <span className="text-xs md:text-sm font-medium text-primary">RE:LAUNCH PITCH</span>
        </div>
        
        <h1 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
          Trace.Market & <span className="text-accent">Circooler.Solutions</span>
        </h1>
        
        <p className="text-base md:text-xl text-muted-foreground max-w-3xl">
          Tracing Markets to Accelerate Transition to <span className="text-primary font-semibold">Circular Solutions</span>
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between relative z-10">
        <p className="text-xs md:text-sm text-muted-foreground">February 2026 | BeVisioneers Fellowship</p>
        <span className="text-xs md:text-sm text-muted-foreground font-medium bg-background/80 px-2 py-1 rounded">
          {slideNumber} / {totalSlides}
        </span>
      </div>
    </div>
  );
};

export default TitleSlide;
