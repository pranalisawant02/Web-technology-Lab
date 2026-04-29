function ChatMessage({ sender, text }) {
  /*
    Props:
    Props are used to pass data from one component to another.
    Here, sender and text are received from App.jsx.
  */

  return (
    <div className={`message ${sender === "user" ? "user-message" : "bot-message"}`}>
      <p>{text}</p>
    </div>
  );
}

export default ChatMessage;