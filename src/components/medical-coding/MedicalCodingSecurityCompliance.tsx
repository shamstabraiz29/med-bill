"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionBadge from "@/components/ui/SectionBadge";
import MotionWrapper from "@/components/ui/MotionWrapper";
import IconWrapper from "@/components/common/IconWrapper";
import { getIcon } from "@/lib/icons";
import { defaultMedicalCodingData } from "@/lib/defaults/medicalCoding";

interface MedicalCodingSecurityComplianceProps {
  data?: typeof defaultMedicalCodingData.securityCompliance;
}

export default function MedicalCodingSecurityCompliance({ data }: MedicalCodingSecurityComplianceProps) {
  const securityData = data || defaultMedicalCodingData.securityCompliance;

  return (
    <section
      className="relative w-full overflow-hidden bg-transparent py-16 sm:py-20 lg:py-24"
      aria-labelledby="medical-coding-by-the-numbers-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Coding By The Numbers Header & Stats */}
        <SectionHeader
          badge={securityData.qualityBadge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="medical-coding-by-the-numbers-heading">
              {securityData.qualityTitlePlain}{" "}
              <span className="font-bold text-blue-600">{securityData.qualityTitleHighlight}</span>
            </span>
          }
          className="mx-auto mb-8 max-w-4xl sm:mb-12"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="mx-auto mb-10 grid max-w-5xl grid-cols-2 gap-8 divide-y divide-border sm:mb-12 md:grid-cols-4 md:gap-0 md:divide-x md:divide-y-0"
        >
          {securityData.stats.map((stat) => {
            const Icon = getIcon(stat.iconName);

            return (
              <MotionWrapper
                key={stat.label}
                variant="staggerItem"
                className="group flex flex-col items-center py-6 text-center md:items-center md:py-2 md:px-6 lg:px-8 first:pt-0 md:first:pl-0 last:pb-0 md:last:pr-0"
              >
                <div className="mb-4 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6 stroke-[1.25]" aria-hidden="true" />
                </div>

                <div className="text-3xl font-extrabold leading-none tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
                  {stat.value}
                </div>

                <span className="mt-3 max-w-[220px] text-sm font-bold uppercase tracking-wide text-foreground">
                  {stat.label}
                </span>
              </MotionWrapper>
            );
          })}
        </MotionWrapper>

        {/* Security & Compliance Card Grid */}
        <MotionWrapper variant="fadeUp">
          <Card
            glass={false}
            hoverEffect="none"
            className="overflow-hidden rounded-2xl border-border sm:rounded-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="border-b border-border lg:border-r">
                <div className="flex flex-col items-start justify-center bg-muted p-8 sm:p-10">
                  <SectionBadge variant="blue" pulse className="w-fit">
                    {securityData.dataSecurityBadge}
                  </SectionBadge>

                  <h3 className="mt-4 w-fit max-w-prose text-base font-bold leading-snug tracking-[-0.02em] text-foreground sm:text-lg">
                    {securityData.dataSecurityTitlePlain}{" "}
                    <span className="font-bold text-blue-600">{securityData.dataSecurityTitleHighlight}</span>
                  </h3>

                  <p className="mt-3 max-w-prose text-xs leading-[1.6] text-muted-foreground sm:text-[13px]">
                    {securityData.dataSecurityDescription}
                  </p>
                </div>
              </div>

              <div className="border-b border-border">
                <div className="relative min-h-[280px] bg-muted sm:min-h-[320px]">
                  <Image
                    src="/consultants-laptop.png"
                    alt="BellMedEx secure medical coding environment protecting patient data"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="border-b border-border lg:border-b-0 lg:border-r">
                <div className="flex min-h-[280px] flex-col items-center justify-center gap-8 bg-muted p-8 sm:min-h-[320px] sm:p-10">
                  <div className="flex flex-col items-center gap-3">
                    <IconWrapper icon={ShieldCheck} size="lg" variant="surface" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
                      HIPAA Compliant
                    </p>
                  </div>

                  <div className="grid w-full max-w-md grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                    {securityData.complianceBadges.map((badge) => (
                      <div
                        key={badge.label}
                        className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-4 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5"
                      >
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                          {badge.label}
                        </span>
                        <span className="mt-1.5 text-xs font-semibold leading-tight text-foreground">
                          {badge.sublabel}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start justify-center bg-muted p-8 sm:p-10">
                <SectionBadge variant="blue" pulse className="w-fit">
                  {securityData.complianceBadge}
                </SectionBadge>

                <h3 className="mt-4 w-fit max-w-prose text-base font-bold leading-snug tracking-[-0.02em] text-foreground sm:text-lg">
                  {securityData.complianceTitlePlain}{" "}
                  <span className="font-bold text-blue-600">{securityData.complianceTitleHighlight}</span>
                </h3>

                <p className="mt-3 max-w-prose text-xs leading-[1.6] text-muted-foreground sm:text-[13px]">
                  {securityData.complianceDescription}
                </p>
              </div>
            </div>
          </Card>
        </MotionWrapper>
      </div>
    </section>
  );
}
