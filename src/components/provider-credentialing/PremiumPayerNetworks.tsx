"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import type { PremiumPayerNetworksData } from "@/payload/types/providerCredentialing";
import { defaultProviderCredentialingData } from "@/lib/defaults/providerCredentialing";

interface PremiumPayerNetworksProps {
  data?: PremiumPayerNetworksData;
}

export default function PremiumPayerNetworks({ data }: PremiumPayerNetworksProps) {
  const content = data || defaultProviderCredentialingData.premiumPayerNetworks;

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent border-t border-[#E2E6EC] overflow-hidden">
      {/* Background Ambient Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: Visual Image Frame */}
          <MotionWrapper variant="slideLeft" className="lg:col-span-5 w-full">
            <div className="relative w-full max-w-lg mx-auto aspect-[4/5] rounded-2xl bg-white border border-[#E2E6EC] shadow-2xl shadow-blue-900/10 p-3 overflow-hidden group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900">
                <Image
                  src={content.imageSrc || "/consultants-laptop.png"}
                  alt="Medical Provider reviewing Credentialing Payer Enrollment"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent" />

                {/* Floating Trust Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0F172A]/90 backdrop-blur-md border border-white/20 p-3.5 rounded-xl flex items-center gap-3 text-white shadow-xl">
                  <div className="w-8 h-8 rounded-lg bg-[#1D4ED8] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <ShieldCheck className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white tracking-tight leading-snug">
                      {content.cardTitle}
                    </span>
                    <span className="text-[10px] text-blue-200 font-medium">
                      {content.cardSubtitle}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>

          {/* RIGHT COLUMN: Content Copy & CTA */}
          <MotionWrapper variant="slideRight" className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Eyebrow Badge */}
            <SectionBadge variant="indigo">
              {content.badge}
            </SectionBadge>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-[-0.02em] leading-[1.2]">
              {content.titlePlain}{" "}
              <span className="text-[#1D4ED8]">
                {content.titleHighlight}
              </span>
            </h2>

            {/* Paragraph Copies */}
            <div className="space-y-4 text-[#475569] text-sm sm:text-base leading-[1.65]">
              <p>{content.description1}</p>
              <p>{content.description2}</p>
              <p>{content.description3}</p>
            </div>

            {/* CTA Button */}
            <div className="pt-3">
              <AppButton
                href={content.ctaHref}
                variant="primary"
                size="lg"
                showArrow
                className="shadow-md shadow-blue-900/10"
              >
                {content.ctaLabel}
              </AppButton>
            </div>

          </MotionWrapper>

        </div>
      </div>
    </section>
  );
}
