import React, { Component } from 'react';

class Console extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1,
            currentLine: 'CurrentLine',
            consoleHistory: []
        }
    }

    addLine(line) {
        this.setState(state => ({ index: (state.index + 1), currentLine: line, history: [state.history, state.currentLine] }));
    }

    render() {
        return(
            <div>
                <label htmlFor="Console">Console</label>
            </div>
        )
    }

}

export default Console;