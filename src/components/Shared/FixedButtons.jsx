import React, { useState, useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";

const CIRCLE_R = 20; // radius of the progress ring
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_R;

const FixedButtons = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;

      setScrollProgress(progress);
      setVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const strokeDashoffset = CIRCLE_CIRCUMFERENCE * (1 - scrollProgress);

  return (
    <>
      {/* ── Buy on Envato ── fixed bottom-left ── */}
      <a
        href="#"
        aria-label="Buy on Envato"
        className="fixed hidden bottom-10 left-10 z-50 md:flex items-center gap-2.5 bg-[#111] hover:bg-[#222] transition-colors duration-300 rounded-full px-4 py-2.5 shadow-lg select-none"
      >
        <span className="text-white text-[11px] font-bold tracking-[0.15em] uppercase whitespace-nowrap">
          Buy on
        </span>
        <img
          src="/envato.png"
          alt="Envato"
          className="h-5 w-auto object-contain"
          draggable={false}
        />
      </a>

      {/* ── Scroll to Top ── fixed bottom-right ── */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-10 right-10 z-50 w-12 h-12 flex items-center justify-center bg-[#111] hover:bg-[#222] transition-all duration-300 rounded-full shadow-lg cursor-pointer border-none ${
          visible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-75 pointer-events-none"
        }`}
      >
        {/* Circular SVG progress ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 48 48"
          fill="none"
        >
          {/* Track ring */}
          <circle
            cx="24"
            cy="24"
            r={CIRCLE_R}
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="2.5"
          />
          {/* Progress ring */}
          <circle
            cx="24"
            cy="24"
            r={CIRCLE_R}
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={CIRCLE_CIRCUMFERENCE}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: "stroke-dashoffset 0.1s linear" }}
          />
        </svg>

        {/* Arrow icon */}
        <BsArrowUp className="text-white text-base relative z-10" />
      </button>
    </>
  );
};

export default FixedButtons;
