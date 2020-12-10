import React, { Component } from "react";
import { Button, Input, Row, Col } from "antd";
import { createNewTag } from "../apis/todos";

class TagGenerator extends Component {
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
    const color = prompt("Choose a color: ");
    if (this.state.text !== "") {
      createNewTag(this.state.text, color).then((response) => {
        this.props.addTagItem(response.data);
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
              placeholder="Input a new tag here..."
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

export default TagGenerator;
