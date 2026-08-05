"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Mail, Phone, Loader2, Check, Star } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import { easeOutExpo } from "@/lib/motion";

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
  embedded?: boolean;
  variant?: "capsule" | "hero";
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
  embedded = false,
  variant = "capsule",
}: CommandCapsuleFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeInput, setActiveInput] = useState<string | null>(null);
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
      const response = await fetch('/api/forms/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formName: formTitle || buttonLabel ? `Capsule Form: ${formTitle || buttonLabel}` : 'Home Hero Capsule Form',
          sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/',
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
        setErrors({ form: data.error || 'Failed to submit form.' });
      }
    } catch (err) {
      setErrors({ form: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Container variants for staggered entrance
  const formContainerVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: easeOutExpo,
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const inputItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: easeOutExpo },
    },
  };

  const isHero = variant === "hero";
  const inputBorderClass = (field: string) =>
    `w-full pl-10 pr-4 py-3 text-sm bg-background border rounded-xl outline-none text-foreground font-medium transition-all placeholder:text-muted-foreground/70 focus-visible:ring-2 focus-visible:ring-primary/20 ${
      activeInput === field
        ? "border-primary"
        : errors[field]
          ? "border-destructive"
          : "border-border hover:border-primary/40"
    } ${errors[field] ? "text-destructive placeholder:text-destructive/60" : ""}`;

  const renderInput = (
    field: "name" | "email" | "phone",
    Icon: typeof User,
    placeholder: string,
    type: string = "text",
  ) => (
    <motion.div variants={inputItemVariants} className="relative w-full">
      <Icon
        className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors duration-200 ${
          activeInput === field
            ? "text-primary"
            : errors[field]
              ? "text-destructive"
              : "text-muted-foreground"
        }`}
      />
      <input
        type={type}
        name={field}
        value={formData[field]}
        onFocus={() => setActiveInput(field)}
        onBlur={() => setActiveInput(null)}
        onChange={handleChange}
        placeholder={placeholder}
        className={
          isHero
            ? inputBorderClass(field)
            : `w-full pl-9 pr-3 py-3 text-xs bg-transparent border-0 focus:ring-0 outline-none text-foreground font-medium transition-colors placeholder:text-muted-foreground/70 focus-visible:ring-0 ${
                errors[field] ? "placeholder:text-destructive/80 text-destructive" : ""
              }`
        }
      />
    </motion.div>
  );

  const submitButton = (
    <AppButton
      type="submit"
      disabled={isSubmitting}
      variant="primary"
      size={isHero ? "lg" : "md"}
      showArrow={!isSubmitting}
      className={isHero ? "w-full" : "w-full md:w-auto shrink-0 min-w-[120px]"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isSubmitting ? (
          <motion.span
            key="spinner"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center gap-1.5"
          >
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            <span>Processing</span>
          </motion.span>
        ) : (
          <motion.span
            key="text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {buttonLabel}
          </motion.span>
        )}
      </AnimatePresence>
    </AppButton>
  );

  const errorBlock = (
    <AnimatePresence>
      {Object.keys(errors).length > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0, y: -4 }}
          animate={{ opacity: 1, height: "auto", y: 0 }}
          exit={{ opacity: 0, height: 0, y: -4 }}
          transition={{ duration: 0.25, ease: easeOutExpo }}
          className="overflow-hidden"
        >
          <div
            className={`flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-destructive font-semibold pt-1 ${
              isHero ? "" : "px-4"
            }`}
          >
            {errors.name && <span>* {errors.name}</span>}
            {errors.email && <span>* {errors.email}</span>}
            {errors.phone && <span>* {errors.phone}</span>}
            {errors.form && <span>* {errors.form}</span>}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const footerBlock = showFooter && (
    <motion.div
      variants={inputItemVariants}
      className={`flex flex-col gap-4 pt-1 ${
        isHero
          ? "items-center text-center sm:flex-row sm:items-center sm:justify-center sm:gap-8"
          : "sm:flex-row sm:items-center sm:justify-between px-2"
      }`}
    >
      <div
        className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold text-muted-foreground ${
          isHero ? "justify-center" : ""
        }`}
      >
        {trustBadges.map((badge, i) => (
          <span key={i} className="flex items-center gap-1.5 hover:text-foreground transition-colors">
            <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" /> {badge}
          </span>
        ))}
      </div>

      <div className={`flex items-center gap-2 bg-card border border-border rounded-full px-3 py-1.5 shadow-sm hover:border-primary/30 transition-colors ${isHero ? "" : "self-center sm:self-auto"}`}>
        <div className="flex items-center gap-1">
          <span className="text-[11px] font-bold text-foreground">Google Rating</span>
          <span className="text-[11px] font-bold text-primary bg-accent px-1 py-0.5 rounded">4.8</span>
        </div>
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={formContainerVariants}
      className={`w-full ${isHero ? "" : "max-w-3xl"}`}
    >
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.4, ease: easeOutExpo }}
            className="hp-card p-6 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0 border border-emerald-200/80">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-base font-bold text-foreground">{successTitle}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{successDescription}</p>
            </div>
            <button
              onClick={() => setIsSuccess(false)}
              className="text-xs text-primary hover:underline font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              Reset Form
            </button>
          </motion.div>
        ) : (
          <motion.div key="form-container" className="space-y-4">
            {formTitle && (
              <p className="px-2 text-sm font-semibold text-foreground sm:text-base">
                {formTitle}
              </p>
            )}

            {isHero ? (
              <div className="hp-card p-5 sm:p-6 space-y-4">
                <motion.form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {renderInput("name", User, namePlaceholder)}
                    {renderInput("email", Mail, emailPlaceholder, "email")}
                    {renderInput("phone", Phone, phonePlaceholder, "tel")}
                  </div>
                  <motion.div variants={inputItemVariants}>{submitButton}</motion.div>
                </motion.form>
                {errorBlock}
              </div>
            ) : (
              <>
                <motion.form
                  onSubmit={handleSubmit}
                  className={`relative flex flex-col md:flex-row items-center gap-2 p-1.5 bg-card border rounded-xl md:rounded-full transition-all duration-200 ${
                    activeInput
                      ? "border-primary ring-2 ring-primary/10"
                      : Object.keys(errors).length > 0
                        ? "border-destructive"
                        : "border-border hover:border-primary/30"
                  }`}
                >
                  <motion.div variants={inputItemVariants} className="relative flex-1 w-full px-2">
                    <User
                      className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-all duration-200 ${
                        activeInput === "name"
                          ? "text-primary scale-110"
                          : errors.name
                            ? "text-destructive"
                            : "text-muted-foreground"
                      }`}
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onFocus={() => setActiveInput("name")}
                      onBlur={() => setActiveInput(null)}
                      onChange={handleChange}
                      placeholder={namePlaceholder}
                      className={`w-full pl-9 pr-3 py-3 text-xs bg-transparent border-0 focus:ring-0 outline-none text-foreground font-medium transition-colors placeholder:text-muted-foreground/70 focus-visible:ring-0 ${
                        errors.name ? "placeholder:text-destructive/80 text-destructive" : ""
                      }`}
                    />
                  </motion.div>

                  <div className="hidden md:block w-px h-6 bg-border" />

                  <motion.div variants={inputItemVariants} className="relative flex-1 w-full px-2">
                    <Mail
                      className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-all duration-200 ${
                        activeInput === "email"
                          ? "text-primary scale-110"
                          : errors.email
                            ? "text-destructive"
                            : "text-muted-foreground"
                      }`}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onFocus={() => setActiveInput("email")}
                      onBlur={() => setActiveInput(null)}
                      onChange={handleChange}
                      placeholder={emailPlaceholder}
                      className={`w-full pl-9 pr-3 py-3 text-xs bg-transparent border-0 focus:ring-0 outline-none text-foreground font-medium transition-colors placeholder:text-muted-foreground/70 ${
                        errors.email ? "placeholder:text-destructive/80 text-destructive" : ""
                      }`}
                    />
                  </motion.div>

                  <div className="hidden md:block w-px h-6 bg-border" />

                  <motion.div variants={inputItemVariants} className="relative flex-1 w-full px-2">
                    <Phone
                      className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-all duration-200 ${
                        activeInput === "phone"
                          ? "text-primary scale-110"
                          : errors.phone
                            ? "text-destructive"
                            : "text-muted-foreground"
                      }`}
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onFocus={() => setActiveInput("phone")}
                      onBlur={() => setActiveInput(null)}
                      onChange={handleChange}
                      placeholder={phonePlaceholder}
                      className={`w-full pl-9 pr-3 py-3 text-xs bg-transparent border-0 focus:ring-0 outline-none text-foreground font-medium transition-colors placeholder:text-muted-foreground/70 ${
                        errors.phone ? "placeholder:text-destructive/80 text-destructive" : ""
                      }`}
                    />
                  </motion.div>

                  <motion.div variants={inputItemVariants} className="w-full md:w-auto shrink-0">
                    {submitButton}
                  </motion.div>
                </motion.form>
                {errorBlock}
              </>
            )}

            {footerBlock}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
