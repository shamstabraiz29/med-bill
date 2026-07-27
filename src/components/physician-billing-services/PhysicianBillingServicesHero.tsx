"use client";

import React from "react";
import { Play } from "lucide-react";
import DoctorVisuals from "@/components/home/DoctorVisuals";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import PhysicianBillingServicesConsultationForm from "./PhysicianBillingServicesConsultationForm";
import PhysicianBillingServicesHeroAccordion from "./PhysicianBillingServicesHeroAccordion";
import PhysicianBillingServicesHeroHeader from "./PhysicianBillingServicesHeroHeader";
import {
  physicianContainerClassName,
  physicianSectionClassName,
} from "./physicianSectionLayout";

export default function PhysicianBillingServicesHero() {
  return (
    <section
      className={physicianSectionClassName}
      aria-labelledby="physician-billing-services-hero-heading"
    >
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1.5deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(10px) rotate(-1.5deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float-slow {
          animation: float-slow 9s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 7.5s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 35s linear infinite;
        }
      `}</style>

      <div className={`${physicianContainerClassName} relative z-10`}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col space-y-6 text-left lg:col-span-7">
            <PhysicianBillingServicesHeroHeader headingId="physician-billing-services-hero-heading" />

            <MotionWrapper variant="fadeUp" className="flex flex-wrap items-center gap-3 sm:gap-4">
              <AppButton href="/schedule-a-demo" variant="primary" size="lg" showArrow>
                Get A Demo
              </AppButton>
              <AppButton
                href="https://youtube.com"
                variant="secondary"
                size="lg"
                icon={Play}
              >
                Watch Video
              </AppButton>
            </MotionWrapper>

            <MotionWrapper variant="fadeUp">
              <PhysicianBillingServicesHeroAccordion />
            </MotionWrapper>
          </div>

          <DoctorVisuals />
        </div>

        <MotionWrapper variant="fadeUp" className="mt-12 sm:mt-14 lg:mt-16">
          <PhysicianBillingServicesConsultationForm />
        </MotionWrapper>
      </div>
    </section>
  );
}
