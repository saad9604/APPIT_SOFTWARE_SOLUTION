import ImageWithTextSection from "@/components/layout/image-text-section";
import HideDefaultHeader from "../../../components/layout/transparent-header/hide-default-header";
import TransparentHeader from "../../../components/layout/transparent-header/transparent-header";
import OracleHero from "../../../components/pages/oralce-ai/oracle-hero";
import React from "react";
import KeyFeatures from "@/components/pages/features/key-features";
import Benefits from "@/components/pages/benefit-grid/benefit-section";
import FAQs from "@/components/pages/faqs";
import CTA from "@/components/pages/cta";
import AboveFooterSection from "@/components/home/AboveFooterSection";
import Footer from "@/components/home/Footer";
import Script from "next/script";

export const metadata = {
  title: 'Appit Digital Transformation Services | Empowering Future-Ready Enterprises 2025',
  description: 'Unlock innovation and efficiency with Appit\'s Digital Transformation Services. We help businesses modernize operations, enhance customer experience, and drive growth with cutting-edge technology solutions.',
  keywords: [
    'Digital transformation services',
    'Digital transformation consulting',
    'Digital transformation strategy',
    'Digital transformation companies',
    'Digital transformation solutions',
    'AI in digital transformation',
    'business process modernization',
    'enterprise digital innovation'
  ]
};

