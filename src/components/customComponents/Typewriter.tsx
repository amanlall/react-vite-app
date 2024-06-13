"use client";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { PlaceholdersAndVanishInputDemo } from "./SearchBoxAI";
// import TypingEffect from "./GptTyping";
// import { EvervaultCard, Icon } from "../ui/evervault-card";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Welcome",
      className: "text-white dark:text-blue-500",
    },
    {
      text: "to",
      className: "text-white dark:text-blue-500",
    },
    {
      text: "Chat",
      className: "text-white dark:text-blue-500",
    },
    {
      text: "with",
      className: "text-white dark:text-blue-500",
    },
    {
      text: "AiMan.",
      className: "text-[#f9b17a] dark:text-blue-500",
    },
  ];
  return (
    <>  
    <div className="flex flex-col relative flex mb-6 items-center justify-center md:flex-row space-y-4 md:space-y-0 space-x-10 md:space-x-4">  
        <motion.div
            initial={{ y: 0 , opacity: 100}}
            animate={{ y: -190 , opacity: 0,}}
            transition={{ delay: 4, duration: 1 ,  ease: "easeInOut" }}
        >
            <div className="flex flex-col items-center justify-center h-[40rem]  ">

                <TypewriterEffectSmooth words={words} />
            </div>
        </motion.div>
    </div> 
    
    <PlaceholdersAndVanishInputDemo/>
    </>
  );
}
