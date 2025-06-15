
import React from "react";
import { Home, Clock, CreditCard, Shield, Zap } from "lucide-react";

const menuOptions = [
  { icon: <Home className="w-8 h-8 md:w-10 md:h-10" />, label: "Home" },
  { icon: <Clock className="w-8 h-8 md:w-10 md:h-10" />, label: "Loans" },
  { icon: <CreditCard className="w-8 h-8 md:w-10 md:h-10" />, label: "Cards" },
  { icon: <Shield className="w-8 h-8 md:w-10 md:h-10" />, label: "Security" },
  { icon: <Zap className="w-8 h-8 md:w-10 md:h-10" />, label: "QuickPay" },
];

const HeroMenuOptions = () => (
  <nav className="flex justify-center gap-6 md:gap-10 mt-2 mb-1 z-20">
    {menuOptions.map((item, idx) => (
      <div key={idx} className="flex flex-col items-center group">
        <div className="bg-white/70 dark:bg-white/10 rounded-2xl p-2 shadow-md mb-1 hover-scale transition">
          {item.icon}
        </div>
        <span className="text-xs md:text-sm text-white/80 font-medium group-hover:text-indigo-200 transition">{item.label}</span>
      </div>
    ))}
  </nav>
);

export default HeroMenuOptions;
