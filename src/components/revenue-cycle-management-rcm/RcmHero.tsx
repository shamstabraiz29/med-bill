"use client";

import React, { useState } from "react";
import { User, Mail, Phone, DollarSign, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import { defaultRevenueCycleManagementData } from "@/lib/defaults/revenueCycleManagement";

interface RcmHeroProps {
  data?: typeof defaultRevenueCycleManagementData.hero;
}

export default function RcmHero({ data }: RcmHeroProps) {
  const heroData = data || defaultRevenueCycleManagementData.hero;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    monthlyCollections: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      setIsSubmitting(true);
      try {
        const res = await fetch('/api/forms/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            formName: 'RCM Hero Consultancy Form',
            sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/revenue-cycle-management-rcm',
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
          }),
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
    <section className="relative w-full pt-12 pb-16 lg:pt-16 lg:pb-24 bg-transparent overflow-hidden">
      
      {/* Background Ambient Enhancements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Headline & Description */}
          <MotionWrapper variant="slideLeft" className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            <SectionBadge variant="blue" pulse>
              {heroData.badge}
            </SectionBadge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A] leading-[1.15]">
              {heroData.titlePrefix} <br className="hidden sm:inline" />
              <span className="text-[#1D4ED8]">{heroData.titleHighlight}</span>
            </h1>

            <p className="text-[#475569] text-sm sm:text-base leading-[1.65] max-w-2xl font-normal">
              {heroData.description}
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 w-full text-left">
              {heroData.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#1D4ED8] shrink-0" />
                  <span>{bullet.label}</span>
                </div>
              ))}
            </div>

          </MotionWrapper>

          {/* RIGHT COLUMN: Request Free RCM Consultancy Form Card */}
          <MotionWrapper variant="slideRight" className="lg:col-span-5 w-full">
            <div className="bg-white text-[#0F172A] rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl relative overflow-hidden border border-[#E2E6EC] text-left">
              
              <div className="space-y-1.5 mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                  {heroData.formTitle}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm">
                  {heroData.formDescription}
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 rounded-2xl text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold">{heroData.successTitle}</h4>
                  <p className="text-xs sm:text-sm text-emerald-800">
                    Thank you, {formData.name}. {heroData.successDescription}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name Input */}
                  <div className="space-y-2 text-left">
                    <label className="block text-xs sm:text-sm font-medium text-slate-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      required
                      placeholder="Name"
                      icon={User}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100/40 h-11 text-xs sm:text-sm rounded-lg transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2 text-left">
                    <label className="block text-xs sm:text-sm font-medium text-slate-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder="Email Address"
                      icon={Mail}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100/40 h-11 text-xs sm:text-sm rounded-lg transition-all"
                    />
                  </div>

                  {/* Monthly Collections Input */}
                  <div className="space-y-2 text-left">
                    <label className="block text-xs sm:text-sm font-medium text-slate-700">
                      Monthly Collections
                    </label>
                    <Input
                      type="text"
                      placeholder="Monthly Collections"
                      icon={DollarSign}
                      value={formData.monthlyCollections}
                      onChange={(e) => setFormData({ ...formData, monthlyCollections: e.target.value })}
                      className="bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100/40 h-11 text-xs sm:text-sm rounded-lg transition-all"
                    />
                  </div>

                  {/* Phone Number Input */}
                  <div className="space-y-2 text-left">
                    <label className="block text-xs sm:text-sm font-medium text-slate-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      icon={Phone}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A] placeholder:text-slate-400 focus:bg-white focus:border-[#1D4ED8] focus:ring-4 focus:ring-blue-100/40 h-11 text-xs sm:text-sm rounded-lg transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase py-3.5 rounded-xl transition-colors shadow-md cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>{heroData.formButtonLabel}</span>
                    </button>
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
