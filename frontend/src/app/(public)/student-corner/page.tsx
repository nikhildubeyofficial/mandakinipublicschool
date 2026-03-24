"use client";

import { motion } from "framer-motion";
import { FileDown, FileText, ClipboardList, Bell } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";

const downloads = [
  { title: "Syllabus Class 1-5", category: "Syllabus", size: "PDF" },
  { title: "Syllabus Class 6-8", category: "Syllabus", size: "PDF" },
  { title: "Assignment Week 1", category: "Assignments", size: "PDF" },
];

const notices = [
  { title: "Holiday list 2025", date: "Mar 1, 2025" },
  { title: "Exam schedule", date: "Feb 28, 2025" },
];

export default function StudentCornerPage() {
  return (
    <>
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container relative mx-auto px-4 md:px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-poppins text-4xl font-bold text-foreground md:text-5xl">
            Student Corner
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Downloads, assignments, results, and notices.
          </motion.p>
        </div>
      </section>

      <Section title="Downloads" subtitle="Syllabus and study material.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {downloads.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Card className="group hover:shadow-soft">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <FileDown className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.category} · {item.size}</p>
                  </div>
                  <a href="#" className="text-primary text-sm font-medium shrink-0">Download</a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Important Notices" subtitle="Latest announcements for students." className="bg-muted/30">
        <div className="space-y-4 max-w-2xl mx-auto">
          {notices.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card>
                <CardContent className="p-4 flex items-center gap-4">
                  <Bell className="h-8 w-8 text-primary shrink-0" />
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
