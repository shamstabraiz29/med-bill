"use client";

import TestimonialCarousel from "@/components/carousel/TestimonialCarousel";
import { defaultHomepageData } from "@/lib/defaults/homepage";
import type { HomepageTestimonials } from "@/payload/types/homepage";

interface HospitalBillingServicesTestimonialsSectionProps {
  data?: HomepageTestimonials | any;
}

export default function HospitalBillingServicesTestimonialsSection({
  data,
}: HospitalBillingServicesTestimonialsSectionProps) {
  const testimonialsData =
    data && data.items && data.titlePlain?.includes("Trusted")
      ? (data as HomepageTestimonials)
      : defaultHomepageData.testimonials;

  return <TestimonialCarousel data={testimonialsData} />;
}

