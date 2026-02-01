import { Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import traceMarketLogo from "@/assets/tracemarket-logo.png";
import traceMarketQR from "@/assets/tracemarket-qr.png";
import circoolerQR from "@/assets/circooler-qr.png";

interface QuestionsSlideProps {
  slideNumber: number;
  totalSlides: number;
}

const QuestionsSlide = ({ slideNumber, totalSlides }: QuestionsSlideProps) => {
  const lookingFor = [
    { category: "Funding", items: ["BeVisioneers €20K", "Impact investors €250K", "EU grants"] },
    { category: "Strategic Partners", items: ["Retailers", "Certification bodies", "Universities"] },
    { category: "Collaborators", items: ["Policy makers", "Tech partners", "Movement leaders"] },
  ];

  return (
    <div className="flex-shrink-0 w-[90vw] md:w-[85vw] lg:w-[80vw] max-w-5xl h-[600px] md:h-[700px] rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-accent/10 p-6 md:p-10 flex flex-col snap-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-accent blur-3xl" />
      </div>

      {/* Logo & Slide Number */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <img src={traceMarketLogo} alt="Trace.Market" className="h-8 md:h-10" />
        <span className="text-sm text-muted-foreground font-medium">
          {slideNumber} / {totalSlides}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 relative z-10 flex flex-col">
        <div className="text-center mb-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            Questions + Feedback
          </h2>
          <p className="text-lg text-primary font-semibold">
            We've Proven That Justice Is Possible—Now Let's Make It Inevitable.
          </p>
        </div>

        <div className="flex-1 grid md:grid-cols-2 gap-6">
          {/* Looking For */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground">We're Looking For:</h4>
            {lookingFor.map((group) => (
              <div key={group.category} className="bg-card/50 rounded-lg p-3 border border-border/50">
                <p className="font-medium text-foreground text-sm mb-1">{group.category}</p>
                <ul className="space-y-0.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* QR Codes & Contact */}
          <div className="flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <img src={traceMarketQR} alt="Trace.Market QR" className="w-24 h-24 mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">trace.market</p>
              </div>
              <div className="text-center">
                <img src={circoolerQR} alt="Circooler QR" className="w-24 h-24 mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">circooler.solutions</p>
              </div>
            </div>

            <div className="space-y-2">
              <a href="mailto:info@trace.market">
                <Button className="w-full gap-2" variant="default">
                  <Mail className="h-4 w-4" />
                  info@trace.market
                </Button>
              </a>
              <div className="flex gap-2">
                <a href="https://trace.market" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="outline" className="w-full gap-1 text-xs">
                    <ExternalLink className="h-3 w-3" />
                    trace.market
                  </Button>
                </a>
                <a href="https://circooler.solutions" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="outline" className="w-full gap-1 text-xs">
                    <ExternalLink className="h-3 w-3" />
                    circooler.solutions
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-4 pt-4 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            The Question Isn't Whether Change Is Possible—We've Proven It Is.
          </p>
          <p className="text-sm font-semibold text-foreground">
            The Question Is: Will You Join Us in Making It Inevitable?
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionsSlide;
