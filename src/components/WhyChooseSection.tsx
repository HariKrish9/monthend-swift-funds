
import React from "react";
import { Clock, Shield, TrendingDown } from "lucide-react";

export const WhyChooseSection = () => {
  return (
    <section className="w-full px-4 max-w-6xl mx-auto py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="text-center mb-16 animate-fade-in">
        <h3 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Why Choose MonthEnd</h3>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 stagger-fade-in">
        <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 p-8 flex flex-col items-center text-center h-full hover-lift group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-6 p-4 bg-green-100 rounded-2xl group-hover:bg-green-200 transition-colors duration-300">
              <Clock size={48} className="text-green-700 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="font-bold text-indigo-900 text-xl mb-4 group-hover:text-indigo-800 transition-colors duration-300">
              Instant Approval
            </div>
            <div className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              Get loan approval within minutes with our automated credit assessment system
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 p-8 flex flex-col items-center text-center h-full hover-lift group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-6 p-4 bg-blue-100 rounded-2xl group-hover:bg-blue-200 transition-colors duration-300">
              <Shield size={48} className="text-blue-700 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="font-bold text-indigo-900 text-xl mb-4 group-hover:text-indigo-800 transition-colors duration-300">
              Secure & Transparent
            </div>
            <div className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              No hidden charges. Clear terms and conditions with complete transparency
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 p-8 flex flex-col items-center text-center h-full hover-lift group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-6 p-4 bg-purple-100 rounded-2xl group-hover:bg-purple-200 transition-colors duration-300">
              <TrendingDown size={48} className="text-purple-700 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="font-bold text-indigo-900 text-xl mb-4 group-hover:text-indigo-800 transition-colors duration-300">
              Competitive Rates
            </div>
            <div className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              Enjoy affordable interest rates based on your credit score
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
