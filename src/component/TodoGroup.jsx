import React, { Component } from "react";
import TodoItemContainer from "../container/TodoItemContainer";

class TodoGroup extends Component {
  render() {
    const { todoItemList } = this.props;
    return (
      <div>
        {todoItemList.map((todoItem) => (
          <TodoItemContainer todoItem={todoItem} key={todoItem.id} />
        ))}
      </div>
    );
  }
}

export default TodoGroup;
