import ImageWithTextSection from "@/components/layout/image-text-section";
import HideDefaultHeader from "../../../components/layout/transparent-header/hide-default-header";
import TransparentHeader from "../../../components/layout/transparent-header/transparent-header";
import OracleHero from "../../../components/pages/oralce-ai/oracle-hero";
import React from "react";
import { whyChooseData } from "@/assets/data";
import WhyChoose from "@/components/home/WhyChoose";
import Script from "next/script";
import FAQs from "@/components/pages/faqs";
import AboveFooterSection from "@/components/home/AboveFooterSection";
import Footer from "@/components/home/Footer";
import Testimonials from "@/components/home/Testimonials";
import FormSection from "@/components/pages/big-commerce/FormSection";

export const metadata = {
  title: 'Adobe Commerce Solutions | APPIT Software Solutions Inc.',
  description: 'Explore APPIT Software Solutions Inc. expertise in Adobe Commerce Solutions to build scalable and secure eCommerce platforms.',
  keywords: [
    'Adobe Commerce Solutions',
    'Adobe Commerce Solutions Services',
    'Custom Adobe Commerce Development Services',
    'Adobe Commerce Migration Services',
    'Adobe Commerce Performance Optimization Services',
    'Magento Commerce',
    'enterprise eCommerce platform',
    'B2B eCommerce solutions'
  ]
};

