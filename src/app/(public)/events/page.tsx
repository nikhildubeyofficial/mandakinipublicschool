"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Newspaper } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";

const news = [
  { id: "1", title: "Annual Day 2025 – Save the Date", date: "Mar 1, 2025", excerpt: "We are delighted to announce our Annual Day celebration...", slug: "annual-day-2025" },
  { id: "2", title: "New Smart Classrooms Inaugurated", date: "Feb 28, 2025", excerpt: "State-of-the-art smart classrooms have been set up...", slug: "smart-classrooms" },
  { id: "3", title: "Sports Meet Results", date: "Feb 20, 2025", excerpt: "Congratulations to all participants and winners...", slug: "sports-meet-results" },
];

const events = [
  { id: "1", title: "Parent-Teacher Meeting", date: "Mar 15, 2025", venue: "School Campus" },
  { id: "2", title: "Science Exhibition", date: "Mar 22, 2025", venue: "Main Hall" },
  { id: "3", title: "Annual Day Celebration", date: "Apr 5, 2025", venue: "Auditorium" },
];

export default function EventsPage() {
  return (
    <>
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container relative mx-auto px-4 md:px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-poppins text-4xl font-bold text-foreground md:text-5xl">
            Events & News
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Announcements, blog posts, and event updates.
          </motion.p>
        </div>
      </section>

      <Section title="Latest News" subtitle="School announcements and updates.">
        <div className="space-y-6">
          {news.map((item, i) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Link href={`/events/${item.slug}`}>
                <Card className="transition-all hover:shadow-soft hover:border-primary/30">
                  <CardContent className="p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-3 text-primary shrink-0">
                      <Newspaper className="h-8 w-8" />
                      <span className="text-sm font-medium">{item.date}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-poppins font-semibold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground mt-1">{item.excerpt}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Upcoming Events" subtitle="Mark your calendar." className="bg-muted/30">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((ev, i) => (
            <motion.div key={ev.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <Calendar className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-poppins font-semibold text-foreground">{ev.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{ev.date} · {ev.venue}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
