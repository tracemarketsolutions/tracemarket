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
        "Prove impact with immutable data",
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
      color: "text-warning",
      bgColor: "bg-warning/10",
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
      <div className="grid grid-cols-2 gap-3">
        {benefitGroups.map((group) => (
          <div key={group.title} className="bg-card rounded-lg border border-border/50 p-3">
            <div className="flex items-center gap-2 mb-2">
              <div className={`p-1.5 rounded-lg ${group.bgColor}`}>
                <group.icon className={`h-4 w-4 ${group.color}`} />
              </div>
              <h4 className="font-semibold text-foreground text-sm">{group.title}</h4>
            </div>
            <ul className="space-y-1">
              {group.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                  <CheckCircle2 className={`h-3 w-3 ${group.color} shrink-0 mt-0.5`} />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PitchSlide>
  );
};

export default ValueAddSlide;
