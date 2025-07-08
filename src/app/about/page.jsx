import Header from '@/components/home/Header'
import AboveFooterSection from '@/components/home/AboveFooterSection'
import AboutHero from '@/components/about/AboutHero'
import GrowBusiness from '@/components/about/GrowBusiness'
import CompanyInfo from '@/components/about/CompanyInfo'
import CompanyStats from '@/components/about/CompanyStats'
import OurPromise from '@/components/about/OurPromise'
import VisionaryLeader from '@/components/about/VisionaryLeader'
import OurHistory from '@/components/about/OurHistory'
import OurAdvisor from '@/components/about/OurAdvisor'
import TeamSection from '@/components/about/TeamSection'
// import Testimonials from '@/components/about/ClientTestimonials'
import Testimonials from '@/components/home/Testimonials'
import AboutFAQ from '@/components/about/AboutFAQ'
import Footer from '@/components/home/Footer'
import ScrollToTopButton from '@/components/home/ScrollToTopButton'
import Script from 'next/script'



export const metadata = {
  title: 'About APPIT Software - IT Services & Business Solutions – 2025',
  description: 'Discover APPIT Software Solutions Inc., a leading IT services & business solutions specializing in software technologies.',
  keywords: [
    'APPIT Software', 
    'IT services', 
    'business solutions', 
    'technology company', 
    'software solutions', 
    'IT consulting', 
    'digital transformation', 
    'cloud services', 
    'enterprise software', 
    'managed IT services', 
    'software development', 
    'business IT solutions', 
    'IT company 2025', 
    'APPIT Software profile', 
    'technology solutions provider'
  ]
};

export default function AboutPage() {
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
            "acquireLicensePage": "https://www.appitsoftware.com/about/"
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
              "name": "Who is APPIT Software?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "APPIT Software is a provider of IT services and business solutions focused on delivering value to clients through innovative and agile technology."
              }
            },{
              "@type": "Question",
              "name": "What is the mission of APPIT Software?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "APPIT Software's mission is to deliver IT services and business solutions that exceed client expectations, enabling businesses to grow and deliver higher customer satisfaction."
              }
            },{
              "@type": "Question",
              "name": "How does APPIT Software help businesses?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "By adopting up-to-date, agile, and innovative IT solutions, APPIT Software helps businesses improve their operations, efficiency, and customer satisfaction."
              }
            },{
              "@type": "Question",
              "name": "What kind of IT services does APPIT Software offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "While this page focuses on the company's approach, APPIT Software's services generally include software development, consulting, and business solutions tailored to client needs."
              }
            },{
              "@type": "Question",
              "name": "Why should I choose APPIT Software for my business?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "APPIT Software is dedicated to exceeding client expectations and continuously updating its technology and solutions to add value to its clients' businesses."
              }
            },{
              "@type": "Question",
              "name": "How does APPIT Software ensure value for clients?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "By staying agile, innovative, and customer-focused, APPIT Software ensures clients receive solutions that meet and often surpass their business objectives."
              }
            }]
          })
        }}      />
      <Header />
      <main>
        <AboutHero />
        <GrowBusiness />
        <CompanyInfo />
        <CompanyStats />
         <OurPromise />
        <VisionaryLeader />
        <OurHistory />        <OurAdvisor />
        <TeamSection />
        <Testimonials />
        <AboutFAQ />
      </main>
      <AboveFooterSection />
      <Footer />
      <ScrollToTopButton />
    </>
  )
}