const Page = () => {
  const oracleHeroData = {
    title: "Adobe Commerce Solutions (Magento)",
    para: "Adobe Commerce (Magento) is a flexible, secure eCommerce platform for businesses of all sizes. At Appit, we deliver scalable, custom solutions to fit your unique needs.",
    videoSrc: "/videos/adbVideo1.mp4",
  };

  const sectionsData = [
    {
      title: "Custom Adobe Commerce Solutions with AI Integration",
      video: "/videos/adbVideo2.mp4",
      reverse: true,
      highlightText: "Adobe Commerce Solutions",
      highlightTextStyle: "text-xl md:text-2xl xl:text-[27px]",
      lineByLine: [
        "AI-Driven Shopping Suggestions : Deliver real-time product suggestions based on customer behavior and preferences.",
        "Tailored E-Commerce Experiences : Deliver personalized storefronts and offers based on customer preferences.",
        "Automated workflows : Streamline orders, inventory, and alerts to save time.",
        "Dynamic pricing and search : Adjust prices and search results in real time based on user behavior and demand.",
        "Smart Inventory Forecasting : Predict stock requirements based on historical trends, traffic, and seasonal demand.",
        "Voice & Visual Search Integration : Enable users to search using voice commands or images for a more intuitive shopping experience.",
      ],
      paraHighlightText: [
        "AI-Driven Shopping Suggestions",
        "Tailored eCommerce Experiences",
        "Automated workflows",
        "Dynamic pricing and search",
        "Smart Inventory Forecasting",
        "Voice & Visual Search Integration",
      ],
      paraHighlightTextStyle: "font-bold",
    },
  ];

  const sectionsData1 = [
    {
      title: "Benefits & Seamless Adobe Commerce Migration Services",
      para: `Adobe Commerce Services provide businesses with a powerful, scalable, and flexible platform to build and manage advanced eCommerce experiences. From seamless cloud-based infrastructure to robust security and PCI compliance, it ensures stability and trust. The platform supports both B2C and B2B models, allowing businesses to expand across diverse markets with ease. With features like AI-powered personalization, innovative extensions, and an intuitive administration panel, businesses can craft tailored user experiences and streamline backend operations. Adobe Commerce also enables an effective omnichannel strategy, ERP integration, and centralized inventory management from multiple sources—while the drag-and-drop Page Builder simplifies content updates without developer input. Altogether, Adobe Commerce services empower brands to deliver seamless, secure, and customized shopping experiences across all digital touchpoints.`,
      image: "/images/adbImage1.png",
      // reverse: true,
      containerClassName:
        "flex flex-col items-center justify-center flex-col-reverse",
      contentClassName: "text-center md:text-left",
      classNameHeading: "!text-center md:text-left",
      highlightText: "Benefits & Seamless",
      sectionHeading: true,
    },
  ];

  const sectionsData2 = [
    {
      title: "What We Offer with Adobe Commerce Solutions",
      para: `Explore our core Adobe Commerce offerings, thoughtfully crafted to meet the demands of modern eCommerce. From secure, scalable infrastructure and seamless third-party integrations to AI-powered personalization and responsive design, our solutions are built to optimize performance, enhance customer experience, and support long-term growth.`,
      image: "/images/adbImage2.png",
      containerClassName:
        "flex flex-col items-center justify-center flex-col-reverse",
      contentClassName: "text-center md:text-left",
      classNameHeading: "!text-center md:text-left",
      highlightText: "What We Offer",
      sectionHeading: true,
      paraHighlightText:["AI-powered"],
      paraHighlightTextStyle: "text-[#EC1C26] font-bold text-center",
    },
  ];

  const sectionsData3 = [
    {
      title: "AI-Driven Performance Tuning for Adobe Commerce Success",
      para: `Leverage custom Adobe Commerce development infused with AI and automation to deliver personalized shopping experiences and optimized performance at scale. Our solutions are built to adapt to your specific business model—whether you're running a B2C storefront or a complex B2B operation. With intelligent features like real-time product recommendations, dynamic search, predictive analytics, and automated workflows, we help you streamline operations and enhance customer engagement. From custom theme design and module development to seamless third-party integrations, our Adobe Commerce services are tailored to meet your exact requirements while future-proofing your store for growth.`,
      image: "/images/adbImage3.png",
      highlightText: "AI-Driven Performance",
      highlightTextStyle: "text-xl md:text-2xl xl:text-[27px]",
      paraHighlightText: [" AI and automation","B2C", "B2B"],
      paraHighlightTextStyle: " font-bold",
    },
    {
      title: "Personalized Adobe Commerce Solutions Built for Your Needs",
      para: `Leverage custom Adobe Commerce development infused with AI and automation to deliver personalized shopping experiences and optimized performance at scale. Our solutions are built to adapt to your specific business model—whether you're running a B2C storefront or a complex B2B operation. With intelligent features like real-time product recommendations, dynamic search, predictive analytics, and automated workflows, we help you streamline operations and enhance customer engagement. From custom theme design and module development to seamless third-party integrations, our Adobe Commerce services are tailored to meet your exact requirements while future-proofing your store for growth.`,
      image: "/images/adbImage4.png",
      reverse: true,
      highlightText: "Personalized Adobe Commerce Solutions",
      highlightTextStyle: "text-xl md:text-2xl xl:text-[27px]",
      paraHighlightText: [" AI and automation","B2C", "B2B"],
      paraHighlightTextStyle: " font-bold",
    },
  ];

  const faqData = [
    {
      question: "What Adobe Commerce Solutions Services does APPIT Software offer?",
      answer: [
        "APPIT Software delivers comprehensive Adobe Commerce Solutions Services, including end-to-end e-commerce store development, platform customization, AI-driven enhancements, and ongoing maintenance for seamless business operations.",
      ],
    },
    {
      question: "Do you provide Custom Adobe Commerce Development Services?",
      answer: [
        "Yes, we specialize in Custom Adobe Commerce Development Services tailored to your business needs—ranging from UI/UX customization to backend feature development and AI-based personalization tools.",
      ],
    },
    {
      question: "What is included in your Adobe Commerce Migration Services?",
      answer: [
        "Our Adobe Commerce Migration Services ensure a smooth transition from legacy systems or other platforms to Adobe Commerce, with complete data integrity, SEO retention, and zero downtime.",
      ],
    },
    {
      question: "How can Adobe Commerce Performance Optimization Services benefit my online store?",
      answer: [
        "Our Adobe Commerce Performance Optimization Services include code refinement, database tuning, caching, and load balancing, all designed to improve speed, scalability, and user experience.",
      ],
    },
    {
      question: "Do you offer Custom Adobe Commerce Extensions & Integrations Services?",
      answer: [
        "Absolutely. APPIT Software creates Custom Adobe Commerce Extensions and integrates third-party tools like CRMs, ERPs, payment gateways, and AI modules to enhance your store's functionality.",
      ],
    },
    {
      question: "Why choose APPIT Software for Adobe Commerce development and support?",
      answer: [
        "As an AI-driven company, APPIT Software blends deep technical Adobe Commerce expertise with cutting-edge AI capabilities to deliver innovative, high-performance e-commerce solutions that help your business scale.",
      ],
    },
  ];  return (
    <>
      <Script
        type="application/ld+json"
        className="schemantra"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "WebPage",
            "acquireLicensePage": "https://www.appitsoftware.com/adobe-commerce-solutions/"
          })
        }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What Adobe Commerce Solutions Services does AppitSoftware offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AppitSoftware delivers comprehensive Adobe Commerce Solutions Services, including end-to-end e-commerce store development, platform customization, AI-driven enhancements, and ongoing maintenance for seamless business operations."
              }
            },{
              "@type": "Question",
              "name": "Do you provide Custom Adobe Commerce Development Services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we specialize in Custom Adobe Commerce Development Services tailored to your business needs—ranging from UI/UX customization to backend feature development and AI-based personalization tools."
              }
            },{
              "@type": "Question",
              "name": "What is included in your Adobe Commerce Migration Services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our Adobe Commerce Migration Services ensure a smooth transition from legacy systems or other platforms to Adobe Commerce, with complete data integrity, SEO retention, and zero downtime."
              }
            },{
              "@type": "Question",
              "name": "How can Adobe Commerce Performance Optimization Services benefit my online store?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our Adobe Commerce Performance Optimization Services include code refinement, database tuning, caching, and load balancing, all designed to improve speed, scalability, and user experience."
              }
            },{
              "@type": "Question",
              "name": "Do you offer Custom Adobe Commerce Extensions & Integrations Services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. AppitSoftware creates Custom Adobe Commerce Extensions and integrates third-party tools like CRMs, ERPs, payment gateways, and AI modules to enhance your store's functionality."
              }
            },{
              "@type": "Question",
              "name": "Why choose AppitSoftware for Adobe Commerce development and support?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "As an AI-driven company, AppitSoftware blends deep technical Adobe Commerce expertise with cutting-edge AI capabilities to deliver innovative, high-performance e-commerce solutions that help your business scale."
              }
            }]
          })
        }}
      />
      <TransparentHeader />
      <HideDefaultHeader />
      <OracleHero data={oracleHeroData} className="md:ml-[51px] mr-auto" />

      <ImageWithTextSection sectionsData={sectionsData} />

      <ImageWithTextSection
        sectionsData={sectionsData1}
        contentClassName="text-center md:text-left items-center md:items-start"
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
       className={`bg-gradient-to-tl from-[#BEFFA3] to-[#DFF0FF]`}
      />

      <ImageWithTextSection sectionsData={sectionsData3} />

      <Testimonials />

      <FormSection />

      <FAQs
        data={faqData}
        heading={{
          title: "Frequently Asked Questions (FAQs)",
          highlightText: "(FAQs)",
        }}
        sectionClassName="py-10"
      />

      <AboveFooterSection socialMediaLink={false} />
      <Footer />
    </>
  );
};

export default Page;
