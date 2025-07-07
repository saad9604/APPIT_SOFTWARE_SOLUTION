import Header from '@/components/home/Header'
import Hero from '@/components/home/Hero'
import StatsSection from '@/components/home/StatsSection'
import CoreServices from '@/components/home/CoreServices'
import Services from '@/components/home/Services'
import ServicesCarousel from '@/components/home/ServicesCarousel'
import WhyChoose from '@/components/home/WhyChoose'
import Process from '@/components/home/Process'
import Testimonials from '@/components/home/Testimonials'
import BlogSection from '@/components/home/BlogSection'
import ContactSection from '@/components/home/ContactSection'
import HomeFAQ from '@/components/home/HomeFAQ'
import AboveFooterSection from '@/components/home/AboveFooterSection'
import Footer from '@/components/home/Footer'
import Script from 'next/script'

export const metadata = {
  title: 'APPIT Software Solutions | AI-Driven IT & Cloud Services',
  description: 'APPIT Software Solutions is an IT consulting firm specializing in AI-powered services, cloud computing, and Oracle solutions.',
  keywords: [
    'APPIT Software Solutions', 
    'Oracle Cloud services', 
    'AI-CRM integration services', 
    'Oracle development company in India', 
    'Oracle Database Application Development'
  ]
};

export default function Home() {
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
            "acquireLicensePage": "https://www.appitsoftware.com/"
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
              "name": "What is Appit?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "APPIT Software Solutions is a Hyderabad-based IT services and consulting firm founded in 2016. The company specializes in delivering AI-driven digital transformation solutions, cloud computing, Oracle services, and enterprise software development to clients across various industries."
              }
            },{
              "@type": "Question",
              "name": "What services does APPIT Software Solutions offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "APPIT provides a comprehensive suite of IT and AI-driven services, including:\n•\tOracle Cloud ERP, HCM, SCM, EPM, and CX solutions\n•\tAI-powered tools like AskGenie AI, SmartChat AI, and SalesBot AI\n•\tCloud implementation and integration services\n•\tCybersecurity and GRC solutions\n•\tMobile app and eCommerce development (Shopify, Magento, BigCommerce)\n•\tOffshore development and managed IT services\n•\tAI-driven talent acquisition and legal document automation"
              }
            },{
              "@type": "Question",
              "name": "Which industries does APPIT serve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "APPIT caters to a diverse range of industries, including:\n•\tOil & Gas\n•\tThermal Power\n•\tManufacturing and Supply Chain\n•\tEdible Oils\n•\tConstruction and Real Estate"
              }
            },{
              "@type": "Question",
              "name": "Where is APPIT Software Solutions located?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "APPIT's headquarters are in Hyderabad, India, with additional offices in:\n•\tLewes, Delaware, USA\n•\tRiyadh, Saudi Arabia\n•\tDubai, UAE"
              }
            },{
              "@type": "Question",
              "name": "How can I contact APPIT Software Solutions?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can reach out via email at info@appitsoftware.com. They typically respond within 12 hours."
              }
            },{
              "@type": "Question",
              "name": "Who leads APPIT Software Solutions?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Aravind Gajjela is the CEO and Founder of APPIT Software Solutions. Under his leadership, the company focuses on delivering tailored software applications, web development, and cloud-based solutions."
              }
            }]
          })
        }}
      />
      <Header />
      <main>
        <Hero />
        <CoreServices />
        <Services />
        {/* <ServicesCarousel /> */}
        <WhyChoose />
        <StatsSection />
        <Process />        <Testimonials />
        <BlogSection />
        <HomeFAQ />
        <ContactSection />
      </main>
      <AboveFooterSection />
      <Footer />
    </>
  )
}