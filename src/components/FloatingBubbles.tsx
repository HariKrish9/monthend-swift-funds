
import React from "react";
import {
  Gift, House, ShoppingCart, CreditCard, Utensils, Plane, Car, Shirt, Dumbbell, GraduationCap,
  Users, Globe, Bed, BookOpen, Wallet, Coffee, Leaf, PartyPopper, Key, Wrench, HeartPulse,
} from "lucide-react";

// Use only Lucide icons as allowed and fill to >30
const icons = [
  { icon: Gift, label: "Gifts" }, // 1
  { icon: House, label: "Home" }, // 2
  { icon: ShoppingCart, label: "Groceries" }, // 3
  { icon: CreditCard, label: "Credit" }, // 4
  { icon: Utensils, label: "Dining" }, // 5
  { icon: Plane, label: "Travel" }, // 6
  { icon: Car, label: "Transport" }, // 7
  { icon: Shirt, label: "Shopping" }, // 8
  { icon: Dumbbell, label: "Fitness" }, // 9
  { icon: GraduationCap, label: "Education" }, // 10
  { icon: Users, label: "Friends" }, // 11
  { icon: Globe, label: "Internet" }, // 12
  { icon: Bed, label: "Lodging" }, // 13
  { icon: BookOpen, label: "Books" }, // 14
  { icon: Wallet, label: "Wallet" }, // 15
  { icon: Coffee, label: "Coffee" }, // 16
  { icon: Leaf, label: "Green" }, // 17
  { icon: PartyPopper, label: "Events" }, // 18
  { icon: Key, label: "Rent" }, // 19
  { icon: Wrench, label: "Repairs" }, // 20
  { icon: HeartPulse, label: "Health" }, // 21
  { icon: Gift, label: "Birthday" }, // 22
  { icon: House, label: "Family" }, // 23
  { icon: ShoppingCart, label: "Cart" }, // 24
  { icon: CreditCard, label: "EMI" }, // 25
  { icon: Utensils, label: "Food" }, // 26
  { icon: Plane, label: "Holidays" }, // 27
  { icon: Car, label: "Taxi" }, // 28
  { icon: Shirt, label: "Gear" }, // 29
  { icon: Dumbbell, label: "Gym" }, // 30
  { icon: GraduationCap, label: "Course" }, // 31
  { icon: Users, label: "Team" }, // 32
  { icon: Globe, label: "World" }, // 33
  { icon: Bed, label: "Stay" }, // 34
  { icon: BookOpen, label: "School" }, // 35
  { icon: Wallet, label: "Card" }, // 36
  { icon: Coffee, label: "Snack" }, // 37
  { icon: Leaf, label: "Eco" }, // 38
  { icon: PartyPopper, label: "Fun" }, // 39
  { icon: Key, label: "Key" }, // 40
  { icon: Wrench, label: "Tools" }, // 41
];

export const FloatingBubbles = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-[340px] sm:min-h-[360px] md:min-h-[440px]">
      {/* Headline behind the bubbles */}
      <span className="packed-bubbles-headline select-none">
        Money when you need it most
      </span>
      {/* Packed grid, z-10 floats above headline */}
      <div className="packed-bubbles-grid relative z-10" style={{marginBottom: "20px"}}>
        {icons.map(({ icon: Icon, label }, idx) => (
          <div
            key={label + idx}
            className="bubble-glossy flex flex-col items-center justify-center rounded-2xl py-2 px-1 transition-transform"
            style={{
              minWidth: 47,
              minHeight: 47,
              maxWidth: 62,
              zIndex: 3,
              margin: "1px",
              animation: "fade-in-up 0.48s both",
              animationDelay: `${idx * 25}ms`
            }}
          >
            <Icon
              size={27}
              className="mb-1 text-indigo-600"
              style={{
                filter:
                  "drop-shadow(0 1.5px 7px rgba(130,140,255,0.30)) drop-shadow(0 0px 1px white)"
              }}
            />
            <span className="text-[0.70rem] leading-none font-medium text-indigo-900/80 mt-1 opacity-90">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
