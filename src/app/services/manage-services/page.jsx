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
  title: 'Outsourced IT Support Services | Appit Software – 2025',
  description: 'Boost your business efficiency with Appit Software\'s expert Outsourced IT Support Services. Reliable, scalable, and tailored solutions to keep your operations running smoothly. Contact us today!',
  keywords: [
    'Outsourced IT Support Services',
    'AI Business IT Support Services',
    'IT Consulting And Support Services',
    'IT Technical Support Services',
    'managed IT services',
    'remote technical support',
    'business IT solutions',
    'enterprise technology support'
  ]
};

const Page = () => {
  const oracleHeroData = {
    title: "Outsourced IT Support Services",
    para: `AppitSoftware delivers expert outsourced IT support to streamline operations, strengthen cybersecurity, and manage tech seamlessly.
So you can focus on growing your business.`,
    videoSrc: "/videos/msVideo1.mp4",
  };

  const sectionsData = [
    {
      title: `AI Business IT Support Services`,
      image: "/images/msImage1.png",
      reverse: true,
      lineByLine: [
        "AppitSoftware is a leading provider of AI-powered IT Support Services, transforming how businesses manage their technology. By harnessing artificial intelligence, we deliver proactive monitoring, predictive maintenance, and automated troubleshooting to reduce downtime and boost operational efficiency.",
        "Our AI-driven IT support solutions are customized to meet the evolving needs of modern enterprises, ensuring faster response times and smarter system management. From helpdesk automation and system optimization to intelligent incident resolution, AppitSoftware offers innovative tools that empower businesses to scale confidently. Rely on our AI Business IT Support Services to keep your operations secure, efficient, and uninterrupted.",
      ],
    },
  ];

  const sectionsData2 = [
    {
      title: `IT Consulting And Support Services`,
      image: "/images/msImage2.png",
      lineByLine: [
        "AppitSoftware delivers high-quality IT Consulting and Support Services to help businesses thrive in today’s dynamic tech landscape. Our experienced team offers strategic insights, hands-on expertise, and proactive support tailored to your business goals.",
        "We empower organizations to modernize their IT infrastructure, strengthen cybersecurity, and streamline operations for increased efficiency and growth.",
        "Whether you need to adopt new technologies, oversee complex IT initiatives, or manage daily operations, AppitSoftware provides reliable, scalable solutions. Partner with us for end-to-end IT support designed to drive long-term success.",
      ],
    },
    {
      title: `IT Technical Support Services`,
      image: "/images/msImage3.png",
      reverse: true,
      lineByLine: [
        "At AppitSoftware, we deliver reliable IT Technical Support Services tailored to the evolving needs of modern businesses. Our expert team ensures smooth operations through proactive monitoring, fast issue resolution, and continuous system optimization.",
        "By managing everything from software troubleshooting to network performance, we help minimize downtime, enhance security, and boost IT efficiency—so you can stay focused on your core business. Partner with AppitSoftware for dependable support in today’s fast-paced digital world.",
      ],
    },
  ];

  const faqData = [
    {
      question: "What are Outsourced IT Support Services offered by APPIT Software?",
      answer: [
        "APPIT Software's Outsourced IT Support Services provide businesses with comprehensive IT management, from system monitoring to troubleshooting, without the need for an in-house team. We ensure 24/7 support, proactive maintenance, and rapid issue resolution, helping you reduce costs and improve efficiency.",
      ],
    },
    {
      question: "How can AI Business IT Support Services benefit my company?",
      answer: [
        "Our AI Business IT Support Services leverage artificial intelligence to automate issue detection, predict potential failures, and deliver faster resolutions. This advanced support approach ensures higher uptime, improved performance, and smarter decision-making for your business operations.",
      ],
    },
    {
      question: "What is included in APPIT Software's IT Consulting And Support Services?",
      answer: [
        "With our IT Consulting And Support Services, APPIT Software offers strategic IT guidance, infrastructure assessment, system upgrades, and hands-on support. We help businesses align their technology with operational goals, ensuring optimal growth and innovation.",
      ],
    },
    {
      question: "Why should I choose APPIT Software for IT Outsourcing Services?",
      answer: [
        "APPIT Software's IT Outsourcing Services give you access to top-tier IT professionals, cutting-edge technology solutions, and 24/7 support. We reduce operational costs, improve service quality, and free up internal resources so you can focus on core business activities.",
      ],
    },
    {
      question: "What makes APPIT Software's IT Technical Support Services stand out?",
      answer: [
        "Our IT Technical Support Services stand out due to our quick response times, AI-enhanced diagnostics, personalized service, and proactive problem-solving approach. We ensure minimal downtime and optimal system performance for all our clients.",
      ],
    },
    {
      question: "How does APPIT Software integrate AI into IT Support Services?",
      answer: [
        "Through our AI Business IT Support Services, we integrate AI-driven monitoring, predictive analytics, and intelligent ticketing systems. This smart integration allows for faster issue detection, smarter troubleshooting, and overall enhanced support experiences for businesses of all sizes.",
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
            "acquireLicensePage": "https://www.appitsoftware.com/services/managed-services/",
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
                name: "What are Outsourced IT Support Services offered by APPIT Software?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "APPIT Software's Outsourced IT Support Services provide businesses with comprehensive IT management, from system monitoring to troubleshooting, without the need for an in-house team. We ensure 24/7 support, proactive maintenance, and rapid issue resolution, helping you reduce costs and improve efficiency.",
                },
              },
              {
                "@type": "Question",
                name: "How can AI Business IT Support Services benefit my company?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our AI Business IT Support Services leverage artificial intelligence to automate issue detection, predict potential failures, and deliver faster resolutions. This advanced support approach ensures higher uptime, improved performance, and smarter decision-making for your business operations.",
                },
              },
              {
                "@type": "Question",
                name: "What is included in APPIT Software's IT Consulting And Support Services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "With our IT Consulting And Support Services, APPIT Software offers strategic IT guidance, infrastructure assessment, system upgrades, and hands-on support. We help businesses align their technology with operational goals, ensuring optimal growth and innovation.",
                },
              },
              {
                "@type": "Question",
                name: "Why should I choose APPIT Software for IT Outsourcing Services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "APPIT Software's IT Outsourcing Services give you access to top-tier IT professionals, cutting-edge technology solutions, and 24/7 support. We reduce operational costs, improve service quality, and free up internal resources so you can focus on core business activities.",
                },
              },
              {
                "@type": "Question",
                name: "What makes APPIT Software's IT Technical Support Services stand out?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our IT Technical Support Services stand out due to our quick response times, AI-enhanced diagnostics, personalized service, and proactive problem-solving approach. We ensure minimal downtime and optimal system performance for all our clients.",
                },
              },
              {
                "@type": "Question",
                name: "How does APPIT Software integrate AI into IT Support Services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Through our AI Business IT Support Services, we integrate AI-driven monitoring, predictive analytics, and intelligent ticketing systems. This smart integration allows for faster issue detection, smarter troubleshooting, and overall enhanced support experiences for businesses of all sizes.",
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

      <ImageWithTextSection sectionsData={sectionsData2} />

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
