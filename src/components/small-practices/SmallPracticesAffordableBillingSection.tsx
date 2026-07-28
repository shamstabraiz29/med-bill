"use client";

import React from "react";
import Image from "next/image";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import {
  smallPracticeCardClassName,
  smallPracticeContainerClassName,
  smallPracticeSectionClassName,
} from "./smallPracticeSectionLayout";
import type { SmallPracticesPageData } from "@/payload/types/smallPractices";

const DEFAULT_BENEFITS = [
  "BellMedEx's certified billing team helps independent doctors and small practices make more money.",
  "Grow your clinic without needing to hire more staff or buy costly software.",
  "Keep coding accurate (CPT/ICD-10) and save time and costs for small healthcare providers.",
  "Make your entire RCM simple. Check eligibility, scrub claims, manage denials, and post payments all in one affordable workflow.",
  "Handle patient visits easily, making sure each small-practice appointment turns into a clear, payer-compliant claim.",
];

interface SmallPracticesAffordableBillingSectionProps {
  data?: SmallPracticesPageData["affordableBilling"];
}

export default function SmallPracticesAffordableBillingSection({ data }: SmallPracticesAffordableBillingSectionProps) {
  const badge = data?.badge ?? "Revenue & Profit.";
  const titlePlain = data?.titlePlain ?? "Are You Making More Revenue but ";
  const titleHighlight = data?.titleHighlight ?? "Lesser Profits?";
  const description = data?.description ?? "Guess what, higher billing costs could be taking away a big chunk of your revenue, leaving crumbs behind.";
  const mainTitlePlain = data?.mainTitlePlain ?? "Outsourcing with BellMedEx Is Inexpensive Because We Make Billing ";
  const mainTitleHighlight = data?.mainTitleHighlight ?? "Affordable for Your Individual Practice";
  const p1 = data?.paragraph1 ?? "At BellMedEx, we have helped over 1,500 small and mid-sized practices with billing & collections + coding assistance for independent practices. These include family medicine offices, low-volume practices, and rural health clinics. Our medical billing solutions increase their revenue by an average of 30% in a cost-effective way.";
  const p2 = data?.paragraph2 ?? "A small-budget clinic faces challenges like accounts management and claim denials. It works hard to provide quality care while managing many tasks and tight budgets. Our accounts management team provides affordable and effective medical billing support. We help small healthcare practices grow from just surviving to thriving.";
  const imageSrc = data?.imageSrc ?? "/consultants-laptop.png";
  const imageAlt = data?.imageAlt ?? "Healthcare professional reviewing medical billing analytics on a laptop";

  const benefits = data?.benefits && data.benefits.length > 0
    ? data.benefits.map((b) => (typeof b === "string" ? b : b.text))
    : DEFAULT_BENEFITS;

  return (
    <section
      className={cn(smallPracticeSectionClassName, "border-t border-[#E2E6EC]")}
      aria-labelledby="small-practices-affordable-billing-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-20"
      />

      <div className={`${smallPracticeContainerClassName} relative z-10 space-y-12 sm:space-y-14 lg:space-y-16`}>
        <MotionWrapper variant="fadeUp" className="mx-auto max-w-3xl text-center">
          <SectionHeader
            badge={badge}
            badgeVariant="indigo"
            badgePulse
            align="center"
            title={
              <span>
                {titlePlain}
                <span className="text-blue-600">{titleHighlight}</span>
              </span>
            }
            description={description}
          />
        </MotionWrapper>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <MotionWrapper
            variant="slideLeft"
            className="flex flex-col items-start space-y-6 text-left lg:col-span-7"
          >
            <h2
              id="small-practices-affordable-billing-heading"
              className="max-w-2xl text-2xl font-bold leading-[1.18] tracking-[-0.02em] text-[#0F172A] sm:text-3xl lg:text-4xl"
            >
              {mainTitlePlain}
              <span className="text-blue-600">{mainTitleHighlight}</span>
            </h2>

            <div className="max-w-2xl space-y-4">
              <p className="text-sm leading-[1.65] text-[#475569] sm:text-base">{p1}</p>
              <p className="text-sm leading-[1.65] text-[#475569] sm:text-base">{p2}</p>
            </div>
          </MotionWrapper>

          <MotionWrapper variant="slideRight" className="w-full lg:col-span-5">
            <div className="group relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-[0_8px_30px_rgba(29,78,216,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-xl hover:shadow-blue-900/10 sm:aspect-16/11">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/45 via-transparent to-transparent" />
            </div>
          </MotionWrapper>
        </div>

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6"
        >
          {benefits.map((benefit, idx) => (
            <MotionWrapper key={idx} variant="staggerItem">
              <div
                className={cn(
                  smallPracticeCardClassName,
                  "h-full p-5 transition-all duration-300 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5 sm:p-6"
                )}
              >
                <p className="text-sm leading-[1.65] text-[#475569] sm:text-[15px]">{benefit}</p>
              </div>
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
