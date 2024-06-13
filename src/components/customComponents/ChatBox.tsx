import React, { useState, useEffect } from 'react';
import './ChatBox.scss';

interface ChatBoxProps {
  question: string;
  answer?: string;
}

const ChatBox: React.FC<ChatBoxProps> = ({ question, answer }) => {
  const [typing, setTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState<{ question: string; answer: string }[]>([]);

  useEffect(() => {
    if (question) {
      setTyping(true);

      // Simulate answer fetching
      setTimeout(() => {
        const fetchedAnswer = answer || 'Default answer for the question.';
        setChatHistory(prev => [...prev, { question, answer: fetchedAnswer }]);
        localStorage.setItem('chatHistory', JSON.stringify([...chatHistory, { question, answer: fetchedAnswer }]));
        setTyping(false);
      }, 2000); // Simulate a delay
    }
  }, [question, answer]);

  useEffect(() => {
    const storedChatHistory = localStorage.getItem('chatHistory');
    if (storedChatHistory) {
      setChatHistory(JSON.parse(storedChatHistory));
    }
  }, []);

  return (
    <div className="chatbox">
      {chatHistory.map((chat, index) => (
        <div key={index}>
          <div className="chat-question">{chat.question}</div>
          <div className="chat-answer">{chat.answer}</div>
        </div>
      ))}
      {typing && <div className="chat-typing">Typing...</div>}
    </div>
  );
};

export default ChatBox;
