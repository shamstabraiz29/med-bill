import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";

interface PageContainerProps {
  title: string;
}

export default function PageContainer({ title }: PageContainerProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center pt-32 pb-24 px-4 bg-transparent relative overflow-hidden">

      
      <div className="relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-ping" />
          <span className="w-1.5 h-1.5 absolute rounded-full bg-[#1D4ED8]" />
          BellMedEx Service Portal
        </div>
        
        {/* Page Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0F172A] tracking-[-0.02em] leading-[1.18] mb-6">
          {title}
        </h1>
        
        {/* Info Box */}
        <div className="bg-white border border-[#E2E6EC] rounded-2xl p-6 shadow-[0_4px_24px_rgba(29,78,216,0.06)] mb-10 max-w-lg">
          <div className="flex items-start gap-3.5 text-left">
            <div className="p-2 bg-blue-50 rounded-lg text-[#1D4ED8] mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#0F172A] mb-1">
                Demo Environment
              </p>
              <p className="text-xs text-[#475569] leading-[1.6]">
                You are viewing the stub page for <strong>{title}</strong>. All billing, software integration, and provider credentialing routes are configured successfully.
              </p>
            </div>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold px-6 py-3.5 rounded-xl transition duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Homepage
          </Link>
          <Link
            href="/schedule-a-demo"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#1D4ED8] hover:bg-[#1E3A8A] text-white font-semibold px-6 py-3.5 rounded-2xl transition duration-200 shadow-md shadow-blue-900/10 tracking-wide"
          >
            Schedule a Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
