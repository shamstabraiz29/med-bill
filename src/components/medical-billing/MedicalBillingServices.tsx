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
    <section className="py-16 sm:py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="OUR CORE SERVICES"
          badgeVariant="indigo"
          align="center"
          title={
            <>
              Comprehensive Solutions for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Medical Billing
              </span>
            </>
          }
          description="Everything your healthcare practice needs to streamline revenue collection and minimize administrative burden."
          className="mb-12 sm:mb-16"
        />

        {/* Services Grid */}
        <MotionWrapper variant="stagger" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <MotionWrapper key={index} variant="staggerItem">
                <Card 
                  glass={true} 
                  hoverEffect="both" 
                  className="h-full border-slate-200/80 dark:border-slate-800 p-2 group transition-all duration-300"
                >
                  <CardHeader className="p-6 pb-2">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-[#1D4ED8] dark:text-blue-400 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#1D4ED8] transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-2">
                    <CardDescription className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
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
