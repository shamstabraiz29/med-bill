import type { Metadata } from "next";
import React from "react";
import SectionBadge from "@/components/ui/SectionBadge";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { ShieldCheck, Lock } from "lucide-react";
import { getPrivacyPolicyData } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Privacy Policy | BellMedEx Healthcare RCM Services",
  description:
    "Learn about how BellMedEx collects, uses, and safeguards patient and practice information in compliance with HIPAA and US privacy laws.",
};

export default async function PrivacyPolicyPage() {
  const data = await getPrivacyPolicyData();
  const hero = data.hero;
  const sections = data.sections || [];
  const contactInfo = data.contactInfo;

  return (
    <div className="flex flex-col min-h-screen bg-transparent">
      {/* Hero Banner */}
      <section className="relative w-full pt-12 pb-10 sm:pt-16 sm:pb-14 bg-transparent overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/60 via-indigo-50/30 to-transparent pointer-events-none -z-10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <MotionWrapper variant="fadeIn">
            <div className="flex justify-center">
              <SectionBadge variant="blue" pulse icon={ShieldCheck}>
                {hero.badge}
              </SectionBadge>
            </div>
          </MotionWrapper>

          <MotionWrapper variant="fadeUp" delay={0.1}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.02em] text-[#0F172A] max-w-4xl mx-auto leading-[1.18]">
              {hero.titlePlain} <span className="text-[#1D4ED8]">{hero.titleHighlight}</span>
            </h1>
          </MotionWrapper>

          <MotionWrapper variant="fadeUp" delay={0.2}>
            <p className="text-sm sm:text-base text-[#475569] max-w-2xl mx-auto leading-relaxed">
              {hero.description}
            </p>
          </MotionWrapper>

          <div className="pt-2 text-xs font-semibold text-[#1D4ED8] bg-blue-50 border border-blue-100/80 px-4 py-1.5 rounded-full w-fit mx-auto">
            Last Updated: {hero.lastUpdated}
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-10 sm:py-16 bg-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper variant="scaleUp">
            <div className="bg-white border border-[#E2E6EC] rounded-2xl p-6 sm:p-10 lg:p-12 shadow-md shadow-blue-900/5 text-left space-y-8">
              
              {/* Highlight Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E6EC] flex items-start gap-3.5">
                <div className="p-2 rounded-xl bg-blue-50 text-[#1D4ED8] shrink-0 mt-0.5">
                  <Lock className="w-5 h-5" />
                </div>
                <div className="space-y-1 text-xs sm:text-sm text-[#475569]">
                  <p className="font-bold text-[#0F172A]">HIPAA Business Associate Notice</p>
                  <p>
                    All protected health information handled by BellMedEx is protected under signed Business Associate Agreements (BAAs) with healthcare providers, clinics, and hospital systems.
                  </p>
                </div>
              </div>

              {/* Policy Sections */}
              <div className="space-y-8 divide-y divide-[#E2E6EC]">
                {sections.map((sec, idx) => (
                  <div key={sec.title || idx} className={idx > 0 ? "pt-8" : ""}>
                    <h2 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight mb-3">
                      {sec.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {sec.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Contact Footer */}
              <div className="pt-6 border-t border-[#E2E6EC] text-xs sm:text-sm text-[#475569] space-y-2">
                <p className="font-bold text-[#0F172A]">{contactInfo.heading}</p>
                <p>
                  For privacy inquiries or compliance questions, reach out to our Privacy Office at{" "}
                  <a href={`mailto:${contactInfo.email}`} className="text-[#1D4ED8] font-semibold hover:underline">
                    {contactInfo.email}
                  </a>{" "}
                  or call {contactInfo.phone}.
                </p>
              </div>

            </div>
          </MotionWrapper>
        </div>
      </section>
    </div>
  );
}
