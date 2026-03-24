"use client";

import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  id?: string;
}

export function Section({ children, className, title, subtitle, id }: SectionProps) {
  return (
    <section id={id} className={className}>
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-20">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            {title && (
              <h2 className="font-poppins text-3xl font-bold text-foreground md:text-4xl mb-3">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-muted-foreground text-lg">{subtitle}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
