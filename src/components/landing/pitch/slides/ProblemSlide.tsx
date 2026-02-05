import { AlertTriangle, TrendingUp, Users, ShoppingBag, Building2 } from "lucide-react";
import PitchSlide from "../PitchSlide";

interface ProblemSlideProps {
  slideNumber: number;
  totalSlides: number;
}

const ProblemSlide = ({ slideNumber, totalSlides }: ProblemSlideProps) => {
  const problemStats = [
    { 
      value: "1.3B tons", 
      label: "Food wasted annually", 
      context: "Global - 1/3 of all food produced",
      source: "UN FAO 2024"
    },
    { 
      value: "828M", 
      label: "People facing hunger", 
      context: "While food rots in supply chains",
      source: "World Food Programme"
    },
    { 
      value: "78%", 
      label: "Consumers want transparency", 
      context: "EU consumer surveys show demand for product origin data",
      source: "EU Consumer Survey 2023"
    },
    { 
      value: "23%", 
      label: "Trust sustainability labels", 
      context: "Current certifications lack verification",
      source: "Consumer Trust Index"
    },
  ];

  const stakeholders = [
    { icon: Building2, label: "SME Producers", pain: "Can't prove their sustainable practices affordably" },
    { icon: ShoppingBag, label: "Conscious Consumers", pain: "Can't verify claims before buying" },
    { icon: TrendingUp, label: "Circular Businesses", pain: "Can't find partners for byproduct streams" },
  ];

  return (
    <PitchSlide
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="The Problem"
      subtitle="A Broken System of Invisible Supply Chains"
      variant="accent"
    >
      <div className="grid md:grid-cols-2 gap-4 h-full">
        {/* Left - The Problem Explained */}
        <div className="space-y-3">
          <div className="bg-card rounded-lg p-3 border border-destructive/30">
            <h4 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              The Core Issue
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Modern supply chains are <strong className="text-foreground">invisible by design</strong>. 
              When businesses can't see their own supply chains, they can't optimize them. 
              When consumers can't verify claims, trust erodes. When byproducts are invisible, 
              they become waste instead of resources.
            </p>
          </div>

          {/* Key Stats with Context */}
          <div className="grid grid-cols-2 gap-2">
            {problemStats.map((stat) => (
              <div key={stat.label} className="bg-card rounded-lg p-2 border border-border/50">
                <p className="text-lg font-bold text-primary">{stat.value}</p>
                <p className="text-[10px] font-medium text-foreground">{stat.label}</p>
                <p className="text-[8px] text-muted-foreground mt-0.5">{stat.context}</p>
                <p className="text-[7px] text-primary/60 italic">{stat.source}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Who Feels This Pain */}
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground text-sm flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            Who Feels This Pain?
          </h4>
          
          <div className="space-y-2">
            {stakeholders.map((item) => (
              <div key={item.label} className="bg-card rounded-lg p-2.5 border border-border/50">
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-1.5 rounded-full bg-primary/10">
                    <item.icon className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground text-sm">{item.label}</p>
                </div>
                <p className="text-xs text-muted-foreground pl-8">{item.pain}</p>
              </div>
            ))}
          </div>

          {/* The Opportunity */}
          <div className="bg-primary/5 rounded-lg p-2.5 border border-primary/20">
            <p className="text-xs text-foreground text-center">
              <strong className="text-primary">The opportunity:</strong> EU DPP regulations (mandatory 2027) 
              will require all products to have digital passports - but <strong>10,000+ SMEs</strong> lack affordable solutions.
            </p>
          </div>
        </div>
      </div>
    </PitchSlide>
  );
};

export default ProblemSlide;
