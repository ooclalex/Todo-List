import "../css/TodoItem.css";
import React, { Component } from "react";
import { deleteTodo, updateTodo, updateTodoAddTag } from "../apis/todos";
import { Button, Row, Col, Tag } from "antd";
import Label from "./TagItem";

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
    const inputTag = prompt("Please enter the tag: ");
    const inputColor = prompt("Please enter color: ");
    if (inputTag !== "") {
      updateTodoAddTag(
        this.props.todoItem.id,
        this.props.todoItem,
        inputTag,
        "red"
      ).then(() => {
        this.props.addTag(this.props.todoItem.id, inputTag);
      });
    }
  };

  render() {
    const { done, text } = this.props.todoItem;
    return (
      <div
        class="TodoItem-Item"
        style={{ textDecoration: done ? "line-through" : "none" }}
      >
        <Row>
          <Col span={12}>
            <span onClick={this.toggleDone}>{text}</span>
          </Col>
          <Col span={6}>
            {/* {this.props.todoItem.tag.map((tagItem) => (
              <Tag>{tagItem}</Tag>
            ))} */}
            <Label content={"abc"} color={"red"}></Label>
          </Col>
          <Col span={3}>
            <Button type="primary" onClick={this.handleAddTag}>
              + Tag
            </Button>
          </Col>
          <Col span={3}>
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
