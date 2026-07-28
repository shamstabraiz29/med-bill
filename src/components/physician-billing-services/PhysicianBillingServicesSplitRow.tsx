"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import { physicianContainerClassName } from "./physicianSectionLayout";

export interface PhysicianBillingServicesSplitRowProps {
  badge?: string;
  heading: React.ReactNode;
  headingId?: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLink?: { label: string; href: string };
  imagePosition?: "left" | "right";
  sectionClassName?: string;
}

export default function PhysicianBillingServicesSplitRow({
  badge,
  heading,
  headingId,
  paragraphs,
  imageSrc,
  imageAlt,
  ctaLabel,
  ctaHref,
  secondaryLink,
  imagePosition = "left",
  sectionClassName,
}: PhysicianBillingServicesSplitRowProps) {
  const imageFirst = imagePosition === "left";

  const imageBlock = (
    <MotionWrapper
      variant={imageFirst ? "slideLeft" : "slideRight"}
      className="w-full lg:col-span-6"
    >
      <div className="group relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-[0_8px_30px_rgba(29,78,216,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1D4ED8]/30 hover:shadow-xl hover:shadow-blue-900/10 sm:aspect-16/11">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </MotionWrapper>
  );

  const contentBlock = (
    <MotionWrapper
      variant={imageFirst ? "slideRight" : "slideLeft"}
      className="flex flex-col items-start space-y-6 text-left lg:col-span-6"
    >
      <SectionHeader
        badge={badge}
        badgeVariant="indigo"
        badgePulse
        align="left"
        className="max-w-2xl"
        title={<span id={headingId}>{heading}</span>}
      />

      <div className="max-w-2xl space-y-4">
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="text-sm leading-[1.65] text-[#475569] sm:text-base"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <AppButton href={ctaHref} variant="primary" size="lg" showArrow>
          {ctaLabel}
        </AppButton>

        {secondaryLink && (
          <Link
            href={secondaryLink.href}
            className="text-sm font-semibold text-[#1D4ED8] underline-offset-4 transition-colors hover:text-[#1E3A8A] hover:underline"
          >
            {secondaryLink.label}
          </Link>
        )}
      </div>
    </MotionWrapper>
  );

  return (
    <section className={cn(sectionClassName)} aria-labelledby={headingId}>
      <div className={physicianContainerClassName}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {imageFirst ? (
            <>
              {imageBlock}
              {contentBlock}
            </>
          ) : (
            <>
              {contentBlock}
              {imageBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
