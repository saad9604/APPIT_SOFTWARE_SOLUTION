import {
  BenefitAILawyerData,
  faqAILawyerData,
  KeyfeaturesAILawyerData,
  whyChooseAILawyerData,
} from "../../../assets/data";
import ImageWithTextSection from "../../../components/layout/image-text-section";
import Benefits from "../../../components/pages/benefit-grid/benefit-section";
import CTA from "../../../components/pages/cta";
import FAQs from "../../../components/pages/faqs";
import KeyFeatures from "../../../components/pages/features/key-features";
import AILawyerHero from "../../../components/pages/products/ai-lawyers/ai-lawyer-hero";
import TransparentHeader from "../../../components/layout/transparent-header/transparent-header";
import HideDefaultHeader from "../../../components/layout/transparent-header/hide-default-header";
import VerticalTabs from "../../../components/pages/products/ai-lawyers/vertical-tabs";
import WhyChoose from "../../../components/pages/why-choose/why-choose";
import AboveFooterSection from "../../../components/home/AboveFooterSection";
import Footer from "../../../components/home/Footer";
import React from "react";
import Script from "next/script";

export const metadata = {
  title: 'Legal AI Assistance,AI for lawyers,Legal AI Assistance Product Services AI Lawyer Software Services Law AI Software Services',
  description: 'Empower your Legal AI Assistance with AI-driven assistance. From document review to contract analysis, get faster, smarter, and more.',
  keywords: [
    'Legal AI Assistance',
    'AI for lawyers',
    'Legal AI Assistance Product Services',
    'AI Lawyer Software Services',
    'Law AI Software Services',
    'legal document analysis',
    'contract review AI',
    'legal research automation'
  ]
};

const sectionsData = [
  {
    title: "Transforming Legal Services with Intelligent AI Solutions",
    para: `At AppitSoftware, we understand the pressures law firms and legal departments face today—tight deadlines, increasing workloads, and the demand for precision. That's why our Legal AI Assistance Product Services are designed to streamline legal operations and enhance decision-making.
Our Legal AI Assistance Product Services integrate machine learning and natural language processing to provide instant support for case research, legal analysis, risk assessment, and compliance checks. By using these services, law firms can automate repetitive tasks, reduce errors, and focus more on strategic advisory roles.
Organizations that adopt our Legal AI Assistance Product Services experience faster turnaround times, improved client satisfaction, and enhanced operational efficiency. From contract analysis to predictive litigation outcomes, our AI tools act as a force multiplier for any legal team.`,
    image: "/images/laptop-mobile-banner.png",
    reverse: true,
  },
];

const sectionsData2 = [
  {
    title: "Empowering Law Firms with AI Lawyer Software Services",
    para: `In today's tech-driven world, the legal sector must evolve. AppitSoftware's AI Lawyer Software Services empower legal professionals by integrating the power of artificial intelligence into everyday practice.
From automating document review and legal research to compliance checks and case management, AI Lawyer Software Services streamline tasks and enhance accuracy. Our platforms can draft legal opinions, analyze case files in minutes, and support smarter decision-making.
With AI Lawyer Software Services, law firms boost productivity, reduce errors, and deliver faster, more precise legal outcomes. It's not about replacing lawyers—it's about equipping them for the future.`,
    image: "/images/ai-1.png",
  },
  {
    title: "Leading Innovation with Law AI Software Services",
    para: `At AppitSoftware, innovation drives everything we do. Our Law AI Software Services mark a new era in legal technology—blending advanced AI with legal expertise to deliver intelligent, tailored solutions.
With Law AI Software Services, legal teams can analyze case history, automate due diligence, streamline client intake, and predict litigation outcomes—all with greater speed and accuracy.
Whether serving corporate legal departments, boutique firms, or global practices, Law AI Software Services reduce costs, improve efficiency, and enhance decision-making.
Our mission is simple: to modernize legal workflows through Law AI Software Services, while upholding justice, integrity, and client-first values.`,
    image: "/images/ai-2.png",
    reverse: true,
  },
  {
    title: "Streamline Legal Workflows with Smart Document Automation",
    para: `Legal documentation is essential but often repetitive and error-prone. AppitSoftware's Legal Document Software Services simplify this process with intelligent automation.
Automatically draft, review, and manage everything from contracts and affidavits to wills and corporate policies. With AI-powered templates, clause libraries, and real-time compliance checks, your documents stay accurate and aligned with local laws.
Reduce drafting time, boost consistency, and improve client service—while integrating effortlessly with your existing case management systems for an end-to-end legal solution.`,
    image: "/images/ai-3.png",
  },
];

