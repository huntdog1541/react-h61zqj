import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import CodeEditor from './CodeEditor';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="App">
      <div>
        <h2>Monaco Editor</h2>
        <div className="code-editor">
          <CodeEditor />
        </div>

      </div>
      <div>
        <Console />
      </div>
    </div>
    );
  }
}

render(<App />, document.getElementById('root'));
