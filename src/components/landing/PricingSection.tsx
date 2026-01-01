import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "€0",
    period: "forever",
    description: "Generate unlimited assessments, LCAs, and EPDs. Perfect for testing and exploration.",
    features: [
      "Unlimited AI conversations",
      "Unlimited LCA calculations",
      "EPD generation & PDF download",
      "DPP preview (with watermark)",
      "Basic support",
    ],
    cta: "Start Free",
    ctaLink: "/chat",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "€49",
    period: "per product / month",
    description: "Publish your DPPs, remove watermarks, and unlock advanced features for your products.",
    features: [
      "Everything in Free",
      "Remove Trace.Market watermark",
      "Custom company branding",
      "Embeddable DPP widgets",
      "QR code generation",
      "Analytics dashboard",
      "Multi-language DPP pages",
      "Priority support",
    ],
    cta: "Get Started",
    ctaLink: "/chat",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "For organizations with multiple products and advanced compliance requirements.",
    features: [
      "Everything in Pro",
      "Unlimited products",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "White-label options",
    ],
    cta: "Contact Sales",
    ctaLink: "#contact",
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Simple Pricing</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Free to Create, <span className="gradient-text">Pay to Publish</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Generate unlimited assessments at no cost. Only pay when you're ready to publish and share your DPP with the world.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-card rounded-2xl p-6 lg:p-8 border transition-all duration-300 ${
                tier.highlighted
                  ? "border-primary shadow-lg shadow-primary/10 scale-[1.02]"
                  : "border-border/50 hover:border-primary/30"
              }`}
            >
              {/* Popular Badge */}
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-bold text-foreground">
                    {tier.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    /{tier.period}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {tier.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link to={tier.ctaLink}>
                <Button
                  className={`w-full gap-2 ${
                    tier.highlighted
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : ""
                  }`}
                  variant={tier.highlighted ? "default" : "outline"}
                >
                  {tier.cta}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
