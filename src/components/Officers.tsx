import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { User } from "lucide-react";

const Officers = () => {
  const officers = [
    {
      name: "Sarah Johnson",
      role: "Chapter President",
      initials: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Vice President",
      initials: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Secretary",
      initials: "ER",
    },
    {
      name: "David Kim",
      role: "Treasurer",
      initials: "DK",
    },
    {
      name: "Jessica Martinez",
      role: "Competition Coordinator",
      initials: "JM",
    },
    {
      name: "Ryan Patel",
      role: "Marketing Director",
      initials: "RP",
    },
  ];

  const committees = [
    "Membership & Recruitment",
    "Fundraising & Finance",
    "Competition Preparation",
    "Community Service",
    "Social Media & Marketing",
    "Event Planning",
  ];

  return (
    <section id="officers" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-primary">Leadership</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Meet the student leaders driving Travis DECA forward.
          </p>
        </div>

        {/* Officers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {officers.map((officer, index) => (
            <Card
              key={index}
              className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="pb-3">
                <div className="mx-auto w-24 h-24 rounded-full bg-gradient-deca flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">
                    {officer.initials}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{officer.name}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-primary font-medium">{officer.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Committees Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
            Our Committees
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {committees.map((committee, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg bg-card border-2 border-border hover:border-primary transition-all hover:shadow-md"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium">{committee}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Officers;
