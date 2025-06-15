
import React from "react";
import {
  Gift, House, ShoppingCart, CreditCard, Utensils, Plane, Car, Shirt, Dumbbell, GraduationCap,
  Users, Globe, Bed, BookOpen, Wallet, Coffee, Leaf, PartyPopper, Key, Wrench, HeartPulse,
} from "lucide-react";

const icons = [
  { icon: Gift, label: "Gifts", color: "bg-pink-50 text-pink-600" }, 
  { icon: House, label: "Bills", color: "bg-blue-50 text-blue-600" }, 
  { icon: ShoppingCart, label: "Groceries", color: "bg-green-50 text-green-600" },
  { icon: CreditCard, label: "Credit", color: "bg-purple-50 text-purple-600" }, 
  { icon: Utensils, label: "Dining", color: "bg-orange-50 text-orange-600" }, 
  { icon: Plane, label: "Travel", color: "bg-sky-50 text-sky-600" },
  { icon: Car, label: "Transport", color: "bg-gray-50 text-gray-600" }, 
  { icon: Shirt, label: "Shopping", color: "bg-rose-50 text-rose-600" }, 
  { icon: Dumbbell, label: "Fitness", color: "bg-emerald-50 text-emerald-600" },
  { icon: GraduationCap, label: "Education", color: "bg-violet-50 text-violet-600" }, 
  { icon: Users, label: "Friends", color: "bg-cyan-50 text-cyan-600" }, 
  { icon: Globe, label: "Internet", color: "bg-teal-50 text-teal-600" },
  { icon: Bed, label: "Rent", color: "bg-amber-50 text-amber-600" }, 
  { icon: BookOpen, label: "Books", color: "bg-lime-50 text-lime-600" }, 
  { icon: Wallet, label: "Wallet", color: "bg-fuchsia-50 text-fuchsia-600" },
  { icon: Coffee, label: "Coffee", color: "bg-yellow-50 text-yellow-600" }, 
  { icon: HeartPulse, label: "Medical", color: "bg-red-50 text-red-600" }, 
  { icon: PartyPopper, label: "Events", color: "bg-indigo-50 text-indigo-600" },
  { icon: Key, label: "Home", color: "bg-slate-50 text-slate-600" }, 
  { icon: Wrench, label: "Repairs", color: "bg-stone-50 text-stone-600" }
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
        {icons.map(({ icon: Icon, label, color }, idx) => (
          <div
            key={label + idx}
            className={`flex flex-col items-center justify-center p-4 ${color} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50`}
            style={{
              animation: "fade-in-up 0.6s both",
              animationDelay: `${idx * 50}ms`
            }}
          >
            <div className="w-12 h-12 flex items-center justify-center mb-3">
              <Icon size={24} />
            </div>
            <span className="text-sm font-medium text-center">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
