import React, { useState } from "react";
import "../styles/review.css";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import UrlOrFileUploader from "../components/UrlOrFileUploader";
import CodeEditor from "../components/CodeEditor";
import { useLocation } from "react-router-dom";
import Feedback from "../components/Feedback";
import { sendReviewRequest } from "../api/ReviewRequestApi"; // ✅ 통합된 API 호출

const ReviewPage: React.FC = () => {
  const [code, setCode] = useState<string>(""); // ✅ 코드 입력 상태
  const [reviewResult, setReviewResult] = useState<any>(null); // ✅ 서버 응답 전체 저장 (history_id, problem_info, reviews 포함)
  const [inputSource, setInputSource] = useState<string | null>(null); // ✅ "url" 또는 "img"
  const [inputData, setInputData] = useState<string | null>(null); // ✅ URL 또는 Base64 인코딩된 이미지 데이터

  const location = useLocation();
  const userId = location.state?.userId || localStorage.getItem("user_id");

  // ✅ "Run Review" 버튼 클릭 시 API 요청 실행
  const handleReview = async () => {
    if (!inputSource) {
      alert("URL 또는 이미지를 선택하세요!");
      return;
    }

    if (!inputData) {
      alert("URL을 입력하거나 이미지를 업로드하세요!");
      return;
    }

    if (!code.trim()) {
      alert("소스 코드를 입력하세요!");
      return;
    }

    const requestData = {
      input_source: inputSource, // "url" 또는 "img"
      input_data: inputData, // URL 또는 Base64 인코딩된 이미지 데이터
      problem_info: null,
      source_code: code, // 사용자가 입력한 코드
      reviews: [], // 빈 리스트 (서버에서 처리)
    };

    console.log("📡 Sending Review Request:", requestData);

    try {
      const response = await sendReviewRequest(requestData);
      setReviewResult(response); // ✅ 전체 응답 데이터 저장
    } catch (error) {
      console.error("❌ Error sending review request:", error);
    }
  };

  return (
    <div className="review-page">
      <div className="review-input1">
        <div className="url-input">
          <p>로그인한 사용자 ID: {userId}</p>
          <UrlOrFileUploader setInputSource={setInputSource} setInputData={setInputData} />
        </div>
      </div>

      <div className="code-container" style={{ display: "flex" }}>
        <Card className="code-input" style={{ flex: 1, minWidth: "400px" }}>
          <h3>Enter Your Code</h3>
          <CodeEditor code={code} setCode={setCode} />
        </Card>

        <Card className="code-output">
          <Feedback reviewResult={reviewResult?.reviews || []} /> {/* ✅ 응답 데이터에서 `reviews[]`만 전달 */}
        </Card>
      </div>

      {/* ✅ "Run Review" 버튼 클릭 시 API 요청 실행 */}
      <div className="review-button">
        <Button label="Run Review" icon="pi pi-search" className="p-button-lg p-button-primary review-button" onClick={handleReview} />
      </div>
    </div>
  );
};

export default ReviewPage;
