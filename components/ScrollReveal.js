"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.15,
  className = "",
  once = true,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [threshold, once]);

  const baseStyle = {
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    transitionDelay: `${delay}ms`,
  };

  const animations = {
    "fade-up": {
      hidden: { opacity: 0, transform: "translateY(40px)" },
      visible: { opacity: 1, transform: "translateY(0)" },
    },
    "fade-down": {
      hidden: { opacity: 0, transform: "translateY(-40px)" },
      visible: { opacity: 1, transform: "translateY(0)" },
    },
    "fade-left": {
      hidden: { opacity: 0, transform: "translateX(-50px)" },
      visible: { opacity: 1, transform: "translateX(0)" },
    },
    "fade-right": {
      hidden: { opacity: 0, transform: "translateX(50px)" },
      visible: { opacity: 1, transform: "translateX(0)" },
    },
    "fade-in": {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    "scale-up": {
      hidden: { opacity: 0, transform: "scale(0.9)" },
      visible: { opacity: 1, transform: "scale(1)" },
    },
    "zoom-in": {
      hidden: { opacity: 0, transform: "scale(0.8)" },
      visible: { opacity: 1, transform: "scale(1)" },
    },
  };

  const anim = animations[animation] || animations["fade-up"];
  const currentStyle = isVisible ? anim.visible : anim.hidden;

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...baseStyle, ...currentStyle }}
    >
      {children}
    </div>
  );
}
