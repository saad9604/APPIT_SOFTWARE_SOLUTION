// Metadata is defined as a JavaScript object

import Header from '@/components/home/Header';
import BlogHero from '@/components/blog/BlogHero';
import BlogCards from '@/components/blog/BlogCards';
import AboveFooterSection from '@/components/home/AboveFooterSection';
import Footer from '@/components/home/Footer';
import Script from 'next/script';

export const metadata = {
  title: 'Blog | APPIT Software Solutions',
  description: 'Stay ahead with industry perspectives and insights on emerging tech trends from APPIT Software Solutions.',
  keywords: [
    'APPIT Software blog', 
    'technology insights', 
    'industry perspectives', 
    'tech trends', 
    'digital transformation blog', 
    'IT solutions blog', 
    'software development articles', 
    'AI innovation blog'
  ]
};

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <BlogHero />
      <BlogCards />
      <AboveFooterSection />
      <Footer />
      
      <Script
        type="application/ld+json"
        className="schemantra"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "WebPage",
            "acquireLicensePage": "https://www.appitsoftware.com/blog/"
          })
        }}
      />
      
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What topics do AppIT Solutions blog posts cover?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our blog posts cover a wide range of topics including industry perspectives, emerging tech trends, digital transformation insights, AI innovations, cybersecurity best practices, and software development methodologies."
                }
              },
              {
                "@type": "Question",
                "name": "How often is the AppIT Solutions blog updated?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We regularly update our blog with fresh content to keep our readers informed about the latest developments in technology and digital solutions. Our content team publishes new articles weekly to ensure you have access to the most current insights."
                }
              },
              {
                "@type": "Question",
                "name": "Can I share AppIT Solutions blog content?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we encourage sharing our blog content. Each article includes social media sharing options that make it easy to share valuable insights with your network while properly attributing the source."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}
