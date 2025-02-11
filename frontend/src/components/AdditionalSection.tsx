
import React, { useRef } from "react";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "primereact/button";

export default function BasicDemo() {
  const stepperRef = useRef<Stepper | null>(null);

  return (
    <div className="card flex justify-content-center">
      <Stepper ref={stepperRef} style={{ maxWidth: "50rem", width: "100%" }}>
        <StepperPanel header="Header I">
          <div className="flex justify-content-center align-items-center border-2 border-dashed surface-border border-round surface-ground min-h-12rem font-medium">
            Content I
          </div>
          <div className="flex pt-4 justify-content-end">
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current?.nextCallback()} />
          </div>
        </StepperPanel>
        <StepperPanel header="Header II">
          <div className="flex justify-content-center align-items-center border-2 border-dashed surface-border border-round surface-ground min-h-12rem font-medium">
            Content II
          </div>
          <div className="flex pt-4 justify-content-between">
            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current?.prevCallback()} />
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current?.nextCallback()} />
          </div>
        </StepperPanel>
        <StepperPanel header="Header III">
          <div className="flex justify-content-center align-items-center border-2 border-dashed surface-border border-round surface-ground min-h-12rem font-medium">
            Content III
          </div>
          <div className="flex pt-4 justify-content-start">
            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current?.prevCallback()} />
          </div>
        </StepperPanel>
      </Stepper>
    </div>
  );
}

        