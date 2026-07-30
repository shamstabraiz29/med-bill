"use client";

import React from "react";
import AppImage from "@/components/ui/AppImage";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import DenialManagementServicesOutsourceAccordion from "./DenialManagementServicesOutsourceAccordion";
import {
  denialManagementContainerClassName,
  denialManagementSectionBodyClassName,
  denialManagementSectionClassName,
  denialManagementSectionHighlightClassName,
} from "./denialManagementSectionLayout";
import { defaultDenialManagementServicesData } from "@/lib/defaults/denialManagementServices";
import type { DenialManagementOutsourceSectionData } from "@/payload/types/denialManagementServices";

interface DenialManagementServicesOutsourceSectionProps {
  data?: DenialManagementOutsourceSectionData;
}

export default function DenialManagementServicesOutsourceSection({
  data,
}: DenialManagementServicesOutsourceSectionProps) {
  const content = data || defaultDenialManagementServicesData.outsource;
  const items =
    content.accordionItems && content.accordionItems.length > 0
      ? content.accordionItems
      : defaultDenialManagementServicesData.outsource.accordionItems;
  const imageAlt =
    content.imageAlt ||
    "Healthcare professional managing denial management billing on laptop and mobile";

  return (
    <section
      className={denialManagementSectionClassName}
      aria-labelledby="denial-management-services-outsource-heading"
    >
      <div className={denialManagementContainerClassName}>
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeader
            badge={content.badge}
            badgeVariant="indigo"
            badgePulse
            align="center"
            title={
              <span id="denial-management-services-outsource-heading">
                {content.titlePlain}
                <span className={denialManagementSectionHighlightClassName}>{content.titleHighlight}</span>
                {content.titleSuffix}
              </span>
            }
            className="mx-auto"
          />

          <div className="mx-auto mt-6 max-w-3xl space-y-4 sm:mt-8">
            <p className={denialManagementSectionBodyClassName}>{content.paragraph1}</p>
            <p className={denialManagementSectionBodyClassName}>{content.paragraph2}</p>
            <p className={denialManagementSectionBodyClassName}>{content.paragraph3}</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <MotionWrapper variant="slideLeft" className="lg:col-span-6">
            <DenialManagementServicesOutsourceAccordion items={items} />
          </MotionWrapper>

          <MotionWrapper variant="slideRight" className="lg:col-span-6">
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-[0_8px_30px_rgba(29,78,216,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1D4ED8]/30 hover:shadow-xl hover:shadow-blue-900/10 sm:aspect-[16/11]">
              <AppImage
                src={content.imageSrc}
                fallbackSrc="/rcm-dashboard-laptop1.png"
                alt={imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/35 via-transparent to-transparent" />
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
