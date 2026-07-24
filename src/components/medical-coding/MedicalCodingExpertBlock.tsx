"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export interface MedicalCodingExpertBlockProps {
  title: React.ReactNode;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  className?: string;
}

export default function MedicalCodingExpertBlock({
  title,
  description,
  ctaLabel,
  ctaHref,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  className,
}: MedicalCodingExpertBlockProps) {
  const isImageLeft = imagePosition === "left";

  return (
    <Card
        glass={false}
        hoverEffect="none"
        className={cn(
          "overflow-hidden rounded-2xl border border-[#E2E6EC] bg-white shadow-[0_4px_24px_rgba(29,78,216,0.04)] transition-all duration-300 hover:border-[#1D4ED8]/20 hover:shadow-lg sm:rounded-3xl",
          className
        )}
      >
        <CardContent className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch p-0">
          <div
            className={cn(
              "relative flex flex-col justify-center space-y-5 p-6 sm:p-8 lg:p-10",
              isImageLeft ? "lg:order-2" : "lg:order-1"
            )}
          >
            <h3 className="text-2xl font-bold leading-[1.2] tracking-[-0.02em] text-[#0F172A] sm:text-3xl">
              {title}
            </h3>

            <p className="text-xs leading-[1.65] text-[#475569] sm:text-[14px]">
              {description}
            </p>

            <Link
              href={ctaHref}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1D4ED8] underline underline-offset-4 transition-colors hover:text-[#1E3A8A]"
            >
              {ctaLabel}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          <div
            className={cn(
              "relative min-h-[260px] sm:min-h-[320px]",
              isImageLeft ? "lg:order-1" : "lg:order-2"
            )}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F172A]/15 via-transparent to-transparent" />
          </div>
        </CardContent>
      </Card>
  );
}
