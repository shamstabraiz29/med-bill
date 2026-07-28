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
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 35s linear infinite;
        }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl"
      />

      <div className={`${physicianContainerClassName} relative z-10`}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col space-y-6 text-left lg:col-span-7">
            <PhysicianBillingServicesHeroHeader headingId="physician-billing-services-hero-heading" />

            <MotionWrapper variant="fadeUp" className="flex flex-wrap items-center gap-3 sm:gap-4">
              <AppButton href="/schedule-a-demo" variant="primary" size="lg" showArrow>
                Get A Demo
              </AppButton>
              <AppButton href="https://youtube.com" variant="secondary" size="lg" icon={Play}>
                Watch Video
              </AppButton>
            </MotionWrapper>

            <MotionWrapper variant="fadeUp">
              <PhysicianBillingServicesHeroAccordion />
            </MotionWrapper>
          </div>

          <MotionWrapper variant="slideRight" delay={0.1} className="lg:col-span-5">
            <DoctorVisuals />
          </MotionWrapper>
        </div>

        <MotionWrapper variant="fadeUp" delay={0.15} className="mt-12 sm:mt-14 lg:mt-16">
          <PhysicianBillingServicesConsultationForm />
        </MotionWrapper>
      </div>
    </section>
  );
}
