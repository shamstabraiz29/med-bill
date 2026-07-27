"use client";

import React from "react";
import {
  BarChart3,
  ClipboardCheck,
  FileText,
  ListChecks,
  LucideIcon,
  MessageSquare,
  Pill,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import {
  fusionediCardClassName,
  fusionediContainerClassName,
  fusionediSectionAltClassName,
} from "./fusionediSectionLayout";

interface EdiTransfer {
  title: string;
  description: string;
  icon: LucideIcon;
  side: "left" | "right";
}

const EDI_TRANSFERS: EdiTransfer[] = [
  {
    title: "Retail Pharmacy Claim",
    description:
      "Submit and Process retail pharmacy claims electronically. This will save you time and money, and reduce errors and rejections.",
    icon: Pill,
    side: "left",
  },
  {
    title: "EDI 837",
    description:
      "Submit and process healthcare claims and encounters electronically. This will improve your cash flow, compliance, and accuracy.",
    icon: ShieldCheck,
    side: "right",
  },
  {
    title: "EDI 835",
    description:
      "Receive and process payments and remittance advice electronically. This will help you reconcile your accounts, track revenue, and manage denials.",
    icon: Wallet,
    side: "left",
  },
  {
    title: "EDI 834",
    description:
      "Enroll and manage members in a healthcare benefit plan electronically. This will streamline your enrollment process and reduce administrative costs.",
    icon: BarChart3,
    side: "right",
  },
  {
    title: "EDI 270",
    description:
      "Inquire and verify eligibility and benefits of subscriber electronically. This helps you avoid unnecessary claims denials and verify coverage details.",
    icon: FileText,
    side: "left",
  },
  {
    title: "EDI 271",
    description:
      "Receive and process the responses to inquiries about the eligibility and benefits of subscriber electronically. This will help to understand the plan limitations.",
    icon: ListChecks,
    side: "right",
  },
  {
    title: "EDI 277",
    description:
      "Receive and process the notifications about status of previously submitted EDI 837 claim electronically. This help you monitor the progress of your claims.",
    icon: MessageSquare,
    side: "left",
  },
  {
    title: "EDI 278",
    description:
      "Request and receive authorization for healthcare service electronically. This helps to ensure compliance with plan policies, and avoid claim rejections.",
    icon: ClipboardCheck,
    side: "right",
  },
];

function EdiTransferCard({ transfer }: { transfer: EdiTransfer }) {
  const isLeft = transfer.side === "left";

  return (
    <div
      className={cn(
        fusionediCardClassName,
        "h-full text-left",
        isLeft ? "lg:ml-auto lg:max-w-md lg:text-right" : "lg:mr-auto lg:max-w-md"
      )}
    >
      <h3 className="text-base font-bold tracking-[-0.02em] text-[#0F172A] sm:text-lg">
        {transfer.title}
      </h3>
      <p className="mt-2 text-xs leading-[1.65] text-[#475569] sm:text-sm">
        {transfer.description}
      </p>
    </div>
  );
}

function EdiSpineNode({
  icon,
  isFirst,
  isLast,
}: {
  icon: LucideIcon;
  isFirst: boolean;
  isLast: boolean;
}) {
  return (
    <div className="relative flex w-11 shrink-0 flex-col items-center self-stretch sm:w-12">
      {!isFirst && (
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-0 h-[calc(50%-1.375rem)] w-px -translate-x-1/2 bg-[#1D4ED8]/20"
        />
      )}

      <div className="relative z-10 py-1">
        <IconWrapper icon={icon} size="md" variant="primary" />
      </div>

      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-[calc(50%+1.375rem)] bottom-0 w-px -translate-x-1/2 bg-[#1D4ED8]/20"
        />
      )}
    </div>
  );
}

function EdiTransferRow({
  transfer,
  index,
  isLast,
}: {
  transfer: EdiTransfer;
  index: number;
  isLast: boolean;
}) {
  const isLeft = transfer.side === "left";

  return (
    <MotionWrapper variant="staggerItem" className="w-full">
      <div className="lg:hidden">
        <div className="mb-4 flex justify-center">
          <IconWrapper icon={transfer.icon} size="md" variant="primary" />
        </div>
        <EdiTransferCard transfer={transfer} />
        {!isLast && (
          <div className="mx-auto my-5 h-8 w-px bg-[#1D4ED8]/20" aria-hidden="true" />
        )}
      </div>

      <div
        className={cn(
          "hidden w-full lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center lg:gap-8 xl:gap-12",
          !isLast && "lg:pb-4"
        )}
      >
        <div className="min-w-0">
          {isLeft ? <EdiTransferCard transfer={transfer} /> : null}
        </div>

        <EdiSpineNode icon={transfer.icon} isFirst={index === 0} isLast={isLast} />

        <div className="min-w-0">
          {!isLeft ? <EdiTransferCard transfer={transfer} /> : null}
        </div>
      </div>
    </MotionWrapper>
  );
}

import { FusionediEdiTransfersData } from "@/payload/types/fusionediClearinghouse";
import { defaultFusionediClearinghouseData } from "@/lib/defaults/fusionediClearinghouse";

const iconMap: Record<string, any> = {
  Pill,
  ShieldCheck,
  Wallet,
  BarChart3,
  FileText,
  ListChecks,
  MessageSquare,
  ClipboardCheck,
};

interface FusionediClearinghouseEdiTransfersProps {
  data?: FusionediEdiTransfersData;
}

export default function FusionediClearinghouseEdiTransfers({ data }: FusionediClearinghouseEdiTransfersProps) {
  const content = data || defaultFusionediClearinghouseData.ediTransfers;
  const transfersList = content.transfers && content.transfers.length > 0 ? content.transfers : defaultFusionediClearinghouseData.ediTransfers.transfers;

  return (
    <section
      className={fusionediSectionAltClassName}
      aria-labelledby="fusionedi-clearinghouse-edi-transfers-heading"
    >
      <div className={fusionediContainerClassName}>
        <SectionHeader
          badge={content.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          className="mx-auto mb-12 max-w-4xl space-y-4 sm:mb-16"
          title={
            <span id="fusionedi-clearinghouse-edi-transfers-heading">
              {content.titlePlain}{" "}
              <span className="text-blue-600">{content.titleHighlight}</span>
              {content.titleSuffix}
            </span>
          }
          description={content.description}
        />

        <MotionWrapper variant="stagger" staggerDelay={0.08} className="mx-auto max-w-5xl">
          <div role="list" className="relative">
            {transfersList.map((transfer, index) => {
              const IconComponent = (transfer.iconName && iconMap[transfer.iconName]) || FileText;
              return (
                <div key={transfer.title || index} role="listitem">
                  <EdiTransferRow
                    transfer={{
                      title: transfer.title,
                      description: transfer.description,
                      icon: IconComponent,
                      side: (transfer.side as "left" | "right") || (index % 2 === 0 ? "left" : "right"),
                    }}
                    index={index}
                    isLast={index === transfersList.length - 1}
                  />
                </div>
              );
            })}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
