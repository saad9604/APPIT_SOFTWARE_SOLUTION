"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";

const AboveFooterSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const scrollPosition = window.scrollY;
      const sectionPosition =
        sectionRef.current.getBoundingClientRect().top + window.scrollY;
      const viewportHeight = window.innerHeight;
      const isMobile = window.innerWidth <= 480;

      if (
        scrollPosition + viewportHeight > sectionPosition &&
        scrollPosition < sectionPosition + sectionRef.current.offsetHeight
      ) {
        const distanceFromTop = scrollPosition - sectionPosition;
        const offset = Math.min(distanceFromTop * 0.05, isMobile ? 10 : 30);
        sectionRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white pt-0 px-4 md:px-6 lg:px-0 mb-6 sm:mb-8 md:mb-10 font-jost overflow-x-hidden"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col items-start w-full px-4 sm:px-6">
        {/* Quick Links Header */}
        <div className="w-full mb-6 sm:mb-8 md:mb-10 h-auto">
          <h2 className="text-[#252525] font-jost text-xl sm:text-2xl md:text-3xl font-bold leading-[120%] mb-4 sm:mb-6 md:mb-8 h-[70px]">
            Quick links
          </h2>

          {/* Links Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8 md:gap-12 w-full px-0 sm:px-4 md:px-[60px] lg:px-[120px] mb-4">
            {[...Array(4)].map((_, i) => (
              <div className="flex" key={i}>
                <div className="w-1 h-[129px] bg-[#0066B3]"></div>
                <div className="flex flex-col pl-3 sm:pl-4">
                  {["Link 1", "Link 2", "Link 3"].map((text, idx) => (
                    <div className="py-2 sm:py-2.5" key={idx}>
                      <Link
                        href="#"
                        className="group inline-block text-[#252525] hover:text-[#FF5555] font-jost text-sm sm:text-base font-bold leading-[120%] transition-all duration-300"
                      >
                        <div className="relative pl-0 group-hover:pl-5 sm:group-hover:pl-7 transition-all duration-300 ease-out">
                          <svg
                            className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ top: "2px" }}
                            width="12"
                            height="14"
                            viewBox="0 0 12 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.5 1.5L8 8L0.5 14.5"
                              stroke="#FF5555"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="relative z-10">{text}</span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Country Locations Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full ">
          {/* Country Cards */}
          {[
            {
              flag: "/images/india.svg",
              alt: "India",
              address:
                "IND: PSR Prime Towers, 704 C, 7th Floor, Adjacent to DLF Cyber City, Gachibowli, Hyderabad, Telangana, India-500032.",
            },
            {
              flag: "/images/uae.png",
              alt: "UAE",
              address:
                "UAE: IFZA Business Park, DDPDubai Silicon Oasis, DDP, Building A1, Dubai, United Arab Emirates.",
            },
            {
              flag: "/images/usa.png",
              alt: "USA",
              address:
                "USA:16192 Coastal Highway, Lewes, DE 19958, USA.",
            },
            {
              flag: "/images/saudi.png",
              alt: "Saudi",
              address:
                "KSA: Office 254, Al Olaya Street, Riyadh, Kingdom of Saudi Arabia.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start sm:items-center gap-3 sm:gap-4 w-full max-w-full"
            >
              <div className="w-8 h-5 sm:w-10 sm:h-6 flex-shrink-0 rounded overflow-hidden">
                <img
                  src={item.flag}
                  alt={`${item.alt} Flag`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-black font-jost text-[10px] xs:text-xs sm:text-xs font-normal leading-tight break-words">
                {item.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboveFooterSection;
//