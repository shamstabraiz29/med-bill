"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { pmsContainerClassName, pmsSectionClassName } from "./pmsSectionLayout";

const CTA_HIGHLIGHTS = [
  "Easy registration",
  "Access 24/7",
  "Specialty specific",
];

export default function PracticeManagementSoftwarePmsGetStartedCta() {
  return (
    <section
      className={`${pmsSectionClassName} pb-20 sm:pb-24 lg:pb-28`}
      aria-labelledby="practice-management-software-pms-get-started-cta-heading"
    >
      <div className={pmsContainerClassName}>
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] px-6 py-10 text-center text-white shadow-lg sm:rounded-3xl sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            <ul className="mb-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:mb-10 sm:gap-x-10">
              {CTA_HIGHLIGHTS.map((label) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-blue-100 sm:text-sm"
                >
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 text-emerald-400"
                    aria-hidden="true"
                  />
                  {label}
                </li>
              ))}
            </ul>

            <h2
              id="practice-management-software-pms-get-started-cta-heading"
              className="mx-auto max-w-3xl text-2xl font-bold leading-tight tracking-[-0.02em] sm:text-3xl lg:text-4xl"
            >
              Free PMS? We Know You Want It.
              <br />
              <span className="text-amber-300">Try It Now for FREE!</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-[1.6] text-blue-200 sm:mt-5 sm:text-base">
              You have nothing to lose and everything to gain with our free practice
              management software. Contact us today for free access and discover how
              premium features make running your practice easier.
            </p>

            <div className="mt-8 flex justify-center sm:mt-10">
              <AppButton
                href="/schedule-a-demo"
                variant="secondary-dark"
                size="lg"
                showArrow
              >
                Get Started For Free
              </AppButton>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
