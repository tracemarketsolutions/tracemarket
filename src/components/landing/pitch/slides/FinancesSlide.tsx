import { PiggyBank, TrendingUp, BarChart3 } from "lucide-react";
import PitchSlide from "../PitchSlide";

interface FinancesSlideProps {
  slideNumber: number;
  totalSlides: number;
}

const FinancesSlide = ({ slideNumber, totalSlides }: FinancesSlideProps) => {
  const fundAllocation = [
    { percentage: "40%", amount: "€8K", label: "Legal & Compliance", detail: "Company, HACCP, certs" },
    { percentage: "30%", amount: "€6K", label: "Infrastructure", detail: "Equipment, storage" },
    { percentage: "20%", amount: "€4K", label: "Operations", detail: "Materials, packaging" },
    { percentage: "10%", amount: "€2K", label: "Partnerships", detail: "R&D, outreach" },
  ];

  const projections = [
    { year: "2026", revenue: "€20,400", recovery: "31,094kg" },
    { year: "2027", revenue: "€30,469", recovery: "90,855kg" },
    { year: "2028", revenue: "€40,527", recovery: "113,568kg" },
    { year: "2030", revenue: "€63,324", recovery: "177,450kg" },
  ];

  const impactROI = [
    { metric: "31,094kg diverted", roi: "€0.64/kg" },
    { metric: "3,638 meals donated", roi: "€5.50/meal" },
    { metric: "102% financial ROI", roi: "Year 1" },
    { metric: "50+ supply chains", roi: "€400/business" },
  ];

  return (
    <PitchSlide
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Finances"
      subtitle="Investment in Justice - €20K BeVisioneers Pioneer Project"
      variant="dark"
    >
      <div className="space-y-2 h-full">
        {/* Funding Need */}
        <div className="bg-primary/10 rounded-lg p-2 border border-primary/30">
          <div className="flex items-center gap-2 mb-1.5">
            <PiggyBank className="h-4 w-4 text-primary" />
            <h4 className="font-semibold text-foreground text-xs">Use of €20K BeVisioneers Funds:</h4>
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {fundAllocation.map((item) => (
              <div key={item.label} className="bg-card rounded p-1.5 text-center border border-border/50">
                <p className="text-sm font-bold text-primary">{item.percentage}</p>
                <p className="text-[9px] font-medium text-foreground">{item.label}</p>
                <p className="text-[7px] text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projections */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="h-3 w-3 text-accent" />
            <h4 className="font-semibold text-foreground text-xs">Financial Projections</h4>
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {projections.map((proj) => (
              <div key={proj.year} className="bg-card rounded p-1.5 text-center border border-border/50">
                <p className="text-[10px] font-bold text-primary">{proj.year}</p>
                <p className="text-xs font-bold text-foreground">{proj.revenue}</p>
                <p className="text-[8px] text-muted-foreground">{proj.recovery}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact ROI */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-2 border border-primary/20">
          <div className="flex items-center gap-2 mb-1">
            <BarChart3 className="h-3 w-3 text-primary" />
            <h4 className="font-semibold text-foreground text-xs">Impact ROI (€20K Investment)</h4>
          </div>
          <div className="grid grid-cols-4 gap-1.5">
            {impactROI.map((item) => (
              <div key={item.metric} className="text-center">
                <p className="text-[9px] font-medium text-foreground">{item.metric}</p>
                <p className="text-[9px] text-primary font-bold">{item.roi}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Funding */}
        <div className="bg-secondary/50 rounded-lg p-1.5">
          <p className="text-[9px] text-muted-foreground text-center">
            <span className="font-semibold text-foreground">Future Funding:</span> Phase 2: €250K (Platform) → Phase 3: €500K (EU Expansion) → Phase 4: €1M+ (Global)
          </p>
        </div>
      </div>
    </PitchSlide>
  );
};

export default FinancesSlide;
