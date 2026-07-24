"use client";

import React from "react";
import { FileSearch, LucideIcon, ScanSearch, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";

interface AuditServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const AUDIT_SERVICES: AuditServiceItem[] = [
  {
    icon: ScanSearch,
    title: "Code Audits",
    description:
      "Trust our coding auditors to validate your records, maximize revenue, and keep you compliant with regulations. Our experts find issues, fix errors, and optimize your codes.",
  },
  {
    icon: FileSearch,
    title: "Documentation Review",
    description:
      "Documentation holds the keys to coding. Our review unlocks accuracy, capturing every revenue dollar while averting audit risks.",
  },
  {
    icon: Users,
    title: "Coding Consultancy",
    description:
      "Our coding consultants dive deep into patient charts to apply the right codes, enabling proper reimbursement and a clear view of population health.",
  },
];

export default function MedicalCodingAuditsConsultancy() {
  return (
    <section
      className="relative w-full overflow-hidden bg-transparent py-12 sm:py-16 lg:py-20"
      aria-labelledby="medical-coding-audits-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Audits & Consultancy"
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="medical-coding-audits-heading">
              BellMedEx{" "}
              <span className="font-bold text-blue-600">
                Coding Audits &amp; Consultancy Solutions
              </span>
            </span>
          }
          description={
            <>
              <p>
                For healthcare leaders seeking truth in numbers, our medical coding
                services deliver. We scrutinize records to derive meaning, value, and
                direction. The benefits are manifold: reduced costs, optimized
                reimbursement, and evidence-based care. What results is sustainable
                growth and mission fulfillment.
              </p>
              <p className="mt-4 font-bold text-[#0F172A]">
                Our consultancy services help prevent lost revenue from coding errors.
              </p>
            </>
          }
          className="mb-12 max-w-4xl sm:mb-16"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.12}
          className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {AUDIT_SERVICES.map((service) => {
            const Icon = service.icon;

            return (
              <MotionWrapper key={service.title} variant="staggerItem" className="h-full">
                <Card className="group relative flex h-full flex-col rounded-2xl border border-[#E2E6EC] bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5">
                  <CardContent className="flex flex-1 flex-col items-start p-0 text-left">
                    <div className="mb-6 text-[#1D4ED8] transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-8 w-8 stroke-[1.25]" aria-hidden="true" />
                    </div>

                    <h3 className="mb-3 text-base font-bold leading-snug tracking-[-0.02em] text-[#0F172A]">
                      {service.title}
                    </h3>

                    <p className="text-xs leading-[1.6] text-[#475569] sm:text-[13px]">
                      {service.description}
                    </p>
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
