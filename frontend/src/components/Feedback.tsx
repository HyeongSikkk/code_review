import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Accordion, AccordionTab } from "primereact/accordion";

interface FeedbackProps {
  reviewResult: { review_id: number; title: string; comments: string }[];
}

const Feedback: React.FC<FeedbackProps> = ({ reviewResult }) => {
  return (
    <div className="card">
      <TabView>
        <TabPanel header="리뷰 상세">
          <div className="card">
            <Accordion>
              {reviewResult.length > 0 ? (
                reviewResult.map((review, i) => (
                  <AccordionTab key={review.review_id} header={review.title}>
                    <p dangerouslySetInnerHTML={{ __html: review.comments.replace(/\n/g, "<br />") }}></p>
                  </AccordionTab>
                ))
              ) : (
                <p>리뷰 결과가 없습니다.</p>
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
