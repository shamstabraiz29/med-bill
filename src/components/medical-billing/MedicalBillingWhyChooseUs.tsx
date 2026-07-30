"use client";

import React from "react";
import AppImage from "@/components/ui/AppImage";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import IconWrapper from "@/components/common/IconWrapper";
import { getIcon } from "@/lib/icons";
import { defaultMedicalBillingData } from "@/lib/defaults/medicalBilling";

interface MedicalBillingWhyChooseUsProps {
  data?: typeof defaultMedicalBillingData.whyChooseUs;
}

export default function MedicalBillingWhyChooseUs({ data }: MedicalBillingWhyChooseUsProps) {
  const whyData = data || defaultMedicalBillingData.whyChooseUs;

  return (
    <section className="relative w-full bg-transparent py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
        
        {/* Top 3 Column Cards Grid */}
        <MotionWrapper variant="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {whyData.topCards.map((card, idx) => {
            const Icon = getIcon(card.iconName);
            return (
              <MotionWrapper key={idx} variant="staggerItem">
                <Card 
                  glass={false} 
                  hoverEffect="both" 
                  className="h-full bg-white border border-[#E2E6EC] rounded-2xl sm:rounded-2xl p-6 sm:p-8 text-center shadow-[0_4px_24px_rgba(29,78,216,0.04)] hover:border-[#1D4ED8]/30 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-start group"
                >
                  <CardContent className="p-0 flex flex-col items-center text-center">
                    <IconWrapper
                      icon={Icon}
                      size="lg"
                      variant="surface"
                      className="mb-5 group-hover:scale-110"
                    />

                    <h3 className="text-xl font-bold text-[#0F172A] mb-3 tracking-[-0.02em]">
                      {card.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-[#475569] leading-[1.6]">
                      {card.desc}
                    </p>
                  </CardContent>
                </Card>
              </MotionWrapper>
            );
          })}
        </MotionWrapper>

        {/* Bottom Split Section: Image + Why Choose Us Copy & List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Consultants Laptop Image */}
          <MotionWrapper variant="slideLeft" className="lg:col-span-6 relative">
            <div className="relative w-full h-[360px] sm:h-[460px] md:h-[500px] rounded-2xl overflow-hidden border border-[#E2E6EC] shadow-md group">
              <AppImage
                src={whyData.imageSrc}
                fallbackSrc="/consultants-laptop.png"
                alt="BellMedEx medical billing consultants reviewing practice analytics on laptop"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Certification Badge */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-white/95 backdrop-blur-md border border-slate-200/80 px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3">
                <IconWrapper icon={ShieldCheck} size="sm" variant="surface" />
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A]">
                    Certified Medical Billing Experts
                  </h4>
                  <p className="text-[11px] text-[#475569]">
                    100% Accuracy &amp; Accelerated Collections
                  </p>
                </div>
              </div>
            </div>
          </MotionWrapper>

          {/* Right Column: Why Choose Us Content & Checklist */}
          <MotionWrapper variant="slideRight" className="lg:col-span-6 space-y-6 text-left">
            <SectionHeader
              badge={whyData.badge}
              badgeVariant="indigo"
              badgePulse
              align="left"
              title={
                <>
                  {whyData.titlePrefix}
                  <span className="font-bold text-blue-600">{whyData.titleHighlight}</span>
                  {whyData.titleSuffix}
                </>
              }
              description={
                <div className="space-y-4">
                  <p>{whyData.description1}</p>
                  <p>{whyData.description2}</p>
                </div>
              }
            />

            {/* Checklist */}
            <div className="pt-2 flex flex-col gap-2.5">
              {whyData.checklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-left">
                  <div className="w-4 h-4 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5">
                    <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-medium text-[#475569] leading-snug">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

          </MotionWrapper>

        </div>

      </div>
    </section>
  );
}
