import ImageWithTextSection from "@/components/layout/image-text-section";
import HideDefaultHeader from "../../../components/layout/transparent-header/hide-default-header";
import TransparentHeader from "../../../components/layout/transparent-header/transparent-header";
import OracleHero from "../../../components/pages/oralce-ai/oracle-hero";
import React from "react";
import { faqData, whyChooseData } from "@/assets/data";
import WhyChoose from "@/components/home/WhyChoose";
import KeyFeatures from "@/components/pages/features/key-features";
import Benefits from "@/components/pages/benefit-grid/benefit-section";
import FAQs from "@/components/pages/faqs";
import CTA from "@/components/pages/cta";
import AboveFooterSection from "@/components/home/AboveFooterSection";
import Footer from "@/components/home/Footer";
import Script from "next/script";

export const metadata = {
  title: 'Offshore Development Center And Managed Services | APPIT Software - 2025',
  description: 'Explore APPIT Software Solutions Inc. Offshore Development Center And Managed Services to optimize your IT operations.',
  keywords: [
    'Offshore Development Center And Managed Services',
    'Custom Software Development Services',
    'AI Software Development Services',
    'Offshore Development Center',
    'Offshore Software Consulting Services',
    'dedicated development team',
    'IT outsourcing solutions',
    'managed software services'
  ]
};

