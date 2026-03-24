import { Hero } from "@/components/home/hero";
import { Highlights } from "@/components/home/highlights";
import { FacilitiesPreview } from "@/components/home/facilities-preview";
import { NewsEventsPreview } from "@/components/home/news-events-preview";
import { Testimonials } from "@/components/home/testimonials";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { CtaSection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <FacilitiesPreview />
      <NewsEventsPreview />
      <Testimonials />
      <GalleryPreview />
      <CtaSection />
    </>
  );
}
