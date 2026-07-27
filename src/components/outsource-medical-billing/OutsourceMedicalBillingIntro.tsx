"use client";

import React from "react";
import Image from "next/image";
import { AlertCircle, Clock, FileWarning, TrendingDown } from "lucide-react";
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

const BILLING_CHALLENGES = [
  { icon: TrendingDown, title: "Lost revenue in denied claims" },
  { icon: FileWarning, title: "Unaddressed old claims" },
  { icon: Clock, title: "Delayed and denied claims" },
];

export default function OutsourceMedicalBillingIntro() {
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
              badge="Reduce Revenue Leaks."
              badgeVariant="indigo"
              badgePulse
              className="max-w-2xl"
              title={
                <span id="outsource-medical-billing-intro-heading">
                  <span className="text-blue-600">Outsource Medical Billing</span> today
                  to Reduce Errors, Minimize Revenue Holes, and Maximize Collections
                </span>
              }
              description={
                <>
                  Medical billing is a complex and dynamic process that requires constant
                  attention and expertise. If you are struggling with billing errors,
                  revenue leaks, or collection issues, you may be losing money and time
                  that could be better spent on patient care.
                </>
              }
            />

            <div className="w-full max-w-2xl">
              <p className="mb-4 text-sm font-semibold text-[#0F172A] sm:text-base">
                Common problems practices face with billing:
              </p>

              <MotionWrapper
                variant="stagger"
                staggerDelay={0.08}
                className="flex flex-col gap-3"
              >
                {BILLING_CHALLENGES.map((challenge) => (
                  <MotionWrapper key={challenge.title} variant="staggerItem">
                    <div
                      className={cn(
                        outsourceCardClassName,
                        "flex-row items-center gap-4 p-4 sm:flex sm:p-5"
                      )}
                    >
                      <IconWrapper
                        icon={challenge.icon}
                        size="sm"
                        variant="surface"
                        className="shrink-0 transition-transform duration-300 group-hover:scale-110"
                      />
                      <p className="text-sm leading-[1.65] text-[#475569] sm:text-base">
                        {challenge.title}
                      </p>
                    </div>
                  </MotionWrapper>
                ))}
              </MotionWrapper>
            </div>

            <AppButton href="/schedule-a-demo" variant="primary" size="lg" showArrow>
              Set up a Discovery Call
            </AppButton>
          </MotionWrapper>

          <MotionWrapper variant="slideRight" className="w-full lg:col-span-6">
            <div className="group relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-[0_8px_30px_rgba(29,78,216,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-xl hover:shadow-blue-900/10 sm:aspect-16/11">
              <Image
                src="/doctor-hero.png"
                alt="Physician reviewing medical billing workflows on a laptop"
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
                      Maximize collections with expert billing support
                    </p>
                    <p className="mt-1 text-[11px] leading-relaxed text-blue-100 sm:text-xs">
                      Outsource billing to protect revenue and focus on patient care.
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
