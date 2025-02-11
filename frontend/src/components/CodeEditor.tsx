import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { EditorView } from "@codemirror/view"; // ✅ White 테마 직접 생성하기 위한 import

// ✅ White 테마 직접 정의
const whiteTheme = EditorView.theme({
  "&": { backgroundColor: "white", color: "black" }, // ✅ 배경 흰색, 글씨 검정
  ".cm-content": { caretColor: "black" }, // ✅ 커서 색상 검정
  "&.cm-focused .cm-cursor": { borderLeftColor: "black" }, // ✅ 선택된 커서 색상 검정
  "&.cm-focused .cm-selectionBackground, ::selection": { backgroundColor: "#d0d0d0" }, // ✅ 선택된 텍스트 배경 회색
});

const CodeEditor: React.FC = () => {
  // ✅ 20줄의 빈 코드 초기화
  const initialCode = Array(20).fill("").join("\n");
  const [code, setCode] = useState(initialCode);

  return (
    <CodeMirror
      value={code}
      onChange={(value) => setCode(value)}
      extensions={[javascript(), whiteTheme]} // ✅ White 테마 적용
      basicSetup={{ lineNumbers: true }}
      style={{ 
        height: "350px", // ✅ 높이를 조금 키워서 20줄이 잘 보이도록
        fontSize: "14px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        backgroundColor: "#ffffff", // ✅ 완전히 흰색으로 설정
        padding: "10px" // ✅ 코드 입력창 내부 패딩 추가
      }}
    />
  );
};

export default CodeEditor;