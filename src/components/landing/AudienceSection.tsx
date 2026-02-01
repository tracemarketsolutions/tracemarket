import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ShoppingBag, 
  Building2, 
  Search, 
  Leaf, 
  MapPin, 
  BarChart3, 
  MessageSquare, 
  FileCheck, 
  Globe, 
  ArrowRight 
} from "lucide-react";

const AudienceSection = () => {
  return (
    <section id="audience" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built for <span className="gradient-text">Everyone</span> in the Supply Chain
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're a conscious consumer or a forward-thinking business, 
            Trace.Market brings transparency to your fingertips.
          </p>
        </div>

        {/* Two Audience Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Consumer Card */}
          <div className="group relative bg-card rounded-2xl p-8 lg:p-10 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-info/10 flex items-center justify-center mb-6">
              <ShoppingBag className="h-7 w-7 text-info" />
            </div>

            {/* Content */}
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">
              For Consumers
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Discover products with verified supply chains and make informed, sustainable choices.
            </p>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Search className="h-5 w-5 text-info mt-0.5 shrink-0" />
                <span className="text-muted-foreground">Explore products with verified supply chains</span>
              </li>
              <li className="flex items-start gap-3">
                <Leaf className="h-5 w-5 text-info mt-0.5 shrink-0" />
                <span className="text-muted-foreground">See real environmental footprints (CO₂, water, energy)</span>
              </li>
              <li className="flex items-start gap-3">
                <BarChart3 className="h-5 w-5 text-info mt-0.5 shrink-0" />
                <span className="text-muted-foreground">Compare products by sustainability metrics</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-info mt-0.5 shrink-0" />
                <span className="text-muted-foreground">Trace ingredients back to their source on the map</span>
              </li>
            </ul>

            {/* CTA */}
            <a href="https://browse.trace.market/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="group-hover:bg-info group-hover:text-info-foreground group-hover:border-info transition-colors gap-2">
                Browse Marketplace
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>

            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-info/5 rounded-full blur-3xl -z-10" />
          </div>

          {/* Business Card */}
          <div className="group relative bg-card rounded-2xl p-8 lg:p-10 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Building2 className="h-7 w-7 text-primary" />
            </div>

            {/* Content */}
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-3">
              For Businesses
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              Prove or improve your values with blockchain-verified data.
            </p>

            {/* Two paths */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 text-center">
                <p className="text-xs font-semibold text-accent">Prove It</p>
                <p className="text-[10px] text-muted-foreground mt-1">Verify your claims</p>
              </div>
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 text-center">
                <p className="text-xs font-semibold text-primary">Improve It</p>
                <p className="text-[10px] text-muted-foreground mt-1">Find opportunities</p>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="text-foreground font-medium">AI-powered data collection</span>
                  <p className="text-xs text-muted-foreground">Chat naturally, we extract the data</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <BarChart3 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="text-foreground font-medium">Automatic LCA calculation</span>
                  <p className="text-xs text-muted-foreground">Life-Cycle Assessment = your product's total environmental footprint</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FileCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="text-foreground font-medium">EU-compliant DPP</span>
                  <p className="text-xs text-muted-foreground">Digital Product Passport = your product's complete story in one link</p>
                </div>
              </li>
            </ul>

            {/* CTA */}
            <Link to="/chat">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Create Your DPP Free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
