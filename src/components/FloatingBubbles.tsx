
import React from "react";
import {
  Gift, FileText, House, Cross, ShoppingCart, Smartphone, 
  Utensils, Plane, Car, Shirt, Dumbbell, GraduationCap, 
  PawPrint, Wrench, PartyPopper, Wifi, Fuel, Tv, Baby, BookOpen, HeartPulse,
  Receipt, Ticket, Coffee, Film, Pizza, Gamepad2, Music, Laptop, HandCoins, Store, Lightbulb, Key, Wallet, Globe, Bed, Briefcase, Leaf, CreditCard, FlaskConical, Soup, Users, Cloud, Shield
} from "lucide-react";

const icons = [
  { icon: Gift, label: "Gifts" },
  { icon: FileText, label: "Bills" },
  { icon: House, label: "Home" },
  { icon: Cross, label: "Medical" },
  { icon: ShoppingCart, label: "Groceries" },
  { icon: Smartphone, label: "Gadgets" },
  { icon: Utensils, label: "Dining" },
  { icon: Plane, label: "Travel" },
  { icon: Car, label: "Transport" },
  { icon: Shirt, label: "Shopping" },
  { icon: Dumbbell, label: "Fitness" },
  { icon: GraduationCap, label: "Education" },
  { icon: PawPrint, label: "Pets" },
  { icon: Wrench, label: "Repairs" },
  { icon: PartyPopper, label: "Events" },
  { icon: Wifi, label: "Internet" },
  { icon: Fuel, label: "Fuel" },
  { icon: Tv, label: "Streaming" },
  { icon: Baby, label: "Childcare" },
  { icon: BookOpen, label: "Books" },
  { icon: HeartPulse, label: "Health" },
  { icon: Receipt, label: "Receipts" },
  { icon: Ticket, label: "Tickets" },
  { icon: Coffee, label: "Coffee" },
  { icon: Film, label: "Movies" },
  { icon: Pizza, label: "Pizza" },
  { icon: Gamepad2, label: "Games" },
  { icon: Music, label: "Music" },
  { icon: Laptop, label: "Electronics" },
  { icon: HandCoins, label: "Allowance" },
  { icon: Store, label: "Market" },
  { icon: Lightbulb, label: "Electricity" },
  { icon: Key, label: "Rent" },
  { icon: Wallet, label: "Wallet" },
  { icon: Globe, label: "Internet" },
  { icon: Bed, label: "Lodging" },
  { icon: Briefcase, label: "Office" },
  { icon: Leaf, label: "GroGreen" },
  { icon: CreditCard, label: "Credit" },
  { icon: FlaskConical, label: "Lab" },
  { icon: Soup, label: "Food" },
  { icon: Users, label: "Group" },
  { icon: Cloud, label: "Cloud" },
  { icon: Shield, label: "Insurance" },
];

export const FloatingBubbles = () => {
  return (
    <div className="relative w-full h-full z-10 flex items-center justify-center">
      {/* Background headline text */}
      <span className="bubbles-title">
        Money when you need it most
      </span>
      {/* Icon Grid */}
      <div
        className="grid bubbles-packed relative z-10"
        style={{
          width: "100%",
          maxWidth: 680,
          margin: "0 auto",
          placeItems: "center",
          marginTop: "84px",
          marginBottom: "40px",
        }}
      >
        {icons.map(({ icon: Icon, label }, idx) => (
          <div
            key={label}
            className="bubble-glossy flex flex-col items-center justify-center rounded-2xl py-2 px-0.5 md:p-2 transition-transform hover:scale-105 shadow-md relative"
            style={{
              minWidth: 54,
              minHeight: 54,
              maxWidth: 64,
              margin: "2px",
              zIndex: 3,
              boxShadow: "0 2px 15px 0 rgba(99,102,241,0.09), 0 0.5px 2px 0 rgba(80,120,250,0.09)",
            }}
          >
            <Icon
              size={30}
              className="mb-1 text-indigo-600"
              style={{
                filter:
                  "drop-shadow(0 1.5px 7px rgba(130,140,255,0.35)) drop-shadow(0 0px 1px white)",
              }}
            />
            <span className="text-[0.72rem] leading-none font-medium text-indigo-900/80 mt-1 opacity-85">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
