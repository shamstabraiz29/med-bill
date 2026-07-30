"use client";

import React from "react";
import AppImage from "@/components/ui/AppImage";
import Link from "next/link";
import { ArrowRight, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import IconWrapper from "@/components/common/IconWrapper";
import MotionWrapper from "@/components/ui/MotionWrapper";

export interface BillingConsultancyFeatureBlockProps {
  imageSrc: string;
  imageAlt: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  className?: string;
}

export default function BillingConsultancyFeatureBlock({
  imageSrc,
  imageAlt,
  description,
  ctaLabel,
  ctaHref,
  className,
}: BillingConsultancyFeatureBlockProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12",
        className
      )}
    >
      <MotionWrapper variant="slideRight" className="order-2 lg:order-1">
        <div className="space-y-5 text-left sm:space-y-6">
          <h3 className="text-2xl font-bold leading-[1.2] tracking-[-0.02em] text-[#0F172A] sm:text-3xl lg:text-4xl">
            Get a Dedicated Billing Consultant For Your Clinic&apos;s{" "}
            <span className="font-bold text-blue-600">
              Revenue Cycle Management
            </span>
          </h3>

          <p className="max-w-xl text-xs leading-[1.6] text-[#475569] sm:text-[14px]">
            {description}
          </p>

          <div className="pt-1">
            <Button
              nativeButton={false}
              render={<Link href={ctaHref} />}
              size="lg"
              className="h-11 rounded-xl px-6 text-sm font-semibold"
            >
              {ctaLabel}
              <ArrowRight className="ml-1 size-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </MotionWrapper>

      <MotionWrapper variant="slideLeft" className="order-1 lg:order-2">
        <Card
          glass={false}
          hoverEffect="none"
          className="overflow-hidden rounded-2xl border border-border bg-card shadow-none sm:rounded-2xl"
        >
          <CardContent className="relative p-0">
            <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[5/4]">
              <AppImage
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl border border-border bg-card/95 px-4 py-3 backdrop-blur-sm sm:right-auto sm:max-w-xs">
              <IconWrapper icon={Headphones} size="sm" variant="surface" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#1D4ED8]">
                  Dedicated Support
                </p>
                <p className="text-xs font-semibold leading-snug text-foreground">
                  A billing consultant assigned to your clinic
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </MotionWrapper>
    </div>
  );
}
