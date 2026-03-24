"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { Images } from "lucide-react";

// Placeholder images - replace with real gallery thumbnails from the database
const placeholderImages = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
];

export function GalleryPreview() {
  return (
    <Section title="Gallery" subtitle="Moments from our campus and events.">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {placeholderImages.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted"
          >
            <img
              src={src}
              alt={`Gallery ${i + 1}`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <Link href="/gallery">
          <Button variant="outline" size="lg" className="gap-2">
            <Images className="h-4 w-4" />
            View Full Gallery
          </Button>
        </Link>
      </motion.div>
    </Section>
  );
}
