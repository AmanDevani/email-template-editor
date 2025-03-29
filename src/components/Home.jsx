import React from "react";
import { useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";

const Home = () => {
  const [content, setContent] = useState("<h1>Hello, Monaco Editor!</h1>");
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      doc.open();
      doc.write(content);
      doc.close();
    }
  }, [content]);
  return (
    <div className="editor-container">
      {/* Monaco Editor Section */}
      <div className="editor">
        <Editor
          height="100%"
          defaultLanguage="html"
          theme="vs-dark"
          defaultValue={content}
          onChange={(value) => setContent(value)}
        />
      </div>

      {/* Live Preview Section */}
      <div className="preview">
        <iframe ref={iframeRef} title="Live Preview" />
      </div>
    </div>
  );
};

export default Home;
