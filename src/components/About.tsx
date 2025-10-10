import { Target, Users, TrendingUp, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const principles = [
    {
      icon: Target,
      title: "Competence",
      description: "Developing skills through hands-on experience in business.",
    },
    {
      icon: Users,
      title: "Innovation",
      description: "Encouraging creative thinking and entrepreneurial mindset.",
    },
    {
      icon: TrendingUp,
      title: "Integrity",
      description: "Upholding ethical standards in all business practices.",
    },
    {
      icon: Award,
      title: "Leadership",
      description: "Building tomorrow's leaders through competition and collaboration.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-primary">Travis DECA</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            DECA prepares emerging leaders and entrepreneurs in marketing, finance,
            hospitality, and management in high schools and colleges around the globe.
            At Travis High School, we're committed to developing the next generation
            of business professionals through competitive events, leadership development,
            and real-world experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20"
            >
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                  <principle.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
