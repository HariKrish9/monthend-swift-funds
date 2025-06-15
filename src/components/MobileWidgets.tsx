import React from "react";
import { Gift, CreditCard, House, ShoppingCart, Globe } from "lucide-react";

const widgets = [
  {
    title: "Instant Credit",
    content: "₹20,000 in 2 mins",
    icon: CreditCard,
  },
  {
    title: "No Paperwork",
    content: "100% digital process",
    icon: Globe,
  },
  {
    title: "Salary-Link Repay",
    content: "Auto-repay at payday",
    icon: House,
  },
  {
    title: "Low Rate",
    content: "2% per month",
    icon: ShoppingCart,
  },
];

export const MobileWidgets = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-[390px] mx-auto">
      {widgets.map((widget, index) => (
        <div
          key={index}
          className="p-4 md:p-5 flex items-center gap-4 widget-glossy hover:shadow-lg transition-transform animate-fade-in-up hover:-translate-y-1"
          style={{ animationDelay: `${index * 80}ms` }}
        >
          <div className="p-2.5 bg-indigo-50 bg-opacity-80 rounded-full border border-white/70 shadow-sm">
            <widget.icon className="w-6 h-6 text-indigo-600" />
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
