"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import HomeFeatureCard from "@/components/home/shared/HomeFeatureCard";
import PlatformRatingCards from "@/components/common/PlatformRatingCards";
import { getIcon } from "@/lib/icons";
import type { HomepageTrustStats } from "@/payload/types/homepage";

function AnimatedCounter({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState(() => {
    const match = value.match(/^([\d,.]+)(.*)$/);
    if (!match) return value;
    const rawNumStr = match[1].replace(/,/g, "");
    const target = parseFloat(rawNumStr);
    return isNaN(target) ? value : "0";
  });
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const match = value.match(/^([\d,.]+)(.*)$/);
    if (!match) return;

    const rawNumStr = match[1].replace(/,/g, "");
    const suffix = match[2];
    const target = parseFloat(rawNumStr);
    if (isNaN(target)) return;

    let started = false;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !started) {
          started = true;
          animateCount();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    function animateCount() {
      const duration = 1500;
      const startTime = performance.now();

      function update(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = Math.floor(easeProgress * target);
        const formatted = current.toLocaleString();
        setDisplayValue(`${formatted}${suffix}`);

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
    }

    return () => {
      observer.disconnect();
    };
  }, [value]);

  return <span ref={ref}>{displayValue}</span>;
}

interface TrustStatsSectionProps {
  data: HomepageTrustStats;
}

export default function TrustStatsSection({ data }: TrustStatsSectionProps) {
  return (
    <section className="hp-section overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={data.badge}
          badgeVariant="indigo"
          align="center"
          title={
            <>
              {data.titlePlain}{" "}
              <span className="text-primary font-semibold">{data.titleHighlight}</span>
            </>
          }
          description={data.description}
          className="mb-14 sm:mb-16 max-w-4xl"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-14 md:mb-16"
        >
          {data.mainStats.map((stat, idx) => {
            const Icon = getIcon(stat.iconName);

            return (
              <MotionWrapper key={stat.id || idx} variant="staggerItem" className="h-full">
                <HomeFeatureCard
                  variant="stat"
                  icon={<Icon className="w-6 h-6 stroke-[1.5]" />}
                  className="flex flex-col items-center h-full"
                >
                  <span className="hp-stat-value block">
                    <AnimatedCounter value={stat.value} />
                  </span>

                  <span className="text-sm font-semibold text-foreground mt-4 block tracking-wide uppercase">
                    {stat.label}
                  </span>

                  <span className="text-sm text-muted-foreground mt-3 block leading-relaxed">
                    {stat.subLabel}
                  </span>
                </HomeFeatureCard>
              </MotionWrapper>
            );
          })}
        </MotionWrapper>

        <PlatformRatingCards
          ratings={data.ratingBadges}
          className="mb-20 md:mb-24"
          ariaLabel="BellMedEx platform and certification ratings"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground tracking-[-0.025em] leading-[1.15] mb-5">
              {data.bottomTitle}{" "}
              <span className="text-primary">{data.bottomTitleHighlight}</span>{" "}
              {data.bottomTitleSuffix}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              {data.bottomDescription}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {data.checklist.map((item, idx) => (
                <HomeFeatureCard
                  key={item.id || idx}
                  variant="flat"
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-accent text-primary flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[2]" />
                  </div>
                  <span className="text-muted-foreground text-sm font-medium">
                    {item.label}
                  </span>
                </HomeFeatureCard>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full pt-4 lg:pt-0">
            <HomeFeatureCard variant="feature" className="flex flex-col justify-between items-start text-left min-h-80">
              <div>
                <span className="inline-flex items-center bg-accent border border-border px-3 py-1 rounded-md text-[9px] font-bold text-accent-foreground uppercase tracking-[0.12em]">
                  {data.happinessScore.badge}
                </span>
                <div className="my-6">
                  <span className="hp-stat-value text-primary block">
                    <AnimatedCounter value={data.happinessScore.value} />
                  </span>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                    {data.happinessScore.description}
                  </p>
                </div>
              </div>
              <Link
                href={data.happinessScore.linkHref || "/testimonials"}
                className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition-colors mt-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              >
                {data.happinessScore.linkLabel}
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
              </Link>
            </HomeFeatureCard>

            <HomeFeatureCard variant="feature" className="flex flex-col justify-between items-start text-left min-h-80">
              <div>
                <span className="inline-flex items-center bg-accent border border-border px-3 py-1 rounded-md text-[9px] font-bold text-accent-foreground uppercase tracking-[0.12em]">
                  {data.billingExperts.badge}
                </span>
                <div className="my-6">
                  <span className="hp-stat-value text-primary block">
                    <AnimatedCounter value={data.billingExperts.value} />
                  </span>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                    {data.billingExperts.description}
                  </p>
                </div>
              </div>
              <Link
                href={data.billingExperts.linkHref || "/about-us"}
                className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition-colors mt-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              >
                {data.billingExperts.linkLabel}
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
              </Link>
            </HomeFeatureCard>
          </div>
        </div>
      </div>
    </section>
  );
}
