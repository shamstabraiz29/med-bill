"use client";

import React from "react";
import AppImage from "@/components/ui/AppImage";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import {
  denialManagementContainerClassName,
  denialManagementSectionAltClassName,
} from "./denialManagementSectionLayout";
import { defaultDenialManagementServicesData } from "@/lib/defaults/denialManagementServices";
import type { DenialManagementUnderpaymentRecoverySectionData } from "@/payload/types/denialManagementServices";

interface DenialManagementServicesUnderpaymentRecoverySectionProps {
  data?: DenialManagementUnderpaymentRecoverySectionData;
}

export default function DenialManagementServicesUnderpaymentRecoverySection({
  data,
}: DenialManagementServicesUnderpaymentRecoverySectionProps) {
  const content = data || defaultDenialManagementServicesData.underpaymentRecovery;
  const imageSrc = content.imageSrc || "/rcm-card-billing.png";
  const imageAlt =
    content.imageAlt ||
    "Healthcare billing professionals reviewing hospital denial management reports";

  return (
    <section
      className={denialManagementSectionAltClassName}
      aria-labelledby="denial-management-services-underpayment-recovery-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[32px_32px] opacity-15"
      />

      <div className={`${denialManagementContainerClassName} relative z-10`}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <MotionWrapper variant="slideLeft" className="w-full lg:col-span-6">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -right-6 -top-6 h-24 w-24 rounded-full border border-dashed border-[#1D4ED8]/25 sm:h-32 sm:w-32"
              />

              <div className="group relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-[0_8px_30px_rgba(29,78,216,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-xl hover:shadow-blue-900/10 sm:aspect-16/11">
                <AppImage
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent" />
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper
            variant="slideRight"
            className="flex flex-col items-start space-y-6 text-left lg:col-span-6"
          >
            <SectionBadge variant="indigo" pulse>
              {content.badge}
            </SectionBadge>

            <h2
              id="denial-management-services-underpayment-recovery-heading"
              className="max-w-2xl text-2xl font-bold leading-[1.18] tracking-[-0.02em] text-[#0F172A] sm:text-3xl lg:text-4xl"
            >
              {content.titlePlain}
              <span className="text-blue-600">{content.titleHighlight}</span>
              {content.titleSuffix}
            </h2>

            <div className="max-w-2xl space-y-4">
              <p className="text-sm leading-[1.6] text-[#475569] sm:text-base">
                {content.paragraph1}
              </p>
              <p className="text-sm leading-[1.6] text-[#475569] sm:text-base">
                {content.paragraph2}
              </p>
              <p className="text-sm leading-[1.6] text-[#475569] sm:text-base">
                {content.paragraph3}
              </p>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
