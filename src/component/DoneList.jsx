import React, { Component } from "react";
import { Card, List, Row, Col, Tag } from "antd";

class DoneList extends Component {
  renderListItem(doneItem) {
    return (
      <List.Item key={doneItem.id}>
        <div class="TodoItem-Item">
          <Row>
            <Col span={12}>{doneItem.text}</Col>
            <Col span={12}>
              {doneItem.tag.map((tagItem) => (
                <Tag>{tagItem}</Tag>
              ))}
            </Col>
          </Row>
        </div>
      </List.Item>
    );
  }
  render() {
    const { doneList } = this.props;
    return (
      <div>
        <Card bordered={false} title="DoneList" className="todo-list-card">
          {/* {doneList.map((doneItem) => (
                    <li><span>{doneItem.text}</span></li>
                ))} */}
          <List dataSource={doneList} renderItem={this.renderListItem} />
        </Card>
      </div>
    );
  }
}

export default DoneList;
