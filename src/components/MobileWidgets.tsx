
import React from 'react';

const screens = [
  {
    title: "Quick Loan",
    content: (
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-2xl text-white">
        <div className="text-2xl font-bold mb-2">₹8,000</div>
        <div className="text-indigo-100 text-sm mb-4">Available instantly</div>
        <div className="bg-white/20 rounded-full px-4 py-2 text-sm">Get Now →</div>
      </div>
    )
  },
  {
    title: "Repayment",
    content: (
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl text-white">
        <div className="text-sm text-green-100 mb-2">Next payment</div>
        <div className="text-2xl font-bold mb-2">₹8,160</div>
        <div className="text-green-100 text-sm">Auto-debit in 15 days</div>
      </div>
    )
  },
  {
    title: "Dashboard",
    content: (
      <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-6 rounded-2xl text-white">
        <div className="text-sm text-blue-100 mb-2">Credit Score</div>
        <div className="text-2xl font-bold mb-2">750</div>
        <div className="text-blue-100 text-sm">Excellent</div>
      </div>
    )
  }
];

export const MobileWidgets = () => {
  return (
    <div className="relative w-80 h-96 mx-auto">
      {screens.map((screen, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-gray-900 rounded-3xl p-4 shadow-2xl transform transition-all duration-1000 ease-in-out ${
            index === 0 ? 'z-30 rotate-0' : 
            index === 1 ? 'z-20 rotate-6 translate-x-4' : 
            'z-10 rotate-12 translate-x-8'
          }`}
          style={{
            animation: `rotate-phones 9s infinite ${index * 3}s`
          }}
        >
          <div className="bg-black rounded-2xl h-full p-1">
            <div className="bg-white rounded-xl h-full p-4 flex flex-col">
              <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
              {screen.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
