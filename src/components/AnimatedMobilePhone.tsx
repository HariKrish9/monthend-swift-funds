import React, { useState, useEffect } from 'react';
import { Home, Clock, CreditCard, Shield, Zap } from "lucide-react";

// Menu options data for mobile menu
const menuOptions = [
  { icon: Home, label: "Home" },
  { icon: Clock, label: "Loans" },
  { icon: CreditCard, label: "Cards" },
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
      {/* Phone container with increased size */}
      <div className="w-48 h-[370px] bg-white rounded-3xl border-4 border-gray-300 p-4 shadow-2xl flex flex-col items-center justify-center z-10">
        <div className="w-full h-full bg-gradient-to-b from-blue-50 to-indigo-100 rounded-2xl flex flex-col justify-start items-center relative px-1 pt-3 pb-2">
          {/* Logo/icon - keep moderate, not oversized */}
          <div className="flex items-center justify-center mt-3 mb-2">
            <CreditCard className="w-14 h-14 text-indigo-700 drop-shadow-md" />
          </div>
          {/* Balance label */}
          <div className="text-xs text-gray-600 mb-0.5">Account Balance</div>

          {/* Animated Balance Display */}
          <div className="flex flex-col items-center mb-2">
            <div className="text-xl font-bold text-indigo-900 flex items-center gap-1 leading-none">
              ₹{balance.toLocaleString()}
              <span className="text-green-600 text-sm font-semibold animate-pulse leading-none">
                +20,000
              </span>
            </div>
            <span className="text-[10px] text-green-600 mt-0.5 leading-none">
              added to account
            </span>
          </div>

          {/* Menu icons - fit in small row at the bottom, inside the phone */}
          <div className="flex flex-row justify-center items-end w-full gap-[2px] mt-auto mb-2">
            {menuOptions.map((option, idx) => {
              const Icon = option.icon;
              return (
                <div key={idx} className="flex flex-col items-center group flex-1">
                  <div className="bg-white/80 dark:bg-white/10 rounded-lg p-1 shadow group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 text-indigo-700" />
                  </div>
                  <span className="text-[8.7px] text-indigo-800/70 mt-0.5 font-medium group-hover:text-indigo-400 transition text-center leading-tight">
                    {option.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedMobilePhone;
