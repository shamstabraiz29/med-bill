"use client";

import React from "react";
import AppButton from "@/components/ui/AppButton";
import SectionBadge from "@/components/ui/SectionBadge";
import MotionWrapper from "@/components/ui/MotionWrapper";
import {
  outsourceContainerClassName,
  outsourceHeroSectionClassName,
} from "./outsourceSectionLayout";
import { defaultOutsourceMedicalBillingData } from "@/lib/defaults/outsourceMedicalBilling";
import type { OutsourceHeroData } from "@/payload/types/outsourceMedicalBilling";
import { CheckCircle2, Percent, ShieldCheck, Clock, Award } from "lucide-react";

interface OutsourceMedicalBillingHeroProps {
  data?: OutsourceHeroData;
}

export default function OutsourceMedicalBillingHero({ data }: OutsourceMedicalBillingHeroProps) {
  const content = data || defaultOutsourceMedicalBillingData.hero;

  const keyBenefits = [
    {
      title: "2.49% Flat Billing Rate",
      desc: "Maximum revenue retention with simple, transparent pricing and zero startup fees.",
      icon: Percent,
    },
    {
      title: "98%+ Clean Claims Guarantee",
      desc: "First-pass electronic submission rate to eliminate rejections and delays.",
      icon: CheckCircle2,
    },
    {
      title: "Under 30 Days Average A/R",
      desc: "Faster reimbursement cycles with dedicated follow-up billing specialists.",
      icon: Clock,
    },
    {
      title: "HIPAA & SOC2 Compliant",
      desc: "Fully secured enterprise data handling and regulatory audit protection.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      className={outsourceHeroSectionClassName}
      aria-labelledby="outsource-medical-billing-hero-heading"
    >
      <div className={`${outsourceContainerClassName} relative z-10`}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* LEFT COLUMN: Original Text & CTA Button */}
          <MotionWrapper
            variant="slideLeft"
            className="flex flex-col items-start space-y-6 text-left lg:col-span-7"
          >
            <SectionBadge variant="indigo" pulse>
              {content.badge}
            </SectionBadge>

            <h1
              id="outsource-medical-billing-hero-heading"
              className="max-w-2xl text-3xl font-bold leading-[1.18] tracking-[-0.02em] text-[#0F172A] sm:text-4xl lg:text-5xl"
            >
              {content.titlePlain}{" "}
              <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
            </h1>

            <p className="max-w-2xl text-sm leading-[1.6] text-[#475569] sm:text-base">
              {content.subtitle}
            </p>

            <AppButton
              href={content.buttonLink || "/schedule-a-demo"}
              variant="primary"
              size="lg"
              showArrow
              className="shadow-lg shadow-blue-600/15"
            >
              {content.buttonText}
            </AppButton>
          </MotionWrapper>

          {/* RIGHT COLUMN: Sleek Key Highlights Card (NOT Home DoctorVisuals & NO Form Inputs) */}
          <MotionWrapper
            variant="slideRight"
            delay={0.15}
            className="w-full lg:col-span-5"
          >
            <div className="relative rounded-2xl border border-[#E2E6EC] bg-white/95 p-6 sm:p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xs transition-all duration-300 hover:border-[#1D4ED8]/30">
              <div className="mb-6 flex items-center justify-between border-b border-[#E2E6EC] pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                  Outsourced Billing Highlights
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-[#1D4ED8] border border-blue-100">
                  <Award className="h-3.5 w-3.5" />
                  Top Rated RCM
                </span>
              </div>

              <div className="flex flex-col gap-4">
                {keyBenefits.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="group flex items-start gap-3.5 rounded-xl border border-transparent p-2.5 transition-all hover:border-[#E2E6EC] hover:bg-slate-50/60"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1D4ED8] border border-blue-100/80 group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors">
                        <Icon className="h-4.5 w-4.5 stroke-[2.2]" />
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-[#0F172A] sm:text-sm">
                          {item.title}
                        </h3>
                        <p className="mt-0.5 text-[11px] leading-relaxed text-[#475569] sm:text-xs">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}






