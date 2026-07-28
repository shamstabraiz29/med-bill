"use client";

import React from "react";
import Image from "next/image";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import {
  smallPracticeContainerClassName,
  smallPracticeSectionAltClassName,
} from "./smallPracticeSectionLayout";

export default function SmallPracticesTransparencySection() {
  return (
    <section
      className={smallPracticeSectionAltClassName}
      aria-labelledby="small-practices-transparency-heading"
    >
      <div className={smallPracticeContainerClassName}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <MotionWrapper variant="slideLeft" className="w-full lg:col-span-6">
            <div className="group relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-[0_8px_30px_rgba(29,78,216,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-xl hover:shadow-blue-900/10 sm:aspect-16/11">
              <Image
                src="/rcm-dashboard-laptop1.png"
                alt="Healthcare professional reviewing transparent medical billing reports on a tablet"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/45 via-transparent to-transparent" />
            </div>
          </MotionWrapper>

          <MotionWrapper
            variant="slideRight"
            className="flex flex-col items-start space-y-6 text-left lg:col-span-6"
          >
            <h2
              id="small-practices-transparency-heading"
              className="max-w-2xl text-2xl font-bold leading-[1.18] tracking-[-0.02em] text-[#0F172A] sm:text-3xl lg:text-4xl"
            >
              100% Transparency{" "}
              <span className="text-blue-600">and No Hidden Fees</span>
            </h2>

            <p className="max-w-2xl text-sm leading-[1.65] text-[#475569] sm:text-base">
              We offer high-end services for your small practice. Our team at BellMedEx believes in
              clear communication and making informed decisions to ensure efficiency in all areas of
              our billing services.
            </p>

            <AppButton href="/schedule-a-demo" variant="primary" size="lg" showArrow>
              Schedule a Demo
            </AppButton>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
