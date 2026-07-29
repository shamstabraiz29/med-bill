"use client";

import React from "react";
import { PhoneCall } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import {
  denialManagementContainerClassName,
  denialManagementSectionClassName,
} from "./denialManagementSectionLayout";
import { defaultDenialManagementServicesData } from "@/lib/defaults/denialManagementServices";
import type { DenialManagementContactSupportData } from "@/payload/types/denialManagementServices";

interface DenialManagementServicesContactSupportSectionProps {
  data?: DenialManagementContactSupportData;
}

export default function DenialManagementServicesContactSupportSection({
  data,
}: DenialManagementServicesContactSupportSectionProps) {
  const content = data || defaultDenialManagementServicesData.contactSupport;

  return (
    <section
      className={denialManagementSectionClassName}
      aria-labelledby="denial-management-services-contact-support-heading"
    >
      <div className={denialManagementContainerClassName}>
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] p-8 text-white shadow-lg sm:rounded-3xl sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#1D4ED8]/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#1D4ED8]/10 blur-3xl"
            />

            <div className="relative grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
              <div className="space-y-5 text-left lg:col-span-8">
                <h2
                  id="denial-management-services-contact-support-heading"
                  className="max-w-2xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl sm:leading-snug lg:text-4xl"
                >
                  {content.titlePlain}
                  <span className="text-amber-300">{content.titleHighlight}</span>
                </h2>

                <div className="max-w-3xl space-y-4">
                  <p className="text-sm leading-[1.65] text-blue-200 sm:text-base">
                    {content.paragraph1}
                  </p>
                  <p className="text-sm leading-[1.65] text-blue-200 sm:text-base">
                    {content.paragraph2}
                  </p>
                  <p className="text-sm font-bold leading-[1.65] text-white sm:text-base">
                    {content.paragraph3BeforePhone}
                    <a
                      href={content.phoneLink || "tel:+18889876250"}
                      className="text-amber-300 underline decoration-amber-300/40 underline-offset-2 transition-colors hover:text-amber-200"
                    >
                      {content.phoneText}
                    </a>
                    {content.paragraph3AfterPhone}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch lg:justify-center xl:items-end">
                <AppButton
                  href={content.buttonHref || "/contact-us"}
                  variant="secondary-dark"
                  size="lg"
                  showArrow
                  className="w-full sm:w-auto lg:w-full"
                >
                  {content.buttonText}
                </AppButton>
                <AppButton
                  href={content.phoneLink || "tel:+18889876250"}
                  variant="secondary-dark"
                  size="lg"
                  icon={PhoneCall}
                  className="w-full sm:w-auto lg:w-full"
                >
                  {content.phoneText}
                </AppButton>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
