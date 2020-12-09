import React, { Component } from "react";
import { createNewTodo } from "../apis/todos";

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
    createNewTodo(this.state.text).then((response) => {
      this.props.addTodoItem(response.data);
      this.setState({text: ""});
    })
  };



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            style={{"width": "90%",
          padding: "20px 10px",
          margin: "8px 0",}}
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="input a new todo here..."
          ></input>
          <button type="submit">
            add
          </button>
        </form>
      </div>
    );
  }
}

export default TodoGenerator;
