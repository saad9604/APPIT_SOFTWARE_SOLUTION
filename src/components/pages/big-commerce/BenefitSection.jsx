import Container from '@/components/layout/container'
import Section from '@/components/layout/section-box'
import Image from 'next/image'
import React from 'react'

const benefits = [
  {
    title: "Hosted SaaS = No Server Management",
    description:
      "BigCommerce offers a fully managed SaaS platform that handles hosting, updates, and security—freeing you from server management so you can focus on growing your business.",
    image: "/images/bcImage2.png",
  },
  {
    title: "Scalable Infrastructure for Growth",
    description:
      "Whether you're a startup or an enterprise, BigCommerce scales with your business—ensuring performance and speed during high-traffic events like Black Friday.",
    image: "/images/bcImage2.png",
  },
  {
    title: "Built-in Security & Compliance",
    description:
      "Stay secure with PCI compliance, HTTPS, fraud protection, and regular security updates—ensuring your store and customer data remain safe.",
    image: "/images/bcImage2.png",
  },
  {
    title: "Customizable Design & UX",
    description:
      "Design your storefront exactly how you want it with headless commerce options, flexible themes, and integrations with modern frontend frameworks.",
    image: "/images/bcImage2.png",
  },
  {
    title: "Multi-Channel Selling",
    description:
      "Expand your reach by selling on marketplaces like Amazon, eBay, and social platforms like Facebook and Instagram—all from one unified dashboard.",
    image: "/images/bcImage2.png",
  },
];

const BenefitSection = () => {
  return (
    <Section className={"bg-[#74B6D5]"}>
      <Container className="max-w-[1550px] mx-auto py-10">
        <div className="flex items-center lg:items-start justify-evenly lg:flex-row flex-col gap-6">
          <div className="text-white text-[60px] font-semibold md:font-bold">
            Benefits of <span className="lg:block hidden" /> BigCommerce
          </div>
          <div className="max-h-[500px] overflow-y-auto hide-scrollbar">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-[#0066B3] w-[622px] h-auto text-white py-5 px-14 rounded-[24px] mb-10"
              >
                <div>
                  <Image
                    src={item.image}
                    alt="BigCommerce Image"
                    width={64}
                    height={64}
                  />
                </div>
                <div className="text-white text-[32px] font-semibold mt-4">
                  {item.title}
                </div>
                <div className="text-white text-[21px] mt-3">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default BenefitSection
