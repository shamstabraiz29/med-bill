"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  FileText, Binary, TrendingUp, ClipboardCheck, Network, Award, Search, 
  Laptop, Zap, Activity, Calendar, 
  Building2, Stethoscope, Building, ShieldAlert, UserCheck, HeartPulse,
  BookOpen, Briefcase, Download, Star, ChevronDown, Menu, X, ArrowRight, LucideIcon
} from "lucide-react";
import AppButton from "@/components/ui/AppButton";

interface SubNavItem {
  name: string;
  desc?: string;
  href: string;
  icon?: LucideIcon;
}

interface NavItem {
  name: string;
  href?: string;
  dropdownKey?: string;
  widthClass?: string;
  cols?: number;
  items?: SubNavItem[];
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationConfig: NavItem[] = [
    {
      name: "Services",
      dropdownKey: "services",
      widthClass: "w-[580px]",
      cols: 2,
      items: [
        { name: "Medical Billing", desc: "Expert claims submission and tracking.", href: "/medical-billing", icon: FileText },
        { name: "Medical Coding", desc: "ICD-10, ICD-11 & CPT compliance verification.", href: "/medical-coding", icon: Binary },
        { name: "RCM Optimization", desc: "End-to-end RCM to boost collections.", href: "/revenue-cycle-management-rcm", icon: TrendingUp },
        { name: "Billing Audit", desc: "Detailed audits to recover lost revenue.", href: "/medical-billing-audit", icon: ClipboardCheck },
        { name: "Clearinghouse", desc: "Direct electronic claim submission.", href: "/clearinghouse", icon: Network },
        { name: "Credentialing", desc: "Fast-track network enrollment.", href: "/provider-credentialing", icon: Award },
        { name: "Healthcare SEO", desc: "Grow your patient base digitally.", href: "/healthcare-seo", icon: Search },
      ],
    },
    {
      name: "Software",
      dropdownKey: "software",
      widthClass: "w-[420px]",
      cols: 1,
      items: [
        { name: "Billing Software", desc: "Next-gen claims engine for modern practices.", href: "/medical-billing-software", icon: Laptop },
        { name: "FusionEDI", desc: "Seamless gateway linking providers & payers.", href: "/fusionedi-clearinghouse", icon: Zap },
        { name: "Free EHR", desc: "Intuitive clinical charts built for doctors.", href: "/electronic-health-records-ehr", icon: Activity },
        { name: "Free PMS", desc: "Schedule appointments and track metrics.", href: "/practice-management-software-pms", icon: Calendar },
      ],
    },
    {
      name: "For You",
      dropdownKey: "forYou",
      widthClass: "w-[540px]",
      cols: 2,
      items: [
        { name: "Outsource Billing", desc: "Cost-effective end-to-end billing support.", href: "/outsource-medical-billing", icon: Building2 },
        { name: "Small Practices", desc: "Optimize workflow and collection rates.", href: "/small-practices", icon: Stethoscope },
        { name: "Large Practices", desc: "Scalable solutions for high volumes.", href: "/large-practices", icon: Building },
        { name: "Denial Management", desc: "Prevent, appeal, and recover denied claims.", href: "/denial-management-services", icon: ShieldAlert },
        { name: "Physician Billing", desc: "Dedicated solutions for physicians.", href: "/physician-billing-services", icon: UserCheck },
        { name: "Hospital Billing", desc: "High-volume hospital coding & billing.", href: "/hospital-billing-services", icon: HeartPulse },
      ],
    },
    {
      name: "Pricing",
      href: "/medical-billing-pricing-bellmedex",
    },
    {
      name: "Resources",
      dropdownKey: "resources",
      widthClass: "w-[360px]",
      cols: 1,
      items: [
        { name: "Blogs", desc: "Industry insights and billing best practices.", href: "/blogs", icon: BookOpen },
        { name: "Careers", desc: "Join our team of billing experts.", href: "/bellmedex-careers", icon: Briefcase },
        { name: "eBooks", desc: "Comprehensive guides to RCM and compliance.", href: "/ebooks", icon: Download },
        { name: "Testimonials", desc: "What our clients say about BellMedEx.", href: "/bellmedex-client-testimonials", icon: Star },
      ],
    },
  ];

