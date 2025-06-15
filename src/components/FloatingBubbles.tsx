
import React, { useMemo } from 'react';
import { 
  Gift, FileText, House, Cross, ShoppingCart, Smartphone, 
  Utensils, Plane, Car, Shirt, Dumbbell, GraduationCap, 
  PawPrint, Wrench, PartyPopper, Wifi, Fuel, Tv, Baby, BookOpen, HeartPulse,
  Receipt, Ticket, Coffee, Film, Pizza, Gamepad2, Music, Laptop, HandCoins, Store
} from 'lucide-react';

const bubbleData = [
  { icon: Gift, label: 'Gifts' },
  { icon: FileText, label: 'Bills' },
  { icon: House, label: 'Household' },
  { icon: Cross, label: 'Medical' },
  { icon: ShoppingCart, label: 'Groceries' },
  { icon: Smartphone, label: 'Gadgets' },
  { icon: Utensils, label: 'Dining Out' },
  { icon: Plane, label: 'Travel' },
  { icon: Car, label: 'Transport' },
  { icon: Shirt, label: 'Shopping' },
  { icon: Dumbbell, label: 'Fitness' },
  { icon: GraduationCap, label: 'Education' },
  { icon: PawPrint, label: 'Pets' },
  { icon: Wrench, label: 'Repairs' },
  { icon: PartyPopper, label: 'Events' },
  { icon: Wifi, label: 'Internet' },
  { icon: Fuel, label: 'Gas' },
  { icon: Tv, label: 'Streaming' },
  { icon: Baby, label: 'Childcare' },
  { icon: BookOpen, label: 'Books' },
  { icon: HeartPulse, label: 'Health' },
  { icon: Receipt, label: 'Receipts' },
  { icon: Ticket, label: 'Tickets' },
  { icon: Coffee, label: 'Coffee' },
  { icon: Film, label: 'Movies' },
  { icon: Pizza, label: 'Pizza' },
  { icon: Gamepad2, label: 'Games' },
  { icon: Music, label: 'Music' },
  { icon: Laptop, label: 'Electronics' },
  { icon: HandCoins, label: 'Allowances' },
  { icon: Store, label: 'General' },
];

export const FloatingBubbles = () => {
  const bubbles = useMemo(() => {
    return bubbleData.map((item, index) => ({
      ...item,
      id: index,
      style: {
        top: `${Math.random() * 85}%`,
        left: `${Math.random() * 90}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * 3 + 4}s`,
        transform: `scale(${Math.random() * 0.3 + 0.8})`,
      },
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-visible pointer-events-none">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute animate-bounce-subtle opacity-80"
          style={bubble.style}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-indigo-100 hover:scale-110 transition-transform duration-300 flex flex-col items-center w-24 h-24 justify-center">
            <bubble.icon size={28} className="text-indigo-600 mb-1" />
            <div className="text-xs font-medium text-indigo-800 text-center">{bubble.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
