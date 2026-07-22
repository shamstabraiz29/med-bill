"use client";

import { ClipboardSignature, CodeXml, BadgeCheck, BriefcaseMedical, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

// Service data structure
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
        
        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Section Header */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <SectionHeader
              badge="Core Competencies"
              badgeVariant="indigo"
              title={
                <>
                  Overview of{" "}
                  <span className="text-blue-600">
                    Medical Billing Services
                  </span>{" "}
                  in the USA
                </>
              }
              description={
                <div className="space-y-4 text-slate-500 text-sm sm:text-base leading-relaxed">
                  <p>
                    Medical Billing Services provide organized solutions to assist with billing for healthcare providers by
                    transforming clinical data into billable insurance claims. Through electronic medical billing and
                    structuring clinical billing processes, healthcare providers are able to accurately capture diagnoses,
                    procedures and charges and submit them to payers.
                  </p>
                  <p>
                    Beyond claim creation, medical billing typically involves the use of physician accounts management
                    solutions and/or medical billing management. This may include tracking of patient claims invoicing,
                    resolving claim rejections, tracking of outstanding balances and providing financial reports to facilitate
                    improved <span className="text-[#2A2374] font-semibold">Revenue Cycle Planning</span> for healthcare organizations. Core components of this service
                    include:
                  </p>
                </div>
              }
            />
          </div>

          {/* RIGHT COLUMN: Services Cards Grid (2x2) */}
          <MotionWrapper
            variant="stagger"
            staggerDelay={0.12}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
          >
            {services.map((service, idx) => {
              const Icon = service.icon;

              return (
                <MotionWrapper key={idx} variant="staggerItem">
                  <Card className="flex flex-col h-full hover:border-slate-300 hover:shadow-md transition-all duration-200">
                    <CardContent className="flex flex-col flex-1 p-8 items-start justify-between text-left">
                      
                      {/* Top content wrapper */}
                      <div className="flex flex-col items-start text-left flex-1 w-full">
                        {/* Solid Icon */}
                        <div className="w-11 h-11 rounded-xl bg-[#2A2374] text-white flex items-center justify-center mb-6">
                          <Icon className="w-5 h-5 stroke-[1.75]" />
                        </div>

                        {/* Service Title */}
                        <h3 className="text-base font-bold text-[#1c1a45] mb-3 tracking-tight leading-snug text-left">
                          {service.title}
                        </h3>

                        {/* Service Description */}
                        <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-6 text-left">
                          {service.description}
                        </p>
                      </div>

                      {/* Explore button */}
                      <div className="w-full mt-auto flex justify-start">
                        <AppButton
                          href={service.link}
                          variant="secondary"
                          size="sm"
                          showArrow
                        >
                          Explore More
                        </AppButton>
                      </div>

                    </CardContent>
                  </Card>
                </MotionWrapper>
              );
            })}
          </MotionWrapper>

        </div>

      </div>
    </section>
  );
}
