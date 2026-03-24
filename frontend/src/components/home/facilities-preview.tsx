"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Cpu, Tv, Dumbbell, Bus, Stethoscope, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";

const facilities = [
  { icon: BookOpen, title: "Library", desc: "Well-stocked library with books and digital resources." },
  { icon: Cpu, title: "Computer Lab", desc: "Modern IT lab with latest technology." },
  { icon: Tv, title: "Smart Classrooms", desc: "Digital boards and interactive learning." },
  { icon: Dumbbell, title: "Sports", desc: "Indoor and outdoor sports facilities." },
  { icon: Bus, title: "Transport", desc: "Safe and reliable school transport." },
  { icon: Stethoscope, title: "Medical", desc: "On-campus medical support." },
];

export function FacilitiesPreview() {
  return (
    <Section
      title="Our Facilities"
      subtitle="A modern learning environment with everything students need to excel."
      className="bg-muted/30"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {facilities.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="group h-full overflow-hidden transition-all duration-300 hover:shadow-soft-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-poppins text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <Link href="/facilities">
          <Button variant="outline" size="lg" className="gap-2">
            View All Facilities
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
}
