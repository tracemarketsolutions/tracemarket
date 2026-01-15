import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Shield, Globe, Link2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Leaf className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                EU Digital Product Passport Ready
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Transform Your Supply Chain Into{" "}
                <span className="gradient-text">Transparency</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-lg">
                A decentralized database of immutable statements about products. 
                Web3-powered transparency for quality verification, locality proof, 
                and greenwashing prevention.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/chat">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground gap-2 shadow-lg shadow-primary/25">
                  Start Free Assessment
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a 
                href="https://package.trace.market/?tokenId=0x7ed749dc218f6015412158123097d6314cd9998f22903a5487d73f36d7045061#/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                  <Link2 className="h-4 w-4" />
                  View Demo DPP
                </Button>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-5 w-5 text-primary" />
                <span>Blockchain Verified</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="h-5 w-5 text-primary" />
                <span>Web3 Transparent</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Leaf className="h-5 w-5 text-primary" />
                <span>NFT Ownership</span>
              </div>
            </div>
          </div>

          {/* Right Content - Live Blockchain DPP Embed */}
          <div className="relative animate-fade-in flex justify-center" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Phone-like frame with live DPP */}
              <div className="relative w-[260px] sm:w-[280px] h-[480px] sm:h-[520px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 border-4 border-foreground/10 bg-card">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground/10 rounded-b-xl z-10" />
                
                <iframe 
                  src="https://package.trace.market/?tokenId=0x7ed749dc218f6015412158123097d6314cd9998f22903a5487d73f36d7045061#/"
                  className="w-full h-full border-0"
                  title="Digital Product Passport Demo"
                  loading="lazy"
                />
              </div>

              {/* Floating stat badges */}
              <div className="absolute -top-3 -left-6 sm:-left-12 bg-card rounded-xl shadow-lg p-3 border border-border/50 animate-float">
                <span className="text-xs text-muted-foreground block">Carbon Footprint</span>
                <p className="text-sm font-bold text-primary">0.19 kg CO₂e</p>
              </div>
              
              <div className="absolute -bottom-3 -right-6 sm:-right-12 bg-card rounded-xl shadow-lg p-3 border border-border/50 animate-float" style={{ animationDelay: '1.5s' }}>
                <span className="text-xs text-muted-foreground block">Water Usage</span>
                <p className="text-sm font-bold text-info">369.95 L</p>
              </div>

              <div className="absolute top-1/2 -right-4 sm:-right-10 -translate-y-1/2 bg-card rounded-xl shadow-lg p-3 border border-border/50 animate-float" style={{ animationDelay: '0.75s' }}>
                <span className="text-xs text-muted-foreground block">Recyclability</span>
                <p className="text-sm font-bold text-accent">85%</p>
              </div>
            </div>
            
            {/* Background glow effects */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