  const handleDropdown = (menu: string) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 lg:px-8">
      <header className="mx-auto w-full bg-white max-w-7xl border border-slate-200/50 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-2xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-11 h-11 bg-[#2A2374] rounded-xl text-white shadow-sm transition-colors duration-200 group-hover:bg-[#3b3a80]">
                <Activity className="w-6 h-6 animate-pulse" />
                <span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-[#1f1e4a] tracking-tight leading-none group-hover:text-blue-600 transition-colors">
                  Bell<span className="text-blue-600">Med</span>Ex
                </span>
                <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mt-1">
                  RCM SERVICES
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigationConfig.map((item) => {
                if (item.items) {
                  return (
                    <div key={item.name} className="relative group py-2 px-1">
                      <button 
                        className="flex items-center gap-1 px-3 py-2 text-[14px] font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-50/80 rounded-xl transition-all cursor-pointer"
                        onClick={() => item.dropdownKey && handleDropdown(item.dropdownKey)}
                      >
                        {item.name}
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform duration-200 group-hover:rotate-180" />
                      </button>
                      
                      {/* Megamenu Dropdown Container */}
                      <div className={`absolute left-1/2 -translate-x-1/2 mt-3 ${item.widthClass || "w-56"} rounded-2xl bg-white shadow-[0_20px_50px_rgba(45,44,112,0.12)] border border-slate-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-3 group-hover:translate-y-0 z-50 overflow-hidden`}>
                        {/* Pointer Arrow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-t border-l border-slate-200/40" />
                        
                        <div className={`relative p-3 bg-white ${item.cols === 2 ? 'grid grid-cols-2 gap-2' : 'flex flex-col gap-1.5'}`}>
                          {item.items.map((subItem) => {
                            const Icon = subItem.icon;
                            return (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="group/item flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50/80 transition-all duration-200 border border-transparent hover:border-slate-100/60"
                              >
                                {Icon && (
                                  <div className="p-2 bg-slate-50 text-slate-600 rounded-lg group-hover/item:bg-blue-50 group-hover/item:text-blue-600 transition-colors">
                                    <Icon className="w-4.5 h-4.5" />
                                  </div>
                                )}
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-semibold text-slate-800 group-hover/item:text-blue-600 transition-colors flex items-center gap-1">
                                    {subItem.name}
                                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                                  </p>
                                  {subItem.desc && (
                                    <p className="text-xs text-slate-400 leading-normal mt-0.5 group-hover/item:text-slate-500">
                                      {subItem.desc}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link 
                    key={item.name}
                    href={item.href || "#"} 
                    className="px-3.5 py-2 text-[14px] font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-50/80 rounded-xl transition-all"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Action CTA Button */}
            <div className="hidden lg:flex items-center">
              <AppButton
                href="/schedule-a-demo"
                variant="primary"
                size="md"
                showArrow
              >
                Talk To An Expert
              </AppButton>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-slate-100 focus:outline-none transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white rounded-b-2xl max-h-[80vh] overflow-y-auto shadow-2xl">
            <div className="px-5 pt-2 pb-6 space-y-3">
              {navigationConfig.map((item) => {
                if (item.items) {
                  const isDropdownOpen = activeDropdown === item.dropdownKey;
                  return (
                    <div key={item.name} className="border-b border-slate-50 pb-2 last:border-0 last:pb-0">
                      <button
                        onClick={() => item.dropdownKey && handleDropdown(item.dropdownKey)}
                        className="flex items-center justify-between w-full px-3 py-2.5 text-base font-bold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors"
                      >
                        {item.name}
                        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-blue-600" : ""}`} />
                      </button>
                      {isDropdownOpen && (
                        <div className="pl-3 pr-2 mt-1 flex flex-col gap-2 border-l border-slate-100 ml-4">
                          {item.items.map((subItem) => {
                            const Icon = subItem.icon;
                            return (
                              <Link
                                key={subItem.name}
                                onClick={() => setIsOpen(false)}
                                href={subItem.href}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all"
                              >
                                {Icon && (
                                  <div className="p-1.5 bg-slate-50 text-slate-500 rounded-md">
                                    <Icon className="w-4 h-4" />
                                  </div>
                                )}
                                <div className="flex flex-col">
                                  <span className="text-sm font-semibold text-slate-800">{subItem.name}</span>
                                  {subItem.desc && <span className="text-xs text-slate-400 font-normal leading-normal">{subItem.desc}</span>}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href || "#"}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2.5 text-base font-bold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors"
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Mobile Call To Action */}
              <div className="pt-4 border-t border-slate-100 px-3">
                <Link
                  href="/schedule-a-demo"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-[#2d2c70] text-white font-bold py-3 rounded-xl hover:bg-[#3b3a80] transition-colors text-center shadow-md shadow-indigo-950/10"
                >
                  Talk To An Expert
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
