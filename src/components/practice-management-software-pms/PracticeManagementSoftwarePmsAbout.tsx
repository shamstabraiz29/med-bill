"use client";

import React from "react";
import AppImage from "@/components/ui/AppImage";
import Link from "next/link";
import { ArrowRight, LayoutGrid } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { pmsContainerClassName, pmsSectionAltClassName } from "./pmsSectionLayout";
import { defaultPracticeManagementSoftwarePmsData } from "@/lib/defaults/practiceManagementSoftwarePms";
import type { PmsAboutData } from "@/payload/types/practiceManagementSoftwarePms";

interface PracticeManagementSoftwarePmsAboutProps {
  data?: PmsAboutData;
}

export default function PracticeManagementSoftwarePmsAbout({ data }: PracticeManagementSoftwarePmsAboutProps) {
  const content = data || defaultPracticeManagementSoftwarePmsData.about;

  return (
    <section
      id="about-pms"
      className={pmsSectionAltClassName}
      aria-labelledby="practice-management-software-pms-about-heading"
    >
      <div className={pmsContainerClassName}>
        <MotionWrapper variant="fadeUp">
          <Card
            glass={false}
            hoverEffect="none"
            className="overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-sm transition-all duration-300 hover:border-[#1D4ED8]/20 hover:shadow-lg hover:shadow-blue-900/5 sm:rounded-2xl"
          >
            <CardContent className="grid grid-cols-1 p-0 lg:grid-cols-2 lg:items-stretch">
              <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-[420px]">
                <AppImage
                  src={content.imageSrc}
                fallbackSrc="/rcm-dashboard-laptop1.png"
                  alt={content.imageAlt || "Medical professionals reviewing practice management dashboards on a monitor"}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F172A]/15 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>

              <div className="flex flex-col justify-center gap-5 p-6 sm:gap-6 sm:p-8 lg:p-10">
                <IconWrapper icon={LayoutGrid} size="lg" variant="surface" />

                <h2
                  id="practice-management-software-pms-about-heading"
                  className="text-2xl font-bold leading-[1.2] tracking-[-0.02em] text-[#0F172A] sm:text-3xl"
                >
                  {content.title}
                </h2>

                <p className="text-xs leading-[1.65] text-[#475569] sm:text-sm">
                  {content.description}
                </p>

                <div className="pt-1">
                  <Link
                    href={content.buttonLink || "/schedule-a-demo"}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D4ED8] transition-colors hover:text-[#1E3A8A]"
                  >
                    {content.buttonText}
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </MotionWrapper>
      </div>
    </section>
  );
}
