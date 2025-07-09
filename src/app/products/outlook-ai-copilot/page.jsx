import {
  whyChooseAILawyerData,
  FeaturesOfOutlookAICopilot,
} from "../../../assets/data";
import ImageWithTextSection from "../../../components/layout/image-text-section";
import OutlookAICopilotFeatures from "../../../components/pages/products/outlook-ai-copilot/outlook-ai-copilot-features";
import CTA from "../../../components/pages/cta";
import Benefits from "../../../components/pages/benefit-grid/benefit-section";
import ContactUs from "../../../components/pages/products/outlook-ai-copilot/contact-us";
import OutlookAICopilotHighlights from "../../../components/pages/products/outlook-ai-copilot/outlook-ai-copilot-highlights";
import OutlookAICopilotFAQ from "../../../components/products/outlook-ai-copilot/OutlookAICopilotFAQ";
import OutlookAICopilotHero from "../../../components/pages/products/outlook-ai-copilot/outlook-ai-copilot-hero";
import TransparentHeader from "../../../components/layout/transparent-header/transparent-header";
import HideDefaultHeader from "../../../components/layout/transparent-header/hide-default-header";
import WhyChoose from "../../../components/pages/why-choose/why-choose";
import AboveFooterSection from "../../../components/home/AboveFooter";
import Footer from "../../../components/home/Footer";
import React from "react";
import Script from "next/script";

export const metadata = {
  title: 'Outlook AI Copilot | Boost Productivity With Appit Software',
  description: 'Appit Software\'s Outlook AI Copilot. Automate emails, schedule meetings, and streamline communication using intelligence.',
  keywords: [
    'Outlook AI Copilot',
    'Outlook AI Copilot Product Services',
    'Outlook AI Copilot Software Services',
    'Outlook 365 AI Write Email Software Services'
  ]
};

const sectionsData = [
  {
    title:
      "Transforming Communication with Outlook AI Copilot Product Services",
    para: `AppitSoftware’s Outlook AI Copilot Product Services streamline email communication by integrating AI assistance directly into Outlook. Using advanced machine learning, the Copilot helps users compose, edit, and manage emails quickly and professionally.Ideal for busy professionals, sales teams, and customer service departments, this tool boosts productivity, reduces response times, and ensures consistent, high-quality communication across the board.`,
    image: "/images/solution-outlook-ai-copilot.png",
    reverse: true,
  },
];
const sectionsData2 = [
  {
    title: "Maximizing Productivity with Outlook AI Copilot Software Services",
    para: `AppitSoftware’s Outlook AI Copilot Software Services streamline email management with smart automation and communication enhancements. Features include automatic draft creation, grammar correction, tone adjustment, and predictive text suggestions—saving time while improving clarity and engagement.With intelligent follow-up reminders and task integrations, our AI Copilot ensures important emails are never missed. It's the ideal productivity tool for professionals managing high email volumes and multiple priorities.`,
    image: "/images/solution-outlook-ai-copilot1.png",
  },
  {
    title: "Write Smarter and Faster with Outlook 365 AI Write Email Software Services",
    para: `AI Write Email Software Services enhance email writing directly within Microsoft Outlook 365. With real-time assistance like smart autocomplete, tone adjustment, context-aware suggestions, and email summarization, users can write clearer, more professional emails faster.Ideal for any role—sales, marketing, HR, or admin—this tool ensures your communication is always polished, efficient, and effective.`,
    image: "/images/solution-outlook-ai-copilot2.png",
    reverse: true,
  },
];

const page = () => {
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
            "acquireLicensePage": "https://www.appitsoftware.com/products/outlook-ai-copilot/"
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
              "name": "What are Outlook AI Copilot Product Services offered by AppitSoftware?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AppitSoftware provides advanced Outlook AI Copilot Product Services that integrate artificial intelligence into Microsoft Outlook, enhancing productivity through smart suggestions, automated responses, and intelligent scheduling."
              }
            },{
              "@type": "Question",
              "name": "How can Outlook AI Copilot Software Services benefit my business communication?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our Outlook AI Copilot Software Services enable users to streamline email management by auto-drafting replies, summarizing long threads, and prioritizing messages, saving time and reducing manual effort."
              }
            },{
              "@type": "Question",
              "name": "What is Outlook 365 AI Write Email Software and how does it work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Outlook 365 AI Write Email Software from AppitSoftware uses natural language processing (NLP) to draft professional, context-aware emails automatically, improving communication speed and consistency."
              }
            },{
              "@type": "Question",
              "name": "Can AppitSoftware customize Outlook AI tools for specific business needs?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, AppitSoftware customizes Outlook AI Copilot functionalities based on business workflows, including language preferences, tone adjustment, integration with CRM tools, and task automation."
              }
            },{
              "@type": "Question",
              "name": "Is the Outlook AI Copilot secure for enterprise communication?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. AppitSoftware ensures enterprise-grade security and compliance in all Outlook AI Copilot solutions, including data encryption, secure API integrations, and adherence to Microsoft 365 security protocols."
              }
            }]
          })
        }}
      />
      <TransparentHeader />
      <HideDefaultHeader />
      <OutlookAICopilotHero />
      <ImageWithTextSection sectionsData={sectionsData} />
      <Benefits
        data={FeaturesOfOutlookAICopilot}
        heading={{
          title: "Features of Outlook AI Copilot",
          highlightText: "AI Copilot",
        }}
      />
      <OutlookAICopilotFeatures />
      <WhyChoose
        data={whyChooseAILawyerData}
        heading={{
          title: "Why Choose APPIT Software Solutions?",
          para: "We solve your most complex technology challenges with innovative, scalable solutions. From strategy to execution, we transform your digital ecosystem to unlock new growth.",
          highlightText: "Why Choose",
        }}
      />
      <OutlookAICopilotHighlights />
      <ImageWithTextSection sectionsData={sectionsData2} />      <OutlookAICopilotFAQ />
      <CTA />
      <ContactUs />
      <AboveFooterSection />
      <Footer />
    </>
  );
};

export default page;
