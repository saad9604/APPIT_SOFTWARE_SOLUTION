import ImageWithTextSection from "@/components/layout/image-text-section";
import HideDefaultHeader from "../../../components/layout/transparent-header/hide-default-header";
import TransparentHeader from "../../../components/layout/transparent-header/transparent-header";
import OracleHero from "../../../components/pages/oralce-ai/oracle-hero";
import React from "react";
import {
  BenefitData,
  ServiceNowfeaturesData,
  whyChooseData,
} from "@/assets/data";
import WhyChoose from "@/components/home/WhyChoose";
import KeyFeatures from "@/components/pages/features/key-features";
import Benefits from "@/components/pages/benefit-grid/benefit-section";
import FAQs from "@/components/pages/faqs";
import CTA from "@/components/pages/cta";
import AboveFooterSection from "@/components/home/AboveFooterSection";
import Footer from "@/components/home/Footer";
import Script from "next/script";

export const metadata = {
  title: 'ServiceNow AI Solutions | APPIT Software Solutions Inc.',
  description: 'APPIT Software Solutions Inc. leverages ServiceNow AI Solutions to transform enterprise operations with intelligent automation and streamlined workflows.',
  keywords: [
    'ServiceNow AI Solutions',
    'ServiceNow Managed Services',
    'ServiceNow AI Integration Services',
    'ServiceNow Cloud Services',
    'ServiceNow AI Software Company',
    'enterprise workflow automation',
    'intelligent business operations',
    'digital process transformation'
  ]
};

