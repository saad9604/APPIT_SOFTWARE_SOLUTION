import Container from "@/components/layout/container";
import Section from "@/components/layout/section-box";
import React from "react";
import BenefitCard from "../benefit-grid/benefit-card";

const WhyChooseSection = () => {
  const BenefitData = [
    {
      title: "Holistic Offerings",
      para: ``,
    },
    {
      title: "Client-Focused Methodology",
      para: ``,
    },
    {
      title: "Skilled Professionals",
      para: ``,
    },
    {
      title: "Established Success",
      para: ``,
    },
  ];
  const experienceData = [
    {
      title: "58+",
      para: "Number Of Projects",
    },
    {
      title: "100+",
      para: "Clients Worldwide",
    },
    {
      title: "9+",
      para: "Years In Business",
    },
    {
      title: "150+",
      para: "Team Members",
    },
  ];
  return (
    <Section className="text-black">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column: Text */}
          <div className="max-w-[667px]">
            <h2 className="text-xl font-bold">
              WHY CHOOSE APPIT <span className="block" /> E-Commerce Services:
            </h2>
            <p className="mt-2">
              At Appit Software Solutions, we’re your partner in digital
              transformation, not just e-commerce development.<span className="md:block hidden" /> With expertise in
              Adobe Commerce, Magento, Big Commerce, and Shopify, we build
              scalable, tailored solutions.
            </p>
          </div>

          {/* Right Column: Stats */}
          <div className="grid grid-cols-2 gap-5 bg-[#30E5E538] p-5 rounded-3xl">
            {experienceData.map((ex, i) => (
              <div key={i} className="text-left">
                <div className="text-xl font-jost font-semibold text-[#F41F1F]">
                  {ex.title}
                </div>
                <div className="text-xl font-jost text-[#000000] font-semibold">
                  {ex.para}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 w-full mt-12`}
        >
          {BenefitData.map((item, index) => (
            <BenefitCard
              key={index}
              iconSrc={""}
              title={item.title}
              para={item.para}
              specialLogoStyle={item.specialLogoStyle}
              className={`lg:h-[127px] lg:w-[275px] !rounded-2xl`}
              paraClassName={`line-clamp-2 overflow-hidden text-ellipsis`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default WhyChooseSection;
