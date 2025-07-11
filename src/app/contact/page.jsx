import ImageWithTextSection from "../../components/layout/image-text-section";
import ContactCTA from "../../components/pages/contact/contact-cta";
import ContactForm from "../../components/pages/contact/contact-form";
import ContactHero from "../../components/pages/contact/contact-hero";
import ContactFAQ from "../../components/pages/contact/contact-faq";
import Locations from "../../components/pages/contact/locations";
import MapComponent from "../../components/pages/contact/map-component";
// import SocialSection from "../../components/pages/contact/social-sec";
import AboveFooterSection from "../../components/home/AboveFooterSection";
import Footer from "../../components/home/Footer";
import Script from "next/script";
import ScrollToTopButton from '@/components/home/ScrollToTopButton'

export const metadata = {
  title: 'Contact APPIT Software | Global IT Services & Support – 2025',
  description: 'Contact APPIT Software for Global IT Services & Support. Our offices are in India, the USA, Saudi Arabia, and the UAE.',
  keywords: [
    'Contact APPIT Software', 
    'APPIT Software support', 
    'global IT services', 
    'IT support 2025', 
    'IT service provider', 
    'business IT support', 
    'technology support', 
    'international IT services', 
    'managed IT support', 
    'IT helpdesk'
  ]
};

const sectionsData = [
  {
    title: "Global Locations",
    para: `Appit Software has a global presence with offices in USA, Saudi Arabia, UAE, and India. We are committed to providing top-notch IT services and support to our clients worldwide.`,
    image: "/images/map.png",
    reverse: true,
  },
];

const Page = () => {  return (
    <>
      <Script
        type="application/ld+json"
        className="schemantra"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "WebPage",
            "acquireLicensePage": "https://www.appitsoftware.com/contact/"
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
              "name": "How can I get in touch with Appit Software?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can contact Appit Software using the contact form on the website, by email, or by reaching out to one of their global offices."
              }
            },{
              "@type": "Question",
              "name": "Where are the Appit Software offices located?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Appit Software has offices at:",
                "@USA": "16192 Coastal Highway, Lewes, DE 19958",
                "@Saudi Arabia": "Futuro Tower, King Saud Rd, Office # 703, 7th floor, Riyadh 12624",
                "@UAE": "IFZA Business Park, DDPDubai Silicon Oasis, DDP, Building A1, Dubai"

              }
            },{
              "@type": "Question",
              "name": "Are in-person appointments available at the offices?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, appointments can be arranged by contacting the team through the website's contact form or by email."
              }
            },{
              "@type": "Question",
              "name": "What services can I get help with by contacting Appit Software?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can get assistance with global IT services, support, and workspace solutions for your business."
              }
            },{
              "@type": "Question",
              "name": "How can I schedule a phone or Zoom call with Appit Software?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "After you send a message or email through the website, a team member will coordinate a convenient time for a phone or Zoom call."
              }
            }]
          })
        }}
      />
      <ContactHero />
      <ContactForm />
      <ContactCTA /> 
      <ImageWithTextSection sectionsData={sectionsData} />
      <Locations />
      <MapComponent />
      <ContactFAQ />
      <ScrollToTopButton /> 
      
      {/* Spacer div for adding margin between MapComponent and AboveFooterSection */}
      <div className="my-16 md:my-24"></div>
      
      {/* <SocialSection /> */}
      <AboveFooterSection />
      <Footer />
    </>
  );
};

export default Page;