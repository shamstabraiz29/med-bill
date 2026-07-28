"use client";

import React, { useState } from "react";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
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
  LucideIcon,
} from "lucide-react";
import { defaultContactUsData } from "@/lib/defaults/contactUs";
import type { ContactFormSectionData } from "@/payload/types/contactUs";

const ICON_MAP: Record<string, LucideIcon> = {
  Phone,
  Mail,
  MapPin,
  Clock,
};

const inputClassName =
  "bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100/40 h-11 text-xs sm:text-sm";

interface ContactFormSectionProps {
  data?: ContactFormSectionData;
}

export default function ContactFormSection({ data }: ContactFormSectionProps) {
  const content = data || defaultContactUsData.formSection;
  const channelsList = content.channels && content.channels.length > 0 ? content.channels : defaultContactUsData.formSection.channels;
  
  const rawServices = content.serviceOptions && content.serviceOptions.length > 0 ? content.serviceOptions : defaultContactUsData.formSection.serviceOptions;
  const serviceOptionsList = rawServices.map((s: any) => (typeof s === "string" ? s : s.label || ""));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    serviceInterest: serviceOptionsList[0] || "Revenue Cycle Management (RCM)",
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
          formName: "Contact Us Submission",
          sourcePage:
            typeof window !== "undefined" ? window.location.pathname : "/contact-bellmedex",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization,
          serviceInterest: formData.serviceInterest,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          serviceInterest: serviceOptionsList[0] || "Revenue Cycle Management (RCM)",
          message: "",
        });
      }
    } catch (error) {
      console.error("[ContactFormSection error]:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full py-10 sm:py-14 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Channels & Info */}
          <MotionWrapper variant="slideLeft" className="lg:col-span-5 space-y-6 text-left">
            
            {/* Header */}
            <div className="space-y-3">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#1D4ED8] bg-blue-50 border border-blue-100/80 px-3.5 py-1 rounded-full">
                {content.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight leading-tight">
                {content.titlePlain}{" "}
                <span className="text-[#1D4ED8]">{content.titleHighlight}</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {content.description}
              </p>
            </div>

            {/* Interactive Channels List */}
            <div className="space-y-3.5 pt-1">
              {channelsList.map((item, idx) => {
                const Icon = (item.iconName && ICON_MAP[item.iconName]) || Phone;
                const channelContent = (
                  <div className="group relative p-4 rounded-2xl bg-white border border-[#E2E6EC] hover:border-blue-300 hover:shadow-[0_8px_25px_rgba(29,78,216,0.08)] transition-all duration-300 flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] group-hover:bg-[#1D4ED8] group-hover:text-white group-hover:border-[#1D4ED8] transition-all duration-300 shrink-0 shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="text-xs font-bold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-[#0F172A]">
                          {item.details}
                        </p>
                        {item.subtext && (
                          <p className="text-[11px] text-[#475569]">{item.subtext}</p>
                        )}
                      </div>
                    </div>

                    {item.href && (
                      <div className="w-8 h-8 rounded-xl bg-slate-50 group-hover:bg-blue-50 border border-transparent group-hover:border-blue-100 flex items-center justify-center text-slate-400 group-hover:text-[#1D4ED8] transition-all shrink-0">
                        <svg
                          className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </div>
                    )}
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.title || idx}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block text-left"
                  >
                    {channelContent}
                  </a>
                ) : (
                  <div key={item.title || idx} className="text-left">
                    {channelContent}
                  </div>
                );
              })}
            </div>

            {/* Quick Trust Guarantee Callout */}
            <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800 text-white space-y-2.5 text-left shadow-lg relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  {content.guaranteeTitle}
                </h3>
              </div>
              <p className="text-xs text-indigo-200/80 leading-relaxed pl-12">
                {content.guaranteeDescription}
              </p>
            </div>
          </MotionWrapper>

          {/* Right Column: Modern Minimalist Form */}
          <MotionWrapper variant="slideRight" className="lg:col-span-7">
            <div className="bg-white border border-[#E2E6EC] rounded-3xl p-6 sm:p-8 lg:p-9 shadow-[0_12px_40px_rgba(15,23,42,0.06)] text-left relative overflow-hidden">

              <div className="border-b border-[#E2E6EC] pb-4 mb-6 space-y-1">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#1D4ED8]">
                  {content.formBadge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                  {content.formTitlePlain} <span className="text-[#1D4ED8]">{content.formTitleHighlight}</span>
                </h3>
                <p className="text-xs text-[#475569]">
                  {content.formSubtitle}
                </p>
              </div>

              {isSubmitted ? (
                <div className="space-y-4 py-12 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h4 className="text-xl font-bold text-[#0F172A]">Message Received!</h4>
                  <p className="mx-auto max-w-sm text-xs sm:text-sm leading-relaxed text-[#475569]">
                    Thank you for reaching out to BellMedEx. A dedicated billing specialist has been notified and will contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="cursor-pointer pt-2 text-xs font-semibold text-[#1D4ED8] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-semibold text-[#0F172A]">
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
                          setFormData((prev) => ({ ...prev, name: e.target.value }))
                        }
                        className={inputClassName}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-semibold text-[#0F172A]">
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
                          setFormData((prev) => ({ ...prev, email: e.target.value }))
                        }
                        className={inputClassName}
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-phone" className="text-xs font-semibold text-[#0F172A]">
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
                          setFormData((prev) => ({ ...prev, phone: e.target.value }))
                        }
                        className={inputClassName}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-org" className="text-xs font-semibold text-[#0F172A]">
                        Practice / Organization
                      </label>
                      <Input
                        id="contact-org"
                        type="text"
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

                  {/* Row 3: Service Interested In */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-service" className="text-xs font-semibold text-[#0F172A]">
                      Service Interested In
                    </label>
                    <FormSelect
                      options={serviceOptionsList}
                      value={formData.serviceInterest}
                      onValueChange={(val) =>
                        setFormData((prev) => ({ ...prev, serviceInterest: val || "" }))
                      }
                      className="w-full bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A] focus:bg-white focus:border-[#1D4ED8] h-11 text-xs sm:text-sm rounded-xl"
                    />
                  </div>

                  {/* Row 4: Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-semibold text-[#0F172A]">
                      Message / Notes <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Tell us about your practice size, specialty, or current billing challenges..."
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
                          Sending Message...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Send Message
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
      </div>
    </section>
  );
}
