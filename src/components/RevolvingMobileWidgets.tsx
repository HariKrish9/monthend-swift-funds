
import React from "react";
import { CreditCard, Clock, Shield, Zap } from "lucide-react";

const mobileScreens = [
  {
    title: "Quick Apply",
    content: "2-min application",
    icon: Clock,
    color: "bg-blue-500"
  },
  {
    title: "Instant Approval",
    content: "Get approved fast",
    icon: Zap,
    color: "bg-green-500"
  },
  {
    title: "Secure Transfer",
    content: "Money in your account",
    icon: Shield,
    color: "bg-purple-500"
  },
  {
    title: "Auto Repay",
    content: "Repaid on salary day",
    icon: CreditCard,
    color: "bg-indigo-500"
  }
];

export const RevolvingMobileWidgets = () => {
  return (
    <div className="relative w-80 h-96 mx-auto">
      {mobileScreens.map((screen, index) => (
        <div
          key={index}
          className="absolute inset-0 w-64 h-80 mx-auto"
          style={{
            animation: `revolve-${index} 8s infinite ease-in-out`,
            animationDelay: `${index * 2}s`,
            zIndex: 4 - index
          }}
        >
          <div className="w-full h-full bg-white rounded-3xl shadow-2xl border-8 border-gray-800 p-6 flex flex-col items-center justify-center text-center">
            <div className={`w-16 h-16 ${screen.color} rounded-full flex items-center justify-center mb-4`}>
              <screen.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{screen.title}</h3>
            <p className="text-gray-600">{screen.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
