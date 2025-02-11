import React, { useState, useRef, useEffect } from "react";
import "../styles/review.css";
import { InputText } from "primereact/inputtext";
import { ScrollPanel } from "primereact/scrollpanel";
import { Button } from "primereact/button";

const Chatbot: React.FC = () => {
  const [chatOpen, setChatOpen] = useState<boolean>(false); // 챗봇 토글 상태
  const [chatMessages, setChatMessages] = useState<{ sender: string; text: string }[]>([]); // 채팅 메시지 상태
  const [userInput, setUserInput] = useState<string>(""); // 사용자 입력 상태
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // 스크롤을 최신 메시지로 이동
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const sendMessage = () => {
    if (userInput.trim() === "") return;

    const newMessages = [...chatMessages, { sender: "user", text: userInput }];
    setChatMessages(newMessages);
    setUserInput("");

    // 챗봇 응답 (추후 백엔드 연결 가능)
    setTimeout(() => {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "이해했어요! 더 도와드릴까요?" },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* 챗봇 열기 버튼 */}
      <Button
        icon="pi pi-comments"
        className="p-button-rounded p-button-secondary chatbot-button"
        style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}
        onClick={() => setChatOpen(!chatOpen)}
      />

      {/* 챗봇 창 */}
      {chatOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>ChatBot</h3>
            <Button icon="pi pi-times" className="p-button-text" onClick={() => setChatOpen(false)} />
          </div>

          {/* 채팅 메시지 영역 */}
          <ScrollPanel ref={scrollRef} className="chatbot-messages">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                <div className="chat-bubble">{msg.text}</div>
              </div>
            ))}
          </ScrollPanel>

          {/* 입력창 */}
          <div className="chatbot-input">
            <InputText
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="메시지를 입력하세요..."
              className="w-full"
            />
            <Button label="전송" icon="pi pi-send" className="p-button-primary" onClick={sendMessage} />
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;