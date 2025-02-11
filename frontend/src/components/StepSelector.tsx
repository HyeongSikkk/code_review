import React, { useState } from "react";
import { Button } from "primereact/button";

const StepSelector: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<"step1" | "step2" | null>(null);

  return (
    <div className="flex flex-column gap-2">
      <Button 
        label="Step 1" 
        className={`p-button-sm w-8rem ${selectedStep === "step2" ? "p-disabled" : ""}`} 
        onClick={() => setSelectedStep("step1")} 
      />
      <Button 
        label="Step 2" 
        className={`p-button-sm w-8rem ${selectedStep === "step1" ? "p-disabled" : ""}`} 
        onClick={() => setSelectedStep("step2")} 
      />
    </div>
  );
};

export default StepSelector;
