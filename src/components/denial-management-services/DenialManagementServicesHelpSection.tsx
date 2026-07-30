"use client";

import React from "react";
import Image from "next/image";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import DenialManagementServicesHelpAccordion from "./DenialManagementServicesHelpAccordion";
import {
  denialManagementContainerClassName,
  denialManagementSectionAltClassName,
  denialManagementSectionBodyClassName,
  denialManagementSectionHighlightClassName,
  denialManagementSectionTitleClassName,
} from "./denialManagementSectionLayout";
import { defaultDenialManagementServicesData } from "@/lib/defaults/denialManagementServices";
import type { DenialManagementHelpSectionData } from "@/payload/types/denialManagementServices";

interface DenialManagementServicesHelpSectionProps {
  data?: DenialManagementHelpSectionData;
}

export default function DenialManagementServicesHelpSection({
  data,
}: DenialManagementServicesHelpSectionProps) {
  const content = data || defaultDenialManagementServicesData.help;
  const items =
    content.accordionItems && content.accordionItems.length > 0
      ? content.accordionItems
      : defaultDenialManagementServicesData.help.accordionItems;
  const imageSrc = content.imageSrc || "/consultants-laptop.png";
  const imageAlt =
    content.imageAlt || "Healthcare billing team reviewing claim denial data and charts";

  return (
    <section
      className={denialManagementSectionAltClassName}
      aria-labelledby="denial-management-services-help-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[32px_32px] opacity-15"
      />

      <div className={`${denialManagementContainerClassName} relative z-10`}>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <MotionWrapper
            variant="slideLeft"
            className="flex flex-col items-start space-y-6 text-left lg:col-span-6"
          >
            <SectionBadge variant="indigo" pulse>
              {content.badge}
            </SectionBadge>

            <h2
              id="denial-management-services-help-heading"
              className={denialManagementSectionTitleClassName}
            >
              {content.titlePlain}
              <span className={denialManagementSectionHighlightClassName}>{content.titleHighlight}</span>
            </h2>

            <div className="max-w-2xl space-y-4">
              <p className={denialManagementSectionBodyClassName}>{content.paragraph1}</p>
              <p className={denialManagementSectionBodyClassName}>{content.paragraph2}</p>
            </div>

            <div className="group relative mt-2 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-[0_8px_30px_rgba(29,78,216,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1D4ED8]/30 hover:shadow-xl hover:shadow-blue-900/10">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 via-transparent to-transparent" />
            </div>
          </MotionWrapper>

          <MotionWrapper variant="slideRight" className="w-full lg:col-span-6">
            <DenialManagementServicesHelpAccordion
              heading={content.accordionHeading}
              items={items}
            />
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
