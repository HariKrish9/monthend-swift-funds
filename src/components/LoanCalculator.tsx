
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
    <div className="bg-white shadow-xl rounded-xl p-8 flex flex-col gap-8 md:flex-row items-center md:justify-center animate-fade-in">
      <div className="flex-1 px-4 min-w-[280px]">
        <div className="mb-4">
          <label className="block text-lg font-semibold text-indigo-800 mb-2">Loan amount</label>
          <input
            type="range"
            min={MIN_LOAN}
            max={MAX_LOAN}
            step={100}
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
            className="w-full accent-indigo-700"
          />
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>{formatINR(MIN_LOAN)}</span>
            <span>{formatINR(MAX_LOAN)}</span>
          </div>
          <div className="text-xl font-bold text-indigo-700 mt-1">{formatINR(amount)}</div>
        </div>
        <div className="mb-2">
          <label className="block text-lg font-semibold text-indigo-800 mb-2">Repayment period</label>
          <div className="flex gap-4">
            {TERMS.map(days => (
              <button
                type="button"
                key={days}
                className={`px-4 py-2 rounded-lg font-medium border transition-all duration-100
                  ${
                    term === days
                      ? "bg-indigo-700 text-white border-indigo-700 shadow scale-105"
                      : "bg-gray-100 text-indigo-800 border-indigo-200 hover:bg-indigo-100"
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
      <div className="flex-1 px-4 min-w-[260px] mt-8 md:mt-0">
        <div className="bg-indigo-50 rounded-lg border border-indigo-100 px-6 py-6 shadow-md text-indigo-900">
          <h4 className="font-bold text-lg mb-2">Estimate</h4>
          <ul className="mb-4 space-y-1">
            <li>
              <span className="inline-block font-medium w-32">Loan Amount:</span>
              <span className="font-semibold">{formatINR(amount)}</span>
            </li>
            <li>
              <span className="inline-block font-medium w-32">Interest @2%/mo:</span>
              <span>{formatINR(interest)}</span>
            </li>
            <li>
              <span className="inline-block font-medium w-32">Repayment date:</span>
              <span>In {term} days</span>
            </li>
          </ul>
          <div className="text-xl font-extrabold text-indigo-800 mb-1">Total to Repay: {formatINR(totalRepay)}</div>
          <div className="text-xs text-gray-500">Amount is auto-debited when salary hits.</div>
        </div>
      </div>
    </div>
  );
};
