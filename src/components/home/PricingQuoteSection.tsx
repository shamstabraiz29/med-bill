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
import { Input } from "@/components/ui/input";
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formName: 'Home Pricing Quote Form',
          sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/',
          name: formData.contactPerson || formData.practiceName || 'Pricing Quote Request',
          email: formData.email,
          phone: formData.phone,
          monthlyCollections: formData.claimVolume,
          message: `Specialty: ${formData.specialty} | Providers: ${formData.providersCount} | Service: ${formData.serviceRequired} | Practice: ${formData.practiceName}`,
        }),
      });

      if (res.ok) {
        setIsSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="hp-section overflow-hidden bg-transparent">
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
                <span className="text-primary">{data.titleHighlight}</span>
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
            <div className="flex justify-between items-center text-xs font-bold text-muted-foreground uppercase tracking-[0.1em]">
              <span>Step {step} of 3</span>
              <span>{step === 1 ? "Practice Profile" : step === 2 ? "Volume & Services" : "Contact Details"}</span>
            </div>
            <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-300 ease-out" 
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* STEP 1: Practice Profile */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="block text-xs font-bold text-foreground uppercase tracking-[0.1em]">
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
                            ? "bg-primary text-primary-foreground border-primary shadow-sm"
                            : "bg-card text-muted-foreground border-border hover:border-primary/30"
                        }`}
                      >
                        {spec}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <label className="block text-xs font-bold text-foreground uppercase tracking-[0.1em]">
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
                            ? "bg-primary text-primary-foreground border-primary shadow-sm"
                            : "bg-card text-muted-foreground border-border hover:border-primary/30"
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
                  <label className="block text-xs font-bold text-foreground uppercase tracking-[0.1em]">
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
                            ? "bg-primary text-primary-foreground border-primary shadow-sm"
                            : "bg-card text-muted-foreground border-border hover:border-primary/30"
                        }`}
                      >
                        {vol}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <label className="block text-xs font-bold text-foreground uppercase tracking-[0.1em]">
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
                            ? "bg-primary text-primary-foreground border-primary shadow-sm"
                            : "bg-card text-muted-foreground border-border hover:border-primary/30"
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Practice Name */}
                  <div className="space-y-2 text-left">
                    <label htmlFor="practiceName" className="block text-xs sm:text-sm font-medium text-foreground">
                      Practice Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="practiceName"
                      name="practiceName"
                      type="text"
                      required
                      icon={Building2}
                      value={formData.practiceName}
                      onChange={handleInputChange}
                      placeholder="e.g. Metro Medical Center"
                      className="bg-muted border-border text-foreground placeholder:text-muted-foreground focus:bg-card focus:border-primary focus:ring-4 focus:ring-primary/10 h-11 text-xs sm:text-sm rounded-lg transition-all"
                    />
                  </div>

                  {/* Contact Person */}
                  <div className="space-y-2 text-left">
                    <label htmlFor="contactPerson" className="block text-xs sm:text-sm font-medium text-foreground">
                      Contact Person <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="contactPerson"
                      name="contactPerson"
                      type="text"
                      required
                      icon={User}
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="bg-muted border-border text-foreground placeholder:text-muted-foreground focus:bg-card focus:border-primary focus:ring-4 focus:ring-primary/10 h-11 text-xs sm:text-sm rounded-lg transition-all"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2 text-left">
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-foreground">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      icon={Mail}
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. john@example.com"
                      className="bg-muted border-border text-foreground placeholder:text-muted-foreground focus:bg-card focus:border-primary focus:ring-4 focus:ring-primary/10 h-11 text-xs sm:text-sm rounded-lg transition-all"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2 text-left">
                    <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-foreground">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      icon={Phone}
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. (555) 000-0000"
                      className="bg-muted border-border text-foreground placeholder:text-muted-foreground focus:bg-card focus:border-primary focus:ring-4 focus:ring-primary/10 h-11 text-xs sm:text-sm rounded-lg transition-all"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Progress Navigation Buttons */}
            <div className="pt-4 flex flex-col space-y-4 border-t border-border">
              <div className="flex justify-between items-center gap-4 w-full">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 border border-border text-muted-foreground font-semibold rounded-lg text-sm flex items-center gap-2 hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
                    className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg text-sm flex items-center gap-2 hover:bg-secondary transition-colors disabled:opacity-50 disabled:pointer-events-none ml-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
              
              <p className="text-center text-xs text-muted-foreground font-semibold tracking-wide pt-2">
                🔒 Secure &amp; confidential • No obligation
              </p>
            </div>

          </form>
        </div>

        {/* Highlights Row at the Bottom */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.highlights.slice(0, 3).map((item, idx) => {
              const Icon = getIcon(item.iconName);
              return (
                <div key={item.id || idx} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent text-primary shrink-0">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display text-base font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-3 pt-8 border-t border-border">
            {data.trustBadges.map((badge, idx) => (
              <div
                key={badge.id || idx}
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-muted border border-border text-xs font-semibold text-muted-foreground"
              >
              <Check className="w-3.5 h-3.5 text-primary" />
              <span>{badge.label}</span>
            </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
