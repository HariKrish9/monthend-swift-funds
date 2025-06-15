
import React, { useState, useEffect } from 'react';

const AnimatedMobilePhone = () => {
  const [balance, setBalance] = useState(0);
  const targetBalance = 25000;

  useEffect(() => {
    const duration = 3000;
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
    <div className="absolute top-16 right-8 opacity-10 pointer-events-none animate-float">
      <div className="w-32 h-60 bg-white rounded-3xl border-4 border-gray-300 p-3 shadow-2xl">
        <div className="w-full h-full bg-gradient-to-b from-blue-50 to-indigo-100 rounded-2xl flex flex-col justify-center items-center">
          <div className="text-xs text-gray-600 mb-2">Account Balance</div>
          <div className="text-lg font-bold text-indigo-900">
            ₹{balance.toLocaleString()}
          </div>
          <div className="text-xs text-green-600 mt-1">Available</div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedMobilePhone;