const page = () => {  return (
    <>
      <Script
        type="application/ld+json"
        className="schemantra"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "WebPage",
            "acquireLicensePage": "https://www.appitsoftware.com/legal-ai-assistance"
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
              "name": "What is AI Lawyer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AI Lawyer is a cutting-edge platform that transforms law market using artificial intelligence. It automates research, simplifies complex terms, and handles documents efficiently. Ideal for individuals seeking affordable consultation and for professionals and students aiming to streamline their work. It offers personalized customization, multi-platform access, and prioritizes privacy, making it a valuable tool in LegalTech market."
              }
            },{
              "@type": "Question",
              "name": "Who is your platform for?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AI Lawyer caters to a diverse range of users, with the aim of making justice more accessible to everyone. It is ideal for: Consumers: Providing easy-to-understand explanations of terms and assistance in document handling. Lawyers: Automating routine tasks like research and paperwork, allowing lawyers to focus on client relationships and other critical aspects of their practice. Law Students: Offering a valuable learning tool to help prepare for a career in law, with features that assist in research writing and case briefs. Law Firms: Enhancing operational efficiency and client service quality by automating firm's processes and research, allowing to optimize resource allocation and focus on more complex matters."
              }
            },{
              "@type": "Question",
              "name": "What countries/languages does it works for?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our platfroms works worldwide and in many languages. You can ask questions in your language and get answers in the same language. This makes it easy for people from different places to use it."
              }
            },{
              "@type": "Question",
              "name": "How to start using AI Lawyer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "To begin using it, simply sign up with your Google/Apple account or any other email. We provide a free trial for all new users, allowing you to experience the full range of features and benefits of the platform without any initial investment."
              }
            }]
          })
        }}
      />
      <TransparentHeader />
      <HideDefaultHeader />
      <AILawyerHero />
      <ImageWithTextSection
        sectionsData={sectionsData}
        className="bg-muted"
        mediaClassName="bg-white p-6 rounded-3xl"
        contentClassName="bg-white p-6 rounded-3xl"
        sameWidth
      />
      <VerticalTabs />
      <Benefits
        data={BenefitAILawyerData}
        heading={{
          title: "The Advantage of Choosing Our AI for Legal Practice",
          highlightText: "Advantage",
        }}
      />
      <KeyFeatures
        data={KeyfeaturesAILawyerData}
        heading={{
          title: "Who is AI Lawyer for?",
          para: "Explore features that boost your productivity. From document automation to advanced research, we've got the hard work covered.",
          highlightText: "Who",
        }}
        height
        cards={4}
        simpleBG
      />
      <ImageWithTextSection sectionsData={sectionsData2} />
      <WhyChoose
        data={whyChooseAILawyerData}
        heading={{
          title: "Why Choose APPIT Software Solutions?",
          para: "We solve your most complex technology challenges with innovative, scalable solutions. From strategy to execution, we transform your digital ecosystem to unlock new growth.",
          highlightText: "Why Choose",
        }}
      />
      <FAQs
        data={faqAILawyerData}
        heading={{
          title: "Got Questions? We've Got Answers (FAQs)",
          highlightText: "(FAQs)",
          }}
          />
          <CTA />
            <AboveFooterSection />
      <Footer />
    </>
  );
};

export default page;