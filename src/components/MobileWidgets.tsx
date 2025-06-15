
import React from 'react';
import { Zap, Percent, RefreshCw } from 'lucide-react';

const widgets = [
  {
    title: "Instant Credit",
    content: "Up to ₹20,000",
    icon: Zap,
    color: "bg-indigo-100 text-indigo-800",
  },
  {
    title: "Low Interest",
    content: "Only 2% per month",
    icon: Percent,
    color: "bg-green-100 text-green-800",
  },
  {
    title: "Auto Repay",
    content: "From your salary",
    icon: RefreshCw,
    color: "bg-blue-100 text-blue-800",
  },
];

export const MobileWidgets = () => {
  return (
    <div className="w-full max-w-sm mx-auto space-y-4">
      {widgets.map((widget, index) => (
        <div
          key={index}
          className={`p-6 rounded-2xl flex items-center gap-6 ${widget.color} shadow-sm animate-fade-in-up transition-transform duration-300 hover:-translate-y-1`}
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <div className="p-3 bg-white/60 rounded-full">
            <widget.icon className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-lg">{widget.title}</h4>
            <p className="text-sm opacity-90">{widget.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
