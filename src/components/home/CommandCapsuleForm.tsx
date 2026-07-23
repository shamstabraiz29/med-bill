"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Mail, Phone, Loader2, ArrowRight, Check, Star } from "lucide-react";
import AppButton from "@/components/ui/AppButton";
import { easeOutExpo } from "@/lib/motion";

export default function CommandCapsuleForm() {
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
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", phone: "" });
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={formContainerVariants}
      className="w-full max-w-3xl pt-2"
    >
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success-card"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.4, ease: easeOutExpo }}
            className="bg-white border border-[#E2E6EC] rounded-2xl p-6 shadow-[0_8px_30px_rgba(29,78,216,0.08)] flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-emerald-50 text-[#22C55E] rounded-full flex items-center justify-center shrink-0 border border-emerald-100">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-base font-bold text-[#0F172A]">Consultation Request Booked!</h3>
              <p className="text-xs text-[#475569] mt-0.5">We will reach out to you within the next 15 minutes.</p>
            </div>
            <button
              onClick={() => setIsSuccess(false)}
              className="text-xs text-[#1D4ED8] hover:underline font-bold transition-all cursor-pointer"
            >
              Reset Form
            </button>
          </motion.div>
        ) : (
          <motion.div key="form-container" className="space-y-4">
            <motion.form
              onSubmit={handleSubmit}
              className={`relative flex flex-col md:flex-row items-center gap-2 p-1.5 bg-white border rounded-2xl md:rounded-full transition-all duration-300 ${
                activeInput
                  ? "border-[#1D4ED8] shadow-[0_12px_36px_rgba(29,78,216,0.12)] ring-2 ring-[#1D4ED8]/15"
                  : Object.keys(errors).length > 0
                  ? "border-[#EF4444] shadow-[0_8px_24px_rgba(239,68,68,0.10)]"
                  : "border-[#E2E6EC] shadow-[0_8px_30px_rgba(15,23,42,0.05)] hover:border-[#1D4ED8]/40"
              }`}
            >
              {/* Full Name Input */}
              <motion.div variants={inputItemVariants} className="relative flex-1 w-full px-2">
                <User
                  className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-all duration-200 ${
                    activeInput === "name"
                      ? "text-[#1D4ED8] scale-110"
                      : errors.name
                      ? "text-[#EF4444]"
                      : "text-[#475569]"
                  }`}
                />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onFocus={() => setActiveInput("name")}
                  onBlur={() => setActiveInput(null)}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className={`w-full pl-9 pr-3 py-3 text-xs bg-transparent border-0 focus:ring-0 outline-none text-[#0F172A] font-medium transition-colors placeholder:text-[#475569]/60 ${
                    errors.name ? "placeholder:text-[#EF4444]/80 text-[#EF4444]" : ""
                  }`}
                />
              </motion.div>

              <div className="hidden md:block w-[1px] h-6 bg-[#E2E6EC]" />

              {/* Email Input */}
              <motion.div variants={inputItemVariants} className="relative flex-1 w-full px-2">
                <Mail
                  className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-all duration-200 ${
                    activeInput === "email"
                      ? "text-[#1D4ED8] scale-110"
                      : errors.email
                      ? "text-[#EF4444]"
                      : "text-[#475569]"
                  }`}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onFocus={() => setActiveInput("email")}
                  onBlur={() => setActiveInput(null)}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={`w-full pl-9 pr-3 py-3 text-xs bg-transparent border-0 focus:ring-0 outline-none text-[#0F172A] font-medium transition-colors placeholder:text-[#475569]/60 ${
                    errors.email ? "placeholder:text-[#EF4444]/80 text-[#EF4444]" : ""
                  }`}
                />
              </motion.div>

              <div className="hidden md:block w-[1px] h-6 bg-[#E2E6EC]" />

              {/* Phone Input */}
              <motion.div variants={inputItemVariants} className="relative flex-1 w-full px-2">
                <Phone
                  className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 transition-all duration-200 ${
                    activeInput === "phone"
                      ? "text-[#1D4ED8] scale-110"
                      : errors.phone
                      ? "text-[#EF4444]"
                      : "text-[#475569]"
                  }`}
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onFocus={() => setActiveInput("phone")}
                  onBlur={() => setActiveInput(null)}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className={`w-full pl-9 pr-3 py-3 text-xs bg-transparent border-0 focus:ring-0 outline-none text-[#0F172A] font-medium transition-colors placeholder:text-[#475569]/60 ${
                    errors.phone ? "placeholder:text-[#EF4444]/80 text-[#EF4444]" : ""
                  }`}
                />
              </motion.div>

              {/* Submit CTA Button */}
              <motion.div variants={inputItemVariants} className="w-full md:w-auto shrink-0">
                <AppButton
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  size="md"
                  showArrow={!isSubmitting}
                  className="w-full md:w-auto shrink-0 min-w-[120px]"
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
                        Free Audit
                      </motion.span>
                    )}
                  </AnimatePresence>
                </AppButton>
              </motion.div>
            </motion.form>

            {/* Inline Validation State Animations */}
            <AnimatePresence>
              {Object.keys(errors).length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -4 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -4 }}
                  transition={{ duration: 0.25, ease: easeOutExpo }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-[#EF4444] font-semibold px-4 pt-1">
                    {errors.name && <span>* {errors.name}</span>}
                    {errors.email && <span>* {errors.email}</span>}
                    {errors.phone && <span>* {errors.phone}</span>}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Trust markers & rating inline */}
            <motion.div
              variants={inputItemVariants}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-2 pt-1"
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] font-bold text-[#475569]">
                <span className="flex items-center gap-1 hover:text-[#0F172A] transition-colors">
                  <Check className="w-3 h-3 text-[#22C55E] stroke-[3.5]" /> HIPAA Compliant
                </span>
                <span className="flex items-center gap-1 hover:text-[#0F172A] transition-colors">
                  <Check className="w-3 h-3 text-[#22C55E] stroke-[3.5]" /> SOC2 Secure
                </span>
                <span className="flex items-center gap-1 hover:text-[#0F172A] transition-colors">
                  <Check className="w-3 h-3 text-[#22C55E] stroke-[3.5]" /> No Obligation
                </span>
              </div>

              {/* Google rating trust badge */}
              <div className="flex items-center gap-2 self-start sm:self-auto bg-white border border-[#E2E6EC] rounded-full px-3 py-1 shadow-sm hover:border-[#1D4ED8]/30 transition-colors">
                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-extrabold text-[#0F172A]">Google Rating</span>
                  <span className="text-[10px] font-black text-[#1D4ED8] bg-blue-50 px-1 py-0.2 rounded">4.8</span>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-[#EAB308] text-[#EAB308]" />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
