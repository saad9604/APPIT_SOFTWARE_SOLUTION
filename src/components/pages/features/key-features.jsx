import React from "react";
import Section from "../../layout/section-box";
import Container from "../../layout/container";
import HeadingPara from "../../layout/heading";
import KeyFeaturedCard from "./key-feature-card";
import { cn } from "../../../lib/utils";

const KeyFeatures = ({
  data,
  heading,
  cards = 3,
  height = false,
  simpleBG = false,
  customStyle = "",
  className,
  classNameHeading,
  imageClassName = "",
  imgContainerClassName = "",
  classNamePara = ''
}) => {
  const defaultStyling =
    cards === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 lg:gap-5"
      : cards === 8
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5"
      : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5 place-items-center justify-items-center";

  return (
    <Section className={className}>
      <Container>
       <div className="flex flex-col items-center justify-center text-center gap-8 sm:gap-12 lg:gap-20">
          {heading && (
            <HeadingPara
              title={heading.title}
              para={heading.para}
              highlightText={heading.highlightText}
              classNamePara={classNamePara}
              sectionHeading
              classNameHeading={classNameHeading}
            />
          )}

          <div className={cn(`grid w-full h-full`, defaultStyling, customStyle,)}>
            {data.map((item, index) => (
              <KeyFeaturedCard
                key={index}
                imageSrc={item.imageSrc}
                title={item.title}
                para={item.para}
                height={height}
                simpleBG={simpleBG}
                imageClassName={imageClassName}
                imgContainerClassName={imgContainerClassName}
                className={item?.className}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default KeyFeatures;
