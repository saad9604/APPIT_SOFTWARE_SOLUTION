"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const AboveFooterSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const scrollPosition = window.scrollY;
      const sectionPosition = sectionRef.current.getBoundingClientRect().top + window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Only apply the effect when the section is in view
      if (scrollPosition + viewportHeight > sectionPosition && scrollPosition < sectionPosition + sectionRef.current.offsetHeight) {
        const distanceFromTop = scrollPosition - sectionPosition;
        const offset = Math.min(distanceFromTop * 0.05, 30); // Limit the maximum offset
        sectionRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initialize the animation
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-white pt-0 px-4 md:px-6 lg:px-0 mb-6 sm:mb-8 md:mb-10 font-jost"
    >
      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto flex flex-col items-start w-full">        
        {/* Quick Links Container */}
        <div className="w-full mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-[#252525] font-jost text-xl sm:text-2xl md:text-3xl font-bold leading-[120%] mb-4 sm:mb-6 md:mb-8">
            Quick links
          </h2>
          
          {/* Actual Links Container */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8 md:gap-12 w-full px-0 sm:px-4 md:px-[60px] lg:px-[120px] mb-4">
            {/* Container 1 */}
            <div className="flex">
              <div className="w-1 h-[129px] bg-[#0066B3]"></div>
              <div className="flex flex-col pl-3 sm:pl-4">
                <div className="py-2 sm:py-2.5">
                  <Link href="#" className="group inline-block text-[#252525] hover:text-[#FF5555] font-jost text-sm sm:text-base font-bold leading-[120%] transition-all duration-300">
                    <div className="relative pl-0 group-hover:pl-5 sm:group-hover:pl-7 transition-all duration-300 ease-out">
                      <svg className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{top: '2px'}} width="12" height="14" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 1.5L8 8L0.5 14.5" stroke="#FF5555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="relative z-10">ServiceNow AI Solutions</span>
                    </div>
                  </Link>
                </div>
                <div className="py-2 sm:py-2.5">
                  <Link href="#" className="group inline-block text-[#252525] hover:text-[#FF5555] font-jost text-sm sm:text-base font-bold leading-[120%] transition-all duration-300">
                    <div className="relative pl-0 group-hover:pl-5 sm:group-hover:pl-7 transition-all duration-300 ease-out">
                      <svg className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{top: '2px'}} width="12" height="14" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 1.5L8 8L0.5 14.5" stroke="#FF5555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="relative z-10">Oracle AI Solutions</span>
                    </div>
                  </Link>
                </div>
                <div className="py-2 sm:py-2.5">
                  <Link href="#" className="group inline-block text-[#252525] hover:text-[#FF5555] font-jost text-sm sm:text-base font-bold leading-[120%] transition-all duration-300">
                    <div className="relative pl-0 group-hover:pl-5 sm:group-hover:pl-7 transition-all duration-300 ease-out">
                      <svg className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{top: '2px'}} width="12" height="14" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 1.5L8 8L0.5 14.5" stroke="#FF5555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="relative z-10">Legal AI Assistance</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Container 2 */}
            <div className="flex">
              <div className="w-1 h-[129px] bg-[#0066B3]"></div>
              <div className="flex flex-col pl-3 sm:pl-4">
                <div className="py-2 sm:py-2.5">
                  <Link href="products/ai-talent-acquisition" className="group inline-block text-[#252525] hover:text-[#FF5555] font-jost text-sm sm:text-base font-bold leading-[120%] transition-all duration-300">
                    <div className="relative pl-0 group-hover:pl-5 sm:group-hover:pl-7 transition-all duration-300 ease-out">
                      <svg className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{top: '2px'}} width="12" height="14" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 1.5L8 8L0.5 14.5" stroke="#FF5555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="relative z-10">AI-Driven Talent Acquisition</span>
                    </div>
                  </Link>
                </div>
                <div className="py-2 sm:py-2.5">
                  <Link href="#" className="group inline-block text-[#252525] hover:text-[#FF5555] font-jost text-sm sm:text-base font-bold leading-[120%] transition-all duration-300">
                    <div className="relative pl-0 group-hover:pl-5 sm:group-hover:pl-7 transition-all duration-300 ease-out">
                      <svg className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{top: '2px'}} width="12" height="14" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 1.5L8 8L0.5 14.5" stroke="#FF5555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="relative z-10">All-in-One CRM Solution</span>
                    </div>
                  </Link>
                </div>
                <div className="py-2 sm:py-2.5">
                  <Link href="#" className="group inline-block text-[#252525] hover:text-[#FF5555] font-jost text-sm sm:text-base font-bold leading-[120%] transition-all duration-300">
                    <div className="relative pl-0 group-hover:pl-5 sm:group-hover:pl-7 transition-all duration-300 ease-out">
                      <svg className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{top: '2px'}} width="12" height="14" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 1.5L8 8L0.5 14.5" stroke="#FF5555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="relative z-10">Outlook AI Copilot</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Container 3 */}
            <div className="flex">
              <div className="w-1 h-[129px] bg-[#0066B3]"></div>
              <div className="flex flex-col pl-3 sm:pl-4">
                <div className="py-2 sm:py-2.5">
                  <Link href="#" className="group inline-block text-[#252525] hover:text-[#FF5555] font-jost text-sm sm:text-base font-bold leading-[120%] transition-all duration-300">
                    <div className="relative pl-0 group-hover:pl-5 sm:group-hover:pl-7 transition-all duration-300 ease-out">
                      <svg className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{top: '2px'}} width="12" height="14" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 1.5L8 8L0.5 14.5" stroke="#FF5555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="relative z-10">ECommerce Services</span>
                    </div>
                  </Link>
                </div>
                <div className="py-2 sm:py-2.5">
                  <Link href="#" className="group inline-block text-[#252525] hover:text-[#FF5555] font-jost text-sm sm:text-base font-bold leading-[120%] transition-all duration-300">
                    <div className="relative pl-0 group-hover:pl-5 sm:group-hover:pl-7 transition-all duration-300 ease-out">
                      <svg className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{top: '2px'}} width="12" height="14" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 1.5L8 8L0.5 14.5" stroke="#FF5555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="relative z-10">Outlook AI Copilot</span>
                    </div>
                  </Link>
                </div>
                <div className="py-2 sm:py-2.5">
                  <Link href="#" className="group inline-block text-[#252525] hover:text-[#FF5555] font-jost text-sm sm:text-base font-bold leading-[120%] transition-all duration-300">
                    <div className="relative pl-0 group-hover:pl-5 sm:group-hover:pl-7 transition-all duration-300 ease-out">
                      <svg className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{top: '2px'}} width="12" height="14" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 1.5L8 8L0.5 14.5" stroke="#FF5555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="relative z-10">GenMind Consulting</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Container 4 */}
            <div className="flex">
              <div className="w-1 h-[129px] bg-[#0066B3]"></div>
              <div className="flex flex-col pl-3 sm:pl-4">
                <div className="py-2 sm:py-2.5">
                  <Link href="#" className="group inline-block text-[#252525] hover:text-[#FF5555] font-jost text-sm sm:text-base font-bold leading-[120%] transition-all duration-300">
                    <div className="relative pl-0 group-hover:pl-5 sm:group-hover:pl-7 transition-all duration-300 ease-out">
                      <svg className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{top: '2px'}} width="12" height="14" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 1.5L8 8L0.5 14.5" stroke="#FF5555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="relative z-10">Contact Us</span>
                    </div>
                  </Link>
                </div>
                <div className="py-2 sm:py-2.5">
                  <Link href="#" className="group inline-block text-[#252525] hover:text-[#FF5555] font-jost text-sm sm:text-base font-bold leading-[120%] transition-all duration-300">
                    <div className="relative pl-0 group-hover:pl-5 sm:group-hover:pl-7 transition-all duration-300 ease-out">
                      <svg className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{top: '2px'}} width="12" height="14" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 1.5L8 8L0.5 14.5" stroke="#FF5555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="relative z-10">Careers</span>
                    </div>
                  </Link>
                </div>
                <div className="py-2 sm:py-2.5">
                  <Link href="#" className="group inline-block text-[#252525] hover:text-[#FF5555] font-jost text-sm sm:text-base font-bold leading-[120%] transition-all duration-300">
                    <div className="relative pl-0 group-hover:pl-5 sm:group-hover:pl-7 transition-all duration-300 ease-out">
                      <svg className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{top: '2px'}} width="12" height="14" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 1.5L8 8L0.5 14.5" stroke="#FF5555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="relative z-10">About Us</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Countries Container */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          {/* India Container */}
          <div className="flex items-start sm:items-center gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
              <img src="/images/india.svg" alt="India Flag" className="w-full h-full" />
            </div>
            <p className="text-black font-jost text-[10px] xs:text-xs sm:text-xs font-normal leading-tight">
              IND: PSR Prime Towers, 704 C, 7th Floor, Adjacent to DLF Cyber City, Gachibowli, Hyderabad, Telangana, India-500032.
            </p>
          </div>
          
          {/* UAE Container */}
          <div className="flex items-start sm:items-center gap-3 sm:gap-4">
            <div className="w-8 h-4 sm:w-10 sm:h-5 rounded aspect-[2/1] overflow-hidden flex-shrink-0">
              <img src="/images/uae.png" alt="UAE Flag" className="w-full h-full object-cover" />
            </div>
            <p className="text-black font-jost text-[10px] xs:text-xs sm:text-xs font-normal leading-tight">
              UAE: IFZA Business Park, DDPDubai Silicon Oasis, DDP, Building A1, Dubai, United Arab Emirates.
            </p>
          </div>
          
          {/* USA Container */}
          <div className="flex items-start sm:items-center gap-3 sm:gap-4">
            <div className="w-8 h-4 sm:w-10 sm:h-[21px] rounded aspect-[40/21] overflow-hidden flex-shrink-0">
              <img src="/images/usa.png" alt="USA Flag" className="w-full h-full object-cover" />
            </div>
            <p className="text-black font-jost text-[10px] xs:text-xs sm:text-xs font-normal leading-tight">
              USA:16192 Coastal Highway, Lewes, DE 19958, USA.
            </p>
          </div>
          
          {/* Saudi Container */}
          <div className="flex items-start sm:items-center gap-3 sm:gap-4">
            <div className="w-8 h-5 sm:w-10 sm:h-[27px] rounded aspect-[40/27] overflow-hidden flex-shrink-0">
              <img src="/images/saudi.png" alt="Saudi Arabia Flag" className="w-full h-full object-cover" />
            </div>
            <p className="text-black font-jost text-[10px] xs:text-xs sm:text-xs font-normal leading-tight">
              KSA: Office 254, Al Olaya Street, Riyadh, Kingdom of Saudi Arabia.
            </p>
          </div>
        </div>
      </div>
      
      {/* Import Jost font explicitly */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800;900&display=swap');
        
        @media (max-width: 479px) {
          .grid-cols-1 > div {
            margin-bottom: 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboveFooterSection;