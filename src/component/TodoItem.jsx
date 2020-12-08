import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
    };
  }

  handleClick = (event) => {
    console.log(this.props);
    this.props.updateTodoItem(this.props.todoItem.id);
  };

  render() {
    const { done, text } = this.props.todoItem;
    return (
      <div onClick={this.handleClick}>
        <span>{text}</span>
        <button>X</button>
      </div>
    );
  }
}

export default TodoItem;
