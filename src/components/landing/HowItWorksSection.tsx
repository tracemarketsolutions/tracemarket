import { MessageSquare, BarChart3, FileText, QrCode, ArrowDown, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Chat with AI",
    description: "Tell us about your product through simple conversation.",
    details: "Share your production and supply chain data through our conversational AI. Upload PDFs, describe your processes, or import from spreadsheets.",
    color: "primary",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Get Your LCA",
    description: "We calculate your product's environmental footprint.",
    details: "Life-Cycle Assessment (LCA) measures your product's environmental impact from raw materials to disposal — including CO₂, water, and energy use.",
    tooltip: "LCA = Life-Cycle Assessment: A scientific method to measure the total environmental impact of a product throughout its entire lifecycle.",
    color: "accent",
  },
  {
    number: "03",
    icon: FileText,
    title: "Receive EPD",
    description: "Get your certified environmental report.",
    details: "Environmental Product Declaration (EPD) is a standardized document following ISO 14025 that communicates your product's environmental performance.",
    tooltip: "EPD = Environmental Product Declaration: An official, ISO-certified document summarizing your LCA results.",
    color: "info",
  },
  {
    number: "04",
    icon: QrCode,
    title: "Publish DPP",
    description: "Share your transparency with the world.",
    details: "Your Digital Product Passport (DPP) is a scannable, interactive page showing your complete supply chain with maps, metrics, and verified data.",
    tooltip: "DPP = Digital Product Passport: An interactive, blockchain-verified page that consumers can scan to see everything about your product.",
    color: "success",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            From Data to <span className="gradient-text">Digital Passport</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            Four simple steps to transform your supply chain transparency.
          </p>
          <p className="text-sm text-muted-foreground/80">
            No technical knowledge required — our AI guides you through everything.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {/* Connector Line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/40 to-transparent z-0" />
              )}
              
              {/* Card */}
              <div className="relative z-10 bg-card rounded-2xl p-6 lg:p-8 border border-border/50 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-display font-bold text-primary/20">
                    {step.number}
                  </span>
                  <div className="flex items-center gap-2">
                    {step.tooltip && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button className="p-1 rounded-full hover:bg-muted transition-colors">
                              <HelpCircle className="h-4 w-4 text-muted-foreground" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p className="text-sm">{step.tooltip}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-foreground font-medium text-sm mb-2">
                  {step.description}
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {step.details}
                </p>
              </div>

              {/* Mobile Connector */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-4 lg:hidden">
                  <ArrowDown className="h-6 w-6 text-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
