import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { User } from "lucide-react";

const Officers = () => {
  const officers = [
    {
      name: "Leyna Phan",
      role: "President",
      initials: "LP",
      description: "I am most excited about helping more of our members make it to state and ICDC! I look forward to getting to know everyone, and I cannot wait to see all that we will accomplish!",
    },
    {
      name: "Hailey Cao",
      role: "Co-Vice President",
      initials: "HC",
      description: "I'm really excited to work with my team to help more of our chapter make it to ICDC! I'm also excited to compete again!",
    },
    {
      name: "Krishav Prasad",
      role: "Co-Vice President",
      initials: "KP",
      description: "I am most excited about competing in SBE!",
    },
    {
      name: "Martin Garza",
      role: "Junior Vice President",
      initials: "MG",
      description: "I'm most excited about seeing new people whether it be new members, or new faces at competition!",
    },
    {
      name: "Swara Bhatt",
      role: "VP of Written",
      initials: "SB",
      description: "I'm so excited to be your VP of Written for the 2025-2026 school year! I can't wait to help new members learn about and become a part of our DECA community!!",
    },
    {
      name: "Saleh Khan",
      role: "VP of Roleplay",
      initials: "SK",
      description: "I can't wait to help others compete and meet our new DECA members!",
    },
    {
      name: "Dhanya Parmar",
      role: "VP of Virtual",
      initials: "DP",
    },
    {
      name: "Keyuri Khatri",
      role: "VP of Chapter Campaigns",
      initials: "KK",
      description: "I'm super excited about working with our chapter and having an insane amount of ribbons for competition (aura farming).",
    },
    {
      name: "Eshani Pahuja",
      role: "VP of Marketing",
      initials: "EP",
      description: "I'm most excited to learn from the mistakes and lessons I've learned from previous years and apply them towards the upcoming DECA year!",
    },
    {
      name: "Alberto Cerritos",
      role: "VP of Membership and Finance",
      initials: "AC",
    },
  ];

  const committees = [
    {
      name: "Written Committee",
      members: ["Vincent Nguyen", "Jenna Doung", "Prameen Lakshmnan"],
    },
    {
      name: "Role-play Committee",
      members: ["Seeryn Rehman"],
    },
    {
      name: "Virtual Committee",
      members: ["Saumya Pathak"],
    },
    {
      name: "Marketing Committee",
      members: ["Chalvi David Imanzi"],
    },
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
                <p className="text-sm text-primary font-medium mb-3">{officer.role}</p>
                {officer.description && (
                  <p className="text-sm text-muted-foreground italic">{officer.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Committees Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
            Our Committees
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {committees.map((committee, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-card border-2 border-border hover:border-primary transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold">{committee.name}</h4>
                </div>
                <div className="pl-13">
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {committee.members.map((member, memberIndex) => (
                      <li key={memberIndex}>• {member}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Officers;
