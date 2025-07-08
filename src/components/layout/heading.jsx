import { cn } from "../../lib/utils";
import React from "react";

const HeadingPara = ({
  className,
  classNameHeading,
  classNamePara,
  para,
  title = "",
  sectionHeading = false,
  highlightText = "",
  highlightTextStyle = "",
  btnTitle = "",
  paraHighlightText = "",
  paraHighlightTextStyle = "",
  lineByLine = [],
}) => {
  const defaultHeading = sectionHeading
    ? "text-2xl md:text-3xl xl:text-[40px]"
    : "text-xl md:text-2xl xl:text-[27px]";

  // ✅ Highlight logic
  const getHighlightedTitle = () => {
    // If title isn't a plain string, render as-is (e.g. an <Image> node)
    if (
      typeof title !== "string" ||
      !highlightText ||
      !title.includes(highlightText)
    ) {
      return title;
    }

    const parts = title.split(highlightText);
    return (
      <>
        {parts[0]}
        <span
          className={cn(
            "text-[#EC1C26] font-jost text-[40px] font-semibold leading-[120%] text-center",
            highlightTextStyle
          )}
        >
          {highlightText}
        </span>
        {parts[1]}
      </>
    );
  };

 const getHighlightedPara = (text) => {
  if (typeof text !== "string" || !paraHighlightText) {
    return text;
  }

  const highlightWords = Array.isArray(paraHighlightText)
    ? paraHighlightText
    : [paraHighlightText];

  const escapedWords = highlightWords.map((word) =>
    word.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
  );

  const regex = new RegExp(`(${escapedWords.join("|")})`, "gi");

  const parts = text.split(regex);

  return parts.map((part, index) =>
    highlightWords.some(
      (word) => word.toLowerCase() === part.toLowerCase()
    ) ? (
      <span key={index} className={cn("font-medium", paraHighlightTextStyle)}>
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    )
  );
};



  return (
    <div className={cn("flex flex-col text-black gap-3 sm:gap-5", className)}>
      <h1
        className={cn(
          "capitalize font-semibold font-jost text-[40px] leading-[120%] text-[#252525]",
          defaultHeading,
          classNameHeading
        )}
      >
        {getHighlightedTitle()}
      </h1>
      {lineByLine.length > 0 ? (
        <div className="flex flex-col gap-1">
          {lineByLine.map((line, index) => (
            <p
              key={index}
              className={cn( "text-base md:text-lg xl:text-xl", classNamePara)}
            >
              {getHighlightedPara(line)}
            </p>
          ))}
        </div>
      ) : (<p className={cn("text-base md:text-lg xl:text-xl", classNamePara)}>
        {getHighlightedPara(para)}
      </p>)}
      

      {/* Button with responsive specifications */}
      {btnTitle && (
        <button className="font-jost group flex items-center w-fit gap-3 sm:gap-4 md:gap-[15px] lg:gap-[20px] rounded-[32px] bg-[#0066B3] px-4 py-2 sm:px-5 sm:py-3 md:px-4 md:py-2 lg:px-5 lg:py-3 transition-all duration-300 hover:bg-[#A50F15]">
          <span className="text-white text-sm sm:text-base md:text-base lg:text-[18px] font-medium">
            {btnTitle}
          </span>
          <div className="relative flex items-center justify-center w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[30px] md:h-[30px] lg:w-[36px] lg:h-[36px]">
            {/* Default state - original logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 32 32"
              fill="none"
              className="w-full h-full group-hover:opacity-0 transition-opacity duration-300"
            >
              <path
                d="M16.0001 2.66665C19.5363 2.66665 22.9277 4.07141 25.4282 6.57189C27.9287 9.07238 29.3334 12.4638 29.3334 16C29.3334 19.5362 27.9287 22.9276 25.4282 25.4281C22.9277 27.9286 19.5363 29.3333 16.0001 29.3333C12.4639 29.3333 9.07248 27.9286 6.57199 25.4281C4.07151 22.9276 2.66675 19.5362 2.66675 16C2.66675 12.4638 4.07151 9.07238 6.57199 6.57189C9.07248 4.07141 12.4639 2.66665 16.0001 2.66665ZM16.2614 9.72265C16.1372 9.8465 16.0387 9.99364 15.9715 10.1556C15.9043 10.3176 15.8697 10.4913 15.8697 10.6666C15.8697 10.842 15.9043 11.0157 15.9715 11.1777C16.0387 11.3397 16.1372 11.4868 16.2614 11.6106L19.3174 14.6666H9.33341C8.97979 14.6666 8.64065 14.8071 8.39061 15.0572C8.14056 15.3072 8.00008 15.6464 8.00008 16C8.00008 16.3536 8.14056 16.6927 8.39061 16.9428C8.64065 17.1928 8.97979 17.3333 9.33341 17.3333H19.3174L16.2614 20.3893C16.1374 20.5131 16.0391 20.6601 15.9719 20.8219C15.9048 20.9837 15.8701 21.1572 15.87 21.3324C15.8699 21.5076 15.9043 21.6811 15.9712 21.843C16.0381 22.0049 16.1363 22.152 16.2601 22.276C16.3839 22.3999 16.5309 22.4983 16.6927 22.5655C16.8545 22.6326 17.0279 22.6673 17.2031 22.6674C17.3783 22.6675 17.5518 22.6331 17.7137 22.5662C17.8756 22.4993 18.0228 22.4011 18.1467 22.2773L23.4801 16.944C23.6042 16.8201 23.7028 16.673 23.77 16.511C23.8372 16.349 23.8718 16.1754 23.8718 16C23.8718 15.8246 23.8372 15.6509 23.77 15.489C23.7028 15.327 23.6042 15.1798 23.4801 15.056L18.1467 9.72265C17.8967 9.47269 17.5576 9.33227 17.2041 9.33227C16.8505 9.33227 16.5115 9.47269 16.2614 9.72265Z"
                fill="white"
              />
            </svg>

            {/* Hover state - circle with arrow */}
            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                width="60%"
                height="60%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform rotate-[-45deg] text-[#A50F15]"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </button>
      )}
    </div>
  );
};

export default HeadingPara;
