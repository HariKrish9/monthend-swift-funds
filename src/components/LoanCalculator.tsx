
import React, { useState } from "react";

const MIN_LOAN = 2000;
const MAX_LOAN = 20000;
const INTEREST_RATE = 0.02;
const TERMS = [30, 60, 90];

function formatINR(x: number) {
  return "₹" + x.toLocaleString("en-IN", { maximumFractionDigits: 0 });
}

export const LoanCalculator: React.FC = () => {
  const [amount, setAmount] = useState(8000);
  const [term, setTerm] = useState(30);

  const interest = amount * INTEREST_RATE * (term / 30);
  const totalRepay = amount + interest;

  return (
    <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 flex flex-col gap-12 md:flex-row items-center justify-center animate-scale-in border border-indigo-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      
      <div className="flex-1 px-4 min-w-[320px]">
        <div className="mb-8">
          <label className="block text-xl font-bold text-indigo-800 mb-4">Loan amount</label>
          <div className="relative">
            <input
              type="range"
              min={MIN_LOAN}
              max={MAX_LOAN}
              step={100}
              value={amount}
              onChange={e => setAmount(Number(e.target.value))}
              className="w-full h-3 bg-indigo-100 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #4f46e5 0%, #4f46e5 ${((amount - MIN_LOAN) / (MAX_LOAN - MIN_LOAN)) * 100}%, #e0e7ff ${((amount - MIN_LOAN) / (MAX_LOAN - MIN_LOAN)) * 100}%, #e0e7ff 100%)`
              }}
            />
          </div>
          <div className="flex justify-between mt-3 text-sm text-gray-500 font-medium">
            <span>{formatINR(MIN_LOAN)}</span>
            <span>{formatINR(MAX_LOAN)}</span>
          </div>
          <div className="text-3xl font-bold text-indigo-700 mt-4 animate-pulse">
            {formatINR(amount)}
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-xl font-bold text-indigo-800 mb-4">Repayment period</label>
          <div className="flex gap-4">
            {TERMS.map(days => (
              <button
                type="button"
                key={days}
                className={`px-6 py-3 rounded-xl font-bold border-2 transition-all duration-200 flex-1 hover-scale
                  ${
                    term === days
                      ? "bg-indigo-700 text-white border-indigo-700 shadow-lg"
                      : "bg-gray-50 text-indigo-800 border-indigo-200 hover:bg-indigo-50 hover:border-indigo-300"
                  }
                `}
                onClick={() => setTerm(days)}
              >
                {days} days
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex-1 px-4 min-w-[320px] mt-8 md:mt-0">
        <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 rounded-2xl border-2 border-indigo-100 px-8 py-8 shadow-lg text-indigo-900 relative overflow-hidden hover-lift">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-200/30 to-blue-200/30 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <h4 className="font-bold text-2xl mb-6 text-indigo-800">Loan Estimate</h4>
            <ul className="mb-6 space-y-4">
              <li className="flex justify-between items-center py-2 border-b border-indigo-200">
                <span className="font-semibold text-gray-700">Loan Amount:</span>
                <span className="font-bold text-lg">{formatINR(amount)}</span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-indigo-200">
                <span className="font-semibold text-gray-700">Interest @2%/mo:</span>
                <span className="font-bold text-lg text-orange-600">{formatINR(interest)}</span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-indigo-200">
                <span className="font-semibold text-gray-700">Repayment date:</span>
                <span className="font-bold text-lg">In {term} days</span>
              </li>
            </ul>
            <div className="bg-white rounded-xl p-4 border border-indigo-200 shadow-sm">
              <div className="text-2xl font-extrabold text-indigo-800 mb-2">
                Total to Repay: <span className="text-green-600">{formatINR(totalRepay)}</span>
              </div>
              <div className="text-sm text-gray-600 leading-relaxed">
                Amount is auto-debited when salary hits your account.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
