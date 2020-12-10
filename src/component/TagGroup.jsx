import React, { Component } from "react";
import TagItemContainer from "../container/TagItemContainer";
import { List } from "antd";
import { getTagList } from "../apis/todos";

class TagGroup extends Component {
  componentDidMount() {
    getTagList().then((response) => {
      this.props.initTags(response.data);
    });
  }

  renderListItem(tagItem) {
    return (
      <List.Item key={tagItem.id}>
        <TagItemContainer tagItem={tagItem} />
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
