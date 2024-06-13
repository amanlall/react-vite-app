"use client";

import { motion } from "framer-motion";
// import { cn } from "../../utils/cn";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
// import { TextGenerateEffect } from "../ui/text-generate-effect";
// import ChatBox  from "./ChatBox";
// import { Divider } from "antd";
// import TypingEffect from "./GptTyping";
import { useState } from "react";
export function PlaceholdersAndVanishInputDemo() {
  const [llmanswer,setLlmAnswer] = useState("A");
  console.log(llmanswer)
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
    setLlmAnswer("this is the answer to your question, this is the answer to your question, this is the answer to your question, this is the answer to your question, this is the answer to your question, this is the answer to your question")
    console.log("submitted");
  };

  return (

                <div className=" top-150 mt-20 w-full flex flex-col justify-center items-center px-4 ">
                  <motion.div className="w-2/5 flex flex-col justify-center items-center h-full"
                  initial={{ y: -590 , opacity: 0, width: 10}}
                  animate={{ y: -150 , opacity: 100, width: 50 }}
                  transition={{ delay: 4, duration: 1 ,  ease: "easeInOut" }}>

                      <motion.div
                      className="fixed mb-10 w-[100vh] h-[80vh] flex flex-col justify-center items-center h-full overflow-auto"
                      initial={{ y: -590 , opacity: 0}}
                      animate={{ y: -150 , opacity: 100,}}
                      transition={{ delay: 4, duration: 1 ,  ease: "easeInOut" }}
                      >
                        {/* <div className="bg-gradient-to-b from-[#00000]/[0.5] to-transparent md:w-3/4 md:h-3/4 shadow-2xl rounded-lg p-4 border-2 border-white">
                        <TypingEffect text={llmanswer} />
                        </div> */}
                      </motion.div>

                  <div className="w-[600%] mt-20">
                    <PlaceholdersAndVanishInput
                      placeholders={placeholders} 
                      onChange={handleChange}
                      onSubmit={onSubmit}
                    />
                      <canvas className="absolute pointer-events-none text-base transform scale-50 top-[25%] left-2 sm:left-8 origin-top-left filter invert dark:invert-0 pr-20 opacity-0" width="800" height="800"></canvas>
                  </div>
                  </motion.div>
                </div>
  
  );
}
