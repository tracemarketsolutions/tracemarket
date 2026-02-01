import { AlertTriangle, Users, ShoppingCart, Building2, Leaf } from "lucide-react";
import PitchSlide from "../PitchSlide";

interface ProblemSlideProps {
  slideNumber: number;
  totalSlides: number;
}

const ProblemSlide = ({ slideNumber, totalSlides }: ProblemSlideProps) => {
  const problemStats = [
    { value: "€143B", label: "Products wasted yearly due to lack of traceability" },
    { value: "78%", label: "Consumers want sustainability data" },
    { value: "23%", label: "Actually trust current product labels" },
  ];

  const affectedGroups = [
    { icon: Building2, group: "Producers", issue: "Sustainable practices go unrecognized" },
    { icon: ShoppingCart, group: "Consumers", issue: "Make decisions based on marketing, not reality" },
    { icon: Users, group: "Communities", issue: "Remain trapped in extractive relationships" },
    { icon: Leaf, group: "Environment", issue: "Bears cost while solutions remain disconnected" },
  ];

  return (
    <PitchSlide
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="The Problem"
      subtitle="Systemic Inequality Through Opacity"
      variant="default"
    >
      <div className="space-y-6">
        {/* Problem Statement */}
        <p className="text-muted-foreground">
          Modern supply chains aren't just opaque—they're designed to hide inequality. When consumers can't see how products are made, exploitation becomes invisible.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          {problemStats.map((stat) => (
            <div key={stat.label} className="bg-destructive/5 border border-destructive/20 rounded-lg p-3 text-center">
              <AlertTriangle className="h-5 w-5 text-destructive mx-auto mb-1" />
              <p className="text-xl md:text-2xl font-display font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Affected Groups */}
        <div className="grid grid-cols-2 gap-3">
          {affectedGroups.map((item) => (
            <div key={item.group} className="flex items-start gap-2 bg-secondary/50 rounded-lg p-3">
              <item.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground text-sm">{item.group}</p>
                <p className="text-xs text-muted-foreground">{item.issue}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Crisis Points */}
        <div className="bg-card border border-border rounded-lg p-4">
          <h4 className="font-semibold text-foreground mb-2 text-sm">The Interconnected Crisis:</h4>
          <ul className="space-y-1 text-xs text-muted-foreground">
            <li>• 828 million people face hunger while 1.3 billion tons of food is wasted annually</li>
            <li>• Communities lack resources while valuable byproducts are discarded</li>
            <li>• Consumers demand sustainability but can't verify claims</li>
          </ul>
        </div>
      </div>
    </PitchSlide>
  );
};

export default ProblemSlide;
