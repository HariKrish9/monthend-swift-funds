
import React from 'react';

export const AbstractShapes = () => {
  return (
    <>
      {/* Abstract geometric shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-indigo-200/30 to-purple-300/30 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-blue-200/40 to-cyan-300/40 transform rotate-45 blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 left-10 w-16 h-16 bg-gradient-to-br from-pink-200/30 to-rose-300/30 rounded-full blur-md animate-bounce-subtle" style={{ animationDelay: '2s' }}></div>
      
      {/* Slice-like curved elements */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M 0 100 Q 50 50 100 100 T 200 100 V 0 Z" fill="url(#gradient1)" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Fi-like grid pattern */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-5">
        <div className="grid grid-cols-12 gap-2 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="bg-indigo-600 rounded-sm animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
          ))}
        </div>
      </div>
    </>
  );
};
