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
  CheckCircle2,
  Send,
} from "lucide-react";
import { defaultScheduleDemoData } from "@/lib/defaults/scheduleDemo";
import type { ScheduleDemoFormData } from "@/payload/types/scheduleDemo";

const inputClassName =
  "bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100/40 h-11 text-xs sm:text-sm";

interface ScheduleDemoFormSectionProps {
  data?: ScheduleDemoFormData;
}

export default function ScheduleDemoFormSection({ data }: ScheduleDemoFormSectionProps) {
  const content = data || defaultScheduleDemoData.formSection;
  
  const rawRoles = content.roleOptions && content.roleOptions.length > 0 ? content.roleOptions : defaultScheduleDemoData.formSection.roleOptions;
  const roleList = rawRoles.map((r: any) => (typeof r === "string" ? r : r.label || ""));

  const rawCollections = content.collectionsOptions && content.collectionsOptions.length > 0 ? content.collectionsOptions : defaultScheduleDemoData.formSection.collectionsOptions;
  const collectionsList = rawCollections.map((c: any) => (typeof c === "string" ? c : c.label || ""));

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
          formName: "Schedule a Demo Submission",
          sourcePage:
            typeof window !== "undefined" ? window.location.pathname : "/schedule-a-demo",
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
      console.error("[ScheduleDemoFormSection error]:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full py-10 sm:py-14 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Form Card Container (matching standard app form cards) */}
        <MotionWrapper variant="scaleUp">
          <div className="bg-white border border-[#E2E6EC] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-md shadow-blue-900/5 text-left relative overflow-hidden">
            
            {/* Form Header */}
            <div className="border-b border-[#E2E6EC] pb-4 mb-6 space-y-1">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#1D4ED8]">
                {content.badge}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                {content.titlePlain} <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
              </h2>
              <p className="text-xs text-[#475569]">
                {content.description}
              </p>
            </div>

            {isSubmitted ? (
              <div className="space-y-4 py-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A]">Demo Request Submitted!</h3>
                <p className="mx-auto max-w-md text-xs sm:text-sm leading-relaxed text-[#475569]">
                  Thank you, <span className="font-semibold text-[#0F172A]">{formData.name}</span>. A senior medical billing consultant has received your request and will contact you shortly at <span className="font-semibold text-[#1D4ED8]">{formData.phone}</span> to confirm your demo schedule.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="cursor-pointer pt-2 text-xs font-semibold text-[#1D4ED8] hover:underline block mx-auto"
                >
                  Submit another demo request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Row 1: Role Dropdown & Practice Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="demo-role" className="text-xs font-semibold text-[#0F172A]">
                      I am a <span className="text-red-500">*</span>
                    </label>
                    <FormSelect
                      options={roleList}
                      value={formData.role}
                      onValueChange={(val) =>
                        setFormData((prev) => ({ ...prev, role: val || "" }))
                      }
                      className="w-full bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A] focus:bg-white focus:border-[#1D4ED8] h-11 text-xs sm:text-sm rounded-xl"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="demo-org" className="text-xs font-semibold text-[#0F172A]">
                      Practice or Company Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="demo-org"
                      type="text"
                      required
                      placeholder="Medical Group Name"
                      icon={Building2}
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, organization: e.target.value }))
                      }
                      className={inputClassName}
                    />
                  </div>
                </div>

                {/* Row 2: Full Name & Monthly Collections */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="demo-name" className="text-xs font-semibold text-[#0F172A]">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="demo-name"
                      type="text"
                      required
                      placeholder="John Doe"
                      icon={User}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, name: e.target.value }))
                      }
                      className={inputClassName}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="demo-collections" className="text-xs font-semibold text-[#0F172A]">
                      Monthly Collections <span className="text-red-500">*</span>
                    </label>
                    <FormSelect
                      options={collectionsList}
                      value={formData.collections}
                      onValueChange={(val) =>
                        setFormData((prev) => ({ ...prev, collections: val || "" }))
                      }
                      className="w-full bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A] focus:bg-white focus:border-[#1D4ED8] h-11 text-xs sm:text-sm rounded-xl"
                    />
                  </div>
                </div>

                {/* Row 3: Email Address & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="demo-email" className="text-xs font-semibold text-[#0F172A]">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="demo-email"
                      type="email"
                      required
                      placeholder="john@clinic.com"
                      icon={Mail}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                      }
                      className={inputClassName}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="demo-phone" className="text-xs font-semibold text-[#0F172A]">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="demo-phone"
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      icon={Phone}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      className={inputClassName}
                    />
                  </div>
                </div>

                {/* Row 4: Message */}
                <div className="space-y-1.5">
                  <label htmlFor="demo-message" className="text-xs font-semibold text-[#0F172A]">
                    Message / Preferred Time
                  </label>
                  <textarea
                    id="demo-message"
                    rows={4}
                    placeholder="Tell us your preferred demo date/time, medical specialty, or specific software questions..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, message: e.target.value }))
                    }
                    className="w-full rounded-xl bg-[#F8FAFC] border border-[#E2E6EC] p-3 text-xs sm:text-sm text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100/40 outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
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
                        Submitting Request...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        {content.submitBtnText || "SUBMIT DEMO REQUEST"}
                        <Send className="h-4 w-4" aria-hidden="true" />
                      </span>
                    )}
                  </AppButton>
                </div>

              </form>
            )}

          </div>
        </MotionWrapper>

      </div>
    </section>
  );
}
