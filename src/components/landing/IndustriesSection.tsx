import { 
  UtensilsCrossed, 
  Shirt, 
  Smartphone, 
  Factory, 
  Pill, 
  Home,
  Sparkles
} from "lucide-react";

const industries = [
  {
    icon: UtensilsCrossed,
    name: "Food & Beverage",
    description: "Nutritional facts, ingredients, allergens, and farm-to-table traceability",
    examples: ["Ingredients origin", "Organic certifications", "Nutritional breakdown"],
  },
  {
    icon: Shirt,
    name: "Fashion & Textiles",
    description: "Materials composition, manufacturing processes, and ethical sourcing",
    examples: ["Fabric composition", "Dye processes", "Fair trade compliance"],
  },
  {
    icon: Smartphone,
    name: "Electronics",
    description: "Component materials, recyclability scores, and supply chain mapping",
    examples: ["Rare earth minerals", "E-waste metrics", "Repairability index"],
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Raw materials, energy consumption, and production footprint",
    examples: ["Steel sources", "Energy efficiency", "Waste reduction"],
  },
  {
    icon: Pill,
    name: "Pharmaceuticals",
    description: "Active ingredients, packaging materials, and cold chain verification",
    examples: ["API origins", "Packaging recyclability", "Temperature logs"],
  },
  {
    icon: Home,
    name: "Construction",
    description: "Building materials, embodied carbon, and sustainability certifications",
    examples: ["Concrete mix", "Timber sourcing", "LEED compliance"],
  },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">All Industries</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tailored for <span className="gradient-text">Every Sector</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI adapts to your industry, asking the right questions and providing sector-specific environmental metrics.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group relative bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <industry.icon className="h-7 w-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {industry.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {industry.description}
              </p>

              {/* Example Tags */}
              <div className="flex flex-wrap gap-2">
                {industry.examples.map((example) => (
                  <span
                    key={example}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                  >
                    {example}
                  </span>
                ))}
              </div>

              {/* Hover Accent */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
