"use client";

import React from "react";
import Image from "next/image";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import {
  largePracticeContainerClassName,
  largePracticeSectionAltClassName,
} from "./largePracticeSectionLayout";
import { defaultLargePracticesData } from "@/lib/defaults/largePractices";
import type { LargePracticesPageData } from "@/payload/types/largePractices";

interface LargePracticesPersonalizedServicesProps {
  data?: LargePracticesPageData["personalizedServices"];
}

export default function LargePracticesPersonalizedServices({
  data,
}: LargePracticesPersonalizedServicesProps) {
  const content = data || defaultLargePracticesData.personalizedServices;
  const imageSrc = content.imageSrc || "/consultants-laptop.png";
  const imageAlt =
    content.imageAlt ||
    "Healthcare professional reviewing personalized medical billing services on a laptop";

  return (
    <section
      className={largePracticeSectionAltClassName}
      aria-labelledby="large-practices-personalized-services-heading"
    >
      <div className={largePracticeContainerClassName}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <MotionWrapper
            variant="slideLeft"
            className="flex flex-col items-start space-y-6 text-left lg:col-span-6"
          >
            <SectionBadge variant="indigo" pulse>
              {content.badge}
            </SectionBadge>

            <h2
              id="large-practices-personalized-services-heading"
              className="max-w-2xl text-2xl font-bold leading-[1.18] tracking-[-0.02em] text-[#0F172A] sm:text-3xl lg:text-4xl"
            >
              {content.titlePlain}
              <span className="text-blue-600">{content.titleHighlight}</span>
            </h2>

            <div className="max-w-2xl space-y-4">
              <p className="text-sm leading-[1.65] text-[#475569] sm:text-base">
                {content.paragraph1}
              </p>
              <p className="text-sm leading-[1.65] text-[#475569] sm:text-base">
                {content.paragraph2}
              </p>
              <p className="text-sm leading-[1.65] text-[#475569] sm:text-base">
                {content.paragraph3}
              </p>
            </div>

            <AppButton href={content.ctaHref} variant="primary" size="lg" showArrow>
              {content.ctaText}
            </AppButton>
          </MotionWrapper>

          <MotionWrapper variant="slideRight" className="w-full lg:col-span-6">
            <div className="group relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-[0_8px_30px_rgba(29,78,216,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-xl hover:shadow-blue-900/10 sm:aspect-16/11">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/45 via-transparent to-transparent" />
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
