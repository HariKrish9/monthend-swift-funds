
import React from "react";

export const ModernAbstracts = () => {
  return (
    <>
      {/* Slice-like curved elements */}
      <div className="absolute top-20 left-0 w-96 h-96 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M 20 100 Q 100 20, 180 100 Q 100 180, 20 100"
            fill="url(#sliceGradient1)"
            className="animate-pulse"
          />
          <defs>
            <linearGradient id="sliceGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Fi-style geometric shapes */}
      <div className="absolute bottom-32 right-10 w-64 h-64 opacity-10 pointer-events-none rotate-45">
        <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-500 rounded-3xl animate-bounce-subtle" />
      </div>

      {/* Floating circles */}
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-15 animate-float" />
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }} />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Curved lines */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-300 to-transparent opacity-30" />
      <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-300 to-transparent opacity-20" />
    </>
  );
};
