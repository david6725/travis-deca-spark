import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Calendar = () => {
  const events = [
    {
      date: "Oct 15, 2025",
      time: "3:30 PM",
      title: "General Meeting",
      location: "Room 204",
      type: "meeting",
    },
    {
      date: "Oct 30, 2025",
      time: "All Day",
      title: "Competition Registration Deadline",
      location: "Online",
      type: "deadline",
    },
    {
      date: "Nov 8, 2025",
      time: "3:30 PM",
      title: "Competition Prep Workshop",
      location: "Room 204",
      type: "workshop",
    },
    {
      date: "Nov 22, 2025",
      time: "8:00 AM - 5:00 PM",
      title: "District Competition",
      location: "Austin Convention Center",
      type: "competition",
    },
    {
      date: "Dec 10, 2025",
      time: "3:30 PM",
      title: "Officer Elections Info Session",
      location: "Room 204",
      type: "meeting",
    },
    {
      date: "Jan 15, 2026",
      time: "TBD",
      title: "State Leadership Conference",
      location: "Dallas, TX",
      type: "conference",
    },
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
