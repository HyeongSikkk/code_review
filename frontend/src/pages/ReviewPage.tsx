import React, { useState } from 'react';
import '../styles/review.css';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Editor } from 'primereact/editor';
import UrlOrFileUploader from '../components/UrlOrFileUploader';
import Chatbot from '../components/Chatbot';
import { useLocation } from "react-router-dom";
import Feedback from '../components/Feedback';

const ReviewPage: React.FC = () => {
  const [code, setCode] = useState<string>(''); // 코드 입력 상태
  const [reviewResult, setReviewResult] = useState<string | null>(null); // 코드 리뷰 결과

  // 코드 리뷰 실행
  const handleReview = () => {
    console.log('Code submitted for review:', code);
    setReviewResult('✔ Code is clean and optimized! ✅'); // TODO: 백엔드 API 연동 예정
  };

  const location = useLocation();
  const userId = location.state?.userId || localStorage.getItem("user_id"); // ✅ state 없으면 localStorage에서 가져오기


  return (
    <div className="review-page">
      <div className='review-input1'>
        <div className='url-input'>
          <p>로그인한 사용자 ID: {userId}</p> {/* 제대로 됐는지 적용 시험용*/}
          <UrlOrFileUploader />
        </div>
      </div>

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
          <Feedback />
        </Card>
      </div>

      {/* 코드 검사 버튼 (아래) */}
      <div className='review-button'>
        <Button label="Run Review" icon="pi pi-search" className="p-button-lg p-button-primary review-button" onClick={handleReview} />
      </div>

      {/* 챗봇*/}
      <Chatbot /> 
    </div>
  )
};

export default ReviewPage;