const Page = () => {
  const faqData = [
    {
      question: "How can ServiceNow AI benefit my business?",
      answer: [
        "ServiceNow AI automates ticketing, predicts system issues, and speeds up resolutions, enabling your business to operate more efficiently and reduce downtime."
      ],
    },
    {
      question: "Can ServiceNow AI be customized for different industries?",
      answer: [
        "Yes, it supports IT, finance, healthcare, retail, and other industries with tailored solutions that address industry-specific challenges and requirements."
      ],
    },
    {
      question: "How secure is ServiceNow AI?",
      answer: [
        "It complies with top security standards, including GDPR and HIPAA, to ensure comprehensive data protection across all implementations."
      ],
    },
    {
      question: "Does ServiceNow AI integrate with existing software?",
      answer: [
        "Yes, it connects with ERP, CRM, and ITSM platforms seamlessly, allowing for unified workflows and data exchange across your technology ecosystem."
      ],
    },
  ];
  const oracleHeroData = {
    title: "ServiceNow AI",
    para: "Boost efficiency and streamline operations with ServiceNow AI. Appit Software Solutions integrates AI-powered tools to automate workflows and support smarter decision-making.",
    videoSrc: "/videos/service_now_hero_video.mp4",
  };

  const sectionsData = [
    {
      title: "ServiceNow AI Solutions",
      para: `ServiceNow AI revolutionizes enterprise operations by embedding artificial intelligence into core functions like IT, HR, customer service, and business workflows. At Appit Software Solutions, we harness the power of ServiceNow AI to help businesses streamline processes, automate routine tasks, and elevate both employee and customer experiences. Through intelligent automation, predictive insights, and AI-driven virtual agents, we reduce manual effort and drive greater productivity across the organization.`,
      reverse: true,
      image: "/images/services.png",
    },
    {
      title: "Transforming Enterprises with ServiceNow AI Solutions",
      image: "/images/laptop.png",
      para: `At AppitSoftware, we empower businesses with cutting-edge AI-driven solutions designed to streamline operations, boost productivity, and accelerate digital transformation. As a trusted ServiceNow AI Software Company, we deliver a full suite of services built on the ServiceNow platform, enabling organizations to fully leverage their digital infrastructure.
Our capabilities span across diverse industries, offering expertise in ServiceNow AI Solutions, Managed Services, AI Integration, and Cloud Services. With a strong focus on automation and innovation, AppitSoftware helps businesses enhance customer experiences, simplify complex workflows, and achieve greater operational efficiency.`,
    },
  ];

  const sectionsData2 = [
    {
      title: "Empowering Businesses with ServiceNow AI Solutions",
      para: `At Appitsoftware, our core offering is ServiceNow AI Solutions, designed to help businesses work smarter. We leverage AI, machine learning, and automation to transform operations, enhance decision-making, and deliver exceptional user experiences.
ServiceNow AI Solutions go beyond traditional IT services by enabling real-time prediction, analysis, and response. Through seamless integration with the ServiceNow platform, we help businesses automate tasks, improve service delivery, and uncover valuable insights.
Our clients benefit from higher productivity, lower operational costs, and smarter outcomes—supported by tailored solutions built around their unique needs.`,
      image: "/images/ideas.png",
      reverse: true,
      lineByLine: [
        "At Appitsoftware, our core offering is ServiceNow AI Solutions, designed to help businesses work smarter. We leverage AI, machine learning, and automation to transform operations, enhance decision-making, and deliver exceptional user experiences.",
        "ServiceNow AI Solutions go beyond traditional IT services by enabling real-time prediction, analysis, and response. Through seamless integration with the ServiceNow platform, we help businesses automate tasks, improve service delivery, and uncover valuable insights.",
        "Our clients benefit from higher productivity, lower operational costs, and smarter outcomes—supported by tailored solutions built around their unique needs.",
      ],
      paraHighlightText: ["ServiceNow AI Solutions"],
    },
    {
      title: "Streamlined Operations with ServiceNow Managed Services",
      para: `As businesses increasingly depend on digital platforms, effective management becomes critical. Appitsoftware’s ServiceNow Managed Services ensure your ServiceNow environment runs smoothly, securely, and efficiently. We provide end-to-end support, including implementation, routine health checks, patch management, and performance optimization. With our team handling the technical complexities, your team can focus on strategic growth. Our ServiceNow Managed Services also include proactive monitoring and tailored solutions to meet your specific needs. Backed by a dedicated team of ServiceNow experts, we help you maintain peak system performance. Trust Appitsoftware to keep your operations running seamlessly as you scale.`,
      image: "/images/sos.png",
      paraHighlightText: ["ServiceNow Managed Services"],
    },
    {
      title: "Comprehensive Oracle Cloud Applications Services",
      para: `AppitSoftware offers a comprehensive suite of Oracle Cloud Applications Services to drive your digital transformation. From implementation to optimization, we help you fully leverage Oracle SaaS solutions—ERP Cloud, HCM Cloud, CX Cloud, and SCM Cloud.
Our experts ensure smooth adoption, configuration, and customization aligned to your business needs. With a focus on user adoption and strategic value, we deliver scalable, agile solutions that accelerate time-to-value.
As a trusted partner, AppitSoftware provides ongoing support and innovation—transforming your Oracle Cloud investment into a long-term competitive advantage.`,
      image: "/images/ai_cloud.png",
      reverse: true,
      lineByLine: [
        "AppitSoftware offers a comprehensive suite of Oracle Cloud Applications Services to drive your digital transformation. From implementation to optimization, we help you fully leverage Oracle SaaS solutions—ERP Cloud, HCM Cloud, CX Cloud, and SCM Cloud.",
        "Our experts ensure smooth adoption, configuration, and customization aligned to your business needs. With a focus on user adoption and strategic value, we deliver scalable, agile solutions that accelerate time-to-value.",
        "As a trusted partner, AppitSoftware provides ongoing support and innovation—transforming your Oracle Cloud investment into a long-term competitive advantage.",
      ]
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
            "acquireLicensePage": "https://www.appitsoftware.com/services/services-now-ai/"
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
              "name": "How can ServiceNow AI benefit my business?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "ServiceNow AI automates ticketing, predicts system issues, and speeds up resolutions, enabling your business to operate more efficiently and reduce downtime."
              }
            },{
              "@type": "Question",
              "name": "Can ServiceNow AI be customized for different industries?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, it supports IT, finance, healthcare, retail, and other industries with tailored solutions that address industry-specific challenges and requirements."
              }
            },{
              "@type": "Question",
              "name": "How secure is ServiceNow AI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It complies with top security standards, including GDPR and HIPAA, to ensure comprehensive data protection across all implementations."
              }
            },{
              "@type": "Question",
              "name": "Does ServiceNow AI integrate with existing software?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, it connects with ERP, CRM, and ITSM platforms seamlessly, allowing for unified workflows and data exchange across your technology ecosystem."
              }
            },{
              "@type": "Question",
              "name": "What services does Appit Software offer for ServiceNow AI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Appit Software Solutions offers comprehensive ServiceNow AI services including implementation, managed services, integration with existing systems, and ongoing support to ensure optimal performance and value."
              }
            }]
          })
        }}
      />
      <HideDefaultHeader />
      <TransparentHeader showBorder={true} />
     
        <OracleHero data={oracleHeroData} />
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
              className: "absolute top-0 -right-[30%] lg:right-0 z-[-1]",
            },
            {
              src: "/images/utils/blue-paint-left.png",
              alt: "Blue Paint",
              className: "absolute top-0 -left-[55%] lg:left-0 z-[-1]",
            },
          ]}
        />

        <KeyFeatures
          data={ServiceNowfeaturesData}
          heading={{
            title: "Key Features",
            para: "Discover the Core Features of Oracle AI with Appit Software Solutions",
            highlightText: "Key",
          }}
        />

        <Benefits
          data={BenefitData}
          heading={{
            title: "Benefits of ServiceNow AI",
            para: "Discover the Core Features of Oracle AI with Appit Software Solutions",
            highlightText: "ServiceNow AI",
          }}
        />

        <FAQs
          data={faqData}
          heading={{
            title: "Frequently Asked Questions (FAQs)",
            highlightText: "(FAQs)",
          }}
        />

        <CTA />
        <AboveFooterSection socialMediaLink={false} />
        <Footer />
      
    </>
  );
};

export default Page;
