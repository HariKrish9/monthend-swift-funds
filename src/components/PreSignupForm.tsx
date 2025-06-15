
import React, { useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

export const PreSignupForm: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setInput("");
  }

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
      <div className="mb-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="text-yellow-300" size={24} />
          <h4 className="text-xl font-bold text-white">Get Early Access</h4>
          <Sparkles className="text-yellow-300" size={24} />
        </div>
        <p className="text-blue-100 text-sm">Join the waitlist for exclusive benefits</p>
      </div>
      
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col sm:flex-row gap-4"
        autoComplete="off"
      >
        <div className="flex-1">
          <input
            type="text"
            name="contact"
            inputMode="email"
            required
            disabled={sent}
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Email or phone"
            className="rounded-xl px-6 py-4 w-full font-semibold text-indigo-900 border-2 border-white/20 focus:ring-2 focus:ring-white focus:border-white disabled:bg-indigo-100 transition-all duration-200 placeholder-gray-500 bg-white/90 backdrop-blur-sm"
          />
        </div>
        <button
          type="submit"
          disabled={sent || input.trim() === ""}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-60 flex items-center justify-center min-w-[140px] hover-scale group"
        >
          {sent ? (
            <span className="flex items-center gap-2 justify-center">
              <CheckCircle2 size={20} className="animate-bounce-subtle" /> 
              <span>Sent!</span>
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <span>Request Access</span>
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </span>
          )}
        </button>
      </form>
      
      {sent && (
        <div className="mt-4 p-4 bg-green-500/20 border border-green-400/30 rounded-xl animate-fade-in">
          <p className="text-green-100 text-sm text-center font-medium">
            🎉 You're on the list! We'll notify you when MonthEnd launches.
          </p>
        </div>
      )}
    </div>
  );
};
