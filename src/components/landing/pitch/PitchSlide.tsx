import { ReactNode } from "react";
import traceMarketLogo from "@/assets/tracemarket-logo.png";
import circoolerLogo from "@/assets/circooler-logo.png";
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
      className={`flex-shrink-0 w-[90vw] md:w-[85vw] lg:w-[80vw] max-w-5xl h-[600px] md:h-[700px] rounded-2xl border ${variantStyles[variant]} p-6 md:p-10 flex flex-col snap-center relative overflow-hidden`}
    >
      {/* Logos & Slide Number */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img src={traceMarketLogo} alt="Trace.Market" className="h-6 md:h-8" />
          <div className="w-px h-6 bg-border/50" />
          <img src={circoolerLogo} alt="Circooler.Solutions" className="h-5 md:h-6" />
        </div>
        <span className="text-sm text-muted-foreground font-medium">
          {slideNumber} / {totalSlides}
        </span>
      </div>

      {/* Title Section */}
      {title && (
        <div className="mb-6">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground text-lg mt-2">{subtitle}</p>
          )}
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-y-auto pr-2">{children}</div>

      {/* BeVisioneers Logo - Bottom Right */}
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6">
        <img 
          src={bevisioneersLogo} 
          alt="BeVisioneers - The Mercedes-Benz Fellowship" 
          className="h-6 md:h-8 opacity-70"
        />
      </div>
    </div>
  );
};

export default PitchSlide;
