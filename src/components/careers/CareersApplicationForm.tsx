"use client";

import React, { useState } from "react";
import {
  UploadCloud,
  CheckCircle2,
  FileText,
  Check,
  User,
  Mail,
  Phone,
  MapPin,
  Building2,
  Briefcase,
  Globe,
  Heart,
  Award,
  TrendingUp,
  ShieldCheck,
  Send,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { FormSelect } from "@/components/ui/select";
import MotionWrapper from "@/components/ui/MotionWrapper";
import AppButton from "@/components/ui/AppButton";

import type { CareersFormSectionData } from "@/payload/types/careers";
import { defaultCareersData } from "@/lib/defaults/careers";

interface CareersApplicationFormProps {
  data?: CareersFormSectionData;
}

const inputClassName =
  "bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100/40 h-11 text-xs sm:text-sm rounded-lg transition-all";

export default function CareersApplicationForm({ data }: CareersApplicationFormProps) {
  const content = data || defaultCareersData.formSection;
  const departmentOptions = content.departments || defaultCareersData.formSection.departments;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "United States",
    departments: [] as string[],
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const countryOptions = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Pakistan",
    "India",
    "Other",
  ];

  const toggleDepartment = (dept: string) => {
    setFormData((prev) => {
      const exists = prev.departments.includes(dept);
      if (exists) {
        return { ...prev, departments: prev.departments.filter((d) => d !== dept) };
      }
      return { ...prev, departments: [...prev.departments, dept] };
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.phone && formData.firstName) {
      setIsSubmitting(true);
      try {
        const payloadData = new FormData();
        payloadData.append("formName", "Careers Job Application Form");
        payloadData.append("sourcePage", typeof window !== "undefined" ? window.location.pathname : "/careers");
        payloadData.append("name", `${formData.firstName} ${formData.lastName}`.trim());
        payloadData.append("email", formData.email);
        payloadData.append("phone", formData.phone);
        payloadData.append(
          "message",
          `Departments: ${formData.departments.join(", ") || "General"} | Address: ${formData.address1} ${formData.address2}, ${formData.city}, ${formData.state} ${formData.postalCode}, ${formData.country}`
        );
        
        if (resumeFile) {
          payloadData.append("resume", resumeFile);
        }

        const res = await fetch("/api/forms/submit", {
          method: "POST",
          body: payloadData,
        });

        if (res.ok) {
          setSubmitted(true);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const perksSpotlight = [
    {
      icon: Globe,
      title: "Flexible Remote & Hybrid Roles",
      desc: "Work comfortably from home or collaborate in our modern healthcare hubs.",
    },
    {
      icon: TrendingUp,
      title: "Competitive Compensation & Bonuses",
      desc: "Market-leading salary packages with biannual performance incentives.",
    },
    {
      icon: Heart,
      title: "Comprehensive Medical Insurance",
      desc: "Full healthcare benefits for you and your eligible family dependents.",
    },
    {
      icon: Award,
      title: "Mentorship & Professional Upskilling",
      desc: "Gain AAPC / AHIMA certifications and fast-track your leadership career.",
    },
  ];

  return (
    <section id="careers-apply-form" className="relative w-full py-8 sm:py-14 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper variant="scaleUp">
          
          <div className="bg-white rounded-2xl border border-[#E2E6EC] shadow-2xl shadow-blue-900/10 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Dark Navy Perks & Values Spotlight */}
            <div className="lg:col-span-5 bg-[#0F172A] text-white p-8 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden text-left">

              <div className="relative space-y-6 sm:space-y-8 z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/20 text-blue-300 text-xs font-semibold">
                  <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                  <span>Why Join BellMedEx</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight text-white">
                    Build Your Career With <span className="text-blue-400">Industry Leaders</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
                    Join a culture dedicated to innovation, continuous learning, and empowering healthcare providers across the nation.
                  </p>
                </div>

                {/* 4 Perks Spotlight Grid */}
                <div className="space-y-4 pt-2">
                  {perksSpotlight.map((perk, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 group">
                      <div className="p-2.5 rounded-xl bg-blue-500/15 text-blue-400 shrink-0 mt-0.5 border border-blue-400/20 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                        <perk.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                          {perk.title}
                        </h4>
                        <p className="text-xs text-slate-300 leading-snug font-medium">
                          {perk.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Guarantee Box at bottom */}
              <div className="relative pt-8 sm:pt-10 z-10">
                <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Equal Opportunity Employer & 100% Confidential Candidate Support</span>
                </div>
              </div>
            </div>

            {/* Right Column: Form Container */}
            <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 flex flex-col justify-center bg-white text-left">
              
              {/* Form Header */}
              <div className="border-b border-[#E2E6EC] pb-4 mb-6 space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#1D4ED8]">
                  <span>CAREERS APPLICATION</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                  {content.title}
                </h2>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {content.subtitle}
                </p>
              </div>

              {submitted ? (
                <div className="space-y-5 py-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shadow-xs border border-emerald-100">
                    <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
                  </div>
                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-xl font-extrabold text-[#0F172A]">
                      {content.successTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {content.successDescription}
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Name Fields (First & Last) */}
                  <div className="space-y-2">
                    <label className="block text-xs sm:text-sm font-medium text-slate-700">
                      Applicant Name <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <Input
                        type="text"
                        required
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        icon={User}
                        className={inputClassName}
                      />
                      <Input
                        type="text"
                        required
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        icon={User}
                        className={inputClassName}
                      />
                    </div>
                  </div>

                  {/* Email & Phone Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-2">
                      <label className="block text-xs sm:text-sm font-medium text-slate-700">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        icon={Mail}
                        className={inputClassName}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs sm:text-sm font-medium text-slate-700">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        icon={Phone}
                        className={inputClassName}
                      />
                    </div>
                  </div>

                  {/* Address Section */}
                  <div className="space-y-3 pt-1">
                    <label className="block text-xs sm:text-sm font-medium text-slate-700">
                      Location / Address Details
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <Input
                        type="text"
                        placeholder="Address Line 1"
                        value={formData.address1}
                        onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
                        icon={MapPin}
                        className={inputClassName}
                      />
                      <Input
                        type="text"
                        placeholder="City"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        icon={Building2}
                        className={inputClassName}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <Input
                        type="text"
                        placeholder="State / Region"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className={inputClassName}
                      />
                      <FormSelect
                        value={formData.country}
                        onValueChange={(val) => val && setFormData({ ...formData, country: val })}
                        options={countryOptions}
                        placeholder="Select Country"
                        className="h-11 rounded-lg border-[#E2E6EC] bg-[#F8FAFC] text-xs sm:text-sm font-medium"
                      />
                    </div>
                  </div>

                  {/* Department Interests Selection */}
                  <div className="space-y-2 pt-2">
                    <label className="block text-xs sm:text-sm font-medium text-slate-700">
                      Select Department(s) of Interest
                    </label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {departmentOptions.map((dept) => {
                        const isSelected = formData.departments.includes(dept);
                        return (
                          <button
                            type="button"
                            key={dept}
                            onClick={() => toggleDepartment(dept)}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                              isSelected
                                ? "bg-[#1D4ED8] text-white border-[#1D4ED8] shadow-xs"
                                : "bg-[#F8FAFC] text-[#475569] border-[#E2E6EC] hover:border-[#1D4ED8]/40 hover:text-[#1D4ED8]"
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5" />}
                            <span>{dept}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Resume Upload Dropzone */}
                  <div className="space-y-1.5 pt-2">
                    <label className="text-xs font-bold text-[#0F172A] uppercase tracking-wider block">
                      Upload Resume / CV
                    </label>
                    <label className="flex flex-col items-center justify-center p-5 border-2 border-dashed border-[#E2E6EC] hover:border-[#1D4ED8] rounded-2xl cursor-pointer bg-[#F8FAFC] hover:bg-blue-50/40 transition-all text-center group">
                      <UploadCloud className="w-8 h-8 text-slate-400 group-hover:text-[#1D4ED8] transition-colors mb-2" />
                      {resumeFile ? (
                        <div className="flex items-center gap-2 text-xs font-bold text-[#1D4ED8]">
                          <FileText className="w-4 h-4" />
                          <span>{resumeFile.name}</span>
                        </div>
                      ) : (
                        <div className="space-y-0.5">
                          <p className="text-xs font-bold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors">
                            Click to upload resume (PDF, DOCX)
                          </p>
                          <p className="text-[11px] text-slate-400">
                            Max file size: 10MB
                          </p>
                        </div>
                      )}
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <AppButton
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      icon={Send}
                      className="w-full justify-center h-12 rounded-xl font-bold shadow-md shadow-blue-900/15"
                    >
                      {isSubmitting ? "Submitting Application..." : "Submit Job Application"}
                    </AppButton>
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
