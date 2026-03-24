"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";

const teachers = [
  { name: "Staff Name One", designation: "Principal", subject: "School Leadership" },
  { name: "Staff Name Two", designation: "Senior Teacher", subject: "Mathematics" },
  { name: "Staff Name Three", designation: "Senior Teacher", subject: "Science" },
  { name: "Staff Name Four", designation: "Teacher", subject: "English" },
  { name: "Staff Name Five", designation: "Teacher", subject: "Hindi" },
  { name: "Staff Name Six", designation: "Teacher", subject: "Social Science" },
];

export default function TeachersPage() {
  return (
    <>
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container relative mx-auto px-4 md:px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-poppins text-4xl font-bold text-foreground md:text-5xl">
            Our Teachers
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Meet our dedicated faculty.
          </motion.p>
        </div>
      </section>

      <Section title="Staff Directory" subtitle="Qualified and caring educators.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="h-full text-center group hover:shadow-soft-lg">
                <CardContent className="p-8">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <User className="h-12 w-12" />
                  </div>
                  <h3 className="font-poppins font-semibold text-foreground">{t.name}</h3>
                  <p className="text-primary font-medium mt-1">{t.designation}</p>
                  <p className="text-sm text-muted-foreground mt-1">{t.subject}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
