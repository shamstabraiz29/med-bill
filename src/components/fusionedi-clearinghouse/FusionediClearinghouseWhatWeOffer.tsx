"use client";

import React from "react";
import {
  CircleDollarSign,
  ClipboardCheck,
  FileSearch,
  LucideIcon,
  Rocket,
  ScanSearch,
  UserCheck,
} from "lucide-react";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import {
  fusionediCardClassName,
  fusionediContainerClassName,
  fusionediSectionClassName,
} from "./fusionediSectionLayout";

interface FusionediOffer {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FUSIONEDI_OFFERS: FusionediOffer[] = [
  {
    icon: ScanSearch,
    title: "Claim Polisher",
    description:
      "Cleanses and polishes claim data before sending it to payers, dodging penalties and denials.",
  },
  {
    icon: ClipboardCheck,
    title: "Claim Auditor",
    description:
      "Gives feedback on the quality of claims, making sure all required fields are filled and no cracks are found.",
  },
  {
    icon: Rocket,
    title: "Claim Accelerator",
    description:
      "Accelerates the claim processing cycle, resulting in faster payments and smoother cash flow for the provider.",
  },
  {
    icon: CircleDollarSign,
    title: "Payment Automator",
    description:
      "Enables automatic posting of payments to patient accounts, minimizing errors and easing reconciliation.",
  },
  {
    icon: UserCheck,
    title: "Eligibility Checker",
    description:
      "Verifies the patient's insurance coverage before the service is rendered, avoiding eligibility-related rejections.",
  },
  {
    icon: FileSearch,
    title: "Billing Analyzer",
    description:
      "Offers valuable insights into billing trends, patterns, issues, and opportunities, supporting wise decision making.",
  },
];

function FusionediOfferCard({ offer }: { offer: FusionediOffer }) {
  return (
    <div className={cn(fusionediCardClassName, "h-full")}>
      <div className="flex items-start gap-4 sm:gap-5">
        <IconWrapper
          icon={offer.icon}
          size="md"
          variant="surface"
          className="shrink-0 transition-transform duration-300 group-hover:scale-110"
        />

        <div className="min-w-0 text-left">
          <h3 className="text-base font-bold tracking-[-0.02em] text-[#0F172A] sm:text-lg">
            {offer.title}
          </h3>
          <p className="mt-2 text-xs leading-[1.65] text-[#475569] sm:text-sm">
            {offer.description}
          </p>
        </div>
      </div>
    </div>
  );
}

import { FusionediWhatWeOfferData } from "@/payload/types/fusionediClearinghouse";
import { defaultFusionediClearinghouseData } from "@/lib/defaults/fusionediClearinghouse";

const iconMap: Record<string, any> = {
  ScanSearch,
  ClipboardCheck,
  Rocket,
  CircleDollarSign,
  UserCheck,
  FileSearch,
};

interface FusionediClearinghouseWhatWeOfferProps {
  data?: FusionediWhatWeOfferData;
}

export default function FusionediClearinghouseWhatWeOffer({ data }: FusionediClearinghouseWhatWeOfferProps) {
  const content = data || defaultFusionediClearinghouseData.whatWeOffer;
  const offersList = content.offers && content.offers.length > 0 ? content.offers : defaultFusionediClearinghouseData.whatWeOffer.offers;

  return (
    <section
      className={fusionediSectionClassName}
      aria-labelledby="fusionedi-clearinghouse-what-we-offer-heading"
    >
      <div className={fusionediContainerClassName}>
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-4xl space-y-4 sm:mb-16"
          title={
            <span id="fusionedi-clearinghouse-what-we-offer-heading">
              {content.titlePlain}{" "}
              <span className="text-blue-600">{content.titleHighlight}</span>
            </span>
          }
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {offersList.map((offer, idx) => {
            const IconComponent = (offer.iconName && iconMap[offer.iconName]) || ScanSearch;
            return (
              <MotionWrapper key={offer.title || idx} variant="staggerItem" className="h-full">
                <FusionediOfferCard
                  offer={{
                    icon: IconComponent,
                    title: offer.title,
                    description: offer.description,
                  }}
                />
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
