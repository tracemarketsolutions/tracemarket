import { Building2, Users, Leaf, DollarSign, CheckCircle2 } from "lucide-react";
import PitchSlide from "../PitchSlide";

interface ValueAddSlideProps {
  slideNumber: number;
  totalSlides: number;
}

const ValueAddSlide = ({ slideNumber, totalSlides }: ValueAddSlideProps) => {
  const benefitGroups = [
    {
      icon: Building2,
      title: "For Producers",
      color: "text-primary",
      bgColor: "bg-primary/10",
      benefits: [
        "Prove values with immutable data",
        "Fair pricing through transparency",
        "EU DPP compliance (2027)",
        "Transform waste to revenue",
      ],
    },
    {
      icon: Users,
      title: "For Consumers",
      color: "text-info",
      bgColor: "bg-info/10",
      benefits: [
        "Complete product transparency",
        "Verified sustainability claims",
        "Align purchases with values",
        "Support circular products",
      ],
    },
    {
      icon: Leaf,
      title: "For Environment",
      color: "text-accent",
      bgColor: "bg-accent/10",
      benefits: [
        "Measurable waste reduction",
        "Carbon footprint optimization",
        "Circular acceleration",
        "Regenerative practices",
      ],
    },
    {
      icon: DollarSign,
      title: "For Economy",
      color: "text-primary",
      bgColor: "bg-primary/10",
      benefits: [
        "Unlock €1.8T circular potential",
        "Trust infrastructure",
        "Innovation incentives",
        "Systemic resilience",
      ],
    },
  ];

  return (
    <PitchSlide
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Value Add / Key Benefits"
      subtitle="Justice Through Transparency"
      variant="default"
    >
      <div className="space-y-2 h-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {benefitGroups.map((group) => (
            <div key={group.title} className="bg-card rounded-lg border border-border/50 p-2">
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className={`p-1 rounded-full ${group.bgColor}`}>
                  <group.icon className={`h-3 w-3 ${group.color}`} />
                </div>
                <h4 className="font-semibold text-foreground text-[10px]">{group.title}</h4>
              </div>
              <ul className="space-y-0.5">
                {group.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-1 text-[9px] text-muted-foreground">
                    <CheckCircle2 className={`h-2 w-2 ${group.color} shrink-0 mt-0.5`} />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-primary/5 rounded-lg p-2 text-center border border-primary/20">
            <p className="text-base font-bold text-primary">€1.8T</p>
            <p className="text-[9px] text-muted-foreground">Circular Economy Potential</p>
          </div>
          <div className="bg-accent/5 rounded-lg p-2 text-center border border-accent/20">
            <p className="text-base font-bold text-accent">10,000+</p>
            <p className="text-[9px] text-muted-foreground">SMEs Need This Solution</p>
          </div>
          <div className="bg-info/5 rounded-lg p-2 text-center border border-info/20">
            <p className="text-base font-bold text-info">2027</p>
            <p className="text-[9px] text-muted-foreground">EU DPP Mandatory</p>
          </div>
        </div>
      </div>
    </PitchSlide>
  );
};

export default ValueAddSlide;
