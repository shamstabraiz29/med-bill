"use client";

import React from "react";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { defaultMedicalCodingData } from "@/lib/defaults/medicalCoding";

interface MedicalCodingWhyChooseUsProps {
  data?: typeof defaultMedicalCodingData.whyChooseUs;
}

export default function MedicalCodingWhyChooseUs({ data }: MedicalCodingWhyChooseUsProps) {
  const whyData = data || defaultMedicalCodingData.whyChooseUs;

  return (
    <section
      className="w-full bg-transparent px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="medical-coding-why-choose-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <MotionWrapper variant="slideRight" className="lg:col-span-6">
            <SectionHeader
              badge={whyData.badge}
              badgeVariant="indigo"
              badgePulse
              align="left"
              title={
                <span id="medical-coding-why-choose-heading">
                  {whyData.titlePlain}{" "}
                  <span className="font-bold text-blue-600">
                    {whyData.titleHighlight}
                  </span>
                </span>
              }
              className="mb-8"
            />

            <MotionWrapper
              variant="stagger"
              staggerDelay={0.06}
              className="flex flex-col gap-3 sm:gap-4"
            >
              {whyData.reasons.map((item, index) => (
                <MotionWrapper key={index} variant="staggerItem">
                  <div className="group rounded-2xl border border-[#E2E6EC] bg-white p-4 shadow-[0_4px_20px_rgba(29,78,216,0.03)] transition-all duration-300 hover:border-[#1D4ED8]/25 sm:p-5">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[11px] font-bold text-[#1D4ED8]">
                        {index + 1}
                      </span>
                      <p className="text-xs leading-[1.65] text-[#475569] sm:text-[13px]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </MotionWrapper>
          </MotionWrapper>

          <MotionWrapper variant="slideLeft" className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="absolute -left-4 top-8 -z-10 hidden h-24 w-24 rounded-full bg-blue-50 blur-2xl sm:block" />
              <div className="absolute -right-3 bottom-10 -z-10 hidden h-28 w-28 rounded-full bg-[#1D4ED8]/10 blur-3xl sm:block" />

              <div className="relative overflow-hidden rounded-2xl border border-[#E2E6EC] shadow-md">
                <div className="relative aspect-[4/5] min-h-[360px] sm:min-h-[460px]">
                  <Image
                    src={whyData.imageSrc || "/doctor-hero.png"}
                    alt={whyData.imageAlt || "BellMedEx certified medical coder reviewing clinical documentation"}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-tr from-[#1D4ED8]/25 via-transparent to-transparent" />

                  <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg, transparent, transparent 18px, #1D4ED8 18px, #1D4ED8 19px)",
                    }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
