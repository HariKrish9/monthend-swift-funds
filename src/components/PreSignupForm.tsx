
import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export const PreSignupForm: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setInput("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col sm:flex-row gap-2 animate-fade-in"
      autoComplete="off"
    >
      <input
        type="text"
        name="contact"
        inputMode="email"
        required
        disabled={sent}
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Email or phone"
        className="rounded-lg px-4 py-3 w-full font-semibold text-indigo-900 border border-indigo-200 focus:ring-2 focus:ring-indigo-400 disabled:bg-indigo-100"
      />
      <button
        type="submit"
        disabled={sent || input.trim() === ""}
        className="bg-green-600 text-white px-7 py-3 rounded-lg font-bold shadow hover:bg-green-700 transition-all disabled:opacity-60 flex items-center justify-center min-w-[120px]"
      >
        {sent ? (
          <span className="flex items-center gap-2 justify-center">
            <CheckCircle2 size={18} /> Sent
          </span>
        ) : (
          "Request Access"
        )}
      </button>
    </form>
  );
};
