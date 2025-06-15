import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { LoanCalculator } from "@/components/LoanCalculator";
import { PreSignupForm } from "@/components/PreSignupForm";
import { MobileWidgets } from "@/components/MobileWidgets";
import { FloatingBubbles } from "@/components/FloatingBubbles";
import { AbstractShapes } from "@/components/AbstractShapes";
import React from "react";
import { HeroBackgroundAnimation } from "@/components/HeroBackgroundAnimation";

const Index = () => {
  return (
    <main className="bg-gradient-to-b from-indigo-50 via-white to-blue-100 min-h-screen px-0 overflow-x-hidden relative">
      <AbstractShapes />

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center py-20 bg-gradient-to-br from-indigo-700 via-indigo-800 to-blue-900 text-white shadow-2xl relative overflow-hidden">
        <HeroBackgroundAnimation />
        {/* Background animation elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-lg animate-fade-in">
            MonthEnd
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium mb-8 animate-fade-in-delay-100 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Beat month-end money stress. Instant loans for salaried professionals.
          </h2>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 bg-white text-indigo-800 font-bold py-4 px-10 rounded-2xl shadow-xl hover:shadow-2xl hover-scale transition-all duration-300 animate-fade-in-delay-300 group"
          >
            Get Started
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>
      </section>

      {/* Money When You Need It Most Section */}
      <section className="w-full relative flex items-center justify-center min-h-[480px] md:min-h-[570px] bg-[linear-gradient(180deg,#f5f7ff_63%,#f1f5fd_100%)] overflow-x-hidden px-0">
        <div className="absolute left-0 right-0 top-1 mx-auto w-full h-[100px] pointer-events-none select-none z-0" aria-hidden></div>
        <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center">
          <FloatingBubbles />
          <div className="relative z-20 mt-0 md:mt-4 text-center flex flex-col items-center w-full max-w-xl">
            <p className="text-indigo-900/90 text-base md:text-lg font-semibold drop-shadow-sm animate-fade-in">
              From groceries to gadgets, bills to gifts — MonthEnd covers your urgent expenses, so you can breathe easy till payday.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement with Mobile Widgets */}
      <section className="w-full py-16 flex flex-col md:flex-row gap-12 justify-center items-center bg-white px-4 relative z-10">
        <div className="max-w-xl animate-slide-in-left">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-900 leading-tight">
            Why MonthEnd?
          </h3>
          <ul className="space-y-4 text-lg text-indigo-900 mb-6">
            <li className="flex items-start gap-3 animate-fade-in-delay-100">
              <span className="w-2 h-2 bg-indigo-600 rounded-full mt-3 flex-shrink-0"></span>
              <span>Salary date is too far</span>
            </li>
            <li className="flex items-start gap-3 animate-fade-in-delay-200">
              <span className="w-2 h-2 bg-indigo-600 rounded-full mt-3 flex-shrink-0"></span>
              <span>Bills, groceries, and unexpected expenses keep coming up</span>
            </li>
            <li className="flex items-start gap-3 font-bold text-blue-700 animate-fade-in-delay-300">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></span>
              <span>Left wondering: "How do I manage?"</span>
            </li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed animate-fade-in-delay-400">
            Middle class salaried professionals are struggling to bridge the gap at the end of the month. We're here to help.
          </p>
        </div>
        <div className="w-full md:w-5/12 flex justify-center animate-slide-in-right">
          <MobileWidgets />
        </div>
      </section>

      {/* How it Works */}
      <div className="relative z-10">
        <HowItWorks />
      </div>

      {/* Loan Calculator */}
      <section className="w-full max-w-6xl mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">See Your Loan Details</h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Customize your loan amount and repayment period to see exactly what you'll pay
          </p>
        </div>
        <LoanCalculator />
      </section>

      {/* Benefits/Features */}
      <div className="relative z-10">
        <Benefits />
      </div>

      {/* Call to Action + PreSignup */}
      <section id="get-started" className="bg-gradient-to-r from-indigo-800 via-indigo-900 to-blue-900 py-16 px-4 mt-16 relative overflow-hidden z-10">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-bounce-subtle"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          <div className="text-white md:w-1/2 animate-slide-in-left">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Ready for a stress-free month end?
            </h3>
            <p className="text-xl text-blue-100 leading-relaxed">
              Enter your details to get early access. No spam, no commitments.
            </p>
          </div>
          <div className="md:w-1/2 w-full animate-slide-in-right">
            <PreSignupForm />
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-gray-400 bg-gray-50 relative z-10">
        <div className="animate-fade-in">
          &copy; {new Date().getFullYear()} MonthEnd. All rights reserved.
        </div>
      </footer>
    </main>
  );
};

export default Index;
