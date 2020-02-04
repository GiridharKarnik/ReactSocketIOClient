import React, { useState } from "react";
import { Input, Button, message as alert } from "antd";
import "./message.scss";

export default function Message(props) {
  const [message, setMessage] = useState("");
  const eventName = "message";

  const emitMessage = () => {
    console.log(`emiting message`);
    props.socket.emit(eventName, message, function() {
      console.log("message acknoledged by the server");
      alert.success("Message acknoledged from the server");
    });
  };

  return (
    <div className="messageContainer">
      <Input
        placeholder="enter message"
        type="text"
        onChange={e => {
          setMessage(e.target.value);
        }}
        value={message}
      />
      <div className="buttonContainer">
        <Button type="primary" onClick={emitMessage}>
          Submit
        </Button>
      </div>
    </div>
  );
}
