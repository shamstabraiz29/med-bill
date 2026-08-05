"use client";

import { useEffect, useState, useRef } from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import HomeFeatureCard from "@/components/home/shared/HomeFeatureCard";
import { getIcon } from "@/lib/icons";
import type { HomepageStatsCards } from "@/payload/types/homepage";

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

    if (ref.current) observer.observe(ref.current);

    function animateCount() {
      const duration = 1500;
      const startTime = performance.now();

      function update(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = Math.floor(easeProgress * target);
        setDisplayValue(`${current.toLocaleString()}${suffix}`);
        if (progress < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
    }

    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{displayValue}</span>;
}

interface StatsCardsProps {
  data: HomepageStatsCards;
}

export default function StatsCards({ data }: StatsCardsProps) {
  return (
    <section className="relative w-full py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5"
        >
          {data.items.map((stat, idx) => {
            const Icon = getIcon(stat.iconName);

            return (
              <MotionWrapper key={stat.id || idx} variant="staggerItem">
                <HomeFeatureCard
                  variant="stat"
                  icon={<Icon className="h-5 w-5 stroke-[1.75]" />}
                >
                  <div className="hp-stat-value">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-foreground">
                    {stat.label}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {stat.subLabel}
                  </p>
                </HomeFeatureCard>
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
