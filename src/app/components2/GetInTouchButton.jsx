"use client";
import { useState } from "react";
import ContactModal from "./ContactModal";
import Link from "next/link";

const GetInTouchButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className={`hidden 2xl:flex lg:flex xl:flex custom940:flex items-center `}
      >
        <button
          onClick={() => setShowModal(true)}
          className={`group flex  items-center px-5 py-2 rounded-[32px] bg-blue-600 text-white font-semibold leading-[120%] font-jost border-none cursor-pointer transition-all duration-300 hover:bg-[#A50F15]`}
        >
          <span>Get In Touch</span>
          <div className="ml-2 relative flex items-center justify-center w-[30px] h-[30px] lg:w-[34px] lg:h-[34px]">
            {/* Default state */}
            <img
              src="/images/navbar_icon.svg"
              alt="Arrow icon"
              className="w-[30px] h-[30px] lg:w-[34px] lg:h-[34px] group-hover:opacity-0 transition-opacity duration-300"
              onError={(e) => {
                e.currentTarget.src = "/images/navbar_icon.png";
                e.currentTarget.onerror = () => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling?.classList.remove(
                    "hidden"
                  );
                };
              }}
            />
            <svg
              className="w-[30px] h-[30px] lg:w-[34px] lg:h-[34px] hidden group-hover:hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>

            {/* Hover state */}
            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                width="20"
                height="20"
                className="w-5 h-5 lg:w-6 lg:h-6 transform rotate-[-45deg] text-[#A50F15]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </button>
      </div>

      <ContactModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default GetInTouchButton;