const Page = () => {
  const oracleHeroData = {
    title: "Offshore Development Center And Managed Services",
    para: "A scalable, affordable, and high-quality solution designed to help businesses expand their development capabilities.",
    videoSrc: "/videos/odcVideo1.mp4",
  };

  const sectionsData = [
    {
      title: "Offshore Development Center and Managed Services",
      video: "/videos/odcVideo2.mp4",
      reverse: true,
      lineByLine: [
        "Our Offshore Development Center and Managed Services offer a scalable, cost-effective, and high-quality solution for businesses aiming to expand their development capabilities. We provide a dedicated team of skilled professionals who work exclusively on your projects, ensuring seamless collaboration, robust security, and operational efficiency.",
        "Backed by certified experts, we bring deep industry expertise, proven best practices, and hands-on experience to help you enhance security, reduce risks, and confidently meet compliance requirements.",
      ],
    },
  ];

  const sectionsData2 = [
    {
      title: `Offshore Development Center And Managed Services`,
      image: "/images/odcImage1.png",
      paraHighlightText: [
        "Offshore Development Center and Managed Services",
        "Offshore Development Center and Managed Services",
      ],
      lineByLine: [
        "At the heart of AppitSoftware’s global success is its robust Offshore Development Center and Managed Services model. This approach enables clients to access a dedicated team of experts without the overhead costs of maintaining an in-house development team. By establishing an agile and efficient offshore infrastructure, AppitSoftware empowers businesses to stay focused on their core operations while we handle the development and support functions.",
        "Our Offshore Development Center and Managed Services team operates as a true extension of your organization, ensuring seamless collaboration, transparent communication, and complete control over your projects. Whether you're looking for a long-term development partner or need to scale resources temporarily, our model delivers the flexibility, reliability, and quality your business demands.",
      ],
    },
    {
      title: `Offshore Software Consulting Services`,
      para: `AppitSoftware offers strategic Offshore Software Consulting Services to help businesses navigate digital transformation with confidence. Our experts assess your IT landscape, identify gaps, and recommend tailored technology solutions aligned with your long-term goals.
What sets us apart is our focus on transparency, performance, and measurable ROI. We act as your strategic technology partner—minimizing risks, maximizing efficiency, and aligning tech initiatives with business objectives.
Whether you're modernizing legacy systems or building new platforms, we provide actionable insights and expert guidance every step of the way.`,
      image: "/images/odcImage2.png",
      reverse: true,
      paraHighlightText: ["Offshore Development Center and Managed Services"],
      lineByLine: [
        "AppitSoftware offers strategic Offshore Software Consulting Services to help businesses navigate digital transformation with confidence. Our experts assess your IT landscape, identify gaps, and recommend tailored technology solutions aligned with your long-term goals.",
        "What sets us apart is our focus on transparency, performance, and measurable ROI. We act as your strategic technology partner—minimizing risks, maximizing efficiency, and aligning tech initiatives with business objectives.",
        "Whether you're modernizing legacy systems or building new platforms, we provide actionable insights and expert guidance every step of the way.",
      ],
    },
    {
      title: `AI Software Development Services`,
      image: "/images/odcImage3.png",
      paraHighlightText: ["AI Software Development Services"],
      lineByLine: [
        "At AppitSoftware, we empower businesses with cutting-edge AI Software Development Services. From machine learning and NLP to predictive analytics and automation, our solutions drive smarter decisions and improved efficiency.",
        "We design custom AI applications—including chatbots, recommendation engines, and AI-powered analytics—that seamlessly integrate with your existing systems.",
        "With deep expertise in intelligent algorithms, we help organizations across industries harness data for smarter operations and better outcomes.",
      ],
    },
    {
      title: `Software Project Management Services`,
      image: "/images/odcImage4.png",
      paraHighlightText: ["Software Project Management Services"],
      reverse: true,
      lineByLine: [
        "Effective software delivery goes beyond coding—it requires end-to-end project management. AppitSoftware’s Software Project Management Services ensure your projects are delivered on time, within scope, and aligned with business objectives.",
        "We leverage proven methodologies like Agile, Scrum, and Kanban to drive efficiency, transparency, and timely communication. Our experienced project managers handle planning, execution, monitoring, and risk management—adapting quickly to change and keeping stakeholders informed every step of the way.",
      ],
    },
  ];

  const BenefitData = [
    {
      iconSrc: "/images/svgs/benefit_1.svg",
      title: "Access to Skilled Talent",
      para: "Real time insights enable smarter, Data Driven Decisions",
      className: "lg:!w-[382px] lg:!h-[177px] lg:ml-auto",
    },
    {
      iconSrc: "/images/svgs/benefit_2.svg",
      title: "24/7 Productivity",
      para: "Automate repetitive tasks and Streamline workflow",
      className: "lg:!w-[382px] lg:!h-[177px] lg:mr-auto",
    },
    {
      iconSrc: "/images/svgs/benefit_3.svg",
      title: "Scalability",
      para: "Flexible solutions that grow with your business needs",
      className: "lg:!w-[382px] lg:!h-[177px] lg:ml-auto",
    },
    {
      iconSrc: "/images/svgs/benefit_4.svg",
      title: "IP Protection & Security",
      para: "Deliver personalized experiences with AI-driven customer insights",
      className: "lg:!w-[382px] lg:!h-[177px] lg:mr-auto",
    },
  ];

  const KeyfeaturesData = [
    {
      title: `Custom Software Development`,
      para: `We craft customized solutions for web, mobile, and enterprise applications to meet your unique business needs.`,
      imageSrc: "/images/odcImage5.png",
      className: "lg:w-[394px] lg:ml-auto",
    },
    {
      title: `Dedicated Development Teams`,
      para: `Dedicated expert teams tailored to meet your specific business goals and challenges.`,
      imageSrc: "/images/odcImage6.png",
      className: "lg:w-[394px] lg:mr-auto",
    },
    {
      title: `Quality Assurance & Testing`,
      para: `Ensure high reliability and optimal performance through comprehensive and rigorous testing protocols at every stage.`,
      imageSrc: "/images/odcImage7.png",
      className: "lg:w-[394px] lg:ml-auto",
    },
    {
      title: `DevOps & Cloud Services`,
      para: `Streamlined deployment, real-time monitoring, and simplified maintenance for efficient system management.`,
      imageSrc: "/images/odcImage8.png",
      className: "lg:w-[394px] lg:mr-auto",
    },
  ];

  const faqData = [
    {
      question: `What is an Offshore Development Center and how can it benefit my business?`,
      answer: [
        "An Offshore Development Center (ODC) at AppitSoftware provides dedicated development teams that work remotely to deliver high-quality software solutions. It helps reduce costs, accelerates project delivery, and gives you access to global talent and expertise.",
      ],
    },
    {
      question: "What do your Offshore Software Consulting Services include?",
      answer: [
        "Our Offshore Software Consulting Services involve strategy planning, technology assessment, solution architecture, and roadmap creation. AppitSoftware guides businesses through digital transformation using agile methodologies and domain-specific expertise.",
      ],
    },
    {
      question: "What types of Custom Software Development Services do you offer?",
      answer: [
        "AppitSoftware offers end-to-end Custom Software Development Services, including web apps, mobile apps, enterprise platforms, and integrations. We tailor every solution to meet your specific business processes and performance needs.",
      ],
    },
    {
      question: `How does AppitSoftware approach AI Software Development Services?`,
      answer: [
        "Our AI Software Development Services involve designing and developing intelligent applications using machine learning, natural language processing, and predictive analytics. These solutions help businesses automate workflows, gain insights, and improve decision-making.",
      ],
    },
    {
      question: "What is included in your Software Project Management Services?",
      answer: [
        "AppitSoftware provides full-cycle Software Project Management Services—covering planning, resource allocation, agile execution, risk mitigation, and reporting. We ensure your projects are delivered on time, within budget, and aligned with business goals.",
      ],
    },
    {
      question: "Why choose AppitSoftware for Offshore and AI-Driven Software Solutions?",
      answer: [
        "AppitSoftware combines global offshore capabilities with deep expertise in AI and software development. Our integrated approach helps businesses scale faster, innovate smarter, and manage projects more efficiently, all under one roof.",
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
            "acquireLicensePage": "https://www.appitsoftware.com/services/odc/",
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
                name: "What is an Offshore Development Center and how can it benefit my business?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "An Offshore Development Center (ODC) at AppitSoftware provides dedicated development teams that work remotely to deliver high-quality software solutions. It helps reduce costs, accelerates project delivery, and gives you access to global talent and expertise.",
                },
              },
              {
                "@type": "Question",
                name: "What do your Offshore Software Consulting Services include?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our Offshore Software Consulting Services involve strategy planning, technology assessment, solution architecture, and roadmap creation. AppitSoftware guides businesses through digital transformation using agile methodologies and domain-specific expertise.",
                },
              },
              {
                "@type": "Question",
                name: "What types of Custom Software Development Services do you offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "AppitSoftware offers end-to-end Custom Software Development Services, including web apps, mobile apps, enterprise platforms, and integrations. We tailor every solution to meet your specific business processes and performance needs.",
                },
              },
              {
                "@type": "Question",
                name: "How does AppitSoftware approach AI Software Development Services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our AI Software Development Services involve designing and developing intelligent applications using machine learning, natural language processing, and predictive analytics. These solutions help businesses automate workflows, gain insights, and improve decision-making.",
                },
              },
              {
                "@type": "Question",
                name: "What is included in your Software Project Management Services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "AppitSoftware provides full-cycle Software Project Management Services—covering planning, resource allocation, agile execution, risk mitigation, and reporting. We ensure your projects are delivered on time, within budget, and aligned with business goals.",
                },
              },
              {
                "@type": "Question",
                name: "Why choose AppitSoftware for Offshore and AI-Driven Software Solutions?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "AppitSoftware combines global offshore capabilities with deep expertise in AI and software development. Our integrated approach helps businesses scale faster, innovate smarter, and manage projects more efficiently, all under one roof.",
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
        data={KeyfeaturesData}
        cards={4}
        heading={{
          title: "ODC Services",
          para: "Comprehensive Offshore Development Center (ODC) services tailored to accelerate your business with dedicated teams and scalable solutions.",
          highlightText: "ODC",
        }}
        imageClassName="lg:object-contain"
        imgContainerClassName="lg:!max-h-[400px]"
      />

      <Benefits
        data={BenefitData}
        heading={{
          title: "Benefits of ODC",
          para: "Explore the core capabilities that make our Offshore Development Center efficient, scalable, and results-driven.",
          highlightText: "ODC",
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
