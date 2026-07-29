"use client";

import React from "react";
import { BarChart3, Settings } from "lucide-react";
import DoctorVisuals from "@/components/home/DoctorVisuals";
import MotionWrapper from "@/components/ui/MotionWrapper";
import DenialManagementServicesHeroFeatures from "./DenialManagementServicesHeroFeatures";
import DenialManagementServicesHeroForm from "./DenialManagementServicesHeroForm";
import DenialManagementServicesHeroHeader from "./DenialManagementServicesHeroHeader";
import {
  denialManagementContainerClassName,
  denialManagementSectionClassName,
} from "./denialManagementSectionLayout";
import { defaultDenialManagementServicesData } from "@/lib/defaults/denialManagementServices";
import type { DenialManagementHeroData } from "@/payload/types/denialManagementServices";

interface DenialManagementServicesHeroProps {
  data?: DenialManagementHeroData;
}

export default function DenialManagementServicesHero({ data }: DenialManagementServicesHeroProps) {
  const content = data || defaultDenialManagementServicesData.hero;

  return (
    <section
      className={denialManagementSectionClassName}
      aria-labelledby="denial-management-services-hero-heading"
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

      <div className={`${denialManagementContainerClassName} relative z-10`}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col space-y-6 lg:col-span-7">
            <DenialManagementServicesHeroHeader
              headingId="denial-management-services-hero-heading"
              data={content}
            />
          </div>

          <MotionWrapper variant="slideRight" delay={0.1} className="lg:col-span-5">
            <DoctorVisuals
              pathId="denial-management"
              imageSrc={content.imageSrc || "/doctor-hero.png"}
              imageAlt={content.imageAlt || "Healthcare professional providing denial management services"}
              spinningText={
                content.spinningText ||
                defaultDenialManagementServicesData.hero.spinningText
              }
              widgets={[
                { icon: Settings, positionClassName: "top-[18%] right-[-3%]", delay: 0.25 },
                { icon: BarChart3, positionClassName: "top-[48%] left-[-8%]", delay: 0.35 },
              ]}
            />
          </MotionWrapper>
        </div>

        <div className="mt-12 space-y-8 sm:mt-14 lg:mt-16">
          <DenialManagementServicesHeroFeatures data={content} />
          <DenialManagementServicesHeroForm data={content} />
        </div>
      </div>
    </section>
  );
}
