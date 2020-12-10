import React, { Component } from "react";
import { Card } from "antd";
import TagGeneratorContainer from "../container/TagGeneratorContainer";
import TagGroupContainer from "../container/TagGroupContainer";

class TagList extends Component {
  render() {
    return (
      <div>
        <Card title="TagList">
          <TagGroupContainer />
          <TagGeneratorContainer />
        </Card>
      </div>
    );
  }
}

export default TagList;
