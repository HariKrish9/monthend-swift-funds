
import React from "react";
import {
  Gift, House, ShoppingCart, CreditCard, Utensils, Plane, Car, Shirt, Dumbbell, GraduationCap,
  Users, Globe, Bed, BookOpen, Wallet, Coffee, Leaf, PartyPopper, Key, Wrench, HeartPulse,
} from "lucide-react";

// Use only Lucide icons as allowed and fill to >30
const icons = [
  { icon: Gift, label: "Gifts" }, { icon: House, label: "Home" }, { icon: ShoppingCart, label: "Groceries" },
  { icon: CreditCard, label: "Credit" }, { icon: Utensils, label: "Dining" }, { icon: Plane, label: "Travel" },
  { icon: Car, label: "Transport" }, { icon: Shirt, label: "Shopping" }, { icon: Dumbbell, label: "Fitness" },
  { icon: GraduationCap, label: "Education" }, { icon: Users, label: "Friends" }, { icon: Globe, label: "Internet" },
  { icon: Bed, label: "Lodging" }, { icon: BookOpen, label: "Books" }, { icon: Wallet, label: "Wallet" },
  { icon: Coffee, label: "Coffee" }, { icon: Leaf, label: "Green" }, { icon: PartyPopper, label: "Events" },
  { icon: Key, label: "Rent" }, { icon: Wrench, label: "Repairs" }, { icon: HeartPulse, label: "Health" },
  { icon: Gift, label: "Birthday" }, { icon: House, label: "Family" }, { icon: ShoppingCart, label: "Cart" },
  { icon: CreditCard, label: "EMI" }, { icon: Utensils, label: "Food" }, { icon: Plane, label: "Holidays" },
  { icon: Car, label: "Taxi" }, { icon: Shirt, label: "Gear" }, { icon: Dumbbell, label: "Gym" },
  { icon: GraduationCap, label: "Course" }, { icon: Users, label: "Team" }, { icon: Globe, label: "World" },
  { icon: Bed, label: "Stay" }, { icon: BookOpen, label: "School" }, { icon: Wallet, label: "Card" },
  { icon: Coffee, label: "Snack" }, { icon: Leaf, label: "Eco" }, { icon: PartyPopper, label: "Fun" },
  { icon: Key, label: "Key" }, { icon: Wrench, label: "Tools" },
];

export const FloatingBubbles = () => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-[340px] sm:min-h-[360px] md:min-h-[440px]">
      {/* Headline behind the bubbles */}
      <span className="packed-bubbles-headline select-none">
        Money when you need it most
      </span>
      {/* Packed grid */}
      <div className="packed-bubbles-grid relative z-10" style={{marginBottom: "20px"}}>
        {icons.map(({ icon: Icon, label }, idx) => (
          <div
            key={label + idx}
            className="bubble-grid-icon"
            style={{
              minWidth: 56,
              minHeight: 62,
              maxWidth: 70,
              zIndex: 3,
              margin: "1px",
              animation: "fade-in-up 0.48s both",
              animationDelay: `${idx * 25}ms`
            }}
          >
            <Icon
              size={32}
              className="mx-auto text-indigo-600"
              style={{
                filter: "drop-shadow(0 1.5px 7px rgba(130,140,255,0.15))"
              }}
            />
            <span className="bubble-grid-label">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
