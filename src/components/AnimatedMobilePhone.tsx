
import React, { useState, useEffect } from 'react';
import { Home, Clock, CreditCard, Shield, Zap } from "lucide-react";

// Menu options data for mobile menu (remove third icon, "Cards")
const menuOptions = [
  { icon: Home, label: "Home" },
  { icon: Clock, label: "Loans" },
  // Removed CreditCard ("Cards")
  { icon: Shield, label: "Security" },
  { icon: Zap, label: "QuickPay" },
];

const AnimatedMobilePhone = () => {
  const [balance, setBalance] = useState(0);
  const targetBalance = 20000;

  useEffect(() => {
    const duration = 2000;
    const increment = targetBalance / (duration / 50);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetBalance) {
        setBalance(targetBalance);
        clearInterval(timer);
      } else {
        setBalance(Math.floor(current));
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto flex flex-col items-center mb-6">
      {/* iPhone-like wrapper */}
      <div className="relative flex flex-col items-center">
        {/* iPhone notch */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-2 w-[72px] h-2.5 bg-black/70 rounded-b-xl z-20"
          style={{ boxShadow: "0 0 8px 2px rgba(0,0,0,0.12)" }}
        />
        {/* Phone outer shell */}
        <div className="w-[202px] h-[386px] bg-gradient-to-b from-gray-200 via-white to-gray-100
            rounded-[2.6rem] border-[6px] border-gray-400 shadow-2xl overflow-hidden
            flex flex-col items-center justify-center z-10 relative"
        >
          {/* Simulated iPhone inner screen, inset for bezel */}
          <div className="w-[182px] h-[362px] bg-white rounded-[2.1rem] shadow-inner flex flex-col items-center justify-center px-0 pt-2 pb-2 relative">
            {/* Logo/icon - moderate size */}
            <div className="flex items-center justify-center mt-3 mb-3">
              <CreditCard className="w-16 h-16 text-indigo-700 drop-shadow-md" />
            </div>
            {/* Balance label */}
            <div className="text-sm text-gray-600 mb-1 font-medium">Account Balance</div>
            {/* Animated Balance Display */}
            <div className="flex flex-col items-center mb-1">
              <div className="text-2xl font-bold text-indigo-900 flex items-center gap-1 leading-none">
                ₹{balance.toLocaleString()}
              </div>
            </div>
            {/* +20,000 and label block */}
            <div className="flex flex-col items-center mb-4">
              <span className="text-[1.425rem] font-bold text-green-600 animate-pulse leading-none">+20,000</span>
              <span className="text-sm text-green-600 mt-1 leading-none">added to your account</span>
            </div>
            {/* Menu icons - row clearly inside phone, not near edge */}
            <div className="flex flex-row justify-center items-end w-full gap-3 mt-auto mb-4">
              {menuOptions.map((option, idx) => {
                const Icon = option.icon;
                return (
                  <div key={idx} className="flex items-center justify-center flex-1">
                    <div className="bg-white/80 dark:bg-white/10 rounded-md p-1 shadow group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-indigo-700" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div> {/* End inner screen */}
          {/* iPhone Home Indicator (bottom bar) */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-[52px] h-1 rounded-full bg-gray-400/50" />
        </div>
      </div>
    </div>
  );
};

export default AnimatedMobilePhone;

