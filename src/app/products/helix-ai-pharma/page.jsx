import {
  BenefitHelixAIData,
  KeyfeaturesHelixAiPharma,
  whyChooseAILawyerData,
} from "../../../assets/data";
import ImageWithTextSection from "../../../components/layout/image-text-section";
import Benefits from "../../../components/pages/benefit-grid/benefit-section";
import CTA from "../../../components/pages/cta";
import KeyFeatures from "../../../components/pages/features/key-features";
import HelixAIPharmaHero from "../../../components/pages/products/helix-ai-pharma/helix-ai-pharma-hero";
import TransparentHeader from "../../../components/layout/transparent-header/transparent-header";
import HideDefaultHeader from "../../../components/layout/transparent-header/hide-default-header";
import WhyChoose from "../../../components/pages/why-choose/why-choose";
import AboveFooterSection from "../../../components/home/AboveFooter";
import Footer from "../../../components/home/Footer";
import HelixAIPharmaFAQ from "../../../components/products/helix-ai-pharma/HelixAIPharmaFAQ";
import React from "react";
import Script from "next/script";

export const metadata = {
  title: 'HelixAI Pharma | AI-Driven Pharmaceutical Solutions',
  description: 'Discover HelixAI Pharma – pioneering intelligent pharmaceutical solutions powered by advanced AI. Revolutionizing drug discovery, clinical research, and patient care with innovative technology for a healthier future.',
  keywords: [
    'AI in drug discovery',
    'pharmaceutical AI solutions', 
    'AI for clinical trials',
    'AI-powered drug development',
    'predictive modeling in pharma'
  ]
};

const sectionsData = [
  {
    title: "Drug Discovery & Target Identification",
    para: `Drug discovery starts with a mission — the pursuit of new therapies that can change lives. At the core of this journey is target identification: discovering the key biological molecules that drive disease and present opportunities for treatment. At HelixAI Pharma, we take an integrated approach that blends advanced science, state-of-the-art AI technology, and deep industry knowledge to accelerate innovation and unlock new frontiers in drug discovery.`,
    image: "/images/drug.png",
    reverse: true,
  },
];
const sectionsData2 = [
  {
    title: "Preclinical Research & Experimentation",
    para: `Before a molecule becomes a therapy, it must prove its potential through rigorous preclinical research. At AppitSoftware, we provide end-to-end preclinical services to ensure safety, efficacy, and regulatory readiness—laying the groundwork for clinical success.`,
    bulletPoints: [
      {
        bold: "• Cell-Based Assays:",
        text: "Assess activity, toxicity, and mechanisms using diverse cellular models.",
      },
      {
        bold: "• Molecular & Biochemical Assays:",
        text: "Explore drug-target interactions and biomarker responses.",
      },
      {
        bold: "• High-Content Screening:",
        text: "Automate imaging and analysis for detailed compound evaluation.",
      },
    ],
    image: "/images/research.png",
  },
  {
    title: "Competitive Intelligence & Market Analysis",
    para: `At AppitSoftware, innovation drives everything we do. Our Law AI Software Services mark a new era in legal technology—blending advanced AI with legal expertise to deliver intelligent, tailored solutions.
With Law AI Software Services, legal teams can analyze case history, automate due diligence, streamline client intake, and predict litigation outcomes—all with greater speed and accuracy.
Whether serving corporate legal departments, boutique firms, or global practices, Law AI Software Services reduce costs, improve efficiency, and enhance decision-making.
Our mission is simple: to modernize legal workflows through Law AI Software Services, while upholding justice, integrity, and client-first values.`,
    image: "/images/market-analysis.png",
    reverse: true,
  },
];

const Page = () => {
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
            "acquireLicensePage": "https://www.appitsoftware.com/products/helix-ai-pharma/",
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
                name: "What is the HelixAI Pharma Product Platform?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "HelixAI Pharma Product Platform is an advanced, AI-powered solution designed to accelerate pharmaceutical research, drug discovery, clinical development, and regulatory compliance. It integrates domain-specific generative AI, data analytics, and workflow automation to drive efficiency and innovation across the pharmaceutical pipeline.",
                },
              },
              {
                "@type": "Question",
                name: "How does HelixAI use AI in pharmaceutical research?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "HelixAI leverages generative AI and machine learning to analyze large-scale scientific, clinical, and proprietary datasets. It helps identify novel drug candidates, optimize preclinical and clinical workflows, and provide actionable insights for regulatory and market intelligence.",
                },
              },
              {
                "@type": "Question",
                name: "Is my data secure on the HelixAI Pharma Platform?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. HelixAI is built with enterprise-grade security and privacy in mind. Your proprietary data is protected, not used for model training, and can be deployed securely in your preferred environment—cloud, on-premises, or hybrid.",
                },
              },
              {
                "@type": "Question",
                name: "Can HelixAI integrate with our existing systems?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. The platform supports integration with internal and external APIs, allowing you to connect your existing data sources, laboratory systems, and business applications for seamless workflow automation.",
                },
              },
              {
                "@type": "Question",
                name: "How does HelixAI support regulatory compliance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "HelixAI provides AI-curated regulatory updates, automates documentation, and ensures data integrity for faster, more accurate regulatory submissions. It helps you stay ahead of evolving requirements and maintain audit readiness.",
                },
              },
              {
                "@type": "Question",
                name: "How do I get started with HelixAI Pharma Product Platform?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Contact the HelixAI team to schedule a demo or consultation. They will guide you through the platform's features and help tailor a solution to your organization's needs.",
                },
              },
            ],
          }),
        }}
      />
      <HideDefaultHeader />
      <TransparentHeader showBorder={true} />
      <div className="mt-[80px]">
        <HelixAIPharmaHero />
        {sectionsData?.map((section, index) => (
          <ImageWithTextSection
            key={index}
            section={{
              data: section,
              styles: {
                bgColor: "bg-[#F7F9FB]",
              },
            }}
          />
        ))}
        <KeyFeatures
          data={KeyfeaturesHelixAiPharma}
          heading={{
            title: "Key Features",
            para: "Discover the key features of our HelixAI Pharma",
            highlightText: "Key",
          }}
        />
        <Benefits
          data={BenefitHelixAIData}
          heading={{
            title: "Benefits of Our AI Lawyers",
            para: "Discover how our AI Lawyers can help your business",
            highlightText: "Our AI Lawyers",
          }}
        />
        <div className="max-w-[1920px] mx-auto">
          {sectionsData2.map((section, index) => (
            <ImageWithTextSection
              key={index}
              section={{
                data: section,
                styles: {
                  bgColor: index % 2 === 0 ? "bg-white" : "bg-[#F7F9FB]",
                },
              }}
            />
          ))}
        </div>
        <WhyChoose data={whyChooseAILawyerData} />
        <CTA />
        <HelixAIPharmaFAQ />
      </div>
      <AboveFooterSection />
      <Footer />
    </>
  );
};

export default Page;
