"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import { shell } from "./shell";
import type { HomepageFaq } from "@/payload/types/homepage";

interface Props {
  data: HomepageFaq;
}

export default function HomeFaqRail({ data }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={`border-y ${shell.border} bg-white ${shell.pad} ${shell.sectionY}`}>
      <div className={`${shell.maxWide} grid gap-12 lg:grid-cols-[0.8fr_1.2fr]`}>
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1D4ED8]">
            {data.badge}
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#0F172A] sm:text-5xl">
            {data.titlePlain}{" "}
            <span className="text-[#1D4ED8]">{data.titleHighlight}</span>
          </h2>
          <p className="mt-5 text-base leading-[1.7] text-[#475569]">{data.description}</p>

          <div className="mt-8 rounded-[16px] border border-[#E2E6EC] bg-[#F5F7FA] p-5">
            <p className="text-sm font-semibold text-[#0F172A]">{data.helpTitle}</p>
            <p className="mt-2 text-sm text-[#475569]">{data.helpDescription}</p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <AppButton
                href={data.primaryCta.primaryHref}
                variant="primary"
                size="md"
                className="w-full justify-center sm:w-auto"
              >
                {data.primaryCta.primaryLabel}
              </AppButton>
              <AppButton
                href={data.secondaryCta.secondaryHref}
                variant="secondary"
                size="md"
                className="w-full justify-center sm:w-auto"
              >
                {data.secondaryCta.secondaryLabel}
              </AppButton>
            </div>
            {data.footerNote ? (
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#475569]">
                {data.footerNote}
              </p>
            ) : null}
          </div>
        </div>

        <div className="divide-y divide-[#E2E6EC] border-y border-[#E2E6EC]">
          {data.faqs.map((faq, idx) => {
            const isOpen = open === idx;
            const panelId = `home-faq-panel-${idx}`;
            const buttonId = `home-faq-button-${idx}`;

            return (
              <div key={faq.id || idx} className="py-1">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="flex w-full items-start justify-between gap-6 py-5 text-left"
                >
                  <span className="text-lg font-semibold tracking-[-0.02em] text-[#0F172A]">
                    {faq.question}
                  </span>
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#E2E6EC] text-[#0F172A]">
                    {isOpen ? (
                      <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                    ) : (
                      <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                    )}
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="pb-5 pr-10 text-sm leading-[1.7] text-[#475569]"
                >
                  {isOpen ? faq.answer : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
