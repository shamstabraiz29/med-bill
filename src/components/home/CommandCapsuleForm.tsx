"use client";

import { useState } from "react";
import { User, Mail, Phone, Loader2, ArrowRight, Check, Star } from "lucide-react";
import AppButton from "@/components/ui/AppButton";

export default function CommandCapsuleForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Required";
    if (!formData.email.trim()) {
      newErrors.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Required";
    } else if (!/^\+?[\d\s\-()]{7,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Invalid";
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="w-full max-w-3xl pt-2">
      {isSuccess ? (
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xl shadow-slate-100 flex items-center gap-4 animate-fade-in animate-duration-300">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center shrink-0 border border-emerald-100">
            <Check className="w-6 h-6 stroke-[3.5]" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-base font-bold text-slate-800">Consultation Request Booked!</h3>
            <p className="text-xs text-slate-400 mt-0.5">We will reach out to you within the next 15 minutes.</p>
          </div>
          <button
            onClick={() => setIsSuccess(false)}
            className="text-xs text-blue-600 hover:underline font-bold transition-all cursor-pointer"
          >
            Reset
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-2 p-1.5 bg-white border border-slate-200/60 rounded-2xl md:rounded-full shadow-[0_12px_40px_rgba(31,30,74,0.05)] focus-within:border-indigo-400/80 focus-within:shadow-[0_16px_50px_rgba(31,30,74,0.08)] transition-all duration-300">

            {/* Full Name Input */}
            <div className="relative flex-1 w-full px-2">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className={`w-full pl-9 pr-3 py-3 text-xs bg-transparent border-0 focus:ring-0 outline-none placeholder:text-slate-400 text-slate-700 font-medium ${errors.name ? 'placeholder:text-red-400 text-red-500' : ''}`}
              />
            </div>

            <div className="hidden md:block w-[1px] h-6 bg-slate-200" />

            {/* Email Input */}
            <div className="relative flex-1 w-full px-2">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={`w-full pl-9 pr-3 py-3 text-xs bg-transparent border-0 focus:ring-0 outline-none placeholder:text-slate-400 text-slate-700 font-medium ${errors.email ? 'placeholder:text-red-400 text-red-500' : ''}`}
              />
            </div>

            <div className="hidden md:block w-[1px] h-6 bg-slate-200" />

            {/* Phone Input */}
            <div className="relative flex-1 w-full px-2">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className={`w-full pl-9 pr-3 py-3 text-xs bg-transparent border-0 focus:ring-0 outline-none placeholder:text-slate-400 text-slate-700 font-medium ${errors.phone ? 'placeholder:text-red-400 text-red-500' : ''}`}
              />
            </div>

            {/* Submit CTA Button */}
            <AppButton
              type="submit"
              disabled={isSubmitting}
              variant="primary"
              size="md"
              showArrow={!isSubmitting}
              className="w-full md:w-auto shrink-0"
            >
              {isSubmitting ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                "Free Audit"
              )}
            </AppButton>
          </form>

          {/* Inline validations if errors exist */}
          {(errors.name || errors.email || errors.phone) && (
            <div className="flex gap-4 text-[10px] text-red-500 font-semibold px-4">
              {errors.name && <span>* Name required</span>}
              {errors.email && <span>* Email valid format required</span>}
              {errors.phone && <span>* Phone number required</span>}
            </div>
          )}

          {/* Trust markers & rating inline */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-2">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] font-bold text-slate-400/90">
              <span className="flex items-center gap-1">
                <Check className="w-3 h-3 text-emerald-500 stroke-[3.5]" /> HIPAA Compliant
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3 h-3 text-emerald-500 stroke-[3.5]" /> SOC2 Secure
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3 h-3 text-emerald-500 stroke-[3.5]" /> No Obligation
              </span>
            </div>

            {/* Google rating trust badge */}
            <div className="flex items-center gap-2 self-start sm:self-auto bg-slate-50 border border-slate-100 rounded-full px-3 py-1 shadow-sm">
              <div className="flex items-center gap-1">
                <span className="text-[10px] font-extrabold text-slate-700">Google Rating</span>
                <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-1 py-0.2 rounded">4.8</span>
              </div>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
