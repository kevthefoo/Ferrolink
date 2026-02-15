"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header({ currentPage = "home" }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: "/", label: "Home", key: "home" },
    { href: "/products", label: "Products", key: "products" },
    { href: "/blog", label: "Blog", key: "blog" },
    { href: "/about", label: "About", key: "about" },
    { href: "/contact", label: "Contact", key: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-[10001] transition-all duration-500 ${
        isMobileMenuOpen
          ? "bottom-0 bg-[#0B0F14]"
          : scrolled
            ? "border-b border-[#2D333B] bg-[#0B0F14]/95 backdrop-blur-xl"
            : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div
        className={`mx-auto flex max-w-7xl items-stretch justify-between px-6 py-6 lg:px-8 ${scrolled && !isMobileMenuOpen ? "py-4" : "py-6"}`}
      >
        {/* Logo */}
        <Link
          href="/"
          className={`group -my-6 flex items-center py-2${
            isMobileMenuOpen ? "invisible md:visible" : ""
          }`}
        >
          <div className="relative flex h-full items-center justify-center">
            <Image
              src="/assets/logo/ferrolink-logo.png"
              alt="FerroLink"
              width={60}
              height={60}
              className="h-full w-auto rounded-sm object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-2xl leading-none text-[#E6EDF3] transition-colors group-hover:text-[#E8530E]">
              FERROLINK
            </span>
            <span className="tracking-luxury text-[9px] font-medium text-nowrap text-[#656D76]">
              INDUSTRIAL TOOLS
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`tracking-luxury group relative text-[11px] font-semibold uppercase transition-colors ${
                currentPage === item.key
                  ? "text-[#E8530E]"
                  : "text-[#9BA4AE] hover:text-[#E6EDF3]"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-[2px] transition-all duration-300 ${
                  currentPage === item.key
                    ? "w-full bg-[#E8530E]"
                    : "w-0 bg-[#E8530E] group-hover:w-full"
                }`}
              />
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-copper rounded-sm px-5 py-2.5 text-[11px] tracking-[0.15em] uppercase"
          >
            Get Quote
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative z-10000 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-[1.5px] w-6 bg-[#9BA4AE] transition-all duration-300 ${
              isMobileMenuOpen ? "translate-y-[7px] rotate-45 bg-[#E8530E]" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-[#9BA4AE] transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-[#9BA4AE] transition-all duration-300 ${
              isMobileMenuOpen
                ? "-translate-y-[7px] -rotate-45 bg-[#E8530E]"
                : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu — lives inside the header, fills remaining space */}
      {isMobileMenuOpen && (
        <div className="absolute inset-0 flex flex-col items-center justify-center md:hidden">
          <div className="flex flex-col items-center gap-5 sm:gap-8">
            {navItems.map((item, i) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-display text-3xl sm:text-4xl md:text-5xl ${
                  currentPage === item.key
                    ? "accent-text"
                    : "text-[#E6EDF3] hover:text-[#E8530E]"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-4 flex flex-col items-center gap-3 text-sm text-[#656D76]">
              <span>+886 47766093</span>
              <span>support@ferrolink.io</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
