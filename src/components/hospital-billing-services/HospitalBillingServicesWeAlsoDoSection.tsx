"use client";

import React from "react";
import AppImage from "@/components/ui/AppImage";
import { ChevronRight } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import {
  hospitalCardClassName,
  hospitalContainerClassName,
  hospitalSectionClassName,
} from "./hospitalSectionLayout";
import { defaultHospitalBillingServicesData } from "@/lib/defaults/hospitalBillingServices";
import type { HospitalBillingWeAlsoDoSectionData } from "@/payload/types/hospitalBillingServices";

interface HospitalBillingServicesWeAlsoDoSectionProps {
  data?: HospitalBillingWeAlsoDoSectionData;
}

export default function HospitalBillingServicesWeAlsoDoSection({
  data,
}: HospitalBillingServicesWeAlsoDoSectionProps) {
  const content = data || defaultHospitalBillingServicesData.weAlsoDo;
  const items =
    content.items && content.items.length > 0
      ? content.items
      : defaultHospitalBillingServicesData.weAlsoDo.items;

  return (
    <section
      className={cn(hospitalSectionClassName, "border-t border-[#E2E6EC]")}
      aria-labelledby="hospital-billing-services-we-also-do-heading"
    >
      <div className={hospitalContainerClassName}>
        <SectionHeader
          align="center"
          className="mx-auto mb-10 max-w-4xl sm:mb-12"
          title={
            <span id="hospital-billing-services-we-also-do-heading">
              {content.titlePlain}
              <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
            </span>
          }
        />

        <div className="space-y-10 sm:space-y-14 lg:space-y-16">
          {items.map((item, idx) => {
            const imageFirst = idx % 2 === 1;

            return (
              <MotionWrapper
                key={item.title || idx}
                variant={imageFirst ? "slideRight" : "slideLeft"}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12"
              >
                <div className={cn("w-full", imageFirst ? "lg:order-1" : "lg:order-2")}>
                  <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-[0_8px_30px_rgba(29,78,216,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1D4ED8]/30 sm:aspect-[16/11]">
                    <AppImage
                      src={item.imageSrc || "/consultants-laptop.png"}
                      alt={item.imageAlt || item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 via-transparent to-transparent" />
                  </div>
                </div>

                <div className={cn("w-full", imageFirst ? "lg:order-2" : "lg:order-1")}>
                  <div className={`${hospitalCardClassName} p-6 sm:p-8`}>
                    <h3 className="text-base font-bold leading-snug tracking-[-0.02em] text-[#0F172A] transition-colors group-hover:text-[#1D4ED8] sm:text-lg">
                      {item.title}
                    </h3>
                    <ul className="mt-5 space-y-3">
                      {item.bullets.map((bullet, bulletIdx) => (
                        <li key={bullet || bulletIdx} className="flex items-start gap-2.5 text-left">
                          <ChevronRight
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#475569] stroke-[2.5]"
                            aria-hidden="true"
                          />
                          <span className="text-sm leading-[1.6] text-[#475569] sm:text-base">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
