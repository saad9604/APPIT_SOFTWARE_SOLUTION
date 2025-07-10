"use client";
import React from "react";
import Section from "../../layout/section-box";
import Container from "../../layout/container";
import HeadingPara from "../../layout/heading";
import GetInTouchButton from "@/components/getintouch/GetInTouchButton";

const OracleHero = ({ data, className }) => {
  const { title, para, videoSrc, imageSrc, btnTitle } = data || {};

  return (
    <Section imageSrc={imageSrc} videoSrc={videoSrc} className="min-h-screen">
      <Container className={className}>
        {/* Heading and Paragraph */}
        <HeadingPara
          title={title}
          para={para}
          classNameHeading="text-3xl sm:text-4xl md:text-5xl xl:text-[53px] 3xl:text-[100px] text-white xl:whitespace-nowrap"
          classNamePara="font-normal text-base md:text-lg xl:text-2xl 3xl:text-[27px] max-w-[600px]"
          className="text-white mt-10 sm:mt-0"
        />

        {/* Get in Touch Button: Appears directly after heading */}
        <div className="mt-6 sm:mt-10">
          <GetInTouchButton />
        </div>
      </Container>
    </Section>
  );
};

export default OracleHero;
