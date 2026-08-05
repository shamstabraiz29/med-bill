"use client";

import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import HomeFeatureCard from "@/components/home/shared/HomeFeatureCard";
import { getIcon } from "@/lib/icons";
import type { HomepageMedicalClaims } from "@/payload/types/homepage";

interface MedicalClaimsServiceProps {
  data: HomepageMedicalClaims;
}

export default function MedicalClaimsService({ data }: MedicalClaimsServiceProps) {
  return (
    <section className="hp-section hp-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={data.badge}
          badgeVariant="indigo"
          align="center"
          title={
            <>
              {data.titlePlain}{" "}
              <span className="text-primary">{data.titleHighlight}</span>
            </>
          }
          description={data.description}
          className="mb-12 sm:mb-14 max-w-4xl"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.1}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
        >
          {data.steps.map((item, idx) => {
            const Icon = getIcon(item.iconName);

            return (
              <MotionWrapper key={item.id || idx} variant="staggerItem" className="h-full">
                <HomeFeatureCard
                  variant="step"
                  stepLabel={item.stepLabel}
                  icon={<Icon className="h-5 w-5 stroke-[1.75]" />}
                  className="h-full"
                >
                  <h3 className="font-display mb-2 text-lg font-semibold leading-snug text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </HomeFeatureCard>
              </MotionWrapper>
            );
          })}
        </MotionWrapper>

        <div className="mt-14 grid max-w-5xl mx-auto w-full grid-cols-2 gap-6 border-t border-border pt-12 text-center lg:grid-cols-4 lg:gap-8">
          {data.metrics.map((metric, idx) => (
            <div key={metric.id || idx}>
              <span className="block hp-stat-value text-3xl">{metric.value}</span>
              <span className="mt-2 block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <AppButton href={data.primaryCta.primaryHref} variant="primary" size="lg" showArrow>
            {data.primaryCta.primaryLabel}
          </AppButton>
          <AppButton href={data.secondaryCta.secondaryHref} variant="secondary" size="lg" showArrow>
            {data.secondaryCta.secondaryLabel}
          </AppButton>
        </div>
      </div>
    </section>
  );
}
