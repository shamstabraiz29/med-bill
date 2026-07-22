"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";

export default function NationwidePricingSection() {
  const locations = [
    "Chicago", "California",
    "Los Angeles", "Indiana",
    "Alabama", "New York"
  ];

  const perks = [
    "Billing Software", "Electronic Statements",
    "Denial Management", "Clearinghouse Services",
    "Accounts Management", "1:1 Technical Support"
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Nationwide Availability */}
          <MotionWrapper variant="slideLeft" className="flex flex-col items-start text-left space-y-6">
            <SectionHeader
              badge="Geographic Coverage"
              badgeVariant="indigo"
              title={
                <>
                  Nationwide{" "}
                  <span className="text-blue-600">
                    Availability
                  </span>
                </>
              }
              description="As a top medical billing services company in the USA, BellMedEx helps US providers succeed financially. Our American workforce has the payer knowledge to maximize billing claims reimbursement in all 50 states."
              className="space-y-3 sm:space-y-4"
            />

            {/* Checkbox locations grid */}
            <div className="grid grid-cols-2 gap-y-3 gap-x-6 w-full max-w-md pt-2">
              {locations.map((loc, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#2A2374] text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-slate-700 text-xs sm:text-[13px] font-medium tracking-tight">
                    {loc}
                  </span>
                </div>
              ))}
            </div>

            {/* US Map card panel */}
            <div className="w-full bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col items-center gap-4 mt-4">
              {/* Image Frame */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-50 border border-slate-100 p-4">
                <Image
                  src="/us-map.png"
                  alt="Map of US state coverage - BellMedEx"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
              
              {/* Choose your location link */}
              <div className="w-full flex justify-end">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2A2374] hover:text-blue-600 transition-colors uppercase tracking-wider group/lnk"
                >
                  Choose your location
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/lnk:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </MotionWrapper>

          {/* Right Column: Affordable Pricing */}
          <MotionWrapper variant="slideRight" className="flex flex-col items-start text-left space-y-6">
            <SectionHeader
              badge="Cost Benefits"
              badgeVariant="emerald"
              title={
                <>
                  Affordable{" "}
                  <span className="text-emerald-600">
                    Pricing
                  </span>
                </>
              }
              description="Save over in-house billing with our affordable 2.49% collections rate, pay-for-paid model, free EMR software, scalability, and free denied claims appeals. Outsource to us for billing optimization with complimentary perks like:"
              className="space-y-3 sm:space-y-4"
            />

            {/* Checkbox perks grid */}
            <div className="grid grid-cols-2 gap-y-3 gap-x-6 w-full pt-2">
              {perks.map((perk, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#2A2374] text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-slate-700 text-xs sm:text-[13px] font-medium tracking-tight">
                    {perk}
                  </span>
                </div>
              ))}
            </div>

            {/* Savings comparative pricing table */}
            <div className="w-full border border-slate-200 rounded-2xl overflow-hidden shadow-sm mt-4">
              <table className="w-full text-xs font-medium border-collapse text-[#1c1a45]">
                
                {/* Header 1: In-House Billing */}
                <thead>
                  <tr className="bg-[#1c1a45] text-white">
                    <th colSpan={2} className="py-3.5 px-5 uppercase text-center font-semibold tracking-widest text-[10px]">
                      In-House Billing Costs
                    </th>
                  </tr>
                </thead>
                
                <tbody>
                  <tr className="bg-white border-b border-slate-100">
                    <td colSpan={2} className="py-2 px-5 text-center text-[9px] text-slate-400 italic">
                      *calculations based on a medium-scale practice with $100,000 collections
                    </td>
                  </tr>
                  
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <td className="py-3 px-5 text-left text-slate-600">Annual Salary</td>
                    <td className="py-3 px-5 text-right font-semibold text-slate-800">$54,480</td>
                  </tr>
                  
                  <tr className="bg-white border-b border-slate-100">
                    <td className="py-3 px-5 text-left text-slate-600">Overheads</td>
                    <td className="py-3 px-5 text-right font-semibold text-slate-800">$15,000</td>
                  </tr>
                  
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <td className="py-3 px-5 text-left font-semibold">Total</td>
                    <td className="py-3 px-5 text-right font-bold text-slate-900">$69,480</td>
                  </tr>

                  {/* Header 2: BellMedEx Billing */}
                  <tr className="bg-[#2A2374] text-white border-t border-slate-200">
                    <th colSpan={2} className="py-3.5 px-5 uppercase text-center font-semibold tracking-widest text-[10px]">
                      Bellmedex Full Service Medical Billing Costs
                    </th>
                  </tr>
                  
                  <tr className="bg-white border-b border-slate-100">
                    <td colSpan={2} className="py-2 px-5 text-center text-[9px] text-slate-400 italic">
                      *calculations based on a medium-scale practice with $100,000 collections
                    </td>
                  </tr>
                  
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <td className="py-3 px-5 text-left text-slate-600">Billing Service Rates</td>
                    <td className="py-3 px-5 text-right font-semibold text-slate-800">as low as 2.99% of the collections</td>
                  </tr>
                  
                  <tr className="bg-white border-b border-slate-200">
                    <td className="py-3 px-5 text-left font-semibold">Total</td>
                    <td className="py-3 px-5 text-right font-bold text-slate-900">$35,998</td>
                  </tr>

                  {/* Header 3: Savings Display */}
                  <tr className="bg-[#2A2374] text-white border-t border-slate-200">
                    <th colSpan={2} className="py-3.5 px-5 uppercase text-center font-semibold tracking-widest text-[10px]">
                      Annual Savings with Bellmedex
                    </th>
                  </tr>
                  
                  <tr className="bg-indigo-50">
                    <td colSpan={2} className="py-5 px-5 text-center font-bold text-xl text-[#2A2374] tracking-tight">
                      $33,482
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </MotionWrapper>

        </div>
      </div>
    </section>
  );
}
