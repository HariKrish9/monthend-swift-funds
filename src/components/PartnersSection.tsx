
import React from "react";
import { Building, Users } from "lucide-react";

export const PartnersSection = () => {
  return (
    <section className="w-full px-4 max-w-6xl mx-auto py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center mb-16 animate-fade-in">
        <h3 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Our Partners</h3>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 stagger-fade-in">
        <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 p-10 flex flex-col items-center text-center h-full hover-lift group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-6 p-4 bg-indigo-100 rounded-2xl group-hover:bg-indigo-200 transition-colors duration-300">
              <Building size={48} className="text-indigo-700 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="font-bold text-indigo-900 text-2xl mb-4 group-hover:text-indigo-800 transition-colors duration-300">
              Banking Partners
            </div>
            <div className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              We collaborate with leading banks to provide you with the best loan options
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 p-10 flex flex-col items-center text-center h-full hover-lift group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-6 p-4 bg-green-100 rounded-2xl group-hover:bg-green-200 transition-colors duration-300">
              <Users size={48} className="text-green-700 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="font-bold text-indigo-900 text-2xl mb-4 group-hover:text-indigo-800 transition-colors duration-300">
              Corporate Partners
            </div>
            <div className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              Special programs for employees of our partner organizations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
