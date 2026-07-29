"use client";

import React, { useState } from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import { Input } from "@/components/ui/input";
import AppButton from "@/components/ui/AppButton";
import { FormSelect } from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  User,
  Building2,
  Send,
  CheckCircle2,
  ShieldCheck,
  Headphones,
  LockKeyhole,
  LucideIcon,
} from "lucide-react";
import { defaultContactUsData } from "@/lib/defaults/contactUs";
import type { ContactFormSectionData } from "@/payload/types/contactUs";

const ICON_MAP: Record<string, LucideIcon> = {
  Phone,
  Mail,
  MapPin,
  Clock,
  Headphones,
};

const inputClassName =
  "bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100/40 h-11 text-xs sm:text-sm rounded-lg transition-all";

interface ContactFormSectionProps {
  data?: ContactFormSectionData;
}

export default function ContactFormSection({ data }: ContactFormSectionProps) {
  const content = data || defaultContactUsData.formSection;
  const channelsList =
    content.channels && content.channels.length > 0
      ? content.channels
      : defaultContactUsData.formSection.channels;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    serviceInterest: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.message) {
      setIsSubmitting(true);
      try {
        const res = await fetch("/api/forms/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            formName: "Contact Us Inquiry Form",
            sourcePage:
              typeof window !== "undefined"
                ? window.location.pathname
                : "/contact-us",
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: `Practice: ${
              formData.organization || "N/A"
            } | Service Interest: ${
              formData.serviceInterest || "General"
            } | Note: ${formData.message}`,
          }),
        });

        if (res.ok) {
          setIsSubmitted(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            organization: "",
            serviceInterest: "",
            message: "",
          });
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const serviceOptionsList = [
    "Medical Billing & RCM",
    "Provider Credentialing",
    "Medical Coding Audit",
    "EHR & Practice Management Software",
    "Healthcare SEO & Marketing",
    "Other / General Inquiry",
  ];

  return (
    <section id="contact-form-section" className="relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <MotionWrapper variant="scaleUp">
          <div className="relative overflow-hidden rounded-2xl border border-[#E2E6EC] shadow-[0_12px_40px_rgba(15,23,42,0.06)] grid grid-cols-1 lg:grid-cols-12 bg-white">
            
            {/* Left Column: Contact info & Channels */}
            <div className="lg:col-span-5 p-7 sm:p-10 lg:p-12 bg-[#0F172A] text-white flex flex-col justify-between relative overflow-hidden text-left">

              <div className="relative z-10 space-y-6 sm:space-y-8">
                {/* Header */}
                <div className="space-y-2">
                  <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-300 backdrop-blur-md border border-white/10">
                    {content.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                    {content.titlePlain}{" "}
                    <span className="text-blue-400">{content.titleHighlight}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
                    {content.description}
                  </p>
                </div>

                {/* Direct Channels List */}
                <div className="space-y-4 sm:space-y-5 pt-2">
                  {channelsList.map((item, idx) => {
                    const Icon = (item.iconName && ICON_MAP[item.iconName]) || Phone;
                    const channelElement = (
                      <div className="flex items-start gap-3.5 group">
                        <div className="p-2.5 rounded-xl bg-blue-500/15 text-blue-400 shrink-0 mt-0.5 border border-blue-400/20 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-xs text-slate-300 font-medium">
                            {item.details}
                          </p>
                          {item.subtext && (
                            <p className="text-[11px] text-slate-400">{item.subtext}</p>
                          )}
                        </div>
                      </div>
                    );

                    return item.href ? (
                      <a
                        key={item.title || idx}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block"
                      >
                        {channelElement}
                      </a>
                    ) : (
                      <div key={item.title || idx}>{channelElement}</div>
                    );
                  })}
                </div>
              </div>

              {/* Trust Badge at bottom of left panel */}
              <div className="relative pt-8 sm:pt-10 z-10">
                <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    {content.guaranteeDescription ||
                      "HIPAA Compliant & 100% Confidential Guarantee"}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Form Container */}
            <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 flex flex-col justify-center bg-white">
              {/* Form Header */}
              <div className="border-b border-[#E2E6EC] pb-4 mb-5 space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#1D4ED8]">
                  <span>{content.formBadge}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                  {content.formTitlePlain}{" "}
                  <span className="text-[#1D4ED8]">{content.formTitleHighlight}</span>
                </h2>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {content.formSubtitle}
                </p>
              </div>

              {isSubmitted ? (
                <div className="space-y-5 py-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shadow-xs border border-emerald-100">
                    <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-[#0F172A]">
                      Message Received!
                    </h3>
                    <p className="mx-auto max-w-md text-xs sm:text-sm leading-relaxed text-[#475569]">
                      Thank you,{" "}
                      <span className="font-semibold text-[#0F172A]">
                        {formData.name}
                      </span>
                      . A dedicated billing specialist has been notified and will reach out to{" "}
                      <span className="font-semibold text-[#1D4ED8]">
                        {formData.email}
                      </span>{" "}
                      within 1 business hour.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="cursor-pointer text-xs font-semibold text-[#1D4ED8] hover:text-[#1E3A8A] hover:underline inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Send another inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Full Name & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-name"
                        className="block text-xs sm:text-sm font-medium text-slate-700"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="contact-name"
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
                        htmlFor="contact-email"
                        className="block text-xs sm:text-sm font-medium text-slate-700"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="contact-email"
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
                  </div>

                  {/* Row 2: Phone Number & Practice / Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs sm:text-sm font-medium text-slate-700"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="contact-phone"
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

                    <div className="space-y-2">
                      <label
                        htmlFor="contact-org"
                        className="block text-xs sm:text-sm font-medium text-slate-700"
                      >
                        Practice / Organization
                      </label>
                      <Input
                        id="contact-org"
                        type="text"
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

                  {/* Row 3: Service Interested In Dropdown */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-service"
                      className="block text-xs sm:text-sm font-medium text-slate-700"
                    >
                      Service Interested In
                    </label>
                    <FormSelect
                      id="contact-service"
                      options={serviceOptionsList}
                      value={formData.serviceInterest}
                      onValueChange={(val) =>
                        setFormData((prev) => ({
                          ...prev,
                          serviceInterest: val || "",
                        }))
                      }
                      className="w-full bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A] focus-visible:bg-white focus-visible:border-[#1D4ED8] h-11 text-xs sm:text-sm rounded-lg"
                    />
                  </div>

                  {/* Row 4: Message / Special Requirements */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs sm:text-sm font-medium text-slate-700"
                    >
                      Message / Notes <span className="text-red-500">*</span>
                    </label>
                    <div className="relative w-full">
                      <textarea
                        id="contact-message"
                        required
                        rows={3}
                        placeholder="Tell us about your practice size, specialty, or current billing challenges..."
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
                          Sending Message...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          SEND MESSAGE NOW
                          <Send className="h-4 w-4" aria-hidden="true" />
                        </span>
                      )}
                    </AppButton>

                    {/* Security Guarantee Note */}
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
