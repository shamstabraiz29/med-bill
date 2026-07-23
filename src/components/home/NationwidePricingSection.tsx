"use client";

import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { getIcon } from "@/lib/icons";
import type { HomepageNationwidePricing } from "@/payload/types/homepage";

interface NationwidePricingSectionProps {
  data: HomepageNationwidePricing;
}

export default function NationwidePricingSection({ data }: NationwidePricingSectionProps) {
  return (
    <section className="relative w-full py-20 sm:py-24 bg-[#F5F7FA] border-y border-[#E2E6EC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <SectionHeader
            badge={data.badge}
            badgeVariant="indigo"
            align="center"
            title={
              <>
                {data.titlePlain}{" "}
                <span className="text-blue-600">{data.titleHighlight}</span>
              </>
            }
            description={data.description}
            className="space-y-4"
          />
        </div>

        {/* Editorial Unified Grid with Inner Divider Lines */}
        <div className="overflow-hidden rounded-2xl border border-[#E2E6EC] bg-[#E2E6EC]">
          <MotionWrapper
            variant="stagger"
            staggerDelay={0.04}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          >
            {data.benefits.map((benefit, idx) => {
              const Icon = getIcon(benefit.iconName);
              return (
                <MotionWrapper
                  key={benefit.id || idx}
                  variant="staggerItem"
                  className="group bg-white p-8 sm:p-10 flex flex-col justify-between transition-colors duration-300 hover:bg-[#F5F7FA]"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-[#1D4ED8] transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-[#0F172A] tracking-[-0.02em]">
                        {benefit.title}
                      </h3>
                      <p className="text-[#475569] text-sm leading-[1.6]">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </MotionWrapper>
              );
            })}
          </MotionWrapper>
        </div>

        {/* Call to Action Block */}
        <div className="mt-16 sm:mt-24 text-center flex flex-col items-center justify-center space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <AppButton
              variant="primary"
              size="lg"
              href={data.primaryCta.primaryHref}
              showArrow
              className="w-full sm:w-auto"
            >
              {data.primaryCta.primaryLabel}
            </AppButton>
            <AppButton
              variant="secondary"
              size="lg"
              href={data.secondaryCta.secondaryHref}
              className="w-full sm:w-auto"
            >
              {data.secondaryCta.secondaryLabel}
            </AppButton>
          </div>
          {data.footerNote && (
            <p className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide">
              {data.footerNote}
            </p>
          )}
        </div>

      </div>
    </section>
  );
}
