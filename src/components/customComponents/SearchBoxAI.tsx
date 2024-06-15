import React, { useState } from "react";
import { motion } from "framer-motion";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import ChatBox from "./ChatBox";

export function PlaceholdersAndVanishInputDemo() {
  const [questions, setQuestions] = useState<string[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<string>("");

  const placeholders = [
    "What's your total experience?",
    "Which is your current company?",
    "Where are you located currently",
    "How many years of experience you have in React, Python?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentQuestion(e.target.value);
  };

  const fetchAnswer = (question: string): Promise<string> => {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(question);
      }, 1);
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentQuestion) {
      setQuestions((prevQuestions) => [...prevQuestions, currentQuestion]);
      const answer = await fetchAnswer(currentQuestion);
      setAnswers((prevAnswers) => [...prevAnswers, answer]);
      setCurrentQuestion("");
    }
  };

  return (
    <div className="top-150 mt-20 w-full flex flex-col justify-center items-center px-4">
      <motion.div
        className="w-2/5 flex flex-col justify-center items-center h-full"
        initial={{ y: -590, opacity: 0, width: 10 }}
        animate={{ y: -150, opacity: 100, width: 50 }}
        transition={{ delay: 4, duration: 1, ease: "easeInOut" }}
      >
        <motion.div
          className="fixed mb-10 w-[100vh] flex flex-col justify-center items-center overflow-auto"
          initial={{ y: -590, opacity: 0 }}
          animate={{ y: -150, opacity: 100 }}
          transition={{ delay: 4, duration: 1, ease: "easeInOut" }}
        >
          <ChatBox questions={questions} answers={answers} />
        </motion.div>

        <div className="w-[600%] mt-20">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
          <canvas
            className="absolute pointer-events-none text-base transform scale-50 top-[25%] left-2 sm:left-8 origin-top-left filter invert dark:invert-0 pr-20 opacity-0"
            width="800"
            height="800"
          ></canvas>
        </div>
      </motion.div>
    </div>
  );
}
