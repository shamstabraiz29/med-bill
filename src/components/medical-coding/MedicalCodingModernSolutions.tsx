"use client";

import React from "react";
import AppImage from "@/components/ui/AppImage";
import AppButton from "@/components/ui/AppButton";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import MedicalCodingServiceCard from "./MedicalCodingServiceCard";
import { getIcon } from "@/lib/icons";
import { defaultMedicalCodingData } from "@/lib/defaults/medicalCoding";

interface MedicalCodingModernSolutionsProps {
  data?: typeof defaultMedicalCodingData.modernSolutions;
}

export default function MedicalCodingModernSolutions({ data }: MedicalCodingModernSolutionsProps) {
  const modernData = data || defaultMedicalCodingData.modernSolutions;

  return (
    <section
      className="relative w-full overflow-hidden bg-transparent py-16 sm:py-20 lg:py-24"
      aria-labelledby="medical-coding-modern-solutions-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <MotionWrapper variant="slideRight" className="lg:col-span-6">
            <SectionHeader
              badge={modernData.badge}
              badgeVariant="indigo"
              badgePulse
              align="left"
              title={
                <span id="medical-coding-modern-solutions-heading">
                  {modernData.titlePrefix}{" "}
                  <span className="font-bold text-blue-600">{modernData.titleHighlight}</span>{" "}
                  {modernData.titleSuffix}
                </span>
              }
              className="mb-6 sm:mb-8"
            />

            <AppButton href={modernData.ctaHref || "/medical-billing-audit"} variant="primary" size="lg" showArrow>
              {modernData.ctaLabel}
            </AppButton>
          </MotionWrapper>

          <MotionWrapper variant="slideLeft" className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div
                className="absolute -right-3 top-8 -z-10 hidden h-24 w-24 rounded-full bg-primary/10 blur-2xl sm:block"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-2xl border border-border shadow-md">
                <div className="relative aspect-[5/4] min-h-[280px] sm:min-h-[340px]">
                  <AppImage
                    src={modernData.imageSrc || "/doctor-hero.png"}
                    alt={modernData.imageAlt || "BellMedEx medical coding specialist supporting American healthcare providers"}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                  />

                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:gap-6"
        >
          {modernData.solutions.map((solution) => {
            const Icon = getIcon(solution.iconName);
            return (
              <MotionWrapper key={solution.title} variant="staggerItem" className="h-full">
                <MedicalCodingServiceCard
                  icon={Icon}
                  title={solution.title}
                  description={solution.description}
                />
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
