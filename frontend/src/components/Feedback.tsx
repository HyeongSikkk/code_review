import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Chatbot from './Chatbot';

export default function BasicDemo() {
    return (
        <div className="card">
            <TabView>
                <TabPanel header="리뷰 상세">
                <div className="card">
                <Accordion activeIndex={0}>
                    <AccordionTab header="tittle I">
                        <p className="m-0">
                            content 1 
                            <Chatbot />
                        </p>
                    </AccordionTab>
                    <AccordionTab header="tittle II">
                        <p className="m-0">
                            content2
                        </p>
                    </AccordionTab>
                    <AccordionTab header="tittle III">
                        <p className="m-0">
                            content3
                        </p>
                    </AccordionTab>
                </Accordion>
                </div>
                </TabPanel>

                <TabPanel header="모범답안">
                    <p className="m-0">
                        solution
                    </p>
                </TabPanel>
            </TabView>
        </div>
    )
}
        