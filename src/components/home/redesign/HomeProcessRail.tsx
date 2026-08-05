"use client";

import { getIcon } from "@/lib/icons";
import { shell } from "./shell";
import type { HomepageMedicalClaims } from "@/payload/types/homepage";

interface Props {
  data: HomepageMedicalClaims;
}

export default function HomeProcessRail({ data }: Props) {
  return (
    <section className={`${shell.dark} ${shell.pad} ${shell.sectionY}`}>
      <div className={shell.maxWide}>
        <div className="mb-14 max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#60A5FA]">
            {data.badge}
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
            {data.titlePlain}{" "}
            <span className="text-[#60A5FA]">{data.titleHighlight}</span>
          </h2>
        </div>

        <ol className="relative grid gap-0 lg:grid-cols-4">
          {data.steps.map((step, idx) => {
            const Icon = getIcon(step.iconName);
            return (
              <li
                key={step.id || idx}
                className="relative border-t border-white/15 pt-8 lg:border-t-0 lg:border-l lg:px-6 lg:pt-0 lg:first:border-l-0 lg:first:pl-0"
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[#60A5FA]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                    {step.stepLabel}
                  </span>
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.7] text-blue-100/75">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
