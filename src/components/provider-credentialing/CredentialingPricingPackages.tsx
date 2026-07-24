"use client";

import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import type { CredentialingPricingPackagesData } from "@/payload/types/providerCredentialing";
import { defaultProviderCredentialingData } from "@/lib/defaults/providerCredentialing";

interface CredentialingPricingPackagesProps {
  data?: CredentialingPricingPackagesData;
}

export default function CredentialingPricingPackages({ data }: CredentialingPricingPackagesProps) {
  const content = data || defaultProviderCredentialingData.pricingPackages;

  return (
    <section className="relative w-full pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24 bg-transparent border-t border-[#E2E6EC]">
      {/* Background Ambient Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Section Header */}
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          align="center"
          title={
            <>
              {content.titlePlain}{" "}
              <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
            </>
          }
          description={content.description}
          className="mb-12 sm:mb-16 max-w-4xl"
        />

        {/* 3 Pricing Package Cards Grid */}
        <MotionWrapper
          variant="stagger"
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch w-full pt-6"
        >
          {content.tiers.map((tier, idx) => (
            <MotionWrapper key={idx} variant="staggerItem" className="h-full flex relative pt-3">
              {/* Popular Badge Ribbon */}
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#1D4ED8] text-white text-[11px] font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-lg z-30 whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <Card
                className={`group relative flex flex-col justify-between w-full rounded-2xl p-6 sm:p-8 transition-all duration-300 !overflow-visible ${
                  tier.popular
                    ? "bg-white border-2 border-[#1D4ED8] shadow-xl shadow-blue-900/10 scale-[1.02] z-20"
                    : "bg-white border border-[#E2E6EC] shadow-sm hover:shadow-md hover:border-[#1D4ED8]/30"
                }`}
              >

                <CardContent className="p-0 flex flex-col flex-1 text-left justify-between">
                  <div>
                    {/* Tier Name Header */}
                    <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight mb-6 text-center">
                      {tier.name}
                    </h3>

                    {/* Core Features Inclusions & Exclusions */}
                    <div className="space-y-3 mb-6 pb-6 border-b border-[#E2E6EC]">
                      {tier.coreFeatures.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5">
                          {feat.included ? (
                            <CheckCircle2 className="w-4.5 h-4.5 text-[#1D4ED8] shrink-0" />
                          ) : (
                            <XCircle className="w-4.5 h-4.5 text-slate-300 shrink-0" />
                          )}
                          <span
                            className={`text-xs sm:text-sm font-semibold ${
                              feat.included ? "text-[#0F172A]" : "text-slate-400 line-through"
                            }`}
                          >
                            {feat.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="mb-6">
                      <AppButton
                        href="/schedule-a-demo"
                        variant={tier.popular ? "primary" : "secondary"}
                        size="md"
                        showArrow
                        className="w-full justify-center"
                      >
                        Get Started
                      </AppButton>
                    </div>

                    {/* Detailed Features Checklist */}
                    <div className="space-y-3 pt-2">
                      {tier.detailChecklist.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-[13px] text-[#475569] leading-relaxed">
                            {typeof detail === 'string' ? detail : (detail as any).label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </CardContent>
              </Card>
            </MotionWrapper>
          ))}
        </MotionWrapper>

      </div>
    </section>
  );
}
