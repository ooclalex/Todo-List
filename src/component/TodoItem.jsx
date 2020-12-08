import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        const {status, message} = this.props.todoItem;
        return (
            <div>
                <span>{message}</span>
                <button>X</button>
            </div>
        );
    }
}

export default TodoItem;