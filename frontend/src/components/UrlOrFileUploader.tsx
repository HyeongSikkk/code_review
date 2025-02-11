import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FileUpload } from "primereact/fileupload";

const UrlOrFileUploader: React.FC = () => {
  const [activeInput, setActiveInput] = useState<"url" | "file" | null>(null);
  const [url, setUrl] = useState("");

  return (
    <div className="flex flex-column align-items-center gap-2">
      {/* 버튼 그룹 (크기 조정) */}
      <div className="flex gap-2">
        <Button 
          label="URL 입력" 
          icon="pi pi-link" 
          onClick={() => setActiveInput(activeInput === "url" ? null : "url")} 
          className="p-button-primary p-button-sm w-8rem" // ✅ 크기 조정
        />
        <Button 
          label="이미지 선택" 
          icon="pi pi-image" 
          onClick={() => setActiveInput(activeInput === "file" ? null : "file")} 
          className="p-button-secondary p-button-sm w-8rem" // ✅ 크기 조정
        />
      </div>

      {/* URL 입력 필드 (크기 조정) */}
      {activeInput === "url" && (
        <div className="flex align-items-center gap-2">
          <InputText 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
            placeholder="이미지 URL 입력" 
            className="w-16rem p-inputtext-sm" // ✅ 크기 조정
          />
          <Button 
            label="확인" 
            icon="pi pi-check" 
            className="p-button-success p-button-sm w-6rem" // ✅ 크기 조정
          />
        </div>
      )}

      {/* 파일 업로드 컴포넌트 (크기 조정) */}
      {activeInput === "file" && (
        <FileUpload 
          mode="basic" 
          chooseLabel="파일 선택" 
          accept="image/*" 
          customUpload={true}
          className="p-button-sm w-16rem" // ✅ 크기 조정
        />
      )}
    </div>
  );
};

export default UrlOrFileUploader;
