"use client";

import { useState } from "react";

export default function WaitlistForm({ variant = "hero", dark = false }) {
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, whatsapp }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
        setWhatsapp("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={`rounded-2xl p-8 text-center border ${dark ? "bg-white/5 border-white/10" : "bg-white border-border"}`}>
        <div className="w-12 h-12 bg-sage/15 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#4A7C59" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <p className={`font-display text-xl font-bold mb-2 ${dark ? "text-white" : "text-ink"}`}>
          You&apos;re on the list!
        </p>
        <p className={`text-sm leading-relaxed ${dark ? "text-white/50" : "text-muted"}`}>
          We&apos;ll reach out when ProByt launches. Early members get founding member pricing.
        </p>
      </div>
    );
  }

  const inputClass = `w-full px-4 py-3.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-terra/30 focus:border-terra transition-all ${
    dark
      ? "bg-white/8 border-white/15 text-white placeholder-white/35 hover:border-white/25"
      : "bg-white border-border text-ink placeholder-muted hover:border-terra/30"
  }`;

  return (
    <form onSubmit={handleSubmit} className={`w-full ${variant === "hero" ? "max-w-md" : "max-w-lg mx-auto"}`}>
      <div className="flex flex-col gap-3">
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
        <input
          type="tel"
          placeholder="WhatsApp number (optional)"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          className={inputClass}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full py-3.5 bg-terra text-white font-semibold rounded-xl hover:bg-terra-light active:scale-[0.98] transition-all disabled:opacity-60 text-sm tracking-wide hover:shadow-lg hover:shadow-terra/25"
        >
          {status === "loading" ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin" width="16" height="16" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Joining...
            </span>
          ) : (
            "Join the Waitlist →"
          )}
        </button>

        {status === "error" && (
          <p className="text-xs text-red-400 text-center">Something went wrong. Please try again.</p>
        )}

        <p className={`text-xs text-center ${dark ? "text-white/25" : "text-muted"}`}>
          No spam. Just a launch notification + early access pricing.
        </p>
      </div>
    </form>
  );
}
