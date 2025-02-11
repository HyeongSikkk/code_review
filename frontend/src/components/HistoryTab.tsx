import React from "react";
import { Accordion, AccordionTab } from 'primereact/accordion';
import History from "./History.tsx";

interface HistoryData {
    type: Number;
    name: String;
}

interface Props {
    data: { [key: String]: HistoryData[] };
}

function HistoryTab({ data }: Props) {
    return (
        <Accordion activeIndex={0}>
            {Object.keys(data).map((key) => (
                <AccordionTab key={key} header={key}>
                    {data[key].map((historyRow, index) => (
                        <History key={index} type={historyRow.type} name={historyRow.name} />
                    ))}
                </AccordionTab>
            ))}
        </Accordion>
    );
}

export default HistoryTab;
