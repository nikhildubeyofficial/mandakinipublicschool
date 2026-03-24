"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-primary to-primary/80 px-8 py-14 text-center text-primary-foreground shadow-soft-lg md:px-16"
        >
          <h2 className="font-poppins text-3xl font-bold md:text-4xl">
            Ready to Join Mandakini Public School?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/90">
            Admissions are open. Get in touch or apply online today.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/admissions">
              <Button size="lg" variant="secondary" className="gap-2 text-base">
                Apply for Admission
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
