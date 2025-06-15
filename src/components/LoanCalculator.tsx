
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export const LoanCalculator = () => {
  const [amount, setAmount] = useState([10000]);
  const [duration, setDuration] = useState([2]);

  const monthlyInterest = amount[0] * 0.02;
  const totalRepayment = amount[0] + (monthlyInterest * duration[0]);

  return (
    <Card className="max-w-2xl mx-auto shadow-xl bg-gradient-to-br from-white to-indigo-50 border-indigo-100">
      <CardHeader className="text-center bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-t-lg">
        <CardTitle className="text-2xl font-bold">Loan Calculator</CardTitle>
        <p className="text-indigo-100">Calculate your loan details instantly</p>
      </CardHeader>
      
      <CardContent className="p-8 space-y-8">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-lg font-semibold text-indigo-900">Loan Amount</label>
            <span className="text-2xl font-bold text-indigo-700">₹{amount[0].toLocaleString()}</span>
          </div>
          <Slider
            value={amount}
            onValueChange={setAmount}
            max={20000}
            min={2000}
            step={1000}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>₹2,000</span>
            <span>₹20,000</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-lg font-semibold text-indigo-900">Duration</label>
            <span className="text-2xl font-bold text-indigo-700">{duration[0]} month{duration[0] > 1 ? 's' : ''}</span>
          </div>
          <Slider
            value={duration}
            onValueChange={setDuration}
            max={6}
            min={1}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>1 month</span>
            <span>6 months</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl border border-indigo-200">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Interest Rate</p>
            <p className="text-xl font-bold text-indigo-700">2%/month</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Monthly Interest</p>
            <p className="text-xl font-bold text-indigo-700">₹{monthlyInterest.toLocaleString()}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Total Repayment</p>
            <p className="text-xl font-bold text-indigo-700">₹{totalRepayment.toLocaleString()}</p>
          </div>
        </div>

        <Button className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold py-3 text-lg rounded-xl">
          Apply for This Loan
        </Button>
      </CardContent>
    </Card>
  );
};
