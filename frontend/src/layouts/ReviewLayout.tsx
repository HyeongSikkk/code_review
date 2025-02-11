import React, { ReactNode } from 'react';
import Header from '../components/Header';
import '../styles/global.css';
import CustomSidebar from '../components/CustomSidebar';
import HistoryTab from '../components/HistoryTab';

interface ReviewLayoutProps {
  children: ReactNode;
}
const dataList= {
  "소수찾기": [
    {
      "type": 1,
      "name": "알고리즘 풀이",
    },
    {
      "type": 1,
      "name": "알고리즘 풀이 2차",
    },
    {
      "type": 2,
      "name": "최적화 방법",
    }
  ],
  "짝수찾기": [
    {
      "type": 2,
      "name": "최적화 방법",
    },
  ],
  "dfs 응용": [
    {
      "type": 1,
      "name": "완전 멘붕...",
    },
    {
      "type": 2,
      "name": "그치만 해냈쥬?ㅋㅋ"
    },
  ],
};
const ReviewLayout: React.FC<ReviewLayoutProps> = ({ children }) => {
  return (
    <div className="review-layout">
      <Header>
        <CustomSidebar><HistoryTab data={dataList} /></CustomSidebar>
      </Header>
      <main className="review-content">
        {children}
      </main>
    </div>
  );
};

export default ReviewLayout;
