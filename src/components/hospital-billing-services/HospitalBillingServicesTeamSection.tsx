"use client";

import React from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import HospitalBillingServicesTeamMemberProfile from "./HospitalBillingServicesTeamMemberProfile";
import {
  hospitalContainerClassName,
  hospitalSectionClassName,
} from "./hospitalSectionLayout";
import { defaultHospitalBillingServicesData } from "@/lib/defaults/hospitalBillingServices";
import type { HospitalBillingTeamSectionData } from "@/payload/types/hospitalBillingServices";

interface HospitalBillingServicesTeamSectionProps {
  data?: HospitalBillingTeamSectionData;
}

export default function HospitalBillingServicesTeamSection({
  data,
}: HospitalBillingServicesTeamSectionProps) {
  const content = data || defaultHospitalBillingServicesData.team;
  const members =
    content.members && content.members.length > 0
      ? content.members
      : defaultHospitalBillingServicesData.team.members;

  return (
    <section
      className={hospitalSectionClassName}
      aria-labelledby="hospital-billing-services-team-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[32px_32px] opacity-10"
      />

      <div className={`${hospitalContainerClassName} relative z-10`}>
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-10 max-w-4xl sm:mb-14"
          title={
            <span id="hospital-billing-services-team-heading">
              {content.titlePlain}
              <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
            </span>
          }
          description={content.description}
        />

        <div className="space-y-14 sm:space-y-16 lg:space-y-20">
          {members.map((member, idx) => {
            const imageFirst = idx % 2 === 1;

            return (
              <MotionWrapper
                key={member.name || idx}
                variant={imageFirst ? "slideRight" : "slideLeft"}
              >
                <HospitalBillingServicesTeamMemberProfile
                  member={member}
                  imageFirst={imageFirst}
                  accentClassName={idx % 2 === 0 ? "bg-[#1D4ED8]" : "bg-[#60A5FA]"}
                  quoteClassName={idx % 2 === 0 ? "text-[#1D4ED8]" : "text-[#0284C7]"}
                />
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
