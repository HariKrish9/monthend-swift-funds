
import React from "react";

export const AbstractShapes = () => {
  return (
    <>
      {/* Soft radial dot grid - FI inspired */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04] -z-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, #8b5cf6 1.5px, transparent 1.5px)",
          backgroundSize: "2.2rem 2.2rem",
        }}
      ></div>

      {/* Minimal slice-inspired curves (top right, bottom left) */}
      <div className="absolute -top-24 -right-24 w-[27vw] h-[23vw] max-w-xl max-h-72 opacity-15 -z-30 transform-gpu">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-float">
          <path
            d="M 0 200 Q 100 100, 200 200 L 200 0 L 0 0 Z"
            fill="url(#gradient1)"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute -bottom-24 -left-24 w-[28vw] h-[25vw] max-w-xl max-h-72 opacity-10 -z-30 transform-gpu rotate-180">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-float" style={{ animationDelay: "1.2s" }}>
          <path
            d="M 0 200 Q 100 100, 200 200 L 200 0 L 0 0 Z"
            fill="url(#gradient2)"
          />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#818cf8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Big gradient orbital blob (center/left) - responsive */}
      <div className="absolute top-[21vh] left-1/3 w-44 h-44 bg-gradient-to-br from-indigo-200/40 to-blue-200/20 rounded-full blur-2xl animate-bounce-subtle z-[-19]"></div>
      {/* Responsive abstract ring - slice inspired */}
      <div className="absolute bottom-[19vw] right-[11vw] w-32 h-32 border-4 border-indigo-200 rounded-full blur-[3px] opacity-30 z-[-18]"></div>
      {/* Small blue shadow orb */}
      <div className="absolute top-[9vh] right-1/5 w-16 h-16 bg-blue-300/40 rounded-full blur-xl -z-30"></div>
      {/* Minimal stripe */}
      <div className="absolute top-[14vw] left-0 right-0 mx-auto w-[16vw] h-1 bg-gradient-to-r from-indigo-200/0 via-indigo-100/65 to-indigo-300/0 blur-[2px] opacity-30 -z-20"></div>
    </>
  );
};
// More than enough responsive abstracts now included!
