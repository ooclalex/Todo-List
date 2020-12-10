import "./TodoList.css";
import React, { Component } from "react";
import TodoGeneratorContainer from "../container/TodoGeneratorContainer";
import TodoGroupContainer from "../container/TodoGroupContainer";
import { Card } from "antd";

class TodoList extends Component {
  render() {
    return (
      <div class="div-class">
        <Card bordered={false} title="TodoList" className="todo-list-card">
          <TodoGroupContainer />
          <TodoGeneratorContainer />
        </Card>
      </div>
    );
  }
}

export default TodoList;
