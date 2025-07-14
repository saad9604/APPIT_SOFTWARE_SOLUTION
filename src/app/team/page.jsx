"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import VisionaryLeader from "@/components/about/VisionaryLeader";
import Footer from "@/components/home/Footer";
import AboveFooterSection from "@/components/home/AboveFooterSection";
import ExtendedTeamSection from "@/components/team/ExtendedTeamSection";
import Script from "next/script";

export default function TeamPage() {
  // State to track when join us section is in viewport
  const [isJoinUsInView, setIsJoinUsInView] = useState(false);

  // Reference for the join us section
  const joinUsSectionRef = useRef(null);

  // Function to check if element is in viewport
  const checkInView = () => {
    if (!joinUsSectionRef.current) return;

    const rect = joinUsSectionRef.current.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;

    // If the top of the element is in view
    if (rect.top <= windowHeight * 0.8 && rect.bottom >= 0) {
      setIsJoinUsInView(true);
    } else {
      // Reset animations when scrolling away
      setIsJoinUsInView(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", checkInView);
    // Check on initial load
    checkInView();

    // Clean up
    return () => {
      window.removeEventListener("scroll", checkInView);
    };
  }, []);

  return (
    <>
      <Script
        type="application/ld+json"
        className="schemantra"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "WebPage",
            acquireLicensePage: "https://www.appitsoftware.com/team/",
          }),
        }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who are the people behind APPIT Software?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "APPIT Software is powered by a talented team of innovators, developers, designers, and business strategists who work together to drive innovation and deliver cutting-edge software solutions.",
                },
              },
              {
                "@type": "Question",
                name: "What makes the APPIT Software team unique?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The APPIT Software team combines technical expertise with creative problem-solving abilities, maintaining a focus on delivering value to clients through innovative and agile technology solutions.",
                },
              },
              {
                "@type": "Question",
                name: "Does APPIT Software have visionary leadership?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, APPIT Software is led by visionary leaders who guide the company's strategic direction and foster a culture of innovation, collaboration, and client-focused development.",
                },
              },
              {
                "@type": "Question",
                name: "How can I join the APPIT Software team?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can explore career opportunities with APPIT Software by visiting the careers page on their website, where you'll find current openings and information about the application process.",
                },
              },
              {
                "@type": "Question",
                name: "What is the company culture like at APPIT Software?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "APPIT Software maintains a collaborative, innovative culture where team members are encouraged to contribute ideas, take initiative, and work together to solve complex problems for clients.",
                },
              },
            ],
          }),
        }}
      />
      <main className="min-h-[3575px] bg-white">
        {/* Hero Section */}
        <section className="relative w-full flex justify-center items-center overflow-hidden h-[500px] xs:h-[550px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px]">
          {/* Video Background with Overlay */}
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            <video
              className="w-full h-full object-cover object-[center_85%] md:object-[center_90%] lg:object-[center_95%] translate-y-[5%] md:translate-y-[8%] lg:translate-y-[10%]"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/videos/team/team.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Content */}
          <div className="relative z-20 flex flex-col justify-center items-center w-full max-w-[1440px] mx-auto h-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[160px] mt-12 sm:mt-16 md:mt-0">
            <div className="flex flex-col justify-center items-center gap-1 sm:gap-2 md:gap-4 text-center px-2 sm:px-4 md:px-8">
              <h1 className="text-white font-jost text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[120%]">
                The People Behind Appit
              </h1>
              <p className="text-white font-jost text-sm xs:text-base sm:text-lg md:text-xl lg:text-[21px] font-semibold leading-[120%]">
                Get to know the minds driving innovation at AppitSoftware.
              </p>
            </div>
          </div>
        </section>

        {/* Visionary Leader Section */}
        <VisionaryLeader />

        {/* Extended Team Section */}
        <ExtendedTeamSection />

        {/* Join Us Section */}
        <section
          ref={joinUsSectionRef}
          className="w-full bg-[#F6F6F6] h-[180px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] flex items-center justify-center mb-0 pb-0"
        >
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
            <div
              className={`flex justify-center items-center transition-all duration-1000 ease-out ${
                isJoinUsInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Link
                href="/career"
                className="flex w-[140px] xs:w-[160px] sm:w-[200px] md:w-[260px] lg:w-[379px] h-[36px] xs:h-[40px] sm:h-[50px] md:h-[65px] lg:h-[82px] px-1.5 xs:px-2 sm:px-3 lg:px-5 py-[2px] xs:py-[3px] sm:py-[4px] justify-center items-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-[32px] rounded-[15px] xs:rounded-[20px] sm:rounded-[30px] lg:rounded-[50px] border border-[#4A0508] shadow-sm xs:shadow-md transition-all duration-300 ease-in-out hover:bg-black hover:border-white hover:border group"
              >
                <span className="text-[#252525] font-normal text-xs xs:text-sm sm:text-base md:text-xl lg:text-[27px] leading-[120%] transition-colors duration-300 ease-in-out group-hover:text-white">
                  Join Us
                </span>

                {/* Arrow that changes on hover */}
                <div className="relative w-3 h-3 xs:w-4 xs:h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10">
                  {/* Default arrow */}
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

                  {/* Hover arrow */}
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
              </Link>
            </div>
          </div>
        </section>
        <AboveFooterSection />
        <Footer />
      </main>
    </>
  );
}
