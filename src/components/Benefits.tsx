
import { ShieldCheck, Building2, BadgeCheck } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

export const Benefits = () => (
  <section className="w-full px-4 max-w-6xl mx-auto py-16">
    <h3 className="text-2xl md:text-3xl font-semibold text-indigo-900 mb-7 text-center">Why choose MonthEnd?</h3>
    <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
      <FeatureCard
        icon={<ShieldCheck size={36} className="text-indigo-700" />}
        title="Backed by Trusted Banks"
        desc="We partner with India's top banks to ensure secure funding and protection for your financial needs."
      />
      <FeatureCard
        icon={<Building2 size={36} className="text-indigo-700" />}
        title="Recommended by Employers"
        desc="Your company includes MonthEnd as an employee benefit program for your financial wellbeing."
      />
      <FeatureCard
        icon={<BadgeCheck size={36} className="text-indigo-700" />}
        title="100% Transparent & Safe"
        desc="No hidden charges. Clear terms, affordable interest, and total data privacy at every step."
      />
    </div>
  </section>
);
