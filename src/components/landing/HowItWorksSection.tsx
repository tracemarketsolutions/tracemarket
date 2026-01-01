import { MessageSquare, BarChart3, FileText, QrCode, ArrowDown } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Chat with AI",
    description: "Share your production and supply chain data through our conversational AI. Upload PDFs, describe your processes, or import from spreadsheets.",
    color: "primary",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Generate LCA",
    description: "We calculate your Life-Cycle Assessment using open-source emission factors, validated by AI to ensure accuracy across all impact categories.",
    color: "accent",
  },
  {
    number: "03",
    icon: FileText,
    title: "Create EPD",
    description: "Receive your Environmental Product Declaration following ISO 14025 standards. Download as PDF in English plus your preferred language.",
    color: "info",
  },
  {
    number: "04",
    icon: QrCode,
    title: "Publish DPP",
    description: "Get your embeddable Digital Product Passport with interactive maps, detailed traceability, and multi-language support for global reach.",
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
          <p className="text-lg text-muted-foreground">
            Four simple steps to transform your supply chain transparency and build consumer trust.
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
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
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
