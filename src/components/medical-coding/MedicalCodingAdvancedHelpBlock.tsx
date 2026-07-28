"use client";

import React from "react";
import Image from "next/image";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import IconWrapper from "@/components/common/IconWrapper";

export interface MedicalCodingAdvancedHelpBlockProps {
  icon: LucideIcon;
  title: React.ReactNode;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
}

export default function MedicalCodingAdvancedHelpBlock({
  icon,
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "right",
}: MedicalCodingAdvancedHelpBlockProps) {
  const isImageLeft = imagePosition === "left";

  return (
    <Card
      glass={false}
      hoverEffect="none"
      className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 sm:rounded-2xl"
    >
      <CardContent className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch p-0">
        <div
          className={cn(
            "flex flex-col justify-center gap-4 bg-muted p-6 sm:gap-5 sm:p-8 lg:p-10",
            isImageLeft ? "lg:order-2" : "lg:order-1"
          )}
        >
          <IconWrapper icon={icon} size="lg" variant="surface" />

          <h3 className="max-w-lg text-2xl font-bold leading-[1.2] tracking-[-0.02em] text-foreground sm:text-3xl">
            {title}
          </h3>

          <p className="max-w-lg text-xs leading-[1.65] text-muted-foreground sm:text-[13px]">
            {description}
          </p>
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
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/15 via-transparent to-transparent"
            aria-hidden="true"
          />
        </div>
      </CardContent>
    </Card>
  );
}
