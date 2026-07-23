"use client";

import Link from "next/link";
import { 
  Activity, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowUp, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight,
  Shield
} from "lucide-react";

type IconProps = React.SVGProps<SVGSVGElement>;

const FacebookIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const XIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const YoutubeIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const services = [
    { name: "Medical Billing", href: "/medical-billing" },
    { name: "Medical Coding", href: "/medical-coding" },
    { name: "RCM Optimization", href: "/revenue-cycle-management-rcm" },
    { name: "Billing Audit", href: "/medical-billing-audit" },
    { name: "Clearinghouse", href: "/clearinghouse" },
    { name: "Credentialing", href: "/provider-credentialing" },
    { name: "Healthcare SEO", href: "/healthcare-seo" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about-bellmedex" },
    { name: "Schedule a Demo", href: "/schedule-a-demo" },
    { name: "Client Testimonials", href: "/bellmedex-client-testimonials" },
    { name: "Pricing Plans", href: "/medical-billing-pricing-bellmedex" },
    { name: "Careers", href: "/bellmedex-careers" },
    { name: "Contact Us", href: "/contact-bellmedex" },
  ];

  const resources = [
    { name: "Industry Blogs", href: "/blogs" },
    { name: "Free EHR System", href: "/electronic-health-records-ehr" },
    { name: "Free PMS Software", href: "/practice-management-software-pms" },
    { name: "Billing Software", href: "/medical-billing-software" },
    { name: "FusionEDI Gateway", href: "/fusionedi-clearinghouse" },
    { name: "eBooks & Guides", href: "/ebooks" },
  ];

  const socialLinks = [
    { href: "https://facebook.com", label: "Facebook", Icon: FacebookIcon },
    { href: "https://linkedin.com", label: "LinkedIn", Icon: LinkedinIcon },
    { href: "https://x.com", label: "Twitter X", Icon: XIcon },
    { href: "https://instagram.com", label: "Instagram", Icon: InstagramIcon },
    { href: "https://youtube.com", label: "YouTube", Icon: YoutubeIcon },
  ];

  return (
    <footer className="relative z-10 bg-[#0F172A] text-white border-t border-white/10 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* ── 1. MULTI-COLUMN MAIN FOOTER CONTENT ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand & Trust Section (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="inline-flex items-center gap-3 group w-fit">
              <div className="relative flex items-center justify-center w-10 h-10 bg-[#1D4ED8] rounded-xl text-white shadow-sm transition-colors duration-200 group-hover:bg-blue-600">
                <Activity className="w-5 h-5 animate-pulse" />
                <span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-[#22C55E] border-2 border-[#0F172A]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white tracking-[-0.02em] leading-none group-hover:text-blue-400 transition-colors">
                  Bell<span className="text-blue-500">Med</span>Ex
                </span>
                <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mt-1">
                  RCM SERVICES
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Nationwide healthcare revenue cycle management and medical billing provider empowering medical practices and healthcare organizations to maximize collections and streamline billing operations.
            </p>

            {/* Trust Messaging Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/50 text-emerald-400 border border-emerald-500/30 text-xs font-semibold select-none">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                HIPAA Compliant
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-950/50 text-blue-400 border border-blue-500/30 text-xs font-semibold select-none">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                98%+ Clean Claim Rate
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/70 text-slate-300 border border-slate-700/60 text-xs font-semibold select-none">
                <Shield className="w-3.5 h-3.5 text-slate-400" />
                DMCA Protected
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-2 pt-2" aria-label="Social Media Links">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-xl bg-slate-800/80 text-slate-300 hover:bg-[#1D4ED8] hover:text-white transition-all duration-200 hover:-translate-y-0.5 shadow-sm border border-white/10 hover:border-transparent"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[14px] font-medium text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1 group/link"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-500 group-hover/link:text-blue-400 group-hover/link:translate-x-0.5 transition-all" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[14px] font-medium text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1 group/link"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-500 group-hover/link:text-blue-400 group-hover/link:translate-x-0.5 transition-all" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase">
              Resources
            </h4>
            <ul className="flex flex-col gap-2.5">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[14px] font-medium text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1 group/link"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-500 group-hover/link:text-blue-400 group-hover/link:translate-x-0.5 transition-all" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Column (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase">
              Contact Us
            </h4>
            <address className="not-italic flex flex-col gap-3.5 text-xs text-slate-300">
              <a
                href="tel:18005550199"
                className="flex items-start gap-2.5 group hover:text-white transition-colors"
                aria-label="Phone number"
              >
                <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-400 group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors shrink-0 mt-0.5">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold text-white block group-hover:text-blue-400 transition-colors">Phone</span>
                  <span className="text-slate-300">+1 (800) 555-0199</span>
                </div>
              </a>

              <a
                href="mailto:support@bellmedex.com"
                className="flex items-start gap-2.5 group hover:text-white transition-colors"
                aria-label="Email address"
              >
                <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-400 group-hover:bg-[#1D4ED8] group-hover:text-white transition-colors shrink-0 mt-0.5">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold text-white block group-hover:text-blue-400 transition-colors">Email</span>
                  <span className="text-slate-300">support@bellmedex.com</span>
                </div>
              </a>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-md bg-slate-800/80 text-slate-400 shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold text-white block">Office</span>
                  <span className="leading-tight block text-slate-400">100 E Campus View Blvd, Ste 250, Columbus, OH 43235</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-md bg-slate-800/80 text-slate-400 shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold text-white block">Business Hours</span>
                  <span className="text-slate-400">Mon - Fri: 8:00 AM - 7:00 PM EST</span>
                </div>
              </div>
            </address>
          </div>

        </div>

        {/* ── 2. BOTTOM BAR ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p suppressHydrationWarning>© {new Date().getFullYear()} BellMedEx, Inc. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/cookies-policy" className="hover:text-white transition-colors">
              Cookies Policy
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/privacy-web-form" className="hover:text-white transition-colors">
              Privacy Web Form
            </Link>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-[#1D4ED8] text-slate-300 hover:text-white transition-all duration-200 hover:-translate-y-0.5 border border-white/10 hover:border-transparent font-medium cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
