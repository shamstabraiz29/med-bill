"use client";

import React from "react";
import { 
  FileCheck, 
  RefreshCw, 
  Receipt, 
  LineChart, 
  UserCheck, 
  ShieldAlert 
} from "lucide-react";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from "@/components/ui/card";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import IconWrapper from "@/components/common/IconWrapper";

export default function MedicalBillingServices() {
  const services = [
    {
      icon: FileCheck,
      title: "Clean Claim Submission",
      desc: "Scrub and submit medical claims within 24 hours of patient visits with a 98%+ first-pass acceptance rate.",
    },
    {
      icon: ShieldAlert,
      title: "Denial Management & Appeals",
      desc: "Rigorous denial analysis and prompt appeal submissions to recover revenue from rejected claims.",
    },
    {
      icon: RefreshCw,
      title: "AR Recovery & Follow-up",
      desc: "Aggressive follow-up on aging insurance accounts (30+, 60+, 90+ days) to maximize collection rate.",
    },
    {
      icon: Receipt,
      title: "Patient Billing & Support",
      desc: "Transparent patient statements, online portal access, and friendly billing support team.",
    },
    {
      icon: UserCheck,
      title: "Eligibility & Pre-Authorization",
      desc: "Real-time insurance coverage verification prior to patient appointments to prevent claim rejections.",
    },
    {
      icon: LineChart,
      title: "Financial Analytics & Reporting",
      desc: "Detailed monthly financial reports, KPIs, and revenue performance dashboards for full transparency.",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="Our Core Services"
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <>
              Comprehensive Solutions for{" "}
              <span className="font-bold text-blue-600">Medical Billing</span>
            </>
          }
          description="Everything your healthcare practice needs to streamline revenue collection and minimize administrative burden."
          className="mb-12 mx-auto max-w-4xl sm:mb-16"
        />

        {/* Services Grid */}
        <MotionWrapper variant="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <MotionWrapper key={index} variant="staggerItem">
                <Card 
                  glass={false}
                  hoverEffect="both" 
                  className="group h-full rounded-2xl border border-[#E2E6EC] bg-white p-2 transition-all duration-300 hover:border-[#1D4ED8]/30"
                >
                  <CardHeader className="p-6 pb-2">
                    <IconWrapper
                      icon={Icon}
                      size="md"
                      variant="surface"
                      className="mb-4 transition-transform duration-300 group-hover:scale-110"
                    />
                    <CardTitle className="text-lg font-bold text-[#0F172A] transition-colors group-hover:text-[#1D4ED8]">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-2">
                    <CardDescription className="text-xs leading-[1.65] text-[#475569] sm:text-[13px]">
                      {service.desc}
                    </CardDescription>
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
