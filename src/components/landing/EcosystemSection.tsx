import { useState } from "react";
import { X, ZoomIn, Workflow, ArrowRight, Building2, ShoppingBag, Recycle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import ecosystemFlowchart from "@/assets/ecosystem-flowchart.png";

const EcosystemSection = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const pathways = [
    {
      icon: Building2,
      title: "Company Onboarding",
      description: "Companies start by providing supply chain data. Our AI calculates their ecological footprint and generates EU-compliant LCA and DPP documents.",
      color: "primary",
    },
    {
      icon: ShoppingBag,
      title: "DPP Usage Choice",
      description: "Choose your path: List on our marketplace for free (1% commission on referred sales) or embed on your own website (€1/product/month, no commission).",
      color: "accent",
    },
    {
      icon: Users,
      title: "Consumer Journey",
      description: "Consumers browse our marketplace, view transparent supply chains, compare ecological footprints, and make informed purchase decisions.",
      color: "info",
    },
    {
      icon: Recycle,
      title: "Circular Economy",
      description: "Increased transparency drives consumer awareness, enabling better sustainability choices and contributing to a more circular economy.",
      color: "primary",
    },
  ];

  return (
    <section id="ecosystem" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Workflow className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Ecosystem</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How <span className="gradient-text">Trace.Market</span> Works
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive ecosystem connecting businesses, consumers, and sustainability through transparent supply chains and blockchain-verified data.
          </p>
        </div>

        {/* Pathway Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pathways.map((pathway, index) => (
            <div
              key={pathway.title}
              className="bg-card rounded-2xl border border-border/50 p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className={`p-3 rounded-xl bg-${pathway.color}/10 w-fit mb-4`}>
                <pathway.icon className={`h-6 w-6 text-${pathway.color}`} />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-muted-foreground">STEP {index + 1}</span>
                <ArrowRight className="h-3 w-3 text-muted-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {pathway.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pathway.description}
              </p>
            </div>
          ))}
        </div>

        {/* Flowchart Image */}
        <div className="relative">
          <div 
            className="relative bg-card rounded-2xl border border-border/50 p-4 cursor-pointer group overflow-hidden"
            onClick={() => setIsZoomed(true)}
          >
            <img
              src={ecosystemFlowchart}
              alt="Trace.Market Ecosystem Flowchart showing the complete journey from company onboarding to consumer awareness"
              className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
            />
            
            {/* Zoom overlay */}
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300 flex items-center justify-center rounded-lg">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-card/90 backdrop-blur-sm px-4 py-2 rounded-full border border-border flex items-center gap-2">
                <ZoomIn className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Click to zoom</span>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-4">
            Complete ecosystem flowchart showing all pathways and integrations
          </p>
        </div>

        {/* Zoom Modal */}
        {isZoomed && (
          <div 
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsZoomed(false)}
          >
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-card border border-border hover:bg-muted transition-colors"
            >
              <X className="h-6 w-6 text-foreground" />
            </button>
            
            <div className="w-full h-full overflow-auto flex items-center justify-center">
              <img
                src={ecosystemFlowchart}
                alt="Trace.Market Ecosystem Flowchart - Full Size"
                className="max-w-none w-auto h-auto max-h-[90vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EcosystemSection;
