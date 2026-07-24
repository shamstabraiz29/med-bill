"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import AppButton from "@/components/ui/AppButton";
import SectionBadge from "@/components/ui/SectionBadge";

export interface MedicalBillingAuditFreeAuditCardProps {
  className?: string;
}

export default function MedicalBillingAuditFreeAuditCard({
  className,
}: MedicalBillingAuditFreeAuditCardProps) {
  return (
    <Card
      glass={false}
      hoverEffect="both"
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A] text-white shadow-[0_4px_24px_rgba(29,78,216,0.08)] transition-all duration-300 hover:border-[#1D4ED8]/40 hover:shadow-lg sm:rounded-3xl",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#1D4ED8]/15 blur-2xl"
        aria-hidden="true"
      />

      <CardContent className="relative flex h-full flex-col p-5 sm:p-6">
        <SectionBadge variant="dark" pulse={false} className="mb-4 w-fit self-start">
          Free Audit
        </SectionBadge>

        <h3 className="mb-3 text-sm font-bold leading-snug tracking-[-0.02em] sm:text-base">
          Missing Money?{" "}
          <span className="font-bold text-amber-300">We&apos;ll Find It.</span>
        </h3>

        <p className="mb-6 flex-1 text-xs leading-[1.65] text-blue-200 sm:text-[13px]">
          Our specialized audits dig deep into your claims data and billing records to
          recover improper payments and missed revenue.
        </p>

        <AppButton
          href="#claim-free-medical-audit"
          variant="secondary-dark"
          size="md"
          showArrow
          className="w-full"
        >
          Get Started for FREE
        </AppButton>
      </CardContent>
    </Card>
  );
}
