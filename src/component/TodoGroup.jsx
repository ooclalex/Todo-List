import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoGroup extends Component {
  render() {
    const { todoItemList } = this.props;
    return (
      <div>
        {todoItemList.map((todoItem) => (
          <TodoItem todoItem={todoItem} key={todoItem.id} />
        ))}
      </div>
    );
  }
}

export default TodoGroup;
