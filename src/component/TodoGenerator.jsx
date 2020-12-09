import React, { Component } from "react";
import { createNewTodo } from "../apis/todos";
import { Button, Input, Row, Col } from "antd";

class TodoGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.text !== "") {
      createNewTodo(this.state.text).then((response) => {
        this.props.addTodoItem(response.data);
        this.setState({ text: "" });
      });
    }
  };

  render() {
    return (
      <div>
        <Row>
          <Col span={20}>
            <Input
              value={this.state.text}
              onChange={this.handleChange}
              placeholder="Input a new todo here..."
            />
          </Col>
          <Col span={4}>
            <Button type="primary" onClick={this.handleSubmit}>
              Add
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TodoGenerator;
