import React, { Component } from 'react';
import TodoGeneratorContainer from '../container/TodoGeneratorContainer';
import TodoGroupContainer from '../container/TodoGroupContainer';

class TodoList extends Component {
    render() {
        return (
            <div style={{"border":"solid", width: "800px"}}>
                <h1>TodoList</h1>
                <TodoGroupContainer />
                <TodoGeneratorContainer />
            </div>
        );
    }
}

export default TodoList;