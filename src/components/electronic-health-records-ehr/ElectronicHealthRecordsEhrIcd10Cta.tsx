"use client";

import React from "react";
import { ShieldCheck, Star } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { ehrContainerClassName, ehrSectionClassName } from "./ehrSectionLayout";

export default function ElectronicHealthRecordsEhrIcd10Cta() {
  return (
    <section
      className={`${ehrSectionClassName} pb-20 sm:pb-24 lg:pb-28`}
      aria-labelledby="electronic-health-records-ehr-icd10-cta-heading"
    >
      <div className={ehrContainerClassName}>
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] p-8 text-white shadow-lg sm:rounded-3xl sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-md border border-white/20 bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0F172A]">
                    New
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-blue-100">
                    Ehr for Icd-10 Coding.
                  </span>
                </div>

                <h2
                  id="electronic-health-records-ehr-icd10-cta-heading"
                  className="text-2xl font-bold leading-tight tracking-[-0.02em] sm:text-3xl lg:text-4xl"
                >
                  ICD 10 is big change. But our EHR software is a{" "}
                  <span className="font-bold text-amber-300">bigger solution.</span>
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-[1.6] text-blue-200 sm:mt-5 sm:text-base">
                  Don&apos;t let the coding change you off guard. Our EHR software is fully
                  compliant with ICD 10 and can help you make a smooth transition. Sign up
                  for free and join the future!
                </p>

                <div className="mt-8">
                  <AppButton
                    href="/schedule-a-demo"
                    variant="secondary-dark"
                    size="lg"
                    showArrow
                  >
                    Start My Free Trial
                  </AppButton>
                </div>
              </div>

              <div className="flex justify-center lg:col-span-5 lg:justify-end">
                <div
                  className="relative flex h-48 w-48 items-center justify-center sm:h-56 sm:w-56"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 rounded-full bg-white/[0.06]" />
                  <ShieldCheck className="relative h-28 w-28 text-white/90 sm:h-32 sm:w-32" strokeWidth={1.25} />

                  <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm sm:inset-x-6">
                    <Star className="h-3 w-3 fill-amber-300 text-amber-300" />
                    <span className="text-sm font-extrabold tracking-[0.12em] text-white sm:text-base">
                      ICD-10
                    </span>
                    <Star className="h-3 w-3 fill-amber-300 text-amber-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
