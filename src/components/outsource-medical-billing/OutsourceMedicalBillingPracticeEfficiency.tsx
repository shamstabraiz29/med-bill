"use client";

import React from "react";
import AppImage from "@/components/ui/AppImage";
import { Stethoscope } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import {
  outsourceContainerClassName,
  outsourceSectionAltClassName,
} from "./outsourceSectionLayout";
import { defaultOutsourceMedicalBillingData } from "@/lib/defaults/outsourceMedicalBilling";
import type { OutsourcePracticeEfficiencyData } from "@/payload/types/outsourceMedicalBilling";

interface OutsourceMedicalBillingPracticeEfficiencyProps {
  data?: OutsourcePracticeEfficiencyData;
}

export default function OutsourceMedicalBillingPracticeEfficiency({ data }: OutsourceMedicalBillingPracticeEfficiencyProps) {
  const content = data || defaultOutsourceMedicalBillingData.practiceEfficiency;
  const rawParagraphs = content.paragraphs && content.paragraphs.length > 0 ? content.paragraphs : defaultOutsourceMedicalBillingData.practiceEfficiency.paragraphs;
  const paragraphsList = rawParagraphs.map((p: any) => (typeof p === "string" ? p : p.text || ""));

  return (
    <section
      className={outsourceSectionAltClassName}
      aria-labelledby="outsource-medical-billing-practice-efficiency-heading"
    >
      <div className={outsourceContainerClassName}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <MotionWrapper variant="slideLeft" className="w-full lg:col-span-6">
            <div className="group relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-[0_8px_30px_rgba(29,78,216,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-xl hover:shadow-blue-900/10 sm:aspect-16/11">
              <AppImage
                src={content.imageSrc || "/doctors-team.png"}
                alt={content.imageAlt || "Healthcare professionals reviewing practice performance on a tablet"}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/45 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-[#0F172A]/90 p-4 text-white shadow-lg backdrop-blur-sm sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-xs">
                <div className="flex items-start gap-3">
                  <IconWrapper
                    icon={Stethoscope}
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

          <MotionWrapper
            variant="slideRight"
            className="flex flex-col items-start space-y-6 text-left lg:col-span-6"
          >
            <h2
              id="outsource-medical-billing-practice-efficiency-heading"
              className="max-w-2xl text-2xl font-bold leading-[1.18] tracking-[-0.02em] text-[#0F172A] sm:text-3xl lg:text-4xl"
            >
              {content.titlePlain}{" "}
              <span className="text-blue-600">{content.titleHighlight}</span>
            </h2>

            <div className="max-w-2xl space-y-4">
              {paragraphsList.map((paragraph, idx) => (
                <p
                  key={paragraph || idx}
                  className="text-sm leading-[1.65] text-[#475569] sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <AppButton href={content.buttonLink || "/schedule-a-demo"} variant="primary" size="lg" showArrow>
              {content.buttonText}
            </AppButton>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
