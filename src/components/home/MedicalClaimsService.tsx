"use client";

import Image from "next/image";
import { ShieldCheck, TrendingUp, Zap, RefreshCw, LucideIcon } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

interface FeatureItem {
  label: string;
  description: string;
  icon: LucideIcon;
}

export default function MedicalClaimsService() {
  const features: FeatureItem[] = [
    {
      label: "Secure Claim Data Transmission",
      description: "Safest digital encryption protects sensitive patient data.",
      icon: ShieldCheck,
    },
    {
      label: "Increase Revenue",
      description: "Get full payments, without unfair cuts by the insurance networks.",
      icon: TrendingUp,
    },
    {
      label: "Instant Claim Submission",
      description: "Electronic billing service files claims instantly.",
      icon: Zap,
    },
    {
      label: "Claim Follow-Up & Resolution",
      description: "Denied claims are appealed and reprocessed successfully.",
      icon: RefreshCw,
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#1c1a45] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <SectionHeader
          theme="dark"
          badge="Medical Claims Service"
          badgeVariant="dark"
          title={
            <>
              We boost healthcare income with{" "}
              <span className="text-sky-300 font-bold">
                quick, uncut reimbursements!
              </span>
            </>
          }
          description="Accelerate your revenue cycle with certified coding accuracy, real-time claim scrubbing, and 24/7 denial resolution to ensure maximum reimbursement for every claim."
          className="mb-10 sm:mb-12 max-w-4xl"
        />

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Doctors Visual & Copy Block */}
          <MotionWrapper variant="slideLeft" className="lg:col-span-5 flex flex-col items-start text-left">
            {/* Visual Container */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <Image
                src="/doctors-team.png"
                alt="Confident Medical Billing Professionals"
                width={600}
                height={550}
                className="rounded-2xl object-cover object-center w-full h-auto"
                priority
              />
            </div>

            {/* Subheader & Copy block */}
            <h3 className="text-lg sm:text-xl font-bold text-white mt-10 mb-4 tracking-tight leading-snug">
              The billing firm that does medical claims processing
            </h3>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <p>
                Management of billing claims poses difficulties for providers pursuing timely submissions and full
                remittance for care given. But take heart – our niche medical billing services ease the way.
              </p>
              <p>
                We optimize each invoicing phase, armed with clinical knowledge and zeal for first-class claims
                processing. Cloud tech validates a patient&apos;s insurance eligibility right away and file claims
                electronically to quicken payments. Plus, our expert billers ensure every claim reaches the insurer to
                obtain full provider reimbursements.
              </p>
            </div>
          </MotionWrapper>

          {/* RIGHT COLUMN: Feature Cards, CTA, Copy Block */}
          <MotionWrapper variant="slideRight" className="lg:col-span-7 flex flex-col items-start text-left space-y-8">
            
            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {features.map((feature, idx) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={idx}
                    className="flex gap-4 p-5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] transition-colors duration-200"
                  >
                    <div className="w-9 h-9 shrink-0 rounded-lg bg-white/10 text-slate-200 flex items-center justify-center">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex-grow">
                      <span className="text-[10px] font-semibold tracking-widest text-sky-300 uppercase">
                        {feature.label}
                      </span>
                      <p className="text-white/80 text-xs sm:text-[13px] mt-1 leading-normal">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <AppButton
              href="/request-audit"
              variant="primary"
              size="lg"
              showArrow
            >
              Book Free Consultation
            </AppButton>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/10" />

            {/* Specialized Billing Copy block */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                When &ldquo;good enough&rdquo; isn&apos;t enough, you need a specialized medical billing agency.
              </h3>

              <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                <p>
                  As a leading medical billing services provider, our billing firm wrings every last dollar from a
                  provider&apos;s claims via 24/7 billing cycle oversight. We&apos;re experts on the big commercial ones, Aetna
                  and Blue Cross Blue Shield. We know the government plans inside and out, Medicare and Medicaid.
                </p>
                <p>
                  We work hand in glove with the top payers so the provider billing reimbursement forms like CMS-1500,
                  CMS-1450 (UB-04), and CMS-1728-20 are shipshape. BellMedEx medical transcription and billing company
                  makes claims and repayments happen, period!
                </p>
              </div>

              {/* Demo CTA */}
              <div className="pt-2">
                <AppButton
                  href="/free-demo"
                  variant="secondary-dark"
                  size="md"
                  showArrow
                >
                  Request Free Billing Demo
                </AppButton>
              </div>
            </div>

          </MotionWrapper>

        </div>

      </div>
    </section>
  );
}
