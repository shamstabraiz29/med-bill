"use client";

import { useEffect, useState, useRef } from "react";
import { LucideIcon, TrendingUp } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
  icon: LucideIcon;
}

interface StatsCardsProps {
  stats: StatItem[];
}

// Performant, client-side count up animation that plays when scrolled into view
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

export default function StatsCards({ stats }: StatsCardsProps) {
  const cardMeta = [
    { badgeText: "99% Retention", subLabel: "Trusted by top clinics", progressWidth: "w-[94%]" },
    { badgeText: "50 States", subLabel: "National credentialing network", progressWidth: "w-[85%]" },
    { badgeText: "AAPC Certified", subLabel: "98%+ Clean Claim rate", progressWidth: "w-[96%]" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          const meta = cardMeta[idx % cardMeta.length];

          return (
            <div
              key={idx}
              className="flex flex-col justify-between bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:-translate-y-1 hover:border-slate-300 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              {/* Card Header: Icon & Badge */}
              <div className="flex items-center justify-between mb-6">
                {/* Solid Icon Wrapper */}
                <div className="w-11 h-11 rounded-xl bg-[#2A2374] text-white flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Performance badge */}
                <span className="flex items-center gap-1 text-[10px] font-semibold tracking-wider uppercase bg-slate-50 text-slate-500 px-2.5 py-1 rounded-full border border-slate-200">
                  <TrendingUp className="w-3 h-3 text-emerald-500" />
                  {meta.badgeText}
                </span>
              </div>

              {/* Card Body: Stat Value & Labels */}
              <div className="flex flex-col text-left">
                <span className="text-3xl sm:text-4xl font-bold text-[#1c1a45] tracking-tight leading-none">
                  <AnimatedCounter value={stat.value} />
                </span>
                <span className="text-sm font-semibold text-slate-800 mt-2">
                  {stat.label}
                </span>
                <span className="text-[11px] text-slate-400 mt-1">
                  {meta.subLabel}
                </span>
              </div>

              {/* Card Footer: Progress bar */}
              <div className="mt-5 w-full">
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-[#2A2374] rounded-full transition-all duration-1000 ease-out origin-left scale-x-0 hover:scale-x-100 ${meta.progressWidth}`}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
