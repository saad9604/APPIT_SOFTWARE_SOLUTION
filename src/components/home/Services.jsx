"use client"
import React, { useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"

const contentSections = [
  {
    heading: "Oracle AI",
    paragraph:
      "APPIT Software - Oracle consultation services can helps the IT business and cloud services with faster adoption and return.",
    video: "/videos/consultation.mp4",
    link: "/services/oracle-ai",
  },
  {
    heading: "Offshore Development",
    paragraph:
      "Appit Software - offers reliable and cost-effective offshore development services that help you accelerate project delivery, reduce overheads",
    video: "/videos/off_video.mp4",
    link: "/services/odc",
  },
  {
    heading: "Cyber Security Solutions",
    paragraph:
      "APPIT Software offers cutting-edge cybersecurity solutions designed to protect your business from evolving digital threats.",
    video: "/videos/cyber_video.mp4",
    link: "/services/cybersecurity",
  },
  {
    heading: "AI Solutions & Integration",
    paragraph:
      "APPIT Software, we empower businesses with cutting-edge AI-driven IT solutions, cloud services, and Oracle expertise. Our mission is to streamline your operations..",
    video: "/videos/ai_video.mp4",
    link: "/services/services-now-ai",
  },
  {
    heading: "ECommerce Services",
    paragraph:
      "We help businesses launch, scale, and optimize their online stores with custom-built e-commerce platforms tailored to deliver.",
    video: "/videos/ecommerce_video.mp4",
    link: "/services/ecommerce-services",
  },
  {
    heading: "Digital Transformation",
    paragraph:
      "APPIT Software Solutions addresses challenging prospects and reach your niche market with the use of our cloud service.",
    video: "/videos/mobile_video.mp4",
    link: "/services/digital-transformation-services",
  },
]

export default function Services() {
  const [hover, setHover] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [currentlyVisibleContent, setCurrentlyVisibleContent] = useState(0)
  const spacerRef = React.useRef(null)
  const safeCurrentIndex = Math.min(Math.max(0, currentIndex), contentSections.length - 1)
  const gsapInitialized = React.useRef(false)

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const isSmall = window.innerWidth < 760
      setIsSmallScreen(isSmall)
      if (isSmall) {
        const bgText = document.querySelector(".background-text")
        if (bgText) {
          bgText.style.minHeight = "auto"
          bgText.style.height = "auto"
        }
        const spacers = document.querySelectorAll(
          '[style*="position: relative"][style*="display: block"][style*="width: 100%"]',
        )
        spacers.forEach((spacer) => {
          if (spacer.parentNode && spacer.parentNode.classList.contains("background-text")) {
            spacerRef.current = spacer
            spacer.style.height = "auto"
            spacer.style.minHeight = "0"
            spacer.style.maxHeight = "none"
            spacer.style.padding = "0"
          }
        })
      }
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  useEffect(() => {
    if (window.innerWidth <= 760) {
      setTimeout(() => {
        const bgText = document.querySelector(".background-text")
        if (bgText) {
          bgText.style.height = "auto"
          bgText.style.minHeight = "auto"
        }
        const spacers = document.querySelectorAll(
          '[style*="position: relative"][style*="display: block"][style*="width: 100%"]',
        )
        spacers.forEach((spacer) => {
          spacer.style.height = "auto"
          spacer.style.minHeight = "0"
          spacer.style.padding = "0"
        })
      }, 100)
    }
  }, [isSmallScreen])

  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      .hover-button:hover {
        background-color: #005592 !important;
        border-color: #005592 !important;
      }
      .hover-button:hover span {
        color: #FFFFFF !important;
      }
      .hover-button:hover rect {
        stroke: #FFFFFF !important;
      }
      .hover-button:hover path {
        fill: #FFFFFF !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  useEffect(() => {
    if (gsapInitialized.current) return
    gsapInitialized.current = true

    const isLargeEnoughForAnimations = window.innerWidth > 760
    gsap.registerPlugin(ScrollTrigger)

    const timer = setTimeout(() => {
      const INTRO_EL = document.querySelector(".background-text")
      if (!INTRO_EL) return

      if (!isLargeEnoughForAnimations) return

      let scrollMultiplier = 4.5
      if (window.innerWidth >= 760 && window.innerWidth < 900) {
        scrollMultiplier = 5.5
      } else if (window.innerWidth >= 900 && window.innerWidth < 1200) {
        scrollMultiplier = 5.0
      }

      const getPos = (el, pos) => {
        const BOUND = el.getBoundingClientRect()
        return BOUND.top + BOUND.height * pos
      }

      const masterTL = gsap.timeline({
        scrollTrigger: {
          scrub: 0.5,
          trigger: ".background-text",
          pin: ".background-text",
          start: () => getPos(INTRO_EL, 0),
          end: () => getPos(INTRO_EL, scrollMultiplier),
          onUpdate: (self) => {
            const progress = self.progress
            let visibleIndex = 0

            if (progress <= 0.15) visibleIndex = 0
            else if (progress <= 0.35) visibleIndex = 1
            else if (progress <= 0.55) visibleIndex = 2
            else if (progress <= 0.75) visibleIndex = 3
            else if (progress <= 0.9) visibleIndex = 4
            else visibleIndex = 5

            setCurrentlyVisibleContent(visibleIndex)

            if (window.innerWidth <= 760 && self.spacer) {
              self.kill(true)
            }
          },
        },
      })

      // Animation for content1
      masterTL.fromTo(
        ".content1",
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            scrub: 0.5,
            trigger: ".background-text",
            start: () => getPos(INTRO_EL, 0.3),
            end: () => getPos(INTRO_EL, 0.5),
          },
        },
      )

      // Animation for content2
      masterTL.fromTo(
        ".content2",
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            scrub: 0.5,
            trigger: ".background-text",
            start: () => getPos(INTRO_EL, 0.6),
            end: () => getPos(INTRO_EL, 1.0),
          },
        },
      )

      // Animation for video 2
      masterTL.fromTo(
        ".video2",
        { opacity: 1, y: 550 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            scrub: 0.5,
            trigger: ".background-text",
            start: () => getPos(INTRO_EL, 0.3),
            end: () => getPos(INTRO_EL, 1.0),
          },
        },
      )

      // Animation for content2
      masterTL.fromTo(
        ".content2",
        {},
        {
          opacity: 0,
          y: 0,
          scrollTrigger: {
            scrub: 0.5,
            trigger: ".background-text",
            start: () => getPos(INTRO_EL, 1.1),
            end: () => getPos(INTRO_EL, 1.3),
          },
        },
      )

      // Animation for content3
      masterTL.fromTo(
        ".content3",
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            scrub: 0.5,
            trigger: ".background-text",
            start: () => getPos(INTRO_EL, 1.4),
            end: () => getPos(INTRO_EL, 1.8),
          },
        },
      )

      // Animation for video3
      masterTL.fromTo(
        ".video3",
        { opacity: 1, y: 550 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            scrub: 0.5,
            trigger: ".background-text",
            start: () => getPos(INTRO_EL, 1.1),
            end: () => getPos(INTRO_EL, 1.8),
          },
        },
      )

      // Animation for content3
      masterTL.fromTo(
        ".content3",
        {},
        {
          opacity: 0,
          y: 0,
          scrollTrigger: {
            scrub: 0.5,
            trigger: ".background-text",
            start: () => getPos(INTRO_EL, 1.9),
            end: () => getPos(INTRO_EL, 2.1),
          },
        },
      )

      // Animation for content4
      masterTL.fromTo(
        ".content4",
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            scrub: 0.5,
            trigger: ".background-text",
            start: () => getPos(INTRO_EL, 2.2),
            end: () => getPos(INTRO_EL, 2.6),
          },
        },
      )

      // Animation for video4
      masterTL.fromTo(
        ".video4",
        { opacity: 1, y: 550 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            scrub: 0.5,
            trigger: ".background-text",
            start: () => getPos(INTRO_EL, 1.9),
            end: () => getPos(INTRO_EL, 2.6),
          },
        },
      )

      // Animation for content4
      masterTL.fromTo(
        ".content4",
        {},
        {
          opacity: 0,
          y: 0,
          scrollTrigger: {
            scrub: 0.5,
            trigger: ".background-text",
            start: () => getPos(INTRO_EL, 2.7),
            end: () => getPos(INTRO_EL, 2.9),
          },
        },
      )

      // Animation for content5
      masterTL.fromTo(
        ".content5",
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            scrub: 0.5,
            trigger: ".background-text",
            start: () => getPos(INTRO_EL, 3.0),
            end: () => getPos(INTRO_EL, 3.4),
          },
        },
      )

      // Animation for video5
      masterTL.fromTo(
        ".video5",
        { opacity: 1, y: 550 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            scrub: 0.5,
            trigger: ".background-text",
            start: () => getPos(INTRO_EL, 2.7),
            end: () => getPos(INTRO_EL, 3.4),
          },
        },
      )

      // Animation for content5
      masterTL.fromTo(
        ".content5",
        {},
        {
          opacity: 0,
          y: 0,
          scrollTrigger: {
            scrub: 0.5,
            trigger: ".background-text",
            start: () => getPos(INTRO_EL, 3.5),
            end: () => getPos(INTRO_EL, 3.7),
          },
        },
      )

      // Animation for content6
      masterTL.fromTo(
        ".content6",
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            scrub: 0.5,
            trigger: ".background-text",
            start: () => getPos(INTRO_EL, 3.8),
            end: () => getPos(INTRO_EL, 4.2),
          },
        },
      )

      // Animation for video6
      masterTL.fromTo(
        ".video6",
        { opacity: 1, y: 550 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            scrub: 0.5,
            trigger: ".background-text",
            start: () => getPos(INTRO_EL, 3.5),
            end: () => getPos(INTRO_EL, 4.2),
          },
        },
      )
    }, 100)

    return () => {
      clearTimeout(timer)
      try {
        const scrollTriggers = ScrollTrigger.getAll()
        scrollTriggers.forEach((trigger) => {
          trigger.kill(true)
        })
        gsapInitialized.current = false
      } catch (err) {
        console.error("Error during ScrollTrigger cleanup:", err)
      }
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 760) {
        try {
          const scrollTriggers = ScrollTrigger.getAll()
          scrollTriggers.forEach((trigger) => {
            trigger.kill(true)
          })
          const spacers = document.querySelectorAll(
            '[style*="position: relative"][style*="display: block"][style*="width: 100%"]',
          )
          spacers.forEach((spacer) => {
            if (spacer.parentNode && spacer.parentNode.classList.contains("background-text")) {
              spacerRef.current = spacer
              spacer.style.height = "auto"
              spacer.style.minHeight = "0"
              spacer.style.maxHeight = "none"
              spacer.style.padding = "0"
              spacer.classList.add("gsap-spacer")
            }
          })
          const bgText = document.querySelector(".background-text")
          if (bgText) {
            bgText.style.minHeight = "auto"
            bgText.style.height = "auto"
          }
        } catch (err) {
          console.error("Error during ScrollTrigger cleanup on resize:", err)
        }
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const style = document.createElement("style")
    document.body.style.overflowX = "hidden"
    document.body.style.overflowY = "auto"

    style.innerHTML = `
      /* Medium-sized screens (760px to 1345px) */
      @media screen and (min-width: 760px) and (max-width: 1345px) {
        /* Main container adjustments */
        .services-container {
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          max-width: 95% !important;
          gap: 20px !important;
          padding: 0 20px !important;
        }
        
        /* Text container adjustments */
        .services-container .text-container {
          width: 40% !important;
          min-width: 280px !important;
          height: 450px !important;
          padding: 20px 15px !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: center !important;
          align-items: center !important;
        }
        
        /* Video container adjustments */
        .services-container .video-container {
          width: 60% !important;
          height: 450px !important;
        }
        
        /* Section height adjustment */
        .background-text {
          height: 100vh !important;
          min-height: 100vh;
          padding: 40px 0 !important;
        }
        
        /* Text size adjustments */
        .text-container h3 {
          font-size: 28px !important;
          text-align: center !important;
        }
        
        .text-container p {
          font-size: 16px !important;
          text-align: center !important;
          margin-bottom: 50px !important;
        }
        
        .text-container .button-container {
          position: absolute !important;
          bottom: 25px !important;
          width: calc(100% - 30px) !important;
        }
        
        .text-container button span {
          font-size: 16px !important;
        }
        
        /* Small screen-specific styles for smaller medium screens */
        @media screen and (min-width: 760px) and (max-width: 900px) {
          .services-container .text-container {
            width: 45% !important;
            min-width: 250px !important;
            height: 400px !important;
          }
          
          .services-container .video-container {
            width: 55% !important;
            height: 400px !important;
          }
          
          .text-container h3 {
            font-size: 24px !important;
          }
          
          .text-container p {
            font-size: 15px !important;
            margin-top: 10px !important;
          }
          
          .text-container .button-container {
            height: 38px !important;
          }
          
          .text-container button span {
            font-size: 14px !important;
          }
          
          .text-container svg {
            width: 24px !important;
            height: 24px !important;
            min-width: 24px !important;
          }
        }
      }
      
      /* Small screens (below 760px) */
      @media screen and (max-width: 759px) {
        /* Container settings */
        .background-text {
          height: auto !important;
          padding: 40px 0 !important;
          max-height: none !important;
          overflow-x: hidden !important;
          overflow-y: auto !important;
          background: #1A1A1A !important;
          position: relative !important;
          overscroll-behavior: contain !important;
          transform: none !important;
        }
        
        /* Fix any pinned elements */
        .background-text.pin-spacer,
        div.pin-spacer {
          height: auto !important;
          min-height: auto !important;
          max-height: none !important;
          padding: 0 !important;
          margin: 0 !important;
        }
        
        /* Fix GSAP-generated spacers */
        .gsap-spacer,
        .background-text > div[style*="position: relative"][style*="display: block"][style*="width: 100%"],
        .background-text [style*="height: 100vh"],
        .background-text [style*="height:100vh"] {
          height: auto !important;
          min-height: 0 !important;
          max-height: none !important;
          padding: 0 !important;
          margin: 0 !important;
        }
        
        /* Ensure consistent container widths for small screens with increased gaps */
        .service-pair {
          display: flex !important;
          flex-direction: column !important;
          width: 100% !important;
          margin-bottom: 80px !important; /* Increased from 60px to 80px */
          align-items: center !important;
          scroll-margin-top: 40px !important;
          max-width: 500px !important;
        }
        
        /* Text container adjustments */
        .text-container,
        .video-container {
          width: 100% !important;
          max-width: 100% !important;
          box-sizing: border-box !important;
        }
        
        .text-container {
          height: 280px !important;
          min-height: 280px !important;
          margin-bottom: 30px !important; /* Increased from 15px to 30px */
          padding: 20px 15px !important;
          background: #F0F7F8 !important;
          position: relative !important;
          border-radius: 24px !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: center !important;
          align-items: center !important;
        }
        
        /* Video container adjustments */
        .video-container {
          height: 280px !important;
          margin-bottom: 60px !important; /* Increased from 40px to 60px */
          overflow: hidden !important;
        }
        
        /* Text size adjustments */
        .section-heading {
          font-size: 36px !important;
        }
        
        .section-heading span {
          font-size: 36px !important;
        }
        
        .section-subheading {
          font-size: 18px !important;
        }
        
        .small-screen-content {
          display: flex !important;
          flex-direction: column !important;
          justify-content: center !important;
          align-items: center !important;
          height: 100% !important;
          position: relative !important;
        }
        
        .text-container h3 {
          font-size: 24px !important;
          color: #055087 !important;
          margin: 0 !important;
        }
        
        .text-container p {
          font-size: 16px !important;
          margin-top: 5px !important;
          margin-bottom: 45px !important;
          color: #252525 !important;
          text-align: center !important;
          padding: 0 10px !important;
          flex-grow: 0 !important;
        }
        
        .text-container .button-container {
          position: absolute !important;
          bottom: 20px !important;
          width: calc(100% - 40px) !important;
          max-width: 300px !important;
          margin: 0 auto !important;
        }
        
        .text-container button {
          padding: 0px 10px 0px 15px !important;
          border-color: #000 !important;
        }
        
        .text-container button span {
          font-size: 16px !important;
          color: #454545 !important;
        }
        
        .text-container svg {
          width: 26px !important;
          height: 26px !important;
          min-width: 26px !important;
        }
        
        .text-container svg rect {
          stroke: #252525 !important;
        }
        
        .text-container svg path {
          fill: #252525 !important;
        }
        
        /* Fix scrolling issues */
        html, body {
          overflow-x: hidden !important;
          overflow-y: auto !important;
        }
        
        /* Target any GSAP-created spacers */
        [style*="position: relative"][style*="display: block"][style*="width: 100%"],
        [style*="position:relative"][style*="display:block"][style*="width:100%"],
        .pin-spacer,
        [style*="height: 100vh"],
        [style*="height:100vh"] {
          height: auto !important;
          min-height: 0 !important;
          max-height: none !important;
          padding-top: 0 !important;
          padding-bottom: 0 !important;
        }
        
        /* Fix button positioning */
        .button-container {
          position: absolute !important;
          bottom: 10px !important;
          left: 0 !important;
          right: 0 !important;
          margin: 0 auto !important;
          width: calc(100% - 40px) !important;
          max-width: 300px !important;
          height: 40px !important;
        }
        
        /* Make sure all cards are visible in the small screen view */
        .small-screen-content.content1,
        .small-screen-content.content2,
        .small-screen-content.content3,
        .small-screen-content.content4,
        .small-screen-content.content5,
        .small-screen-content.content6 {
          position: static !important;
          opacity: 1 !important;
          display: block !important;
          background: transparent !important;
        }
        
        /* Make all videos visible in small screen view */
        .small-screen-video video {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
        }
        
        /* Center content */
        .services-small-screen {
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          width: 100% !important;
          max-width: 600px !important;
          margin: 0 auto !important;
          padding: 0 15px !important;
        }
      }
    `

    document.head.appendChild(style)

    const handleScroll = () => {
      if (window.innerWidth < 760) {
        document.querySelectorAll(".service-pair").forEach((pair) => {
          pair.style.display = "flex"
          pair.style.opacity = "1"
        })

        if (spacerRef.current) {
          spacerRef.current.style.height = "auto"
          spacerRef.current.style.minHeight = "0"
          spacerRef.current.style.maxHeight = "none"
          spacerRef.current.style.padding = "0"
        }

        document.body.style.overflowY = "auto"
        document.body.style.overflowX = "hidden"
        document.documentElement.style.overflowY = "auto"
        document.documentElement.style.overflowX = "hidden"
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      document.head.removeChild(style)
      window.removeEventListener("scroll", handleScroll)
      document.body.style.overflow = ""
    }
  }, [])

  // Render for small screens
  const renderSmallScreenLayout = () => {
    return (
      <div
        className="services-small-screen"
        style={{
          overflow: "visible",
          paddingBottom: "80px", // Increased from 60px
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          margin: "0 auto",
          gap: "20px", // Added gap between service pairs
        }}
      >
        {contentSections.map((section, index) => (
          <div
            className="service-pair"
            key={index}
            id={"service-" + index}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              maxWidth: "500px",
              marginBottom: "80px", // Increased gap between service pairs
              alignItems: "center",
              gap: "30px", // Added gap between text and video within each pair
            }}
          >
            <div
              className="text-container"
              style={{
                background: "#F0F7F8",
                borderRadius: "24px",
                width: "100%",
                height: "280px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginBottom: "0", // Removed individual margin since we're using gap
              }}
            >
              <div
                className={"small-screen-content content" + (index + 1)}
                id={"content-" + index}
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "15px 5px",
                  background: "#F0F7F8",
                  position: "relative",
                  height: "280px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  id={"heading-" + index}
                  style={{
                    width: "100%",
                    borderBottom: "1px solid #888",
                    marginBottom: "10px",
                    paddingBottom: "8px",
                    marginTop: "0",
                  }}
                >
                  <h3
                    style={{
                      width: "100%",
                      color: "#055087",
                      textAlign: "center",
                      fontFamily: "Jost",
                      fontSize: "24px",
                      fontWeight: 600,
                      lineHeight: "120%",
                      margin: 0,
                    }}
                  >
                    {section.heading}
                  </h3>
                </div>
                <p
                  style={{
                    width: "95%",
                    color: "#252525",
                    textAlign: "center",
                    fontFamily: "Jost",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "130%",
                    margin: "5px auto 45px",
                    padding: "0 5px",
                  }}
                >
                  {section.paragraph}
                </p>
                <div
                  className="button-container small-screen-button"
                  style={{
                    display: "flex",
                    height: "40px",
                    padding: "0px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "15px",
                    flexShrink: 0,
                    alignSelf: "stretch",
                    position: "absolute",
                    bottom: "10px",
                    left: 0,
                    right: 0,
                    margin: "0 auto",
                    width: "calc(100% - 50px)",
                  }}
                >
                  <Link
                    href={section.link}
                    className="hover-button"
                    style={{
                      display: "flex",
                      padding: "0px 10px 0px 15px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "15px",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      borderRadius: "24px",
                      backgroundColor: "transparent",
                      border: "1px solid #000",
                      cursor: "pointer",
                      height: "100%",
                      transition: "all 0.3s ease",
                      textDecoration: "none",
                    }}
                  >
                    <span
                      style={{
                        color: "#454545",
                        textAlign: "center",
                        fontFamily: "Jost",
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: "120%",
                      }}
                    >
                      Read More
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 33 32"
                      fill="none"
                      style={{ minWidth: "26px", height: "26px" }}
                    >
                      <rect
                        x="31.75"
                        y="31.25"
                        width="30.5"
                        height="30.5"
                        rx="15.25"
                        transform="rotate(180 31.75 31.25)"
                        stroke="#252525"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M6.5 15.9992C6.5 15.6812 6.629 15.3761 6.85863 15.1513C7.08825 14.9264 7.39969 14.8 7.72444 14.8H22.0699L16.7036 10.0976C16.5827 9.99293 16.4841 9.86586 16.4135 9.72371C16.3429 9.58157 16.3017 9.42716 16.2923 9.26937C16.2828 9.11157 16.3053 8.95351 16.3585 8.80426C16.4116 8.65501 16.4944 8.51753 16.602 8.39971C16.7096 8.2819 16.8399 8.18608 16.9854 8.11777C17.131 8.04946 17.2889 8.01 17.4501 8.00167C17.6112 7.99333 17.7725 8.01629 17.9246 8.06921C18.0766 8.12213 18.2165 8.20398 18.3362 8.31004L26.091 15.1054C26.2196 15.2179 26.3226 15.3557 26.3931 15.5099C26.4636 15.6641 26.5 15.8311 26.5 16C26.5 16.1689 26.4636 16.3359 26.3931 16.4901C26.3226 16.6443 26.2196 16.7821 26.091 16.8946L18.3362 23.69C18.2165 23.796 18.0766 23.8779 17.9246 23.9308C17.7725 23.9837 17.6112 24.0067 16.9501 23.9983C16.7889 23.99 16.631 23.9505 16.4854 23.8822C16.3399 23.8139 16.2096 23.7181 16.102 23.6003C15.9944 23.4825 15.9116 23.345 15.8585 23.1957C15.8053 23.0465 15.7828 22.8884 15.7923 22.7306C15.8017 22.5728 15.8429 22.4184 15.9135 22.2763C15.9841 22.1341 16.0827 22.0071 16.7036 21.9024L22.0699 17.1984H7.72444C7.39969 17.1984 7.08825 17.072 6.85863 16.8472C6.629 16.6223 6.5 16.3172 6.5 15.9992Z"
                        fill="#252525"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="video-container small-screen-video"
              style={{
                width: "100%",
                marginBottom: "0", // Removed individual margin since we're using gap
              }}
            >
              <video
                src={section.video}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "24px",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    )
  }

  // Create content container component
  const ContentContainer = ({ section, index, className }) => (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "30px 10px",
        position: "absolute",
        background: "#f0f7f8",
        zIndex: currentlyVisibleContent === index ? 10 : 1,
        pointerEvents: currentlyVisibleContent === index ? "auto" : "none",
      }}
      className={className}
    >
      <div
        style={{
          width: "100%",
          borderBottom: "1px solid #888",
          marginBottom: "20px",
          paddingBottom: "10px",
        }}
      >
        <h3
          style={{
            width: "100%",
            color: "#055087",
            textAlign: "center",
            fontFamily: "Jost",
            fontSize: "40px",
            fontWeight: 600,
            lineHeight: "120%",
          }}
        >
          {section.heading}
        </h3>
      </div>
      <p
        style={{
          width: "90%",
          color: "#252525",
          textAlign: "center",
          fontFamily: "Jost",
          fontSize: "21px",
          fontWeight: 600,
          lineHeight: "130%",
          margin: "40px auto 0",
        }}
      >
        {section.paragraph}
      </p>
      {/* Button Container */}
      <div
        style={{
          display: "flex",
          height: "48px",
          padding: "0px 16px",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexShrink: 0,
          alignSelf: "stretch",
          position: "absolute",
          bottom: "50px",
          width: "calc(100% - 32px)",
        }}
        className="button-container"
      >
        <Link
          href={section.link}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            display: "flex",
            padding: "0px 10px 0px 20px",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            flex: "1 0 0",
            alignSelf: "stretch",
            borderRadius: "24px",
            backgroundColor: hover ? "#004e8c" : "#0066B3",
            color: "white",
            cursor: "pointer",
            height: "100%",
            transition: "all 0.3s ease",
            textDecoration: "none",
          }}
        >
          <span
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "Jost",
              fontSize: "21px",
              fontWeight: 400,
              lineHeight: "120%",
            }}
          >
            Read More
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            style={{ minWidth: "32px", height: "32px" }}
          >
            <rect
              x="31.75"
              y="31.25"
              width="30.5"
              height="30.5"
              rx="15.25"
              transform="rotate(180 31.75 31.25)"
              stroke="white"
              strokeWidth="1.5"
            />
            <path
              d="M6.5 15.9992C6.5 15.6812 6.629 15.3761 6.85863 15.1513C7.08825 14.9264 7.39969 14.8 7.72444 14.8H22.0699L16.7036 10.0976C16.5827 9.99293 16.4841 9.86586 16.4135 9.72371C16.3429 9.58157 16.3017 9.42716 16.2923 9.26937C16.2828 9.11157 16.3053 8.95351 16.3585 8.80426C16.4116 8.65501 16.4944 8.51753 16.602 8.39971C16.7096 8.2819 16.8399 8.18608 16.9854 8.11777C17.131 8.04946 17.2889 8.01 17.4501 8.00167C17.6112 7.99333 17.7725 8.01629 17.9246 8.06921C18.0766 8.12213 18.2165 8.20398 18.3362 8.31004L26.091 15.1054C26.2196 15.2179 26.3226 15.3557 26.3931 15.5099C26.4636 15.6641 26.5 15.8311 26.5 16C26.5 16.1689 26.4636 16.3359 26.3931 16.4901C26.3226 16.6443 26.2196 16.7821 26.091 16.8946L18.3362 23.69C18.2165 23.796 18.0766 23.8779 17.9246 23.9308C17.7725 23.9837 17.6112 24.0067 16.9501 23.9983C16.7889 23.99 16.631 23.9505 16.4854 23.8822C16.3399 23.8139 16.2096 23.7181 16.102 23.6003C15.9944 23.4825 15.9116 23.345 15.8585 23.1957C15.8053 23.0465 15.7828 22.8884 15.7923 22.7306C15.8017 22.5728 15.8429 22.4184 15.9135 22.2763C15.9841 22.1341 16.0827 22.0071 16.7036 21.9024L22.0699 17.1984H7.72444C7.39969 17.1984 7.08825 17.072 6.85863 16.8472C6.629 16.6223 6.5 16.3172 6.5 15.9992Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
    </div>
  )

  // Render normal layout for larger screens
  const renderNormalLayout = () => {
    return (
      <div
        className="services-container"
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "1400px",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          padding: "0 60px",
          flexWrap: "wrap",
          position: "relative",
          margin: "0 auto",
        }}
      >
        {/* Text container */}
        <div
          className="text-container"
          style={{
            display: "flex",
            width: "400px",
            height: "518px",
            padding: "30px 10px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
            borderRadius: "24px",
            background: "#F0F7F8",
            position: "relative",
            overflow: "hidden",
            zIndex: 5,
          }}
        >
          {/* Render all content containers using the data array */}
          {contentSections.map((section, index) => (
            <ContentContainer key={index} section={section} index={index} className={"content" + (index + 1)} />
          ))}
        </div>
        {/* Video container */}
        <div
          className="video-container"
          style={{
            display: "flex",
            width: "800px",
            height: "518px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
            borderRadius: "24px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {contentSections.map((section, index) => (
            <video
              key={index}
              className={"video" + (index + 1)}
              src={section.video}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "24px",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <>
      <section
        className="background-text"
        style={{
          display: "flex",
          width: "100vw",
          height: isSmallScreen ? "auto" : "100vh",
          padding: isSmallScreen ? "40px 0 80px" : "40px 0", // Increased bottom padding for small screens
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          background: "#252525",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          overflow: "hidden",
        }}
        id="background-text"
      >
        {/* Heading and Subheading Container */}
        <div
          style={{
            display: "flex",
            width: "1152px",
            maxWidth: "90%",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <h2
            className="section-heading"
            style={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Jost",
              fontSize: "50px",
              fontWeight: 600,
              lineHeight: "120%",
            }}
          >
            Our Core{" "}
            <span
              style={{
                color: "#EC1C26",
                fontFamily: "Jost",
                fontSize: "50px",
                fontWeight: 600,
                lineHeight: "120%",
              }}
            >
              Services
            </span>
          </h2>
          <p
            className="section-subheading"
            style={{
              alignSelf: "stretch",
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Jost",
              fontSize: "21px",
              fontWeight: 600,
              lineHeight: "120%",
            }}
          >
            We specialize in delivering end-to-end digital solutions that blend strategy, design, and technology. Our
            focus is on creating impactful experiences that drive results and support your business growth
          </p>
        </div>

        {/* Render different layouts based on screen size */}
        {isSmallScreen ? renderSmallScreenLayout() : renderNormalLayout()}
      </section>
    </>
  )
}
