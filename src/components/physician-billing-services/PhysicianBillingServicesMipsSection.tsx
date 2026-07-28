"use client";

import React from "react";
import Image from "next/image";
import AppButton from "@/components/ui/AppButton";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  physicianContainerClassName,
  physicianSectionAltClassName,
} from "./physicianSectionLayout";
import { defaultPhysicianBillingServicesData } from "@/lib/defaults/physicianBillingServices";
import type { PhysicianBillingServicesPageData } from "@/payload/types/physicianBillingServices";

interface PhysicianBillingServicesMipsSectionProps {
  data?: PhysicianBillingServicesPageData["mipsSection"];
}

export default function PhysicianBillingServicesMipsSection({ data }: PhysicianBillingServicesMipsSectionProps) {
  const content = data || defaultPhysicianBillingServicesData.mipsSection;
  const rawParagraphs = content.paragraphs && content.paragraphs.length > 0 ? content.paragraphs : defaultPhysicianBillingServicesData.mipsSection.paragraphs;
  const paragraphTexts = rawParagraphs.map(p => typeof p === 'string' ? p : p.text);

  return (
    <section
      className={physicianSectionAltClassName}
      aria-labelledby="physician-billing-mips-heading"
    >
      <div className={physicianContainerClassName}>
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-4xl sm:mb-14"
          title={
            <span id="physician-billing-mips-heading">
              {content.titlePlain}{" "}
              <span className="text-blue-600">{content.titleHighlight}</span>
            </span>
          }
        />

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-start space-y-6 text-left">
            <div className="max-w-2xl space-y-4">
              {paragraphTexts.map((paragraph, idx) => (
                <p
                  key={paragraph || idx}
                  className="text-sm leading-[1.65] text-[#475569] sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <AppButton href={content.ctaHref || "/schedule-a-demo"} variant="primary" size="lg" showArrow>
              {content.ctaText || "Yes, I'm Interested"}
            </AppButton>
          </div>

          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white sm:aspect-16/11">
            <Image
              src={content.imageSrc || "/faq-doctor.png"}
              alt={content.imageAlt || "Experienced physician supported by BellMedEx MIPS billing solutions"}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
