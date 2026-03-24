"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Events", "Campus", "Sports", "Cultural"];

const placeholderImages = [
  { id: "1", src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop", category: "Campus" },
  { id: "2", src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop", category: "Events" },
  { id: "3", src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop", category: "Campus" },
  { id: "4", src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop", category: "Sports" },
  { id: "5", src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop", category: "Cultural" },
  { id: "6", src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop", category: "Events" },
  { id: "7", src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop", category: "Campus" },
  { id: "8", src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&h=400&fit=crop", category: "Sports" },
  { id: "9", src: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&h=400&fit=crop", category: "Cultural" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? placeholderImages : placeholderImages.filter((img) => img.category === filter);

  return (
    <>
      <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container relative mx-auto px-4 md:px-6 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-poppins text-4xl font-bold text-foreground md:text-5xl">
            Gallery
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Moments from our campus and events.
          </motion.p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.03 }}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted"
                >
                  <img
                    src={img.src}
                    alt={`Gallery ${img.id}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-sm font-medium">{img.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
