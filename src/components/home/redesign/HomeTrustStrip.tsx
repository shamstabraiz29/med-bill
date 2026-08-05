"use client";

import { shell } from "./shell";
import type { HomepageStatsCards, HomepageTrustStats } from "@/payload/types/homepage";

interface Props {
  stats: HomepageStatsCards;
  trust: HomepageTrustStats;
}

export default function HomeTrustStrip({ stats, trust }: Props) {
  return (
    <section className={`border-y ${shell.border} bg-white ${shell.pad} py-10 sm:py-12`}>
      <div className={shell.maxWide}>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#475569]">
              Trusted nationwide
            </p>
            <p className="mt-3 text-xl font-semibold tracking-[-0.03em] text-[#0F172A] sm:text-2xl">
              Practices choose BellMedEx for precision billing operations.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8 lg:max-w-3xl">
            {stats.items.map((item) => (
              <div key={item.id || item.label} className="min-w-0">
                <p className="text-2xl font-semibold tracking-[-0.03em] text-[#0F172A] sm:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1 text-xs font-medium text-[#475569]">{item.label}</p>
              </div>
            ))}
            <div className="min-w-0">
              <p className="text-2xl font-semibold tracking-[-0.03em] text-[#0F172A] sm:text-3xl">
                {trust.ratingBadges[0]?.value || "4.8"}
              </p>
              <p className="mt-1 text-xs font-medium text-[#475569]">
                {trust.ratingBadges[0]?.label || "Google Rating"}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-[#E2E6EC] pt-8">
          {trust.ratingBadges.map((badge) => (
            <div
              key={badge.id || badge.platform}
              className="rounded-full border border-[#E2E6EC] px-4 py-2 text-xs font-semibold tracking-wide text-[#0F172A]"
            >
              <span className="text-[#475569]">{badge.platform}</span>
              <span className="mx-2 text-[#E2E6EC]">|</span>
              <span>{badge.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
