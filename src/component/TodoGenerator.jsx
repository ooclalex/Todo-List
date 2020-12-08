import React, { Component } from 'react';

class TodoGenerator extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="input a new todo here..."></input>
                <button>add</button>
            </div>
        );
    }
}

export default TodoGenerator;