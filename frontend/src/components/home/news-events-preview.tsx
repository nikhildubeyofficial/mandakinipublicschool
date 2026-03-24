"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Newspaper, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";

// Placeholder - in production these come from the database
const latestNews = [
  { id: "1", title: "Annual Day 2025 – Save the Date", date: "Mar 1, 2025", slug: "annual-day-2025" },
  { id: "2", title: "New Smart Classrooms Inaugurated", date: "Feb 28, 2025", slug: "smart-classrooms" },
  { id: "3", title: "Sports Meet Results", date: "Feb 20, 2025", slug: "sports-meet-results" },
];

const upcomingEvents = [
  { id: "1", title: "Parent-Teacher Meeting", date: "Mar 15, 2025", venue: "School Campus" },
  { id: "2", title: "Science Exhibition", date: "Mar 22, 2025", venue: "Main Hall" },
  { id: "3", title: "Annual Day Celebration", date: "Apr 5, 2025", venue: "Auditorium" },
];

export function NewsEventsPreview() {
  return (
    <Section title="Latest News & Upcoming Events" subtitle="Stay updated with school announcements and events.">
      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 flex items-center gap-2 text-primary">
            <Newspaper className="h-5 w-5" />
            <h3 className="font-poppins text-lg font-semibold">Latest News</h3>
          </div>
          <div className="space-y-4">
            {latestNews.map((item, i) => (
              <Link key={item.id} href={`/events/${item.slug}`}>
                <Card className="transition-all hover:shadow-soft hover:border-primary/30">
                  <CardContent className="p-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <Link href="/events" className="mt-4 inline-block">
            <Button variant="ghost" className="gap-2">View all news</Button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 flex items-center gap-2 text-primary">
            <Calendar className="h-5 w-5" />
            <h3 className="font-poppins text-lg font-semibold">Upcoming Events</h3>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map((item, i) => (
              <Card key={item.id} className="transition-all hover:shadow-soft">
                <CardContent className="p-4">
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.date} · {item.venue}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Link href="/events" className="mt-4 inline-block">
            <Button variant="ghost" className="gap-2">View all events</Button>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
