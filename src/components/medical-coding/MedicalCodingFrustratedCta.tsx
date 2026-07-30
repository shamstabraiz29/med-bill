"use client";

import React from "react";
import AppImage from "@/components/ui/AppImage";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { defaultMedicalCodingData } from "@/lib/defaults/medicalCoding";

interface MedicalCodingFrustratedCtaProps {
  data?: typeof defaultMedicalCodingData.frustratedCta;
}

export default function MedicalCodingFrustratedCta({ data }: MedicalCodingFrustratedCtaProps) {
  const frustratedData = data || defaultMedicalCodingData.frustratedCta;

  return (
    <section
      className="flex w-full items-center justify-center bg-transparent px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="medical-coding-frustrated-cta-heading"
    >
      <div className="w-full max-w-7xl">
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] p-8 text-white shadow-lg sm:p-12">
            <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
              <MotionWrapper variant="slideRight" className="space-y-3.5 text-left">
                <h2
                  id="medical-coding-frustrated-cta-heading"
                  className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl sm:leading-snug lg:text-4xl"
                >
                  {frustratedData.titlePrefix}{" "}
                  <span className="font-bold text-amber-300">
                    {frustratedData.titleHighlight}
                  </span>
                </h2>

                <p className="max-w-xl text-sm text-blue-200 sm:text-base">
                  {frustratedData.description}
                </p>

                <div className="pt-1">
                  <AppButton
                    href={frustratedData.ctaHref || "/contact-us"}
                    variant="secondary-dark"
                    size="lg"
                    showArrow
                  >
                    {frustratedData.ctaLabel}
                  </AppButton>
                </div>
              </MotionWrapper>

              <MotionWrapper variant="slideLeft" className="relative mx-auto w-full max-w-md lg:max-w-none">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <AppImage
                      src={frustratedData.imageSrc}
                fallbackSrc="/consultants-laptop.png"
                      alt={frustratedData.imageAlt || "BellMedEx medical coding expert reviewing claims on laptop"}
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
