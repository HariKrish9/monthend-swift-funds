
import React, { useState, useEffect } from 'react';
import { CreditCard } from "lucide-react";

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
        <div className="w-full h-full bg-gradient-to-b from-blue-50 to-indigo-100 rounded-2xl flex flex-col justify-center items-center relative">
          {/* Phone main icon - bigger */}
          <div className="flex items-center justify-center mb-4">
            <CreditCard className="w-12 h-12 text-indigo-700 drop-shadow-md" />
          </div>
          <div className="text-xs text-gray-600 mb-2">Account Balance</div>
          {/* Animated Balance Display with "+20,000" */}
          <div className="flex flex-col items-center">
            <div className="flex items-baseline gap-2">
              <div className="text-2xl font-bold text-indigo-900">₹{balance.toLocaleString()}</div>
              <span className="text-green-600 text-lg font-semibold animate-pulse">+20,000</span>
            </div>
            <div className="text-xs text-green-600 mt-1">Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedMobilePhone;
