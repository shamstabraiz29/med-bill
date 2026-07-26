"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import IconWrapper from "@/components/common/IconWrapper";
import {
  softwareCardClassName,
  softwareCardDescriptionClassName,
  softwareCardTitleClassName,
  softwareLinkClassName,
} from "./softwareSectionLayout";

export interface SoftwareHomeCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  className?: string;
}

export default function SoftwareHomeCard({
  icon,
  title,
  description,
  href,
  linkLabel = "Explore More",
  className,
}: SoftwareHomeCardProps) {
  return (
    <div className={cn(softwareCardClassName, className)}>
      <div className="flex w-full flex-1 flex-col items-start">
        <IconWrapper
          icon={icon}
          size="sm"
          variant="surface"
          className="mb-5 transition-transform duration-300 group-hover:scale-110 sm:mb-6"
        />

        <h3 className={softwareCardTitleClassName}>{title}</h3>

        <p className={cn(softwareCardDescriptionClassName, href ? "mb-6" : "")}>
          {description}
        </p>
      </div>

      {href && (
        <div className="mt-auto flex w-full justify-start">
          <Link href={href} className={softwareLinkClassName}>
            {linkLabel}
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      )}
    </div>
  );
}
