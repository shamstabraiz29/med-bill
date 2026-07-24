"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, Minus, CheckCircle2 } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { getIcon } from "@/lib/icons";
import type { HealthcareSeoServicesListData } from "@/payload/types/healthcareSeo";
import { defaultHealthcareSeoData } from "@/lib/defaults/healthcareSeo";

interface HealthcareSeoServicesListProps {
  data?: HealthcareSeoServicesListData;
}

export default function HealthcareSeoServicesList({ data }: HealthcareSeoServicesListProps) {
  const content = data || defaultHealthcareSeoData.servicesList;

  // Track open/closed state for '+ More' toggles
  const [openMoreId, setOpenMoreId] = useState<string | null>(null);

  const toggleMore = (id: string) => {
    setOpenMoreId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent border-t border-[#E2E6EC] overflow-hidden">
      {/* Background Ambient Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Free Proposal CTA Banner */}
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl bg-[#0F172A] border border-white/10 text-white p-6 sm:p-8 mb-12 sm:mb-16 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-center sm:text-left text-white">
              {content.bannerTitlePlain}{" "}
              <span className="text-amber-300">{content.bannerTitleHighlight}</span>?
            </h2>
            <div className="flex-shrink-0">
              <AppButton
                href={content.bannerCtaHref}
                variant="secondary-dark"
                size="md"
                showArrow
              >
                {content.bannerCtaLabel}
              </AppButton>
            </div>
          </div>
        </MotionWrapper>

        {/* Dynamic Mapping Over Services Array */}
        <div className="space-y-10 sm:space-y-12 w-full">
          {content.services.map((item, idx) => {
            const BadgeIcon = getIcon(item.iconName);
            const isMoreOpen = openMoreId === item.id;

            return (
              <MotionWrapper key={item.id} variant="blurReveal" delay={idx * 0.08}>
                <div className="grid grid-cols-1 md:grid-cols-12 rounded-3xl border border-[#E2E6EC] bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  
                  {/* LEFT COLUMN: Text Info & Details (7 cols) */}
                  <div className="md:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between text-left space-y-6 bg-slate-50/40">
                    <div>
                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
                        {item.title}
                      </h3>

                      {/* Tagline */}
                      <p className="text-sm font-semibold italic text-[#1D4ED8] mt-1 mb-4">
                        {item.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-[#475569] text-sm sm:text-base leading-[1.65]">
                        {item.description}
                      </p>
                    </div>

                    {/* CTA Button & Expandable + More Trigger */}
                    <div className="pt-2 space-y-4">
                      <div>
                        <AppButton
                          href={item.ctaHref}
                          variant="secondary"
                          size="md"
                          className="px-6 border-[#0F172A]/20 hover:border-[#1D4ED8]"
                        >
                          {item.ctaLabel}
                        </AppButton>
                      </div>

                      {/* Expandable '+ More' Section */}
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => toggleMore(item.id)}
                          className="inline-flex items-center gap-2 text-xs font-bold text-[#0F172A] hover:text-[#1D4ED8] transition-colors cursor-pointer"
                        >
                          <div className="w-6 h-6 rounded-full bg-slate-200/80 flex items-center justify-center text-[#0F172A]">
                            {isMoreOpen ? (
                              <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                            ) : (
                              <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                            )}
                          </div>
                          <span>{isMoreOpen ? "Less" : "More"}</span>
                        </button>

                        {/* Collapsible Content */}
                        {isMoreOpen && (
                          <div className="mt-4 pt-4 border-t border-[#E2E6EC] space-y-2.5 animate-fadeIn">
                            {item.moreDetails.map((detail, dIdx) => (
                              <div key={dIdx} className="flex items-center gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                                <span className="text-xs sm:text-sm text-[#475569] font-medium">
                                  {typeof detail === 'string' ? detail : (detail as any).label}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                  </div>

                  {/* RIGHT COLUMN: Visual Image Frame (5 cols) */}
                  <div className={`md:col-span-5 relative p-8 flex items-center justify-center ${item.accentBg} min-h-[300px] sm:min-h-[360px]`}>
                    {/* Ambient Background Decorative Grid */}
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

                    {/* Fitted Visual Image Showcase Card */}
                    <div className="relative w-full h-full min-h-[260px] rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">
                      <Image
                        src={item.imageSrc || "/consultants-laptop.png"}
                        alt={item.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Badge Icon overlay */}
                      <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md border border-white/20 p-3 rounded-xl flex items-center gap-3 text-white">
                        <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white shrink-0">
                          <BadgeIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">{item.title}</p>
                          <p className="text-[10px] text-white/80">{item.tagline}</p>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </MotionWrapper>
            );
          })}
        </div>

      </div>
    </section>
  );
}
