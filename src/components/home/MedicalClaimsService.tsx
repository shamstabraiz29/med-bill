"use client";

import { ShieldCheck, Clock, Lock, Activity } from "lucide-react";
import HomeSection from "@/components/home/shared/HomeSection";
import HomeSectionHeader, { HomeAccent } from "@/components/home/shared/HomeSectionHeader";
import HomeButton from "@/components/home/shared/HomeButton";
import { getIcon } from "@/lib/icons";
import type { HomepageMedicalClaims } from "@/payload/types/homepage";

interface MedicalClaimsServiceProps {
  data: HomepageMedicalClaims;
}

const metricIcons = [ShieldCheck, Clock, Lock, Activity];

export default function MedicalClaimsService({ data }: MedicalClaimsServiceProps) {
  return (
    <HomeSection tone="muted">
      <HomeSectionHeader
        label={data.badge}
        align="center"
        title={
          <>
            {data.titlePlain} <HomeAccent>{data.titleHighlight}</HomeAccent>
          </>
        }
        description={data.description}
        className="mb-14"
      />

      <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent lg:block" />
        {data.steps.map((item, idx) => {
          const Icon = getIcon(item.iconName);
          return (
            <div key={item.id || idx} className="hp-card relative flex flex-col p-6 pt-8">
              <span className="hp-step-num absolute -top-4 left-6">{idx + 1}</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                {item.stepLabel}
              </span>
              <div className="hp-icon-box my-4 h-11 w-11">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-semibold text-slate-900">{item.title}</h3>
              <p className="flex-1 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </div>
          );
        })}
      </div>

      {/* Metrics — sleek dark bar instead of gradient pills */}
      <div className="hp-metrics-bar mt-14">
        <div className="relative px-6 py-8 sm:px-10 sm:py-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.15),transparent_55%)]" />
          <div className="relative grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10">
            {data.metrics.map((metric, idx) => {
              const Icon = metricIcons[idx] || ShieldCheck;
              return (
                <div
                  key={metric.id || idx}
                  className="flex flex-col items-center text-center lg:px-6 first:lg:pl-0 last:lg:pr-0"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-sky-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {metric.value}
                  </span>
                  <span className="mt-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                    {metric.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <HomeButton href={data.primaryCta.primaryHref} size="lg" showArrow>
          {data.primaryCta.primaryLabel}
        </HomeButton>
        <HomeButton href={data.secondaryCta.secondaryHref} variant="outline" size="lg">
          {data.secondaryCta.secondaryLabel}
        </HomeButton>
      </div>
    </HomeSection>
  );
}
