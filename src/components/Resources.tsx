import { BookOpen, HelpCircle, ExternalLink } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const faqs = [
    {
      question: "Can I get a letter in DECA?",
      answer:
        "Yes! Members can earn a varsity letter by competing in DECA events, maintaining good academic standing, participating in chapter activities, and demonstrating leadership. Specific requirements are available from your chapter advisor.",
    },
    {
      question: "What are the membership requirements?",
      answer:
        "All Travis High School students are welcome to join DECA! There are no GPA requirements to join, though members must maintain passing grades to compete. Membership dues help cover materials, events, and competition fees.",
    },
    {
      question: "How do I prepare for competitions?",
      answer:
        "We offer regular competition prep workshops, study sessions, and practice role-plays. Connect with returning members for mentorship, use DECA+ online resources, and attend our prep meetings to maximize your success.",
    },
    {
      question: "What competitions can I participate in?",
      answer:
        "DECA offers events in Marketing, Finance, Hospitality & Tourism, and Business Management & Administration. You can compete individually or in teams at District, State, and International levels.",
    },
    {
      question: "How much does membership cost?",
      answer:
        "Annual chapter dues are $45, which includes your national DECA membership, access to DECA+ resources, and chapter materials. Additional fees may apply for competition registration and travel.",
    },
  ];

  const resources = [
    {
      title: "DECA+",
      description: "Access online learning modules and competition resources",
      link: "https://decaplus.org",
    },
    {
      title: "Competition Guidelines",
      description: "Official rules and formats for all competitive events",
      link: "https://www.deca.org/high-school-programs/",
    },
    {
      title: "Chapter Calendar",
      description: "View all upcoming meetings, deadlines, and events",
      link: "#calendar",
    },
  ];

  return (
    <section id="resources" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Resources & <span className="text-primary">FAQs</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Everything you need to succeed in DECA.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Resources Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Helpful Resources</h3>
            </div>
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center justify-between">
                      {resource.title}
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {resource.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="w-full sm:w-auto"
                    >
                      <a
                        href={resource.link}
                        target={resource.link.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                      >
                        Access Resource
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}

              {/* Advisor Contact */}
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Contact Chapter Advisor</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">
                    <strong>Ms. Jennifer Williams</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Email: jwilliams@travishs.edu
                  </p>
                  <p className="text-sm text-muted-foreground">Room: 204</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQs Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Frequently Asked Questions</h3>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
