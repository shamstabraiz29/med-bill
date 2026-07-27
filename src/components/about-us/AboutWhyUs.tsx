"use client";

import React from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { Zap, ShieldCheck, DollarSign, Headphones, TrendingUp, LucideIcon } from "lucide-react";
import { defaultAboutUsData } from "@/lib/defaults/aboutUs";
import type { AboutWhyUsData } from "@/payload/types/aboutUs";

const ICON_MAP: Record<string, LucideIcon> = {
  DollarSign,
  Zap,
  Headphones,
  ShieldCheck,
};

interface AboutWhyUsProps {
  data?: AboutWhyUsData;
}

export default function AboutWhyUs({ data }: AboutWhyUsProps) {
  const content = data || defaultAboutUsData.whyUs;
  const pillarsList = content.pillars && content.pillars.length > 0 ? content.pillars : defaultAboutUsData.whyUs.pillars;
  const metricsList = content.metrics && content.metrics.length > 0 ? content.metrics : defaultAboutUsData.whyUs.metrics;

  return (
    <section className="relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-3xl bg-[#0F172A] border border-white/10 text-white p-8 sm:p-12 lg:p-14 shadow-2xl">
            
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10 text-left">
              
              {/* LEFT COLUMN: 4 Pillars */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="space-y-2">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400">
                    {content.badge}
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                    {content.titlePlain}
                  </h2>
                  <p className="text-indigo-200/80 text-xs sm:text-sm leading-relaxed max-w-xl">
                    {content.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {pillarsList.map((item, idx) => {
                    const Icon = (item.iconName && ICON_MAP[item.iconName]) || DollarSign;
                    return (
                      <div
                        key={item.title || idx}
                        className="bg-white/5 border border-white/10 p-4 sm:p-5 rounded-2xl space-y-2 hover:bg-white/10 transition-colors"
                      >
                        <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-300">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-bold text-white">{item.title}</h4>
                        <p className="text-xs text-indigo-200/70 leading-relaxed">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* RIGHT COLUMN: Performance Impact Card */}
              <div className="lg:col-span-5 w-full">
                <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/15 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6">
                  
                  <div className="space-y-1">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-sky-400">
                      {content.impactBadge}
                    </span>
                    <h3 className="text-xl font-bold text-white">{content.impactTitle}</h3>
                  </div>

                  <div className="space-y-4">
                    {metricsList.map((metric, idx) => (
                      <div key={metric.label || idx} className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center justify-between">
                        <div>
                          <p className="text-xs text-indigo-200/70">{metric.label}</p>
                          <p className="text-xl font-extrabold text-white">{metric.value}</p>
                        </div>
                        <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-400/30 px-2.5 py-1 rounded-full flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" /> {metric.badgeText}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

            </div>

          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
