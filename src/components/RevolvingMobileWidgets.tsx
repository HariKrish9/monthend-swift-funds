
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
          {/* iPhone-like design */}
          <div className="w-full h-full bg-black rounded-[3rem] p-2 shadow-2xl">
            <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
              {/* iPhone notch */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full"></div>
              
              {/* Screen content */}
              <div className="flex flex-col items-center justify-center h-full pt-8 px-6">
                <div className={`w-20 h-20 ${screen.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <screen.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">{screen.title}</h3>
                <p className="text-gray-600 text-center text-lg">{screen.content}</p>
              </div>
              
              {/* Home indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
