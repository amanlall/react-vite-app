import React, { useState, useEffect, useRef } from 'react';
import './ChatBox.scss';
import ChatGPTTypewriterEffect from 'react-chatgpt-typewriter';
import { Avatar, Space } from 'antd';

interface ChatBoxProps {
  questions: string[];
  answers: string[];
}

const ChatBox: React.FC<ChatBoxProps> = ({ questions, answers }) => {
  const [typing, setTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState<
    { question: string; answer: string }[]
  >([]);
  const chatBoxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (questions.length > 0 && questions.length === answers.length) {
      setTyping(true);

      const timer = setTimeout(() => {
        const newChats = questions.map((question, index) => ({
          question,
          answer: answers[index] || 'No answer provided',
        }));

        setChatHistory((prev) => {
          const updatedChatHistory = [...newChats];
          localStorage.setItem(
            'chatHistory',
            JSON.stringify(updatedChatHistory),
          );
          return updatedChatHistory;
        });
        setTyping(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
    if (questions.length > answers.length) {
      setChatHistory([
        ...chatHistory,
        { question: questions[questions.length - 1], answer: '' },
      ]);
    }
  }, [questions, answers]);

  useEffect(() => {
    const storedChatHistory = localStorage.getItem('chatHistory');
    if (storedChatHistory) {
      setChatHistory(JSON.parse(storedChatHistory));
    }
  }, []);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [questions, answers, typing]);

  return (
    <div className="chatbox" ref={chatBoxRef}>
      {chatHistory.length === 0 && (
        <div className="chat-message">Start by asking a question!</div>
      )}
      {chatHistory.map((chat, index) => (
        <div key={index} className="chat-message">
          <div
            className="chat-question text-xs sm:text-base sm:text-center md:text-sm md:text-center lg:sm lg:text-center"
            style={{ wordBreak: 'break-word', padding: '10px' }}
          >
            {' '}
            <Space>
              <Avatar src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png" />
              {chat.question}{' '}
            </Space>
          </div>
          {chat.answer && chat.answer !== '' && (
            <div
              className="chat-answer text-xs sm:text-base sm:text-center md:text-sm md:text-center lg:sm lg:text-center"
              style={{ wordBreak: 'break-word', padding: '10px' }}
            >
              <Avatar src="robocop2.jpg" />{' '}
              <div className="px-2">
                <ChatGPTTypewriterEffect
                  delay={70}
                  text={chat.answer}
                  hideWhenFinished
                />
              </div>
            </div>
          )}
        </div>
      ))}
      {typing && (
        <div className="chat-typing">
          {' '}
          <Avatar src="https://i.pinimg.com/originals/e1/f0/11/e1f0116a599e07888c2bb10abe23a258.jpg" />{' '}
          Thinking...
        </div>
      )}
    </div>
  );
};

export default ChatBox;
