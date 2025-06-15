
import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { PreSignupForm } from "@/components/PreSignupForm";
import { RevolvingMobileWidgets } from "@/components/RevolvingMobileWidgets";
import { FloatingBubbles } from "@/components/FloatingBubbles";
import { AbstractShapes } from "@/components/AbstractShapes";
import { ModernAbstracts } from "@/components/ModernAbstracts";
import { SimpleLoanCalculator } from "@/components/SimpleLoanCalculator";
import AnimatedMobilePhone from "@/components/AnimatedMobilePhone";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { PartnersSection } from "@/components/PartnersSection";
import React from "react";
import { HeroBackgroundAnimation } from "@/components/HeroBackgroundAnimation";
import HeroAbstractMotion from "@/components/HeroAbstractMotion";
import HeroMenuOptions from "@/components/HeroMenuOptions";

// The logo should be in the top left corner, large, no bg
const Index = () => {
  return (
    <main className="bg-gradient-to-b from-indigo-50 via-white to-blue-100 relative">
      <AbstractShapes />
      <ModernAbstracts />

      {/* Hero Section - Fi.money style */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-700 via-indigo-800 to-blue-900 text-white relative py-16">
        <HeroBackgroundAnimation />

        {/* Big Logo - Top left, NO bg, border, or outline, 5vh from top */}
        <div
          className="
            absolute z-30 
            left-2
            top-[5vh]
            md:left-6
            lg:left-10
            flex items-center
            pointer-events-none"
        >
          <img
            src="/lovable-uploads/88a6e1b5-0555-47fb-9fa0-e26739f449e5.png"
            alt="MonthEnd Logo"
            className="h-[8.5rem] w-auto md:h-[12.2rem] lg:h-[14.7rem] object-contain"
            style={{
              background: "none",
              boxShadow: "none",
              borderRadius: "0",
              border: "none",
              padding: 0,
              filter: "none",
            }}
            draggable={false}
          />
        </div>

        {/* Animated Mobile Phone FRONT AND CENTER */}
        <div className="relative z-20 flex flex-col items-center w-full max-w-lg mt-[5vh]">
          <AnimatedMobilePhone />
        </div>

        {/* Abstract motion graphics at top */}
        <div className="relative z-10 text-center max-w-4xl px-4 w-full mt-10">
          <HeroAbstractMotion />
          {/* Tagline only */}
          <h2 className="text-2xl md:text-4xl font-medium mb-8 animate-fade-in-delay-100 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Beat month-end money stress with month end.
          </h2>
          {/* Get Started button */}
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 bg-white text-indigo-800 font-bold py-4 px-10 rounded-2xl shadow-xl hover:shadow-2xl hover-scale transition-all duration-300 animate-fade-in-delay-300 group"
          >
            Get Started
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>
        {/* Background animation elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </section>

      {/* Money When You Need It Most Section */}
      <section className="w-full relative bg-gradient-to-b from-white to-indigo-50">
        <FloatingBubbles />
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
        <div className="w-full md:w-5/12 flex justify-center animate-slide-in-right flex-col items-center">
          <RevolvingMobileWidgets />
        </div>
      </section>

      {/* How it Works */}
      <div className="relative z-10">
        <HowItWorks />
      </div>

      {/* Why Choose MonthEnd Section */}
      <div className="relative z-10">
        <WhyChooseSection />
      </div>

      {/* Loan Calculator */}
      <section className="w-full px-4 py-16 relative z-10 bg-gradient-to-b from-indigo-50 to-white">
        <div className="text-center mb-12 animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">See Your Loan Details</h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Customize your loan amount and repayment period to see exactly what you'll pay
          </p>
        </div>
        <SimpleLoanCalculator />
      </section>

      {/* Partners Section */}
      <div className="relative z-10">
        <PartnersSection />
      </div>

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
