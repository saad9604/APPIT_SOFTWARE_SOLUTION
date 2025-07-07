import HeadingPara from "@/components/layout/heading";
import CyberFeatureCard from "./CyberFeatureCard";

export default function CyberFeaturesSection({ heading }) {
  const featureData = [
    {
      title: "Program Strategy & vCISO",
      description:
        "Appit Software Solutions provides expert vCISO services to help organizations plan, implement, and optimize security strategies. With deep experience in IT leadership and cybersecurity, our team offers on-site and remote support to strengthen programs, assess risks, and build a security-first culture.",
      video: "/videos/cyberVideo2.mp4",
    },
    {
      title: "Governance & Tech Enablement",
      description:
        "We set strong policies and standards to enhance cybersecurity and ensure compliance, while streamlining governance for efficient risk management.",
      video: "/videos/cyberVideo3.mp4",
    },
    {
      title: "Risk Management",
      description:
        "We integrate risk management by addressing external threats and internal vulnerabilities. Through proactive assessment and mitigation, we ensure a secure and resilient environment.",
      video: "/videos/cyberVideo4.mp4",
    },
    {
      title: "Compliance & Regulatory",
      description:
        "We assess compliance with regulations (e.g. PCI-DSS, GDPR) and standards (e.g. ISO27001, NIST), helping clients prioritize, plan, and achieve target maturity levels.",
      video: "/videos/cyberVideo5.mp4",
    },
    {
      title: "Third-Party Risk Management",
      description:
        "Whether you're launching or improving a Third-Party Risk Management (TPRM) program, our experts ensure every phase is seamlessly integrated to strengthen your risk posture.Our scalable TPRM services provide clear visibility into vendor activities and align with your business and compliance needs—helping you manage third-party risks with confidence.",
      video: "/videos/cyberVideo6.mp4",
    },
    {
      title: "Cyber Policy & Framework Development",
      description:
        "Building a strong cybersecurity control framework is key to managing risk and safeguarding critical assets. Appit Software’s Policy & Framework Development services offer the structure and adaptability needed to align security initiatives with evolving business goals. Our experts help design and implement policies that ensure compliance and strengthen your overall security posture.",
      video: "/videos/cyberVideo7.mp4",
    },
    {
      title: "Strategy, operating model, and roadmap",
      description:
        "Transform your cybersecurity program with Appit Software’s tailored strategy, operating model, and roadmap. Our proactive, risk-based approach protects your brand and aligns security with your business goals.",
      video: "/videos/cyberVideo8.mp4",
    },
    {
      title: "Security Awareness Training programs",
      description:
        "Transform your cybersecurity program with Appit Software’s tailored strategy, operating model, and roadmap. Our proactive, risk-based approach protects your brand while aligning security with business goals.",
      video: "/videos/cyberVideo9.mp4",
    },
  ];

  return (
    <div className="text-center bg-[#252525] py-10">
      <HeadingPara
        title={heading?.title}
        para={heading?.para}
        highlightText={heading?.highlightText}
        classNamePara={heading?.classNamePara}
        classNameHeading={heading?.classNameHeading}
        sectionHeading={heading?.sectionHeading}
      />
      <div className="flex flex-col items-center w-full gap-6 my-10 px-4">
        {featureData.map((item, index) => (
          <CyberFeatureCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            reverse={index % 2 !== 0}
            video={item.video}
            textContainer={item.textContainer}
          />
        ))}
      </div>
    </div>
  );
}
