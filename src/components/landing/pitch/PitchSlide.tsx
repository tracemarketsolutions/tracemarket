import { ReactNode } from "react";
import traceMarketLogo from "@/assets/tracemarket-logo.png";
import circoolerLogo from "@/assets/circooler-logo-new.png";
import bevisioneersLogo from "@/assets/bevisioneers-logo.png";

interface PitchSlideProps {
  slideNumber: number;
  totalSlides: number;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  variant?: "default" | "accent" | "dark" | "gradient";
}

const PitchSlide = ({
  slideNumber,
  totalSlides,
  title,
  subtitle,
  children,
  variant = "default",
}: PitchSlideProps) => {
  const variantStyles = {
    default: "bg-card border-border/50",
    accent: "bg-primary/5 border-primary/20",
    dark: "bg-secondary border-border/50",
    gradient: "bg-gradient-to-br from-primary/10 via-accent/5 to-info/10 border-primary/20",
  };

  return (
    <div
      className={`flex-shrink-0 w-[90vw] md:w-[85vw] lg:w-[80vw] max-w-5xl aspect-video rounded-2xl border ${variantStyles[variant]} p-4 md:p-6 lg:p-8 flex flex-col snap-center relative overflow-hidden`}
    >
      {/* Header Row - Logos */}
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <div className="flex items-center gap-2 md:gap-3">
          <img src={traceMarketLogo} alt="Trace.Market" className="h-5 md:h-7" />
          <div className="w-px h-5 md:h-6 bg-border/50" />
          <img src={circoolerLogo} alt="Circooler.Solutions" className="h-5 md:h-7" />
        </div>
        
        {/* BeVisioneers Logo - Top Right */}
        <img 
          src={bevisioneersLogo} 
          alt="BeVisioneers - The Mercedes-Benz Fellowship" 
          className="h-5 md:h-7"
        />
      </div>

      {/* Title Section */}
      {title && (
        <div className="mb-2 md:mb-3">
          <h2 className="font-display text-lg md:text-2xl lg:text-3xl font-bold text-foreground">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground text-sm md:text-base mt-1">{subtitle}</p>
          )}
        </div>
      )}

      {/* Content - No scrolling */}
      <div className="flex-1 overflow-hidden">{children}</div>

      {/* Slide Number - Bottom Right */}
      <div className="absolute bottom-3 right-4 md:bottom-4 md:right-6">
        <span className="text-xs md:text-sm text-muted-foreground font-medium bg-background/80 px-2 py-1 rounded">
          {slideNumber} / {totalSlides}
        </span>
      </div>
    </div>
  );
};

export default PitchSlide;
