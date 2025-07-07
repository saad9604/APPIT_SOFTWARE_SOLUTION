import Benefits from "../../../components/pages/benefit-grid/benefit-section"
import CTA from "../../../components/pages/cta"
import FAQs from "../../../components/pages/faqs"
import KeyFeatures from "../../../components/pages/features/key-features"
import WhyChoose from "../../../components/pages/why-choose/why-choose"
import OracleHero from "../../../components/pages/oralce-ai/oracle-hero"
import TransparentHeader from "../../../components/layout/transparent-header/transparent-header"
import HideDefaultHeader from "../../../components/layout/transparent-header/hide-default-header"
import ImageWithTextSection from "../../../components/layout/image-text-section"
import { BenefitData, faqData, KeyfeaturesData, whyChooseData } from "../../../assets/data"
import AboveFooterSection from "../../../components/home/AboveFooterSection"
import Footer from "../../../components/home/Footer"
import Script from "next/script"

export const metadata = {
  title: 'APPIT Software | Oracle AI Solutions And Business Operations 2025',
  description: 'APPIT Software\'s Oracle AI solutions and business operations are designed to streamline workflows and deliver real-time insights.',
  keywords: [
    'Oracle AI Solutions',
    'Oracle Cloud Managed Services',
    'Oracle Integration Services',
    'Oracle ERP Services',
    'Oracle Cloud Applications Services',
    'business operations optimization',
    'enterprise AI solutions',
    'real-time business insights'
  ]
};

const sectionsData = [
    {
        title: "Oracle AI Solutions",
        para: `At Appit Software Solutions, we leverage Oracle AI Solutions and Business Operations to help businesses unlock their full potential. Oracle AI is a comprehensive suite of intelligent tools designed to streamline workflows, enhance decision-making, and deliver actionable insights in real time. From automating daily operations to enabling personalized customer experiences, Oracle AI transforms the way businesses operate in today's data-driven world. Our focus lies in transforming businesses by seamlessly integrating advanced AI capabilities with Oracle's robust cloud ecosystem.`,
        video: "/videos/brain.mp4",
        reverse: true,
    },
    {
        title: "Transforming the Enterprise with Oracle Cloud Managed Services",
        para: `In today's digital era, efficient cloud management is critical for business continuity and growth. AppitSoftware simplifies Oracle Cloud operations with expert Managed Services, offering end-to-end support, optimization, and monitoring. Our certified team handles provisioning, security, compliance, and performance—ensuring your cloud is always available,F secure, and cost-effective.`,
        image: "/images/circuit-diagram.png",
    },
    {
        title: "Seamless Connectivity with Oracle Integration Services",
        para: `Modern enterprises depend on diverse systems and data sources—making seamless integration essential. AppitSoftware delivers advanced Oracle Integration Services to connect your IT landscape, streamline operations, and boost productivity.
Our experts design and implement intelligent, AI-powered integration solutions using Oracle Integration Cloud, enabling automation, real-time data sync, and smart workflows. We tailor each solution to your unique ecosystem, ensuring agility, scalability, and minimal disruption.
With AppitSoftware, your enterprise becomes more connected, flexible, and ready to innovate at speed.`,
        video: "/videos/seamless_connectivity.mp4",
        reverse: true,
    },
];

const sectionsData2 = [
    {
        title: "Optimizing Operations with Oracle ERP Services",
        para: `AppitSoftware delivers end-to-end Oracle ERP Services that streamline operations and drive digital transformation. Whether you're implementing, upgrading, or optimizing, we align each solution with your business goals.
Our offerings span financials, procurement, supply chain, and more—customized for maximum ROI and efficiency. By embedding AI and analytics, we enable smart automation and continuous improvement.
With agile delivery and deep Oracle expertise, we accelerate deployments, reduce risks, and turn your ERP into a driver of innovation and growth.`,
        image: "/images/erp.png",
    },
    {
        title: "Comprehensive Oracle Cloud Applications Services",
        para: `AppitSoftware offers a comprehensive suite of Oracle Cloud Applications Services to drive your digital transformation. From implementation to optimization, we help you fully leverage Oracle SaaS solutions—ERP Cloud, HCM Cloud, CX Cloud, and SCM Cloud.
Our experts ensure smooth adoption, configuration, and customization aligned to your business needs. With a focus on user adoption and strategic value, we deliver scalable, agile solutions that accelerate time-to-value.
As a trusted partner, AppitSoftware provides ongoing support and innovation—transforming your Oracle Cloud investment into a long-term competitive advantage.`,
        image: "/images/erp.png",
        reverse: true,
    },
];

