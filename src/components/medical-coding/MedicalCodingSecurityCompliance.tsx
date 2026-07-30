"use client";

import React from "react";
import AppImage from "@/components/ui/AppImage";
import { ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionBadge from "@/components/ui/SectionBadge";
import MotionWrapper from "@/components/ui/MotionWrapper";
import IconWrapper from "@/components/common/IconWrapper";
import BillingConsultancyStatCard from "@/components/medical-billing/BillingConsultancyStatCard";
import { getIcon } from "@/lib/icons";
import { defaultMedicalCodingData } from "@/lib/defaults/medicalCoding";

function parseStatValue(value: string): number {
  const parsed = parseFloat(value.replace("%", "").trim());
  return Number.isFinite(parsed) ? parsed : 0;
}

interface MedicalCodingSecurityComplianceProps {
  data?: typeof defaultMedicalCodingData.securityCompliance;
}

export default function MedicalCodingSecurityCompliance({ data }: MedicalCodingSecurityComplianceProps) {
  const securityData = data || defaultMedicalCodingData.securityCompliance;

  return (
    <section
      className="relative w-full overflow-hidden border-y border-slate-200/40 bg-slate-50/30 py-16 sm:py-20 lg:py-24"
      aria-labelledby="medical-coding-by-the-numbers-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-15"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={securityData.qualityBadge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="medical-coding-by-the-numbers-heading">
              {securityData.qualityTitlePlain}
              <span className="text-primary">{securityData.qualityTitleHighlight}</span>
            </span>
          }
          className="mx-auto mb-10 max-w-4xl sm:mb-14"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 sm:mb-16 xl:grid-cols-4"
        >
          {securityData.stats.map((stat) => {
            const Icon = getIcon(stat.iconName);

            return (
              <MotionWrapper key={stat.label} variant="staggerItem" className="h-full">
                <BillingConsultancyStatCard
                  icon={Icon}
                  value={parseStatValue(stat.value)}
                  label={stat.label}
                  className="hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                />
              </MotionWrapper>
            );
          })}
        </MotionWrapper>

        <MotionWrapper variant="fadeUp">
          <Card
            glass={false}
            hoverEffect="none"
            className="overflow-hidden rounded-2xl border-border bg-card shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="border-b border-border bg-muted/40 p-8 sm:p-10 lg:border-r">
                <SectionBadge variant="blue" pulse className="w-fit">
                  {securityData.dataSecurityBadge}
                </SectionBadge>

                <h3 className="mt-4 max-w-prose text-lg font-bold leading-snug tracking-[-0.02em] text-foreground sm:text-xl">
                  {securityData.dataSecurityTitlePlain}
                  <span className="text-primary">{securityData.dataSecurityTitleHighlight}</span>
                </h3>

                <p className="mt-4 max-w-prose text-sm leading-[1.65] text-muted-foreground">
                  {securityData.dataSecurityDescription}
                </p>
              </div>

              <div className="relative min-h-70 border-b border-border sm:min-h-80 lg:min-h-full">
                <AppImage
                  src="/consultants-laptop.png"
                  alt="BellMedEx secure medical coding environment protecting patient data"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-linear-to-tr from-primary/20 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>

              <div className="flex min-h-70 flex-col items-center justify-center gap-8 border-b border-border bg-muted/40 p-8 sm:min-h-80 sm:p-10 lg:border-r lg:border-b-0">
                <div className="flex flex-col items-center gap-3">
                  <IconWrapper icon={ShieldCheck} size="lg" variant="surface" />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    HIPAA Compliant
                  </p>
                </div>

                <div className="grid w-full max-w-lg grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                  {securityData.complianceBadges.map((badge) => (
                    <div
                      key={badge.label}
                      className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-4 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md hover:shadow-primary/5"
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

              <div className="flex flex-col justify-center bg-muted/40 p-8 sm:p-10">
                <SectionBadge variant="blue" pulse className="w-fit">
                  {securityData.complianceBadge}
                </SectionBadge>

                <h3 className="mt-4 max-w-prose text-lg font-bold leading-snug tracking-[-0.02em] text-foreground sm:text-xl">
                  {securityData.complianceTitlePlain}
                  <span className="text-primary">{securityData.complianceTitleHighlight}</span>
                </h3>

                <p className="mt-4 max-w-prose text-sm leading-[1.65] text-muted-foreground">
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
