'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import AppButton from '@/components/ui/AppButton';
import { getIcon } from '@/lib/icons';
import { shell } from './shell';
import type {
  HomepageNationwidePricing,
  HomepageSpecialtyBilling,
} from '@/payload/types/homepage';

interface Props {
  pricing: HomepageNationwidePricing;
  specialties: HomepageSpecialtyBilling;
}

export default function HomeBenefitBento({ pricing, specialties }: Props) {
  return (
    <section className={`${shell.pad} ${shell.sectionY}`}>
      <div className={shell.maxWide}>
        {/* Pricing only — left-aligned like other sections */}
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1D4ED8]">
              {pricing.badge}
            </p>
            <h2 className="mt-4 max-w-[16ch] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#0F172A] sm:text-5xl">
              {pricing.titlePlain}{' '}
              <span className="text-[#1D4ED8]">{pricing.titleHighlight}</span>
            </h2>
          </div>
          <p className="max-w-lg text-base leading-[1.7] text-[#475569] lg:justify-self-end">
            {pricing.description}
          </p>
        </div>

        <div className="border-y border-[#E2E6EC]">
          <ul className="grid grid-cols-1 sm:grid-cols-2">
            {pricing.benefits.map((benefit, idx) => {
              const Icon = getIcon(benefit.iconName);
              const isRight = idx % 2 === 1;
              return (
                <li
                  key={benefit.id || benefit.title}
                  className={[
                    'flex gap-4 px-1 py-7 sm:px-6 sm:py-8',
                    isRight ? 'sm:border-l sm:border-[#E2E6EC]' : '',
                    idx < pricing.benefits.length - 1
                      ? 'border-b border-[#E2E6EC]'
                      : '',
                    idx >= 4 ? 'sm:border-b-0' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E2E6EC] text-[#1D4ED8]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 text-left">
                    <h3 className="text-sm font-semibold tracking-[-0.02em] text-[#0F172A] sm:text-base">
                      {benefit.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-[1.65] text-[#475569]">
                      {benefit.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-start gap-3">
          <div className="flex flex-wrap gap-3">
            <AppButton
              href={pricing.primaryCta.primaryHref}
              variant="primary"
              size="md"
              showArrow
            >
              {pricing.primaryCta.primaryLabel}
            </AppButton>
            <AppButton
              href={pricing.secondaryCta.secondaryHref}
              variant="secondary"
              size="md"
            >
              {pricing.secondaryCta.secondaryLabel}
            </AppButton>
          </div>
          {pricing.footerNote ? (
            <p className="text-xs text-[#475569]">{pricing.footerNote}</p>
          ) : null}
        </div>

        {/* Specialty lane */}
        <div className="mt-16 border-t border-[#E2E6EC] pt-14">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1D4ED8]">
                {specialties.badge}
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#0F172A]">
                {specialties.titlePlain}{' '}
                <span className="text-[#1D4ED8]">
                  {specialties.titleHighlight}
                </span>
              </h3>
            </div>
            <Link
              href={specialties.ctaHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D4ED8]"
            >
              {specialties.ctaLabel}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2">
            {specialties.specialties.map((item) => {
              const Icon = getIcon(item.iconName);
              return (
                <Link
                  key={item.id || item.title}
                  href={item.link}
                  className="min-w-[220px] flex-1 rounded-[16px] border border-[#E2E6EC] bg-white p-5 transition-colors hover:border-[#1D4ED8]/40"
                >
                  <Icon className="h-5 w-5 text-[#1D4ED8]" aria-hidden="true" />
                  <p className="mt-4 text-sm font-semibold text-[#0F172A]">
                    {item.title}
                  </p>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#475569]">
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
