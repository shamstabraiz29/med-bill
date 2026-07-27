"use client";

import React, { useState } from "react";
import { UploadCloud, CheckCircle2, FileText, Check, User, Mail, Phone, MapPin, Building2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { FormSelect } from "@/components/ui/select";
import MotionWrapper from "@/components/ui/MotionWrapper";
import AppButton from "@/components/ui/AppButton";

import type { CareersFormSectionData } from "@/payload/types/careers";
import { defaultCareersData } from "@/lib/defaults/careers";

interface CareersApplicationFormProps {
  data?: CareersFormSectionData;
}

export default function CareersApplicationForm({ data }: CareersApplicationFormProps) {
  const content = data || defaultCareersData.formSection;
  const departmentOptions = content.departments || defaultCareersData.formSection.departments;

  const countryOptions = [
    "United States",
    "Canada",
    "United Kingdom",
    "Pakistan",
    "India",
    "Philippines",
    "Australia",
    "Other",
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "United States",
    phone: "",
    departments: [] as string[],
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleDepartment = (dept: string) => {
    setFormData((prev) => {
      const exists = prev.departments.includes(dept);
      if (exists) {
        return { ...prev, departments: prev.departments.filter((d) => d !== dept) };
      } else {
        return { ...prev, departments: [...prev.departments, dept] };
      }
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
        payloadData.append("message", `Departments: ${formData.departments.join(", ") || "General"} | Address: ${formData.address1} ${formData.address2}, ${formData.city}, ${formData.state} ${formData.postalCode}, ${formData.country}`);
        
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

  return (
    <section className="relative w-full py-12 sm:py-16 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionWrapper variant="scaleUp">
          
          <div className="bg-white border border-[#E2E6EC] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl text-left">
            
            <div className="border-b border-[#E2E6EC] pb-6 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
                {content.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] mt-1">
                {content.subtitle}
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-8 rounded-2xl text-center space-y-3 shadow-sm">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold">{content.successTitle}</h3>
                <p className="text-sm text-emerald-800">
                  {content.successDescription}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Name Field (First & Last) */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-[13px] font-semibold text-[#0F172A] block">
                    Name <span className="text-red-500 font-bold">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        required
                        placeholder="First"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="h-11 sm:h-12 border-[#D1D5DB] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 rounded-xl text-sm bg-white font-medium"
                      />
                      <span className="text-[11px] text-slate-400 mt-1 block">First</span>
                    </div>

                    <div>
                      <Input
                        type="text"
                        required
                        placeholder="Last"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="h-11 sm:h-12 border-[#D1D5DB] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 rounded-xl text-sm bg-white font-medium"
                      />
                      <span className="text-[11px] text-slate-400 mt-1 block">Last</span>
                    </div>
                  </div>
                </div>

                {/* 2. Email Field */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-[13px] font-semibold text-[#0F172A] block">
                    Email <span className="text-red-500 font-bold">*</span>
                  </label>
                  <Input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-11 sm:h-12 border-[#D1D5DB] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 rounded-xl text-sm bg-white font-medium"
                  />
                </div>

                {/* 3. Address Section */}
                <div className="space-y-3 pt-2">
                  <label className="text-xs sm:text-[13px] font-semibold text-[#0F172A] block">
                    Address
                  </label>

                  {/* Address Line 1 */}
                  <div>
                    <Input
                      type="text"
                      placeholder="Address Line 1"
                      value={formData.address1}
                      onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
                      className="h-11 sm:h-12 border-[#D1D5DB] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 rounded-xl text-sm bg-white font-medium"
                    />
                    <span className="text-[11px] text-slate-400 mt-1 block">Address Line 1</span>
                  </div>

                  {/* Address Line 2 */}
                  <div>
                    <Input
                      type="text"
                      placeholder="Address Line 2"
                      value={formData.address2}
                      onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
                      className="h-11 sm:h-12 border-[#D1D5DB] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 rounded-xl text-sm bg-white font-medium"
                    />
                    <span className="text-[11px] text-slate-400 mt-1 block">Address Line 2</span>
                  </div>

                  {/* City & State */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="City"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="h-11 sm:h-12 border-[#D1D5DB] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 rounded-xl text-sm bg-white font-medium"
                      />
                      <span className="text-[11px] text-slate-400 mt-1 block">City</span>
                    </div>

                    <div>
                      <Input
                        type="text"
                        placeholder="State / Province / Region"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="h-11 sm:h-12 border-[#D1D5DB] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 rounded-xl text-sm bg-white font-medium"
                      />
                      <span className="text-[11px] text-slate-400 mt-1 block">State / Province / Region</span>
                    </div>
                  </div>

                  {/* Postal Code & Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Postal Code"
                        value={formData.postalCode}
                        onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                        className="h-11 sm:h-12 border-[#D1D5DB] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 rounded-xl text-sm bg-white font-medium"
                      />
                      <span className="text-[11px] text-slate-400 mt-1 block">Postal Code</span>
                    </div>

                    <div>
                      <FormSelect
                        value={formData.country}
                        onValueChange={(val) => val && setFormData({ ...formData, country: val })}
                        options={countryOptions}
                        placeholder="Select country"
                        className="h-11 sm:h-12 rounded-xl border-[#D1D5DB] focus:border-[#1D4ED8] bg-white font-medium"
                      />
                      <span className="text-[11px] text-slate-400 mt-1 block">Country</span>
                    </div>
                  </div>
                </div>

                {/* 4. Phone Field */}
                <div className="space-y-1.5 pt-2">
                  <label className="text-xs sm:text-[13px] font-semibold text-[#0F172A] block">
                    Phone <span className="text-red-500 font-bold">*</span>
                  </label>
                  <Input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-11 sm:h-12 border-[#D1D5DB] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 rounded-xl text-sm bg-white font-medium"
                  />
                </div>

                {/* 5. Departments of Interest (Checkboxes) */}
                <div className="space-y-2.5 pt-2">
                  <label className="text-xs sm:text-[13px] font-semibold text-[#0F172A] block">
                    Departments of Interest <span className="text-red-500 font-bold">*</span>
                  </label>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                    {departmentOptions.map((dept) => {
                      const isChecked = formData.departments.includes(dept);
                      return (
                        <div
                          key={dept}
                          onClick={() => toggleDepartment(dept)}
                          className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer select-none transition-all ${
                            isChecked
                              ? "bg-blue-50/80 border-[#1D4ED8] text-[#1D4ED8] font-semibold shadow-xs"
                              : "bg-slate-50/60 border-[#E2E6EC] text-[#0F172A] hover:bg-slate-100/80"
                          }`}
                        >
                          <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors shrink-0 ${
                            isChecked ? "bg-[#1D4ED8] border-[#1D4ED8] text-white" : "border-slate-300 bg-white"
                          }`}>
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="text-xs sm:text-sm">{dept}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 6. Upload Resume Drag & Drop Zone */}
                <div className="space-y-1.5 pt-2">
                  <label className="text-xs sm:text-[13px] font-semibold text-[#0F172A] block">
                    Upload Resume <span className="text-red-500 font-bold">*</span>
                  </label>

                  <label className="relative border-2 border-dashed border-[#CBD5E1] hover:border-[#1D4ED8] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors bg-slate-50/50 hover:bg-blue-50/30 group">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    {resumeFile ? (
                      <div className="flex items-center gap-3 text-emerald-600 font-semibold text-xs sm:text-sm">
                        <FileText className="w-6 h-6 text-emerald-600" />
                        <span>{resumeFile.name} ({(resumeFile.size / 1024).toFixed(1)} KB)</span>
                      </div>
                    ) : (
                      <>
                        <UploadCloud className="w-10 h-10 text-slate-400 group-hover:text-[#1D4ED8] transition-colors mb-2" />
                        <p className="text-xs sm:text-sm text-slate-600 font-medium">
                          Drag & Drop Files, <span className="text-[#1D4ED8] font-bold underline">Choose Files to Upload</span>
                        </p>
                        <p className="text-[11px] text-slate-400 mt-1">Supports PDF, DOC, DOCX up to 10MB</p>
                      </>
                    )}
                  </label>
                </div>

                {/* 7. Submit Action Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-10 py-3.5 bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "SUBMITTING..." : "SUBMIT"}</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </MotionWrapper>
      </div>
    </section>
  );
}
