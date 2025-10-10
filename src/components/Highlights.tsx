import { Medal, Star, Users2, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Highlights = () => {
  const achievements = [
    {
      icon: Medal,
      title: "State Qualifiers",
      stat: "15+",
      description: "Members qualified for State competition this year",
    },
    {
      icon: Star,
      title: "Top Finishes",
      stat: "8",
      description: "Top 10 placements at District competition",
    },
    {
      icon: Users2,
      title: "Active Members",
      stat: "50+",
      description: "Engaged students in our DECA chapter",
    },
    {
      icon: TrendingUp,
      title: "Chapter Growth",
      stat: "35%",
      description: "Increase in membership from last year",
    },
  ];

  const highlights = [
    "2024 District Competition: 8 Top-10 Finishes",
    "State Leadership Conference Attendees: 15 Members",
    "Community Service Hours: 200+ Hours Logged",
    "Business Partnerships: 5+ Local Companies",
  ];

  return (
    <section id="highlights" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Highlights & <span className="text-primary">Accomplishments</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Celebrating our members' achievements and chapter milestones.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                  <achievement.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {achievement.stat}
                </div>
                <div className="text-sm font-semibold mb-1">{achievement.title}</div>
                <p className="text-xs text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlights List */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">Recent Achievements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-card border-2 border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                <p className="text-sm font-medium">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
