import React from "react";
import { useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";

const Home = () => {
  const [content, setContent] = useState(`
    <!-- welcome email template -->

<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
      }
      .container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
      }
      .header {
        background-color: #000000;
        padding: 20px;
        text-align: center;
        color: white;
      }
      .content {
        padding: 20px;
      }
      .footer {
        padding: 10px;
        text-align: center;
        font-size: 12px;
        color: #888;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Welcome to [Brand]</h1>
      </div>
      <div class="content">
        <p>Hi [User Name],</p>
        <p>
          Thank you for joining [Brand]! We are thrilled to have you on board.
        </p>
        <p>
          Feel free to explore our services and let us know if you have any
          questions.
        </p>
        <a
          href="[YourWebsiteLink]"
          style="
            background-color: #000000;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
          "
          >Get Started</a
        >
      </div>
      <div class="footer">
        <p>&copy; 2024 [Brand]. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>
`);

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
