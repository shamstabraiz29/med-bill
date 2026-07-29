"use client";

import React, { useState } from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { Input } from "@/components/ui/input";
import AppButton from "@/components/ui/AppButton";
import { FormSelect } from "@/components/ui/select";
import {
  User,
  Building2,
  Mail,
  Phone,
  LockKeyhole,
  CheckCircle2,
  Send,
  ShieldCheck,
  Percent,
  Sparkles,
  Clock,
  MessageSquare,
} from "lucide-react";
import { defaultMedicalBillingPricingData } from "@/lib/defaults/medicalBillingPricing";
import type { PricingUnlockFormData } from "@/payload/types/medicalBillingPricing";

const inputClassName =
  "bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100/40 h-11 text-xs sm:text-sm rounded-lg transition-all";

interface PricingUnlockFormProps {
  data?: PricingUnlockFormData;
}

export default function PricingUnlockForm({ data }: PricingUnlockFormProps) {
  const content = data || defaultMedicalBillingPricingData.unlockForm;

  const rawRoles =
    content.roleOptions && content.roleOptions.length > 0
      ? content.roleOptions
      : defaultMedicalBillingPricingData.unlockForm.roleOptions;
  const roleList = rawRoles.map((r: any) =>
    typeof r === "string" ? r : r.label || ""
  );

  const rawCollections =
    content.collectionsOptions && content.collectionsOptions.length > 0
      ? content.collectionsOptions
      : defaultMedicalBillingPricingData.unlockForm.collectionsOptions;
  const collectionsList = rawCollections.map((c: any) =>
    typeof c === "string" ? c : c.label || ""
  );

  const [formData, setFormData] = useState({
    role: roleList[0] || "Solo Practitioner",
    organization: "",
    name: "",
    collections: collectionsList[0] || "$50,000 – $100,000 / month",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/forms/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: "Unlock Pricing Submission",
          sourcePage:
            typeof window !== "undefined"
              ? window.location.pathname
              : "/medical-billing-pricing-bellmedex",
          role: formData.role,
          organization: formData.organization,
          name: formData.name,
          collections: formData.collections,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("[PricingUnlockForm error]:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper variant="scaleUp">
          {/* Main 2-Column Split Card Container (Full max-w-7xl container width) */}
          <div className="bg-white rounded-2xl border border-[#E2E6EC] shadow-2xl shadow-blue-900/10 overflow-hidden grid grid-cols-1 lg:grid-cols-12">


            {/* Left Column: Solid #0F172A Value Proposition Spotlight */}
            <div className="lg:col-span-5 bg-[#0F172A] text-white p-8 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="relative space-y-6 sm:space-y-8 z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/20 text-blue-300 text-xs font-semibold">
                  <LockKeyhole className="w-3.5 h-3.5 text-blue-400" />
                  <span>Instant Rate Estimator</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white">
                    Unlock Custom Billing Rates
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
                    Get custom, performance-based pricing starting as low as 2.49% tailored specifically to your practice volume and specialty requirements.
                  </p>
                </div>

                {/* Key Value Points */}
                <div className="space-y-4 sm:space-y-5 pt-2">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-blue-500/15 text-blue-400 shrink-0 mt-0.5 border border-blue-400/20">
                      <Percent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">Starting at 2.49%</h4>
                      <p className="text-xs text-slate-400">Competitive, volume-discounted RCM rates.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-blue-500/15 text-blue-400 shrink-0 mt-0.5 border border-blue-400/20">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">Zero Setup Fees</h4>
                      <p className="text-xs text-slate-400">No hidden costs or long-term lock-ins.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-blue-500/15 text-blue-400 shrink-0 mt-0.5 border border-blue-400/20">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">Instant Delivery</h4>
                      <p className="text-xs text-slate-400">Receive customized fee schedule in minutes.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badge at bottom of left panel */}
              <div className="relative pt-8 sm:pt-10 z-10">
                <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>HIPAA Compliant & 100% Confidential</span>
                </div>
              </div>
            </div>

            {/* Right Column: Form Container */}
            <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 flex flex-col justify-center bg-white">


              {/* Form Header */}
              <div className="border-b border-[#E2E6EC] pb-4 mb-5 space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#1D4ED8]">
                  <span>{content.badge}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                  {content.titlePlain}{" "}
                  <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
                </h2>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {content.description}
                </p>
              </div>

              {isSubmitted ? (
                <div className="space-y-5 py-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shadow-xs border border-emerald-100">
                    <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-[#0F172A]">
                      Pricing Details Unlocked!
                    </h3>
                    <p className="mx-auto max-w-md text-xs sm:text-sm leading-relaxed text-[#475569]">
                      Thank you,{" "}
                      <span className="font-semibold text-[#0F172A]">
                        {formData.name}
                      </span>
                      . A detailed fee schedule has been dispatched to{" "}
                      <span className="font-semibold text-[#1D4ED8]">
                        {formData.email}
                      </span>
                      . A billing specialist will connect with you within 1 business hour.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="cursor-pointer text-xs font-semibold text-[#1D4ED8] hover:text-[#1E3A8A] hover:underline inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Unlock pricing for another practice</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* Row 1: Role Dropdown & Practice Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="pricing-role"
                        className="block text-xs sm:text-sm font-medium text-slate-700"
                      >
                        I am a <span className="text-red-500">*</span>
                      </label>
                      <FormSelect
                        id="pricing-role"
                        options={roleList}
                        value={formData.role}
                        onValueChange={(val) =>
                          setFormData((prev) => ({ ...prev, role: val || "" }))
                        }
                        className="w-full bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A] focus-visible:bg-white focus-visible:border-[#1D4ED8] h-11 text-xs sm:text-sm rounded-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="pricing-org"
                        className="block text-xs sm:text-sm font-medium text-slate-700"
                      >
                        Practice / Company Name{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="pricing-org"
                        type="text"
                        required
                        placeholder="Medical Group Name"
                        icon={Building2}
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            organization: e.target.value,
                          }))
                        }
                        className={inputClassName}
                      />
                    </div>
                  </div>

                  {/* Row 2: Full Name & Monthly Collections */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="pricing-name"
                        className="block text-xs sm:text-sm font-medium text-slate-700"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="pricing-name"
                        type="text"
                        required
                        placeholder="John Doe"
                        icon={User}
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className={inputClassName}
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="pricing-collections"
                        className="block text-xs sm:text-sm font-medium text-slate-700"
                      >
                        Monthly Collections <span className="text-red-500">*</span>
                      </label>
                      <FormSelect
                        id="pricing-collections"
                        options={collectionsList}
                        value={formData.collections}
                        onValueChange={(val) =>
                          setFormData((prev) => ({
                            ...prev,
                            collections: val || "",
                          }))
                        }
                        className="w-full bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A] focus-visible:bg-white focus-visible:border-[#1D4ED8] h-11 text-xs sm:text-sm rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Row 3: Email Address & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="pricing-email"
                        className="block text-xs sm:text-sm font-medium text-slate-700"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="pricing-email"
                        type="email"
                        required
                        placeholder="john@clinic.com"
                        icon={Mail}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className={inputClassName}
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="pricing-phone"
                        className="block text-xs sm:text-sm font-medium text-slate-700"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="pricing-phone"
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        icon={Phone}
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                        className={inputClassName}
                      />
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="pricing-message"
                      className="block text-xs sm:text-sm font-medium text-slate-700"
                    >
                      Message / Special Requirements
                    </label>
                    <div className="relative w-full">
                      <textarea
                        id="pricing-message"
                        rows={3}
                        placeholder="Tell us about your specialty or software integration needs..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        className="w-full rounded-lg bg-[#F8FAFC] border border-[#E2E6EC] p-3 text-xs sm:text-sm text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100/40 outline-none transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Action Button */}
                  <div className="pt-2 space-y-2.5">
                    <AppButton
                      type="submit"
                      disabled={isSubmitting}
                      variant="primary"
                      size="lg"
                      className="w-full py-3.5 font-bold uppercase tracking-wider shadow-md shadow-blue-900/10"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Unlocking Pricing...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          {content.submitBtnText || "UNLOCK PRICING NOW"}
                          <Send className="h-4 w-4" aria-hidden="true" />
                        </span>
                      )}
                    </AppButton>

                    {/* Security Note */}
                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#64748B]">
                      <LockKeyhole className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0" />
                      <span>
                        Your information is 100% confidential. No spam guaranteed.
                      </span>
                    </div>
                  </div>

                </form>
              )}

            </div>

          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}


