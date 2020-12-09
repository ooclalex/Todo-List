import React, { Component } from "react";
import TodoItemContainer from "../container/TodoItemContainer";
import {getTodoList} from "../apis/todos";

class TodoGroup extends Component {

    // addTodoItem = () => {
  //   addNewTodo(this.state.text).then((response) => {
  //     this.props.addTodo(this.state.text);
  //   })
  // }
  componentDidMount() {
    getTodoList().then((response) => {
      this.props.initTodos(response.data);
    })
  }

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
