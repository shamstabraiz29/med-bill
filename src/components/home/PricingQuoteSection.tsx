"use client";

import React, { useState } from "react";
import {
  Building2,
  User,
  Mail,
  Phone,
  ChevronRight,
  ChevronLeft,
  Check
} from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { getIcon } from "@/lib/icons";
import type { HomepagePricingQuote } from "@/payload/types/homepage";

interface PricingQuoteSectionProps {
  data: HomepagePricingQuote;
}

export default function PricingQuoteSection({ data }: PricingQuoteSectionProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    practiceName: "",
    contactPerson: "",
    email: "",
    phone: "",
    specialty: "",
    claimVolume: "",
    providersCount: "",
    serviceRequired: "",
  });

  const specialties = data.specialties.map((s) => s.label);
  const providerCounts = data.providerCounts.map((p) => p.label);
  const claimVolumes = data.claimVolumes.map((c) => c.label);
  const services = data.services.map((s) => s.label);

  const handleSelect = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! Your quote request has been submitted.\n\nSummary:\nSpecialty: ${formData.specialty}\nProviders: ${formData.providersCount}\nVolume: ${formData.claimVolume}\nService: ${formData.serviceRequired}\nPractice: ${formData.practiceName}\nContact: ${formData.contactPerson}`);
  };

  return (
    <section className="relative w-full py-20 sm:py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block - Centered */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <SectionHeader
            badge={data.badge}
            badgeVariant="indigo"
            align="center"
            title={
              <>
                {data.titlePlain}{" "}
                <span className="text-blue-600">{data.titleHighlight}</span>
              </>
            }
            description={data.description}
            className="space-y-4"
          />
        </div>

        {/* Center Form Container */}
        <div className="max-w-2xl mx-auto w-full">
          
          {/* Step Progress Bar */}
          <div className="w-full space-y-2 mb-8">
            <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-wider">
              <span>Step {step} of 3</span>
              <span>{step === 1 ? "Practice Profile" : step === 2 ? "Volume & Services" : "Contact Details"}</span>
            </div>
            <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 transition-all duration-300 ease-out" 
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* STEP 1: Practice Profile */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                    Medical Specialty *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {specialties.map((spec) => (
                      <button
                        key={spec}
                        type="button"
                        onClick={() => handleSelect("specialty", spec)}
                        className={`px-3 py-3 text-xs font-medium rounded-xl border text-center transition-all ${
                          formData.specialty === spec
                            ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                            : "bg-white/40 dark:bg-slate-900/40 backdrop-blur-[2px] text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                        }`}
                      >
                        {spec}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                    Number of Providers *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {providerCounts.map((count) => (
                      <button
                        key={count}
                        type="button"
                        onClick={() => handleSelect("providersCount", count)}
                        className={`px-3 py-3 text-xs font-medium rounded-xl border text-center transition-all ${
                          formData.providersCount === count
                            ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                            : "bg-white/40 dark:bg-slate-900/40 backdrop-blur-[2px] text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                        }`}
                      >
                        {count}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Operations & Services */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                    Monthly Claim Volume *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {claimVolumes.map((vol) => (
                      <button
                        key={vol}
                        type="button"
                        onClick={() => handleSelect("claimVolume", vol)}
                        className={`px-3 py-3 text-xs font-medium rounded-xl border text-center transition-all ${
                          formData.claimVolume === vol
                            ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                            : "bg-white/40 dark:bg-slate-900/40 backdrop-blur-[2px] text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                        }`}
                      >
                        {vol}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                    Services Required *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {services.map((srv) => (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => handleSelect("serviceRequired", srv)}
                        className={`px-3 py-3 text-xs font-medium rounded-xl border text-center transition-all ${
                          formData.serviceRequired === srv
                            ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                            : "bg-white/40 dark:bg-slate-900/40 backdrop-blur-[2px] text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Contact Info */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  
                  {/* Practice Name */}
                  <div className="space-y-1 relative">
                    <label htmlFor="practiceName" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Practice Name *
                    </label>
                    <div className="flex items-center border-b border-slate-200 focus-within:border-blue-600 transition-colors py-1">
                      <Building2 className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                      <input
                        id="practiceName"
                        name="practiceName"
                        type="text"
                        required
                        value={formData.practiceName}
                        onChange={handleInputChange}
                        placeholder="e.g. Metro Medical Center"
                        className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-300 outline-none py-1.5"
                      />
                    </div>
                  </div>

                  {/* Contact Person */}
                  <div className="space-y-1 relative">
                    <label htmlFor="contactPerson" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Contact Person *
                    </label>
                    <div className="flex items-center border-b border-slate-200 focus-within:border-blue-600 transition-colors py-1">
                      <User className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                      <input
                        id="contactPerson"
                        name="contactPerson"
                        type="text"
                        required
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        placeholder="e.g. John Doe"
                        className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-300 outline-none py-1.5"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1 relative">
                    <label htmlFor="email" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <div className="flex items-center border-b border-slate-200 focus-within:border-blue-600 transition-colors py-1">
                      <Mail className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. john@example.com"
                        className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-300 outline-none py-1.5"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1 relative">
                    <label htmlFor="phone" className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <div className="flex items-center border-b border-slate-200 focus-within:border-blue-600 transition-colors py-1">
                      <Phone className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. (555) 000-0000"
                        className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-300 outline-none py-1.5"
                      />
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* Progress Navigation Buttons */}
            <div className="pt-4 flex flex-col space-y-4 border-t border-slate-100">
              <div className="flex justify-between items-center gap-4 w-full">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 border border-slate-200 text-slate-600 font-semibold rounded-xl text-sm flex items-center gap-2 hover:bg-slate-50 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={
                      (step === 1 && (!formData.specialty || !formData.providersCount)) ||
                      (step === 2 && (!formData.claimVolume || !formData.serviceRequired))
                    }
                    className="px-6 py-3 bg-[#1D4ED8] text-white font-semibold rounded-xl text-sm flex items-center gap-2 hover:bg-[#1E3A8A] transition-colors disabled:opacity-50 disabled:pointer-events-none ml-auto"
                  >
                    <span>Continue</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <AppButton
                    type="submit"
                    variant="primary"
                    size="md"
                    className="ml-auto"
                    disabled={!formData.practiceName || !formData.contactPerson || !formData.email || !formData.phone}
                  >
                    Get My Free Quote
                  </AppButton>
                )}
              </div>
              
              <p className="text-center text-xs text-slate-400 font-semibold tracking-wide pt-2">
                🔒 Secure &amp; confidential • No obligation
              </p>
            </div>

          </form>
        </div>

        {/* Highlights Row at the Bottom */}
        <div className="mt-20 pt-16 border-t border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.highlights.slice(0, 3).map((item, idx) => {
              const Icon = getIcon(item.iconName);
              return (
                <div key={item.id || idx} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-[#0F172A] tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Trust badges footer */}
          <div className="mt-12 flex flex-wrap justify-center gap-3 pt-8 border-t border-slate-100/60">
            {data.trustBadges.map((badge, idx) => (
              <div
                key={badge.id || idx}
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-500"
              >
              <Check className="w-3.5 h-3.5 text-blue-600" />
              <span>{badge.label}</span>
            </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
