"use client";
import React, { useEffect, useState } from "react";

const ScrollDown = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollClick = () => {
    if (showScrollToTop) {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Scroll to bottom
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:right-8 md:right-12 z-50">
      <button
        className="bg-red-600 text-white p-2 sm:p-3 rounded-full hover:bg-red-700 transition-colors"
        onClick={handleScrollClick}
        aria-label={showScrollToTop ? "Scroll to top" : "Scroll down"}
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {showScrollToTop ? (
            // Up arrow
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          ) : (
            // Down arrow
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          )}
        </svg>
      </button>
    </div>
  );
};

export default ScrollDown;
