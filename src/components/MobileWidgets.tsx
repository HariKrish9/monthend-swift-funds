
import React from "react";
import { Gift, CreditCard, House, ShoppingCart, Globe } from "lucide-react";

const widgets = [
  {
    title: "Instant Credit",
    content: "₹20,000 in 2 mins",
    icon: CreditCard,
    color: "widget-glossy",
  },
  {
    title: "Bank-Level Security",
    content: "256-bit encrypted",
    icon: Gift,
    color: "widget-glossy",
  },
  {
    title: "No Paperwork",
    content: "100% digital process",
    icon: Globe,
    color: "widget-glossy",
  },
  {
    title: "Your Salary, Your Control",
    content: "Auto-repay at payday",
    icon: House,
    color: "widget-glossy",
  },
  {
    title: "Low Interest",
    content: "2% per month",
    icon: ShoppingCart,
    color: "widget-glossy",
  },
];

export const MobileWidgets = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-[390px] mx-auto">
      {widgets.map((widget, index) => (
        <div
          key={index}
          className={`p-4 md:p-5 flex items-center gap-4 ${widget.color} hover:shadow-lg transition-transform animate-fade-in-up hover:-translate-y-1`}
          style={{ animationDelay: `${index * 80}ms` }}
        >
          <div className="p-2.5 bg-indigo-50/80 rounded-full border border-white/70 shadow-sm">
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
