import { useState } from "react";
import Editor from "@monaco-editor/react";
import React from "react";

const CodeEditor = ({ onChange, language, code, theme, read }) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };
  
  return (
    <div className="mix-blend-overlay rounded-md overflow-hidden w-full h-full shadow-2xl" >
      <Editor
        height="85vh"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultVlaue="// some comment"
        onChange={handleEditorChange}
        options={{readOnly: read}}
      />
    </div>
  );
};

export default CodeEditor;
