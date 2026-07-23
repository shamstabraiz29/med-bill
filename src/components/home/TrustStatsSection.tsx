"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Target, BarChart3, TrendingUp, CheckCircle2, ArrowRight, Smile, Users, LucideIcon } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

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

interface TrustStatItem {
  value: string;
  label: string;
  subLabel: string;
  icon: LucideIcon;
}

export default function TrustStatsSection() {
  const mainStats: TrustStatItem[] = [
    {
      value: "99%",
      label: "Clean Claim Ratio",
      subLabel: "Industry-leading accuracy to prevent billing errors.",
      icon: Target,
    },
    {
      value: "97.35%",
      label: "First Submission Pass Rate",
      subLabel: "Ensuring claims get processed successfully on first pass.",
      icon: BarChart3,
    },
    {
      value: "30%",
      label: "Revenue Increase",
      subLabel: "Average practice revenue growth within 12 months.",
      icon: TrendingUp,
    },
  ];

  const checklist = [
    "Patient Verification",
    "Revenue Cycle Management",
    "Claim Scrubbing",
    "A/R Recovery",
    "Claim Submission",
    "Fast Reimbursement",
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Proven Success"
          badgeVariant="indigo"
          align="center"
          title={
            <>
              Trust Your Billing To The Company That Ranks Among{" "}
              <span className="text-blue-600 font-bold">
                &ldquo;The Best Medical Billing Companies&rdquo;
              </span>
            </>
          }
          description="With a 4.8-star Trustpilot rating from more than 200 reviews, a 4.8-star Google rating from 340+ reviews, and an A+ rating from the Better Business Bureau, BellMedEx is widely recognized as one of the best medical billing service providers in the United States."
          className="mb-12 sm:mb-16 max-w-4xl"
        />

        {/* 3 Minimalist Stats Cards Grid */}
        <MotionWrapper
          variant="stagger"
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 md:mb-16"
        >
          {mainStats.map((stat, idx) => {
            const Icon = stat.icon;

            return (
              <MotionWrapper key={idx} variant="staggerItem" className="h-full">
                <div className="group relative flex flex-col justify-between h-full bg-white border border-[#E2E6EC] rounded-2xl p-8 hover:-translate-y-1 hover:border-[#1D4ED8]/20 hover:shadow-lg hover:shadow-[#1D4ED8]/8 transition-all duration-300">
                  <div>
                    {/* Icon */}
                    <div className="text-[#1D4ED8] mb-6 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-6 h-6 stroke-[1.25]" />
                    </div>

                    {/* Stat Value */}
                    <span className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-[-0.02em] block leading-none">
                      <AnimatedCounter value={stat.value} />
                    </span>

                    {/* Label */}
                    <span className="text-sm font-bold text-[#0F172A] mt-4 block tracking-wide uppercase">
                      {stat.label}
                    </span>
                  </div>

                  {/* Context Description */}
                  <span className="text-[13px] text-[#475569] mt-2 block leading-[1.6]">
                    {stat.subLabel}
                  </span>
                </div>
              </MotionWrapper>
            );
          })}
        </MotionWrapper>

        {/* Partners & Rating Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-20 md:mb-24 w-full">
          {/* Google Ratings */}
          <div className="bg-white border border-[#E2E6EC] p-5 rounded-2xl flex items-center justify-between hover:shadow-md hover:shadow-[#1D4ED8]/6 transition-all duration-300">
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold text-[#475569] uppercase tracking-widest">Google Rating</span>
              <div className="flex items-center gap-0.5 mt-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#EAB308] text-[10px]">&#9733;</span>
                ))}
              </div>
            </div>
            <span className="text-xl font-black text-[#EAB308]">4.8</span>
          </div>

          {/* Trustpilot Ratings */}
          <div className="bg-white border border-[#E2E6EC] p-5 rounded-2xl flex items-center justify-between hover:shadow-md hover:shadow-[#1D4ED8]/6 transition-all duration-300">
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold text-[#475569] uppercase tracking-widest">Trustpilot</span>
              <div className="flex items-center gap-0.5 mt-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#22C55E] text-[10px]">&#9733;</span>
                ))}
              </div>
            </div>
            <span className="text-xl font-black text-[#22C55E]">4.8</span>
          </div>

          {/* BBB Accredited A+ */}
          <div className="bg-white border border-[#E2E6EC] p-5 rounded-2xl flex items-center justify-between hover:shadow-md hover:shadow-[#1D4ED8]/6 transition-all duration-300">
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold text-[#475569] uppercase tracking-widest">BBB ACCREDITED</span>
              <span className="text-xs font-semibold text-[#0F172A] mt-2">A+ Rated Business</span>
            </div>
            <span className="text-xl font-black text-[#0F172A] border-l border-[#E2E6EC] pl-4">A+</span>
          </div>

          {/* ONC Body Badge */}
          <div className="bg-white border border-[#E2E6EC] p-5 rounded-2xl flex items-center justify-between hover:shadow-md hover:shadow-[#1D4ED8]/6 transition-all duration-300">
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold text-[#475569] uppercase tracking-widest">ONC CERTIFIED</span>
              <span className="text-xs font-semibold text-[#475569] mt-2">Authorized Body</span>
            </div>
            <span className="text-xs font-bold bg-[#F5F7FA] text-[#475569] px-2.5 py-1.5 rounded-lg border border-[#E2E6EC]">ONC</span>
          </div>
        </div>

        {/* Bottom Part: Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          {/* LEFT COLUMN: Features Checklist */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-[-0.02em] leading-[1.18] mb-5">
              Medical Billing Service in the USA that{" "}
              <span className="text-[#1D4ED8]">
                Unites Tech &amp; Expertise
              </span>{" "}
              to Meet Every Doctor&apos;s Vision
            </h2>
            <p className="text-[#475569] text-sm sm:text-base leading-[1.6] mb-8">
              Our USA-based healthcare revenue cycle management company helps individual and institutional providers navigate
              the tight spots of patient billing and coding via modern medical billing services.
            </p>

            {/* Checklist Capsules Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
                {checklist.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-white border border-[#E2E6EC] px-4 py-3.5 rounded-xl hover:border-[#1D4ED8]/20 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#1D4ED8]/10 text-[#1D4ED8] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 stroke-[2]" />
                    </div>
                    <span className="text-[#475569] text-xs sm:text-[13px] font-medium tracking-tight">
                      {item}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Flat Stats Panels */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full pt-4 lg:pt-0">
            {/* Happiness Score Card */}
            <div className="group bg-white border border-[#E2E6EC] p-8 rounded-2xl hover:-translate-y-1 hover:border-[#1D4ED8]/20 hover:shadow-lg hover:shadow-[#1D4ED8]/8 transition-all duration-300 flex flex-col justify-between items-start text-left h-80">
              <div>
                <span className="inline-flex items-center bg-blue-50 border border-blue-100 px-3 py-1 rounded-full text-[9px] font-bold text-blue-700 uppercase tracking-widest">
                  Happiness Score
                </span>
                <div className="my-6">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#1D4ED8] tracking-[-0.02em] leading-none block">
                    <AnimatedCounter value="96%" />
                  </span>
                  <p className="text-[#475569] text-xs sm:text-[13px] leading-[1.6] mt-4">
                    Based on a 4.8-star rating from 350+ providers across the states.
                  </p>
                </div>
              </div>
              <Link
                href="/testimonials"
                className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors mt-auto"
              >
                See testimonials
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
              </Link>
            </div>

            {/* Billing Experts Card */}
            <div className="group bg-white border border-[#E2E6EC] p-8 rounded-2xl hover:-translate-y-1 hover:border-[#1D4ED8]/20 hover:shadow-lg hover:shadow-[#1D4ED8]/8 transition-all duration-300 flex flex-col justify-between items-start text-left h-80">
              <div>
                <span className="inline-flex items-center bg-blue-50 border border-blue-100 px-3 py-1 rounded-full text-[9px] font-bold text-blue-700 uppercase tracking-widest">
                  Billing Experts
                </span>
                <div className="my-6">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#1D4ED8] tracking-[-0.02em] leading-none block">
                    <AnimatedCounter value="1,200+" />
                  </span>
                  <p className="text-[#475569] text-xs sm:text-[13px] leading-[1.6] mt-4">
                    CMRS, RHIA, CPB certified medical billers and coders for every specialty.
                  </p>
                </div>
              </div>
              <Link
                href="/about-us"
                className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D4ED8] hover:text-[#1E3A8A] transition-colors mt-auto"
              >
                About us
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
