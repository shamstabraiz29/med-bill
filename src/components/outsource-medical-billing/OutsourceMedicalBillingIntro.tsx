"use client";

import React from "react";
import AppImage from "@/components/ui/AppImage";
import { AlertCircle, Clock, FileWarning, LucideIcon, TrendingDown } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import {
  outsourceCardClassName,
  outsourceContainerClassName,
  outsourceSectionClassName,
} from "./outsourceSectionLayout";
import { defaultOutsourceMedicalBillingData } from "@/lib/defaults/outsourceMedicalBilling";
import type { OutsourceIntroData } from "@/payload/types/outsourceMedicalBilling";

const ICON_MAP: Record<string, LucideIcon> = {
  TrendingDown,
  FileWarning,
  Clock,
};

interface OutsourceMedicalBillingIntroProps {
  data?: OutsourceIntroData;
}

export default function OutsourceMedicalBillingIntro({ data }: OutsourceMedicalBillingIntroProps) {
  const content = data || defaultOutsourceMedicalBillingData.intro;
  const challengesList = content.challenges && content.challenges.length > 0 ? content.challenges : defaultOutsourceMedicalBillingData.intro.challenges;

  return (
    <section
      className={cn(outsourceSectionClassName, "border-t border-[#E2E6EC]")}
      aria-labelledby="outsource-medical-billing-intro-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-25"
      />

      <div className={`${outsourceContainerClassName} relative z-10`}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <MotionWrapper
            variant="slideLeft"
            className="flex flex-col items-start space-y-8 text-left lg:col-span-6"
          >
            <SectionHeader
              badge={content.badge}
              badgeVariant="indigo"
              badgePulse
              className="max-w-2xl"
              title={
                <span id="outsource-medical-billing-intro-heading">
                  <span className="text-blue-600">{content.titlePlain}</span>
                  {content.titleHighlight}
                </span>
              }
              description={content.description}
            />

            <div className="w-full max-w-2xl">
              <p className="mb-4 text-sm font-semibold text-[#0F172A] sm:text-base">
                {content.commonProblemsTitle}
              </p>

              <MotionWrapper
                variant="stagger"
                staggerDelay={0.08}
                className="flex flex-col gap-3"
              >
                {challengesList.map((challenge, idx) => {
                  const Icon = (challenge.iconName && ICON_MAP[challenge.iconName]) || TrendingDown;

                  return (
                    <MotionWrapper key={challenge.title || idx} variant="staggerItem">
                      <div
                        className={cn(
                          outsourceCardClassName,
                          "flex-row items-center gap-4 p-4 sm:flex sm:p-5"
                        )}
                      >
                        <IconWrapper
                          icon={Icon}
                          size="sm"
                          variant="surface"
                          className="shrink-0 transition-transform duration-300 group-hover:scale-110"
                        />
                        <p className="text-sm leading-[1.65] text-[#475569] sm:text-base">
                          {challenge.title}
                        </p>
                      </div>
                    </MotionWrapper>
                  );
                })}
              </MotionWrapper>
            </div>

            <AppButton href={content.buttonLink || "/schedule-a-demo"} variant="primary" size="lg" showArrow>
              {content.buttonText}
            </AppButton>
          </MotionWrapper>

          <MotionWrapper variant="slideRight" className="w-full lg:col-span-6">
            <div className="group relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-[0_8px_30px_rgba(29,78,216,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-xl hover:shadow-blue-900/10 sm:aspect-16/11">
              <AppImage
                src={content.imageSrc}
                fallbackSrc="/doctor-hero.png"
                alt={content.imageAlt || "Physician reviewing medical billing workflows on a laptop"}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-[#0F172A]/90 p-4 text-white shadow-lg backdrop-blur-sm sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs">
                <div className="flex items-start gap-3">
                  <IconWrapper
                    icon={AlertCircle}
                    size="sm"
                    variant="surface"
                    className="border-white/20 bg-white/10 text-white [&_svg]:text-white"
                  />
                  <div>
                    <p className="text-xs font-bold tracking-tight sm:text-sm">
                      {content.calloutTitle}
                    </p>
                    <p className="mt-1 text-[11px] leading-relaxed text-blue-100 sm:text-xs">
                      {content.calloutDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
