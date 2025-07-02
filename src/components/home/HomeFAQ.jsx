import React from 'react';
import FAQs from '@/components/pages/faqs';

const HomeFAQ = () => {
  const faqData = [
    {
      question: "What is Appit?",
      answer: "APPIT Software Solutions is a Hyderabad-based IT services and consulting firm founded in 2016. The company specializes in delivering AI-driven digital transformation solutions, cloud computing, Oracle services, and enterprise software development to clients across various industries."
    },
    {
      question: "What services does APPIT Software Solutions offer?",
      answer: [
        "APPIT provides a comprehensive suite of IT and AI-driven services, including:",
        "@Oracle Cloud ERP, HCM, SCM, EPM, and CX solutions",
        "@AI-powered tools like AskGenie AI, SmartChat AI, and SalesBot AI",
        "@Cloud implementation and integration services",
        "@Cybersecurity and GRC solutions",
        "@Mobile app and eCommerce development (Shopify, Magento, BigCommerce)",
        "@Offshore development and managed IT services",
        "@AI-driven talent acquisition and legal document automation"
      ]
    },
    {
      question: "Which industries does APPIT serve?",
      answer: [
        "APPIT caters to a diverse range of industries, including:",
        "@Oil & Gas",
        "@Thermal Power",
        "@Manufacturing and Supply Chain",
        "@Edible Oils",
        "@Construction and Real Estate"
      ]
    },
    {
      question: "Where is APPIT Software Solutions located?",
      answer: [
        "APPIT's headquarters are in Hyderabad, India, with additional offices in:",
        "@Lewes, Delaware, USA",
        "@Riyadh, Saudi Arabia",
        "@Dubai, UAE"
      ]
    },
    {
      question: "How can I contact APPIT Software Solutions?",
      answer: "You can reach out via email at info@appitsoftware.com. They typically respond within 12 hours."
    },
    {
      question: "Who leads APPIT Software Solutions?",
      answer: "Aravind Gajjela is the CEO and Founder of APPIT Software Solutions. Under his leadership, the company focuses on delivering tailored software applications, web development, and cloud-based solutions."
    }
  ];

  return (
    <FAQs
      data={faqData}
      heading={{
        title: "Frequently Asked Questions (FAQs)",
        highlightText: "(FAQs)",
      }}
    />
  );
};

export default HomeFAQ;
