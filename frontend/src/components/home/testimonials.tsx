"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Section } from "@/components/layout/section";

const testimonials = [
  {
    quote: "Mandakini Public School has provided an excellent environment for my child. The teachers are dedicated and the facilities are top-notch.",
    name: "Parent of Class X Student",
    role: "Parent",
  },
  {
    quote: "I am proud to be part of this institution. The focus on holistic development and values makes it stand out.",
    name: "Senior Teacher",
    role: "Faculty",
  },
  {
    quote: "The school has shaped my personality and prepared me for higher studies. I will always be grateful.",
    name: "Alumni",
    role: "Former Student",
  },
];

export function Testimonials() {
  return (
    <Section
      title="What People Say"
      subtitle="Hear from our parents, teachers, and alumni."
      className="bg-muted/30"
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-border bg-card p-6 shadow-soft"
          >
            <Quote className="h-10 w-10 text-primary/40 mb-4" />
            <p className="text-foreground mb-4">&ldquo;{item.quote}&rdquo;</p>
            <p className="font-medium text-foreground">{item.name}</p>
            <p className="text-sm text-muted-foreground">{item.role}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
