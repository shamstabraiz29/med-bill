"use client";

import React from "react";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import BillingCodingConsultantItem from "./BillingCodingConsultantItem";
import { getIcon } from "@/lib/icons";
import { defaultMedicalBillingData } from "@/lib/defaults/medicalBilling";

interface MedicalBillingCodingConsultantsProps {
  data?: typeof defaultMedicalBillingData.codingConsultants;
}

export default function MedicalBillingCodingConsultants({ data }: MedicalBillingCodingConsultantsProps) {
  const codingData = data || defaultMedicalBillingData.codingConsultants;

  return (
    <section
      className="relative flex w-full items-center justify-center overflow-hidden bg-transparent px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="coding-consultants-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden="true"
      >
        <div className="absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-blue-100/80 blur-3xl" />
        <div className="absolute -left-16 bottom-1/4 h-56 w-56 rounded-full bg-blue-50 blur-3xl" />
      </div>

      <div className="relative w-full max-w-7xl">
        <SectionHeader
          badge={codingData.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="coding-consultants-heading">
              {codingData.titlePrefix}{" "}
              <span className="font-bold text-blue-600">
                {codingData.titleHighlight}
              </span>
            </span>
          }
          description={codingData.description}
          className="mb-12 mx-auto max-w-4xl sm:mb-16"
        />

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <MotionWrapper
            variant="stagger"
            staggerDelay={0.1}
            className="flex flex-col gap-8 lg:col-span-6 xl:col-span-7"
          >
            {codingData.items.map((item) => {
              const Icon = getIcon(item.iconName);
              return (
                <MotionWrapper key={item.title} variant="staggerItem">
                  <BillingCodingConsultantItem
                    icon={Icon}
                    title={item.title}
                    description={item.description}
                  />
                </MotionWrapper>
              );
            })}
          </MotionWrapper>

          <MotionWrapper
            variant="slideRight"
            className="relative lg:col-span-6 xl:col-span-5"
          >
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div
                className="pointer-events-none absolute -right-6 top-8 h-28 w-28 rounded-full border border-blue-200/60 bg-blue-50/50 sm:h-36 sm:w-36"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -left-4 bottom-10 h-20 w-20 rounded-full bg-blue-100/70 blur-sm sm:h-24 sm:w-24"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-[0_8px_30px_rgba(29,78,216,0.08)]">
                <div className="relative aspect-[4/3] w-full sm:aspect-[5/4]">
                  <Image
                    src={codingData.imageSrc || "/consultants-laptop.png"}
                    alt={codingData.imageAlt || "BellMedEx medical coding dashboard"}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                    priority={false}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#1D4ED8]/10 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
