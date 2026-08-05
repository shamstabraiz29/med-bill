"use client";

import { useState } from "react";
import { User, Mail, Phone, Loader2, Check, Star } from "lucide-react";
import HomeButton from "@/components/home/shared/HomeButton";

interface CommandCapsuleFormProps {
  buttonLabel?: string;
  successTitle?: string;
  successDescription?: string;
  trustBadges?: string[];
  formTitle?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  phonePlaceholder?: string;
  showFooter?: boolean;
}

export default function CommandCapsuleForm({
  buttonLabel = "Free Audit",
  successTitle = "Consultation Request Booked!",
  successDescription = "We will reach out to you within the next 15 minutes.",
  trustBadges = ["HIPAA Compliant", "SOC2 Secure", "No Obligation"],
  formTitle,
  namePlaceholder = "Full Name",
  emailPlaceholder = "Email Address",
  phonePlaceholder = "Phone Number",
  showFooter = true,
}: CommandCapsuleFormProps) {
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
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Valid email format required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-()]{7,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Valid phone number required";
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
    try {
      const response = await fetch("/api/forms/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: formTitle || buttonLabel ? `Capsule Form: ${formTitle || buttonLabel}` : "Home Hero Capsule Form",
          sourcePage: typeof window !== "undefined" ? window.location.pathname : "/",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "" });
      } else {
        const data = await response.json();
        setErrors({ form: data.error || "Failed to submit form." });
      }
    } catch {
      setErrors({ form: "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="hp-card mt-8 flex items-start gap-4 p-5">
        <div className="hp-icon-box h-10 w-10 shrink-0">
          <Check className="h-5 w-5 stroke-[3]" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-slate-900">{successTitle}</h3>
          <p className="mt-1 text-sm text-slate-600">{successDescription}</p>
        </div>
        <button onClick={() => setIsSuccess(false)} className="hp-link text-sm hover:underline">
          Reset
        </button>
      </div>
    );
  }

  return (
    <div className="mt-8">
      {formTitle && <p className="mb-3 text-sm font-semibold text-slate-900">{formTitle}</p>}

      <form onSubmit={handleSubmit} className="hp-card space-y-3 p-5">
        <div className="relative">
          <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={namePlaceholder} className="hp-input" />
        </div>
        <div className="relative">
          <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={emailPlaceholder} className="hp-input" />
        </div>
        <div className="relative">
          <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={phonePlaceholder} className="hp-input" />
        </div>
        <HomeButton type="submit" disabled={isSubmitting} variant="accent" size="lg" showArrow className="w-full">
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Processing
            </span>
          ) : (
            buttonLabel
          )}
        </HomeButton>
      </form>

      {Object.keys(errors).length > 0 && (
        <div className="mt-2 space-y-1 text-xs text-red-600">
          {Object.values(errors).map((err) => (
            <p key={err}>{err}</p>
          ))}
        </div>
      )}

      {showFooter && (
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {trustBadges.map((badge, i) => (
              <span key={i} className="flex items-center gap-1 text-xs text-slate-500">
                <Check className="h-3 w-3 text-sky-600" />
                {badge}
              </span>
            ))}
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-600">
            Google 4.8
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
