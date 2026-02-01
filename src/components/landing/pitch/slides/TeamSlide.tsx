import { User, Code, Cpu, Palette, Award, Handshake } from "lucide-react";
import PitchSlide from "../PitchSlide";

interface TeamSlideProps {
  slideNumber: number;
  totalSlides: number;
}

const TeamSlide = ({ slideNumber, totalSlides }: TeamSlideProps) => {
  const coreTeam = [
    {
      name: "Gergely Aron Dzsida",
      role: "Co-Founder",
      description: "Filmmaker & sustainability activist. 4+ years documenting global issues. BeVisioneers Fellow.",
      icon: User,
      color: "text-primary",
    },
    {
      name: "Bálint Drahota-Szabó",
      role: "Co-Founder",
      description: "Business development and strategic partnerships. Circular economy expertise.",
      icon: Handshake,
      color: "text-accent",
    },
    {
      name: "Szabolcs",
      role: "IT & Blockchain Specialist",
      description: "Hedera Hashgraph development. Platform architecture and decentralized systems.",
      icon: Cpu,
      color: "text-info",
    },
    {
      name: "Jim Montasir",
      role: "Frontend Developer",
      description: "User experience design. Building accessible and beautiful interfaces.",
      icon: Palette,
      color: "text-warning",
    },
  ];

  const ecosystem = [
    "BeVisioneers Fellowship community",
    "University R&D partnerships",
    "Hedera Hashgraph network",
    "Fair trade & sustainability certifications",
  ];

  return (
    <PitchSlide
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Founders / Team"
      subtitle="From Filmmaker to System Builder"
      variant="default"
    >
      <div className="space-y-4">
        {/* Core Team */}
        <div className="grid grid-cols-2 gap-3">
          {coreTeam.map((member) => (
            <div key={member.name} className="bg-card rounded-lg border border-border/50 p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className={`p-1.5 rounded-full bg-secondary ${member.color}`}>
                  <member.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{member.name}</p>
                  <p className="text-xs text-primary">{member.role}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Ecosystem */}
        <div className="bg-secondary/50 rounded-lg p-3">
          <h4 className="font-semibold text-foreground mb-2 text-sm flex items-center gap-2">
            <Award className="h-4 w-4 text-primary" />
            Ecosystem Partnerships
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {ecosystem.map((partner) => (
              <div key={partner} className="bg-card rounded-lg p-2 border border-border/50">
                <p className="text-xs text-muted-foreground">{partner}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
          <h4 className="font-semibold text-foreground mb-1 text-sm">What Makes This Team Different:</h4>
          <p className="text-xs text-muted-foreground">
            Mission-first approach • Proven resourcefulness (2,200kg without funding) • Cultural competency • Technical + emotional intelligence • Long-term commitment: This isn't a startup—it's a life mission.
          </p>
        </div>
      </div>
    </PitchSlide>
  );
};

export default TeamSlide;
