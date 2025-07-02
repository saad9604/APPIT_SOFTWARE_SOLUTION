import Container from "../../../components/layout/container";
import HeadingPara from "../../../components/layout/heading";
import Section from "../../../components/layout/section-box";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import Image from "next/image";
import React from "react";

const FAQs = ({ data, heading, sectionClassName }) => {
  return (
    <Section className={sectionClassName}>
    <Container className="bg-[#dff0ff00] sm:!px-10">
        <div className="flex flex-col items-center justify-center text-center gap-8 sm:gap-12 lg:gap-10 w-full">
          {heading && (
            <HeadingPara
              title={heading.title}
              para={heading.para}
              highlightText={heading.highlightText}
              classNamePara="font-semibold"
              sectionHeading
            />
          )}

          <div className="flex flex-col-reverse lg:flex-row w-full items-center gap-6 lg:gap-10">
            {/* Accordion Section */}
            <div className="w-full lg:w-3/5">
              <Accordion
                type="single"
                collapsible
                className="w-full max-w-full space-y-4"
              >
                {data.map((faq, index) => (
                  <AccordionItem key={`item-${index}`} value={String(index)}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      {Array.isArray(faq.answer) ? (
                        <div className="space-y-2 text-black">
                          {faq.answer.map((point, i) =>
                            point.includes("@") ? (
                              <ul key={i} className="list-disc ml-5">
                                <li>
                                  {point.includes(":") ? (
                                    <>
                                      <strong>{point.split(":")[0].replace('@', '')}</strong>:
                                      {point.split(":")[1]}
                                    </>
                                  ) : (
                                    point.replace('@', '')
                                  )}
                                </li>
                              </ul>
                            ) : (
                              <p key={i}>
                                {point.includes(":") ? (
                                  <>
                                    <strong>{point.split(":")[0]}</strong>:
                                    {point.split(":")[1]}
                                  </>
                                ) : (
                                  point
                                )}
                              </p>
                            )
                          )}
                        </div>
                      ) : faq.answer.includes("@") ? (
                        <ul className="list-disc ml-5 space-y-2 text-black">
                          <li>{faq.answer.replace('@', '')}</li>
                        </ul>
                      ) : (
                        <p className="text-black">{faq.answer}</p>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-2/5 flex items-center justify-center">
              <Image
                src="/images/svgs/faq.svg"
                alt="FAQs Illustration"
                width={450}
                height={100}
                className="h-full w-80 lg:w-[450px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FAQs;