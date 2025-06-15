
import React from "react";
import { Gift, Home, ShoppingCart, Heart, Utensils, Smartphone } from "lucide-react";

const bubbleItems = [
  { icon: Gift, label: "Gifts", color: "bg-pink-100 text-pink-600" },
  { icon: Utensils, label: "Groceries", color: "bg-green-100 text-green-600" },
  { icon: Home, label: "Bills", color: "bg-blue-100 text-blue-600" },
  { icon: Heart, label: "Medical", color: "bg-red-100 text-red-600" },
  { icon: ShoppingCart, label: "Household", color: "bg-purple-100 text-purple-600" },
  { icon: Smartphone, label: "Gadgets", color: "bg-indigo-100 text-indigo-600" }
];

export const MoneyBubbles = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Main title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
          Money when you need it most
        </h2>
        <p className="text-lg text-indigo-700 font-medium">
          Covering your urgent expenses until payday arrives
        </p>
      </div>
      
      {/* Floating bubbles */}
      <div className="relative h-64">
        {bubbleItems.map((item, index) => (
          <div
            key={index}
            className={`absolute w-24 h-24 rounded-full ${item.color} flex flex-col items-center justify-center shadow-lg animate-float`}
            style={{
              top: `${Math.sin(index * 1.2) * 80 + 50}px`,
              left: `${(index * 16 + 10)}%`,
              animationDelay: `${index * 0.5}s`,
              transform: `scale(${0.8 + Math.sin(index) * 0.2})`
            }}
          >
            <item.icon className="w-6 h-6 mb-1" />
            <span className="text-xs font-semibold">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
