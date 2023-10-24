// import React from "react";
// function Screen(){
//     return(
//         <div></div>
//     );
// }
// export default Screen;
import React, { useState } from "react";
import "./Chat.css";

export default function Chat(){
  const [messages, setMessages] = useState([
    { text: "Hello!", isUser: true },
    { text: "Hi there, how can I help you today?", isUser: false },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage !== "") {
      setMessages([
        ...messages,
        { text: newMessage, isUser: true },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Simple Chat</div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.isUser ? "message user-message" : "message bot-message"}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          className="input-text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className="send-button" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};
