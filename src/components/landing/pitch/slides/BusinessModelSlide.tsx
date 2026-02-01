import { Server, Handshake, Target, TrendingUp } from "lucide-react";
import PitchSlide from "../PitchSlide";

interface BusinessModelSlideProps {
  slideNumber: number;
  totalSlides: number;
}

const BusinessModelSlide = ({ slideNumber, totalSlides }: BusinessModelSlideProps) => {
  return (
    <PitchSlide
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Business Model"
      subtitle="Sustainable Change at Scale"
      variant="default"
    >
      <div className="space-y-4">
        {/* Tech & Partnerships */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-secondary/50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Server className="h-4 w-4 text-primary" />
              <h4 className="font-semibold text-foreground text-sm">Technology Stack</h4>
            </div>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li>• Hedera Hashgraph blockchain</li>
              <li>• IPFS decentralized storage</li>
              <li>• LCA impact analytics</li>
              <li>• User-friendly interface</li>
            </ul>
          </div>
          <div className="bg-secondary/50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Handshake className="h-4 w-4 text-accent" />
              <h4 className="font-semibold text-foreground text-sm">Partnerships</h4>
            </div>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li>• Universities (R&D)</li>
              <li>• Producer cooperatives</li>
              <li>• Certification bodies</li>
              <li>• Impact investors</li>
            </ul>
          </div>
        </div>

        {/* Pricing */}
        <div>
          <h4 className="font-semibold text-foreground mb-2 text-sm flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" />
            Pricing Model
          </h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
              <p className="font-medium text-foreground text-sm mb-2">Trace.Market</p>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>Starter: €50/mo (50 DPPs)</li>
                <li>Pro: €200/mo (500 DPPs)</li>
                <li>Enterprise: €500/mo (unlimited)</li>
                <li>Marketplace: 5-10% commission</li>
              </ul>
            </div>
            <div className="bg-accent/5 rounded-lg p-3 border border-accent/20">
              <p className="font-medium text-foreground text-sm mb-2">Circooler.Solutions</p>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>Consulting: €2K-10K/project</li>
                <li>Platform: €100-300/mo</li>
                <li>Implementation: 10-20% share</li>
                <li>Recipe licensing: 5-15%</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Market Opportunity */}
        <div className="bg-card rounded-lg border border-border p-3">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            <h4 className="font-semibold text-foreground text-sm">Market Opportunity</h4>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <p className="text-lg font-bold text-foreground">€15B</p>
              <p className="text-xs text-muted-foreground">EU DPP Market 2030</p>
            </div>
            <div>
              <p className="text-lg font-bold text-foreground">€1.8T</p>
              <p className="text-xs text-muted-foreground">Circular Economy</p>
            </div>
            <div>
              <p className="text-lg font-bold text-foreground">10K+</p>
              <p className="text-xs text-muted-foreground">Target Producers</p>
            </div>
          </div>
        </div>
      </div>
    </PitchSlide>
  );
};

export default BusinessModelSlide;
