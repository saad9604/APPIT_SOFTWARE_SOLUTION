// Metadata is defined as a JavaScript object

import Header from '@/components/home/Header';
import IndustryHero from '@/components/industry/IndustryHero';
import IndustryDescription from '@/components/industry/IndustryDescription';
import IndustryFeatures from '@/components/industry/IndustryFeatures';
import IndustryBenefits from '@/components/industry/IndustryBenefits';
import IndustryFAQ from '@/components/industry/IndustryFAQ';
import AboveFooterSection from '@/components/home/AboveFooterSection';
import Footer from '@/components/home/Footer';
import Script from 'next/script';

export const metadata = {
  title: 'Industry-Specific IT Solutions | APPIT Software',
  description: 'Explore APPIT Software\'s industry-specific IT solutions designed for Oil & Gas, Healthcare, Finance, Retail, and Manufacturing sectors.',
  keywords: [
    'industry-specific IT solutions',
    'Oil and Gas IT Solutions',
    'Oracle EBS R12 Customizations',
    'Healthcare IT services',
    'Financial industry software',
    'Retail technology solutions',
    'Manufacturing software solutions',
    'industry-focused digital transformation'
  ]
};

export default function Industry() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Script
        type="application/ld+json"
        className="schemantra"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "WebPage",
            "acquireLicensePage": "https://www.appitsoftware.com/industry/"
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
              "name": "What industries does Appit Software Solutions serve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "@Appit Software Solutions serves a diverse range of industries, including Oil & Gas, Thermal Power, Manufacturing and Supply Chain, Edible Oils, Construction, and Real Estate, providing tailored IT solutions for each sector."
              }
            },{
              "@type": "Question",
              "name": "How does Appit Software Solutions support the Oil and Gas industry?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "@Appit Software Solutions supports the Oil and Gas industry with Oracle EBS R12 customizations, specialized IT services, digital transformation solutions, and industry-specific applications that address unique operational challenges."
              }
            },{
              "@type": "Question",
              "name": "What benefits do Appit's industry solutions provide?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Appit's industry solutions provide benefits such as improved operational efficiency, streamlined processes, enhanced data analytics, regulatory compliance, and customized applications designed specifically for industry-specific challenges."
              }
            },{
              "@type": "Question",
              "name": "Does Appit Software Solutions offer solutions for the manufacturing industry?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Appit Software Solutions offers specialized solutions for the manufacturing industry, including supply chain optimization, production planning, inventory management, and enterprise resource planning systems tailored to manufacturing needs."
              }
            },{
              "@type": "Question",
              "name": "How does Appit address industry-specific compliance requirements?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Appit addresses industry-specific compliance requirements by implementing customized solutions that adhere to regulatory standards, offering audit-ready systems, and providing ongoing support to adapt to changing compliance landscapes."
              }
            }]
          })
        }}
      />
      <Header />
      <IndustryHero />
      <IndustryDescription />
      <IndustryFeatures />
      <IndustryBenefits />
      <IndustryFAQ />
      <AboveFooterSection />
      <Footer />
    </main>
  );
}
