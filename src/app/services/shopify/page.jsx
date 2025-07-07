import ImageWithTextSection from "@/components/layout/image-text-section";
import HideDefaultHeader from "../../../components/layout/transparent-header/hide-default-header";
import TransparentHeader from "../../../components/layout/transparent-header/transparent-header";
import OracleHero from "../../../components/pages/oralce-ai/oracle-hero";
import React from "react";
import { whyChooseData } from "@/assets/data";
import WhyChoose from "@/components/home/WhyChoose";
import FAQs from "@/components/pages/faqs";
import CTA from "@/components/pages/cta";
import AboveFooterSection from "@/components/home/AboveFooterSection";
import Footer from "@/components/home/Footer";
import Script from "next/script";

export const metadata = {
  title: 'Shopify Solutions | APPIT Software Solutions Inc.',
  description: 'APPIT Software\'s expertise in Shopify Solutions develops intuitive and robust eCommerce platforms that ensure a seamless shopping experience for your customers.',
  keywords: [
    'Shopify Solutions',
    'custom Shopify development',
    'Shopify Store Setup & Configuration Services',
    'Shopify Migration Services',
    'Shopify Store Plus Services',
    'Shopify app development',
    'Shopify theme customization',
    'Shopify Plus enterprise solutions'
  ]
};

