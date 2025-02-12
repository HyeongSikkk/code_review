import axios from "axios";

const API_URL = "https://virtserver.swaggerhub.com/TNSTKD98/Algo_Reivew/1.0.0/api/v1/review";

// ✅ 코드 리뷰 요청 (POST 요청을 한 번만 실행)
export const sendReviewRequest = async (data: any) => {
  try {
    const response = await axios.post(API_URL, data, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("📡 API Response:", response.data);
    return response.data; // ✅ 전체 응답 데이터 반환 (history_id, problem_info, reviews 포함)
  } catch (error) {
    console.error("❌ Error sending review request:", error.response?.data || error.message);
    throw error;
  }
};
export default sendReviewRequest;


// import axios from "axios";

//  ✅ 리뷰 데이터를 가져오는 API 함수
// export const fetchReviews = async () => {
//     try {
//         const response = await axios.post("http://222.100.174.159:25565/api/v1/review"); // 📌 실제 API 주소로 변경
//         return response.data.reviews.map((review: any) => ({
//             header: review.title,
//             children: review.comments.replace(/\n/g, "<br />"), // ✅ 개행 문자 처리
//         }));
//     } catch (error) {
//         console.error("Error fetching reviews:", error.response?.data || error.message);
//         return [];
//     }
// };
