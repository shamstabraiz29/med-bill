"use client";

import React from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import {
  denialManagementContainerClassName,
  denialManagementSectionClassName,
} from "./denialManagementSectionLayout";
import { defaultDenialManagementServicesData } from "@/lib/defaults/denialManagementServices";
import type {
  DenialManagementPhysicianTestimonial,
  DenialManagementPhysicianTestimonialsData,
} from "@/payload/types/denialManagementServices";

function PhysicianTestimonialCard({ item }: { item: DenialManagementPhysicianTestimonial }) {
  const rating = item.rating ?? 5;

  return (
    <div className="relative flex h-full flex-col items-center rounded-2xl border border-[#E2E6EC] bg-white px-6 pb-8 pt-14 text-center shadow-[0_4px_24px_rgba(29,78,216,0.04)]">
      <div className="absolute -top-10 left-1/2 h-20 w-20 -translate-x-1/2 overflow-hidden rounded-full border-4 border-blue-50 bg-white shadow-sm">
        <Image
          src={item.avatarPath || "/doctor-hero.png"}
          alt={item.name}
          fill
          className="object-cover object-top"
          sizes="80px"
        />
      </div>

      <div className="flex items-center gap-0.5 text-[#EAB308]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-3.5 w-3.5 ${
              index < rating ? "fill-[#EAB308] text-[#EAB308]" : "text-[#E2E6EC]"
            }`}
            aria-hidden="true"
          />
        ))}
      </div>

      <h3 className="mt-3 text-base font-bold tracking-[-0.02em] text-[#0F172A]">{item.name}</h3>
      <p className="mt-1 text-xs font-medium text-[#475569]">{item.specialty}</p>

      <Quote className="mt-5 h-8 w-8 text-[#E2E6EC]" aria-hidden="true" />

      <p className="mt-4 text-sm leading-[1.65] text-[#475569]">{item.text}</p>
    </div>
  );
}

interface DenialManagementServicesPhysicianTestimonialsSectionProps {
  data?: DenialManagementPhysicianTestimonialsData;
}

export default function DenialManagementServicesPhysicianTestimonialsSection({
  data,
}: DenialManagementServicesPhysicianTestimonialsSectionProps) {
  const content = data || defaultDenialManagementServicesData.physicianTestimonials;
  const items =
    content.items && content.items.length > 0
      ? content.items
      : defaultDenialManagementServicesData.physicianTestimonials.items;

  return (
    <section
      className={denialManagementSectionClassName}
      aria-labelledby="denial-management-services-physician-testimonials-heading"
    >
      <div className={denialManagementContainerClassName}>
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-14">
          <h2
            id="denial-management-services-physician-testimonials-heading"
            className="text-2xl font-bold leading-[1.18] tracking-[-0.02em] text-[#0F172A] sm:text-3xl lg:text-4xl"
          >
            {content.titlePlain}
            <span className="text-blue-600">{content.titleHighlight}</span>
            {content.titleSuffix}
          </h2>
        </div>

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-6"
        >
          {items.map((item, index) => (
            <MotionWrapper key={item.name || index} variant="staggerItem" className="h-full pt-8">
              <PhysicianTestimonialCard item={item} />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
