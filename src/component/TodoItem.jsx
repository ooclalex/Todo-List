import React, { Component } from "react";

class TodoItem extends Component {
  handleClick = (event) => {
    console.log(this.props);
    this.props.updateTodoItem(this.props.todoItem.id);
  };

  deleteTodo = (event) => {
    console.log(this.props);
    this.props.deleteTodoItem(this.props.todoItem.id);
  }

  render() {
    const { done, text } = this.props.todoItem;
    return (
      <div onClick={this.handleClick}>
        <span>{text}</span>
        <button onClick={this.deleteTodo}>X</button>
      </div>
    );
  }
}

export default TodoItem;
