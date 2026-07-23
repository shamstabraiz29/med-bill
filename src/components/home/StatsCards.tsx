"use client";

import { useEffect, useState, useRef } from "react";
import { Users, Stethoscope, Trophy, LucideIcon } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";


interface StatItem {
  value: string;
  label: string;
  subLabel: string;
  icon: LucideIcon;
}

// Client-side count up animation that plays when scrolled into view
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

export default function StatsCards() {
  const stats: StatItem[] = [
    {
      value: "1,500+",
      label: "Satisfied Providers",
      subLabel: "Trusted by top clinics across 50 states",
      icon: Users,
    },
    {
      value: "75+",
      label: "Specialties Served",
      subLabel: "Certified medical coders & billers",
      icon: Stethoscope,
    },
    {
      value: "1,200+",
      label: "Billing & Coding Experts",
      subLabel: "98%+ Average Clean Claim rate",
      icon: Trophy,
    },
  ];

  return (
    <section className="relative w-full py-12 md:py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#E2E6EC]"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;

            return (
              <MotionWrapper
                key={idx}
                variant="staggerItem"
                className="group flex flex-col items-center md:items-start text-center md:text-left py-6 md:py-2 md:px-10 lg:px-16 first:pt-0 md:first:pl-0 last:pb-0 md:last:pr-0"
              >
                {/* Minimalist Icon Indicator */}
                <div className="mb-4 text-[#1D4ED8] transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-6 h-6 stroke-[1.25]" />
                </div>

                {/* Big Stat Value */}
                <div className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-[-0.02em] leading-none">
                  <AnimatedCounter value={stat.value} />
                </div>

                {/* Main Label */}
                <span className="text-sm font-bold text-[#0F172A] mt-3 tracking-wide uppercase">
                  {stat.label}
                </span>

                {/* Subtitle / Context description */}
                <span className="text-[13px] text-[#475569] mt-1 max-w-[280px]">
                  {stat.subLabel}
                </span>
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );

}
