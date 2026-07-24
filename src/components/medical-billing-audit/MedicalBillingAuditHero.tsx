"use client";

import React from "react";
import SectionBadge from "@/components/ui/SectionBadge";
import MotionWrapper from "@/components/ui/MotionWrapper";
import MedicalBillingAuditHeroForm from "./MedicalBillingAuditHeroForm";
import {
  auditContainerClassName,
  auditSectionClassName,
} from "./auditSectionLayout";

export default function MedicalBillingAuditHero() {
  return (
    <section
      className={auditSectionClassName}
      aria-labelledby="medical-billing-audit-hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      >
        <div className="absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-blue-100/80 blur-3xl" />
        <div className="absolute -left-16 bottom-1/4 h-56 w-56 rounded-full bg-blue-50 blur-3xl" />
      </div>

      <div className={auditContainerClassName}>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <MotionWrapper
            variant="slideLeft"
            className="flex flex-col items-start space-y-6 text-left lg:col-span-7"
          >
            <SectionBadge variant="blue" pulse>
              Medical Billing &amp; Coding Audit Services
            </SectionBadge>

            <h1
              id="medical-billing-audit-hero-heading"
              className="max-w-2xl text-3xl font-bold leading-[1.18] tracking-[-0.02em] text-[#0F172A] sm:text-4xl lg:text-5xl"
            >
              Be On The Same Page with{" "}
              <span className="text-[#1D4ED8]">Your Payers &amp; Patients!</span>
            </h1>

            <div className="max-w-2xl space-y-4 text-sm leading-[1.6] text-[#475569] sm:text-base">
              <p>
                You work hard to provide quality care to your patients, but are you getting
                paid what you deserve? Errors in medical billing means lost revenue, denied
                claims, and legal troubles. Therefore, medical billing audit services by a
                medical coding audit company become a necessity.
              </p>
              <p>
                BellMedEx offers healthcare coding and compliance audit services for healthcare
                providers. Our experienced billing auditors review a provider&apos;s billing
                codes for accuracy, compliance, and optimization with real-time issue
                resolution. So don&apos;t put your practice at risk. Get in touch with us
                today and let us help you meet medical billing compliance.
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper variant="slideRight" className="w-full lg:col-span-5">
            <MedicalBillingAuditHeroForm />
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
