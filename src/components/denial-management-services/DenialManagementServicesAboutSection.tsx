"use client";

import React from "react";
import Image from "next/image";
import { Activity } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import {
  denialManagementContainerClassName,
  denialManagementSectionClassName,
} from "./denialManagementSectionLayout";
import { defaultDenialManagementServicesData } from "@/lib/defaults/denialManagementServices";
import type { DenialManagementAboutSectionData } from "@/payload/types/denialManagementServices";

interface DenialManagementServicesAboutSectionProps {
  data?: DenialManagementAboutSectionData;
}

export default function DenialManagementServicesAboutSection({
  data,
}: DenialManagementServicesAboutSectionProps) {
  const content = data || defaultDenialManagementServicesData.about;
  const imageSrc = content.imageSrc || "/faq-doctor.png";
  const imageAlt =
    content.imageAlt || "Physician reviewing denial management services on a tablet";

  return (
    <section
      className={denialManagementSectionClassName}
      aria-labelledby="denial-management-services-about-heading"
    >
      <div className={denialManagementContainerClassName}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <MotionWrapper
            variant="slideLeft"
            className="flex flex-col items-start space-y-6 text-left lg:col-span-6"
          >
            <SectionBadge variant="indigo" pulse>
              {content.badge}
            </SectionBadge>

            <h2
              id="denial-management-services-about-heading"
              className="max-w-2xl text-2xl font-bold leading-[1.18] tracking-[-0.02em] text-[#0F172A] sm:text-3xl lg:text-4xl"
            >
              {content.titlePlain}
              <span className="text-blue-600">{content.titleHighlight}</span>
            </h2>

            <div className="max-w-2xl space-y-4">
              <p className="text-sm leading-[1.6] text-[#475569] sm:text-base">
                {content.paragraph1}
              </p>
              <p className="text-sm leading-[1.6] text-[#475569] sm:text-base">
                {content.paragraph2}
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper variant="slideRight" className="w-full lg:col-span-6">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-6 -top-6 h-24 w-24 rounded-full border border-dashed border-[#1D4ED8]/25 sm:h-32 sm:w-32"
              />

              <div className="group relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-[0_8px_30px_rgba(29,78,216,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-xl hover:shadow-blue-900/10 sm:aspect-16/11">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent" />
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#1D4ED8] text-white shadow-sm">
                  <Activity className="h-6 w-6" aria-hidden="true" />
                  <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#22C55E]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold leading-none tracking-[-0.02em] text-[#0F172A]">
                    Bell<span className="text-[#1D4ED8]">Med</span>Ex
                  </span>
                  <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#475569]">
                    RCM Services
                  </span>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
