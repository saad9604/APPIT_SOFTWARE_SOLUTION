import Header from '@/components/home/Header'
import CareerHero from '@/components/career/CareerHero'
import Search from '@/components/career/Search'
import Cards from '@/components/career/Cards'
import Benefits from '@/components/career/Benefits'
import CareerFirstSection from '@/components/career/CareerFirstSection'
import CareerFAQ from '@/components/career/CareerFAQ'
import AboveFooterSection from '@/components/home/AboveFooterSection'
import Footer from '@/components/home/Footer'
import ScrollToTopButton from '@/components/home/ScrollToTopButton'
import Script from 'next/script'

export const metadata = {
  title: 'Explore Careers | Join Our Innovative Team',
  description: 'Join Appit Software and be part of a forward-thinking team building AI-powered solutions. Explore exciting career paths in tech.',
  keywords: [
    'Appit Software careers', 
    'Appit Software jobs', 
    'join Appit Software', 
    'work at Appit Software', 
    'software company jobs', 
    'tech careers', 
    'IT jobs', 
    'innovative tech team', 
    'software development careers', 
    'technology careers'
  ]
};

export default function CareerPage() {
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
            "acquireLicensePage": "https://www.appitsoftware.com/career/"
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
              "name": "What types of roles are available at Appit Software?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Appit Software offers a wide range of full-time positions across IT and business solutions, including roles in Gen AI customer experience, Oracle and ServiceNow AI, risk management, outsourced IT support and more."
              }
            },{
              "@type": "Question",
              "name": "Does Appit Software offer remote or flexible working options?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "While the career page may not specify this, many IT companies today offer flexible or remote working options. For details on Appit Software's policy, please check individual job postings or contact the HR team."
              }
            },{
              "@type": "Question",
              "name": "What is the culture like at Appit Software?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Appit Software promotes a culture of innovation, automation, and growth. Employees are encouraged to innovate, automate processes, and support the company's vision from strategy to execution."
              }
            },{
              "@type": "Question",
              "name": "What kind of skills and background is Appit Software looking for?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Candidates with expertise in AI, IT, business solutions, e-commerce platforms, software development, and digital transformation are highly valued. Specific requirements depend on the role."
              }
            },{
              "@type": "Question",
              "name": "Does Appit Software offer internships or entry-level positions?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The current career page emphasizes full-time positions, but you can inquire directly for internship or entry-level opportunities."
              }
            },{
              "@type": "Question",
              "name": "How can I apply for a position at Appit Software?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can explore current openings on the careers page and follow the application instructions for each role. If no direct instructions are listed, consider contacting Appit Software via their contact page."
              }
            },{
              "@type": "Question",
              "name": "What is the approach to professional growth at Appit Software?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The company supports growth through continuous learning, innovation, and involvement in cutting-edge projects across various industries."
              }
            }]
          })
        }}
      />
      <Header />
      <main>
        <CareerHero /><CareerFirstSection />
        <Search />
        <Cards />
        <Benefits />
        <CareerFAQ />
      </main>
      <AboveFooterSection />
      <Footer />
      <ScrollToTopButton />
    </>
  )
}
