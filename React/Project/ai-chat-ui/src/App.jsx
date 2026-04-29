import { useState } from "react";
import ChatHeader from "./components/ChatHeader";
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput";

function App() {
  /*
    useState:
    It is a React Hook used to store and update data inside a component.
    Here, messages stores all chat messages.
  */
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I am your simple AI Chat Assistant. Ask me about React, AI, ML, or projects.",
    },
  ]);

  /*
    Function:
    A reusable block of code.
    This function generates simple AI-like replies using conditions.
  */
  const generateBotReply = (userMessage) => {
    const msg = userMessage.toLowerCase();

    if (msg.includes("react")) {
      return "React is a JavaScript library used to build user interfaces using components.";
    } else if (msg.includes("ai")) {
      return "AI means Artificial Intelligence. It allows machines to perform tasks that usually need human intelligence.";
    } else if (msg.includes("machine learning") || msg.includes("ml")) {
      return "Machine Learning is a part of AI where systems learn patterns from data and make predictions.";
    } else if (msg.includes("project")) {
      return "A good project idea is an AI Chat UI, Student Dashboard, Expense Tracker, or Smart Attendance System.";
    } else if (msg.includes("hello") || msg.includes("hi")) {
      return "Hi! How can I help you today?";
    } else {
      return "I am a basic rule-based chatbot. Please ask about React, AI, ML, or projects.";
    }
  };

  /*
    Event Handling:
    React handles user actions like click, typing, and form submit using functions.
  */
  const handleSendMessage = (inputText) => {
    if (inputText.trim() === "") return;

    const userMessage = {
      sender: "user",
      text: inputText,
    };

    const botMessage = {
      sender: "bot",
      text: generateBotReply(inputText),
    };

    /*
      Spread Operator:
      It copies old messages and adds new messages.
    */
    setMessages([...messages, userMessage, botMessage]);
  };

  return (
    <div className="app">
      <div className="chat-container">
        <ChatHeader />

        <div className="chat-box">
          {/*
            map():
            Used to display a list of data.
            Here, it displays all chat messages one by one.
          */}
          {messages.map((message, index) => (
            <ChatMessage key={index} sender={message.sender} text={message.text} />
          ))}
        </div>

        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;