import React, { useState, useEffect } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Accordion, AccordionTab } from "primereact/accordion";
import { fetchReviews } from "../api/FeedbackApi"; // ✅ API 파일에서 함수 가져오기

const Feedback: React.FC = () => {
    const [reviews, setReviews] = useState<{ header: string; children: string }[]>([]);

    // ✅ API 호출 및 데이터 업데이트
    useEffect(() => {
        const getReviews = async () => {
            const data = await fetchReviews();
            setReviews(data);
        };
        getReviews();
    }, []);

    return (
        <div className="card">
            <TabView>
                <TabPanel header="리뷰 상세">
                    <div className="card">
                        {/*리뷰상세에 대한 서버 응답 동적 렌더링*/}
                        <Accordion> 
                            {reviews.length > 0 ? (
                                reviews.map((tab, i) => (
                                    <AccordionTab key={i} header={tab.header}>
                                        <p dangerouslySetInnerHTML={{ __html: tab.children }}></p>
                                    </AccordionTab>
                                ))
                            ) : (
                                <p>Loading...</p>
                            )}
                        </Accordion>
                    </div>
                </TabPanel>

                <TabPanel header="모범답안">
                    <p className="m-0">solution</p>
                </TabPanel>
            </TabView>
        </div>
    );
};

export default Feedback;



// import React, { useState } from 'react';
// import { TabView, TabPanel } from 'primereact/tabview';
// import { Accordion, AccordionTab } from 'primereact/accordion';
// import Chatbot from './Chatbot';


// export default function BasicDemo() {
//     const [tabs] = useState([
//         {
//             header: 'Title I',
//             children: <p className="m-0">Content 1</p>
//         },
//         {
//             header: 'Title II',
//             children: <p className="m-0">Content 2 </p>
//         },
//         {
//             header: 'Title III',
//             children: <p className="m-0">Content 3 </p>
//         }
//     ]);

//     const createDynamicTabs = () => {
//         return tabs.map((tab, i) => {
//             return (
//                 <AccordionTab key={tab.header} header={tab.header} disabled={tab.disabled}>
//                     {tab.children}
//                 </AccordionTab>
//             );
//         });
//     };



//     return (
//         <div className="card">
//             <TabView>
//                 <TabPanel header="리뷰 상세">
//                     <div className="card">
//                     <Accordion>{createDynamicTabs()}</Accordion>
//                     </div>
//                 </TabPanel>

//                 <TabPanel header="모범답안">
//                     <p className="m-0">
//                         solution
//                     </p>
//                 </TabPanel>
//             </TabView>
//         </div>
//     )
// }
        