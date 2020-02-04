import React, { useState } from "react";
import Message from "./components/Message";
import io from "socket.io-client";

import { message as alert } from "antd";

import "./App.scss";

const url = "http://localhost:8080";
const socket = io(url);

socket.on("connect", function() {
  alert.info(`Connected to socket server at ${url}`);
});

socket.on("disconnect", function(data) {
  alert.error("Disconnected from socket server");
});

function App() {
  const [response, setResponse] = useState("");

  socket.on("message", function(data) {
    console.log("response from server");
    setResponse(data);
  });

  return (
    <div className="App">
      <Message socket={socket}/>

      <div className="response">
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;
