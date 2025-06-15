
import React from "react";
import {
  Gift, FileText, House, ShoppingCart, Smartphone, Utensils, Plane, Car, Shirt, Dumbbell, GraduationCap, PawPrint, Wrench, PartyPopper, Wifi, Fuel, Tv, Baby, BookOpen, HeartPulse, Receipt, Ticket, Coffee, Film, Pizza, Gamepad2, Music, Laptop, HandCoins, Store, Lightbulb, Key, Wallet, Globe, Bed, Briefcase, Leaf, CreditCard, FlaskConical, Soup, Users, Cloud, Shield
} from "lucide-react";

// 40+ glossy-looking icons, all unique to avoid duplicates
const icons = [
  { icon: Gift, label: "Gifts" },
  { icon: FileText, label: "Bills" },
  { icon: House, label: "Home" },
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
  { icon: Leaf, label: "Green" },
  { icon: CreditCard, label: "Credit" },
  { icon: FlaskConical, label: "Lab" },
  { icon: Soup, label: "Food" },
  { icon: Users, label: "Group" },
  { icon: Cloud, label: "Cloud" },
  { icon: Shield, label: "Insurance" },
];

export const FloatingBubbles = () => {
  return (
    <div className="relative flex justify-center items-center w-full min-h-[340px] sm:min-h-[360px] md:min-h-[420px]">
      {/* Headline is BEHIND the bubbles */}
      <span className="packed-bubbles-headline select-none">
        Money when you need it most
      </span>
      <div className="packed-bubbles-grid relative z-10" style={{ marginTop: "90px", marginBottom: "20px" }}>
        {icons.map(({ icon: Icon, label }, idx) => (
          <div
            key={label}
            className="bubble-glossy flex flex-col items-center justify-center rounded-2xl py-2 px-1 transition-transform"
            style={{
              minWidth: 47,
              minHeight: 47,
              maxWidth: 60,
              zIndex: 3,
              margin: "1px",
            }}
          >
            <Icon
              size={27}
              className="mb-1 text-indigo-600"
              style={{
                filter:
                  "drop-shadow(0 1.5px 7px rgba(130,140,255,0.30)) drop-shadow(0 0px 1px white)",
              }}
            />
            <span className="text-[0.71rem] leading-none font-medium text-indigo-900/80 mt-1 opacity-90">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
