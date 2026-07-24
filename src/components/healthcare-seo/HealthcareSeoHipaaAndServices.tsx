"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowRight, Lock, CheckCircle2 } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import type { HealthcareSeoHipaaAndServicesData } from "@/payload/types/healthcareSeo";
import { defaultHealthcareSeoData } from "@/lib/defaults/healthcareSeo";

interface HealthcareSeoHipaaAndServicesProps {
  data?: HealthcareSeoHipaaAndServicesData;
}

export default function HealthcareSeoHipaaAndServices({ data }: HealthcareSeoHipaaAndServicesProps) {
  const content = data || defaultHealthcareSeoData.hipaaAndServices;

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent border-t border-[#E2E6EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT CARD: HIPAA Compliance & Peace of Mind */}
          <MotionWrapper variant="slideLeft" className="h-full">
            <Card className="group relative overflow-hidden rounded-3xl bg-slate-50/70 border border-[#E2E6EC] p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full text-left">
              <CardContent className="p-0 flex flex-col justify-between h-full space-y-8">
                
                {/* Top HIPAA Header Pill Banner */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="w-16 h-12 bg-white rounded-xl border border-[#E2E6EC] shadow-sm flex items-center justify-center p-2 shrink-0">
                    <ShieldCheck className="w-7 h-7 text-[#1D4ED8]" />
                  </div>

                  <div className="bg-[#2E2874] text-white text-xs sm:text-sm font-bold py-3 px-5 rounded-xl flex items-center gap-2 shadow-sm">
                    <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{content.hipaaBadgeText}</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
                    {content.hipaaTitle}
                  </h3>
                  
                  <p className="text-[#475569] text-sm sm:text-base leading-[1.75]">
                    {content.hipaaDescription}
                  </p>
                </div>

                {/* Security Tag */}
                <div className="pt-2 flex items-center gap-2 text-emerald-600 font-bold text-xs sm:text-sm">
                  <CheckCircle2 className="w-4.5 h-4.5 shrink-0" />
                  <span>{content.hipaaTag}</span>
                </div>

              </CardContent>
            </Card>
          </MotionWrapper>

          {/* RIGHT CARD: Other Services To Help You Grow */}
          <MotionWrapper variant="slideRight" className="h-full">
            <Card className="group relative overflow-hidden rounded-3xl bg-slate-50/70 border border-[#E2E6EC] p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full text-left">
              <CardContent className="p-0 flex flex-col justify-between h-full space-y-8">
                
                {/* Top 3 Service Image Tiles Row */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full">
                  {content.otherServices.map((service, idx) => (
                    <Link
                      key={idx}
                      href={service.href}
                      className="group/tile relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-sm block"
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover/tile:scale-108 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                      <span className="absolute bottom-3 left-3 right-3 text-xs sm:text-sm font-bold text-white tracking-wide drop-shadow-sm">
                        {service.title}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Content Details */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
                    {content.otherServicesTitle}
                  </h3>

                  <p className="text-[#475569] text-sm sm:text-base leading-[1.75]">
                    {content.otherServicesDescription}
                  </p>
                </div>

                {/* Explore Services Link */}
                <div className="pt-2">
                  <Link
                    href={content.otherServicesCtaHref}
                    className="inline-flex items-center gap-2 text-[#1D4ED8] hover:text-blue-700 font-bold text-sm underline underline-offset-4 decoration-2 group/link"
                  >
                    <span>{content.otherServicesCtaLabel}</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </CardContent>
            </Card>
          </MotionWrapper>

        </div>

      </div>
    </section>
  );
}
