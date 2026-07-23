"use client";

import Link from "next/link";
import { ClipboardSignature, CodeXml, BadgeCheck, BriefcaseMedical, ArrowRight, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

export default function ServicesOverview() {
  const services: ServiceItem[] = [
    {
      title: "Medical Billing Consultation",
      description: "Expert patient billers offer the most complete medical billing services that entail handling check-in/out, claims, payments, and denials for health care providers.",
      icon: ClipboardSignature,
      link: "/medical-billing-audit"
    },
    {
      title: "Medical Coding",
      description: "Clinical coding officers translate patient services into ICD-10 and CPT codes and generate a clean 'super-bill' for the biller to submit to the insurance payer.",
      icon: CodeXml,
      link: "/medical-coding"
    },
    {
      title: "Provider Credentialing",
      description: "Provider enrollment services by our credentialing specialists help healthcare providers join the network of desirable payors with maximum privileges.",
      icon: BadgeCheck,
      link: "/provider-credentialing"
    },
    {
      title: "Healthcare RCM",
      description: "Revenue cycle management services are specialty-specific, which means a physician's bespoke demands are met by a dedicated medical biller.",
      icon: BriefcaseMedical,
      link: "/revenue-cycle-management-rcm"
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header */}
        <SectionHeader
          badge="Core Competencies"
          badgeVariant="indigo"
          align="center"
          title={
            <>
              Overview of{" "}
              <span className="text-blue-600">
                Medical Billing Services
              </span>{" "}
              in the USA
            </>
          }
          description="We provide comprehensive and organized solutions to assist with billing for healthcare providers. Through electronic medical billing and structured clinical billing processes, we accurately capture diagnoses, procedures, and charges to improve Revenue Cycle Management."
          className="mb-12 sm:mb-16 max-w-4xl"
        />

        {/* 4-Column Responsive Cards Grid */}
        <MotionWrapper
          variant="stagger"
          staggerDelay={0.12}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;

            return (
              <MotionWrapper key={idx} variant="staggerItem" className="h-full">
                <Card className="group relative flex flex-col h-full bg-white border border-[#E2E6EC] rounded-2xl p-8 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
                  <CardContent className="p-0 flex flex-col flex-1 items-start justify-between text-left">
                    
                    <div className="flex flex-col items-start w-full flex-1">
                      {/* Minimalist Icon */}
                      <div className="text-[#1D4ED8] mb-6 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="w-8 h-8 stroke-[1.25]" />
                      </div>

                      {/* Service Title */}
                      <h3 className="text-base font-bold text-[#0F172A] mb-3 tracking-[-0.02em] leading-snug">
                        {service.title}
                      </h3>

                      {/* Service Description */}
                      <p className="text-xs sm:text-[13px] text-[#475569] leading-[1.6] mb-6">
                        {service.description}
                      </p>
                    </div>

                    {/* Explore Link */}
                    <div className="w-full mt-auto flex justify-start">
                      <Link
                        href={service.link}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D4ED8] hover:text-[#1E3A8A] transition-colors"
                      >
                        Explore More
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>

                  </CardContent>
                </Card>
              </MotionWrapper>
            );
          })}
        </MotionWrapper>

      </div>
    </section>
  );
}
