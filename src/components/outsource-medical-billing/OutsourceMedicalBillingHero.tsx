"use client";

import React from "react";
import Image from "next/image";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import OutsourceMedicalBillingHeroForm from "./OutsourceMedicalBillingHeroForm";
import { outsourceContainerClassName } from "./outsourceSectionLayout";
import { defaultOutsourceMedicalBillingData } from "@/lib/defaults/outsourceMedicalBilling";
import type { OutsourceHeroData } from "@/payload/types/outsourceMedicalBilling";

interface OutsourceMedicalBillingHeroProps {
  data?: OutsourceHeroData;
}

export default function OutsourceMedicalBillingHero({ data }: OutsourceMedicalBillingHeroProps) {
  const content = data || defaultOutsourceMedicalBillingData.hero;

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0F172A] pt-12 pb-16 lg:pt-16 lg:pb-24"
      aria-labelledby="outsource-medical-billing-hero-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(29,78,216,0.22),transparent_44%),radial-gradient(circle_at_82%_78%,rgba(96,165,250,0.12),transparent_42%)]"
      />

      <div className={`${outsourceContainerClassName} relative z-10`}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <MotionWrapper
            variant="slideLeft"
            className="flex flex-col items-start space-y-5 text-left text-white sm:space-y-6 lg:col-span-6"
          >
            <SectionBadge variant="indigo" pulse>
              {content.badge}
            </SectionBadge>

            <h1
              id="outsource-medical-billing-hero-heading"
              className="max-w-2xl text-2xl font-bold leading-tight tracking-[-0.02em] sm:text-3xl lg:text-4xl"
            >
              {content.titlePlain}{" "}
              <span className="font-bold text-amber-300">{content.titleHighlight}</span>
            </h1>

            <p className="max-w-xl text-sm leading-[1.6] text-blue-200 sm:text-base">
              {content.subtitle}
            </p>

            <AppButton
              href={content.buttonLink || "/schedule-a-demo"}
              variant="secondary-dark"
              size="lg"
              showArrow
            >
              {content.buttonText}
            </AppButton>
          </MotionWrapper>

          <MotionWrapper variant="slideRight" className="relative w-full lg:col-span-6">
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl"
              >
                <Image
                  src="/clearinghouse-nurse-hero.png"
                  alt=""
                  fill
                  className="object-cover object-center opacity-20"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[#0F172A]/40" />
              </div>

              <OutsourceMedicalBillingHeroForm />
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