const Page = () => {
  const oracleHeroData = {
    title: "Shopify Solutions",
    para: "Shopify is a top eCommerce platform. Appit helps you build and grow your store with tailored Shopify solutions.",
    videoSrc: "/videos/shopifyV1.mp4",
    btnTitle: "Get In Touch",
  };

  const sectionsData = [
    {
      title: `Shopify Solutions Store Setup & Configuration`,
      para: `In today's rapidly evolving digital landscape, establishing a robust, secure and scalable onlinepresence is crucial for the success of your business. At Appit, we provide a comprehensive rangeof eCommerce services aimed at assisting you in creating, managing, and expanding your onlinestore. Whether you are launching a new venture or seeking to enhance an existing platform, ourteam of specialists is dedicated to delivering customized solutions that yield tangible results.`,
      video: "/videos/shopifyV2.mp4",
      reverse: true,
    },
    {
      title: `Custom Shopify Theme Development`,
      para: `Bespoke Themes: Create and design personalized Shopify themes that embody your brand's distinct identity while enhancing the user experience.Responsive Design: Our mobile-first strategy guarantees that your Shopify store is visually appealing and functions flawlessly on all devices.User Experience (UX) Enhancement: Refine your store's layout, navigation, and overall user experience to boost engagement and conversion rates.`,
      video: "/videos/shopifyV3.mp4",
    },
    {
      title: `End-to-End Shopify Solutions Services for Every Business Size`,
      para: `AppitSoftware’s Shopify Solutions Services are crafted to support startups, growing businesses, and large enterprises in launching or upgrading their e-commerce platforms. Whether you're building a new store or enhancing an existing one, our Shopify Solutions Services deliver intelligent, scalable, and future-ready results.
We integrate AI into every layer—from creating visually compelling storefronts to streamlining backend operations like inventory management, personalized marketing, and customer engagement. Our Shopify Solutions Services combine innovation, flexibility, and seamless UX to help your business stay ahead in a competitive digital space.`,
      image: "/images/shopifyImg1.png",
      reverse: true,
    },
    {
      title: `Shopify App Integration & Customization`,
      video: "/videos/shopifyV4.mp4",
      lineByLine: [
        "App Integration: Improve your store's capabilities by incorporating third-party applications for marketing, inventory management, customer support, and more.",
        "Custom App Development: Create bespoke Shopify applications tailored to your unique business requirements, offering distinctive features that differentiate your store.",
        "API Integration: Effortlessly link your Shopify store with other systems and platforms through API integration to optimize operational efficiency.",
      ],
      paraHighlightText: [
        "App Integration:",
        "Custom App Development:",
        "API Integration:",
      ],
      paraHighlightTextStyle: "font-bold",
    },
  ];

  const sectionsData2 = [
    {
      title: `End-to-End Shopify Development Services to Launch, Customize & Grow Your Online Store`,
      para: `AppitSoftware offers complete Shopify Development Solutions designed to launch, customize, and scale e-commerce stores with precision. Our services cover everything from Shopify Store Setup & Configuration—theme customization, payment and shipping integration, and AI-enhanced navigation—to Custom Shopify Development tailored to your brand’s unique workflows, including custom checkout flows, personalized UI/UX, and intelligent product recommendations. We also provide seamless Shopify App Integration & Customization, connecting your store with CRMs, ERPs, analytics tools, and more to enhance automation, performance, and customer experience—all optimized for long-term growth and efficiency.`,
      image: "/images/shopifyImg2.jpg",
    },
    {
      title: `Smooth & Secure Shopify Migration Services`,
      video: "/videos/shopifyV5.mp4",
      reverse: true,
      lineByLine: [
        "Thinking of switching platforms or upgrading your current e-commerce setup? Our Shopify Migration Services make it easy to move your store to Shopify without losing data, traffic, or SEO rankings.",
        " We offer comprehensive Shopify Migration Services from platforms like WooCommerce, Magento, BigCommerce, and custom-built stores. Our migration process includes product, order, and customer data transfer, theme recreation, URL redirects, and performance testing.",
        "With our AI-enhanced process, Shopify Migration Services at AppitSoftware are smooth, efficient, and reliable. We handle everything from backend setup to frontend polish—ensuring you don’t miss a beat.",
        "Our proven expertise in Shopify Migration Services gives you the confidence to scale faster on one of the world’s most powerful e-commerce platforms.",
      ],
    },
    {
      title: `Seamless Shopify Migration & Enterprise-Grade Shopify Plus Services`,
      image: "/images/shopifyImg3.jpg",
      lineByLine: [
        "AppitSoftware provides comprehensive Shopify Migration Services to help you move effortlessly from platforms like Magento, WooCommerce, or BigCommerce to Shopify—with secure data transfer, zero downtime, and full SEO retention to protect your search visibility and operations.",
        "For large-scale businesses, our Shopify Plus Services offer enterprise-level solutions with advanced features and high-volume scalability. We specialize in customizing the checkout experience and building tailored workflows that match your unique business demands.",
      ],
    },
    {
      title: `Comprehensive Shopify Security Audit Services for a Safer Storefront`,
      image: "/images/shopifyImg4.jpg",
      reverse: true,
      lineByLine: [
        "AppitSoftware offers in-depth Shopify Security Audit Services to safeguard your e-commerce store from potential threats and ensure data protection at every level.",
        " We begin with a Security Posture Review, analyzing your store's configurations, third-party apps, and user account settings. Our audits cover Account Security—including password policies, MFA, and access controls—and App Vetting, where we review all installed apps for safety and necessity.",
        "We ensure Data Encryption is enforced both at rest and in transit, using SSL/TLS protocols throughout the store. Our process includes Vulnerability Scanning, optional Penetration Testing, and WAF (Web Application Firewall) Configuration to guard against attacks.",
        "With a focus on Regular Security Audits and Update Management, we keep your store resilient against evolving threats while maintaining performance and compliance.",
      ],
    },
    {
      title: `Why Choose Appit for Shopify Development?d`,
      image: "/images/shopifyImg5.jpg",
      lineByLine: [
        "Shopify Specialists: Our team is comprised of certified Shopify developers who possess significant experience in building and enhancing Shopify stores.",
        "Tailored Solutions: We provide customized Shopify solutions that are specifically designed to address your unique business requirements and foster growth.",
        "Demonstrated Success: With a track record of successful Shopify projects, we have  the knowledge and skills necessary to assist you in reaching your eCommerce objectives.",
        "Comprehensive Service: From the initial setup to ongoing support after launch, we offer a complete range of Shopify services to guarantee the success of your store.",
      ],
      paraHighlightText: [
        "Shopify Specialists:",
        "Tailored Solutions:",
        "Demonstrated Success:",
        "Comprehensive Service:",
      ],
      paraHighlightTextStyle: "font-bold",
    },
  ];

  const faqData = [
    {
      question: `What Shopify Solutions Services does AppitSoftware provide?`,
      answer: [
        "AppitSoftware offers end-to-end Shopify Solutions Services including store setup, custom development, AI-powered features, and ongoing maintenance to create high-performing eCommerce experiences.",
      ],
    },
    {
      question: `Can you handle Shopify Store Setup & Configuration Services?`,
      answer: [
        "Yes, we provide full Shopify Store Setup & Configuration Services including theme installation, product uploads, payment gateway integration, and tailored design to align with your brand.",
      ],
    },
    {
      question: `Do you offer Custom Shopify Development Services?`,
      answer: [
        "Absolutely. Our Custom Shopify Development Services include building bespoke features, creating unique store layouts, and integrating AI functionalities to boost user engagement and conversions.",
      ],
    },
    {
      question: `What do Shopify App Integration & Customization Services include?`,
      answer: [
        "We integrate and customize third-party and private Shopify apps to extend your store's capabilities, improve performance, and streamline operations using automation and AI-driven tools.",
      ],
    },
    {
      question: `Can you assist with Shopify Migration Services?`,
      answer: [
        "Yes, our Shopify Migration Services ensure smooth and secure transfers from platforms like WooCommerce, Magento, or BigCommerce, preserving SEO, customer data, and product catalogs.",
      ],
    },
    {
      question: `What are Shopify Security Audit Services, and how can they help?`,
      answer: [
        "Our Shopify Security Audit Services assess your store for vulnerabilities, implement security best practices, and use AI tools to proactively monitor and protect your eCommerce environment.",
      ],
    },
  ];
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
            "acquireLicensePage": "https://www.appitsoftware.com/services/shopify/",
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
                name: "What Shopify Solutions Services does AppitSoftware provide?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "AppitSoftware offers end-to-end Shopify Solutions Services including store setup, custom development, AI-powered features, and ongoing maintenance to create high-performing eCommerce experiences.",
                },
              },
              {
                "@type": "Question",
                name: "Can you handle Shopify Store Setup & Configuration Services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we provide full Shopify Store Setup & Configuration Services including theme installation, product uploads, payment gateway integration, and tailored design to align with your brand.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer Custom Shopify Development Services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. Our Custom Shopify Development Services include building bespoke features, creating unique store layouts, and integrating AI functionalities to boost user engagement and conversions.",
                },
              },
              {
                "@type": "Question",
                name: "What do Shopify App Integration & Customization Services include?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We integrate and customize third-party and private Shopify apps to extend your store's capabilities, improve performance, and streamline operations using automation and AI-driven tools.",
                },
              },
              {
                "@type": "Question",
                name: "Can you assist with Shopify Migration Services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, our Shopify Migration Services ensure smooth and secure transfers from platforms like WooCommerce, Magento, or BigCommerce, preserving SEO, customer data, and product catalogs.",
                },
              },
              {
                "@type": "Question",
                name: "What are Shopify Security Audit Services, and how can they help?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our Shopify Security Audit Services assess your store for vulnerabilities, implement security best practices, and use AI tools to proactively monitor and protect your eCommerce environment.",
                },
              },
            ],
          }),
        }}
      />
      <TransparentHeader />
      <HideDefaultHeader />
      <OracleHero data={oracleHeroData} className="md:ml-[51px] mr-auto" />

      <ImageWithTextSection
        sectionsData={sectionsData}
        backgroundImages={[
          {
            src: "/images/utils/lines-left.png",
            alt: "Decorative Lines",
            className: "absolute top-0 -left-[30%] lg:left-0 z-[-1]",
          },
          {
            src: "/images/utils/blue-paint-right.png",
            alt: "Blue Paint",
            className: "absolute top-0 -right-[55%] lg:right-0 z-[-1]",
          },
        ]}
      />

      <WhyChoose
        data={whyChooseData}
        heading={{
          title: "Why Choose APPIT Software Solutions?",
          para: "We solve your most complex technology challenges with innovative, scalable solutions. From strategy to execution, we transform your digital ecosystem to unlock new growth.",
          highlightText: "Why Choose",
        }}
      />

      <ImageWithTextSection
        sectionsData={sectionsData2}
        backgroundImages={[
          {
            src: "/images/utils/lines-right.png",
            alt: "Decorative Lines",
            className: "absolute top-[32%] -right-[30%] lg:right-0 z-[-1]",
          },
          {
            src: "/images/utils/blue-paint-left.png",
            alt: "Blue Paint",
            className: "absolute top-[45%] -left-[55%] lg:left-0 z-[-1]",
          },
        ]}
      />

      <FAQs
        data={faqData}
        heading={{
          title: "Frequently Asked Questions (FAQs)",
          highlightText: "(FAQs)",
        }}
        sectionClassName="py-10"
      />

      <CTA />
      <AboveFooterSection socialMediaLink={false} />
      <Footer />
    </>
  );
};

export default Page;
