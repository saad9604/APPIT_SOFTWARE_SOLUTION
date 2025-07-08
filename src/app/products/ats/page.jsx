import {
  whyChooseAILawyerData,
  FeaturesOfATS,
} from "../../../assets/data";
import ImageWithTextSection from "../../../components/layout/image-text-section";
import ATSFeatures from "../../../components/pages/products/ats/ats-features";
import CTA from "../../../components/pages/cta";
import ATSHighlights from "../../../components/pages/products/ats/ats-highlights";
import ContactUs from "../../../components/pages/products/ats/contact-us";
import ATSChatFeatures from "../../../components/pages/products/ats/ats-chat-features";
import ATSFAQ from "../../../components/products/ats/ATSFAQ";
import Benefits from "../../../components/pages/benefit-grid/benefit-section";
import ATSHero from "../../../components/pages/products/ats/ats-hero";
import TransparentHeader from "../../../components/layout/transparent-header/transparent-header";
import HideDefaultHeader from "../../../components/layout/transparent-header/hide-default-header";
import WhyChoose from "../../../components/pages/why-choose/why-choose";
import AboveFooterSection from "../../../components/home/AboveFooter";
import Footer from "../../../components/home/Footer";
import React from "react";
import Script from "next/script";

export const metadata = {
  title: 'Application Tracking System | ATS by APPIT Software',
  description: 'Streamline your recruitment process with APPIT Software\'s advanced Application Tracking System (ATS). Manage candidates, automate screening, and make better hiring decisions.',
  keywords: [
    'Application Tracking System',
    'ATS software',
    'recruitment automation',
    'candidate management system',
    'hiring software solution',
    'resume screening technology',
    'talent acquisition platform',
    'recruitment management system'
  ]
};

const sectionsData = [
  {
    title: "The Need for Smart Applicant Tracking System Services",
    para: `Traditional hiring methods—relying on spreadsheets, endless emails, and manual tasks—often lead to delays and missed opportunities.  Smart Applicant Tracking System transforms the way organizations attract, assess, and hire top talent.Our solution automates every step of the hiring journey, from job postings and resume screening to interview coordination and final offers. With intelligent workflows, real-time progress tracking, and AI-powered insights, recruiters can focus more on people—not paperwork.By adopting AppitSoftware's Smart ATS, businesses can accelerate time-to-hire, lower recruitment costs, and build a smarter, data-driven hiring process.`,
    image: "/images/solution-ats.png",
    reverse: true,
  },
];
const sectionsData2 = [
  {
    title: "Powering Recruitment with AI ATS Software Services",
    para: `AI is revolutionizing recruitment, and AppitSoftware's AI ATS Software Services harness automation and machine learning to streamline hiring.
Our platform analyzes resumes, ranks candidates by job fit, and predicts hiring outcomes—reducing bias and enabling data-driven decisions.
By automating tasks like resume parsing, candidate shortlisting, follow-ups, and interview scheduling, recruiters save time and engage candidates more effectively. Plus, real-time analytics provide insights into hiring performance.With AppitSoftware's AI ATS, organizations can build diverse, high-quality teams while minimizing administrative workload.`,
    image: "/images/solution-ats1.png",
  },
  {
    title: "Enhancing Hiring Accuracy with AI Applicant Tracking Services",
    para: `Recruiting top talent requires precision at every stage. The  AppitSoftware's AI Applicant Tracking Services streamline the process with intelligent tools to manage job requisitions, track candidates, and evaluate profiles.Our AI-driven system identifies the best candidates based on skills, experience, and cultural fit, while automating resume screening and ranking to reduce time-to-hire.
By focusing on qualified candidates, recruiters save time and effort, achieving fairer, more consistent hiring decisions that build stronger teams.`,
    image: "/images/solution-ats2.png",
    reverse: true,
  },
  {
    title:
      "Revolutionizing Talent Acquisition with Smart AI Recruiters Services",
    para: `Recruitment today demands agility, personalization, and intelligence. AppitSoftware's Smart AI Recruiters combine AI chatbots, predictive analytics, and automation to transform the hiring process.From engaging candidates with smart conversations to predicting success likelihood, our services help recruiters work smarter. Real-time insights enable tailored strategies for better engagement and faster hires.With Smart AI Recruiters, organizations create a faster, smarter, and more personalized recruitment experience that boosts employer branding and candidate retention.`,
    image: "/images/solution-ats3.png",
  },
];

const Page = () => (
  <>
    <Script
      type="application/ld+json"
      className="schemantra"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": "WebPage",
          "acquireLicensePage": "https://www.appitsoftware.com/products/ats/"
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
            "name": "What is an ATS (Applicant Tracking System)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An ATS is a software platform that helps organizations manage their end-to-end recruitment process—from job posting and resume screening to interviews, offer letters, and onboarding. It centralizes all hiring data, automates tasks, and improves collaboration between recruiters and hiring managers."
            }
          },{
            "@type": "Question",
            "name": "Who can use this ATS?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our ATS is designed for startups, SMBs, enterprises, and recruitment agencies. Whether you're a solo recruiter or part of a 1,000+ employee HR department, the system scales to fit your needs."
            }
          },{
            "@type": "Question",
            "name": "Is resume parsing included?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our built-in resume parser extracts contact info, skills, work history, education, and more from multiple resume formats (PDF, DOC, DOCX, etc.)—even in bulk."
            }
          },{
            "@type": "Question",
            "name": "Does your ATS support job board integrations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. You can post jobs to multiple job boards like LinkedIn, Naukri, Indeed, Monster, and more from a single dashboard with just one click."
            }
          },{
            "@type": "Question",
            "name": "How does AI improve the recruitment process in your ATS?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our AI-powered ATS analyzes resumes, ranks candidates by job fit, predicts hiring outcomes, automates resume parsing, and provides real-time analytics—reducing bias, saving time, and enabling data-driven hiring decisions."
            }
          }]
        })
      }}
    />
    <HideDefaultHeader />
    <TransparentHeader showBorder={true} />
    <div className="mt-[80px]">
      <ATSHero />
      {sectionsData.map((section, index) => (
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
      <ATSFeatures features={FeaturesOfATS} />
      <ATSHighlights />
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
      <Benefits />
      <ATSChatFeatures />
      <WhyChoose data={whyChooseAILawyerData} />
      <ContactUs />
      <CTA />
      <ATSFAQ />
    </div>
    <AboveFooterSection />
    <Footer />
  </>
);

export default Page;
