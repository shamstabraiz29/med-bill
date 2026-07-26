"use client";

import React from "react";
import {
  Activity,
  Baby,
  Bone,
  Brain,
  Cpu,
  Eye,
  FlaskConical,
  Handshake,
  HeartPulse,
  LucideIcon,
  ShieldAlert,
  Stethoscope,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { ehrContainerClassName, ehrSectionClassName } from "./ehrSectionLayout";

interface SpecialtyIcon {
  label: string;
  icon: LucideIcon;
}

const SPECIALTY_ICONS: SpecialtyIcon[] = [
  { label: "Family Medicine", icon: Users },
  { label: "Cardiology", icon: HeartPulse },
  { label: "Emergency Medicine", icon: ShieldAlert },
  { label: "Orthopedics", icon: Bone },
  { label: "Behavioral Health", icon: Brain },
  { label: "Gastroenterology", icon: Activity },
  { label: "Patient Care", icon: Handshake },
  { label: "Ophthalmology", icon: Eye },
  { label: "Primary Care", icon: Stethoscope },
  { label: "Pediatrics", icon: Baby },
  { label: "Neurology", icon: Cpu },
  { label: "Laboratory", icon: FlaskConical },
];

export default function ElectronicHealthRecordsEhrSpecialties() {
  return (
    <section
      className={ehrSectionClassName}
      aria-labelledby="electronic-health-records-ehr-specialties-heading"
    >
      <div className={ehrContainerClassName}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <MotionWrapper variant="slideRight" className="flex flex-col justify-center">
            <h2
              id="electronic-health-records-ehr-specialties-heading"
              className="text-xl font-bold leading-[1.2] tracking-[-0.02em] text-[#0F172A] sm:text-2xl lg:text-3xl xl:text-4xl"
            >
              Not just a band-aid solution, but a{" "}
              <span className="text-blue-600">cure for every specialty.</span>
            </h2>
          </MotionWrapper>

          <MotionWrapper variant="slideLeft">
            <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-6 sm:gap-3">
              {SPECIALTY_ICONS.map((specialty, index) => (
                <div
                  key={specialty.label}
                  title={specialty.label}
                  className={cn(
                    "group flex aspect-square items-center justify-center rounded-xl border border-[#E2E6EC] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#1D4ED8]/30 hover:shadow-lg hover:shadow-blue-900/5",
                    index >= 6 && "opacity-30 hover:opacity-100"
                  )}
                >
                  <IconWrapper
                    icon={specialty.icon}
                    size="sm"
                    variant="surface"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>

            <p className="mt-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#475569] sm:mt-5 sm:text-xs">
              And many other specialties
            </p>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
