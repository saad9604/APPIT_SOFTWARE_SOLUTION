"use client";
import GetInTouchButton from "@/components/getintouch/GetInTouchButton";
import { useRef, useEffect } from "react";

export default function IndustryHero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section className="relative w-full h-[500px] xs:h-[550px] sm:h-[600px] md:h-[650px] lg:h-[724px] overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="absolute inset-0 object-cover w-full h-full"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/industry/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Main Content Container */}
      <div className="absolute inset-0 flex flex-col justify-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
          <div className="flex flex-col items-start gap-4 sm:gap-5 md:gap-6 ml-0 sm:ml-0 md:ml-0 lg:ml-0 xl:ml-0">
            {/* Heading and Text Container */}
            <div className="flex flex-col justify-center items-start gap-1 sm:gap-2 max-w-full sm:max-w-[450px] md:max-w-[550px] lg:max-w-[623px]">
              <h1 className="font-jost text-[#252525] text-2xl xs:text-3xl sm:text-3xl md:text-[36px] lg:text-[40px] font-semibold leading-[120%]">
                Oil and Gas IT Solutions
              </h1>

              <p
                className="font-jost text-[#252525] text-sm xs:text-base sm:text-lg md:text-[19px] lg:text-[21px] font-normal leading-[120%] max-w-full sm:max-w-[450px] md:max-w-[550px] lg:max-w-[601px]"
                style={{
                  WebkitTextStrokeWidth: "0.4px",
                  WebkitTextStrokeColor: "#000",
                }}
              >
                Empowering the Oil and Gas IT Solutions with Oracle EBS R12
                Customizations
              </p>
            </div>

            {/* Button */}
            <GetInTouchButton />
          </div>
        </div>
      </div>
    </section>
  );
}
