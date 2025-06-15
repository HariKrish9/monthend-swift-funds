
import { Download, FileEdit, CalendarClock, IndianRupee, Smile } from "lucide-react";

export const HowItWorks = () => (
  <section className="w-full max-w-6xl mx-auto px-4 py-16">
    <h3 className="text-2xl md:text-3xl font-semibold text-indigo-900 mb-8 text-center">How does it work?</h3>
    <div className="grid md:grid-cols-5 gap-6 items-start text-center animate-fade-in">
      <StepCard
        icon={<Download size={36} className="text-indigo-700 mx-auto mb-2" />}
        title="Download the App"
        desc="Start with our seamless onboarding."
      />
      <StepCard
        icon={<FileEdit size={36} className="text-indigo-700 mx-auto mb-2" />}
        title="Share details"
        desc="Quickly enter basic info & choose your loan."
      />
      <StepCard
        icon={<CalendarClock size={36} className="text-indigo-700 mx-auto mb-2" />}
        title="Pick Repayment"
        desc="30, 60, or 90 days. You decide!"
      />
      <StepCard
        icon={<IndianRupee size={36} className="text-indigo-700 mx-auto mb-2" />}
        title="Get Your Money"
        desc="Instant transfer to your salary account."
      />
      <StepCard
        icon={<Smile size={36} className="text-indigo-700 mx-auto mb-2" />}
        title="Stress-free Repay"
        desc="Auto-debited on payday, no hassle."
      />
    </div>
  </section>
);

const StepCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center border border-indigo-100 min-h-[190px] hover:scale-105 transition-transform duration-200">
    {icon}
    <div className="font-bold text-indigo-900 text-lg mt-2">{title}</div>
    <div className="text-gray-600 text-sm mt-1">{desc}</div>
  </div>
);
