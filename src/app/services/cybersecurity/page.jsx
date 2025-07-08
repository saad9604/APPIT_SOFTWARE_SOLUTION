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
import CyberFeaturesSection from "@/components/pages/cybersecurity/CyberFeaturesSection";
import Script from "next/script";

export const metadata = {
  title: 'Cyber Security GRC Solutions | APPIT Software Solutions Inc',
  description: 'Explore APPIT Software Solutions Inc. Cyber Security GRC Solutions to enhance your organization\'s risk management and compliance strategies.',
  keywords: [
    'Cyber Security GRC Solutions',
    'Cyber Security Cloud Services',
    'Cyber Security GRC It services',
    'Cyber Security GRC Software Services',
    'Cyber Security GRC Software Company',
    'risk management solutions',
    'compliance management',
    'information security governance'
  ]
};

const Page = () => {
  const oracleHeroData = {
    title: "Cyber Security GRC Solutions",
    para: "Strengthen Your Business with Smart Cybersecurity, Risk, and Compliance Strategies",
    videoSrc: "/videos/cyberVideo1.mp4",
  };

  const sectionsData = [
    {
      title:
        "Master Governance, Mitigate Risks, and Ensure Compliance with Confidence",
      image: "/images/cyberImage1.png",
      reverse: true,
      lineByLine: [
        "We deliver end-to-end Cybersecurity GRC solutions that are strategically designed, implemented, and managed to align with your organization’s unique security and data privacy requirements. Our tailored approach ensures smooth compliance with both industry regulations and internal governance standards.",
        "Supported by a team of certified professionals, we combine deep domain expertise with proven best practices to help you enhance your security posture, reduce risk exposure, and meet compliance objectives with confidence and clarity.",
      ]
    },
  ];

  const sectionsData2 = [
    {
      title: "Leading the Way with AI-Driven Cyber Security GRC Solutions",
      image: "/images/cyberImage2.png",
      lineByLine: [
        "In today’s rapidly evolving digital environment, organizations face growing challenges in managing cybersecurity threats, regulatory compliance, and governance requirements. At Appitsoftware, we provide AI-driven Cybersecurity GRC (Governance, Risk, and Compliance) solutions that help businesses minimize risks, safeguard critical assets, and maintain compliance with ease.",
        "Our end-to-end Cybersecurity GRC services include Managed Security Services, Cloud-Based Security Solutions, and IT GRC Services, all designed to streamline and automate risk management processes. Leveraging the power of AI, Appitsoftware enables organizations to proactively address cybersecurity threats, stay compliant with changing regulations, and build a resilient, secure digital foundation.",
      ]
    },
    {
      title: "Comprehensive Cyber Security GRC Software Services",
      para: `Appitsoftware’s Cybersecurity GRC Software Service uses advanced AI and machine learning to provide real-time insights into your organization’s risk landscape. It centralizes policies, controls, and risks, streamlining operations and improving oversight. With automated risk assessments, audits, and policy management, the platform reduces manual work and increases accuracy. Real-time dashboards deliver clear, actionable insights to support smart decision-making and stronger governance. Stay secure, compliant, and ahead of emerging threats with Appitsoftware.`,
      image: "/images/cyberImage3.png",
      reverse: true,
      paraHighlightText: ["Cybersecurity GRC Software Service"],
    },
    {
      title:
        "Cyber Security GRC Managed Services for Continuous Risk Mitigation",
      para: `Cybersecurity is an ongoing commitment, not a one-time task. Appitsoftware’s Cybersecurity GRC Managed Services ensure your GRC framework stays resilient and aligned with evolving risks and regulations.
We offer end-to-end support—monitoring risk indicators, managing audits, responding to incidents, and handling compliance reporting. Powered by AI, our services provide real-time alerts and advanced threat detection to proactively safeguard your systems.
With Appitsoftware, you enhance security, meet regulatory requirements, and free up internal resources—all through expert-led, scalable GRC management.`,
      image: "/images/cyberImage4.png",
      paraHighlightText: ["Cybersecurity GRC Managed Services"],
      lineByLine: [
        "Cybersecurity is an ongoing commitment, not a one-time task. Appitsoftware’s Cybersecurity GRC Managed Services ensure your GRC framework stays resilient and aligned with evolving risks and regulations.",
        "We offer end-to-end support—monitoring risk indicators, managing audits, responding to incidents, and handling compliance reporting. Powered by AI, our services provide real-time alerts and advanced threat detection to proactively safeguard your systems.",
        "With Appitsoftware, you enhance security, meet regulatory requirements, and free up internal resources—all through expert-led, scalable GRC management.",
      ]
    },
    {
      title: `Scalable Cyber Security Cloud Services`,
      para: `As businesses increasingly adopt cloud technologies, securing cloud environments has become critical. Appitsoftware’s Cybersecurity Cloud Services help organizations safeguard their cloud systems from evolving threats while ensuring regulatory compliance.
Our AI-driven solutions provide real-time monitoring, threat detection, and vulnerability management across multi-cloud environments. Using machine learning, we detect anomalies and potential risks, enabling proactive protection of cloud-based assets.
Designed to address the unique challenges of the cloud—such as data privacy, shared responsibility, and multi-cloud complexity—our services offer scalable, flexible, and intelligent security.
With Appitsoftware, businesses gain full visibility and control over their cloud infrastructure, enabling them to harness the power of the cloud without compromising security.`,
      image: "/images/cyberImage5.png",
      reverse: true,
      paraHighlightText: ["Cybersecurity Cloud Services"],
      lineByLine:[
        "As businesses increasingly adopt cloud technologies, securing cloud environments has become critical. Appitsoftware’s Cybersecurity Cloud Services help organizations safeguard their cloud systems from evolving threats while ensuring regulatory compliance.",
        "Our AI-driven solutions provide real-time monitoring, threat detection, and vulnerability management across multi-cloud environments. Using machine learning, we detect anomalies and potential risks, enabling proactive protection of cloud-based assets.",
        "Designed to address the unique challenges of the cloud—such as data privacy, shared responsibility, and multi-cloud complexity—our services offer scalable, flexible, and intelligent security.",
        "With Appitsoftware, businesses gain full visibility and control over their cloud infrastructure, enabling them to harness the power of the cloud without compromising security.",
      ]
    },
  ];

  const faqData = [
    {
      question: "What are Cyber Security GRC Software Services?",
      answer: [
        "Cyber Security GRC Software Services provided by AppitSoftware help organizations manage governance, risk, and compliance (GRC) efficiently. Our AI-powered platforms offer real-time monitoring, threat detection, and automated compliance reporting to ensure your IT infrastructure remains secure.",
      ],
    },
    {
      question: "What do Cyber Security GRC Managed Services include?",
      answer: [
        "AppitSoftware's Cyber Security GRC Managed Services cover end-to-end risk management, policy enforcement, incident response, and regulatory compliance. Our experts work proactively to manage your cybersecurity landscape, ensuring 24/7 protection and continuous improvement.",
      ],
    },
    {
      question: "How do Cyber Security Cloud Services benefit my organization?",
      answer: [
        "With our Cyber Security Cloud Services, AppitSoftware secures your cloud environments by using AI-driven threat intelligence, access controls, and data encryption. These services are ideal for businesses transitioning to or operating in cloud infrastructures like AWS, Azure, or Google Cloud.",
      ],
    },
    {
      question: "What are the key features of your Cyber Security GRC Solutions?",
      answer: [
        "Our Cyber Security GRC Solutions offer features like automated risk assessments, compliance tracking, role-based access control, AI-based threat prediction, and audit-ready reports. These tools help businesses stay compliant with international standards like GDPR, ISO 27001, and HIPAA.",
      ],
    },
    {
      question: "What does your Cyber Security GRC IT Services offering include?",
      answer: [
        "AppitSoftware's Cyber Security GRC IT Services include the implementation, integration, and ongoing support of GRC frameworks across your IT systems. We specialize in leveraging AI to streamline GRC processes, enhance security posture, and reduce human error.",
      ],
    },
    {
      question: "Why choose AppitSoftware as your Cyber Security GRC Software Company?",
      answer: [
        "As a leading Cyber Security GRC Software Company, AppitSoftware combines cutting-edge AI technologies with deep cybersecurity expertise. We provide scalable, automated, and compliant GRC solutions tailored to industries such as finance, healthcare, manufacturing, and tech.",
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
            "acquireLicensePage": "https://www.appitsoftware.com/cyber-security-grc-solutions/"
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
              "name": "What are Cyber Security GRC Solutions?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Cyber Security GRC Solutions integrate governance, risk management, and compliance into a unified framework that strengthens your organization's security posture while ensuring regulatory compliance."
              }
            },{
              "@type": "Question",
              "name": "How do AI-Driven Cyber GRC Services help my business?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AI-Driven Cyber GRC Services use machine learning to identify patterns, detect anomalies, and predict potential threats—reducing manual work while improving threat detection, incident response, and compliance management."
              }
            },{
              "@type": "Question",
              "name": "What does AppitSoftware's Cyber GRC Software Services include?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our Cyber GRC Software Services include centralized policy management, automated compliance monitoring, risk assessment tools, security control assessment, audit management, and real-time dashboards with actionable insights."
              }
            },{
              "@type": "Question",
              "name": "Can AppitSoftware help with Cyber Security GRC Framework Implementation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide comprehensive Cyber Security GRC Framework Implementation services to design, deploy, and manage custom frameworks aligned with industry standards like ISO 27001, NIST, and SOC 2."
              }
            },{
              "@type": "Question",
              "name": "Does AppitSoftware offer Managed Cyber GRC Services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, our Managed Cyber GRC Services provide continuous monitoring, regular security assessments, compliance updates, incident response, and expert guidance—all handled by our dedicated team of security professionals."
              }
            },{
              "@type": "Question",
              "name": "How do Cyber GRC Consulting Services benefit organizations?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our Cyber GRC Consulting Services help organizations assess current security postures, develop strategic roadmaps, optimize resource allocation, and build resilient security programs aligned with business objectives."
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
            className: "absolute top-[50%] -right-[30%] lg:right-0 z-[-1]",
          },
          {
            src: "/images/utils/blue-paint-left.png",
            alt: "Blue Paint",
            className: "absolute top-[60%] -left-[55%] lg:-left-[10%] z-[-1]",
          },
        ]}
      />

      <CyberFeaturesSection
        heading={{
          title: "Comprehensive Cybersecurity GRC Solutions",
          para: "Strengthen security, reduce risks, and stay compliant—all in one solution.",
          highlightText: "GRC Solutions",
          classNamePara: "font-semibold text-center text-white",
          classNameHeading: "text-white",
          sectionHeading: true,
        }}
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
