"use client";

import GetInTouchButton from "@/components/getintouch/GetInTouchButton";
import Container from "../../../../components/layout/container";
import HeadingPara from "../../../../components/layout/heading";
import Section from "../../../../components/layout/section-box";

const AITalentAcquisition = () => {
  return (
    <Section
      className="bg-gradient-to-r from-[#E5F1FA] to-[#007BD4] py-20"
      overlayClassName="bg-transparent"
    >
      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* LEFT SIDE – Text + Button */}
          <div className="max-w-[600px] text-black text-left">
            <img
              src="/images/workisy logo-01.png"
              alt="Workisy Logo"
              className="w-[140px] h-auto mb-10"
            />
            <HeadingPara
              title="Your AI-Driven Talent Acquisition Partner"
              para="At Workisy, we combine the power of Artificial Intelligence with deep industry insights to revolutionize the talent acquisition process."
              classNameHeading="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold"
              classNamePara="text-sm sm:text-base md:text-lg xl:text-xl font-normal mt-2"
              className=""
            />
            <div className="mt-4">
              <GetInTouchButton />
            </div>
            {/* <button className="mt-6 group flex items-center rounded-[32px] bg-[#0066B3] text-white font-semibold font-jost transition-all duration-300 hover:bg-[#A50F15] px-6 py-3 gap-3 text-[16px]">
              <span>Explore Now</span>
              <div className="relative flex items-center justify-center w-[30px] h-[30px]">
                <img
                  src="/images/navbar_icon.svg"
                  alt="Arrow icon"
                  className="w-[24px] h-[24px] group-hover:opacity-0 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    width="20"
                    height="20"
                    className="w-5 h-5 transform rotate-[-45deg] text-[#A50F15]"
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
            </button> */}
          </div>

          {/* RIGHT SIDE – Contact Form */}
          {/* <div className="w-full max-w-[560px] bg-white p-6 sm:p-10 rounded-[32px] shadow-[0_0_10px_5px_rgba(0,0,0,0.15)] z-10">
            <div className="w-full px-4 flex justify-center items-center">
              <div className="w-full max-w-[560px] flex flex-col items-center gap-4"> */}
          {/* Name Field */}
          {/* <div className="w-full h-14 px-6 flex items-center gap-4 rounded-[50px] border border-black/10 bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4.5 21C4.5 21 3 21 3 19.5C3 18 4.5 13.5 12 13.5C19.5 13.5 21 18 21 19.5C21 21 19.5 21 19.5 21H4.5ZM12 12C13.1935 12 14.3381 11.5259 15.182 10.682C16.0259 9.83807 16.5 8.69347 16.5 7.5C16.5 6.30653 16.0259 5.16193 15.182 4.31802C14.3381 3.47411 13.1935 3 12 3C10.8065 3 9.66193 3.47411 8.81802 4.31802C7.97411 5.16193 7.5 6.30653 7.5 7.5C7.5 8.69347 7.97411 9.83807 8.81802 10.682C9.66193 11.5259 10.8065 12 12 12Z"
                      fill="black"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full text-xs font-jost font-normal leading-[120%] focus:outline-none placeholder:text-black placeholder:font-jost placeholder:text-xs placeholder:font-normal placeholder:leading-[120%]"
                  />
                </div> */}

          {/* Mobile and Email Fields */}
          {/* <div className="w-full flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-1/2 h-14 px-6 flex items-center gap-2 rounded-[50px] border border-black/10 bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20.4375 9.23438C20.5406 9.23438 20.625 9.15 20.625 9.04688V7.64062C20.625 7.5375 20.5406 7.45312 20.4375 7.45312H16.5938V3.5625C16.5938 3.45937 16.5094 3.375 16.4062 3.375H14.9062C14.8031 3.375 14.7188 3.45937 14.7188 3.5625V7.45312H9.375V3.5625C9.375 3.45937 9.29063 3.375 9.1875 3.375H7.6875C7.58437 3.375 7.5 3.45937 7.5 3.5625V7.45312H3.5625C3.45937 7.45312 3.375 7.5375 3.375 7.64062V9.04688C3.375 9.15 3.45937 9.23438 3.5625 9.23438H7.5V14.7656H3.5625C3.45937 14.7656 3.375 14.85 3.375 14.9531V16.3594C3.375 16.4625 3.45937 16.5469 3.5625 16.5469H7.5V20.4375C7.5 20.5406 7.58437 20.625 7.6875 20.625H9.1875C9.29063 20.625 9.375 20.5406 9.375 20.4375V16.5469H14.7188V20.4375C14.7188 20.5406 14.8031 20.625 14.9062 20.625H16.4062C16.5094 20.625 16.5938 20.5406 16.5938 20.4375V16.5469H20.4375C20.5406 16.5469 20.625 16.4625 20.625 16.3594V14.9531C20.625 14.85 20.5406 14.7656 20.4375 14.7656H16.5938V9.23438H20.4375ZM14.7188 14.7656H9.375V9.23438H14.7188V14.7656Z"
                        fill="black"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="Enter Your Mobile Number"
                      className="w-full text-xs font-jost font-normal leading-[120%] focus:outline-none placeholder:text-black placeholder:font-jost placeholder:text-xs placeholder:font-normal placeholder:leading-[120%] placeholder:w-[137px] placeholder:flex-shrink-0"
                    />
                  </div>
                  <div className="w-full sm:w-1/2 h-14 px-6 flex items-center gap-2 rounded-[50px] border border-black/10 bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="flex-shrink-0"
                    >
                      <path
                        d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.061 11.683H12.06Z"
                        fill="black"
                      />
                    </svg>
                    <input
                      type="email"
                      placeholder="Business Email"
                      className="w-full text-xs font-jost font-normal leading-[120%] focus:outline-none placeholder:text-black placeholder:font-jost placeholder:text-xs placeholder:font-normal placeholder:leading-[120%]"
                    />
                  </div>
                </div> */}

          {/* Level of Experience Field */}
          {/* <div className="w-full h-14 px-6 flex items-center gap-4 rounded-[50px] border border-black/10 bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
                  <input
                    type="text"
                    placeholder="Level of experience do you need ?"
                    className="w-full text-xs font-jost font-normal leading-[120%] focus:outline-none placeholder:text-black placeholder:font-jost placeholder:text-xs placeholder:font-normal placeholder:leading-[120%]"
                  />
                </div> */}

          {/* Monthly budget Field */}
          {/* <div className="w-full h-14 px-6 flex items-center gap-4 rounded-[50px] border border-black/10 bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
                  <input
                    type="text"
                    placeholder="Your monthly budget for this role ?"
                    className="w-full text-xs font-jost font-normal leading-[120%] focus:outline-none placeholder:text-black placeholder:font-jost placeholder:text-xs placeholder:font-normal placeholder:leading-[120%]"
                  />
                </div> */}

          {/* Submit Button */}
          {/* <button className="w-full h-14 px-6 mt-4 flex justify-center items-center gap-4 rounded-[16px] bg-gradient-to-r from-[#002C4D] to-[#0066B3] shadow-[2px_4px_4px_2px_rgba(0,0,0,0.25)_inset] text-white font-jost font-semibold text-base leading-[120%]">
                  SUBMIT
                </button> */}
          {/* </div>
            </div>
          </div> */}
        </div>
      </Container>
    </Section>
  );
};

export default AITalentAcquisition;
