"use client";

import React from "react";
import { ShieldCheck, Users } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import {
  DEFAULT_PLATFORM_RATINGS,
  PlatformRatingCard,
  TrustIndicatorCard,
} from "@/components/common/PlatformRatingCards";

export default function MedicalBillingSoftwareTrustBar() {
  return (
    <MotionWrapper
      variant="stagger"
      staggerDelay={0.06}
      className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4"
      aria-label="BellMedEx medical billing software trust indicators"
    >
      <MotionWrapper variant="staggerItem" className="h-full">
        <TrustIndicatorCard
          icon={<Users className="h-4 w-4 shrink-0 text-[#1D4ED8]" aria-hidden="true" />}
          title="1500+"
          subtitle="Vetted Providers"
          badge="Network"
        />
      </MotionWrapper>

      {DEFAULT_PLATFORM_RATINGS.map((rating) => (
        <MotionWrapper key={rating.platform} variant="staggerItem" className="h-full">
          <PlatformRatingCard rating={rating} />
        </MotionWrapper>
      ))}

      <MotionWrapper variant="staggerItem" className="h-full">
        <TrustIndicatorCard
          icon={<ShieldCheck className="h-4 w-4 shrink-0 text-[#1D4ED8]" aria-hidden="true" />}
          title="Authorized Body"
          subtitle="ONC Authorized Certification Body"
          badge="ONC"
        />
      </MotionWrapper>
    </MotionWrapper>
  );
}
