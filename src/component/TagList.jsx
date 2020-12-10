import React, { Component } from "react";
import { Card } from "antd";
import TagGeneratorContainer from "../container/TagGeneratorContainer";

class TagList extends Component {
  render() {
    return (
      <div>
        <Card title="TagList">
          <TagGeneratorContainer />
        </Card>
      </div>
    );
  }
}

export default TagList;
