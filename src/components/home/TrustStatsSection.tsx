"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import PlatformRatingCards from "@/components/common/PlatformRatingCards";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import HomeSection from "@/components/home/shared/HomeSection";
import HomeSectionHeader, { HomeAccent } from "@/components/home/shared/HomeSectionHeader";
import { getIcon } from "@/lib/icons";
import type { HomepageTrustStats } from "@/payload/types/homepage";

interface TrustStatsSectionProps {
  data: HomepageTrustStats;
}

export default function TrustStatsSection({ data }: TrustStatsSectionProps) {
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
        className="mb-14"
      />

      <div className="mb-14 grid gap-4 lg:grid-cols-3">
        {data.mainStats.map((stat, idx) => {
          const Icon = getIcon(stat.iconName);
          return (
            <div key={stat.id || idx} className="hp-stat-tile flex gap-4 p-6">
              <div className="hp-icon-box h-12 w-12 shrink-0">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-3xl font-bold tracking-tight text-slate-900">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-800">{stat.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">{stat.subLabel}</p>
              </div>
            </div>
          );
        })}
      </div>

      <PlatformRatingCards
        ratings={data.ratingBadges}
        className="mb-16"
        ariaLabel="BellMedEx platform and certification ratings"
      />

      {/* Bottom spotlight block */}
      <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col justify-center lg:col-span-7">
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-[2rem]">
            {data.bottomTitle}{" "}
            <HomeAccent>{data.bottomTitleHighlight}</HomeAccent>{" "}
            {data.bottomTitleSuffix}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            {data.bottomDescription}
          </p>

          <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
            {data.checklist.map((item, idx) => (
              <li
                key={item.id || idx}
                className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-sky-200 hover:bg-sky-50/50"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <CheckCircle2 className="h-4 w-4 text-sky-600" />
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-5">
          <div className="hp-spotlight-card hp-spotlight-card-dark flex min-h-[240px] flex-col justify-between">
            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-6 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl" />
            <span className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-sky-300/90">
              {data.happinessScore.badge}
            </span>
            <div className="relative my-4">
              <p className="text-6xl font-bold tracking-tight sm:text-7xl">
                <AnimatedCounter value={data.happinessScore.value} />
              </p>
            </div>
            <p className="relative max-w-xs text-sm leading-relaxed text-slate-300">
              {data.happinessScore.description}
            </p>
            <Link
              href={data.happinessScore.linkHref || "/testimonials"}
              className="relative mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              {data.happinessScore.linkLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="hp-spotlight-card hp-spotlight-card-light flex flex-col justify-between p-7">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
              {data.billingExperts.badge}
            </span>
            <p className="my-3 text-5xl font-bold tracking-tight text-slate-900">
              <AnimatedCounter value={data.billingExperts.value} />
            </p>
            <p className="text-sm leading-relaxed text-slate-600">
              {data.billingExperts.description}
            </p>
            <Link href={data.billingExperts.linkHref || "/about-us"} className="hp-link mt-5 w-fit">
              {data.billingExperts.linkLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </HomeSection>
  );
}
