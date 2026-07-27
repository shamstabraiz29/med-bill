"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const PMS_SUB_NAV_LINKS = [
  { label: "BellMedEx PMS", href: "#about-pms" },
  { label: "For Clinics", href: "#pms-features" },
  { label: "For Physicians", href: "#pms-features" },
  { label: "For Therapists", href: "#pms-features" },
  { label: "For General Practices", href: "#pms-features" },
];

export default function PmsSubNav() {
  return (
    <nav
      aria-label="Practice management software audience navigation"
      className="border-y border-[#E2E6EC] bg-white/80 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="flex gap-1 overflow-x-auto py-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-2 sm:py-4 [&::-webkit-scrollbar]:hidden">
          {PMS_SUB_NAV_LINKS.map((link, index) => (
            <li key={link.label} className="shrink-0">
              <Link
                href={link.href}
                className={cn(
                  "inline-flex items-center rounded-full px-3.5 py-2 text-xs font-semibold tracking-wide transition-colors duration-200 sm:px-4 sm:text-sm",
                  index === 0
                    ? "bg-blue-50 text-[#1D4ED8]"
                    : "text-[#475569] hover:bg-[#F5F7FA] hover:text-[#1D4ED8]"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
