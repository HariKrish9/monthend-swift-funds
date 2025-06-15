
import React from 'react';
import { Gift, FileText, House, Cross, ShoppingCart, Smartphone } from 'lucide-react';

const bubbles = [
  { icon: Gift, label: 'Gifts', delay: '0s', position: 'top-10 left-10' },
  { icon: FileText, label: 'Bills', delay: '0.5s', position: 'top-20 right-16' },
  { icon: House, label: 'Household', delay: '1s', position: 'top-32 left-20' },
  { icon: Cross, label: 'Medical', delay: '1.5s', position: 'bottom-32 right-10' },
  { icon: ShoppingCart, label: 'Groceries', delay: '2s', position: 'bottom-20 left-16' },
  { icon: Smartphone, label: 'Gadgets', delay: '2.5s', position: 'bottom-10 right-20' }
];

export const FloatingBubbles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className={`absolute ${bubble.position} animate-bounce-subtle opacity-80`}
          style={{ animationDelay: bubble.delay, animationDuration: '3s' }}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg border border-indigo-100 hover:scale-110 transition-transform duration-300">
            <bubble.icon size={24} className="text-indigo-600 mb-1" />
            <div className="text-xs font-medium text-indigo-800 text-center">{bubble.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
