
import React from "react";
import {
  Gift, House, ShoppingCart, CreditCard, Utensils, Plane, Car, Shirt, Dumbbell, GraduationCap,
  Users, Globe, Bed, BookOpen, Wallet, Coffee, Leaf, PartyPopper, Key, Wrench, HeartPulse,
} from "lucide-react";

const icons = [
  { icon: Gift, label: "Gifts" }, 
  { icon: House, label: "Bills" }, 
  { icon: ShoppingCart, label: "Groceries" },
  { icon: CreditCard, label: "Credit" }, 
  { icon: Utensils, label: "Dining" }, 
  { icon: Plane, label: "Travel" },
  { icon: Car, label: "Transport" }, 
  { icon: Shirt, label: "Shopping" }, 
  { icon: Dumbbell, label: "Fitness" },
  { icon: GraduationCap, label: "Education" }, 
  { icon: Users, label: "Friends" }, 
  { icon: Globe, label: "Internet" },
  { icon: Bed, label: "Rent" }, 
  { icon: BookOpen, label: "Books" }, 
  { icon: Wallet, label: "Wallet" },
  { icon: Coffee, label: "Coffee" }, 
  { icon: Leaf, label: "Medical" }, 
  { icon: PartyPopper, label: "Events" },
  { icon: Key, label: "Home" }, 
  { icon: Wrench, label: "Repairs" }
];

export const FloatingBubbles = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-[500px] px-4 py-16">
      {/* Centered title */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
          Money when you need it most
        </h2>
        <p className="text-lg text-indigo-700 font-medium">
          We get your urgent expenses covered
        </p>
      </div>
      
      {/* Grid of icons */}
      <div className="grid grid-cols-4 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
        {icons.map(({ icon: Icon, label }, idx) => (
          <div
            key={label + idx}
            className="flex flex-col items-center justify-center p-4 bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            style={{
              animation: "fade-in-up 0.6s both",
              animationDelay: `${idx * 50}ms`
            }}
          >
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-3">
              <Icon size={24} className="text-indigo-600" />
            </div>
            <span className="text-sm font-medium text-gray-700 text-center">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
