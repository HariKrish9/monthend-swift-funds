
import React from "react";

export const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  desc: string;
}> = ({ icon, title, desc }) => (
  <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 p-10 flex flex-col items-center text-center h-full hover-lift group relative overflow-hidden">
    {/* Background gradient on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
    
    {/* Content */}
    <div className="relative z-10 flex flex-col items-center">
      <div className="mb-6 p-4 bg-indigo-100 rounded-2xl group-hover:bg-indigo-200 transition-colors duration-300">
        {icon}
      </div>
      <div className="font-bold text-indigo-900 text-xl mb-4 group-hover:text-indigo-800 transition-colors duration-300">
        {title}
      </div>
      <div className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
        {desc}
      </div>
    </div>
    
    {/* Subtle shimmer effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
  </div>
);
