"use client";

import HomeSection from "@/components/home/shared/HomeSection";
import HomeSectionHeader, { HomeAccent } from "@/components/home/shared/HomeSectionHeader";
import HomeButton from "@/components/home/shared/HomeButton";
import { getIcon } from "@/lib/icons";
import type { HomepageBillingCta } from "@/payload/types/homepage";

interface BillingCTASectionProps {
  data: HomepageBillingCta;
}

export default function BillingCTASection({ data }: BillingCTASectionProps) {
  return (
    <HomeSection tone="brand">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <HomeSectionHeader
            label={data.badge}
            inverted
            title={
              <>
                {data.titlePlain} <HomeAccent inverted>{data.titleHighlight}</HomeAccent>
              </>
            }
            description={<span dangerouslySetInnerHTML={{ __html: data.description }} />}
          />
          <div className="mt-8">
            <HomeButton href={data.ctaHref} variant="accent" size="lg" showArrow>
              {data.ctaLabel}
            </HomeButton>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {data.features.map((feature, idx) => {
            const Icon = getIcon(feature.iconName);
            return (
              <div key={feature.id || idx} className="hp-card-glass p-5 transition-colors hover:bg-white/12">
                <div className="hp-icon-box-inverted mb-3 h-9 w-9">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-semibold text-white">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </HomeSection>
  );
}
