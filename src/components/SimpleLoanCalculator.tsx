
import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";

export const SimpleLoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState([10000]);
  const [duration, setDuration] = useState([2]);

  const monthlyInterest = 0.02;
  const totalAmount = loanAmount[0] * (1 + monthlyInterest * duration[0]);
  const monthlyPayment = totalAmount / duration[0];

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-2xl p-8">
      <h3 className="text-2xl font-bold text-indigo-900 mb-6 text-center">Loan Calculator</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Loan Amount: ₹{loanAmount[0].toLocaleString()}
          </label>
          <Slider
            value={loanAmount}
            onValueChange={setLoanAmount}
            max={20000}
            min={2000}
            step={1000}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Duration: {duration[0]} month{duration[0] > 1 ? 's' : ''}
          </label>
          <Slider
            value={duration}
            onValueChange={setDuration}
            max={6}
            min={1}
            step={1}
            className="w-full"
          />
        </div>

        <div className="bg-indigo-50 rounded-2xl p-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Interest @ 2%/mo:</span>
            <span className="font-semibold">₹{(totalAmount - loanAmount[0]).toFixed(0)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Total Amount:</span>
            <span className="font-bold text-lg">₹{totalAmount.toFixed(0)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Monthly Payment:</span>
            <span className="font-bold text-lg text-indigo-600">₹{monthlyPayment.toFixed(0)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
