import React, { Component } from "react";
import TodoItemContainer from "../container/TodoItemContainer";
import {getTodoList} from "../apis/todos";
import { List } from "antd";

class TodoGroup extends Component {
  componentDidMount() {
    getTodoList().then((response) => {
      this.props.initTodos(response.data);
    })
  }

  renderListItem(todoItem) {
    return <List.Item key={todoItem.id}><TodoItemContainer todoItem={todoItem}  /></List.Item>
  }

  render() {
    const { todoItemList } = this.props;
    return (
      <div>
        <List dataSource={todoItemList} renderItem={this.renderListItem} />
      </div>
    );
  }
}

export default TodoGroup;
