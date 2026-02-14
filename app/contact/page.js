"use client";

import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { contactFAQs } from "./faq-data";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

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
    <div className="min-h-screen bg-[#0B0F14]">
      <Header currentPage="contact" />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="tracking-luxury mb-4 text-[10px] font-semibold uppercase text-[#E8530E]">
              Connect With Us
            </p>
            <h1 className="font-display mb-6 text-5xl text-[#E6EDF3] sm:text-6xl lg:text-7xl">
              GET IN TOUCH
            </h1>
            <div className="copper-line mx-auto mb-8 w-24" />
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#9BA4AE]">
              Ready to upgrade your toolkit? Our team is here to help you find
              the perfect tools for your specific needs and applications.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="card-dark rounded-sm border border-[#2D333B] p-8 lg:p-10">
              <p className="tracking-luxury mb-2 text-[10px] font-semibold uppercase text-[#E8530E]">
                Send a Message
              </p>
              <h2 className="font-display mb-8 text-3xl text-[#E6EDF3]">
                HOW CAN WE HELP?
              </h2>
              <div className="copper-line-left mb-8 w-16" />

              {/* Success Message */}
              {submitStatus === "success" && (
                <div className="mb-6 rounded-sm border border-[#E8530E]/30 bg-[#E8530E]/10 p-4">
                  <div className="flex items-center">
                    <svg
                      className="mr-3 h-5 w-5 text-[#E8530E]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm font-medium text-[#E6EDF3]">
                      Message sent successfully! We will get back to you within
                      1 business day.
                    </span>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <div className="mb-6 rounded-sm border border-red-800/30 bg-red-900/10 p-4">
                  <div className="flex items-center">
                    <svg
                      className="mr-3 h-5 w-5 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="text-sm font-medium text-red-300">
                      Failed to send message. Please try again or contact us
                      directly.
                    </span>
                  </div>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-[#9BA4AE]">
                      First Name *
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      required
                      disabled={isSubmitting}
                      className="input-dark w-full rounded-sm px-4 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-[#9BA4AE]">
                      Last Name *
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      required
                      disabled={isSubmitting}
                      className="input-dark w-full rounded-sm px-4 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-[#9BA4AE]">
                    Email Address *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    disabled={isSubmitting}
                    className="input-dark w-full rounded-sm px-4 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-[#9BA4AE]">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    disabled={isSubmitting}
                    className="input-dark w-full rounded-sm px-4 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="+886 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-[#9BA4AE]">
                    Company Name
                  </label>
                  <input
                    name="company"
                    type="text"
                    disabled={isSubmitting}
                    className="input-dark w-full rounded-sm px-4 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-[#9BA4AE]">
                    Product Interest *
                  </label>
                  <select
                    name="productInterest"
                    required
                    disabled={isSubmitting}
                    className="input-dark w-full rounded-sm px-4 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select Product Category</option>
                    <option value="hammers">Hammers</option>
                    <option value="axes">Axes</option>
                    <option value="gardening-tools">Gardening Tools</option>
                    <option value="tool-handles">Tool Handles</option>
                    <option value="other-tools">Other Tools</option>
                    <option value="custom-solution">Custom Solution</option>
                    <option value="bulk-order">Bulk Order</option>
                    <option value="general-inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-[#9BA4AE]">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    disabled={isSubmitting}
                    className="input-dark w-full resize-none rounded-sm px-4 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us about your project requirements, quantity needs, or any specific questions you have about our tools..."
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    name="newsletter"
                    type="checkbox"
                    id="newsletter"
                    disabled={isSubmitting}
                    className="mt-1 h-4 w-4 rounded-sm border-[#2D333B] bg-[#161D26] text-[#E8530E] focus:ring-[#E8530E] disabled:cursor-not-allowed"
                  />
                  <label
                    htmlFor="newsletter"
                    className="ml-3 text-sm text-[#9BA4AE]"
                  >
                    I would like to receive product updates and industry news
                    from FerroLink Tools
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-copper w-full rounded-sm py-3 text-sm font-semibold uppercase tracking-wider disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="mr-3 -ml-1 h-5 w-5 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
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
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Methods Card */}
              <div className="card-dark rounded-sm border border-[#2D333B] p-8">
                <p className="tracking-luxury mb-2 text-[10px] font-semibold uppercase text-[#E8530E]">
                  Reach Us
                </p>
                <h2 className="font-display mb-6 text-3xl text-[#E6EDF3]">
                  CONTACT INFORMATION
                </h2>
                <div className="copper-line-left mb-8 w-16" />

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sm border border-[#2D333B] bg-[#1C2430]">
                      <svg
                        className="h-5 w-5 text-[#E8530E]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-1 text-sm font-semibold text-[#E6EDF3]">
                        Phone
                      </h3>
                      <p className="text-sm text-[#9BA4AE]">+886 47766093</p>
                      <p className="mt-1 text-xs text-[#656D76]">
                        Monday - Friday, 8AM - 6PM
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="border-t border-[#2D333B] pt-6">
                    <div className="flex items-start">
                      <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sm border border-[#2D333B] bg-[#1C2430]">
                        <svg
                          className="h-5 w-5 text-[#E8530E]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="mb-1 text-sm font-semibold text-[#E6EDF3]">
                          Email
                        </h3>
                        <p className="text-sm text-[#9BA4AE]">
                          support@ferrolink.io
                        </p>
                        <p className="mt-1 text-xs text-[#656D76]">
                          We respond within 1 business day
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="border-t border-[#2D333B] pt-6">
                    <div className="flex items-start">
                      <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sm border border-[#2D333B] bg-[#1C2430]">
                        <svg
                          className="h-5 w-5 text-[#E8530E]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="mb-1 text-sm font-semibold text-[#E6EDF3]">
                          Address
                        </h3>
                        <p className="text-sm leading-relaxed text-[#9BA4AE]">
                          No. 38, Sec. 4, Fu 3rd Rd.,
                          <br />
                          Fuxing Township, Changhua County
                          <br />
                          506014, Taiwan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Department Contacts Card */}
              <div className="card-dark rounded-sm border border-[#2D333B] p-8">
                <p className="tracking-luxury mb-2 text-[10px] font-semibold uppercase text-[#E8530E]">
                  Direct Lines
                </p>
                <h2 className="font-display mb-6 text-3xl text-[#E6EDF3]">
                  DEPARTMENT CONTACTS
                </h2>
                <div className="copper-line-left mb-8 w-16" />

                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-sm border border-[#2D333B] bg-[#161D26] p-4">
                    <div>
                      <h4 className="text-sm font-semibold text-[#E6EDF3]">
                        Sales & Quotes
                      </h4>
                      <p className="mt-1 text-xs text-[#656D76]">
                        Product information and pricing
                      </p>
                    </div>
                    <span className="text-sm font-medium text-[#E8530E]">
                      Ext. 101
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-sm border border-[#2D333B] bg-[#161D26] p-4">
                    <div>
                      <h4 className="text-sm font-semibold text-[#E6EDF3]">
                        Technical Support
                      </h4>
                      <p className="mt-1 text-xs text-[#656D76]">
                        Tool specifications and applications
                      </p>
                    </div>
                    <span className="text-sm font-medium text-[#E8530E]">
                      Ext. 102
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-sm border border-[#2D333B] bg-[#161D26] p-4">
                    <div>
                      <h4 className="text-sm font-semibold text-[#E6EDF3]">
                        Custom Solutions
                      </h4>
                      <p className="mt-1 text-xs text-[#656D76]">
                        Special orders and modifications
                      </p>
                    </div>
                    <span className="text-sm font-medium text-[#E8530E]">
                      Ext. 103
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-sm border border-[#2D333B] bg-[#161D26] p-4">
                    <div>
                      <h4 className="text-sm font-semibold text-[#E6EDF3]">
                        Customer Service
                      </h4>
                      <p className="mt-1 text-xs text-[#656D76]">
                        Orders, returns, and warranty
                      </p>
                    </div>
                    <span className="text-sm font-medium text-[#E8530E]">
                      Ext. 104
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative bg-[#111820] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="tracking-luxury mb-4 text-[10px] font-semibold uppercase text-[#E8530E]">
              Common Questions
            </p>
            <h2 className="font-display mb-6 text-4xl text-[#E6EDF3]">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="copper-line mx-auto w-24" />
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {contactFAQs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-sm border border-[#2D333B] bg-[#161D26] transition-all duration-300 hover:border-[#E8530E]/30"
              >
                <summary className="flex cursor-pointer items-center justify-between p-6 text-sm font-semibold text-[#E6EDF3]">
                  {faq.question}
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-[#E8530E] transition-transform duration-300 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="border-t border-[#2D333B] px-6 pb-6 pt-4">
                  <p className="text-sm leading-relaxed text-[#9BA4AE]">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="card-dark rounded-sm border border-[#2D333B] p-8">
            <div className="mb-8 text-center">
              <p className="tracking-luxury mb-2 text-[10px] font-semibold uppercase text-[#E8530E]">
                Our Location
              </p>
              <h2 className="font-display text-3xl text-[#E6EDF3]">
                VISIT OUR FACILITY
              </h2>
            </div>
            <div className="h-96 overflow-hidden rounded-sm border border-[#2D333B]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196107.04521537392!2d120.32786123197343!3d24.033327734950394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34694f514896288f%3A0x9ec50566023e74d0!2z6YeR5ZKM6IyC5bel5qWt6IKh5Lu95pyJ6ZmQ5YWs5Y-4!5e0!3m2!1sen!2sau!4v1759752835462!5m2!1sen!2sau"
                allowFullScreen
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
