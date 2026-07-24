"use client";

import React, { useEffect, useState, useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";

// Animated counter component matching Home page TrustStatsSection
function AnimatedCounter({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState(() => {
    const match = value.match(/^([\d,.]+)(.*)$/);
    if (!match) return value;
    const target = parseFloat(match[1]);
    return isNaN(target) ? value : "0";
  });
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const match = value.match(/^([\d,.]+)(.*)$/);
    if (!match) return;

    const rawNumStr = match[1];
    const suffix = match[2];
    const target = parseFloat(rawNumStr);
    if (isNaN(target)) return;

    // Check if number contains decimals
    const hasDecimal = rawNumStr.includes(".");
    const decimalPlaces = hasDecimal ? rawNumStr.split(".")[1].length : 0;

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
        const current = easeProgress * target;
        const formatted = current.toFixed(decimalPlaces);
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

export interface StatItem {
  value: string;
  label: string;
}

export default function ClearinghouseStats() {
  const stats: StatItem[] = [
    {
      value: "97.42%",
      label: "Clean Claim Rate",
    },
    {
      value: "99.21%",
      label: "Real-time Claim Processing",
    },
    {
      value: "98.76%",
      label: "Payer Connectivity",
    },
    {
      value: "99.99%",
      label: "Data Security Compliance",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white border-t border-[#E2E6EC] overflow-hidden">
      {/* Background Ambient Enhancement */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header matching Home page typography */}
        <SectionHeader
          badge="Key Statistics"
          badgeVariant="indigo"
          align="center"
          title={
            <>
              BellMedEx <span className="text-[#1D4ED8]">Medical Clearinghouse</span> By The Numbers
            </>
          }
          description="BellMedEx clearinghouse technology delivers industry-leading clean claim accuracy, instant EDI payer connectivity, and 99.99% HIPAA compliance security for medical practices nationwide."
          className="mb-12 sm:mb-16 max-w-4xl"
        />

        {/* 4 Metrics Showcase Grid */}
        <MotionWrapper
          variant="stagger"
          staggerDelay={0.1}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full"
        >
          {stats.map((stat, idx) => (
            <MotionWrapper key={idx} variant="staggerItem" className="h-full">
              <div className="group relative flex flex-col justify-center items-center text-center h-full bg-white border border-[#E2E6EC] rounded-2xl p-6 sm:p-8 hover:-translate-y-1 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
                
                {/* Stat Value */}
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1D4ED8] tracking-[-0.02em] block leading-none mb-3 group-hover:scale-105 transition-transform duration-300">
                  <AnimatedCounter value={stat.value} />
                </span>

                {/* Stat Label */}
                <span className="text-xs sm:text-sm font-bold text-[#0F172A] tracking-tight leading-snug">
                  {stat.label}
                </span>

              </div>
            </MotionWrapper>
          ))}
        </MotionWrapper>

      </div>
    </section>
  );
}
