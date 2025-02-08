import React, { useEffect, useState } from 'react';
import { getHelloMessage } from "./services/api";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    getHelloMessage().then((data) => setMessage(data.message));
  }, []);
  return (
    <div>
      <h1>React & Django 연결 테스트</h1>    
      <p>{message}</p>
    </div>
  );
}

export default App
