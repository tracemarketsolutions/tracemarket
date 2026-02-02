import { MessageSquare, Mail, Handshake, Heart } from "lucide-react";
import PitchSlide from "../PitchSlide";
import traceMarketQr from "@/assets/tracemarket-qr.png";
import circoolerQr from "@/assets/circooler-qr.png";

interface QuestionsSlideProps {
  slideNumber: number;
  totalSlides: number;
}

const QuestionsSlide = ({ slideNumber, totalSlides }: QuestionsSlideProps) => {
  const discussionPoints = [
    "How can transparency become the foundation for economic justice?",
    "What role can your organization play in making supply chains visible?",
    "How do we scale circular solutions from proof-of-concept to systematic change?",
  ];

  const partnerTypes = [
    { icon: Handshake, label: "Funding Partners", desc: "BeVisioneers, Impact Investors, EU Grants" },
    { icon: MessageSquare, label: "Strategic Partners", desc: "Retailers, Certifications, Universities" },
    { icon: Heart, label: "Mission-Aligned", desc: "Policy Makers, Media, Movement Leaders" },
  ];

  return (
    <PitchSlide
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Questions + Feedback"
      subtitle="Join the Movement for Transparency & Circularity"
      variant="gradient"
    >
      <div className="grid md:grid-cols-2 gap-2 h-full">
        {/* Left - Discussion & Partners */}
        <div className="space-y-2">
          <div className="bg-card rounded-lg p-2 border border-border/50">
            <h4 className="font-semibold text-foreground text-[10px] mb-1 flex items-center gap-1">
              <MessageSquare className="h-3 w-3 text-primary" />
              Let's Discuss:
            </h4>
            <ul className="space-y-0.5">
              {discussionPoints.map((point) => (
                <li key={point} className="text-[8px] text-muted-foreground">
                  • {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-1">
            <h4 className="font-semibold text-foreground text-[10px]">We're Looking For:</h4>
            {partnerTypes.map((partner) => (
              <div key={partner.label} className="flex items-center gap-1.5 bg-card rounded p-1.5 border border-border/50">
                <div className="p-1 rounded-full bg-primary/10">
                  <partner.icon className="h-2.5 w-2.5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-[9px]">{partner.label}</p>
                  <p className="text-[7px] text-muted-foreground">{partner.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Contact & QR */}
        <div className="space-y-2">
          <div className="bg-primary/10 rounded-lg p-2 border border-primary/20 text-center">
            <p className="text-[10px] font-semibold text-foreground mb-0.5">
              The question isn't whether change is possible - we've proven it is.
            </p>
            <p className="text-[9px] text-primary font-medium">
              Will you join us in making it inevitable?
            </p>
          </div>

          <div className="flex items-center gap-2 bg-card rounded p-1.5 border border-border/50">
            <Mail className="h-3 w-3 text-primary" />
            <div>
              <p className="text-[10px] font-medium text-foreground">info@trace.market</p>
              <p className="text-[8px] text-muted-foreground">www.trace.market | www.circooler.solutions</p>
            </div>
          </div>

          {/* QR Codes */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-card rounded-lg p-1.5 border border-primary/30 text-center">
              <img src={traceMarketQr} alt="Trace.Market QR" className="w-14 h-14 mx-auto mb-0.5" />
              <p className="text-[8px] font-medium text-foreground">Trace.Market</p>
            </div>
            <div className="bg-card rounded-lg p-1.5 border border-accent/30 text-center">
              <img src={circoolerQr} alt="Circooler.Solutions QR" className="w-14 h-14 mx-auto mb-0.5" />
              <p className="text-[8px] font-medium text-foreground">Circooler.Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </PitchSlide>
  );
};

export default QuestionsSlide;
