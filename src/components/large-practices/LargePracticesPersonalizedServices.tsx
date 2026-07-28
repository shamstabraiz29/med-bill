"use client";

import React from "react";
import Image from "next/image";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  largePracticeContainerClassName,
  largePracticeSectionClassName,
} from "./largePracticeSectionLayout";

const PERSONALIZED_COPY = [
  "We understand one-size doesn't fit all and your large practice needs customized services that are transparent yet error-less. We audit your billing process, identify, and rectify errors and check all unpaid and aging claims.",
  "Your Large Practice is fighting multiple battles from patient registration to claims submission and denial management. We take over all your non-clinical burden to help you focus on delivering patient care.",
  "In fact, we have billing, coding, and RCM systems for your large practice in place. We submit clean claims more than 99% of the time, ensure timely submission of medical claims, follow up on aging A/R daily, and increase reimbursements.",
] as const;

export default function LargePracticesPersonalizedServices() {
  return (
    <section
      className={`${largePracticeSectionClassName} border-t border-[#E2E6EC]`}
      aria-labelledby="large-practices-personalized-services-heading"
    >
      <div className={largePracticeContainerClassName}>
        <SectionHeader
          badge="Personalized Billing."
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-4xl sm:mb-14"
          title={
            <span id="large-practices-personalized-services-heading">
              Get Personalized Medical Billing Services to Refine your{" "}
              <span className="text-blue-600">
                Billing, Coding, and overall RCM Strengths
              </span>
            </span>
          }
        />

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <MotionWrapper
            variant="slideLeft"
            className="flex flex-col items-start space-y-6 text-left lg:col-span-6"
          >
            <div className="max-w-2xl space-y-4">
              {PERSONALIZED_COPY.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-[1.65] text-[#475569] sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <AppButton
              href="/schedule-a-demo"
              variant="primary"
              size="lg"
              showArrow
              className="w-full shadow-md shadow-blue-900/10 sm:w-auto"
            >
              Book Free Consultation Now
            </AppButton>
          </MotionWrapper>

          <MotionWrapper variant="slideRight" className="w-full lg:col-span-6">
            <div className="group relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-[0_8px_30px_rgba(29,78,216,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-xl hover:shadow-blue-900/10 sm:aspect-16/11">
              <Image
                src="/consultants-laptop.png"
                alt="Medical billing consultant supporting a large healthcare practice"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
