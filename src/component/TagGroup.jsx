import React, { Component } from 'react';
import TagItemContainer from "../container/TagItemContainer";
import { List } from "antd";

class TagGroup extends Component {
    renderListItem(todoItem) {
        return (
          <List.Item key={todoItem.id}>
            <TagItemContainer todoItem={todoItem} />
          </List.Item>
        );
      }
    render() {
        const { tagItemList } = this.props;
        return (
            <div>
                <List dataSource={tagItemList} renderItem={this.renderListItem} />
            </div>
        );
    }
}

export default TagGroup;