const Page = () => {
  const oracleHeroData = {
    title: "Digital Transformation Services",
    para: "Appit transforms customer experiences with AI, automation, and analytics. Our experts merge tech and industry skills to help you surpass expectations.",
    videoSrc: "/videos/dtsVideo1.mp4",
  };

  const sectionsData = [
    {
      title: "Redefining Industries through Digital Innovation",
      para: `In today’s digital era, businesses need to adapt to stay ahead. Appit Software provides end-to-end digital transformation solutions across industries like government, manufacturing, healthcare, and energy. We enable organizations to adopt advanced technologies while maintaining compliance, offering expert strategies, risk management, and smooth implementation to ensure long-term growth and resilience. Our tailored approach helps businesses unlock new opportunities and stay future-ready.`,
      video: "/videos/dtsVideo2.mp4",
      reverse: true,
    },
  ];

  const sectionsData2 = [
    {
      title: `Our Expertise`,
      para: `We provide strategic digital transformation consulting to align organizations with the latest technologies while ensuring regulatory compliance. Our Smart Solutions Consulting supports innovation across sectors—cities, transportation, healthcare, energy—integrating smart technologies with full adherence to compliance standards. Through Technology Transformation Consulting, we guide the secure implementation of AI, IoT, cloud, and automation, meeting all data and regulatory benchmarks. Additionally, our Process Transformation Consulting streamlines operations to boost efficiency, all within strict governance frameworks.`,
      image: "/images/dtsImage1.png",
    },
    {
      title: `Industries We Serve`,
      para: `We provide sector-specific consulting to support digital transformation with a strong focus on compliance. For governments, we enable smart cities, infrastructure, and grids while ensuring data privacy and cybersecurity. In manufacturing, our smart factory consulting drives Industry 4.0 adoption in line with ISO and regulatory standards. For the automotive sector, we support smart mobility and connected vehicle technologies that meet global safety and cybersecurity requirements. In healthcare, we guide the adoption of digital health solutions while ensuring compliance with medical device regulations. Our energy consulting modernizes grids and integrates renewables, aligned with ISO 50001 and sustainability standards.`,
      image: "/images/dtsImage2.png",
      reverse: true,
    },
  ];

  const BenefitData = [
    {
      iconSrc: "/images/svgs/benefit_1.svg",
      title: "Technology",
      para: `We Assess tech stacks for future readiness and deliver scalable ,cloud-native applications that drive digital transfromations`,
      className: "lg:!w-[382px] lg:!h-[177px]",
    },
    {
      iconSrc: "/images/svgs/benefit_2.svg",
      title: "People",
      para: `As digital transfromations leaders we create people-centric connected, and collaborative workplaces`,
      className: "lg:!w-[382px] lg:!h-[177px]",
    },
    {
      iconSrc: "/images/svgs/benefit_3.svg",
      title: "Culture",
      para: `Creativity drives digital transfromations Our Consultants guide meaningful cultural change.`,
      className: "lg:!w-[382px] lg:!h-[177px]",
    },
    {
      iconSrc: "/images/svgs/benefit_4.svg",
      title: "Artificial Intelligence",
      para: `We Accelerate digital transformations with intelligent scalable systems that enhance decision-making and Growth.`,
      className: "lg:!w-[382px] lg:!h-[177px]",
    },
    {
      iconSrc: "/images/svgs/benefit_4.svg",
      title: "Process",
      para: `Appit's Digital transformation services strategy is sustainable, scalable, and repeatable-driven by proven frameworks.`,
      className: "lg:!w-[382px] lg:!h-[177px]",
    },
    {
      iconSrc: "/images/svgs/benefit_4.svg",
      title: "Holistic Offerings",
      para: `We Offer end-to-end ecommerce solutions, covering strategy, design, development, and marketing.`,
      className: "lg:!w-[382px] lg:!h-[177px]",
    },
  ];

  const KeyfeaturesData = [
    {
      title: `Architecture & Design`,
      para: `We design resilient, scalable enterprise systems with a focus on user experience. Our Digital Transformation services bring your vision to life.`,
      imageSrc: "/images/dtsImage3.png",
    },
    {
      title: `Application Modernization`,
      para: `We drive digital transformation by modernizing legacy systems through intelligent automation, specialized expertise, and global delivery.`,
      imageSrc: "/images/dtsImage4.png",
    },
    {
      title: `Enterprise Mobility`,
      para: `Our consultants deliver end-to-end mobility solutions—from device selection to security—ensuring a seamless user experience.`,
      imageSrc: "/images/dtsImage5.png",
    },
    {
      title: `Agile Transformation​`,
      para: `We provide end-to-end mobility solutions, from device selection to security, with a consistent user experience across devices.`,
      imageSrc: "/images/dtsImage6.png",
    },
    {
      title: `Big Data Analytics`,
      para: `We unlock the power of your data with big data analytics to drive smarter business decisions.`,
      imageSrc: "/images/dtsImage7.png",
    },
    {
      title: `Artificial Intelligence & ML`,
      para: `We solve business transformation challenges using NLP, machine learning, smart automation, and predictive analytics.`,
      imageSrc: "/images/dtsImage8.png",
    },
    {
      title: `Microservices & Serverless`,
      para: `We build scalable greenfield apps and reduce costs using microservices and serverless architecture.`,
      imageSrc: "/images/dtsImage9.png",
    },
    {
      title: `Cloud Migration​`,
      para: `Modernize your applications with our Digital Transformation Services to accelerate delivery, scale efficiently, and enhance security.`,
      imageSrc: "/images/dtsImage10.png",
    },
  ];
  const faqData = [
    {
      question: "What is Digital Transformation?",
      answer: [
        "Digital transformation is the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers.",
        "To best leverage emerging technologies and their rapid expansion into human activities, a business must reinvent itself by radically transforming all of its processes and models. So, digital transformation journey of a company involves usage of digital technologies to create new or modify existing business processes, culture, and customer experiences to meet changing business and market requirements.",
        "It transcends traditional roles like sales, marketing, and customer service. Instead, digital transformation begins and ends with how you think about, and engage with, customers.",
      ],
    },
    {
      question: "What is Digital Transformation Consulting?",
      answer: [
        "Digital Transformation offers a wide range of benefits that can positively impact almost every area of a business. The key advantages include:",
        "1. Improved Efficiency: Automates repetitive tasks, reduces manual work, and streamlines processes to save time and resources.",
        "2. Enhanced Customer Experience: Enables businesses to provide faster, more personalized, and seamless service across digital channels.",
        "3. Data-Driven Decision Making: Gives access to real-time data and analytics, helping leaders make smarter, more informed decisions.",
        "4. Cost Savings: Reduces operational costs by minimizing waste, improving workflows, and optimizing resource usage.",
        "5. Increased Agility: Helps businesses respond quickly to market changes, customer needs, and new opportunities.",
        "6. Stronger Collaboration: Promotes better teamwork with digital tools that connect teams across departments and locations.",
        "7. Better Innovation: Opens doors to new business models, digital products, and ways of delivering value to customers.",
        "8. Scalability and Flexibility: Digital systems allow businesses to scale operations easily without major infrastructure changes.",
        "9. Improved Security: Modern digital tools come with enhanced security features to protect sensitive data and ensure compliance.",
        "10. Competitive Advantage: Keeps businesses ahead of the competition by embracing modern technologies and evolving with customer expectations.",
      ],
    },
    {
      question: "What are the Challenges of Digital Transformation?",
      answer: [
        "Digital Transformation offers many benefits, but it also comes with challenges that organizations must address to succeed. Common challenges include:",
        "1. Resistance to Change: Employees and management may be hesitant to adopt new technologies or change established processes.",
        "2. Lack of Digital Skills: Organizations may struggle with a shortage of trained professionals who understand digital tools and systems.",
        "3. High Implementation Costs: Initial investment in technology, infrastructure, and training can be expensive, especially for small businesses.",
        "4. Integration with Legacy Systems: Old or outdated systems may be difficult to integrate with modern digital solutions, slowing down transformation.",
        "5. Data Security and Privacy Concerns: Storing and managing data digitally increases the risk of cyberattacks and compliance issues.",
        "6. Undefined Strategy or Vision: Without a clear digital strategy and roadmap, transformation efforts may become disorganized or ineffective.",
        "7. Managing Cultural Change: Digital Transformation is not just about technology—it also requires a shift in mindset and company culture.",
        "8. Measuring ROI: It can be difficult to track the return on investment (ROI) of digital initiatives, especially in the early stages.",
        "9. Vendor and Tool Selection: Choosing the right technology partners and platforms is critical and can be overwhelming with so many options available.",
        "10. Maintaining Business Continuity: Implementing digital changes without disrupting day-to-day operations is a major challenge for many organizations.",
      ],
    },
    {
      question: "Why do Organizations need Services of Digital Transformation Consultants?",
      answer: [
        "Organizations need Digital Transformation Consultants to successfully navigate the complex process of adopting and integrating digital technologies. Here are the key reasons:",
        "1. Expert Guidance: Consultants bring deep expertise in technology, strategy, and industry trends. They help businesses choose the right digital tools and approaches tailored to their specific goals.",
        "2. Objective Assessment: An external consultant provides an unbiased evaluation of current systems, processes, and digital maturity, identifying gaps and opportunities for improvement.",
        "3. Strategic Roadmap: Consultants develop a clear, step-by-step transformation plan aligned with business objectives, budgets, and timelines.",
        "4. Faster Implementation: With experience and proven methodologies, consultants can accelerate the digital transformation process and avoid common pitfalls.",
        "5. Cost Optimization: They help organizations invest wisely by avoiding unnecessary expenses and ensuring a better return on investment (ROI).",
        "6. Change Management Support: Consultants guide leadership and staff through organizational changes, helping manage resistance and encouraging adoption of new technologies.",
        "7. Technology Integration: They ensure seamless integration between new digital solutions and existing legacy systems, minimizing disruptions.",
        "8. Risk Management: Experienced consultants anticipate and manage risks such as data security, compliance, and operational disruption.",
        "9. Performance Measurement: They help define success metrics and track progress, ensuring that digital initiatives deliver real business value.",
        "10. Competitive Advantage: Consultants enable businesses to innovate faster, stay ahead of market trends, and gain a strong edge over competitors.",
      ],
    },
  ];  return (
    <>
      <Script
        type="application/ld+json"
        className="schemantra"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "WebPage",
            "acquireLicensePage": "https://www.appitsoftware.com/digital-transformation-services/"
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
              "name": "What are Digital Transformation Services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Digital Transformation Services help organizations evolve by integrating digital technologies across business areas—improving processes, enhancing customer experiences, and driving innovation through AI, cloud computing, automation, data analytics, and more."
              }
            },{
              "@type": "Question",
              "name": "How do AI-Powered Digital Transformation Consulting Services work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "AI-Powered Digital Transformation Consulting Services use artificial intelligence to analyze business processes, identify optimization opportunities, and develop customized strategies that accelerate digital maturity while ensuring alignment with business goals."
              }
            },{
              "@type": "Question",
              "name": "What benefits can I expect from Enterprise Digital Transformation Services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Enterprise Digital Transformation Services deliver increased operational efficiency, enhanced decision-making through data insights, improved customer experiences, faster time-to-market, reduced costs through automation, and greater business agility."
              }
            },{
              "@type": "Question",
              "name": "How do Digital Transformation Strategy Services help my business?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Digital Transformation Strategy Services create a clear roadmap for your digital journey by assessing current capabilities, defining objectives, prioritizing initiatives, and designing implementation plans that ensure successful technology adoption and business evolution."
              }
            },{
              "@type": "Question",
              "name": "What industries benefit from Digital Experience Transformation Services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Digital Experience Transformation Services benefit virtually all industries, including retail, healthcare, manufacturing, finance, logistics, energy, and professional services—each with tailored solutions for their unique challenges."
              }
            },{
              "@type": "Question",
              "name": "How do I start my organization's digital transformation journey?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Start your digital transformation journey with a thorough assessment of your current state, clear definition of business goals, creation of a strategic roadmap, and selection of the right technology partners to guide implementation and change management."
              }
            }]
          })
        }}
      />
      <TransparentHeader />
      <HideDefaultHeader />
      <OracleHero data={oracleHeroData} className="md:ml-[51px] mr-auto" />

      <ImageWithTextSection
        sectionsData={sectionsData}
      />

      <Benefits
        data={BenefitData}
        heading={{
          title: "Key Features",
          para: "Unlock your potential with expert digital strategies that boost innovation & long-term success",
          highlightText: "Key",
        }}
      />

      <ImageWithTextSection
        sectionsData={sectionsData2}
      />

      <KeyFeatures
        data={KeyfeaturesData}
        cards={8}
        heading={{
          title: "Accelerate Your Digital Transformation",
          para: "Take the First Step Toward Digital Excellence!",
          highlightText: "Digital Transformation",
        }}
      />

      <FAQs
        data={faqData}
        heading={{
          title: "Frequently Asked Questions (FAQs)",
          highlightText: "(FAQs)",
        }}
        sectionClassName="py-10"
      />

      <CTA />
      <AboveFooterSection socialMediaLink={false} />
      <Footer />
    </>
  );
};

export default Page;
