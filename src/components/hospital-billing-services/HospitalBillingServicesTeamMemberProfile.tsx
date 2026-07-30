"use client";

import React from "react";
import AppImage from "@/components/ui/AppImage";
import { cn } from "@/lib/utils";
import type { HospitalBillingTeamMember } from "@/payload/types/hospitalBillingServices";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

interface HospitalBillingServicesTeamMemberProfileProps {
  member: HospitalBillingTeamMember;
  imageFirst?: boolean;
  quoteClassName?: string;
  accentClassName?: string;
}

export default function HospitalBillingServicesTeamMemberProfile({
  member,
  imageFirst = false,
  quoteClassName = "text-[#1D4ED8]",
  accentClassName = "bg-[#1D4ED8]",
}: HospitalBillingServicesTeamMemberProfileProps) {
  const imageAlt = member.imageAlt || `${member.name} - hospital billing leader at BellMedEx`;
  const alignRight = imageFirst;

  return (
    <div
      className={cn(
        "grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12",
        alignRight ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
      )}
    >
      <div className={cn("flex justify-center lg:col-span-5", alignRight ? "lg:justify-end" : "lg:justify-start")}>
        <div className="relative h-[220px] w-[220px] sm:h-[260px] sm:w-[260px]">
          <div className="absolute inset-[-10px] animate-[spin_40s_linear_infinite] pointer-events-none">
            <svg className="h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
              <path
                id={`team-orbit-${member.name.replace(/\s+/g, "-")}`}
                d="M 50,50 m -46,0 a 46,46 0 1,1 92,0 a 46,46 0 1,1 -92,0"
                fill="none"
              />
              <text className="fill-[#1D4ED8]/35 text-[3.6px] font-bold uppercase tracking-[0.28em]">
                <textPath href={`#team-orbit-${member.name.replace(/\s+/g, "-")}`} startOffset="0%">
                  BellMedEx • Turning Bills into Revenue • BellMedEx • Turning Bills into Revenue •
                </textPath>
              </text>
            </svg>
          </div>

          <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#1D4ED8] to-[#60A5FA] p-1.5 shadow-[0_8px_30px_rgba(29,78,216,0.18)]">
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-white">
              <AppImage
                src={member.imageSrc}
                fallbackSrc="/doctor-hero.png"
                alt={imageAlt}
                fill
                className="object-cover object-top"
                sizes="260px"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "flex flex-col gap-4 lg:col-span-7",
          alignRight ? "items-end text-right" : "items-start text-left"
        )}
      >
        <div className={cn("h-1 w-16 rounded-full", accentClassName)} aria-hidden="true" />

        <h3 className="text-xl font-bold tracking-[-0.02em] text-[#0F172A] sm:text-2xl">{member.name}</h3>

        <p className="max-w-xl text-sm leading-[1.65] text-[#475569] sm:text-base">{member.bio}</p>

        {member.linkedinUrl ? (
          <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#1D4ED8]/10 text-[#1D4ED8] transition-colors hover:bg-[#1D4ED8] hover:text-white"
            aria-label={`${member.name} on LinkedIn`}
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
        ) : (
          <span
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#1D4ED8]/10 text-[#1D4ED8]"
            aria-hidden="true"
          >
            <LinkedinIcon className="h-4 w-4" />
          </span>
        )}

        <p className={cn("max-w-xl text-sm italic leading-[1.65] sm:text-base", quoteClassName)}>
          &ldquo;{member.quote}&rdquo;
        </p>
      </div>
    </div>
  );
}
