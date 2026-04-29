import { useState } from "react";

function ChatInput({ onSendMessage }) {
  /*
    Local State:
    input stores the text typed by the user.
  */
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    /*
      preventDefault:
      Stops the page from refreshing after form submission.
    */
    e.preventDefault();

    onSendMessage(input);
    setInput("");
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      {/*
        Controlled Component:
        Input value is controlled by React state.
      */}
      <input
        type="text"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit">Send</button>
    </form>
  );
}

export default ChatInput;