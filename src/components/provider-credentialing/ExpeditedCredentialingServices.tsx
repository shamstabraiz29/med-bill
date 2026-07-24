"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Award, Zap } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import type { ExpeditedCredentialingServicesData } from "@/payload/types/providerCredentialing";
import { defaultProviderCredentialingData } from "@/lib/defaults/providerCredentialing";

interface ExpeditedCredentialingServicesProps {
  data?: ExpeditedCredentialingServicesData;
}

export default function ExpeditedCredentialingServices({ data }: ExpeditedCredentialingServicesProps) {
  const content = data || defaultProviderCredentialingData.expeditedServices;

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent border-t border-[#E2E6EC] overflow-hidden">
      {/* Background Ambient Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1D4ED8_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 lg:space-y-20">

        {/* Section Header */}
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

        {/* ==================== BLOCK 1 (Text Left, Image Right) ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: 3 Features */}
          <MotionWrapper variant="slideLeft" className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <div className="space-y-6">
              {content.block1Features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 group">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-1 border border-blue-100 group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors duration-200">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-[-0.02em] leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-[1.65]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </MotionWrapper>

          {/* RIGHT: Image Frame */}
          <MotionWrapper variant="slideRight" className="lg:col-span-5 w-full">
            <div className="relative w-full max-w-lg mx-auto aspect-[4/5] rounded-3xl bg-white border border-[#E2E6EC] shadow-2xl shadow-blue-900/10 p-3 overflow-hidden group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900">
                <Image
                  src={content.block1ImageSrc || "/clearinghouse-nurse-hero.png"}
                  alt="Public & Private Program Provider Credentialing"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-[#0F172A]/90 backdrop-blur-md border border-white/20 p-3.5 rounded-xl flex items-center gap-3 text-white shadow-xl">
                  <div className="w-8 h-8 rounded-lg bg-[#1D4ED8] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <ShieldCheck className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white tracking-tight leading-snug">
                      {content.block1CardTitle}
                    </span>
                    <span className="text-[10px] text-blue-200 font-medium">
                      {content.block1CardSubtitle}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>

        </div>

        {/* INLINE BANNER 1 */}
        <MotionWrapper variant="scaleUp">
          <div className="relative w-full rounded-2xl bg-[#0F172A] border border-white/10 text-white p-5 sm:p-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-tight text-center sm:text-left">
              {content.banner1TextPlain}{" "}
              <span className="text-amber-300">{content.banner1TextHighlight}</span>
            </h4>
            <div className="flex items-center gap-4">
              <AppButton href={content.banner1CtaHref} variant="secondary-dark" size="sm" showArrow>
                {content.banner1CtaLabel}
              </AppButton>
              <span className="text-xl font-extrabold text-white tracking-wider hidden md:inline-block">
                Bell<span className="text-[#1D4ED8]">MedEx</span>
              </span>
            </div>
          </div>
        </MotionWrapper>

        {/* ==================== BLOCK 2 (Image Left, Text Right) ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Image Frame */}
          <MotionWrapper variant="slideLeft" className="lg:col-span-5 w-full order-2 lg:order-1">
            <div className="relative w-full max-w-lg mx-auto aspect-[4/5] rounded-3xl bg-white border border-[#E2E6EC] shadow-2xl shadow-blue-900/10 p-3 overflow-hidden group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900">
                <Image
                  src={content.block2ImageSrc || "/consultants-laptop.png"}
                  alt="Central Profile Setup and Upkeep"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-[#0F172A]/90 backdrop-blur-md border border-white/20 p-3.5 rounded-xl flex items-center gap-3 text-white shadow-xl">
                  <div className="w-8 h-8 rounded-lg bg-[#1D4ED8] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Award className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white tracking-tight leading-snug">
                      {content.block2CardTitle}
                    </span>
                    <span className="text-[10px] text-blue-200 font-medium">
                      {content.block2CardSubtitle}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>

          {/* RIGHT: 3 Features */}
          <MotionWrapper variant="slideRight" className="lg:col-span-7 flex flex-col space-y-6 text-left order-1 lg:order-2">
            <div className="space-y-6">
              {content.block2Features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 group">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-1 border border-blue-100 group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors duration-200">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-[-0.02em] leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-[1.65]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </MotionWrapper>

        </div>

        {/* INLINE BANNER 2 */}
        <MotionWrapper variant="scaleUp">
          <div className="relative w-full rounded-2xl bg-[#0F172A] border border-white/10 text-white p-5 sm:p-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-tight text-center sm:text-left">
              {content.banner2TextPlain}{" "}
              <span className="text-amber-300">{content.banner2TextHighlight}</span>
            </h4>
            <div className="flex items-center gap-4">
              <AppButton href={content.banner2CtaHref} variant="secondary-dark" size="sm" showArrow>
                {content.banner2CtaLabel}
              </AppButton>
              <span className="text-xl font-extrabold text-white tracking-wider hidden md:inline-block">
                Bell<span className="text-[#1D4ED8]">MedEx</span>
              </span>
            </div>
          </div>
        </MotionWrapper>

        {/* ==================== BLOCK 3 (Text Left, Image Right) ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: 3 Features */}
          <MotionWrapper variant="slideLeft" className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <div className="space-y-6">
              {content.block3Features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 group">
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-1 border border-blue-100 group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors duration-200">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-[-0.02em] leading-snug mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-[1.65]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </MotionWrapper>

          {/* RIGHT: Image Frame */}
          <MotionWrapper variant="slideRight" className="lg:col-span-5 w-full">
            <div className="relative w-full max-w-lg mx-auto aspect-[4/5] rounded-3xl bg-white border border-[#E2E6EC] shadow-2xl shadow-blue-900/10 p-3 overflow-hidden group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900">
                <Image
                  src={content.block3ImageSrc || "/consultants-laptop.png"}
                  alt="Contract Setup, Terms & Reimbursement Review"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-[#0F172A]/90 backdrop-blur-md border border-white/20 p-3.5 rounded-xl flex items-center gap-3 text-white shadow-xl">
                  <div className="w-8 h-8 rounded-lg bg-[#1D4ED8] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Zap className="w-4.5 h-4.5 fill-white" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-white tracking-tight leading-snug">
                      {content.block3CardTitle}
                    </span>
                    <span className="text-[10px] text-blue-200 font-medium">
                      {content.block3CardSubtitle}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>

        </div>

        {/* INLINE BANNER 3 */}
        <MotionWrapper variant="scaleUp">
          <div className="relative w-full rounded-2xl bg-[#0F172A] border border-white/10 text-white p-5 sm:p-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <h4 className="text-base sm:text-lg font-bold text-white tracking-tight text-center sm:text-left">
              {content.banner3TextPlain}{" "}
              <span className="text-amber-300">{content.banner3TextHighlight}</span>
            </h4>
            <div className="flex items-center gap-4">
              <AppButton href={content.banner3CtaHref} variant="secondary-dark" size="sm" showArrow>
                {content.banner3CtaLabel}
              </AppButton>
              <span className="text-xl font-extrabold text-white tracking-wider hidden md:inline-block">
                Bell<span className="text-[#1D4ED8]">MedEx</span>
              </span>
            </div>
          </div>
        </MotionWrapper>

      </div>
    </section>
  );
}
