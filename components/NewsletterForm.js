"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setMessage("Successfully subscribed! Check your email for confirmation.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section className="relative overflow-hidden border-t border-[#2D333B] bg-[#111820] py-24">
      {/* Subtle grid pattern */}
      <div className="grid-pattern absolute inset-0" />

      {/* Forge glow */}
      <div className="absolute top-0 left-1/2 h-[1px] w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#E8530E]/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <span className="tracking-luxury mb-6 inline-block text-[10px] font-semibold text-[#E8530E] uppercase">
          Stay Updated
        </span>

        <h3 className="font-display mb-4 text-4xl text-[#E6EDF3] md:text-5xl">
          JOIN THE FORGE
        </h3>

        <div className="copper-line mx-auto mb-6 w-16" />

        <p className="mb-10 text-sm leading-relaxed text-[#656D76]">
          Get the latest updates on new tool releases, industry insights, and
          exclusive promotions delivered to your inbox.
        </p>

        <form className="mx-auto mb-8 max-w-md" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={status === "loading"}
              className="input-dark flex-1 rounded-sm px-5 py-3.5 text-sm"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-copper cursor-pointer rounded-sm px-7 py-3.5 text-[11px] tracking-[0.15em] uppercase whitespace-nowrap"
            >
              {status === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="h-4 w-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Subscribing
                </span>
              ) : (
                "Subscribe"
              )}
            </button>
          </div>
        </form>

        {/* Status Messages */}
        {status === "success" && (
          <div className="mb-6 rounded-sm border border-green-500/20 bg-green-500/5 px-5 py-3 text-sm text-green-400">
            {message}
          </div>
        )}

        {status === "error" && (
          <div className="mb-6 rounded-sm border border-red-500/20 bg-red-500/5 px-5 py-3 text-sm text-red-400">
            {message}
          </div>
        )}

        {/* Benefits */}
        <div className="flex flex-col items-center justify-center gap-6 text-xs text-[#656D76] sm:flex-row">
          <span>New Product Releases</span>
          <span className="hidden h-1 w-1 rounded-full bg-[#2D333B] sm:block" />
          <span>Exclusive Promotions</span>
          <span className="hidden h-1 w-1 rounded-full bg-[#2D333B] sm:block" />
          <span>Professional Tips</span>
        </div>
      </div>
    </section>
  );
}