const oracleHeroData = {
    title: "Oracle AI",
    para: "Revolutionize your operations with AI-driven insights, intelligent automation, and enhanced customer experiences.",
    videoSrc: "/videos/hero_technology.mp4",
}
const Page = () => {
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
                        "acquireLicensePage": "https://www.appitsoftware.com/oracle-ai-solutions/"
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
                            "name": "What industries can benefit from Oracle AI?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Oracle AI caters to industries like retail, healthcare, finance, manufacturing, and more."
                            }
                        },{
                            "@type": "Question",
                            "name": "What makes Oracle AI tools flexible?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Oracle AI tools are designed to grow with your business needs, supporting scalability and tailored solutions for different use cases."
                            }
                        },{
                            "@type": "Question",
                            "name": "What are the key benefits of using Oracle AI?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Key benefits include:\n•\tSeamless human-computer interactions with advanced language models\n•\tTransformative data analytics for actionable insights\n•\tPrecise sales, demand, and revenue predictions\n•\tPersonalized customer experiences\n•\tImproved logistics and inventory management\n•\tStreamlined HR processes (hiring, engagement, retention)\n•\tEnhanced fraud prevention\n•\tAutomated repetitive tasks and workflows"
                            }
                        },{
                            "@type": "Question",
                            "name": "What is Oracle AI and how does it work?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Oracle AI solutions leverage advanced language models and data analytics to enable seamless human-computer interaction, turn complex data into actionable insights, and provide real-time predictive analytics for business operations."
                            }
                        },{
                            "@type": "Question",
                            "name": "",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": ""
                            }
                        }]
                    })
                }}
            />
            <TransparentHeader />
            <HideDefaultHeader />
            <OracleHero data={oracleHeroData}  className="md:ml-[51px] mr-auto" />

            <ImageWithTextSection
                sectionsData={sectionsData}
                backgroundImages={[
                    {
                        src: "/images/utils/lines-left.png",
                        alt: "Decorative Lines",
                        className: "absolute top-0 -left-[30%] lg:left-0 z-[-1]",
                    },
                    {
                        src: "/images/utils/blue-paint-right.png",
                        alt: "Blue Paint",
                        className: "absolute top-0 -right-[55%] lg:right-0 z-[-1]",
                    },
                ]}
            />
            <WhyChoose data={whyChooseData}
                heading={{
                    title: 'Why Choose APPIT Software Solutions?',
                    para: 'We solve your most complex technology challenges with innovative, scalable solutions. From strategy to execution, we transform your digital ecosystem to unlock new growth.',
                    highlightText: 'Why Choose',
                }}
            />
            <ImageWithTextSection
                sectionsData={sectionsData2}
                backgroundImages={[
                    {
                        src: "/images/utils/lines-right.png",
                        alt: "Decorative Lines",
                        className: "absolute top-0 -right-[30%] lg:right-0 z-[-1]",
                    },
                    {
                        src: "/images/utils/blue-paint-left.png",
                        alt: "Blue Paint",
                        className: "absolute top-0 -left-[55%] lg:left-0 z-[-1]",
                    },
                ]}
            />
            <KeyFeatures data={KeyfeaturesData}
                heading={{
                    title: 'Key Features of Oracle AI',
                    para: 'Discover the Core Features of Oracle AI with Appit Software Solutions',
                    highlightText: 'Oracle AI',
                }}
            />
            <Benefits data={BenefitData}
                heading={{
                    title: 'Benefits of Oracle AI',
                    para: 'Discover the Core Features of Oracle AI with Appit Software Solutions',
                    highlightText: 'Oracle AI'
                }}
            />
            <FAQs data={faqData}
                heading={{
                    title: 'Frequently Asked Questions (FAQs)',
                    highlightText: '(FAQs)',
                }}
            />
            <CTA />
            <AboveFooterSection />
            <Footer />
        </>
    )
}

export default Page