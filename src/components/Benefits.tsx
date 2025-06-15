
import { ShieldCheck, Building2, BadgeCheck } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export const Benefits = () => (
  <section className="w-full px-4 max-w-6xl mx-auto py-20 bg-gradient-to-b from-white to-gray-50">
    <div className="text-center mb-16 animate-fade-in">
      <h3 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Why choose MonthEnd?</h3>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        We're backed by trust, transparency, and your company's confidence
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8 stagger-fade-in">
      <FeatureCard
        icon={<ShieldCheck size={48} className="text-indigo-700 group-hover:scale-110 transition-transform duration-300" />}
        title="Backed by Trusted Banks"
        desc="We partner with India's top banks to ensure secure funding and protection for your financial needs."
      />
      <FeatureCard
        icon={<Building2 size={48} className="text-indigo-700 group-hover:scale-110 transition-transform duration-300" />}
        title="Recommended by Employers"
        desc="Your company includes MonthEnd as an employee benefit program for your financial wellbeing."
      />
      <FeatureCard
        icon={<BadgeCheck size={48} className="text-indigo-700 group-hover:scale-110 transition-transform duration-300" />}
        title="100% Transparent & Safe"
        desc="No hidden charges. Clear terms, affordable interest, and total data privacy at every step."
      />
    </div>
  </section>
);
