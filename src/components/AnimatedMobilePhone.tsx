
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
      <div className="w-52 h-[410px] bg-white rounded-3xl border-4 border-gray-300 p-4 shadow-2xl flex flex-col items-center justify-center z-10">
        <div className="w-full h-full bg-gradient-to-b from-blue-50 to-indigo-100 rounded-2xl flex flex-col justify-start items-center relative px-1 pt-4 pb-3">
          {/* Logo/icon - moderate size */}
          <div className="flex items-center justify-center mt-3 mb-3">
            <CreditCard className="w-16 h-16 text-indigo-700 drop-shadow-md" />
          </div>
          {/* Balance label */}
          <div className="text-sm text-gray-600 mb-1 font-medium">Account Balance</div>

          {/* Animated Balance Display */}
          <div className="flex flex-col items-center mb-3">
            <div className="text-2xl font-bold text-indigo-900 flex items-center gap-1 leading-none">
              ₹{balance.toLocaleString()}
            </div>
          </div>

          {/* Menu icons - compact in a single row */}
          <div className="flex flex-row justify-center items-end w-full gap-2 mt-auto mb-2">
            {menuOptions.map((option, idx) => {
              const Icon = option.icon;
              return (
                <div key={idx} className="flex items-center justify-center flex-1">
                  <div className="bg-white/80 dark:bg-white/10 rounded-md p-0.5 shadow group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4 text-indigo-700" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* +20,000 below the icon row */}
          <div className="flex flex-col items-center mt-2">
            <span className="text-lg font-bold text-green-600 animate-pulse leading-none">+20,000</span>
            <span className="text-xs text-green-600 mt-0.5 leading-none">added to account</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedMobilePhone;
