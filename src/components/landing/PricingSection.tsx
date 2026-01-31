import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, ArrowRight, ShoppingBag, Building2, Globe } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Simple & Transparent Pricing</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Free for <span className="gradient-text">Everyone</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            LCA and DPP generation is completely free. Choose how you want to publish your product passports.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          
          {/* Consumer Card */}
          <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border/50 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  For Consumers
                </h3>
                <p className="text-sm text-muted-foreground">Browse & Buy</p>
              </div>
            </div>

            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-display font-bold text-foreground">Free</span>
              <span className="text-sm text-muted-foreground">/ forever</span>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Access our marketplace of transparent products at the same prices as company websites.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">Browse all verified products</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">View complete supply chains</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">Compare ecological footprints</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">Interactive origin maps</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">Same prices as company sites</span>
              </li>
            </ul>

            <Link to="/#marketplace">
              <Button className="w-full gap-2" variant="outline">
                Browse Marketplace
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Marketplace Path - Highlighted */}
          <div className="relative bg-card rounded-2xl p-6 lg:p-8 border border-primary shadow-lg shadow-primary/10 scale-[1.02]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="px-4 py-1.5 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                Recommended
              </span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Marketplace Listing
                </h3>
                <p className="text-sm text-muted-foreground">For Businesses</p>
              </div>
            </div>

            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-display font-bold text-foreground">Free</span>
              <span className="text-sm text-muted-foreground">+ 1% on referred sales</span>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Create LCA & DPP for free. We list your product on our marketplace and only charge commission on sales we generate.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">Free LCA calculation</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">Free DPP generation</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">Listed on our marketplace</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">Embeddable DPP widgets</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">Tracked referral links</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">1% commission only on our referrals</span>
              </li>
            </ul>

            <Link to="/chat">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Start Free Assessment
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Embed Path */}
          <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border/50 hover:border-accent/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/10">
                <Building2 className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Private Embed
                </h3>
                <p className="text-sm text-muted-foreground">For Businesses</p>
              </div>
            </div>

            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-display font-bold text-foreground">€1</span>
              <span className="text-sm text-muted-foreground">/ product / month</span>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Prefer not to be listed on our marketplace? Embed DPP on your own website with no commission fees.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">Free LCA calculation</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">Free DPP generation</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">Embed on your own website</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">No marketplace listing</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">No commission on sales</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">Custom branding options</span>
              </li>
            </ul>

            <Link to="/chat">
              <Button className="w-full gap-2" variant="outline">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* FAQ Note */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All plans include AI-powered data collection, blockchain verification, and EU ESPR compliance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
