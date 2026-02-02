import { AlertTriangle, Eye, Users, ShoppingBag, Building2, Landmark, Leaf, TrendingUp } from "lucide-react";
import PitchSlide from "../PitchSlide";

interface ProblemSlideProps {
  slideNumber: number;
  totalSlides: number;
}

const ProblemSlide = ({ slideNumber, totalSlides }: ProblemSlideProps) => {
  const stats = [
    { value: "828M", label: "People face hunger", icon: Users },
    { value: "1.3B", label: "Tons food wasted/year", icon: AlertTriangle },
    { value: "78%", label: "Want sustainability data", icon: Eye },
    { value: "23%", label: "Trust current labels", icon: TrendingUp },
  ];

  const audiences = [
    { icon: Building2, label: "Sustainable Producers", desc: "Fighting for recognition" },
    { icon: ShoppingBag, label: "Conscious Consumers", desc: "Demanding transparency" },
    { icon: Leaf, label: "Circular Businesses", desc: "Seeking connections" },
    { icon: Landmark, label: "Impact Investors", desc: "Requiring proof" },
  ];

  return (
    <PitchSlide
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="The Problem: Systemic Inequality Through Opacity"
      subtitle="Target Audiences & Stakeholders"
      variant="accent"
    >
      <div className="grid md:grid-cols-2 gap-3 h-full">
        {/* Left - Problem Description */}
        <div className="space-y-2">
          <div className="bg-card rounded-lg p-2 border border-border/50">
            <p className="text-xs text-foreground leading-relaxed">
              Modern supply chains aren't just opaque - they're designed to hide inequality. When consumers can't see how products are made, <strong className="text-destructive">exploitation becomes invisible</strong>. When businesses can't trace waste streams, <strong className="text-accent">circular opportunities disappear</strong>.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-1.5">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card rounded-lg p-1.5 border border-border/50 text-center">
                <stat.icon className="h-3 w-3 text-primary mx-auto mb-0.5" />
                <p className="text-base font-bold text-foreground">{stat.value}</p>
                <p className="text-[9px] text-muted-foreground leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Key Message */}
          <div className="bg-destructive/10 rounded-lg p-2 border border-destructive/20">
            <p className="text-xs text-foreground text-center">
              <strong>€143 billion</strong> in products wasted annually due to lack of traceability
            </p>
          </div>
        </div>

        {/* Right - Target Audiences */}
        <div className="space-y-2">
          <h4 className="font-semibold text-foreground text-xs">Who We Serve:</h4>
          
          <div className="grid grid-cols-2 gap-1.5">
            {audiences.map((audience) => (
              <div key={audience.label} className="bg-card rounded-lg p-2 border border-border/50">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <div className="p-1 rounded-full bg-primary/10">
                    <audience.icon className="h-2.5 w-2.5 text-primary" />
                  </div>
                  <p className="font-medium text-foreground text-[10px]">{audience.label}</p>
                </div>
                <p className="text-[9px] text-muted-foreground">{audience.desc}</p>
              </div>
            ))}
          </div>

          {/* Consequences */}
          <div className="bg-secondary/50 rounded-lg p-2">
            <h5 className="font-semibold text-foreground text-[10px] mb-1">If Not Solved:</h5>
            <ul className="text-[9px] text-muted-foreground space-y-0.5">
              <li>• Continued systemic inequality disguised as "market forces"</li>
              <li>• Environmental collapse while solutions remain disconnected</li>
              <li>• Loss of €1.8 trillion circular economy opportunity</li>
              <li>• Failure to meet UN SDGs</li>
            </ul>
          </div>
        </div>
      </div>
    </PitchSlide>
  );
};

export default ProblemSlide;
