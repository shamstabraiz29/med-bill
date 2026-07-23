"use client";

import {
  DollarSign,
  ShieldCheck,
  Eye,
  TrendingUp,
  UserCheck,
  Calendar,
  LucideIcon
} from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

interface PricingBenefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function NationwidePricingSection() {
  const benefits: PricingBenefit[] = [
    {
      title: "Custom Pricing",
      description: "Tailored rates based on your medical specialty, active provider volume, and monthly claim numbers.",
      icon: DollarSign,
    },
    {
      title: "No Long-Term Contracts",
      description: "We earn your business month-to-month. Cancel anytime if you are not fully satisfied.",
      icon: ShieldCheck,
    },
    {
      title: "Transparent Billing",
      description: "Clear monthly statements with no hidden fees, set-up costs, or administrative surcharges.",
      icon: Eye,
    },
    {
      title: "Scalable for Any Practice Size",
      description: "Seamlessly scales from solo practitioners to large multi-specialty healthcare networks.",
      icon: TrendingUp,
    },
    {
      title: "Dedicated Account Manager",
      description: "A single point of contact who understands your practice's specific billing workflows.",
      icon: UserCheck,
    },
    {
      title: "Free Initial Consultation",
      description: "Get a comprehensive audit of your current EHR setup and billing efficiency at zero cost.",
      icon: Calendar,
    },
  ];

  return (
    <section className="relative w-full py-20 sm:py-24 bg-[#F5F7FA] border-y border-[#E2E6EC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <SectionHeader
            badge="Simple, Transparent Fees"
            badgeVariant="indigo"
            align="center"
            title={
              <>
                Customized Pricing for{" "}
                <span className="text-blue-600">Your Practice</span>
              </>
            }
            description="We don't believe in rigid, one-size-fits-all packages. Our flexible pricing models are structured around your specific practice needs, helping you reduce overhead and maximize net collections."
            className="space-y-4"
          />
        </div>

        {/* Editorial Unified Grid with Inner Divider Lines */}
        <div className="overflow-hidden rounded-2xl border border-[#E2E6EC] bg-[#E2E6EC]">
          <MotionWrapper
            variant="stagger"
            staggerDelay={0.04}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          >
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <MotionWrapper
                  key={idx}
                  variant="staggerItem"
                  className="group bg-white p-8 sm:p-10 flex flex-col justify-between transition-colors duration-300 hover:bg-[#F5F7FA]"
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-[#1D4ED8] transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-[#0F172A] tracking-[-0.02em]">
                        {benefit.title}
                      </h3>
                      <p className="text-[#475569] text-sm leading-[1.6]">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </MotionWrapper>
              );
            })}
          </MotionWrapper>
        </div>

        {/* Call to Action Block */}
        <div className="mt-16 sm:mt-24 text-center flex flex-col items-center justify-center space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <AppButton
              variant="primary"
              size="lg"
              href="/contact-us"
              showArrow
              className="w-full sm:w-auto"
            >
              Request a Personalized Quote
            </AppButton>
            <AppButton
              variant="secondary"
              size="lg"
              href="/contact-us"
              className="w-full sm:w-auto"
            >
              Speak to an Expert
            </AppButton>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide">
            Free consultation • No obligation • Customized pricing for every healthcare practice
          </p>
        </div>

      </div>
    </section>
  );
}
