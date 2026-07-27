"use client";

import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import BillingOfferCard from "./BillingOfferCard";
import { getIcon } from "@/lib/icons";
import { defaultMedicalBillingData } from "@/lib/defaults/medicalBilling";

interface MedicalBillingWhatWeOfferProps {
  data?: typeof defaultMedicalBillingData.whatWeOffer;
}

export default function MedicalBillingWhatWeOffer({ data }: MedicalBillingWhatWeOfferProps) {
  const offerData = data || defaultMedicalBillingData.whatWeOffer;

  return (
    <section
      className="w-full bg-transparent py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-center"
      aria-labelledby="what-we-offer-heading"
    >
      <div className="w-full max-w-7xl">
        <SectionHeader
          badge={offerData.badge}
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="what-we-offer-heading">
              {offerData.titlePlain}{" "}
              <span className="font-bold text-blue-600">{offerData.titleHighlight}</span>
            </span>
          }
          description={
            <div className="space-y-4">
              <p>{offerData.description1}</p>
              <p>{offerData.description2}</p>
            </div>
          }
          className="mb-12 mx-auto max-w-4xl sm:mb-16"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 w-full"
        >
          {offerData.items.map((offer, idx) => {
            const Icon = getIcon(offer.iconName);
            const itemStrings = offer.items.map((item) => item.label);
            return (
              <MotionWrapper key={idx} variant="staggerItem" className="h-full">
                <BillingOfferCard
                  icon={Icon}
                  title={offer.title}
                  items={itemStrings}
                  className="h-full"
                />
              </MotionWrapper>
            );
          })}
        </MotionWrapper>
      </div>
    </section>
  );
}
