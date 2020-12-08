import React, { Component } from "react";

class TodoItem extends Component {
  updateTodo = () => {
    console.log(this.props);
    this.props.updateTodoItem(this.props.todoItem.id);
  };

  deleteTodo = () => {
    console.log(this.props);
    this.props.deleteTodoItem(this.props.todoItem.id);
  }

  render() {
    const { done, text } = this.props.todoItem;
    return (
      <div style={{backgroundColor: "white",
        color: "black",
        margin: "10px",
        textDecoration: done ? "line-through" : "none"}} 
        onClick={this.updateTodo}>
        <span>{text}</span>
        <button onClick={this.deleteTodo}>X</button>
      </div>
    );
  }
}

export default TodoItem;
