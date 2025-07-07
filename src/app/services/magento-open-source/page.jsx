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
import CyberFeatureCard from "@/components/pages/cybersecurity/CyberFeatureCard";
import Image from "next/image";
import FormWithImage from "@/components/pages/magento-open-source/FormWithImage";
import Script from "next/script";

export const metadata = {
  title: 'Magento Open Source Solutions | APPIT Software Solutions',
  description: 'APPIT Software expertise in Magento Open Source Solutions to develop flexible and scalable eCommerce platforms, and thrive in the digital marketplace.',
  keywords: [
    'Magento Open Source Solutions',
    'Custom Magento Development Services',
    'Magento Migration Services',
    'Magento Performance Optimization Services',
    'Magento Support & Maintenance Services',
    'open source eCommerce',
    'affordable eCommerce platform',
    'customizable online store'
  ]
};

const Page = () => {
  const oracleHeroData = {
    title: "Magento Open Source Solutions",
    para: "Magento is a top eCommerce platform known for its flexibility and scalability. At Appit, we offer expert Magento Open Source solutions to help businesses succeed online.",
    videoSrc: "/videos/mosVideo1.mp4",
  };

  const sectionsData = [
    {
      title: "Custom Magento Development",
      image: "/images/mosImage1.png",
      reverse: true,
      lineByLine : [
        "Tailored Store Design: We design fully customized Magento stores that reflect your brand identity and cater to your target audience, creating a unique and engaging shopping experience.",
        "Custom Functionality: Our developers build tailored features and extensions to ensure your Magento store meets all your specific business needs.",
        "Mobile-Responsive Design: We create responsive, mobile-friendly stores that offer a smooth and consistent user experience across all devices, boosting customer engagement and satisfaction.",
      ],
      
    },
  ];

  const sectionsData2 = [
    {
      title: `Magento Migration Services`,
      image: "/images/mosImage2.png",
      lineByLine: [
        "Seamless Migration: Move your existing eCommerce store to Magento smoothly, with zero data loss, minimal downtime, and uninterrupted business operations.",
        "Platform Upgrades: Whether upgrading from Magento 1 to Magento 2 or switching from another platform, we ensure a smooth transition with enhanced performance and features.",
        "Secure Data Transfer: We safeguard your product, customer, and order data during migration, maintaining accuracy and data integrity every step of the way.",
      ]
    },
    {
      title: `Magento Performance Optimization`,
      image: "/images/mosImage3.png",
      reverse: true,
      lineByLine: [
        "Performance Optimization: Boost your Magento store’s loading speed for a faster, more engaging user experience that reduces bounce rates and improves conversions.",
        "Database Optimization: Fine-tune your database to speed up queries and ensure smooth, efficient store performance.",
        "Scalable Solutions: Prepare your store for growth with tailored strategies that handle high traffic and transaction volumes during peak periods.",
      ]
    },
    {
      title: `Scalable Magento Open Source Solutions Services`,
      image: "/images/mosImage4.png",
      lineByLine: [
        "Magento Open Source is a flexible, cost-effective eCommerce platform ideal for businesses of all sizes. At AppitSoftware, we offer expert Magento Open Source solutions tailored to your unique goals.",
        "Our services include installation, configuration, theme customization, and AI enhancements like smart recommendations and personalized experiences.We ensure your store is scalable, fast, secure, and ready to grow with your business.With AppitSoftware, you get a future-ready eCommerce solution designed to adapt and thrive in a competitive digital landscape.",
      ]
    },
    {
      title: `Tailored Custom Magento Development Services`,
      image: "/images/mosImage5.png",
      reverse: true,
      lineByLine: [
        "Every business is unique, so we offer Custom Magento Development Services tailored to your specific needs—from complex workflows and custom themes to advanced features and integrations.",
        "Our team builds secure, scalable, and user-friendly eCommerce platforms, including multi-vendor marketplaces and AI-powered analytics.",
        "At AppitSoftware, we focus on understanding your goals to deliver intuitive solutions that boost engagement and conversions, making us a trusted Magento partner.",
      ]
    },
    {
      title: `Reliable and Risk-Free Magento Migration Services`,
      image: "/images/mosImage6.png",
      lineByLine: [
        "Migrating to Magento is easy with AppitSoftware. Our Magento Migration Services ensure a smooth, secure transition from any platform—without data loss or business disruption.",
        "We handle everything from data transfer and theme replication to SEO preservation and performance checks, using proven methods and AI-based testing.Businesses trust us to deliver risk-free migrations that lay the groundwork for future growth and innovation.With AppitSoftware, your migration to Magento becomes a strategic upgrade—built for performance, scalability, and long-term success."
      ]
    },
    {
      title: `Lightning-Fast Magento Performance Optimization Services`,
      image: "/images/mosImage7.png",
      reverse: true,
      lineByLine: [
        "A slow site can hurt sales—AppitSoftware’s Magento Performance Optimization Services ensure your store runs fast and smoothly.",
        "We audit your setup, optimize code, caching, and server settings, and use AI tools to enhance speed and usability.From lazy loading to CDN and database tuning, we boost performance for better SEO, conversions, and user experience.With AppitSoftware, you get a faster, more reliable Magento store that keeps customers engaged and drives measurable business growth."
      ]
    },
    {
      title: `Continuous Magento Support & Maintenance Services`,
      para: `Managing an eCommerce store requires constant care. AppitSoftware’s Magento Support & Maintenance Services keep your site secure, updated, and running smoothly 24/7.We handle updates, bug fixes, performance tuning, and AI-based monitoring to prevent issues before they affect your business.From routine maintenance to urgent support, we tailor our services to your needs—so you can focus on growth with confidence.With AppitSoftware, your Magento store stays reliable and optimized, ensuring a seamless experience for both you and your customers.`,
      image: "/images/mosImage8.png",
    },
  ];

  const sectionsData3 = [
    {
      title: "Why Choose Appit for Magento Development?",
      para: `Certified Magento Experts: Our team consists of certified Magento developers with deep expertise in building, optimizing, and scaling Magento stores.Custom Solutions: We provide fully customized Magento solutions that are aligned with your business goals, helping you stand out in the crowded eCommerce market.Proven Success: With a track record of successful Magento projects, we have the experience and  knowledge to deliver results that drive growth and profitability.End-to-End Service: From initial consultation and design to development, launch, and ongoing support, we offer comprehensive Magento services to ensure your store’s success.`,
      image: "/images/mosImage13.png",
      containerClassName:
        "border-2 md:border-[5px] border-black rounded-[32px] p-6 bg-white xl:grid-cols-[30%_70%]",
        mediaClassName:"max-w-[204px] max-h-[177px]",
        lineByLine: [
          "Certified Magento Experts: Our team consists of certified Magento developers with deep expertise in building, optimizing, and scaling Magento stores.",
          "Custom Solutions: We provide fully customized Magento solutions that are aligned with your business goals, helping you stand out in the crowded eCommerce market.",
          "Proven Success: With a track record of successful Magento projects, we have the experience and knowledge to deliver results that drive growth and profitability.",
          "End-to-End Service: From initial consultation and design to development, launch, and ongoing support, we offer comprehensive Magento services to ensure your store’s success.",
        ],
        paraHighlightText: ["Certified Magento Experts", "Custom Solutions", "Proven Success", "End-to-End Service"],
        paraHighlightTextStyle: "font-bold",
    },
  ];

  const featureData = [
    {
      title: "Custom Magento Extensions & Integrations",
      lineByLine:["Custom Extensions: Enhance your store with Magento extensions built to fit your exact business needs.",
        "Third-Party Integrations: Seamlessly connect Magento with CRMs, ERPs, payment gateways, and more.",
        "API Development: Create custom APIs for smooth data flow between Magento and your systems."],
      image: "/images/mosImage10.png",
    },
    {
      title: "Magento Support & Maintenance",
      lineByLine:["Ongoing Support: Get reliable help for updates, fixes, and improvements to keep your store running smoothly.",
        "Security Updates: Stay protected with regular patches and security checks.",
        "Performance Monitoring: We continuously monitor your store’s performance, ensuring it runs at peak efficiency and addressing any issues proactively."
      ],
      image: "/images/mosImage11.png",
      reverse: true,
    },
    {
      title: "Magento Security Audit",
      image: "/images/mosImage12.png",
      lineByLine: [
        "Security Audits – Identify vulnerabilities in code, extensions, and server settings.",
        "Penetration Testing – Simulate attacks to uncover security gaps.",
        "Patch Management – Apply Magento updates and patches promptly.",
        "24/7 Monitoring & Response – Monitor threats and respond quickly to incidents",
      ],
    },
  ];

  const faqData = [
    {
      question: "What Magento Open Source Solutions Services does APPIT Software provide?",
      answer: [
        "APPIT Software offers end-to-end Magento Open Source Solutions Services, including custom storefront development, module integration, theme customization, and AI enhancements tailored for scalable e-commerce success.",
      ],
    },
    {
      question: "Do you offer Custom Magento Development Services for unique business needs?",
      answer: [
        "Yes, we specialize in Custom Magento Development Services to design and build personalized features, extensions, and storefronts that align perfectly with your brand and customer journey.",
      ],
    },
    {
      question: "Can APPIT Software handle Magento Migration Services from other platforms?",
      answer: [
        "Absolutely. Our Magento Migration Services ensure a seamless shift from platforms like Shopify, WooCommerce, or legacy systems to Magento, preserving data, SEO, and store functionality.",
      ],
    },
    {
      question: "How can Magento Performance Optimization Services help improve my store?",
      answer: [
        "Our Magento Performance Optimization Services include code cleanup, server-side tuning, database optimization, and AI-powered recommendations to boost page load speed and overall performance.",
      ],
    },
    {
      question: "What's included in your Magento Support & Maintenance Services?",
      answer: [
        "We provide 24/7 Magento Support & Maintenance Services covering bug fixes, version upgrades, security patches, and performance monitoring to keep your online store running efficiently.",
      ],
    },
    {
      question: "Do you build Custom Magento Extensions & Integrations Services?",
      answer: [
        "Yes, APPIT Software creates Custom Magento Extensions and provides seamless integrations with CRMs, ERPs, payment gateways, and AI tools to extend your Magento store's capabilities.",
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
            "acquireLicensePage": "https://www.appitsoftware.com/services/magento-open-source/"
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
              "name": "What Magento Open Source Solutions Services does APPIT Software provide?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "APPIT Software offers end-to-end Magento Open Source Solutions Services, including custom storefront development, module integration, theme customization, and AI enhancements tailored for scalable e-commerce success."
              }
            },{
              "@type": "Question",
              "name": "Do you offer Custom Magento Development Services for unique business needs?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we specialize in Custom Magento Development Services to design and build personalized features, extensions, and storefronts that align perfectly with your brand and customer journey."
              }
            },{
              "@type": "Question",
              "name": "Can APPIT Software handle Magento Migration Services from other platforms?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. Our Magento Migration Services ensure a seamless shift from platforms like Shopify, WooCommerce, or legacy systems to Magento, preserving data, SEO, and store functionality."
              }
            },{
              "@type": "Question",
              "name": "How can Magento Performance Optimization Services help improve my store?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our Magento Performance Optimization Services include code cleanup, server-side tuning, database optimization, and AI-powered recommendations to boost page load speed and overall performance."
              }
            },{
              "@type": "Question",
              "name": "What's included in your Magento Support & Maintenance Services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We provide 24/7 Magento Support & Maintenance Services covering bug fixes, version upgrades, security patches, and performance monitoring to keep your online store running efficiently."
              }
            },{
              "@type": "Question",
              "name": "Do you build Custom Magento Extensions & Integrations Services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, APPIT Software creates Custom Magento Extensions and provides seamless integrations with CRMs, ERPs, payment gateways, and AI tools to extend your Magento store's capabilities."
              }
            }]
          })
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

      <FormWithImage />

      <div className="text-center bg-[#252525] py-10">
        <div className="flex flex-col items-center w-full gap-6 my-10 px-4">
          {featureData.map((item, index) => (
            <CyberFeatureCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              reverse={item.reverse}
              video={item.video}
              textContainer={item.textContainer}
              lineByLine={item.lineByLine}
            />
          ))}
        </div>
      </div>

      <ImageWithTextSection
        sectionsData={sectionsData3}
        backgroundImages={[
          {
            src: "/images/utils/blue-paint-right.png",
            alt: "Blue Paint",
            className: "absolute top-0 -left-[45%] lg:left-0 z-[-1] rotate-180",
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
