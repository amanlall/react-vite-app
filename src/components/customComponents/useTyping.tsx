import { useState, useEffect } from 'react';

const useTypingEffect = (text: string, speed = 50) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = -1;
    // setDisplayedText(""); // Reset displayed text when input text changes

    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index += 1;

      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return displayedText;
};

export default useTypingEffect;
