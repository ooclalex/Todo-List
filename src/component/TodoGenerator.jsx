import React, { Component } from "react";

class TodoGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  handleSubmit = (event) => {
    this.props.addTodoItem(this.state.message);
    event.preventDefault();
    this.setState({message: ""});
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.message}
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
