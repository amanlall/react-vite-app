import React, {useState, useEffect} from "react";
import {motion} from "framer-motion";

interface TypingEffectProps {
    text: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({text}) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayedText((prev) => prev + text[index]);
            index++;
            if (index === text.length) {
                clearInterval(intervalId);
            }
        }, 50); // Adjust the delay as needed

        return () => clearInterval(intervalId);
    }, [text]);

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
        >
            <div className="text-xl text-white">
            {displayedText}
            </div>
        </motion.div>
    );
};

export default TypingEffect;
