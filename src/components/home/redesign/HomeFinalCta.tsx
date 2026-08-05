"use client";

import AppButton from "@/components/ui/AppButton";
import { getIcon } from "@/lib/icons";
import { shell } from "./shell";
import type { HomepageBillingCta, HomepageTrustStats } from "@/payload/types/homepage";

interface Props {
  data: HomepageBillingCta;
  trust: HomepageTrustStats;
}

export default function HomeFinalCta({ data, trust }: Props) {
  return (
    <section className={`${shell.pad} py-14 sm:py-16 lg:py-20`}>
      <div className={shell.maxWide}>
        <div
          className={`overflow-hidden border border-[#0F172A] ${shell.dark} ${shell.radiusLg}`}
        >
          <div className="grid lg:grid-cols-[1fr_1.15fr]">
            {/* Compact CTA copy */}
            <div className="flex flex-col justify-between gap-8 border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:border-white/10 lg:p-9">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#60A5FA]">
                  {data.badge}
                </p>
                <h2 className="mt-3 text-2xl font-semibold leading-[1.15] tracking-[-0.03em] sm:text-3xl">
                  {data.titlePlain}{" "}
                  <span className="text-[#60A5FA]">{data.titleHighlight}</span>
                </h2>
                <p
                  className="mt-3 text-sm leading-[1.65] text-blue-100/75"
                  dangerouslySetInnerHTML={{ __html: data.description }}
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <AppButton href={data.ctaHref} variant="secondary-dark" size="md" showArrow>
                  {data.ctaLabel}
                </AppButton>
                <AppButton
                  href={trust.happinessScore.linkHref || "/testimonials"}
                  variant="secondary-dark"
                  size="md"
                >
                  {trust.happinessScore.linkLabel || "See testimonials"}
                </AppButton>
              </div>
            </div>

            {/* Compact 2×2 feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {data.features.map((feature, idx) => {
                const Icon = getIcon(feature.iconName);

                return (
                  <div
                    key={feature.id || feature.title}
                    className={[
                      "p-5 sm:p-6",
                      idx % 2 === 1 ? "sm:border-l sm:border-white/10" : "",
                      idx >= 2 ? "sm:border-t sm:border-white/10" : "",
                      idx < data.features.length - 1
                        ? "border-b border-white/10 sm:border-b-0"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <Icon className="h-5 w-5 stroke-[1.5] text-[#60A5FA]" aria-hidden="true" />
                    <h3 className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-xs leading-[1.6] text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
