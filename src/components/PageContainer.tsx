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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/80 text-indigo-700 text-xs font-semibold mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
          <span className="w-1.5 h-1.5 absolute rounded-full bg-blue-500" />
          BellMedEx Service Portal
        </div>
        
        {/* Page Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1f1e4a] tracking-tight mb-6">
          {title}
        </h1>
        
        {/* Info Box */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-10 max-w-lg">
          <div className="flex items-start gap-3.5 text-left">
            <div className="p-2 bg-blue-50 rounded-lg text-blue-600 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800 mb-1">
                Demo Environment
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
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
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#2d2c70] hover:bg-[#3b3a80] text-white font-semibold px-6 py-3.5 rounded-xl transition duration-200 shadow-md shadow-indigo-900/10"
          >
            Schedule a Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
