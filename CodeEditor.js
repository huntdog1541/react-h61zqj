import React from 'react';
import MonacoEditor from 'react-monaco-editor';

class CodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "// type your code ...\n",
      theme: "vs-light"
    };
  }

  editorDidMount = editor => {
    console.log("editorDidMount", editor, editor.getValue(), editor.getModel());
    this.editor = editor;
  };

  render() {
    const { code, theme } = this.state;
    const options = {
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      cursorStyle: "line",
      automaticLayout: false
    };
    return (
        <div>
          <div>
            <MonacoEditor
                height="400"
                language="javascript"
                value={code}
                options={options}
                onChange={this.onChange}
                editorDidMount={this.editorDidMount}
                theme={theme}
            />
          </div>
        </div>
    );
  }
}

export default CodeEditor;