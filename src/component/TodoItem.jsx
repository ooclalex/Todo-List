import "../css/TodoItem.css";
import React, { Component } from "react";
import { deleteTodo, updateTodo, updateTodoAddTag } from "../apis/todos";
import { Button, Row, Col, Select } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";
import { getTagList } from "../apis/todos";

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
    // const inputTag = prompt("Please enter the tag: ");
    // const inputColor = prompt("Please enter color: ");
    // if (inputTag !== "") {
    //   updateTodoAddTag(
    //     this.props.todoItem.id,
    //     this.props.todoItem,
    //     inputTag,
    //     inputColor
    //   ).then(() => {
    //     this.props.addTag(this.props.todoItem.id, inputTag);
    //   });
    // }
  };
  getTags() {
    let tags = [];
    const { Option } = Select;
    for (let i = 0; i < this.props.tagItemList.length; i++) {
      tags.push(
        <Option key={this.props.tagItemList[i].content}>
          {this.props.tagItemList[i].content}
        </Option>
      );
    }
    return tags;
  }



  render() {
    const { done, text } = this.props.todoItem;
    const tags = this.getTags();

    function handleSelectChange(value) {
      console.log(`selected ${value}`)
    }

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
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Select tags"
              onChange={handleSelectChange}
            >
              {tags}
            </Select>
          </Col>
          <Col span={3}>
            <Button type="primary" onClick={this.handleAddTag}>
              + Tag
            </Button>
          </Col>
          <Col span={3}>
            <Button danger type="primary" onClick={this.handleDeleteClick}>
              <DeleteOutlined />
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TodoItem;
