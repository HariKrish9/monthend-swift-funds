
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
      <div className="w-40 h-80 bg-white rounded-3xl border-4 border-gray-300 p-4 shadow-2xl flex flex-col items-center justify-center z-10">
        <div className="w-full h-full bg-gradient-to-b from-blue-50 to-indigo-100 rounded-2xl flex flex-col justify-start items-center relative">
          {/* Phone icon - larger */}
          <div className="flex items-center justify-center mt-6 mb-4">
            <CreditCard className="w-16 h-16 text-indigo-700 drop-shadow-md" />
          </div>
          {/* Balance */}
          <div className="text-xs text-gray-600 mb-2">Account Balance</div>

          {/* Animated Balance Display */}
          <div className="flex flex-col items-center mb-2">
            <div className="text-3xl font-bold text-indigo-900">₹{balance.toLocaleString()}</div>
            <div className="flex flex-col items-center mt-2">
              <span className="text-green-600 text-lg font-semibold animate-pulse">
                +20,000
              </span>
              <span className="text-xs text-green-600 mt-0.5">
                added to account
              </span>
            </div>
          </div>
          {/* Menu icons inside the phone */}
          <div className="mt-5 flex justify-center gap-4 w-full">
            {menuOptions.map((option, idx) => {
              const Icon = option.icon;
              return (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="bg-white/80 dark:bg-white/10 rounded-2xl p-2 shadow group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-indigo-700" />
                  </div>
                  <span className="text-[11px] md:text-xs text-indigo-800/80 mt-1 font-medium group-hover:text-indigo-400 transition">
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

