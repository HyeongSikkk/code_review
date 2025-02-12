import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FileUpload } from "primereact/fileupload";

interface UrlOrFileUploaderProps {
  setInputSource: React.Dispatch<React.SetStateAction<"url" | "image">>; // ✅ Props 추가
  setInputData: React.Dispatch<React.SetStateAction<string>>;
}

const UrlOrFileUploader: React.FC<UrlOrFileUploaderProps> = ({ setInputSource, setInputData }) => {
  const [activeInput, setActiveInput] = useState<"url" | "file" | null>(null);
  const [url, setUrl] = useState("");

  // ✅ URL 입력 시 부모 컴포넌트에 데이터 전달
  const handleUrlSubmit = () => {
    setInputSource("url");
    setInputData(url);
  };

  return (
    <div className="flex flex-column align-items-center gap-2">
      {/* 버튼 그룹 (크기 조정) */}
      <div className="flex gap-2">
        <Button 
          label="URL 입력" 
          icon="pi pi-link" 
          onClick={() => setActiveInput(activeInput === "url" ? null : "url")} 
          className="p-button-primary p-button-sm w-8rem"
        />
        <Button 
          label="이미지 선택" 
          icon="pi pi-image" 
          onClick={() => setActiveInput(activeInput === "file" ? null : "file")} 
          className="p-button-secondary p-button-sm w-8rem"
        />
      </div>

      {/* URL 입력 필드 (크기 조정) */}
      {activeInput === "url" && (
        <div className="flex align-items-center gap-2">
          <InputText 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
            placeholder="이미지 URL 입력" 
            className="w-16rem p-inputtext-sm"
          />
          <Button 
            label="확인" 
            icon="pi pi-check" 
            onClick={handleUrlSubmit} // ✅ URL 입력 데이터 부모로 전달
            className="p-button-success p-button-sm w-6rem"
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
          className="p-button-sm w-16rem"
          onSelect={(e) => {
            const file = e.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = () => {
                setInputSource("image");
                setInputData(reader.result as string); // ✅ 이미지 데이터 부모 컴포넌트에 전달
              };
              reader.readAsDataURL(file);
            }
          }}
        />
      )}
    </div>
  );
};

export default UrlOrFileUploader;