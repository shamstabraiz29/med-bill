"use client";

import Link from "next/link";
import { UserCheck, ShieldCheck, Clock, TrendingUp, ArrowRight } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";

export default function BillingCTASection() {
  const features = [
    {
      title: "Instant Verification",
      desc: "Patient's insurance coverage verification on the spot.",
      icon: UserCheck,
    },
    {
      title: "HIPAA-Compliant Safety",
      desc: "HIPAA-compliant medical billing services for data safety.",
      icon: ShieldCheck,
    },
    {
      title: "24/7 Claim Submission",
      desc: "24/7 medical billing services to handle every claim submission.",
      icon: Clock,
    },
    {
      title: "98% Success Rate",
      desc: "98% claim reimbursement rate for healthy cash flow.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="w-full bg-transparent py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="w-full max-w-7xl">
        {/* Main card */}
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl bg-[#0F172A] border border-white/10 text-white p-8 sm:p-12 shadow-lg">

            {/* Top Row: Copy & CTA Button */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 md:gap-8">
              <div className="max-w-3xl text-left space-y-3.5">
                {/* Badge */}
                <SectionBadge variant="dark">
                  Billing Special Offer
                </SectionBadge>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight sm:leading-snug">
                  Let&apos;s experience our medical billing services for{" "}
                  <span className="text-amber-300 font-bold">
                    as low as 2.49%
                  </span>
                </h2>
                <p className="text-blue-200 text-sm sm:text-base">
                  Over <span className="text-white font-semibold">1,500+ practices</span> trust Bellmedex medical billing services company, so let&apos;s have a chat.
                </p>
              </div>

              <div className="flex-shrink-0 flex items-start lg:items-center justify-start lg:justify-end">
                <AppButton
                  href="/schedule-a-demo"
                  variant="secondary-dark"
                  size="lg"
                  showArrow
                >
                  Book a demo
                </AppButton>
              </div>
            </div>

            {/* Divider line */}
            <div className="w-full border-t border-white/10 my-8 sm:my-10" />

            {/* Bottom Grid: Feature Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 text-left">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-5 flex flex-col gap-3 transition-colors duration-200 hover:bg-white/[0.08]"
                  >
                    {/* Icon */}
                    <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center">
                      <Icon className="w-4 h-4 stroke-[2]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xs font-semibold tracking-wider uppercase text-indigo-200 mt-1">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/80 text-xs sm:text-[13px] leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
