import React, { Component } from 'react';
import TodoGeneratorContainer from '../container/TodoGeneratorContainer';
import TodoGroupContainer from '../container/TodoGroupContainer';

class TodoList extends Component {
    render() {
        return (
            <div>
                <span>TodoList</span>
                <TodoGroupContainer />
                <TodoGeneratorContainer />
            </div>
        );
    }
}

export default TodoList;