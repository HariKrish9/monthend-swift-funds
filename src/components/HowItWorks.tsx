
import { Download, FileEdit, CalendarClock, IndianRupee, Smile } from "lucide-react";

export const HowItWorks = () => (
  <section className="w-full max-w-6xl mx-auto px-4 py-20 bg-gradient-to-b from-gray-50 to-white">
    <div className="text-center mb-16 animate-fade-in">
      <h3 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">How does it work?</h3>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Get your loan in 5 simple steps. It's that easy!
      </p>
    </div>
    <div className="grid md:grid-cols-5 gap-8 items-start text-center stagger-fade-in">
      <StepCard
        icon={<Download size={40} className="text-indigo-700 mx-auto mb-4" />}
        title="Download the App"
        desc="Start with our seamless onboarding."
        step="1"
      />
      <StepCard
        icon={<FileEdit size={40} className="text-indigo-700 mx-auto mb-4" />}
        title="Share details"
        desc="Quickly enter basic info & choose your loan."
        step="2"
      />
      <StepCard
        icon={<CalendarClock size={40} className="text-indigo-700 mx-auto mb-4" />}
        title="Pick Repayment"
        desc="30, 60, or 90 days. You decide!"
        step="3"
      />
      <StepCard
        icon={<IndianRupee size={40} className="text-indigo-700 mx-auto mb-4" />}
        title="Get Your Money"
        desc="Instant transfer to your salary account."
        step="4"
      />
      <StepCard
        icon={<Smile size={40} className="text-indigo-700 mx-auto mb-4" />}
        title="Stress-free Repay"
        desc="Auto-debited on payday, no hassle."
        step="5"
      />
    </div>
  </section>
);

const StepCard = ({
  icon,
  title,
  desc,
  step,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  step: string;
}) => (
  <div className="relative group">
    {/* Step number */}
    <div className="absolute -top-3 -right-3 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold z-10 group-hover:scale-110 transition-transform duration-200">
      {step}
    </div>
    
    {/* Card */}
    <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-indigo-100 min-h-[220px] hover-lift group relative overflow-hidden">
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="font-bold text-indigo-900 text-lg mt-4 mb-2">{title}</div>
        <div className="text-gray-600 text-sm leading-relaxed">{desc}</div>
      </div>
    </div>
    
    {/* Connecting line (hidden on mobile) */}
    {step !== "5" && (
      <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-indigo-200 to-transparent z-0"></div>
    )}
  </div>
);
