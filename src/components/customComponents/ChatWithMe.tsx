import React, { useState } from 'react';
import axios from 'axios';

type Message = {
    sender: 'user' | 'bot';
    text: string;
};

export const ChatInterface: React.FC = () => {
    const [message, setMessage] = useState<string>('');
    const [chatHistory, setChatHistory] = useState<Message[]>([]);

    const handleSendMessage = async () => {
        if (!message.trim()) return;

        const newMessage: Message = { sender: 'user', text: message };
        setChatHistory([...chatHistory, newMessage]);

        try {
            const response = await axios.post('http://127.0.0.1:7860/run/predict', { message });
            const botMessage: Message = { sender: 'bot', text: response.data.response };
            setChatHistory((prevHistory) => [...prevHistory, newMessage, botMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
        }

        setMessage('');
    };

    return (
        <div>
            <div>
                {chatHistory.map((msg, index) => (
                    <div key={index} className={msg.sender === 'user' ? 'user-message' : 'bot-message'}>
                        {msg.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default ChatInterface;
