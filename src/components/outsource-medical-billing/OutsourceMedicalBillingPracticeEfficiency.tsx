"use client";

import React from "react";
import Image from "next/image";
import { Stethoscope } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import {
  outsourceContainerClassName,
  outsourceSectionAltClassName,
} from "./outsourceSectionLayout";

const PRACTICE_COPY = [
  "Well, keep your hands on the wheel, but steer it in the right direction.",
  "In the healthcare world, patient care and medical billing are co-dependent yet equally different and unique in essence. Therefore, both need relevant specialists.",
  "Outsourcing billing might seem as if you're losing control over the RCM of your practice. However, in the real world, you are gaining more authority, power, and accuracy over your billing process and overall financial health.",
  "We only take over the non-clinical burden; front and back-end medical billing services, while you stay laser-focused on your core area; patient care.",
];

export default function OutsourceMedicalBillingPracticeEfficiency() {
  return (
    <section
      className={outsourceSectionAltClassName}
      aria-labelledby="outsource-medical-billing-practice-efficiency-heading"
    >
      <div className={outsourceContainerClassName}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <MotionWrapper variant="slideLeft" className="w-full lg:col-span-6">
            <div className="group relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-[0_8px_30px_rgba(29,78,216,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-xl hover:shadow-blue-900/10 sm:aspect-16/11">
              <Image
                src="/doctors-team.png"
                alt="Healthcare professionals reviewing practice performance on a tablet"
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
                      Stay laser-focused on patient care
                    </p>
                    <p className="mt-1 text-[11px] leading-relaxed text-blue-100 sm:text-xs">
                      We take over front and back-end medical billing services.
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
              Are You Steering the Wheel of Your{" "}
              <span className="text-blue-600">Healthcare Practice</span> Efficiently?
            </h2>

            <div className="max-w-2xl space-y-4">
              {PRACTICE_COPY.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-[1.65] text-[#475569] sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <AppButton href="/schedule-a-demo" variant="primary" size="lg" showArrow>
              Get a Demo
            </AppButton>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
