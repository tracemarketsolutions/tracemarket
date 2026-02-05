import { Users } from "lucide-react";
import gergelyPhoto from "@/assets/team/gergely-aron-dzsida.jpeg";
import balintPhoto from "@/assets/team/balint-drahota-szabo.jpg";
import jimPhoto from "@/assets/team/jim-montasir.jpeg";
import szabolcsPhoto from "@/assets/team/szabolcs-szekelyi.jpg";
import arturPhoto from "@/assets/team/artur-szilagyi.jpg";
import markPhoto from "@/assets/team/mark-malhotra.jpg";

const TeamSection = () => {
  const team = [
    {
      name: "Gergely Áron Dzsida",
      role: "Co-Founder",
      description: "Environmental activist, filmmaker. 4+ years documenting global sustainability issues. BeVisioneers Fellow.",
      photo: gergelyPhoto,
    },
    {
      name: "Bálint Drahota-Szabó",
      role: "Co-Founder & Backend Developer",
      description: "Business development and strategic partnerships. Circular economy expertise.",
      photo: balintPhoto,
    },
    {
      name: "Jim Montasir",
      role: "Frontend Developer",
      description: "User experience design for our marketplace. Building accessible interfaces. BeVisioneers Fellow.",
      photo: jimPhoto,
    },
    {
      name: "Szabolcs Székelyi",
      role: "Backend Developer",
      description: "Platform architecture and decentralized systems. Swarm blockchain integration.",
      photo: szabolcsPhoto,
    },
    {
      name: "Artúr Szilágyi",
      role: "LCA Expert",
      description: "Life-cycle assessment specialist. Environmental impact measurement and validation.",
      photo: arturPhoto,
    },
    {
      name: "Mark Malhotra",
      role: "Venture Coach",
      description: "BeVisioneers mentor. Strategic guidance and business development advisor.",
      photo: markPhoto,
    },
  ];

  return (
    <section id="team" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Team</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The People Behind the <span className="gradient-text">Mission</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A mission-driven team committed to rebuilding economic systems for transparency and circularity.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {team.map((member) => (
            <div 
              key={member.name}
              className="bg-card rounded-2xl p-6 border border-border/50 text-center hover:border-primary/30 transition-colors"
            >
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-primary/20 mb-4">
                <img 
                  src={member.photo} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-primary mb-2">
                {member.role}
              </p>
              <p className="text-sm text-muted-foreground">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* What Makes Us Different */}
        <div className="mt-12 bg-primary/5 rounded-2xl p-6 lg:p-8 border border-primary/20 text-center">
          <h3 className="font-display text-xl font-semibold text-foreground mb-3">
            What Makes This Team Different
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            <strong className="text-foreground">Mission-first approach</strong> • Proven resourcefulness (2,200kg impact without funding) • 
            Cultural competency across global communities • Technical + emotional intelligence • 
            <strong className="text-foreground"> Long-term commitment:</strong> This isn't a startup - it's a life mission.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
