
import React from "react";

export const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  desc: string;
}> = ({ icon, title, desc }) => (
  <div className="bg-white rounded-xl shadow-lg border border-indigo-100 p-8 flex flex-col items-center text-center h-full hover:shadow-xl transition-all">
    {icon}
    <div className="font-bold text-indigo-900 text-lg mt-2">{title}</div>
    <div className="text-gray-600 text-sm mt-1">{desc}</div>
  </div>
);
