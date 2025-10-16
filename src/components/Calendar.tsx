import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Calendar = () => {
  const events = [
    // October 2025
    { date: "Oct 01, 2025", time: "TBD", title: "Trunk or Treat (Plan)", location: "TBD", type: "meeting" },
    { date: "Oct 09, 2025", time: "3:30 PM", title: "Shark Tank Social", location: "Room 204", type: "meeting" },
    { date: "Oct 17, 2025", time: "3:30 PM", title: "New Wink Lash Interview", location: "Room 204", type: "meeting" },
    { date: "Oct 19, 2025", time: "All Day", title: "VBC R1", location: "TBD", type: "competition" },
    { date: "Oct 20, 2025", time: "All Day", title: "No School / VBC R1", location: "TBD", type: "deadline" },
    { date: "Oct 21, 2025", time: "All Day", title: "VBC R1", location: "TBD", type: "competition" },
    { date: "Oct 22, 2025", time: "All Day", title: "VBC R1", location: "TBD", type: "competition" },
    { date: "Oct 23, 2025", time: "3:30 PM", title: "VBC R1 - Mrs. Teresa Nolasco Guest Speaker", location: "Room 204", type: "meeting" },
    { date: "Oct 24, 2025", time: "All Day", title: "VBC R1", location: "TBD", type: "competition" },
    
    // November 2025
    { date: "Nov 06, 2025", time: "TBD", title: "Write Card for Veterans", location: "Room 204", type: "meeting" },
    { date: "Nov 11, 2025", time: "All Day", title: "Veterans Day", location: "No School", type: "deadline" },
    { date: "Nov 15, 2025", time: "All Day", title: "Submit All Chapter Campaigns", location: "Online", type: "deadline" },
    { date: "Nov 20, 2025", time: "3:30 PM", title: "DECA Toy Making Social", location: "Room 204", type: "meeting" },
    { date: "Nov 27, 2025", time: "All Day", title: "Thanksgiving - No School", location: "No School", type: "deadline" },
    
    // December 2025
    { date: "Dec 01, 2025", time: "All Day", title: "DECA Chapter Campaign Due / DECA 2 Step", location: "Online", type: "deadline" },
    { date: "Dec 05, 2025", time: "All Day", title: "SMG Ends", location: "Online", type: "deadline" },
    { date: "Dec 12, 2025", time: "TBD", title: "Write to Texas Representatives about DECA", location: "Room 204", type: "meeting" },
    { date: "Dec 18, 2025", time: "Half Day", title: "Half Day / Early Release", location: "School", type: "deadline" },
    { date: "Dec 19, 2025", time: "Half Day", title: "Half Day / Early Release", location: "School", type: "deadline" },
    { date: "Dec 25, 2025", time: "All Day", title: "Christmas - Gift Basket to Wink Lash", location: "No School", type: "meeting" },
  ];

  const getEventColor = (type: string) => {
    switch (type) {
      case "competition":
        return "border-l-primary bg-primary/5";
      case "deadline":
        return "border-l-destructive bg-destructive/5";
      case "workshop":
        return "border-l-accent bg-accent/5";
      default:
        return "border-l-muted-foreground bg-muted";
    }
  };

  return (
    <section id="calendar" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Upcoming <span className="text-primary">Events</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Mark your calendars! Stay updated on meetings, deadlines, and competitions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-4">
            {events.map((event, index) => (
              <Card
                key={index}
                className={`border-l-4 ${getEventColor(event.type)} hover:shadow-lg transition-all duration-300`}
              >
                <CardHeader className="pb-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarIcon className="h-4 w-4" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4 flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Calendar;
