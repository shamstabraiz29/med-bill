"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";

const PROCESS_STEPS = [
  "Clinical coders encode medical charts into numerical and letter coded data string sequences.",
  "Assignment process finds the relevant codes from the medical classification and entering it into the data collection system.",
  "Clinical coders review medical codes to ensure accuracy, including the diagnosis-related group (DRG) if financed via case mix prototype.",
  "Medical billing advocates work with payers to ensure fair reimbursement for healthcare providers, resolving any issues with denied claims.",
  "Medical coding team ensures timely payment by closing tickets only after payment and claims acceptance.",
];

export default function MedicalCodingProvenProcess() {
  return (
    <section
      className="w-full bg-transparent px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="medical-coding-proven-process-heading"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <MotionWrapper variant="slideRight" className="w-full">
            <div className="space-y-5 text-left lg:sticky lg:top-24">
              <h2
                id="medical-coding-proven-process-heading"
                className="text-3xl font-bold leading-[1.18] tracking-[-0.02em] text-[#0F172A] sm:text-4xl lg:text-[2.6rem]"
              >
                Get medical coding done right with our{" "}
                <span className="font-bold text-blue-600">proven process</span>
              </h2>

              <p className="max-w-xl text-sm leading-[1.65] text-[#475569] sm:text-base">
                Our certified coders know how to ethically optimize billing codes
                and documentation, uncover billable codes, and capture every dollar
                you&apos;ve earned from payers.
              </p>

              <p className="max-w-xl text-sm leading-[1.65] text-[#475569] sm:text-base">
                Here&apos;s our systematic approach to represent patient diagnosis
                documentation within the codes.
              </p>
            </div>
          </MotionWrapper>

          <div className="w-full min-w-0">
            <MotionWrapper
              variant="stagger"
              staggerDelay={0.08}
              className="w-full"
            >
              <div className="flex w-full flex-col">
                {PROCESS_STEPS.map((step, index) => (
                  <MotionWrapper key={index} variant="staggerItem" className="w-full">
                    <div
                      className={`grid w-full grid-cols-[2.5rem_minmax(0,1fr)] items-center gap-x-4 sm:gap-x-5 ${
                        index < PROCESS_STEPS.length - 1 ? "mb-4 sm:mb-5" : ""
                      }`}
                    >
                      <div className="relative flex items-center justify-center self-stretch">
                        {index > 0 && (
                          <div
                            className="absolute left-1/2 top-0 h-[calc(50%-1.25rem)] w-px -translate-x-1/2 bg-[#1D4ED8]/25"
                            aria-hidden="true"
                          />
                        )}

                        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#1D4ED8]/20 bg-blue-50 text-xs font-bold text-[#1D4ED8]">
                          {index + 1}
                        </div>

                        {index < PROCESS_STEPS.length - 1 && (
                          <div
                            className="absolute left-1/2 top-[calc(50%+1.25rem)] -bottom-4 w-px -translate-x-1/2 bg-[#1D4ED8]/25 sm:-bottom-5"
                            aria-hidden="true"
                          />
                        )}
                      </div>

                      <div className="min-w-0 rounded-2xl border border-[#E2E6EC] bg-white p-4 shadow-[0_4px_20px_rgba(29,78,216,0.04)] transition-all duration-300 hover:border-[#1D4ED8]/25 sm:p-5">
                        <p className="text-xs leading-[1.65] text-[#475569] sm:text-[13px]">
                          {step}
                        </p>
                      </div>
                    </div>
                  </MotionWrapper>
                ))}

                <MotionWrapper variant="staggerItem" className="w-full pt-4 sm:pt-5">
                  <div className="grid w-full grid-cols-[2.5rem_minmax(0,1fr)] items-center gap-x-4 sm:gap-x-5">
                    <div aria-hidden="true" />
                    <div>
                      <AppButton
                        href="/schedule-a-demo"
                        variant="primary"
                        size="lg"
                        showArrow
                      >
                        Get Started Today
                      </AppButton>
                    </div>
                  </div>
                </MotionWrapper>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
