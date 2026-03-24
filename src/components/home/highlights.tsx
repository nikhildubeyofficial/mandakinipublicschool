"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Award, Heart } from "lucide-react";

const highlights = [
  {
    icon: Users,
    value: "25+",
    label: "Years of Excellence",
  },
  {
    icon: BookOpen,
    value: "5000+",
    label: "Students Enrolled",
  },
  {
    icon: Award,
    value: "50+",
    label: "Qualified Teachers",
  },
  {
    icon: Heart,
    value: "100%",
    label: "Dedication to Growth",
  },
];

export function Highlights() {
  return (
    <section className="relative -mt-20 z-10 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="h-6 w-6" />
              </div>
              <p className="font-poppins text-3xl font-bold text-foreground">{item.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
