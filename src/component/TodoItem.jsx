import React, { Component } from "react";
import { deleteTodo } from "../apis/todos";

class TodoItem extends Component {
  toggleDone = () => {
    this.props.updateTodoItem(this.props.todoItem.id);
  };

  handleClick = () => {
    deleteTodo(this.props.todoItem.id).then(() => {
      this.props.deleteTodoItem(this.props.todoItem.id);
    })
  }

  render() {
    // todo use css file
    const { done, text } = this.props.todoItem;
    return (
      <div style={{backgroundColor: "white",
        color: "black",
        margin: "10px",
        textDecoration: done ? "line-through" : "none"}} 
        >
        <span onClick={this.toggleDone}>{text}</span>
        <button onClick={this.handleClick}>X</button>
      </div>
    );
  }
}

export default TodoItem;
