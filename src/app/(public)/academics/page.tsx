"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Calendar, FileDown } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AcademicsPage() {
  return (
    <>
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container relative mx-auto px-4 md:px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-poppins text-4xl font-bold text-foreground md:text-5xl">
            Academics
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Curriculum, departments, and teaching methodology at Mandakini Public School.
          </motion.p>
        </div>
      </section>

      <Section id="curriculum" title="Curriculum" subtitle="Structured for success.">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card>
            <CardContent className="p-8">
              <p className="text-muted-foreground text-lg leading-relaxed">
                We follow the CBSE curriculum with a focus on conceptual understanding, application, and holistic development. From primary to senior secondary, our syllabus is designed to prepare students for board examinations and beyond, with ample emphasis on practical learning and critical thinking.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </Section>

      <Section id="departments" title="Departments" subtitle="Expert faculty across disciplines." className="bg-muted/30">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Science", "Mathematics", "Humanities", "Languages", "Computer Science", "Physical Education"].map((dept, i) => (
            <motion.div key={dept} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Card className="h-full">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-foreground">{dept}</h3>
                    <p className="text-sm text-muted-foreground">Dedicated department with qualified teachers</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Teaching Methodology" subtitle="How we teach.">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-muted-foreground text-lg leading-relaxed">
            We use a blend of traditional and modern pedagogy: smart boards, hands-on activities, group discussions, and project-based learning. Our teachers are trained to cater to different learning styles and ensure every child is engaged and supported.
          </p>
        </motion.div>
      </Section>

      <Section title="Academic Calendar & Syllabus" subtitle="Downloads." className="bg-muted/30">
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="outline" size="lg" className="gap-2">
            <Calendar className="h-4 w-4" />
            Academic Calendar
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <FileDown className="h-4 w-4" />
            Download Syllabus
          </Button>
        </div>
      </Section>
    </>
  );
}
