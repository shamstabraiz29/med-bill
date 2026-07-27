import type { Metadata } from "next";
import TestimonialsHero from "@/components/testimonials/TestimonialsHero";
import FeaturedTestimonial from "@/components/testimonials/FeaturedTestimonial";
import TestimonialsGrid from "@/components/testimonials/TestimonialsGrid";
import TestimonialsCTA from "@/components/testimonials/TestimonialsCTA";
import { getTestimonialsData } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Client Testimonials & Success Stories | BellMedEx Medical Billing",
  description:
    "Read real reviews and verified success stories from healthcare providers and physicians who optimized their revenue cycle management with BellMedEx.",
};

export default async function TestimonialsPage() {
  const data = await getTestimonialsData();

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      <TestimonialsHero data={data.hero} />
      <FeaturedTestimonial data={data.featuredTestimonial} />
      <TestimonialsGrid items={data.testimonialsList} />
      <TestimonialsCTA data={data.cta} />
    </div>
  );
}
