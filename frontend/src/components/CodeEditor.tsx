import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { EditorView } from "@codemirror/view";

// ✅ White 테마 직접 정의
const whiteTheme = EditorView.theme({
  "&": { backgroundColor: "white", color: "black" },
  ".cm-content": { caretColor: "black" },
  "&.cm-focused .cm-cursor": { borderLeftColor: "black" },
  "&.cm-focused .cm-selectionBackground, ::selection": { backgroundColor: "#d0d0d0" },
});

// ✅ `props` 추가: `code` 상태를 부모 컴포넌트 (`ReviewPage.tsx`)에서 관리하도록 설정
interface CodeEditorProps {
  code: string;
  setCode: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, setCode }) => {
  return (
    <CodeMirror
      value={code}
      onChange={(value) => setCode(value)} // ✅ 부모 컴포넌트의 상태를 업데이트
      extensions={[javascript(), whiteTheme]}
      basicSetup={{ lineNumbers: true }}
      style={{ 
        height: "350px",
        fontSize: "14px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        backgroundColor: "#ffffff",
        padding: "10px"
      }}
    />
  );
};

export default CodeEditor;
