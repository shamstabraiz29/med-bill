"use client";

import React from "react";
import {
  BarChart3,
  FileCheck,
  LucideIcon,
  Search,
  Stethoscope,
  Target,
  Users,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionWrapper from "@/components/ui/MotionWrapper";
import BillingOfferCard from "./BillingOfferCard";

interface OfferItem {
  icon: LucideIcon;
  title: string;
  items: string[];
}

const OFFER_ITEMS: OfferItem[] = [
  {
    icon: BarChart3,
    title: "Detailed analysis and bill reporting",
    items: [
      "Reporting on RVU to calculate the value of medical services",
      "Clearing up hidden glitches for better revenue collection",
      "Ensuring on-demand availability of latest billing reports",
      "Providing detailed billing reports",
    ],
  },
  {
    icon: FileCheck,
    title: "Proper service level agreements",
    items: [
      "Dealing with payment posting for healthy cash flow",
      "Doing charge entry for service payments",
      "Reviewing denials with quick clear-ups",
      "Creating specialty-specific SLA reports",
      "Tracking accounts receivable aging",
    ],
  },
  {
    icon: Search,
    title: "Revenue leakage fix",
    items: [
      "Identifying and resolving errors",
      "Coding medical records",
      "Benchmarking the coding",
      "Auditing medical records",
    ],
  },
  {
    icon: Users,
    title: "Best billing associates",
    items: [
      "Modern technology for fast claim processing",
      "Medical billing with 24/7 physician support",
      "Ensuring correct patient billing",
    ],
  },
  {
    icon: Target,
    title: "Maximizing clean billing claims",
    items: [
      "Identifying trends and patterns in claims data",
      "Tracking all aspects of the claims process",
      "Using advanced data analysis tools",
      "Appealing on denied claims",
      "Keeping the provider in loop",
    ],
  },
  {
    icon: Stethoscope,
    title: "Specialty specific specialization",
    items: [
      "Staying updated on the latest changes in healthcare regulations",
      "Offering tailor-made solutions to small and medium practices",
      "Providing comprehensive services for improved bottom line",
      "Resolving RCM-related challenges for every specialty",
      "Supporting medical practitioners of all specialties",
    ],
  },
];

export default function MedicalBillingWhatWeOffer() {
  return (
    <section
      className="w-full bg-transparent py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 flex justify-center items-center"
      aria-labelledby="what-we-offer-heading"
    >
      <div className="w-full max-w-7xl">
        <SectionHeader
          badge="What Do We Offer"
          badgeVariant="indigo"
          badgePulse
          align="center"
          title={
            <span id="what-we-offer-heading">
              BellMedEx&apos;s Top Rated Billing Consultancy Group Is Here for{" "}
              <span className="font-bold text-blue-600">Medical Billing Help</span>
            </span>
          }
          description={
            <div className="space-y-4">
              <p>
                Our billing teams are more than just billers — we partner with
                physicians to deliver sustainable growth through expert revenue
                cycle guidance and hands-on billing support.
              </p>
              <p>
                Here is how BellMedEx&apos;s healthcare billing consultancy group
                is helping practices with patient billing:
              </p>
            </div>
          }
          className="mb-12 mx-auto max-w-4xl sm:mb-16"
        />

        <MotionWrapper
          variant="stagger"
          staggerDelay={0.08}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 w-full"
        >
          {OFFER_ITEMS.map((offer, idx) => (
            <MotionWrapper key={idx} variant="staggerItem" className="h-full">
              <BillingOfferCard
                icon={offer.icon}
                title={offer.title}
                items={offer.items}
                className="h-full"
              />
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </div>
    </section>
  );
}
