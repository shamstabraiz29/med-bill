import React from "react";
import SectionHeader, { SectionHeaderProps } from "@/components/ui/SectionHeader";

export interface SoftwareSectionHeaderProps
  extends Omit<SectionHeaderProps, "title"> {
  headingId?: string;
  titlePlain?: string;
  titleHighlight: string;
  titleSuffix?: string;
  /** Appends a period directly after the highlight, e.g. "delivers." */
  endPeriod?: boolean;
}

function renderTitleSuffix(suffix: string) {
  if (/^[.!?,:;]/.test(suffix)) {
    return suffix;
  }
  return ` ${suffix}`;
}

/**
 * Section header matching homepage title structure:
 * titlePlain + blue highlight + optional suffix (punctuation attaches without a space).
 */
export default function SoftwareSectionHeader({
  headingId,
  titlePlain,
  titleHighlight,
  titleSuffix,
  endPeriod = false,
  badgeVariant = "indigo",
  badgePulse = true,
  align = "center",
  className = "mb-12 sm:mb-16 max-w-4xl",
  ...props
}: SoftwareSectionHeaderProps) {
  return (
    <SectionHeader
      badgeVariant={badgeVariant}
      badgePulse={badgePulse}
      align={align}
      className={className}
      title={
        <>
          <span id={headingId}>
            {titlePlain && <>{titlePlain} </>}
            <span className="text-blue-600">{titleHighlight}</span>
            {endPeriod && "."}
            {titleSuffix && renderTitleSuffix(titleSuffix)}
          </span>
        </>
      }
      {...props}
    />
  );
}
