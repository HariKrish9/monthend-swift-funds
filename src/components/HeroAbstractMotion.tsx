
import React from "react";

/**
 * Minimal, modern abstract animated shapes for the hero section.
 */
const HeroAbstractMotion = () => {
  return (
    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-4xl h-60 pointer-events-none select-none z-10">
      {/* Floating gradient orb */}
      <div className="absolute left-12 top-10 w-32 h-32 bg-gradient-to-br from-indigo-400/40 via-purple-300/50 to-blue-100/30 rounded-full blur-2xl animate-float" style={{animationDuration: "8s"}} />

      {/* Blurred blue pill/stripe */}
      <div className="absolute right-20 top-2 w-44 h-5 rounded-full bg-gradient-to-r from-indigo-200/40 via-blue-200/20 to-white/0 blur-lg opacity-70 animate-bounce-subtle" style={{animationDuration: "6s"}}/>

      {/* Pulsing tiny dot */}
      <div className="absolute left-3/4 top-16 w-3 h-3 bg-indigo-500 rounded-full shadow-lg opacity-60 animate-pulse" />

      {/* Animated vertical line */}
      <svg className="absolute left-1/3 top-0 w-1 h-36 opacity-40 animate-fade-in-delay-200" viewBox="0 0 4 144" fill="none">
        <rect x="0" y="0" width="4" height="144" rx="2" fill="url(#vertLineGradient)" />
        <defs>
          <linearGradient id="vertLineGradient" x1="2" y1="0" x2="2" y2="144" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7c3aed" stopOpacity="0.25"/>
            <stop offset="0.6" stopColor="#6366f1" stopOpacity="0.09"/>
            <stop offset="1" stopColor="#818cf8" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>

      {/* Small floating orb right */}
      <div className="absolute right-14 top-24 w-8 h-8 bg-indigo-300/80 rounded-full blur-md animate-float" style={{animationDuration: "9s", animationDelay: "1.7s"}} />

      {/* Diagonal minimalist line (svg) */}
      <svg className="absolute left-40 top-28 w-32 h-4 opacity-25 animate-slide-in-right" viewBox="0 0 128 12" fill="none">
        <rect x="0" y="4" width="128" height="4" rx="2" fill="url(#horizLineGradient)" />
        <defs>
          <linearGradient id="horizLineGradient" x1="0" y1="6" x2="128" y2="6" gradientUnits="userSpaceOnUse">
            <stop stopColor="#c7d2fe" stopOpacity="0.4"/>
            <stop offset="1" stopColor="#3b82f6" stopOpacity="0.08"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default HeroAbstractMotion;
