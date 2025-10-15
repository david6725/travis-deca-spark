import { useState } from "react";
import { Calendar as CalendarIcon, Clock, MapPin, List, CalendarDays } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarUI } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { format, parse } from "date-fns";

const Calendar = () => {
  const [viewMode, setViewMode] = useState<"list" | "calendar">("list");
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
          <p className="text-base sm:text-lg text-muted-foreground mb-8">
            Mark your calendars! Stay updated on meetings, deadlines, and competitions.
          </p>
          
          {/* View Toggle */}
          <div className="inline-flex rounded-lg border border-border bg-card p-1 shadow-sm">
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="gap-2"
            >
              <List className="h-4 w-4" />
              List View
            </Button>
            <Button
              variant={viewMode === "calendar" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("calendar")}
              className="gap-2"
            >
              <CalendarDays className="h-4 w-4" />
              Calendar View
            </Button>
          </div>
        </div>

        {viewMode === "list" ? (
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
        ) : (
          <div className="w-full">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Calendar - Full Width and Spacious */}
              <Card className="xl:col-span-2">
                <CardContent className="p-8">
                  <CalendarUI
                    mode="single"
                    className="w-full border-0 [&_table]:w-full [&_td]:h-32 [&_th]:h-16 [&_td]:text-lg [&_th]:text-lg [&_.rdp-day]:text-lg [&_td]:p-4 [&_th]:p-4 [&_.rdp-head_cell]:font-semibold [&_.rdp-caption]:text-2xl [&_.rdp-caption]:font-bold [&_.rdp-caption]:mb-8"
                    modifiers={{
                      event: events.map(event => parse(event.date, "MMM dd, yyyy", new Date()))
                    }}
                    modifiersClassNames={{
                      event: "bg-primary/20 text-primary font-bold border-2 border-primary rounded-xl relative before:content-['•'] before:absolute before:bottom-2 before:left-1/2 before:-translate-x-1/2 before:text-primary before:text-xl"
                    }}
                  />
                </CardContent>
              </Card>
              
              {/* Event List Sidebar - More Compact */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-6">Upcoming Events</h3>
                <div className="max-h-[700px] overflow-y-auto space-y-4 pr-2">
                  {events.map((event, index) => (
                    <Card key={index} className={`border-l-4 ${getEventColor(event.type)} hover:shadow-md transition-all`}>
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-sm mb-3 line-clamp-2">{event.title}</h4>
                        <div className="space-y-2 text-xs text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <CalendarIcon className="h-3.5 w-3.5 flex-shrink-0" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-3.5 w-3.5 flex-shrink-0" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                            <span className="line-clamp-1">{event.location}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Calendar;
