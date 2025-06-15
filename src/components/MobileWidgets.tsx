
import React from "react";
import { Zap, Percent, RefreshCw, ShieldCheck, Globe, Smartphone } from "lucide-react";

// Minimalistic, modern, glossy (glass effect + subtle border), compact
const widgets = [
  {
    title: "Instant Credit",
    content: "Up to ₹20,000",
    icon: Zap,
    color: "bg-white/80 text-indigo-700 border border-indigo-200/60",
  },
  {
    title: "Low Interest",
    content: "Only 2% per month",
    icon: Percent,
    color: "bg-white/80 text-indigo-700 border border-green-200/60",
  },
  {
    title: "Auto Repay",
    content: "From your salary",
    icon: RefreshCw,
    color: "bg-white/80 text-indigo-700 border border-blue-200/60",
  },
  {
    title: "Secure",
    content: "Bank-level security",
    icon: ShieldCheck,
    color: "bg-white/80 text-indigo-700 border border-violet-200/50",
  },
  {
    title: "100% Digital",
    content: "No paperwork",
    icon: Smartphone,
    color: "bg-white/80 text-indigo-700 border border-fuchsia-200/50",
  },
  {
    title: "All Over India",
    content: "PAN verified",
    icon: Globe,
    color: "bg-white/80 text-indigo-700 border border-sky-200/60",
  },
];

export const MobileWidgets = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-[390px] mx-auto">
      {widgets.map((widget, index) => (
        <div
          key={index}
          className={`p-5 rounded-2xl flex items-center gap-4 shadow-md ${widget.color} hover:shadow-lg transition-transform backdrop-blur-xl animate-fade-in-up hover:-translate-y-1`}
          style={{ animationDelay: `${index * 70}ms` }}
        >
          <div className="p-2.5 bg-indigo-50/50 rounded-full border border-white/70 shadow-sm">
            <widget.icon className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-md">{widget.title}</h4>
            <p className="text-xs opacity-80">{widget.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
