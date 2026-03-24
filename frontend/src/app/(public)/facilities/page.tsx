"use client";

import { motion } from "framer-motion";
import { BookOpen, Cpu, Tv, Dumbbell, Bus, Stethoscope } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";

const facilities = [
  { icon: BookOpen, title: "Library", desc: "A well-stocked library with a wide range of books, journals, and digital resources to support learning and reading habits." },
  { icon: Cpu, title: "Computer Lab", desc: "Modern computer labs with high-speed internet and updated software for IT education and research." },
  { icon: Tv, title: "Smart Classrooms", desc: "Digital boards and audio-visual aids for interactive and engaging classroom learning." },
  { icon: Dumbbell, title: "Sports", desc: "Indoor and outdoor sports facilities including playground, courts, and equipment for physical development." },
  { icon: Bus, title: "Transportation", desc: "Safe and reliable school bus service covering key routes with trained drivers and attendants." },
  { icon: Stethoscope, title: "Medical Facilities", desc: "On-campus first aid and tie-ups with local healthcare for student wellness." },
];

export default function FacilitiesPage() {
  return (
    <>
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container relative mx-auto px-4 md:px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-poppins text-4xl font-bold text-foreground md:text-5xl">
            Facilities
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Modern infrastructure for a complete learning experience.
          </motion.p>
        </div>
      </section>

      <Section title="Our Facilities" subtitle="Explore what we offer.">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {facilities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="h-full group">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-poppins text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
