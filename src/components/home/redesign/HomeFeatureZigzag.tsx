"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getIcon } from "@/lib/icons";
import { shell } from "./shell";
import type { HomepageServicesOverview } from "@/payload/types/homepage";

interface Props {
  data: HomepageServicesOverview;
}

export default function HomeFeatureZigzag({ data }: Props) {
  return (
    <section className={`${shell.pad} ${shell.sectionY}`}>
      <div className={shell.maxWide}>
        <div className="mb-16 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1D4ED8]">
              {data.badge}
            </p>
            <h2 className="mt-4 max-w-[16ch] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#0F172A] sm:text-5xl">
              {data.titlePlain}{" "}
              <span className="text-[#1D4ED8]">{data.titleHighlight}</span>{" "}
              {data.titleSuffix}
            </h2>
          </div>
          <p className="max-w-lg text-base leading-[1.7] text-[#475569] lg:justify-self-end">
            {data.description}
          </p>
        </div>

        <div className="space-y-6">
          {data.services.map((service, idx) => {
            const Icon = getIcon(service.iconName);
            const reverse = idx % 2 === 1;

            return (
              <article
                key={service.id || idx}
                className={`grid overflow-hidden border ${shell.border} bg-white ${shell.radiusLg} ${shell.shadow} lg:grid-cols-2`}
              >
                <div
                  className={`flex flex-col justify-between p-8 sm:p-10 ${
                    reverse ? "lg:order-2" : ""
                  }`}
                >
                  <div>
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#E2E6EC] text-[#1D4ED8]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="text-sm font-semibold tracking-[-0.02em] text-[#475569]">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#0F172A] sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-[1.7] text-[#475569] sm:text-base">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href={service.link}
                    className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#1D4ED8] transition-transform hover:translate-x-0.5"
                  >
                    {service.linkLabel || "Explore"}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <div
                  className={`relative min-h-[240px] border-[#E2E6EC] bg-[#F5F7FA] p-8 sm:min-h-[280px] sm:p-10 ${
                    reverse ? "lg:order-1 lg:border-r" : "lg:border-l"
                  }`}
                >
                  <div className="absolute inset-8 rounded-[16px] border border-[#E2E6EC] bg-white p-5 sm:inset-10">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="h-2.5 w-24 rounded-full bg-[#E2E6EC]" />
                      <div className="h-2.5 w-10 rounded-full bg-[#1D4ED8]/20" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 w-full rounded-full bg-[#F5F7FA]" />
                      <div className="h-3 w-5/6 rounded-full bg-[#F5F7FA]" />
                      <div className="h-3 w-4/6 rounded-full bg-[#F5F7FA]" />
                    </div>
                    <div className="mt-8 grid grid-cols-3 gap-3">
                      {["A", "B", "C"].map((cell) => (
                        <div
                          key={cell}
                          className="rounded-[12px] border border-[#E2E6EC] bg-[#F5F7FA] px-3 py-4"
                        >
                          <div className="h-2 w-8 rounded-full bg-[#E2E6EC]" />
                          <div className="mt-3 h-5 w-12 rounded-md bg-[#0F172A]/10" />
                        </div>
                      ))}
                    </div>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#475569]">
                      Operational preview
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
