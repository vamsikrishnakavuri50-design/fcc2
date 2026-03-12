import { marked } from "marked";

marked.setOptions({
  breaks: true
});
import { useState } from "react";
import "./App.css";

const defaultMarkdown = `# Heading (H1)

## Sub Heading (H2)

[Visit Google](https://google.com)

Inline code: \`console.log("Hello")\`

\`\`\`
function hello(){
  return "Hello World";
}
\`\`\`

- List Item

> This is a blockquote

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

**Bold Text**
`;

function App() {
  const [text, setText] = useState(defaultMarkdown);

  return (
    <div className="container">

      <h1>Markdown Previewer</h1>

      <textarea
        id="editor"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      />

    </div>
  );
}

export default App;