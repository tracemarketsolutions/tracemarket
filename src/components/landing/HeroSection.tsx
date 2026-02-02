import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Building2, Leaf, Globe, Shield, MapPin, BarChart3 } from "lucide-react";

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
        {/* Main headline - centered */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Leaf className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              EU Digital Product Passport Platform
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            Transparency for <span className="gradient-text">Everyone</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connecting conscious consumers with transparent businesses
          </p>
        </div>

        {/* Three-column layout */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Left - For Consumers */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 lg:p-8 space-y-6 animate-slide-up hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-primary/10">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">For Consumers</p>
                <h2 className="text-xl font-bold text-foreground">Discover Products</h2>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              Browse transparent products where all data is verified and stored on the blockchain.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Trace ingredient origins on an interactive map</span>
              </li>
              <li className="flex items-start gap-3">
                <BarChart3 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Compare ecological footprints across products</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Verified, blockchain-secured data</span>
              </li>
            </ul>

            <a href="https://browse.trace.market/" target="_blank" rel="noopener noreferrer" className="block">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Browse Marketplace
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* Center - Live DPP Embed */}
          <div className="relative flex justify-center items-center animate-fade-in order-first lg:order-none" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-[220px] sm:w-[240px] h-[400px] sm:h-[440px] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20 border-4 border-foreground/10 bg-card">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground/10 rounded-b-xl z-10" />
                
                {/* Iframe with zoom */}
                <div className="w-full h-full overflow-hidden">
                  <iframe 
                    src="https://package.trace.market/?tokenId=0x7ed749dc218f6015412158123097d6314cd9998f22903a5487d73f36d7045061#/"
                    className="border-0 origin-top-left"
                    style={{
                      width: '400px',
                      height: '800px',
                      transform: 'scale(0.55)',
                      transformOrigin: 'top left',
                    }}
                    title="Digital Product Passport Demo"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Floating stat badges - matching real DPP values */}
              <div className="absolute -top-2 -left-4 sm:-left-8 bg-card rounded-lg shadow-lg px-2.5 py-1.5 border border-border/50 animate-float">
                <span className="text-[10px] text-muted-foreground block">CO₂e</span>
                <p className="text-xs font-bold text-primary">0.15 kg</p>
              </div>
              
              <div className="absolute -bottom-2 -right-4 sm:-right-8 bg-card rounded-lg shadow-lg px-2.5 py-1.5 border border-border/50 animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-[10px] text-muted-foreground block">Water</span>
                <p className="text-xs font-bold text-info">284.60 L</p>
              </div>

              <div className="absolute top-1/2 -right-3 sm:-right-6 -translate-y-1/2 bg-card rounded-lg shadow-lg px-2.5 py-1.5 border border-border/50 animate-float" style={{ animationDelay: '0.5s' }}>
                <span className="text-[10px] text-muted-foreground block">♻️</span>
                <p className="text-xs font-bold text-accent">85%</p>
              </div>
            </div>
            
            {/* Background glow */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Right - For Businesses */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 lg:p-8 space-y-6 animate-slide-up hover:border-accent/30 transition-colors" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-accent/10">
                <Building2 className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">For Businesses</p>
                <h2 className="text-xl font-bold text-foreground">Prove or Improve</h2>
              </div>
            </div>
            
            {/* Two options */}
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-accent/5 border border-accent/20">
                <p className="text-sm font-semibold text-accent mb-1">✓ Prove Your Values</p>
                <p className="text-xs text-muted-foreground">Already sustainable? Get blockchain-verified proof.</p>
              </div>
              <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-sm font-semibold text-primary mb-1">↗ Improve Your Impact</p>
                <p className="text-xs text-muted-foreground">Identify where to reduce your footprint.</p>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Create Your DPP</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">Digital Product Passport</span> - Your product's complete environmental story in one scannable link.
              </p>
            </div>

            <Link to="/chat" className="block">
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                Create DPP Free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Trust badges - centered below */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="h-5 w-5 text-primary" />
            <span>Swarm Blockchain Verified</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Globe className="h-5 w-5 text-primary" />
            <span>Web3 Transparent</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Leaf className="h-5 w-5 text-primary" />
            <span>EU ESPR Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
