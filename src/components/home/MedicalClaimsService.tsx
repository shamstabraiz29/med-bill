"use client";

import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { getIcon } from "@/lib/icons";
import type { HomepageMedicalClaims } from "@/payload/types/homepage";

interface MedicalClaimsServiceProps {
  data: HomepageMedicalClaims;
}

export default function MedicalClaimsService({ data }: MedicalClaimsServiceProps) {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-slate-50/30 dark:bg-slate-900/15 border-y border-slate-200/40 dark:border-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header */}
        <SectionHeader
          badge={data.badge}
          badgeVariant="indigo"
          align="center"
          title={
            <>
              {data.titlePlain}{" "}
              <span className="text-blue-600">
                {data.titleHighlight}
              </span>
            </>
          }
          description={data.description}
          className="mb-12 sm:mb-16 max-w-4xl"
        />

        {/* 4-Step Process Grid */}
        <MotionWrapper
          variant="stagger"
          staggerDelay={0.12}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full"
        >
          {data.steps.map((item, idx) => {
            const Icon = getIcon(item.iconName);

            return (
              <MotionWrapper key={item.id || idx} variant="staggerItem" className="h-full">
                <div className="group relative flex flex-col h-full bg-white border border-[#E2E6EC] rounded-2xl p-6 sm:p-8 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
                  {/* Step Label */}
                  <span className="text-[10px] font-bold text-[#1D4ED8] tracking-widest uppercase mb-4 block">
                    {item.stepLabel}
                  </span>

                  {/* Icon Indicator */}
                  <div className="text-[#1D4ED8] mb-5 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-7 h-7 stroke-[1.25]" />
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base font-bold text-[#0F172A] mb-3 tracking-[-0.02em] leading-snug">
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-[13px] text-[#475569] leading-[1.6]">
                    {item.description}
                  </p>
                </div>
              </MotionWrapper>
            );
          })}
        </MotionWrapper>

        {/* Trust & Performance Metrics Row */}
        <div className="mt-16 pt-12 border-t border-[#E2E6EC] grid grid-cols-2 lg:grid-cols-4 gap-6 text-center max-w-5xl mx-auto w-full">
          {data.metrics.map((metric, idx) => (
            <div key={metric.id || idx}>
              <span className="block text-3xl font-extrabold text-[#0F172A] tracking-[-0.02em]">{metric.value}</span>
              <span className="text-[10px] font-bold text-[#475569] uppercase tracking-widest mt-2 block">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Call to Actions */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
          <AppButton
            href={data.primaryCta.primaryHref}
            variant="primary"
            size="lg"
            showArrow
          >
            {data.primaryCta.primaryLabel}
          </AppButton>
          <AppButton
            href={data.secondaryCta.secondaryHref}
            variant="secondary"
            size="lg"
            showArrow
          >
            {data.secondaryCta.secondaryLabel}
          </AppButton>
        </div>

      </div>
    </section>
  );
}
