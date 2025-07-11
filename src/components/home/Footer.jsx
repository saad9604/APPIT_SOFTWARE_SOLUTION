"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#252525] font-jost mt-10 xs:mt-8 sm:mt-0">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-[120px] py-5 pb-6 sm:py-6 md:py-7 lg:h-[80px]">
        {/* Copyright Text */}
        <div className="w-full sm:w-auto text-white text-xs sm:text-sm md:text-base font-normal leading-[120%] text-center sm:text-left mb-3 sm:mb-0">
          Copyright @{" "}
          <Link
            href="/"
            className="text-white hover:text-[#EC1C26] transition-colors duration-300"
          >
            APPIT SOFTWARE
          </Link>{" "}
          2025. All rights reserved.
        </div>

        {/* Policy Links */}
        <div className="w-full sm:w-auto flex flex-row items-center justify-center sm:justify-start gap-1 sm:gap-2 text-white text-[10px] xs:text-xs sm:text-sm md:text-base font-normal leading-[120%] text-center">
          <Link
            href="/privacy"
            className="whitespace-nowrap hover:text-[#EC1C26] transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          <span className="mx-1 sm:mx-2 inline">|</span>
          <Link
            href="/termsconditions"
            className="whitespace-nowrap hover:text-[#EC1C26] transition-colors duration-300 text-[9px] xs:text-xs sm:text-sm md:text-base"
          >
            Terms & Conditions
          </Link>
          <span className="mx-1 sm:mx-2 inline">|</span>
          <a
            href="https://www.google.com/maps/place/APPIT+Software+Solutions+Private+Limited/@17.4468931,78.3522052,16z/data=!4m6!3m5!1s0x3bcb93e1cd2b5181:0x6953abcde44fb0fc!8m2!3d17.4469061!4d78.3543102!16s%2Fg%2F11dfgs33hw?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="whitespace-nowrap hover:text-[#EC1C26] transition-colors duration-300"
          >
            Sitemap
          </a>
        </div>
      </div>

      {/* Import Jost font explicitly using a style block */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800;900&display=swap");
      `}</style>
    </footer>
  );
};

export default Footer;
