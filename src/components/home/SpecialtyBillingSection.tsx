"use client";

import Link from "next/link";
import { FlaskConical, Activity, Heart, Brain, ShieldAlert, Bone, ArrowRight, LucideIcon } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import SectionHeader from "@/components/ui/SectionHeader";

interface SpecialtyItem {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  popular?: boolean;
}

export default function SpecialtyBillingSection() {
  const specialties: SpecialtyItem[] = [
    {
      title: "Laboratory Billing",
      description: "Optimizing toxicology, pathology, and molecular lab claims with strict regulatory oversight.",
      icon: FlaskConical,
      link: "/laboratory-billing",
    },
    {
      title: "Urology Billing",
      description: "Expert billing for specialized clinical procedures, surgeries, and urological diagnostics.",
      icon: Activity,
      link: "/specialties/urology-billing",
    },
    {
      title: "Cardiology Billing",
      description: "Accurate coding for complex cardiovascular procedures, diagnostic imaging, and therapy.",
      icon: Heart,
      link: "/specialties/cardiology-billing",
    },
    {
      title: "Behavioral Health",
      description: "Managing complex billing regulations for therapy, mental health, and psychiatric clinics.",
      icon: Brain,
      link: "/specialties/mental-behavioral-health-billing",
      popular: true,
    },
    {
      title: "Urgent Care Billing",
      description: "High-volume coding and rapid claim submissions tailored to outpatient medical settings.",
      icon: ShieldAlert,
      link: "/specialties/urgent-care-billing",
      popular: true,
    },
    {
      title: "Orthopedics Billing",
      description: "Accurate musculoskeletal, physical therapy, and surgical coding to prevent payor denials.",
      icon: Bone,
      link: "/specialties/orthopedics-billing",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header */}
        <SectionHeader
          badge="Comprehensive Specialties"
          badgeVariant="indigo"
          align="center"
          title={
            <>
              Specialty{" "}
              <span className="text-blue-600">
                Medical Billing
              </span>
            </>
          }
          description="Our tailored medical billing services boost reimbursements through specialty-focused billing teams adept at ICD-10 coding rules and protocols unique to your medical niche. We align your billing and EHR workflows to maximize efficiency."
          className="mb-16 sm:mb-20 max-w-4xl"
        />

        {/* Specialties Cardless Grid */}
        <div className="w-full">
          <MotionWrapper
            variant="stagger"
            staggerDelay={0.08}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 sm:gap-y-16 w-full"
          >
            {specialties.map((specialty, idx) => {
              const Icon = specialty.icon;

              return (
                <MotionWrapper key={idx} variant="staggerItem" className="h-full">
                  <div className="group relative flex flex-col justify-between items-start text-left h-full">
                    
                    <div className="w-full">
                      {/* Outline Icon */}
                      <div className="text-[#1D4ED8] mb-5 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="w-7 h-7 stroke-[1.25]" />
                      </div>

                      {/* Title & Badge */}
                      <div className="flex items-center gap-2.5 mb-3">
                        <h3 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-[-0.02em] leading-snug transition-colors duration-200 group-hover:text-[#1D4ED8]">
                          {specialty.title}
                        </h3>
                        {specialty.popular && (
                          <span className="bg-blue-50 border border-blue-100 text-[#1D4ED8] text-[8px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded">
                            Popular
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-[#475569] leading-[1.6] mb-4">
                        {specialty.description}
                      </p>
                    </div>

                    {/* Explore Link */}
                    <div className="pt-1">
                      <Link
                        href={specialty.link}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D4ED8] hover:text-[#1E3A8A] transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                      </Link>
                    </div>

                  </div>
                </MotionWrapper>
              );
            })}
          </MotionWrapper>
        </div>

        {/* Centered Bottom CTA */}
        <div className="mt-16 sm:mt-20 text-center">
          <AppButton
            href="/medical-billing-pricing-bellmedex"
            variant="primary"
            size="lg"
            showArrow
          >
            View All Specialties
          </AppButton>
        </div>

      </div>
    </section>
  );
}
