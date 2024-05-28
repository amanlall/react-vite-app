"use client";

// import { cn } from "../../utils/cn";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Divider } from "antd";
export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "What's your total experience?",
    "Which is your current company?",
    "Where are you located currently",
    "How many years of experience you have in React, Python?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (

    <div className="h-full w-full flex justify-center items-center px-4">
      {/* <div className="w-3/6 flex flex-col justify-center text-xs items-center h-full"> */}
      {/* relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold */}
      <div className="w-3/6 flex flex-coltext-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold ">
        <TextGenerateEffect
          words="Hi, I'm Aman, With 5.5 years of expertise, skilled in both backend (4 years) and frontend (2 years)
          development. Demonstrated expertise in database management, REST API integration, and agile methodology.
          Proficient in database management, Rest API integration, and agile methodology, I excel in designing efficient
          data flow structures."
          className="text-white"
        />
      </div>
      <Divider dashed type="vertical"/>
      <div className="w-2/5 flex flex-col justify-center items-center h-full">
        <h2 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Ask Me Anything
        </h2>
        <div className="w-full relative max-w-xl mx-auto py-8">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
  <canvas className="absolute pointer-events-none text-base transform scale-50 top-[25%] left-2 sm:left-8 origin-top-left filter invert dark:invert-0 pr-20 opacity-0" width="800" height="800"></canvas>
  </div></div>
    </div>
  
  );
}
