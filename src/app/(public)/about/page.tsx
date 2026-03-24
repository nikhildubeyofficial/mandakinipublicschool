"use client";

import { motion } from "framer-motion";
import { History, Target, Eye, MessageSquare, Users, Award } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container relative mx-auto px-4 md:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-poppins text-4xl font-bold text-foreground md:text-5xl"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg"
          >
            Mandakini Public School Mau – committed to excellence in education since inception.
          </motion.p>
        </div>
      </section>

      <Section title="Our History" subtitle="A journey of growth and excellence." className="bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-muted-foreground text-lg leading-relaxed">
            Mandakini Public School was established with a vision to provide quality education to the children of Mau and surrounding areas. Over the years, we have grown into one of the most trusted institutions, known for our academic rigor, values-based education, and holistic development of every student.
          </p>
        </motion.div>
      </Section>

      <Section title="Mission & Vision">
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="font-poppins text-xl font-semibold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide a nurturing and inclusive learning environment where every child can achieve their full potential through quality education, character building, and modern teaching methods.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/20 text-secondary-foreground">
                  <Eye className="h-7 w-7" />
                </div>
                <h3 className="font-poppins text-xl font-semibold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading school that shapes responsible, confident, and globally aware citizens who contribute positively to society.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      <Section title="Principal's Message" subtitle="A note from our leadership." className="bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card>
            <CardContent className="p-8 md:p-10">
              <div className="flex items-start gap-6">
                <div className="hidden md:flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <MessageSquare className="h-10 w-10" />
                </div>
                <div>
                  <p className="text-foreground text-lg leading-relaxed">
                    At Mandakini Public School, we believe that every child is unique and deserves an environment that fosters curiosity, creativity, and character. Our dedicated faculty and modern facilities are here to support each student on their journey. We invite you to be part of our family.
                  </p>
                  <p className="mt-6 font-semibold text-foreground">— Principal, Mandakini Public School Mau</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Section>

      <Section title="Our Achievements" subtitle="Milestones we are proud of.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "CBSE Affiliated",
            "Green Campus Initiative",
            "Digital Learning Excellence",
            "Sports & Cultural Recognition",
          ].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="text-center h-full">
                <CardContent className="p-6">
                  <Award className="h-10 w-10 mx-auto text-primary mb-3" />
                  <p className="font-medium text-foreground">{item}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
