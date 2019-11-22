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
                <Console index={this.state.index} line={this.state.currentLine} />
                {this.state.consoleHistory.map((index, line) =>
                    <Console index={this.state.index} line={this.state.currentLine}>
                        {this.state.index} : {this.state.currentLine}
                    </Console>
                )}
            </div>
        )
    }

}

export default Console;