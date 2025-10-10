import { Trophy, Briefcase, Plane, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Opportunities = () => {
  const opportunities = [
    {
      icon: Trophy,
      title: "Competitions",
      description:
        "Compete at district, state, and international levels in various business categories. Test your skills against the best and earn recognition for your achievements.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Briefcase,
      title: "Business Exposure",
      description:
        "Gain real-world experience through partnerships with local businesses, mentorship programs, and networking events with industry professionals.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Plane,
      title: "Travel Opportunities",
      description:
        "Travel to conferences and competitions across Texas and beyond. Experience new cities while representing Travis High School DECA.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: GraduationCap,
      title: "Leadership Development",
      description:
        "Build essential leadership skills through chapter officer positions, committee work, and organizing school-wide business events.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <section id="opportunities" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Opportunities in <span className="text-primary">DECA</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Discover the many ways DECA can help you grow as a leader and entrepreneur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {opportunities.map((opportunity, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20"
            >
              <CardHeader>
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-lg ${opportunity.bgColor} mb-4`}
                >
                  <opportunity.icon className={`h-7 w-7 ${opportunity.color}`} />
                </div>
                <CardTitle className="text-2xl">{opportunity.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {opportunity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
