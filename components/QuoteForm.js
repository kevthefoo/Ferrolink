"use client";

import { useState } from "react";

const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        e.target.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-sm border border-[#2D333B] bg-[#161D26] p-5 sm:p-8">
      <h4 className="font-display mb-1 text-2xl text-[#E6EDF3]">
        REQUEST A QUOTE
      </h4>
      <div className="copper-line-left mb-6 w-12" />

      {submitStatus === "success" && (
        <div className="mb-6 rounded-sm border border-green-500/20 bg-green-500/5 px-4 py-3 text-sm text-green-400">
          Quote request sent successfully! We&apos;ll respond within 1 business day.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 rounded-sm border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-400">
          Failed to send. Please try again or email us directly.
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            disabled={isSubmitting}
            className="input-dark rounded-sm px-4 py-3 text-sm"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            disabled={isSubmitting}
            className="input-dark rounded-sm px-4 py-3 text-sm"
          />
        </div>
        <input
          name="company"
          type="text"
          placeholder="Company Name"
          disabled={isSubmitting}
          className="input-dark w-full rounded-sm px-4 py-3 text-sm"
        />
        <select
          name="productInterest"
          disabled={isSubmitting}
          className="input-dark w-full rounded-sm px-4 py-3 text-sm"
        >
          <option value="">Product Category</option>
          <option value="hammers">Hammers</option>
          <option value="axes">Axes</option>
          <option value="gardening-tools">Garden Tools</option>
          <option value="handles">Tool Handles</option>
          <option value="other-tools">Other Tools</option>
          <option value="custom">Custom Solution</option>
        </select>
        <textarea
          name="message"
          rows="4"
          placeholder="Tell us about your requirements..."
          disabled={isSubmitting}
          className="input-dark w-full resize-none rounded-sm px-4 py-3 text-sm"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-copper w-full cursor-pointer rounded-sm py-3.5 text-[11px] tracking-[0.15em] uppercase disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Sending..." : "Send Quote Request"}
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;
