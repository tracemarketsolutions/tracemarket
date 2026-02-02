import { Award } from "lucide-react";
import PitchSlide from "../PitchSlide";
import gergelyPhoto from "@/assets/team/gergely-aron-dzsida.jpeg";
import balintPhoto from "@/assets/team/balint-drahota-szabo.jpg";
import jimPhoto from "@/assets/team/jim-montasir.jpeg";
import szabolcsPhoto from "@/assets/team/szabolcs-varnai.jpg";
import arturPhoto from "@/assets/team/artur-szilagyi.jpg";
import markPhoto from "@/assets/team/mark-malhotra.jpg";

interface TeamSlideProps {
  slideNumber: number;
  totalSlides: number;
}

const TeamSlide = ({ slideNumber, totalSlides }: TeamSlideProps) => {
  const coreTeam = [
    {
      name: "Gergely Áron Dzsida",
      role: "Co-Founder",
      description: "Environmental activist, filmmaker. BeVisioneers Fellow.",
      photo: gergelyPhoto,
    },
    {
      name: "Bálint Drahota-Szabó",
      role: "Co-Founder & Backend Dev",
      description: "Business development and strategic partnerships.",
      photo: balintPhoto,
    },
    {
      name: "Jim Montasir",
      role: "Frontend Developer",
      description: "Marketplace UI/UX. BeVisioneers Fellow.",
      photo: jimPhoto,
    },
    {
      name: "Szabolcs Várnai",
      role: "Backend Developer",
      description: "Platform architecture and systems.",
      photo: szabolcsPhoto,
    },
    {
      name: "Artúr Szilágyi",
      role: "LCA Expert",
      description: "Life-cycle assessment specialist.",
      photo: arturPhoto,
    },
    {
      name: "Mark Malhotra",
      role: "Venture Coach",
      description: "BeVisioneers mentor and advisor.",
      photo: markPhoto,
    },
  ];

  const ecosystem = [
    "BeVisioneers Fellowship",
    "University R&D partnerships",
    "Swarm blockchain network",
    "Fair trade certifications",
  ];

  return (
    <PitchSlide
      slideNumber={slideNumber}
      totalSlides={totalSlides}
      title="Founders / Team"
      subtitle="From Filmmaker to System Builder"
      variant="default"
    >
      <div className="space-y-2 h-full">
        {/* Core Team */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {coreTeam.map((member) => (
            <div key={member.name} className="bg-card rounded-lg border border-border/50 p-1.5 text-center">
              <div className="w-12 h-12 mx-auto rounded-full overflow-hidden border-2 border-primary/30 mb-1">
                <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <p className="font-semibold text-foreground text-[9px] leading-tight">{member.name}</p>
              <p className="text-[7px] text-primary">{member.role}</p>
              <p className="text-[6px] text-muted-foreground leading-tight mt-0.5">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Ecosystem */}
        <div className="bg-secondary/50 rounded-lg p-2">
          <h4 className="font-semibold text-foreground mb-1 text-[10px] flex items-center gap-1">
            <Award className="h-3 w-3 text-primary" />
            Ecosystem Partnerships
          </h4>
          <div className="grid grid-cols-4 gap-1">
            {ecosystem.map((partner) => (
              <div key={partner} className="bg-card rounded p-1.5 border border-border/50">
                <p className="text-[8px] text-muted-foreground text-center">{partner}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="bg-primary/5 rounded-lg p-2 border border-primary/20">
          <h4 className="font-semibold text-foreground mb-0.5 text-[10px]">What Makes This Team Different:</h4>
          <p className="text-[8px] text-muted-foreground">
            Mission-first approach • Proven resourcefulness (2,200kg without funding) • Cultural competency • Technical + emotional intelligence • Long-term commitment: This isn't a startup - it's a life mission.
          </p>
        </div>
      </div>
    </PitchSlide>
  );
};

export default TeamSlide;
