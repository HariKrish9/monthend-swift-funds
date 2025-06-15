
import React from 'react';

export const AbstractShapes = () => {
  return (
    <>
      {/* Fi-like dot grid pattern */}
      <div className="absolute inset-0 w-full h-full opacity-[0.03] -z-20" style={{
          backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)',
          backgroundSize: '2rem 2rem'
      }}></div>

      {/* Slice-like curved elements */}
      <div className="absolute -top-1/4 -right-1/4 w-1/2 max-w-2xl h-1/2 opacity-10 -z-10 md:opacity-20 transform-gpu" >
        <svg viewBox="0 0 200 200" className="w-full h-full animate-float">
          <path d="M 0 200 C 50 100, 150 100, 200 200 L 200 0 L 0 0 Z" fill="url(#gradient1)" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="absolute -bottom-1/4 -left-1/4 w-1/2 max-w-2xl h-1/2 opacity-5 -z-10 md:opacity-10 transform-gpu rotate-180">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-float" style={{ animationDelay: '1s' }}>
          <path d="M 0 200 C 50 100, 150 100, 200 200 L 200 0 L 0 0 Z" fill="url(#gradient2)" />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Abstract geometric blobs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-indigo-200/30 to-purple-300/30 rounded-full blur-2xl animate-bounce-subtle -z-10 opacity-50"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-200/40 to-cyan-300/40 transform rotate-45 blur-xl animate-bounce-subtle -z-10 opacity-50" style={{ animationDelay: '1s' }}></div>
    </>
  );
};
