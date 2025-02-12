import axios from "axios";

// ✅ 리뷰 데이터를 가져오는 API 함수
export const fetchReviews = async () => {
    try {
        const response = await axios.post("https://virtserver.swaggerhub.com/TNSTKD98/Algo_Reivew/1.0.0/api/v1/review"); // 📌 실제 API 주소로 변경
        return response.data.reviews.map((review: any) => ({
            header: review.title,
            children: review.comments.replace(/\n/g, "<br />"), // ✅ 개행 문자 처리
        }));
    } catch (error) {
        console.error("Error fetching reviews:", error.response?.data || error.message);
        return [];
    }
};
