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
    this.props.addTodoItem(this.state.text);
    event.preventDefault();
    this.setState({text: ""});
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
