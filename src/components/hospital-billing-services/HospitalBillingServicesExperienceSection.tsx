"use client";

import React from "react";
import AppImage from "@/components/ui/AppImage";
import { Check } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import {
  hospitalContainerClassName,
  hospitalSectionAltClassName,
  hospitalSectionBodyClassName,
  hospitalSectionHighlightClassName,
  hospitalSectionTitleClassName,
} from "./hospitalSectionLayout";
import { defaultHospitalBillingServicesData } from "@/lib/defaults/hospitalBillingServices";
import type { HospitalBillingExperienceSectionData } from "@/payload/types/hospitalBillingServices";

interface HospitalBillingServicesExperienceSectionProps {
  data?: HospitalBillingExperienceSectionData;
}

export default function HospitalBillingServicesExperienceSection({
  data,
}: HospitalBillingServicesExperienceSectionProps) {
  const content = data || defaultHospitalBillingServicesData.experience;
  const checklist =
    content.checklist && content.checklist.length > 0
      ? content.checklist
      : defaultHospitalBillingServicesData.experience.checklist;
  const imageSrc = content.imageSrc || "/gennaya-matt.png";
  const imageAlt =
    content.imageAlt || "Healthcare professionals partnering on hospital billing services";

  return (
    <section
      className={hospitalSectionAltClassName}
      aria-labelledby="hospital-billing-services-experience-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[32px_32px] opacity-15"
      />

      <div className={`${hospitalContainerClassName} relative z-10`}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <MotionWrapper variant="slideLeft" className="w-full lg:col-span-6">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-4 -top-4 h-full w-full rounded-2xl border-2 border-[#1D4ED8]/25 sm:-left-5 sm:-top-5"
              />

              <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-[0_8px_30px_rgba(29,78,216,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1D4ED8]/30 hover:shadow-xl hover:shadow-blue-900/10 sm:aspect-[16/11]">
                <AppImage
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/25 via-transparent to-transparent" />

                <div className="absolute bottom-4 right-4 max-w-[220px] rounded-xl bg-gradient-to-b from-[#1D4ED8] to-[#60A5FA] p-4 shadow-lg sm:bottom-6 sm:right-6 sm:max-w-[240px] sm:p-5">
                  <ul className="space-y-2 text-left">
                    {checklist.map((item, idx) => (
                      <li key={item || idx} className="flex items-start gap-2">
                        <Check
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 stroke-[3] text-white"
                          aria-hidden="true"
                        />
                        <span className="text-[11px] font-medium leading-snug text-white sm:text-xs">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper
            variant="slideRight"
            className="flex flex-col items-start space-y-6 text-left lg:col-span-6"
          >
            <h2
              id="hospital-billing-services-experience-heading"
              className={hospitalSectionTitleClassName}
            >
              {content.titlePlain}
              <span className={hospitalSectionHighlightClassName}>{content.titleHighlight}</span>
            </h2>

            <div className="max-w-2xl space-y-4">
              <p className={hospitalSectionBodyClassName}>{content.paragraph1}</p>
              <p className={hospitalSectionBodyClassName}>{content.paragraph2}</p>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
