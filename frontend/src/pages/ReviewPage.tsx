import React, { useState } from 'react';
import '../styles/review.css';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Editor } from 'primereact/editor';
import UrlOrFileUploader from '../components/UrlOrFileUploader';
import StepSelector from '../components/StepSelector';
import { InputText } from 'primereact/inputtext';
import { ScrollPanel } from 'primereact/scrollpanel';


const ReviewPage: React.FC = () => {
  const [code, setCode] = useState<string>(''); // 코드 입력 상태
  const [reviewResult, setReviewResult] = useState<string | null>(null); // 코드 리뷰 결과
  const [chatOpen, setChatOpen] = useState<boolean>(false); // 챗봇 토글 상태
  const [chatMessages, setChatMessages] = useState<{ sender: string; text: string }[]>([]); // 채팅 메시지 상태
  const [userInput, setUserInput] = useState<string>(''); // 사용자 입력 상태

  // 코드 리뷰 실행
  const handleReview = () => {
    console.log('Code submitted for review:', code);
    setReviewResult('✔ Code is clean and optimized! ✅'); // TODO: 백엔드 API 연동 예정
  };
  // 챗봇 메시지 전송 핸들러
  const sendMessage = () => {
    if (userInput.trim() === '') return;
    
    const newMessages = [...chatMessages, { sender: 'user', text: userInput }];
    setChatMessages(newMessages);
    setUserInput('');

    // 챗봇 응답 (추후 백엔드 연결 가능)
    setTimeout(() => {
      setChatMessages(prevMessages => [...prevMessages, { sender: 'bot', text: '이해했어요! 더 도와드릴까요?' }]);
    }, 1000);
  };



  return (
    <div className="review-page">
      <div className='review-input1'>
        <div className='url-input'>
          <UrlOrFileUploader />
        </div>
        <div className='step-input'>
          <StepSelector />
        </div>
        
      </div>

      {/* ✅ 코드 입력과 결과를 가로로 배치 */}
      <div className="code-container" style={{ display: "flex" }}>
        {/* 코드 입력 (왼쪽) */}
        <Card className="code-input">
          <h3>Enter Your Code</h3>
          <Editor 
            value={code} 
            onTextChange={(e) => setCode(e.htmlValue || '')} 
            style={{ height: '200px' }} 
          />
        </Card>

        {/* 코드 출력 (오른쪽) */}
        <Card className="code-output">
          <h3>Review Result</h3>
          <p>{reviewResult ? reviewResult : "Run code review to see results."}</p>
        </Card>
      </div>

      {/* 코드 검사 버튼 (아래) */}
      <div className='review-button'>
      <Button label="Run Review" icon="pi pi-search" className="p-button-lg p-button-primary review-button" onClick={handleReview} />
      </div>
      {/* ✅ 챗봇 버튼 (우측 하단) */}
      <Button 
        icon="pi pi-comments" 
        className="p-button-rounded p-button-secondary chatbot-button"
        style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}
        onClick={() => setChatOpen(!chatOpen)}
      />

      {/* ✅ 챗봇 대화창 (화면이 어두워지지 않도록 Dialog 대신 div 사용) */}
      {chatOpen && (
        <div 
          className="chatbot-window"
          style={{
            position: 'fixed',
            top: '50px',
            left: '50px',
            width: '300px',
            height: '400px',
            backgroundColor: 'white',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            padding: '10px',
            zIndex: 1001
          }}
        >
          <div className="chatbot-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <h3>ChatBot</h3>
            <Button icon="pi pi-times" className="p-button-text" onClick={() => setChatOpen(false)} />
          </div>

          {/* 채팅 메시지 영역 */}
          <ScrollPanel style={{ width: '100%', height: '300px', padding: '5px', border: '1px solid #ddd' }}>
            {chatMessages.map((msg, index) => (
              <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left', marginBottom: '5px' }}>
                <div 
                  style={{
                    display: 'inline-block',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    backgroundColor: msg.sender === 'user' ? '#007ad9' : '#ddd',
                    color: msg.sender === 'user' ? 'white' : 'black'
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </ScrollPanel>

          {/* 입력 필드 */}
          <div style={{ display: 'flex', marginTop: '10px' }}>
            <InputText 
              value={userInput} 
              onChange={(e) => setUserInput(e.target.value)} 
              style={{ flexGrow: 1, marginRight: '5px' }} 
              placeholder="Type a message..."
            />
            <Button icon="pi pi-send" className="p-button-primary" onClick={sendMessage} />
          </div>
        </div>
      )}
    </div>
  );
};




export default ReviewPage;