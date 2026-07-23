"use client";

import React from "react";

export default function GlobalBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#F5F7FA]"
      aria-hidden="true"
    >
      {/* ── 1. AMBIENT MESH GRADIENTS (Static Orbs) ── */}
      {/* Primary Blue Glow - Top Right */}
      <div
        className="absolute rounded-full opacity-40 mix-blend-multiply filter blur-[120px]"
        style={{
          width: "min(800px, 80vw)",
          height: "min(800px, 80vw)",
          top: "-10%",
          right: "-10%",
          background: "radial-gradient(circle, rgba(29,78,216,0.18) 0%, rgba(96,165,250,0.08) 50%, transparent 70%)",
        }}
      />

      {/* Accent Blue Glow - Top Left */}
      <div
        className="absolute rounded-full opacity-35 mix-blend-multiply filter blur-[100px]"
        style={{
          width: "min(600px, 60vw)",
          height: "min(600px, 60vw)",
          top: "10%",
          left: "-10%",
          background: "radial-gradient(circle, rgba(96,165,250,0.15) 0%, rgba(129,140,248,0.06) 60%, transparent 80%)",
        }}
      />

      {/* Soft Indigo/Purple Glow - Bottom Center */}
      <div
        className="absolute rounded-full opacity-30 mix-blend-multiply filter blur-[140px]"
        style={{
          width: "min(900px, 90vw)",
          height: "min(900px, 90vw)",
          bottom: "-25%",
          left: "15%",
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(29,78,216,0.06) 50%, transparent 70%)",
        }}
      />

      {/* ── 2. MICRO DOT PATTERN SYSTEM ── */}
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(29,78,216,0.08) 1.2px, transparent 1.2px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── 3. ARCHITECTURAL LAYOUT GUIDE LINES ── */}
      {/* Horizontal guide lines */}
      <div className="absolute top-[18%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1D4ED8]/10 to-transparent" />
      <div className="absolute top-[68%] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1D4ED8]/5 to-transparent" />
      
      {/* Vertical guide lines */}
      <div className="absolute left-[15%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#1D4ED8]/5 to-transparent" />
      <div className="absolute left-[85%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#1D4ED8]/10 to-transparent" />

      {/* ── 4. ABSTRACT SVG GRAPH WAVEFORMS ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.08 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0" />
            <stop offset="50%" stopColor="#60A5FA" stopOpacity="1" />
            <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wave-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
            <stop offset="30%" stopColor="#1D4ED8" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#818CF8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Soft Fluid Wave 1 */}
        <path
          d="M -100 250 C 300 150, 500 350, 900 200 C 1300 50, 1500 400, 1900 280"
          fill="none"
          stroke="url(#wave-grad-1)"
          strokeWidth="2.5"
        />

        {/* Soft Fluid Wave 2 */}
        <path
          d="M -100 480 C 250 550, 600 350, 1000 500 C 1400 650, 1600 400, 1900 450"
          fill="none"
          stroke="url(#wave-grad-2)"
          strokeWidth="1.5"
          strokeDasharray="4 8"
        />
      </svg>

      {/* ── 5. GEOMETRIC INTERSECTION CROSSHAIRS ── */}
      {[
        { top: "18%", left: "15%" },
        { top: "18%", left: "85%" },
        { top: "68%", left: "15%" },
        { top: "68%", left: "85%" },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute flex items-center justify-center"
          style={{
            top: pos.top,
            left: pos.left,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="absolute w-3 h-px bg-[#1D4ED8]/30" />
          <div className="absolute h-3 w-px bg-[#1D4ED8]/30" />
          <div className="w-1.5 h-1.5 rounded-full border border-[#1D4ED8]/40 bg-white" />
        </div>
      ))}

      {/* ── 6. CLINICAL "+" ACCENTS (Medical Focus) ── */}
      {[
        { top: "12%", left: "8%",   size: "16px", opacity: 0.2 },
        { top: "42%", right: "22%", size: "18px", opacity: 0.15 },
        { bottom: "16%", left: "25%", size: "14px", opacity: 0.12 },
        { bottom: "35%", right: "12%", size: "15px", opacity: 0.18 },
      ].map((pos, i) => (
        <div
          key={i}
          className="absolute font-light select-none pointer-events-none"
          style={{
            top: pos.top,
            right: pos.right,
            bottom: pos.bottom,
            left: pos.left,
            fontSize: pos.size,
            color: "#1D4ED8",
            opacity: pos.opacity,
            lineHeight: 1,
          }}
        >
          +
        </div>
      ))}

      {/* ── 7. SPARKLING LIGHT EMITTERS (Static Accents) ── */}
      {[
        { top: "25%", left: "20%",  size: "12px", color: "#1D4ED8" },
        { bottom: "30%", right: "18%", size: "10px", color: "#60A5FA" },
        { top: "60%", left: "55%",  size: "10px", color: "#1D4ED8" },
      ].map((s, i) => (
        <div
          key={i}
          className="absolute opacity-30"
          style={{
            top: s.top,
            bottom: s.bottom,
            left: s.left,
            right: s.right,
            width: s.size,
            height: s.size,
            background: s.color,
            filter: "blur(0.5px)",
            clipPath:
              "polygon(50% 0%, 63% 37%, 100% 50%, 63% 63%, 50% 100%, 37% 63%, 0% 50%, 37% 37%)",
          }}
        />
      ))}
    </div>
  );
}
