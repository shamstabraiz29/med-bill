"use client";

import React from "react";
import Image from "next/image";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";

export default function MedicalCodingFrustratedCta() {
  return (
    <section
      className="w-full bg-transparent px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="medical-coding-frustrated-cta-heading"
    >
      <div className="mx-auto w-full max-w-7xl">
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0F172A] shadow-lg">
            <div
              className="pointer-events-none absolute -left-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#1D4ED8]/15 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative grid grid-cols-1 items-center gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-10 lg:p-10 xl:p-12">
              <MotionWrapper variant="slideRight" className="space-y-5 text-left">
                <h2
                  id="medical-coding-frustrated-cta-heading"
                  className="text-2xl font-bold leading-[1.2] tracking-[-0.02em] text-white sm:text-3xl lg:text-4xl"
                >
                  Are You Frustrated with Medical Coding Errors, Denials, and Delays?
                </h2>

                <p className="max-w-xl text-sm leading-[1.65] text-blue-200 sm:text-base">
                  BellMedEx provides complete medical coding solutions and services. Our
                  certified coders handle all coding projects — in-patient, outpatient,
                  emergency, or specialty services. So don&apos;t let medical coding
                  problems affect your bottom line, as our experts will detect them and
                  correct them before they damage your practice.
                </p>

                <div className="pt-1">
                  <AppButton
                    href="/contact-us"
                    variant="secondary-dark"
                    size="lg"
                    showArrow
                  >
                    Get A Free Quote
                  </AppButton>
                </div>
              </MotionWrapper>

              <MotionWrapper variant="slideLeft" className="relative mx-auto w-full max-w-md lg:max-w-none">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src="/consultants-laptop.png"
                      alt="BellMedEx medical coding expert reviewing claims on laptop"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0F172A]/30 via-transparent to-transparent" />
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
