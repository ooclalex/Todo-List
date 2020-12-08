import React, { Component } from "react";

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
    console.log(this.props);
    this.props.addTodoItem(this.state.text);
    event.preventDefault();
    this.setState({text: ""});
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
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
