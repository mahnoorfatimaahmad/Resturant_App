// pages/index.js
"use client";
import { Dancing_Script } from "next/font/google";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Heading({ text }) {
  return (
    <div className={`${dancingScript.className} flex flex-row  items-center`}>
      <h4 className="text-3xl bg-gradient-to-bl from-red-900 via-orange-600 to-red-500 bg-clip-text text-transparent font-bold w-fit">
        {text}
      </h4>
    </div>
  );
}

export const Party = ({ text }) => {
  return (
    <h3
      className={`${dancingScript.className} text-[20px] font-semibold uppercase`}
    >
      {text}
    </h3>
  );
};

export const HeadingText = ({ heading, text }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100, // Offset from the top before animation starts
    });
  }, []);
  return (
    <div className="w-[100%] flex flex-col items-center justify-center">
      <div
        className="flex items-center w-[70%] justify-center"
        data-aos="fade-up"
        data-aos-delay={300}
      >
        {" "}
        <span className="h-[2px] w-[8%] mr-1 border-[1px] rounded-md border-custom-color"></span>{" "}
        <div className="w-auto">
          {" "}
          <div
            className={`${dancingScript.className} flex flex-row items-center `}
          >
            <h4 className="text-3xl text-orange-600 font-bold">{text}</h4>
          </div>{" "}
        </div>{" "}
        <span className="h-[2px] w-[8%] border-[1px] ml-1 rounded-md border-custom-color"></span>{" "}
      </div>
      <h2
        className="text-black mb-6  text-4xl font-serif font-bold mt-3  letter-wide"
        data-aos="fade-up"
        data-aos-delay={300}
      >
        {heading}
      </h2>
    </div>
  );
};

export const Category = ({ text }) => {
  return (
    <h3
      className={`${dancingScript.className} sm:text-4xl text-2xl md:text-6xl  animate-bounce bg-gradient-to-bl from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent font-semibold uppercase`}
    >
      {text}
    </h3>
  );
};
