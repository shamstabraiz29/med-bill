"use client";

import HomeSection from "@/components/home/shared/HomeSection";
import HomeSectionHeader, { HomeAccent } from "@/components/home/shared/HomeSectionHeader";
import HomeButton from "@/components/home/shared/HomeButton";
import { getIcon } from "@/lib/icons";
import type { HomepageNationwidePricing } from "@/payload/types/homepage";

interface NationwidePricingSectionProps {
  data: HomepageNationwidePricing;
}

export default function NationwidePricingSection({ data }: NationwidePricingSectionProps) {
  return (
    <HomeSection tone="white">
      <HomeSectionHeader
        label={data.badge}
        align="center"
        title={
          <>
            {data.titlePlain} <HomeAccent>{data.titleHighlight}</HomeAccent>
          </>
        }
        description={data.description}
        className="mb-12"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.benefits.map((benefit, idx) => {
          const Icon = getIcon(benefit.iconName);
          return (
            <div key={benefit.id || idx} className="hp-card-interactive relative flex gap-4 overflow-hidden p-6">
              <span className="hp-accent-bar" />
              <div className="hp-icon-box h-10 w-10 shrink-0">
                <Icon className="h-5 w-5" />
              </div>
              <div className="pl-1">
                <h3 className="font-semibold text-slate-900">{benefit.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{benefit.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 flex flex-col items-center gap-4 text-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <HomeButton href={data.primaryCta.primaryHref} size="lg" showArrow>
            {data.primaryCta.primaryLabel}
          </HomeButton>
          <HomeButton href={data.secondaryCta.secondaryHref} variant="outline" size="lg">
            {data.secondaryCta.secondaryLabel}
          </HomeButton>
        </div>
        {data.footerNote && <p className="text-xs text-slate-500">{data.footerNote}</p>}
      </div>
    </HomeSection>
  );
}
