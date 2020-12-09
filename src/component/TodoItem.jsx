import "./TodoItem.css";
import React, { Component } from "react";
import { deleteTodo, updateTodo } from "../apis/todos";
import { Button, Row, Col } from "antd";

class TodoItem extends Component {
  toggleDone = () => {
    updateTodo(this.props.todoItem.id, this.props.todoItem).then(() => {
      this.props.updateTodoItem(this.props.todoItem.id);
    });
  };

  handleDeleteClick = () => {
    deleteTodo(this.props.todoItem.id).then(() => {
      this.props.deleteTodoItem(this.props.todoItem.id);
    });
  };

  handleAddTag = () => {
    const tagName = prompt("Please enter the tag: ");
    console.log(tagName);
  }

  render() {
    const { done, text } = this.props.todoItem;
    return (
      <div
        class="TodoItem-Item"
        style={{ textDecoration: done ? "line-through" : "none" }}
      >
        <Row>
          <Col span={16}>
            <span onClick={this.toggleDone}>{text}</span>
          </Col>
          <Col span={4}>
            <Button type="primary" onClick={this.handleAddTag}>
              + Tag
            </Button>
          </Col>
          <Col span={4}>
            <Button danger type="primary" onClick={this.handleDeleteClick}>
              X
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TodoItem;
