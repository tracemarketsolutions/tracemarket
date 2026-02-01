import { ReactNode } from "react";
import traceMarketLogo from "@/assets/tracemarket-logo.png";

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
      {/* Logo & Slide Number */}
      <div className="flex items-center justify-between mb-6">
        <img src={traceMarketLogo} alt="Trace.Market" className="h-8 md:h-10" />
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
    </div>
  );
};

export default PitchSlide;
