"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function ContactSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const checkInView = () => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top <= windowHeight * 0.7 && rect.bottom >= 0) {
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkInView);
    checkInView();
    return () => window.removeEventListener("scroll", checkInView);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white font-jost py-10 sm:py-12 md:py-16 lg:py-24"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-[55px]">
        <div
          className={`flex flex-col items-center gap-3 sm:gap-4 md:gap-[16px] w-full ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-1000 ease-out`}
        >
          <h2 className="text-[#252525] text-center text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-semibold leading-[120%]">
            Start Your <span className="text-[#EC1C26]">New Project</span> With APPIT
          </h2>
          <p
            className={`text-[#252525] text-center text-base sm:text-lg md:text-xl lg:text-[21px] font-semibold leading-[120%] w-full ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } transition-all duration-1000 ease-out delay-200`}
          >
            Let's Try! Get A Call From Support Team!
          </p>
        </div>

        <div
          className={`w-full max-w-[1229px] ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-1000 ease-out delay-300`}
        >
          <div className="w-full flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-[44px]">
            <ContactButton href="/contact" label="Contact Us" internal />
            <ContactButton href="mailto:info@appitsoftware.com" label="Email Us" />
            <ContactButton
              href="https://www.google.com/maps/place/APPIT+Software+Solutions+Private+Limited/@17.4468931,78.3522052,16z/data=!4m6!3m5!1s0x3bcb93e1cd2b5181:0x6953abcde44fb0fc!8m2!3d17.4469061!4d78.3543102!16s%2Fg%2F11dfgs33hw?entry=ttu"
              label="Location"
              target="_blank"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800;900&display=swap");
      `}</style>
    </section>
  );
}

function ContactButton({ href, label, target = "_self", internal = false }) {
  const base =
    "flex w-[130px] xs:w-[150px] sm:w-[200px] md:w-[260px] lg:w-[379px] h-[36px] xs:h-[40px] sm:h-[50px] md:h-[65px] lg:h-[82px] px-1.5 xs:px-2 sm:px-3 lg:px-5 justify-center items-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-[32px] rounded-[50px] border border-[#4A0508] shadow-sm transition-all duration-300 ease-in-out hover:bg-black hover:border-white group";

  const text =
    "text-[#252525] font-normal text-xs xs:text-sm sm:text-base md:text-xl lg:text-[27px] leading-[120%] transition-colors duration-300 ease-in-out group-hover:text-white";

  const arrow = (
    <div className="relative w-3 h-3 xs:w-4 xs:h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 40 40"
        fill="none"
        className="absolute transition-opacity duration-300 ease-in-out group-hover:opacity-0"
      >
        <path
          d="M6.66683 20H33.3335M33.3335 20L23.3335 30M33.3335 20L23.3335 10"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        className="transform rotate-[-45deg] absolute opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
      >
        <path
          d="M5 12H19M19 12L12 5M19 12L12 19"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );

  if (internal) {
    return (
      <Link href={href} className={base}>
        <span className={text}>{label}</span>
        {arrow}
      </Link>
    );
  }

  return (
    <a href={href} target={target} className={base}>
      <span className={text}>{label}</span>
      {arrow}
    </a>
  );
}
