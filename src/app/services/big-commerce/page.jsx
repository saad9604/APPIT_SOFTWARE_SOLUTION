import ImageWithTextSection from "@/components/layout/image-text-section";
import HideDefaultHeader from "../../../components/layout/transparent-header/hide-default-header";
import TransparentHeader from "../../../components/layout/transparent-header/transparent-header";
import OracleHero from "../../../components/pages/oralce-ai/oracle-hero";
import React from "react";
import { whyChooseData } from "@/assets/data";
import WhyChoose from "@/components/home/WhyChoose";
import FAQs from "@/components/pages/faqs";
import AboveFooterSection from "@/components/home/AboveFooterSection";
import Testimonials from "@/components/home/Testimonials";
import BenefitSection from "@/components/pages/big-commerce/BenefitSection";
import FormSection from "@/components/pages/big-commerce/FormSection";
import Footer from "@/components/home/Footer";
import Script from "next/script";

export const metadata = {
  title: 'BigCommerce Solutions | APPIT Software Solutions Inc',
  description: 'APPIT Software expertise in BigCommerce Solutions to develop robust, adaptable, and scalable eCommerce platforms, ensuring seamless shopping.',
  keywords: [
    'BigCommerce Solutions',
    'BigCommerce Store',
    'BigCommerce Service',
    'BigCommerce Migration Services'
  ]
};


const Page = () => {
  const oracleHeroData = {
    title: "BigCommerce Solutions",
    para: "AI-powered BigCommerce solutions to build, scale, and optimize your online store with seamless customer experiences.",
    videoSrc: "/videos/bcVideo1.mp4",
    btnTitle: "Start the Project",
  };

  const sectionsData = [
    {
      title: "Custom BigCommerce Solutions Store Development",
      video: "/videos/bcVideo2.mp4",
      reverse: true,
      highlightText: "Custom BigCommerce",
      highlightTextStyle: "text-xl md:text-2xl xl:text-[27px]",
      paraHighlightTextStyle: "font-bold",
      lineByLine: [
        "BigCommerce is a powerful SaaS eCommerce platform built for businesses of all sizes, offering a scalable, secure, and flexible foundation to grow online. With built-in support for mobile optimization, SEO, multi-channel selling, and advanced integrations, BigCommerce empowers brands to launch and manage high-performing digital stores effortlessly.",
        "At Appit, we elevate BigCommerce even further by integrating AI-driven solutions—including personalized product recommendations, smart inventory forecasting, dynamic pricing, and automated workflows. Our custom BigCommerce services are designed to streamline operations, enhance customer experiences, and drive measurable growth in today’s competitive eCommerce landscape.",
      ],
      paraHighlightText: ["SaaS", "AI-driven solutions—"],

    },
  ];

  const sectionsData1 = [
    {
      title: "Our AI-Driven BigCommerce Process",
      para: `We follow a structured, AI-powered approach to build, optimize, and scale your BigCommerce store—ensuring smarter workflows, personalized experiences, and faster go-to-market.`,
      image: "/images/bcImage1.png",
      // reverse: true,
      containerClassName:
        "flex flex-col items-center justify-center flex-col-reverse",
      contentClassName: "text-center md:text-left",
      classNameHeading: "!text-center md:text-left",
      highlightText: "Our AI-Driven ",
      sectionHeading: true,
      classNamePara: "text-center",
    },
  ];

  const faqData = [
    {
      question: "What BigCommerce Solutions Services does APPIT Software offer?",
      answer: [
        "APPIT Software provides comprehensive BigCommerce Solutions Services, including custom store design, theme development, AI-based product recommendations, and end-to-end eCommerce integration tailored for all business sizes.",
      ],
    },
    {
      question: "Do you offer Custom BigCommerce Store Development Services?",
      answer: [
        "Yes, our team specializes in Custom BigCommerce Store Development Services to build scalable, responsive, and feature-rich online stores optimized for conversion and user experience.",
      ],
    },
    {
      question: "Can APPIT Software help with BigCommerce API & App Integration Services?",
      answer: [
        "Absolutely. We offer robust BigCommerce API & App Integration Services to connect your store with third-party applications, CRM systems, ERP platforms, and AI tools for seamless business operations.",
      ],
    },
    {
      question: "Does APPIT Software support BigCommerce Migration Services from other platforms?",
      answer: [
        "Yes, we provide secure and smooth BigCommerce Migration Services from platforms like Shopify, Magento, or WooCommerce, ensuring no data loss and minimal downtime.",
      ],
    },
    {
      question: "What are BigCommerce Security Audit Services, and do you provide them?",
      answer: [
        "Our BigCommerce Security Audit Services identify vulnerabilities, apply necessary security patches, and implement best practices to keep your eCommerce store secure and compliant.",
      ],
    },
    {
      question: "How can your BigCommerce Performance Optimization Services help my business?",
      answer: [
        "We enhance your store's speed, responsiveness, and overall performance through server optimization, code enhancements, and AI-driven analytics for improved user experience and SEO rankings.",
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
            "acquireLicensePage": "https://www.appitsoftware.com/bigcommerce-solutions"
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
              "name": "What BigCommerce Solutions Services does AppitSoftware offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AppitSoftware provides comprehensive BigCommerce Solutions Services, including custom store design, theme development, AI-based product recommendations, and end-to-end eCommerce integration tailored for all business sizes."
              }
            },{
              "@type": "Question",
              "name": "Do you offer Custom BigCommerce Store Development Services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our team specializes in Custom BigCommerce Store Development Services to build scalable, responsive, and feature-rich online stores optimized for conversion and user experience."
              }
            },{
              "@type": "Question",
              "name": "Can AppitSoftware help with BigCommerce API & App Integration Services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We offer robust BigCommerce API & App Integration Services to connect your store with third-party applications, CRM systems, ERP platforms, and AI tools for seamless business operations."
              }
            },{
              "@type": "Question",
              "name": "Does AppitSoftware support BigCommerce Migration Services from other platforms?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide secure and smooth BigCommerce Migration Services from platforms like Shopify, Magento, or WooCommerce, ensuring no data loss and minimal downtime."
              }
            },{
              "@type": "Question",
              "name": "What are BigCommerce Security Audit Services, and do you provide them?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our BigCommerce Security Audit Services identify vulnerabilities, apply necessary security patches, and implement best practices to keep your eCommerce store secure and compliant."
              }
            },{
              "@type": "Question",
              "name": "How can your BigCommerce Performance Optimization Services help my business?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We enhance your store's speed, responsiveness, and overall performance through server optimization, code enhancements, and AI-driven analytics for improved user experience and SEO rankings."
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
        sectionHeading
      />

      <WhyChoose
        data={whyChooseData}
        heading={{
          title: "Why Choose APPIT Software Solutions?",
          para: "We solve your most complex technology challenges with innovative, scalable solutions. From strategy to execution, we transform your digital ecosystem to unlock new growth.",
          highlightText: "Why Choose",
        }}
      />

     <BenefitSection />

      <FormSection />

      <Testimonials />
      <FAQs
        data={faqData}
        heading={{
          title: "Frequently Asked Questions (FAQs)",
          highlightText: "(FAQs)",
        }}
        sectionClassName="py-10"
      />

      {/* <CTA /> */}
      <AboveFooterSection socialMediaLink={false} />
      <Footer />
    </>
  );
};

export default Page;
