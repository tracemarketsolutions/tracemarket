import { CheckCircle2, Target, Rocket } from "lucide-react";
import PitchSlide from "../PitchSlide";

interface JourneySlideProps {
  slideNumber: number;
  totalSlides: number;
}

const JourneySlide = ({ slideNumber, totalSlides }: JourneySlideProps) => {
  const milestones = [
    {
      year: "2021-23",
      title: "Research & Awakening",
      items: ["Global documentary work", "Mauritania experience", "Solution research"],
      completed: true,
    },
    {
      year: "2024",
      title: "Building Foundation",
      items: ["BeVisioneers Fellowship (May)", "University partnerships (Sept)", "MVP Published (Dec)"],
      completed: true,
    },
    {
      year: "2025",
      title: "Proving Impact",
      items: ["1,200kg food waste diverted", "Multiple product lines developed", "5-10 pilot partners"],
      completed: true,
    },
    {
      year: "2026",
      title: "Breakthrough & Scale",
      items: ["1,000kg/month capacity", "2,200kg total saved", "Platform launch with funding"],
      completed: false,
    },
  ];

  const roadmap = [
    { phase: "Q1 2026", focus: "Legal foundation, BeVisioneers €20K application" },
    { phase: "Q2-Q3", focus: "Equipment acquisition, HACCP compliance, platform development" },
    { phase: "Q4", focus: "31,094kg target, marketplace launch, 50+ partners" },
    { phase: "2027-30", focus: "177,450kg/year, EU expansion, 500+ businesses" },
  ];

  return (
    <PitchSlide
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Our Journey + Roadmap"
      subtitle="From Anger to Action — Transforming Outrage into Impact"
      variant="default"
    >
      <div className="space-y-4">
        {/* Timeline */}
        <div className="grid grid-cols-4 gap-2">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`relative bg-card rounded-lg p-3 border ${
                milestone.completed ? "border-primary/30" : "border-accent/30"
              }`}
            >
              {index < milestones.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-primary/40 to-transparent" />
              )}
              <div className="flex items-center gap-1 mb-1">
                {milestone.completed ? (
                  <CheckCircle2 className="h-3 w-3 text-primary" />
                ) : (
                  <Target className="h-3 w-3 text-accent" />
                )}
                <span className="text-xs font-bold text-primary">{milestone.year}</span>
              </div>
              <h4 className="font-semibold text-foreground text-xs mb-1">{milestone.title}</h4>
              <ul className="space-y-0.5">
                {milestone.items.map((item) => (
                  <li key={item} className="text-[10px] text-muted-foreground">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Roadmap */}
        <div className="bg-secondary/50 rounded-lg p-3">
          <h4 className="font-semibold text-foreground mb-2 text-sm flex items-center gap-2">
            <Rocket className="h-4 w-4 text-primary" />
            Roadmap Forward
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {roadmap.map((item) => (
              <div key={item.phase} className="bg-card rounded-lg p-2 border border-border/50">
                <p className="text-xs font-bold text-primary">{item.phase}</p>
                <p className="text-[10px] text-muted-foreground">{item.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What We've Proven */}
        <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
          <p className="text-xs text-foreground">
            <span className="font-semibold">What We've Proven:</span> Market demand exists • Our solution works at scale • Team delivers without resources • Exponential growth potential demonstrated
          </p>
        </div>
      </div>
    </PitchSlide>
  );
};

export default JourneySlide;
