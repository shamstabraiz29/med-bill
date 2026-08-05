"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { HomeContainer } from "@/components/home/shared/HomeSection";
import { getIcon } from "@/lib/icons";
import type { HomepageStatsCards } from "@/payload/types/homepage";

interface StatsCardsProps {
  data: HomepageStatsCards;
}

export default function StatsCards({ data }: StatsCardsProps) {
  return (
    <section className="relative z-10 -mt-6 pb-8 sm:-mt-8">
      <HomeContainer>
        <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
          {data.items.map((stat, idx) => {
            const Icon = getIcon(stat.iconName);
            return (
              <div key={stat.id || idx} className="hp-stat-tile group flex flex-col sm:min-h-[220px]">
                <div className="mb-5 flex items-start justify-between">
                  <div className="hp-icon-box h-12 w-12 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-300">
                    0{idx + 1}
                  </span>
                </div>

                <div className="mt-auto">
                  <p className="text-4xl font-bold tracking-tight text-slate-900 sm:text-[2.75rem] sm:leading-none">
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className="mt-2 text-base font-semibold text-slate-800">{stat.label}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{stat.subLabel}</p>
                </div>
              </div>
            );
          })}
        </div>
      </HomeContainer>
    </section>
  );
}
