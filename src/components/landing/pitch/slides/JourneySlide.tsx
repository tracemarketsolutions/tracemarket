import { CheckCircle2, Target, Rocket, AlertCircle } from "lucide-react";
import PitchSlide from "../PitchSlide";
import traceMarketLogo from "@/assets/tracemarket-logo.png";
import circoolerLogo from "@/assets/circooler-logo-new.png";

interface JourneySlideProps {
  slideNumber: number;
  totalSlides: number;
}

const JourneySlide = ({ slideNumber, totalSlides }: JourneySlideProps) => {
  const milestones = [
    {
      year: "2021-23",
      title: "Research",
      items: ["Documentary work in 30+ countries", "Identified pattern: solutions exist, connections don't"],
      completed: true,
    },
    {
      year: "2024",
      title: "Foundation",
      items: ["BeVisioneers Fellowship", "Built MVP with university partners", "First client tests"],
      completed: true,
    },
    {
      year: "2025",
      title: "Validation",
      items: ["2,200kg food diverted", "AI tools developed & tested", "Paying clients onboarded"],
      completed: true,
    },
    {
      year: "2026",
      title: "Scale",
      items: ["Legal foundation (Q1)", "Equipment & HACCP (Q2-Q3)", "Marketplace launch (Q4)"],
      completed: false,
    },
  ];

  const risks = [
    { risk: "Scaling without resources", mitigation: "BeVisioneers funding + proven bootstrap capability" },
    { risk: "Resistance to transparency", mitigation: "EU mandate creates urgency; consumer demand growing" },
    { risk: "Technology adoption", mitigation: "AI simplifies onboarding; user-friendly interfaces" },
  ];

  return (
    <PitchSlide
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Our Journey & Roadmap"
      subtitle="From Research to Ready-to-Scale"
      variant="default"
    >
      <div className="space-y-3 h-full">
        {/* Timeline */}
        <div className="grid grid-cols-4 gap-2">
          {milestones.map((milestone) => (
            <div
              key={milestone.year}
              className={`bg-card rounded-lg p-2.5 border ${
                milestone.completed ? "border-primary/30" : "border-accent/30"
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                {milestone.completed ? (
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                ) : (
                  <Target className="h-3.5 w-3.5 text-accent" />
                )}
                <span className={`text-sm font-bold ${milestone.completed ? "text-primary" : "text-accent"}`}>
                  {milestone.year}
                </span>
              </div>
              <h4 className="font-semibold text-foreground text-xs mb-1">{milestone.title}</h4>
              <ul className="space-y-0.5">
                {milestone.items.map((item) => (
                  <li key={item} className="text-[9px] text-muted-foreground flex items-start gap-1">
                    <span className="text-primary">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 2027-2030 Vision */}
        <div className="bg-secondary/50 rounded-lg p-2.5">
          <div className="flex items-center gap-2 mb-2">
            <Rocket className="h-4 w-4 text-primary" />
            <h4 className="font-semibold text-foreground text-sm">2027-2030 Vision</h4>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <img src={traceMarketLogo} alt="TM" className="h-4 mt-0.5" />
              <div>
                <p className="text-xs font-medium text-foreground">Trace.Market</p>
                <p className="text-[10px] text-muted-foreground">5,000+ companies using DPPs • EU expansion • €15B market share</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <img src={circoolerLogo} alt="CS" className="h-4 mt-0.5" />
              <div>
                <p className="text-xs font-medium text-foreground">Circooler.Solutions</p>
                <p className="text-[10px] text-muted-foreground">177,450kg/year recovery • Network of circular partners • Regional hubs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Risks & Mitigation */}
        <div className="bg-card rounded-lg p-2.5 border border-border/50">
          <h4 className="font-semibold text-foreground mb-1.5 text-xs flex items-center gap-1.5">
            <AlertCircle className="h-3.5 w-3.5 text-destructive" />
            Key Risks & Mitigation
          </h4>
          <div className="grid grid-cols-3 gap-2">
            {risks.map((item) => (
              <div key={item.risk} className="bg-secondary/30 rounded p-1.5">
                <p className="text-[10px] font-medium text-foreground">{item.risk}</p>
                <p className="text-[9px] text-muted-foreground mt-0.5">{item.mitigation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PitchSlide>
  );
};

export default JourneySlide;
