"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  CheckCircle2,
  TrendingUp,
  Clock,
  CircleDollarSign,
  Award,
  ArrowUpRight,
  BarChart3,
  CreditCard,
  ShieldCheck,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import AppButton from "@/components/ui/AppButton";
import MotionWrapper from "@/components/ui/MotionWrapper";
import SectionBadge from "@/components/ui/SectionBadge";
import IconWrapper from "@/components/common/IconWrapper";
import HeroHeader from "@/components/home/HeroHeader";
import CommandCapsuleForm from "@/components/home/CommandCapsuleForm";
import DoctorVisuals from "@/components/home/DoctorVisuals";
import { getIcon } from "@/lib/icons";
import { defaultMedicalBillingData } from "@/lib/defaults/medicalBilling";

interface ConsultationSectionProps {
  data?: typeof defaultMedicalBillingData.consultation;
  variant?: "ultra" | "showcase" | "capsule" | "split";
}

export default function ConsultationSection({
  data,
  variant = "ultra",
}: ConsultationSectionProps) {
  const consultationData = data || defaultMedicalBillingData.consultation;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Valid email format required";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-()]{7,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      errs.phone = "Valid phone number required";
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const res = await fetch("/api/forms/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: "Medical Billing Consultation Request Form",
          sourcePage:
            typeof window !== "undefined"
              ? window.location.pathname
              : "/medical-billing",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        }),
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        const resData = await res.json();
        setErrors({ form: resData.error || "Failed to submit request." });
      }
    } catch (err) {
      setErrors({ form: "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const metricCards = [
    {
      value: "98.5%",
      label: "First-Pass Clean Claims",
      subtext: "Fastest industry reimbursements",
      icon: TrendingUp,
      badge: "Highest Approval",
    },
    {
      value: "< 30 Days",
      label: "Average Days in A/R",
      subtext: "Accelerated cash flow velocity",
      icon: Clock,
      badge: "Rapid Payouts",
    },
    {
      value: "+30%",
      label: "Average Revenue Boost",
      subtext: "Eliminate unpaid claim leakage",
      icon: CircleDollarSign,
      badge: "Maximized Yield",
    },
    {
      value: "24/7",
      label: "Denial & Appeals Oversight",
      subtext: "Certified CMRS & CPB billers",
      icon: Award,
      badge: "Zero Delays",
    },
  ];

  return (
    <section className="relative w-full bg-transparent pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden">
      {/* Custom float animations identical to Home page Hero */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1.5deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(10px) rotate(-1.5deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float-slow {
          animation: float-slow 9s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 7.5s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 35s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {variant === "ultra" ? (
          /* =========================================================
             VERSION ULTRA: MEDICAL BILLING CUSTOM PICTURE & TEXT
             ========================================================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* LEFT COLUMN: Content & Form */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
              {/* Home Page HeroHeader */}
              <HeroHeader
                eyebrow={consultationData.badge}
                titlePrefix={consultationData.titlePlain}
                titleHighlight={consultationData.titleHighlight}
                description1={consultationData.description1}
                description2={consultationData.description2}
              />

              {/* Home Page CommandCapsuleForm */}
              <CommandCapsuleForm
                buttonLabel={consultationData.formButtonLabel || "Free Audit"}
                formTitle="Request Your Free Billing Audit & Consultation"
                successTitle={consultationData.successTitle}
                successDescription={consultationData.successDescription}
                trustBadges={[
                  "HIPAA Compliant",
                  "SOC2 Secure",
                  "No Upfront Cost",
                  "24-Hour Callback",
                ]}
              />

              {/* Minimalist Highlights Feature Bar (NOT CARDS) */}
              <div className="w-full pt-3 border-t border-[#E2E6EC]/80">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E2E6EC]">
                  {consultationData.highlights.map((item, idx) => {
                    const IconComponent = getIcon(item.iconName);
                    return (
                      <div
                        key={idx}
                        className={`flex items-start gap-3 ${
                          idx !== 0 ? "sm:pl-4 pt-3 sm:pt-0" : ""
                        }`}
                      >
                        <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100/60">
                          <IconComponent className="w-4 h-4 stroke-[2.2]" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-[13px] font-bold text-[#0F172A] tracking-tight">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-[#475569] leading-relaxed mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Medical Billing Custom Doctor Visuals */}
            <DoctorVisuals
              pathId="billing"
              imageSrc="/dr-nicole.png"
              imageAlt="Dr. Nicole - Medical Billing Specialist BellMedEx"
              spinningText="END-TO-END MEDICAL BILLING • 98%+ FIRST-PASS REIMBURSEMENT • END-TO-END MEDICAL BILLING • 98%+ FIRST-PASS REIMBURSEMENT •"
              widgets={[
                { icon: TrendingUp, positionClassName: "top-[18%] right-[-3%]", delay: 0.25 },
                { icon: CreditCard, positionClassName: "top-[48%] left-[-8%]", delay: 0.35 },
                { icon: ShieldCheck, positionClassName: "bottom-[10%] right-[2%]", delay: 0.45 },
              ]}
            />
          </div>
        ) : variant === "showcase" ? (
          /* VERSION C: SHOWCASE HERO DASHBOARD VARIANT */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
              <HeroHeader
                eyebrow={consultationData.badge}
                titlePrefix={consultationData.titlePlain}
                titleHighlight={consultationData.titleHighlight}
                description1={consultationData.description1}
                description2={consultationData.description2}
              />

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
                <AppButton
                  href="#consultation-form"
                  variant="primary"
                  size="lg"
                  showArrow
                  className="shadow-md shadow-blue-900/10"
                >
                  Schedule Free Audit
                </AppButton>
                <AppButton
                  href="/schedule-a-demo"
                  variant="secondary"
                  size="lg"
                >
                  Watch Demo
                </AppButton>
              </div>

              {/* Minimalist Highlights Feature Bar (NOT CARDS) */}
              <div className="w-full pt-3 border-t border-[#E2E6EC]/80">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E2E6EC]">
                  {consultationData.highlights.map((item, idx) => {
                    const IconComponent = getIcon(item.iconName);
                    return (
                      <div
                        key={idx}
                        className={`flex items-start gap-3 ${
                          idx !== 0 ? "sm:pl-4 pt-3 sm:pt-0" : ""
                        }`}
                      >
                        <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100/60">
                          <IconComponent className="w-4 h-4 stroke-[2.2]" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-[13px] font-bold text-[#0F172A] tracking-tight">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-[#475569] leading-relaxed mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <MotionWrapper variant="slideRight" className="lg:col-span-5 w-full">
              <div className="relative overflow-hidden rounded-2xl bg-white border border-[#E2E6EC] p-6 sm:p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] flex flex-col gap-5 w-full">
                <div className="flex items-center justify-between pb-3 border-b border-[#E2E6EC]">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center font-bold">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0F172A]">
                        RCM Live Performance
                      </h3>
                      <p className="text-[10px] text-[#475569]">
                        Real-time Practice Dashboard
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live System Active
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E6EC]">
                    <span className="text-[10px] font-bold text-[#475569] block">
                      Clean Claims Rate
                    </span>
                    <span className="text-xl font-extrabold text-[#0F172A] mt-0.5 block">
                      98.5%
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-0.5 mt-1">
                      <ArrowUpRight className="w-3 h-3" /> +2.4% vs Avg
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E6EC]">
                    <span className="text-[10px] font-bold text-[#475569] block">
                      Days in A/R
                    </span>
                    <span className="text-xl font-extrabold text-[#0F172A] mt-0.5 block">
                      24 Days
                    </span>
                    <span className="text-[10px] font-bold text-blue-600 flex items-center gap-0.5 mt-1">
                      <Clock className="w-3 h-3" /> Industry Lead
                    </span>
                  </div>
                </div>

                <div id="consultation-form" className="pt-1">
                  <div className="text-left mb-3">
                    <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                      {consultationData.formTitle}
                    </h4>
                    <p className="text-[11px] text-[#475569]">
                      Get a custom revenue optimization audit.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="py-6 text-center space-y-3 bg-emerald-50/50 rounded-xl p-4 border border-emerald-100">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                      <h4 className="text-sm font-bold text-[#0F172A]">
                        {consultationData.successTitle}
                      </h4>
                      <p className="text-xs text-[#475569]">
                        {consultationData.successDescription}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <Input
                        type="text"
                        placeholder="Full Name"
                        icon={User}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A] focus:bg-white h-10 text-xs"
                      />
                      <Input
                        type="email"
                        placeholder="Email Address"
                        icon={Mail}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A] focus:bg-white h-10 text-xs"
                      />
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        icon={Phone}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A] focus:bg-white h-10 text-xs"
                      />
                      <AppButton
                        type="submit"
                        disabled={isSubmitting}
                        variant="primary"
                        size="md"
                        className="w-full font-bold uppercase tracking-wider py-3"
                      >
                        {isSubmitting ? "Processing..." : consultationData.formButtonLabel}
                      </AppButton>
                    </form>
                  )}
                </div>
              </div>
            </MotionWrapper>
          </div>
        ) : variant === "capsule" ? (
          /* VERSION B: CAPSULE VARIANT */
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <SectionBadge variant="blue" pulse>
              {consultationData.badge}
            </SectionBadge>

            <MotionWrapper variant="fadeUp" delay={0.1}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-[-0.02em] leading-[1.2] max-w-3xl mx-auto">
                {consultationData.titlePlain}{" "}
                <span className="text-[#1D4ED8]">
                  {consultationData.titleHighlight}
                </span>
              </h2>
            </MotionWrapper>

            <MotionWrapper variant="fadeUp" delay={0.15}>
              <p className="text-sm sm:text-base lg:text-lg text-[#475569] max-w-2xl mx-auto leading-[1.6]">
                {consultationData.description1}
              </p>
            </MotionWrapper>

            <MotionWrapper variant="fadeUp" delay={0.2} className="w-full flex justify-center pt-2">
              <CommandCapsuleForm
                buttonLabel="Get Free Audit"
                formTitle="Request Your Free Billing Audit & Consultation"
                successTitle={consultationData.successTitle}
                successDescription={consultationData.successDescription}
                trustBadges={[
                  "HIPAA Compliant",
                  "SOC2 Secure",
                  "No Upfront Cost",
                  "24-Hour Callback",
                ]}
              />
            </MotionWrapper>

            <MotionWrapper
              variant="fadeUp"
              delay={0.3}
              className="w-full pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left"
            >
              {metricCards.map((card, idx) => (
                <div
                  key={idx}
                  className="group relative p-5 rounded-2xl bg-white border border-[#E2E6EC] shadow-[0_4px_20px_rgba(29,78,216,0.04)] hover:-translate-y-1 hover:border-[#1D4ED8]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <IconWrapper
                      icon={card.icon}
                      size="sm"
                      variant="surface"
                      className="group-hover:scale-110"
                    />
                    <span className="text-[10px] font-bold text-[#1D4ED8] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100/60">
                      {card.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight block">
                      {card.value}
                    </span>
                    <h3 className="text-xs font-bold text-[#0F172A] mt-1">
                      {card.label}
                    </h3>
                    <p className="text-[11px] text-[#475569] mt-0.5 leading-snug">
                      {card.subtext}
                    </p>
                  </div>
                </div>
              ))}
            </MotionWrapper>
          </div>
        ) : (
          /* VERSION A: SPLIT VARIANT */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
              <HeroHeader
                eyebrow={consultationData.badge}
                titlePrefix={consultationData.titlePlain}
                titleHighlight={consultationData.titleHighlight}
                description1={consultationData.description1}
                description2={consultationData.description2}
              />

              {/* Minimalist Highlights Feature Bar (NOT CARDS) */}
              <div className="w-full pt-3 border-t border-[#E2E6EC]/80">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E2E6EC]">
                  {consultationData.highlights.map((item, idx) => {
                    const IconComponent = getIcon(item.iconName);
                    return (
                      <div
                        key={idx}
                        className={`flex items-start gap-3 ${
                          idx !== 0 ? "sm:pl-4 pt-3 sm:pt-0" : ""
                        }`}
                      >
                        <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100/60">
                          <IconComponent className="w-4 h-4 stroke-[2.2]" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-[13px] font-bold text-[#0F172A] tracking-tight">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-[#475569] leading-relaxed mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <MotionWrapper variant="slideRight" className="lg:col-span-5 w-full">
              <div className="relative overflow-hidden rounded-2xl bg-white border border-[#E2E6EC] p-6 sm:p-8 shadow-[0_12px_40px_rgba(15,23,42,0.06)] flex flex-col gap-6 w-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D4ED8] via-[#3B82F6] to-[#60A5FA]" />
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                  {consultationData.formTitle}
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <Input
                    type="text"
                    placeholder="Full Name"
                    icon={User}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A]"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    icon={Mail}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A]"
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    icon={Phone}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-[#F8FAFC] border-[#E2E6EC] text-[#0F172A]"
                  />
                  <AppButton type="submit" disabled={isSubmitting} variant="primary" size="lg">
                    {isSubmitting ? "Processing..." : consultationData.formButtonLabel}
                  </AppButton>
                </form>
              </div>
            </MotionWrapper>
          </div>
        )}
      </div>
    </section>
  );
}
