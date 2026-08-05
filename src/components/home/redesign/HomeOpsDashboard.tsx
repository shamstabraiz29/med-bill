"use client";

import { useState } from "react";
import AppButton from "@/components/ui/AppButton";
import { shell } from "./shell";
import type {
  HomepageDoctorsTeam,
  HomepageMedicalClaims,
  HomepageTrustStats,
} from "@/payload/types/homepage";

interface Props {
  claims: HomepageMedicalClaims;
  trust: HomepageTrustStats;
  team: HomepageDoctorsTeam;
}

export default function HomeOpsDashboard({ claims, trust, team }: Props) {
  const tabs = [
    { id: "claims", label: "Claims" },
    { id: "performance", label: "Performance" },
    { id: "team", label: "Coverage" },
  ] as const;
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("claims");

  return (
    <section className={`border-y ${shell.border} bg-white ${shell.pad} ${shell.sectionY}`}>
      <div className={shell.maxWide}>
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1D4ED8]">
              Live operations
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#0F172A] sm:text-5xl">
              A command center for{" "}
              <span className="text-[#1D4ED8]">revenue clarity</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-[1.7] text-[#475569]">
              {claims.description}
            </p>
          </div>

          <div
            className="inline-flex rounded-[14px] border border-[#E2E6EC] bg-[#F5F7FA] p-1"
            role="tablist"
            aria-label="Dashboard views"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active === tab.id}
                onClick={() => setActive(tab.id)}
                className={`rounded-[12px] px-4 py-2 text-sm font-semibold transition-colors ${
                  active === tab.id
                    ? "bg-white text-[#0F172A] shadow-sm"
                    : "text-[#475569] hover:text-[#0F172A]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div
          className={`relative overflow-hidden border ${shell.border} ${shell.radiusLg} ${shell.shadowFloat} bg-[#F5F7FA] p-4 sm:p-6`}
          role="tabpanel"
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#EAB308]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
            <span className="ml-3 text-xs font-medium text-[#475569]">
              bellmedex://operations
            </span>
          </div>

          <div className="rounded-[16px] border border-[#E2E6EC] bg-white p-5 sm:p-8">
            {active === "claims" && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {claims.metrics.map((metric) => (
                  <div
                    key={metric.id || metric.label}
                    className="rounded-[14px] border border-[#E2E6EC] bg-[#F5F7FA] p-5 transition-transform hover:-translate-y-0.5"
                  >
                    <p className="text-3xl font-semibold tracking-[-0.03em] text-[#0F172A]">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#475569]">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {active === "performance" && (
              <div className="grid gap-4 sm:grid-cols-3">
                {trust.mainStats.map((stat) => (
                  <div
                    key={stat.id || stat.label}
                    className="rounded-[14px] border border-[#E2E6EC] p-6"
                  >
                    <p className="text-4xl font-semibold tracking-[-0.04em] text-[#1D4ED8]">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-[#0F172A]">{stat.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#475569]">{stat.subLabel}</p>
                  </div>
                ))}
              </div>
            )}

            {active === "team" && (
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1D4ED8]">
                    {team.badge}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#0F172A]">
                    {team.titlePlain} {team.titleHighlight}
                  </h3>
                  <p className="mt-4 text-sm leading-[1.7] text-[#475569]">{team.description}</p>
                  <AppButton href={team.ctaHref} variant="primary" size="md" showArrow className="mt-6">
                    {team.ctaLabel}
                  </AppButton>
                </div>
                <div className="space-y-3">
                  <div className="rounded-[14px] border border-[#E2E6EC] bg-[#F5F7FA] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#475569]">
                      Certification
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[#0F172A]">
                      {team.floatingWidget1}
                    </p>
                  </div>
                  <div className="rounded-[14px] border border-[#E2E6EC] bg-[#F5F7FA] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#475569]">
                      Throughput
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[#0F172A]">
                      {team.floatingWidget2}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <AppButton href={claims.primaryCta.primaryHref} variant="primary" size="md" showArrow>
              {claims.primaryCta.primaryLabel}
            </AppButton>
            <AppButton href={claims.secondaryCta.secondaryHref} variant="secondary" size="md">
              {claims.secondaryCta.secondaryLabel}
            </AppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
