
import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { LoanCalculator } from "@/components/LoanCalculator";
import { PreSignupForm } from "@/components/PreSignupForm";

const Index = () => {
  return (
    <main className="bg-gradient-to-b from-indigo-50 via-white to-blue-100 min-h-screen px-0">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center py-16 bg-gradient-to-br from-indigo-700 to-blue-900 text-white shadow-xl animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
          MonthEnd
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-6 animate-fade-in delay-75">
          Beat month-end money stress. Instant loans for salaried professionals.
        </h2>
        <p className="max-w-xl mb-8 text-lg md:text-xl font-light text-blue-100/90">
          Affordable loans from ₹2,000 to ₹20,000 at just 2%/month, automatically repaid when your salary arrives.
        </p>
        <a
          href="#get-started"
          className="inline-block bg-white text-indigo-800 font-bold py-3 px-8 rounded-xl shadow hover:scale-105 transition-all duration-150 animate-scale-in"
        >
          Get Started
        </a>
      </section>

      {/* Problem Statement */}
      <section className="w-full py-12 flex flex-col md:flex-row gap-8 justify-center items-center bg-white">
        <div className="max-w-xl">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-indigo-900">Why MonthEnd?</h3>
          <ul className="list-disc ml-7 space-y-2 text-lg text-indigo-900">
            <li>Salary date is too far</li>
            <li>Bills, groceries, and unexpected expenses keep coming up</li>
            <li className="font-bold text-blue-700">Left wondering: "How do I manage?"</li>
          </ul>
          <p className="mt-4 text-gray-700">
            Middle class salaried professionals are struggling to bridge the gap at the end of the month. We're here to help.
          </p>
        </div>
        <div className="w-full md:w-5/12 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&w=720&q=80"
            alt="Financial stress illustration"
            className="rounded-xl shadow-md max-w-xs md:max-w-none w-72"
            loading="lazy"
          />
        </div>
      </section>

      {/* How it Works */}
      <HowItWorks />

      {/* Loan Calculator */}
      <section className="w-full max-w-5xl mx-auto px-4 py-12">
        <h3 className="text-2xl md:text-3xl font-semibold text-indigo-900 mb-6 text-center">See Your Loan Details</h3>
        <LoanCalculator />
      </section>

      {/* Benefits/Features */}
      <Benefits />

      {/* Call to Action + PreSignup */}
      <section id="get-started" className="bg-indigo-800 py-12 px-4 flex flex-col md:flex-row items-center justify-between gap-8 mt-10 shadow-inner">
        <div className="text-white md:w-1/2 mb-4 md:mb-0">
          <h3 className="text-2xl md:text-3xl font-semibold mb-2">Ready for a stress-free month end?</h3>
          <p className="text-lg opacity-80">Enter your details to get early access. No spam, no commitments.</p>
        </div>
        <div className="md:w-1/2 w-full">
          <PreSignupForm />
        </div>
      </section>

      <footer className="py-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} MonthEnd. All rights reserved.
      </footer>
    </main>
  );
};

export default Index;
