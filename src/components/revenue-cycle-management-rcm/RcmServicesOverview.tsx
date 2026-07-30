"use client";

import React from "react";
import AppImage from "@/components/ui/AppImage";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { defaultRevenueCycleManagementData } from "@/lib/defaults/revenueCycleManagement";

interface RcmServicesOverviewProps {
  data?: typeof defaultRevenueCycleManagementData.servicesOverview;
}

export default function RcmServicesOverview({ data }: RcmServicesOverviewProps) {
  const overviewData = data || defaultRevenueCycleManagementData.servicesOverview;

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 lg:space-y-16">
        {overviewData.items.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <MotionWrapper
              key={item.id || index}
              variant={isEven ? "slideLeft" : "slideRight"}
              delay={index * 0.1}
            >
              <div
                className={`rounded-2xl p-6 sm:p-8 lg:p-12 border ${item.borderColor || "border-indigo-100"} ${item.cardBg || "bg-[#EEF2FF]"} shadow-sm transition-all duration-300 hover:shadow-md relative overflow-hidden`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Content Column */}
                  <div
                    className={`lg:col-span-7 flex flex-col justify-center space-y-5 text-left ${
                      item.imageLeft ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-bold text-[#0F172A] leading-snug">
                      {item.titlePrefix && <span>{item.titlePrefix}</span>}
                      {item.titleHighlight && (
                        <span className="text-[#2E2874] font-bold">
                          {item.titleHighlight}
                        </span>
                      )}
                      {item.titleSuffix && <span>{item.titleSuffix}</span>}
                    </h3>

                    <p className="text-slate-600 text-sm sm:text-base leading-[1.7] font-normal">
                      {item.description}
                    </p>

                    <div className="pt-2">
                      <Link
                        href={item.linkHref}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2E2874] hover:text-[#1D4ED8] underline underline-offset-4 decoration-2 transition-colors group"
                      >
                        <span>{item.linkText}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
                      </Link>
                    </div>
                  </div>

                  {/* Image Column with Logo Banner */}
                  <div
                    className={`lg:col-span-5 w-full flex justify-center ${
                      item.imageLeft ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-white/60 group">
                      <AppImage
                        src={item.imageSrc}
                        alt={item.imageAlt || "BellMedEx Service"}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      
                      {/* BellMedEx Logo Banner at Bottom */}
                      <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-sm py-2.5 px-4 border-t border-slate-100 flex items-center">
                        <span className="text-lg sm:text-xl font-bold tracking-tight text-[#1D4ED8]">
                          Bell<span className="text-sky-500">MedEx</span>
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </MotionWrapper>
          );
        })}
      </div>
    </section>
  );
}
