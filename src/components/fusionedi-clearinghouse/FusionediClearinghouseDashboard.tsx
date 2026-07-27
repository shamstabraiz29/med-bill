"use client";

import React from "react";
import Image from "next/image";
import MotionWrapper from "@/components/ui/MotionWrapper";
import {
  fusionediContainerClassName,
  fusionediSectionAltClassName,
} from "./fusionediSectionLayout";

import { FusionediDashboardData } from "@/payload/types/fusionediClearinghouse";
import { defaultFusionediClearinghouseData } from "@/lib/defaults/fusionediClearinghouse";

interface FusionediClearinghouseDashboardProps {
  data?: FusionediDashboardData;
}

export default function FusionediClearinghouseDashboard({ data }: FusionediClearinghouseDashboardProps) {
  const content = data || defaultFusionediClearinghouseData.dashboard;

  return (
    <section
      className={`${fusionediSectionAltClassName} pt-0 sm:pt-0`}
      aria-labelledby="fusionedi-clearinghouse-dashboard-heading"
    >
      <div className={fusionediContainerClassName}>
        <MotionWrapper variant="scaleUp">
          <div className="group overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-lg shadow-blue-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-xl hover:shadow-blue-900/10 sm:rounded-3xl">
            <h2 id="fusionedi-clearinghouse-dashboard-heading" className="sr-only">
              FusionEDI clearinghouse dashboard overview
            </h2>

            <Image
              src={content.imageSrc || "/fusionedi-dashboard.png"}
              alt={content.imageAlt || "FusionEDI clearinghouse dashboard"}
              width={1024}
              height={774}
              priority
              className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.01]"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
