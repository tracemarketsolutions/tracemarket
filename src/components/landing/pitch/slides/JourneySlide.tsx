import { CheckCircle2, Target, Rocket } from "lucide-react";
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
      title: "Research & Awakening",
      items: ["Global documentary work", "Solution research"],
      completed: true,
    },
    {
      year: "2024",
      title: "Building Foundation",
      items: ["BeVisioneers Fellowship", "University partnerships", "MVP Published"],
      completed: true,
    },
    {
      year: "2025",
      title: "Proving Impact",
      items: ["1,200kg food diverted", "Product lines developed", "Pilot partners"],
      completed: true,
    },
    {
      year: "2026",
      title: "Breakthrough",
      items: ["1,000kg/month capacity", "2,200kg total saved", "Platform launch"],
      completed: false,
    },
  ];

  const roadmap = [
    { phase: "Q1 2026", tm: "Legal foundation", cs: "BeVisioneers €20K" },
    { phase: "Q2-Q3", tm: "Platform development", cs: "Equipment, HACCP" },
    { phase: "Q4", tm: "Marketplace launch", cs: "31,094kg target" },
    { phase: "2027-30", tm: "5,000+ companies", cs: "177,450kg/year" },
  ];

  return (
    <PitchSlide
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Our Journey + Roadmap"
      subtitle="Integrated Progress - Both Projects Together"
      variant="default"
    >
      <div className="space-y-2 h-full">
        {/* Timeline */}
        <div className="grid grid-cols-4 gap-1">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`bg-card rounded p-2 border ${
                milestone.completed ? "border-primary/30" : "border-accent/30"
              }`}
            >
              <div className="flex items-center gap-1 mb-0.5">
                {milestone.completed ? (
                  <CheckCircle2 className="h-2.5 w-2.5 text-primary" />
                ) : (
                  <Target className="h-2.5 w-2.5 text-accent" />
                )}
                <span className="text-[10px] font-bold text-primary">{milestone.year}</span>
              </div>
              <h4 className="font-semibold text-foreground text-[10px] mb-0.5">{milestone.title}</h4>
              <ul className="space-y-0">
                {milestone.items.map((item) => (
                  <li key={item} className="text-[8px] text-muted-foreground">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Roadmap with both projects */}
        <div className="bg-secondary/50 rounded-lg p-2">
          <h4 className="font-semibold text-foreground mb-1.5 text-xs flex items-center gap-1">
            <Rocket className="h-3 w-3 text-primary" />
            Roadmap Forward
          </h4>
          <div className="grid grid-cols-4 gap-1">
            {roadmap.map((item) => (
              <div key={item.phase} className="bg-card rounded p-1.5 border border-border/50">
                <p className="text-[10px] font-bold text-primary mb-0.5">{item.phase}</p>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1">
                    <img src={traceMarketLogo} alt="TM" className="h-2" />
                    <p className="text-[8px] text-muted-foreground">{item.tm}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={circoolerLogo} alt="CS" className="h-2" />
                    <p className="text-[8px] text-muted-foreground">{item.cs}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What We've Proven */}
        <div className="bg-primary/5 rounded-lg p-2 border border-primary/20">
          <p className="text-[10px] text-foreground text-center">
            <span className="font-semibold">What We've Proven:</span> Market demand exists • Solutions work at scale • Team delivers without resources • Exponential growth demonstrated
          </p>
        </div>
      </div>
    </PitchSlide>
  );
};

export default JourneySlide;
