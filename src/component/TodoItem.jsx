import React, { Component } from "react";
import { deleteTodo, updateTodo } from "../apis/todos";
import { Button, Row, Col } from "antd";

class TodoItem extends Component {
  toggleDone = () => {
    updateTodo(this.props.todoItem.id, this.props.todoItem).then(() => {
      this.props.updateTodoItem(this.props.todoItem.id);
    });
  };

  handleClick = () => {
    deleteTodo(this.props.todoItem.id).then(() => {
      this.props.deleteTodoItem(this.props.todoItem.id);
    });
  };

  render() {
    // todo use css file
    const { done, text } = this.props.todoItem;
    return (
      <div
        style={{
          width: "100%",
          textDecoration: done ? "line-through" : "none",
        }}
      >
        <Row>
          <Col span={20}>
            <span onClick={this.toggleDone}>{text}</span>
          </Col>
          <Col span={4}>
            <Button danger type="primary" onClick={this.handleClick}>
              X
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TodoItem;
