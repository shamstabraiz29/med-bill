"use client";

import React from "react";
import TestimonialCarousel from "@/components/carousel/TestimonialCarousel";
import { defaultDenialManagementServicesData } from "@/lib/defaults/denialManagementServices";
import type { HomepageTestimonials } from "@/payload/types/homepage";

interface DenialManagementServicesTestimonialsSectionProps {
  data?: HomepageTestimonials;
}

export default function DenialManagementServicesTestimonialsSection({
  data,
}: DenialManagementServicesTestimonialsSectionProps) {
  const content = data || defaultDenialManagementServicesData.testimonials;

  return <TestimonialCarousel data={content} />;
}
