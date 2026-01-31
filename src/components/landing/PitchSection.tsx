import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  AlertTriangle, 
  Lightbulb, 
  TrendingUp, 
  Users, 
  Leaf, 
  Building2, 
  ArrowRight,
  CheckCircle2,
  Globe,
  Recycle,
  BarChart3,
  Award,
  Mail,
  ExternalLink
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PitchSection = () => {
  const problemStats = [
    { value: "€143B", label: "Products wasted yearly due to lack of traceability" },
    { value: "78%", label: "Consumers want sustainability data" },
    { value: "23%", label: "Actually trust current product labels" },
  ];

  const impactMetrics = [
    { value: "2,200kg", label: "Food waste diverted", icon: Recycle },
    { value: "1,000kg", label: "Weekly capacity proven", icon: TrendingUp },
    { value: "2027", label: "EU DPP mandate deadline", icon: Globe },
  ];

  const milestones = [
    { year: "2024", title: "BeVisioneers Fellowship", description: "Joined Mercedes-Benz Fellowship program" },
    { year: "2024", title: "MVP Published", description: "Working prototype launched" },
    { year: "2025", title: "1,200kg Diverted", description: "Food waste saved without funding" },
    { year: "2026", title: "Scaling Operations", description: "1,000kg/week capacity achieved" },
  ];

  return (
    <section id="pitch" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Target className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Mission</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tracing Markets to Accelerate <span className="gradient-text">Circular Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We don't have a waste problem. We have a traceability and connection problem.
          </p>
        </div>

        {/* The Hook - Story */}
        <div className="bg-card rounded-2xl border border-border/50 p-8 lg:p-12 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6">
              "Imagine buying a product and having no idea where it came from, what's really in it, 
              or what happens to the waste created in making it."
            </p>
            <p className="text-foreground leading-relaxed">
              As a filmmaker and sustainability activist, I watched small producers struggle to prove their sustainability claims. 
              I saw tons of perfectly good byproducts thrown away because no one knew what to do with them. 
              The tipping point came when I met a plant-based milk producer throwing away <strong>20kg of nutritious almond cream every week</strong>—not 
              because it was bad, but because they had no system to trace it, value it, or transform it into something new.
            </p>
          </div>
        </div>

        {/* Problem Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problemStats.map((stat) => (
            <Card key={stat.label} className="bg-destructive/5 border-destructive/20">
              <CardContent className="p-6 text-center">
                <AlertTriangle className="h-8 w-8 text-destructive mx-auto mb-3" />
                <p className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* The Solution - Two Platforms */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <Lightbulb className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">The Solution</span>
            </div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
              Two Integrated Platforms
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Trace.Market */}
            <div className="bg-card rounded-2xl border border-primary/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold text-foreground">Trace.Market</h4>
                  <p className="text-sm text-muted-foreground">The Transparency Engine</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Creates immutable Digital Product Passports using blockchain technology. 
                Every product gets verified origin, ingredients, carbon footprint, and supply chain data.
              </p>
              <ul className="space-y-3">
                {["Blockchain-verified DPPs", "3D supply chain visualization", "Automated LCA calculation", "Multi-language support"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Circooler.Solutions */}
            <div className="bg-card rounded-2xl border border-accent/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-accent/10">
                  <Recycle className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold text-foreground">Circooler.Solutions</h4>
                  <p className="text-sm text-muted-foreground">The Waste-to-Value Connector</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Maps waste streams and identifies upcycling opportunities. 
                Connects waste producers with businesses that transform waste into new products.
              </p>
              <ul className="space-y-3">
                {["Waste stream mapping", "R&D partnerships", "Recipe development", "B2B waste matching"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="bg-secondary/50 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-2">
              Proven Impact Without Funding
            </h3>
            <p className="text-muted-foreground">Real results achieved through determination alone</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {impactMetrics.map((metric) => (
              <div key={metric.label} className="bg-card rounded-xl p-6 text-center">
                <metric.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <p className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-1">
                  {metric.value}
                </p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
              Our Journey
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div key={milestone.title} className="relative">
                {index < milestones.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-primary/40 to-transparent" />
                )}
                <div className="bg-card rounded-xl border border-border/50 p-6">
                  <span className="text-xs font-bold text-primary">{milestone.year}</span>
                  <h4 className="font-semibold text-foreground mt-1 mb-2">{milestone.title}</h4>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="border-border/50">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-info mb-4" />
              <h4 className="font-semibold text-foreground mb-2">For Consumers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Complete product transparency</li>
                <li>• Verify sustainability claims</li>
                <li>• Make informed decisions</li>
                <li>• Support circular products</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6">
              <Building2 className="h-8 w-8 text-primary mb-4" />
              <h4 className="font-semibold text-foreground mb-2">For Producers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Prove sustainability with data</li>
                <li>• Build consumer trust</li>
                <li>• Meet EU DPP compliance</li>
                <li>• Transform waste to revenue</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardContent className="p-6">
              <Leaf className="h-8 w-8 text-accent mb-4" />
              <h4 className="font-semibold text-foreground mb-2">For the Planet</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Measurable waste reduction</li>
                <li>• Lower carbon emissions</li>
                <li>• Accelerated circular economy</li>
                <li>• Transparent supply chains</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* 2030 Vision */}
        <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-info/10 rounded-2xl border border-primary/20 p-8 lg:p-12 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <Award className="h-12 w-12 text-primary mx-auto mb-6" />
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
              2030 Vision
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              <div>
                <p className="text-3xl font-display font-bold text-foreground">177,450kg</p>
                <p className="text-sm text-muted-foreground">Annual food recovery</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-foreground">1M+ kg</p>
                <p className="text-sm text-muted-foreground">CO₂ emissions avoided</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-foreground">80M+ L</p>
                <p className="text-sm text-muted-foreground">Water saved</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground mb-4">
            We've proven impact without resources. Imagine what we can do with them.
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us in building a transparent, circular economy. Whether you're a conscious consumer 
            or a forward-thinking business, there's a place for you in this movement.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/chat">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Create Your DPP
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a href="mailto:dzsida@tracemarket.com">
              <Button size="lg" variant="outline" className="gap-2">
                <Mail className="h-5 w-5" />
                Contact Us
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
            <a href="https://tracemarket.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <ExternalLink className="h-4 w-4" />
              tracemarket.com
            </a>
            <a href="https://circooler.solutions" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <ExternalLink className="h-4 w-4" />
              circooler.solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PitchSection;